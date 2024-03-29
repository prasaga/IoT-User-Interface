/**
 * Roster Plugin
 * Allow easily roster management
 *
 *  Features
 *  * Get roster from server
 *  * handle presence
 *  * handle roster iq
 *  * subscribe/unsubscribe
 *  * authorize/unauthorize
 *  * roster versioning (xep 237)
 */
Strophe.addConnectionPlugin('roster',
{
    /** Function: init
     * Plugin init
     *
     * Parameters:
     *   (Strophe.Connection) conn - Strophe connection
     */
    init: function(conn)
    {
        this._connection = conn;
        this._callbacks = [];
        this._callbacks_request = [];

        /** Property: items
         * Roster items
         * [
         *    {
         *        name         : "",
         *        jid          : "",
         *        subscription : "",
         *        ask          : "",
         *        groups       : ["", ""],
         *        resources    : {
         *            myresource : {
         *                show   : "",
         *                status : "",
         *                priority : ""
         *            }
         *        }
         *    }
         * ]
         */
        var items = [];

        /** Property: ver
         * current roster revision
         * always null if server doesn't support xep 237
         */
        var ver = null;

        // Override the connect and attach methods to always add presence and roster handlers.
        // They are removed when the connection disconnects, so must be added on connection.
        var oldCallback, roster = this, _connect = conn.connect, _attach = conn.attach;
        var newCallback = function(status)
        {
            if (status == Strophe.Status.ATTACHED || status == Strophe.Status.CONNECTED)
            {
                try
                {
                    // Presence subscription
                    conn.addHandler(roster._onReceivePresence.bind(roster), null, 'presence', null, null, null);
                    conn.addHandler(roster._onReceiveIQ.bind(roster), Strophe.NS.ROSTER, 'iq', "set", null, null);
                }
                catch (e)
                {
                    Strophe.error(e);
                }
            }
            if (typeof oldCallback === "function") {
                oldCallback.apply(this, arguments);
            }
        };
        conn.connect = function(jid, pass, callback, wait, hold, route, authcid)
        {
            oldCallback = callback;
            if (typeof jid  == "undefined")
                jid  = null;
            if (typeof pass == "undefined")
                pass = null;
            callback = newCallback;
            _connect.apply(conn, [jid, pass, callback, wait, hold, route, authcid]);
        };
        conn.attach = function(jid, sid, rid, callback, wait, hold, wind)
        {
            oldCallback = callback;
            if (typeof jid == "undefined")
                jid = null;
            if (typeof sid == "undefined")
                sid = null;
            if (typeof rid == "undefined")
                rid = null;
            callback = newCallback;
            _attach.apply(conn, [jid, sid, rid, callback, wait, hold, wind]);
        };

        Strophe.addNamespace('ROSTER_VER', 'urn:xmpp:features:rosterver');
        Strophe.addNamespace('NICK', 'http://jabber.org/protocol/nick');
    },
    /** Function: supportVersioning
     * return true if roster versioning is enabled on server
     */
    supportVersioning: function()
    {
        return (this._connection.features && this._connection.features.getElementsByTagName('ver').length > 0);
    },
    /** Function: get
     * Get Roster on server
     *
     * Parameters:
     *   (Function) userCallback - callback on roster result
     *   (String) ver - current rev of roster
     *      (only used if roster versioning is enabled)
     *   (Array) items - initial items of ver
     *      (only used if roster versioning is enabled)
     *     In browser context you can use sessionStorage
     *     to store your roster in json (JSON.stringify())
     */
    get: function(userCallback, ver, items)
    {
        var attrs = {xmlns: Strophe.NS.ROSTER};
        this.items = [];
        if (this.supportVersioning())
        {
            // empty rev because i want an rev attribute in the result
            attrs.ver = ver || '';
            this.items = items || [];
        }
        var iq = $iq({type: 'get',  'id' : this._connection.getUniqueId('roster')}).c('query', attrs);
        return this._connection.sendIQ(iq,
                                this._onReceiveRosterSuccess.bind(this, userCallback),
                                this._onReceiveRosterError.bind(this, userCallback));
    },
    /** Function: registerCallback
     * register callback on roster (presence and iq)
     *
     * Parameters:
     *   (Function) call_back
     */
    registerCallback: function(call_back)
    {
        this._callbacks.push(call_back);
    },

    registerRequestCallback: function (call_back)
    {
        this._callbacks_request.push(call_back);
    },

    /** Function: findItem
     * Find item by JID
     *
     * Parameters:
     *     (String) jid
     */
    findItem : function(jid)
    {
        if(this.items)
	{
          for (var i = 0; i < this.items.length; i++)
          {
              if (this.items[i] && this.items[i].jid == jid)
              {
                  return this.items[i];
              }
          }
	}
        return false;
    },
    /** Function: removeItem
     * Remove item by JID
     *
     * Parameters:
     *     (String) jid
     */
    removeItem : function(jid)
    {
        for (var i = 0; i < this.items.length; i++)
        {
            if (this.items[i] && this.items[i].jid == jid)
            {
                this.items.splice(i, 1);
                return true;
            }
        }
        return false;
    },
    /** Function: subscribe
     * Subscribe presence
     *
     * Parameters:
     *     (String) jid
     *     (String) message (optional)
     *     (String) nick  (optional)
     */
    subscribe: function(jid, message, nick) {
        var pres = $pres({to: jid, type: "subscribe"});
        if (message && message !== "") {
            pres.c("status").t(message).up();
        }
        if (nick && nick !== "") {
            pres.c('nick', {'xmlns': Strophe.NS.NICK}).t(nick).up();
        }
        this._connection.send(pres);
    },
    /** Function: unsubscribe
     * Unsubscribe presence
     *
     * Parameters:
     *     (String) jid
     *     (String) message
     */
    unsubscribe: function(jid, message)
    {
        var pres = $pres({to: jid, type: "unsubscribe"});
        if (message && message !== "")
            pres.c("status").t(message);
        this._connection.send(pres);
    },
    /** Function: authorize
     * Authorize presence subscription
     *
     * Parameters:
     *     (String) jid
     *     (String) message
     */
    authorize: function(jid, message)
    {
        var pres = $pres({to: jid, type: "subscribed"});
        if (message && message !== "")
            pres.c("status").t(message);
        this._connection.send(pres);
    },
    /** Function: unauthorize
     * Unauthorize presence subscription
     *
     * Parameters:
     *     (String) jid
     *     (String) message
     */
    unauthorize: function(jid, message)
    {
        var pres = $pres({to: jid, type: "unsubscribed"});
        if (message && message !== "")
            pres.c("status").t(message);
        this._connection.send(pres);
    },
    /** Function: add
     * Add roster item
     *
     * Parameters:
     *   (String) jid - item jid
     *   (String) name - name
     *   (Array) groups
     *   (Function) call_back
     */
    add: function(jid, name, groups, call_back)
    {
        var iq = $iq({type: 'set'}).c('query', {xmlns: Strophe.NS.ROSTER}).c('item', {jid: jid,
                                                                                      name: name});
        for (var i = 0; i < groups.length; i++)
        {
            iq.c('group').t(groups[i]).up();
        }
        this._connection.sendIQ(iq, call_back, call_back);
    },
    /** Function: update
     * Update roster item
     *
     * Parameters:
     *   (String) jid - item jid
     *   (String) name - name
     *   (Array) groups
     *   (Function) call_back
     */
    update: function(jid, name, groups, call_back)
    {
        var item = this.findItem(jid);
        if (!item)
        {
            throw "item not found";
        }
        var newName = name || item.name;
        var newGroups = groups || item.groups;
        var iq = $iq({type: 'set'}).c('query', {xmlns: Strophe.NS.ROSTER}).c('item', {jid: item.jid,
                                                                                      name: newName});
        for (var i = 0; i < newGroups.length; i++)
        {
            iq.c('group').t(newGroups[i]).up();
        }
        return this._connection.sendIQ(iq, call_back, call_back);
    },
    /** Function: remove
     * Remove roster item
     *
     * Parameters:
     *   (String) jid - item jid
     *   (Function) call_back
     */
    remove: function(jid, call_back)
    {
        var item = this.findItem(jid);
        if (!item)
        {
            throw "item not found";
        }
        var iq = $iq({type: 'set'}).c('query', {xmlns: Strophe.NS.ROSTER}).c('item', {jid: item.jid,
                                                                                      subscription: "remove"});
        this._connection.sendIQ(iq, call_back, call_back);
    },
    /** PrivateFunction: _onReceiveRosterSuccess
     *
     */
    _onReceiveRosterSuccess: function(userCallback, stanza)
    {
        this._updateItems(stanza);
        this._call_backs(this.items);
        if (typeof userCallback === "function") {
            userCallback(this.items);
        }
    },
    /** PrivateFunction: _onReceiveRosterError
     *
     */
    _onReceiveRosterError: function(userCallback, stanza)
    {
        userCallback(this.items);
    },
    /** PrivateFunction: _onReceivePresence
     * Handle presence
     */
    _onReceivePresence : function(presence)
    {
        // TODO: from is optional
        var jid = presence.getAttribute('from');
        var from = Strophe.getBareJidFromJid(jid);
        var item = this.findItem(from);
        var type = presence.getAttribute('type');
        // not in roster
        if (!item)
        {
            // if 'friend request' presence
            if (type === 'subscribe') {
                this._call_backs_request(from);
            }
            return true;
        }
        if (type == 'unavailable')
        {
            delete item.resources[Strophe.getResourceFromJid(jid)];
        }
        else if (!type)
        {
            // TODO: add timestamp
            item.resources[Strophe.getResourceFromJid(jid)] = {
                show     : (presence.getElementsByTagName('show').length !== 0) ? Strophe.getText(presence.getElementsByTagName('show')[0]) : "",
                status   : (presence.getElementsByTagName('status').length !== 0) ? Strophe.getText(presence.getElementsByTagName('status')[0]) : "",
                priority : (presence.getElementsByTagName('priority').length !== 0) ? Strophe.getText(presence.getElementsByTagName('priority')[0]) : ""
            };
        }
        else
        {
            // Stanza is not a presence notification. (It's probably a subscription type stanza.)
            return true;
        }
        this._call_backs(this.items, item);
        return true;
    },
    /** PrivateFunction: _call_backs_request
     * call all the callbacks waiting for 'friend request' presences
     */
    _call_backs_request : function(from)
    {
        for (var i = 0; i < this._callbacks_request.length; i++) // [].forEach my love ...
        {
            this._callbacks_request[i](from);
        }
    },

    /** PrivateFunction: _call_backs
     * first parameter is the full roster
     * second is optional, newly added or updated item
     * third is otional, in case of update, send the previous state of the
     *  update item
     */
    _call_backs : function(items, item, previousItem)
    {
        for (var i = 0; i < this._callbacks.length; i++) // [].forEach my love ...
        {
            this._callbacks[i](items, item, previousItem);
        }
    },
    /** PrivateFunction: _onReceiveIQ
     * Handle roster push.
     */
    _onReceiveIQ : function(iq)
    {
        var id = iq.getAttribute('id');
        var from = iq.getAttribute('from');
        // Receiving client MUST ignore stanza unless it has no from or from = user's JID.
        if (from && from !== "" && from != this._connection.jid && from != Strophe.getBareJidFromJid(this._connection.jid))
            return true;
        var iqresult = $iq({type: 'result', id: id, from: this._connection.jid});
        this._connection.send(iqresult);
        this._updateItems(iq);
        return true;
    },
    /** PrivateFunction: _updateItems
     * Update items from iq
     */
    _updateItems : function(iq)
    {
        var query = iq.getElementsByTagName('query');
        if (query.length !== 0)
        {
            this.ver = query.item(0).getAttribute('ver');
            var self = this;
            Strophe.forEachChild(query.item(0), 'item',
                function (item)
                {
                    self._updateItem(item);
                }
           );
        }
    },
    /** PrivateFunction: _updateItem
     * Update internal representation of roster item
     */
    _updateItem : function(itemTag)
    {
        var jid           = itemTag.getAttribute("jid");
        var name          = itemTag.getAttribute("name");
        var subscription  = itemTag.getAttribute("subscription");
        var ask           = itemTag.getAttribute("ask");
        var groups        = [];

        Strophe.forEachChild(itemTag, 'group',
            function(group)
            {
                groups.push(Strophe.getText(group));
            }
        );

        var item;
        var previousItem;

        if (subscription == "remove")
        {
            var hashBeenRemoved = this.removeItem(jid);
            if (hashBeenRemoved) {
                this._call_backs(
                    this.items,
                    {jid: jid, subscription: 'remove'}
                );
            }
            return;
        }

        item = this.findItem(jid);
        if (!item)
        {
            item = {
                name         : name,
                jid          : jid,
                subscription : subscription,
                ask          : ask,
                groups       : groups,
                resources    : {}
            };
            if (this.items) {
                this.items.push(item);
            }
        }
        else
        {
            previousItem = {
                name: item.name,
                subscription: item.subscription,
                ask: item.ask,
                groups: item.groups
            };
            item.name = name;
            item.subscription = subscription;
            item.ask = ask;
            item.groups = groups;
        }
        this._call_backs(this.items, item, previousItem);
    }
});