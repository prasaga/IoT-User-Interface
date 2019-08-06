



console.log("ATTEMPTING TO CONNECT...");











// INIT XMPP/WEBSOCKET LOGINS

window.nickName = "user_nickName", // User nickname
window.userName = "user_userName", // User username
window.passWord = "user_passWord", // User password
window.serverName = "server.com", // Server domain
window.roomName = "room", // Room name
	
window.userJID = window.userName + '@' + window.serverName, // User JID
window.roomJID = window.roomName+'@conference.'+window.serverName, // Room JID
	
window.iq;
















// INIT DEVICE DATA VARS

function initVars(){
	

window.transCount=0;
window.dataFreq=200;

window.deviceData=[];
window.deviceDataSupp=[];

window.gpsRoute=[];
window.gpsRouteFreq=10000; // update every 10 seconds


	
	








	
	

// --------------------------------- 
// UNITS INIT 
// ---------------------------------  




// ------ UNIT 1 ------

window.deviceData[0]=[];
window.deviceDataSupp[0]=[];

// UNIT SUPPLEMENTAL DATA (deviceDataSupp) ...additional data supplied (ie. ID / units / names etc etc)
window.deviceDataSupp[0][0]={'UID':'00001','UNM':'B01 - Van','LOC':'USALB Logistics'};

// DEVICE SUPPLEMENTAL DATA
window.deviceDataSupp[0][1]={'DID':'00001','DNM':'Engine Temp','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[0][2]={'DID':'00002','DNM':'RPM','KEY':'rpm','TYP':'circular','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[0][3]={'DID':'00003','DNM':'Fuel Gauge','KEY':'&#37;','TYP':'horizontal','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[0][4]={'DID':'00004','DNM':'Speedometer','KEY':'mph','TYP':'circular','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[0][5]={'DID':'00005','DNM':'Ignition','KEY':'&deg;C','TYP':'switch','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};


// UNIT DATA (deviceData) ...data sent via XMPP (ie. values)
window.deviceData[0][0]={'ACT':'Delivering parts to Bamburg Base, GER.','GEO':'51.5237+-0.076'};

// DEVICE DATA
window.deviceData[0][1]={'VAL':55};
window.deviceData[0][2]={'VAL':50};
window.deviceData[0][3]={'VAL':40};
window.deviceData[0][4]={'VAL':60};
window.deviceData[0][5]={'VAL':50};

// GPS ROUTE SEQUENCE (leave empty for static OR add positioning that runs X seconds as defined by window.gpsRouteFreq above @ line 50)
window.gpsRoute[0]=['49.91353+10.93835','49.91365+10.93766','49.91351+10.9374','49.91321+10.93745','49.9129+10.9376','49.91263+10.93774','49.91258+10.93778','49.91256+10.93783','49.91259+10.938','49.91267+10.93828','49.91273+10.93858','49.91282+10.93889','49.91291+10.93919','49.91299+10.93949','49.91306+10.93974','49.91312+10.93995','49.91315+10.94003','49.91314+10.94008','49.913+10.94019','49.91283+10.9403','49.91267+10.94042','49.91247+10.94055','49.91233+10.94066','49.91215+10.9408','49.91197+10.94093','49.91179+10.94106','49.91163+10.94117','49.91145+10.94129','49.91127+10.94141','49.9111+10.94155','49.91092+10.94168','49.91076+10.94178','49.91065+10.94184','49.91055+10.94182','49.91045+10.94178','49.91036+10.94165','49.9103+10.94153','49.91019+10.94118','49.91011+10.94092','49.91008+10.94075','49.9101+10.94068','49.91012+10.94055','49.91008+10.94044','49.91+10.94041','49.90997+10.94041','49.90989+10.94017','49.9098+10.93979','49.90971+10.93941','49.90961+10.93899','49.90952+10.93861','49.90942+10.9382','49.90933+10.93784','49.90926+10.9375','49.90915+10.93707','49.90905+10.93672','49.90897+10.93638','49.90888+10.93607','49.90878+10.93573','49.90869+10.93537','49.90862+10.93517','49.90857+10.93493','49.90853+10.93479','49.90855+10.93472','49.9086+10.93459','49.90859+10.93448','49.90853+10.93437','49.90846+10.93434','49.90838+10.93439','49.90834+10.93446','49.90832+10.93456','49.90833+10.93464','49.9083+10.93468','49.90811+10.9348','49.90792+10.93492','49.90775+10.93503','49.90771+10.93506','49.9077+10.93506','49.90762+10.93512','49.90745+10.93523','49.90728+10.93535','49.90708+10.93547','49.90688+10.9356','49.90661+10.93575','49.90636+10.93593','49.90612+10.93607','49.90594+10.93619','49.90571+10.93634','49.90551+10.93649','49.90527+10.93665','49.90507+10.93678','49.90491+10.93689','49.90485+10.93692','49.90482+10.93691','49.9048+10.93684','49.90476+10.93681','49.9047+10.93684','49.90466+10.9369','49.90465+10.937','49.90465+10.93705','49.90463+10.93706','49.90452+10.93714','49.90442+10.93721','49.90426+10.93732','49.90412+10.93742','49.90393+10.93753','49.90379+10.93764','49.90362+10.93777','49.90344+10.93788','49.90327+10.93798','49.90314+10.93807','49.90302+10.93816','49.90296+10.93823','49.90297+10.93831','49.90298+10.93839','49.90311+10.93869','49.90322+10.93902','49.90333+10.93933','49.90346+10.9397','49.90356+10.94004','49.90368+10.94039','49.90378+10.94074','49.90385+10.94108','49.90393+10.94142','49.90397+10.94181','49.90402+10.9421','49.90406+10.94247','49.90408+10.94285','49.90414+10.94314','49.90417+10.94323','49.90427+10.94335','49.90448+10.94336','49.90475+10.94349','49.90496+10.94377','49.90513+10.94408','49.90548+10.94432','49.90635+10.9441','49.90717+10.94369','49.90793+10.94322','49.90859+10.94276','49.90935+10.94217','49.91004+10.94161','49.91062+10.94111','49.91122+10.94063','49.91188+10.94004','49.91251+10.93944','49.91319+10.93883']; // lat/lon pairs with '+' symbol as a separator






// ------ UNIT 2 ------

window.deviceData[1]=[];
window.deviceDataSupp[1]=[];

// UNIT SUPPLEMENTAL DATA (deviceDataSupp) ...additional data supplied (ie. ID / units / names etc etc)
window.deviceDataSupp[1][0]={'UID':'00002','UNM':'B02 - Van','LOC':'USALB Logistics'};

// DEVICE SUPPLEMENTAL DATA
window.deviceDataSupp[1][1]={'DID':'00001','DNM':'Engine Temp','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[1][2]={'DID':'00002','DNM':'RPM','KEY':'rpm','TYP':'circular','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[1][3]={'DID':'00003','DNM':'Fuel Gauge','KEY':'&#37;','TYP':'horizontal','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[1][4]={'DID':'00004','DNM':'Speedometer','KEY':'mph','TYP':'circular','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[1][5]={'DID':'00005','DNM':'Ignition','KEY':'&deg;C','TYP':'switch','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};


// UNIT DATA (deviceData) ...data sent via XMPP (ie. values)
window.deviceData[1][0]={'ACT':'Returning from Central London to Mildenhall AF Base, UK.','GEO':'51.4837+-0.10'};

// DEVICE DATA
window.deviceData[1][1]={'VAL':35};
window.deviceData[1][2]={'VAL':50};
window.deviceData[1][3]={'VAL':25};
window.deviceData[1][4]={'VAL':50};
window.deviceData[1][5]={'VAL':50};

// GPS ROUTE SEQUENCE (leave empty for static OR add positioning that runs X seconds as defined by window.gpsRouteFreq above @ line 50)
window.gpsRoute[1]=['51.49003+-0.17097','51.48995+-0.17132','51.48986+-0.17162','51.48977+-0.17189','51.4897+-0.17212','51.48964+-0.17215','51.48963+-0.17222','51.48971+-0.17236','51.48983+-0.1725','51.48994+-0.17263','51.48998+-0.17273','51.48997+-0.17287','51.48989+-0.17309','51.48979+-0.17335','51.48969+-0.17359','51.4896+-0.17382','51.48949+-0.17403','51.48942+-0.17425','51.48933+-0.17448','51.48923+-0.17471','51.48913+-0.17491','51.48904+-0.17516','51.48899+-0.17526','51.489+-0.17528','51.48908+-0.17532','51.48916+-0.17538','51.48925+-0.17544','51.48931+-0.1755','51.48934+-0.17556','51.48938+-0.1756','51.48946+-0.17553','51.48955+-0.17542','51.48965+-0.17528','51.48975+-0.17515','51.48985+-0.17502','51.48998+-0.17481','51.49013+-0.1746','51.49027+-0.17437','51.49041+-0.17415','51.4905+-0.17397','51.49058+-0.17386','51.4906+-0.17381','51.49062+-0.17377','51.49063+-0.17374','51.49064+-0.17372','51.49063+-0.17369','51.49058+-0.17363','51.49054+-0.17358','51.49049+-0.17352','51.49045+-0.17345','51.49045+-0.17343','51.49046+-0.17341','51.49045+-0.17342','51.49045+-0.17344','51.49046+-0.17351','51.4905+-0.17358','51.49056+-0.17365','51.49059+-0.17369','51.4906+-0.17371','51.49062+-0.17372','51.49065+-0.17369','51.49071+-0.17362','51.49078+-0.17352','51.49084+-0.17342','51.4909+-0.17332','51.49097+-0.17321','51.49103+-0.1731','51.4911+-0.17299','51.49117+-0.17287','51.49124+-0.17276','51.4913+-0.17265','51.49136+-0.17256','51.49137+-0.17253','51.49138+-0.17251','51.49138+-0.17249','51.49137+-0.17246','51.49134+-0.17242','51.49128+-0.17233','51.49122+-0.17224','51.49115+-0.17215','51.49109+-0.17208','51.49104+-0.17202','51.49099+-0.17196','51.49094+-0.17189','51.49088+-0.17182','51.49083+-0.17174','51.49076+-0.17168','51.49069+-0.1716','51.4906+-0.17151','51.49051+-0.17142','51.49043+-0.17133','51.49032+-0.17103','51.49032+-0.17103','51.49035+-0.17125','51.49027+-0.17118','51.4902+-0.1711','51.49014+-0.17104','51.49007+-0.17097','51.49006+-0.17096','51.49005+-0.17095']; // lat/lon pairs with '+' symbol as a separator






// ------ UNIT 3 ------

window.deviceData[2]=[];
window.deviceDataSupp[2]=[];

// UNIT SUPPLEMENTAL DATA (deviceDataSupp) ...additional data supplied (ie. ID / units / names etc etc)
window.deviceDataSupp[2][0]={'UID':'00003','UNM':'B03 - Truck','LOC':'USALB Logistics'};

// DEVICE SUPPLEMENTAL DATA
window.deviceDataSupp[2][1]={'DID':'00001','DNM':'Engine Temp','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[2][2]={'DID':'00002','DNM':'RPM','KEY':'rpm','TYP':'circular','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[2][3]={'DID':'00003','DNM':'Fuel Gauge','KEY':'&#37;','TYP':'horizontal','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[2][4]={'DID':'00004','DNM':'Speedometer','KEY':'mph','TYP':'circular','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[2][5]={'DID':'00005','DNM':'Ignition','KEY':'&deg;C','TYP':'switch','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};


// UNIT DATA (deviceData) ...data sent via XMPP (ie. values)
window.deviceData[2][0]={'ACT':'Returning from Brighton to Fairford AF Base, UK.','GEO':'50.3267+10.416'};

// DEVICE DATA
window.deviceData[2][1]={'VAL':45};
window.deviceData[2][2]={'VAL':50};
window.deviceData[2][3]={'VAL':50};
window.deviceData[2][4]={'VAL':50};
window.deviceData[2][5]={'VAL':50};

// GPS ROUTE SEQUENCE (leave empty for static OR add positioning that runs X seconds as defined by window.gpsRouteFreq above @ line 50)
window.gpsRoute[2]=['51.51419+-0.10626','51.51414+-0.10622','51.51407+-0.10622','51.51397+-0.1062','51.51388+-0.10619','51.51377+-0.10618','51.51368+-0.10617','51.51358+-0.10616','51.51351+-0.10613','51.51341+-0.10607','51.51332+-0.10602','51.51322+-0.10596','51.51313+-0.1059','51.51303+-0.10586','51.51293+-0.10586','51.51282+-0.10586','51.51272+-0.10586','51.51261+-0.10584','51.51256+-0.10585','51.51254+-0.10589','51.51255+-0.10608','51.51253+-0.1062','51.51251+-0.10624','51.51242+-0.10623','51.51231+-0.10624','51.51222+-0.10624','51.51211+-0.10625','51.51199+-0.10624','51.51191+-0.10626','51.51188+-0.10628','51.51186+-0.10632','51.51187+-0.10657','51.51187+-0.1068','51.51187+-0.107','51.51188+-0.10718','51.51188+-0.10743','51.51188+-0.10762','51.51189+-0.10781','51.51189+-0.10794','51.51191+-0.108','51.51206+-0.108','51.51226+-0.108','51.51244+-0.10799','51.51254+-0.10793','51.51255+-0.10786','51.51254+-0.10764','51.51254+-0.10747','51.51254+-0.10727','51.51254+-0.10712','51.51253+-0.10695','51.51256+-0.10688','51.51273+-0.10689','51.51289+-0.1069','51.51302+-0.10696','51.51314+-0.10701','51.51326+-0.10706','51.51338+-0.10711','51.51349+-0.10672','51.51349+-0.10672','51.51352+-0.10717','51.51365+-0.10725','51.51379+-0.10731','51.5139+-0.10736','51.51402+-0.1074','51.51413+-0.10741','51.51418+-0.1074','51.51421+-0.10738','51.51423+-0.10731','51.51423+-0.10719','51.51423+-0.10706','51.51424+-0.10691','51.51423+-0.10676','51.51423+-0.10664','51.51422+-0.10651','51.51422+-0.1064','51.51422+-0.10631','51.51422+-0.10628']; // lat/lon pairs with '+' symbol as a separator






// ------ UNIT 4 ------

window.deviceData[3]=[];
window.deviceDataSupp[3]=[];

// UNIT SUPPLEMENTAL DATA (deviceDataSupp) ...additional data supplied (ie. ID / units / names etc etc)
window.deviceDataSupp[3][0]={'UID':'00004','UNM':'A01 - Van','LOC':'USALB Logistics'};

// DEVICE SUPPLEMENTAL DATA
window.deviceDataSupp[3][1]={'DID':'00001','DNM':'Engine Temp','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[3][2]={'DID':'00002','DNM':'RPM','KEY':'rpm','TYP':'circular','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[3][3]={'DID':'00003','DNM':'Fuel Gauge','KEY':'&#37;','TYP':'horizontal','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[3][4]={'DID':'00004','DNM':'Speedometer','KEY':'mph','TYP':'circular','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[3][5]={'DID':'00005','DNM':'Ignition','KEY':'&deg;C','TYP':'switch','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};


// UNIT DATA (deviceData) ...data sent via XMPP (ie. values)
window.deviceData[3][0]={'ACT':'Returning to NAWS China Lake, California.','GEO':'44.4227+-99.872'};

// DEVICE DATA
window.deviceData[3][1]={'VAL':50};
window.deviceData[3][2]={'VAL':50};
window.deviceData[3][3]={'VAL':50};
window.deviceData[3][4]={'VAL':60};
window.deviceData[3][5]={'VAL':60};

// GPS ROUTE SEQUENCE (leave empty for static OR add positioning that runs X seconds as defined by window.gpsRouteFreq above @ line 50)
window.gpsRoute[3]=['44.07417+-99.59213','44.07407+-99.59164','44.07393+-99.59113','44.07376+-99.59062','44.07358+-99.59003','44.07333+-99.58944','44.07306+-99.58889','44.07279+-99.58837','44.07252+-99.58786','44.07227+-99.58746','44.07217+-99.5873','44.07215+-99.5872','44.07222+-99.58707','44.07251+-99.58667','44.0728+-99.58628','44.07309+-99.58586','44.07336+-99.58541','44.07355+-99.58496','44.07364+-99.58469','44.07364+-99.58458','44.074+-99.58466','44.07448+-99.58462','44.07499+-99.58459','44.07538+-99.58455','44.0756+-99.58455','44.07563+-99.58461','44.07564+-99.58484','44.07564+-99.58501','44.07565+-99.58523','44.07565+-99.5854','44.07566+-99.58556','44.07567+-99.58569','44.07567+-99.58582','44.07567+-99.58583','44.07567+-99.58568','44.07566+-99.58545','44.07565+-99.58528','44.07565+-99.5851','44.07563+-99.58476','44.07562+-99.5846','44.07567+-99.58455','44.07582+-99.58461','44.07609+-99.58486','44.07631+-99.58512','44.07657+-99.58545','44.07684+-99.58579','44.07709+-99.58614','44.07736+-99.58648','44.07761+-99.58679','44.07782+-99.58706','44.07808+-99.58733','44.07834+-99.58749','44.07865+-99.58754','44.07883+-99.58756','44.07885+-99.58758','44.07886+-99.58765','44.07888+-99.58803','44.07888+-99.58855','44.07884+-99.58917','44.07878+-99.58968','44.07861+-99.5902','44.07839+-99.59061','44.07817+-99.59097','44.07789+-99.59124','44.07762+-99.59136','44.0773+-99.59144','44.077+-99.59152','44.07675+-99.59158','44.07647+-99.59164','44.07612+-99.59171','44.07575+-99.5918','44.07535+-99.59191','44.07505+-99.59198','44.07466+-99.59206','44.07428+-99.59214','44.07423+-99.59215','44.07422+-99.59215']; // lat/lon pairs with '+' symbol as a separator






// ------ UNIT 5 ------

window.deviceData[4]=[];
window.deviceDataSupp[4]=[];

// UNIT SUPPLEMENTAL DATA (deviceDataSupp) ...additional data supplied (ie. ID / units / names etc etc)
window.deviceDataSupp[4][0]={'UID':'00005','UNM':'A02 - Van','LOC':'USALB Logistics'};

// DEVICE SUPPLEMENTAL DATA
window.deviceDataSupp[4][1]={'DID':'00001','DNM':'Engine Temp','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+2+amber+10+green+65+amber+85+red+100'};
window.deviceDataSupp[4][2]={'DID':'00002','DNM':'RPM','KEY':'rpm','TYP':'circular','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[4][3]={'DID':'00003','DNM':'Fuel Gauge','KEY':'&#37;','TYP':'horizontal','MRK':'0+red+10+amber+30+green+100+amber+100+red+100'};
window.deviceDataSupp[4][4]={'DID':'00004','DNM':'Speedometer','KEY':'mph','TYP':'circular','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[4][5]={'DID':'00005','DNM':'Ignition','KEY':'&deg;C','TYP':'switch','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};


// UNIT DATA (deviceData) ...data sent via XMPP (ie. values)
window.deviceData[4][0]={'ACT':'Delivering parts to Fort Lesley J McNair, Washington.','GEO':'38.935+-77.04'};

// DEVICE DATA
window.deviceData[4][1]={'VAL':15};
window.deviceData[4][2]={'VAL':50};
window.deviceData[4][3]={'VAL':50};
window.deviceData[4][4]={'VAL':60};
window.deviceData[4][5]={'VAL':50};

// GPS ROUTE SEQUENCE (leave empty for static OR add positioning that runs X seconds as defined by window.gpsRouteFreq above @ line 50)
window.gpsRoute[4]=['38.87287+-77.08142','38.87268+-77.08122','38.87261+-77.0809','38.87264+-77.08058','38.87256+-77.08023','38.8723+-77.08013','38.87201+-77.0803','38.87191+-77.0807','38.87174+-77.08134','38.87168+-77.08212','38.87165+-77.083','38.8716+-77.08379','38.87149+-77.08464','38.87131+-77.0855','38.8712+-77.08631','38.87105+-77.08715','38.87088+-77.08804','38.87071+-77.08883','38.8705+-77.08959','38.87034+-77.09031','38.87018+-77.09108','38.87002+-77.09166','38.86999+-77.09172','38.87003+-77.09179','38.87026+-77.09189','38.87074+-77.09207','38.87117+-77.09223','38.87161+-77.09242','38.87203+-77.09259','38.87242+-77.09274','38.87251+-77.09277','38.87255+-77.0928','38.8726+-77.09276','38.87274+-77.09223','38.87288+-77.09164','38.873+-77.09112','38.87313+-77.09046','38.87334+-77.08963','38.87356+-77.08869','38.87381+-77.08766','38.87405+-77.08671','38.87431+-77.08572','38.87455+-77.0849','38.87483+-77.08423','38.87529+-77.08375','38.87569+-77.08343','38.87583+-77.08325','38.87587+-77.08309','38.87585+-77.083','38.87578+-77.08289','38.87568+-77.08279','38.87541+-77.08265','38.87498+-77.08251','38.87454+-77.08242','38.87409+-77.08225','38.87363+-77.08193','38.87321+-77.08164']; // lat/lon pairs with '+' symbol as a separator






// ------ UNIT 6 ------

window.deviceData[5]=[];
window.deviceDataSupp[5]=[];

// UNIT SUPPLEMENTAL DATA (deviceDataSupp) ...additional data supplied (ie. ID / units / names etc etc)
window.deviceDataSupp[5][0]={'UID':'00006','UNM':'A05 - Truck','LOC':'USALB Logistics'};

// DEVICE SUPPLEMENTAL DATA
window.deviceDataSupp[5][1]={'DID':'00001','DNM':'Engine Temp','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[5][2]={'DID':'00002','DNM':'RPM','KEY':'rpm','TYP':'circular','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[5][3]={'DID':'00003','DNM':'Fuel Gauge','KEY':'&#37;','TYP':'horizontal','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[5][4]={'DID':'00004','DNM':'Speedometer','KEY':'mph','TYP':'circular','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[5][5]={'DID':'00005','DNM':'Ignition','KEY':'&deg;C','TYP':'switch','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};


// UNIT DATA (deviceData) ...data sent via XMPP (ie. values)
window.deviceData[5][0]={'ACT':'Delivering electronics to Fort Hamilton, New York.','GEO':'40.75+-74.0'};

// DEVICE DATA
window.deviceData[5][1]={'VAL':50};
window.deviceData[5][2]={'VAL':35};
window.deviceData[5][3]={'VAL':50};
window.deviceData[5][4]={'VAL':40};
window.deviceData[5][5]={'VAL':50};

// GPS ROUTE SEQUENCE (leave empty for static OR add positioning that runs X seconds as defined by window.gpsRouteFreq above @ line 50)
window.gpsRoute[5]=['40.72036+-74.00629','40.72031+-74.00616','40.72024+-74.00602','40.72018+-74.00589','40.72011+-74.00574','40.72005+-74.00562','40.71998+-74.00548','40.71994+-74.00534','40.71988+-74.00525','40.71988+-74.00525','40.71988+-74.00525','40.71987+-74.0052','40.71982+-74.0051','40.71976+-74.00498','40.71971+-74.00486','40.71966+-74.00477','40.71961+-74.00465','40.71957+-74.00457','40.71953+-74.00449','40.71952+-74.00445','40.71951+-74.00443','40.7195+-74.00441','40.71952+-74.00435','40.71959+-74.00427','40.71969+-74.0042','40.7198+-74.00412','40.71992+-74.00402','40.72001+-74.00396','40.72002+-74.00395','40.72006+-74.00392','40.72012+-74.00387','40.72021+-74.00381','40.7203+-74.00373','40.72039+-74.00366','40.72046+-74.00357','40.72051+-74.00352','40.72052+-74.00351','40.72057+-74.0035','40.72061+-74.00353','40.72067+-74.00361','40.72074+-74.00371','40.72084+-74.00383','40.72092+-74.00394','40.721+-74.00406','40.72111+-74.0042','40.72119+-74.00434','40.72126+-74.00443','40.72132+-74.00452','40.72137+-74.00458','40.72138+-74.0046','40.72142+-74.00465','40.72146+-74.00472','40.72152+-74.00481','40.7216+-74.00491','40.72168+-74.00503','40.72175+-74.00513','40.72183+-74.00524','40.72193+-74.00536','40.72201+-74.00546','40.72209+-74.00556','40.72216+-74.00565','40.72224+-74.00576','40.72232+-74.00588','40.72242+-74.006','40.72252+-74.00615','40.72259+-74.00623','40.72261+-74.00626','40.72261+-74.00629','40.7226+-74.00633','40.72251+-74.00634','40.72238+-74.00635','40.72227+-74.00636','40.72215+-74.00638','40.72205+-74.0064','40.72195+-74.00641','40.72187+-74.00642','40.72179+-74.00644','40.72169+-74.00646','40.72161+-74.00647','40.72153+-74.00649','40.72144+-74.0065','40.72137+-74.00652','40.72128+-74.00653','40.72118+-74.00656','40.72108+-74.00657','40.72097+-74.00659','40.72087+-74.00661','40.72077+-74.00663','40.72066+-74.00665','40.72056+-74.00666','40.72051+-74.00667','40.72049+-74.00668','40.72047+-74.00668','40.72045+-74.00663','40.72044+-74.0065','40.72043+-74.00638']; // lat/lon pairs with '+' symbol as a separator






// ------ UNIT 7 ------

window.deviceData[6]=[];
window.deviceDataSupp[6]=[];

// UNIT SUPPLEMENTAL DATA (deviceDataSupp) ...additional data supplied (ie. ID / units / names etc etc)
window.deviceDataSupp[6][0]={'UID':'00007','UNM':'A06 - Truck','LOC':'USALB Logistics'};

// DEVICE SUPPLEMENTAL DATA
window.deviceDataSupp[6][1]={'DID':'00001','DNM':'Engine Temp','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[6][2]={'DID':'00002','DNM':'RPM','KEY':'rpm','TYP':'circular','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[6][3]={'DID':'00003','DNM':'Fuel Gauge','KEY':'&#37;','TYP':'horizontal','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[6][4]={'DID':'00004','DNM':'Speedometer','KEY':'mph','TYP':'circular','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[6][5]={'DID':'00005','DNM':'Ignition','KEY':'&deg;C','TYP':'switch','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};


// UNIT DATA (deviceData) ...data sent via XMPP (ie. values)
window.deviceData[6][0]={'ACT':'Delivering electronics to Travis Air Force Base, California.','GEO':'38.4337+-121.272'};

// DEVICE DATA
window.deviceData[6][1]={'VAL':50};
window.deviceData[6][2]={'VAL':35};
window.deviceData[6][3]={'VAL':50};
window.deviceData[6][4]={'VAL':40};
window.deviceData[6][5]={'VAL':50};

// GPS ROUTE SEQUENCE (leave empty for static OR add positioning that runs X seconds as defined by window.gpsRouteFreq above @ line 50)
window.gpsRoute[6]=['37.97805+-121.31372','37.97788+-121.31372','37.97771+-121.31378','37.97757+-121.31392','37.97744+-121.31417','37.97735+-121.31449','37.9773+-121.31478','37.97721+-121.31518','37.9771+-121.31555','37.97694+-121.31584','37.97674+-121.31598','37.97652+-121.31611','37.97632+-121.31624','37.9761+-121.3164','37.97587+-121.31657','37.97573+-121.31674','37.97564+-121.31698','37.97558+-121.31718','37.97554+-121.31743','37.97554+-121.31746','37.97556+-121.31749','37.97567+-121.31755','37.97592+-121.31765','37.97615+-121.31775','37.97647+-121.31789','37.97673+-121.31801','37.97706+-121.31812','37.97739+-121.3182','37.97771+-121.31834','37.97809+-121.31849','37.97848+-121.31856','37.97887+-121.31856','37.97931+-121.31855','37.9798+-121.31852','37.98031+-121.31851','37.98083+-121.31849','37.98122+-121.31859','37.98152+-121.31871','37.98172+-121.31878','37.98189+-121.31886','37.98195+-121.31887','37.98197+-121.31886','37.98202+-121.31878','37.98206+-121.31867','37.98212+-121.31842','37.9822+-121.31809','37.98228+-121.31772','37.98237+-121.31737','37.98246+-121.31701','37.98253+-121.31668','37.98261+-121.31637','37.98269+-121.31606','37.98277+-121.31578','37.98283+-121.3155','37.9829+-121.31523','37.98293+-121.31513','37.98293+-121.3151','37.98292+-121.31508','37.9829+-121.31506','37.98286+-121.31505','37.9828+-121.31503','37.9827+-121.315','37.98259+-121.31498','37.98244+-121.31495','37.9823+-121.31491','37.98216+-121.31481','37.98202+-121.31471','37.98189+-121.31456','37.98179+-121.31444','37.98164+-121.31427','37.98151+-121.31414','37.98135+-121.31397','37.9812+-121.31381','37.98106+-121.31367','37.98097+-121.31355','37.98095+-121.31346','37.98096+-121.31337','37.98103+-121.31325','37.98108+-121.31314','37.98107+-121.31304','37.98107+-121.31303','37.98104+-121.31302','37.98099+-121.31306','37.98094+-121.31312','37.9809+-121.31317','37.98085+-121.31323','37.9808+-121.3133','37.98075+-121.31337','37.9807+-121.31344','37.98065+-121.3135','37.98059+-121.3136','37.98052+-121.31368','37.98045+-121.31377','37.98039+-121.31386','37.98032+-121.31393','37.98025+-121.31403','37.98018+-121.31412','37.98012+-121.31421','37.98006+-121.31427','37.97998+-121.31437','37.97993+-121.31442','37.97989+-121.31443','37.97984+-121.31444','37.97977+-121.31442','37.97964+-121.31436','37.97947+-121.3143','37.97931+-121.31423','37.97915+-121.31417','37.97898+-121.3141','37.97881+-121.31403','37.97862+-121.31395','37.97845+-121.31388','37.97829+-121.31381','37.9782+-121.31376']; // lat/lon pairs with '+' symbol as a separator






// ------ UNIT 8 ------

window.deviceData[7]=[];
window.deviceDataSupp[7]=[];

// UNIT SUPPLEMENTAL DATA (deviceDataSupp) ...additional data supplied (ie. ID / units / names etc etc)
window.deviceDataSupp[7][0]={'UID':'00008','UNM':'USALB Ordnance 1','LOC':'USALB West'};

// DEVICE SUPPLEMENTAL DATA
window.deviceDataSupp[7][1]={'DID':'00001','DNM':'Power Usage','KEY':'Kwh','TYP':'vertical','MRK':'0+red+0+amber+0+green+70+amber+90+red+100'};
window.deviceDataSupp[7][2]={'DID':'00002','DNM':'Humidity','KEY':'&#37;','TYP':'vertical','MRK':'0+red+0+amber+0+green+70+amber+90+red+100'};
window.deviceDataSupp[7][3]={'DID':'00003','DNM':'Ambient Temp A','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+0+amber+15+green+70+amber+90+red+100'};
window.deviceDataSupp[7][4]={'DID':'00004','DNM':'Ambient Temp B','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+0+amber+15+green+70+amber+90+red+100'};
window.deviceDataSupp[7][5]={'DID':'00005','DNM':'Staffing Level','KEY':'&#37;','TYP':'vertical','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[7][6]={'DID':'00006','DNM':'Fuel Capacity','KEY':'Gal','TYP':'vertical','MRK':'0+red+20+amber+40+green+70+amber+90+red+100'};
window.deviceDataSupp[7][7]={'DID':'00007','DNM':'Goods Capacity','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+0+amber+0+green+70+amber+90+red+100'};
window.deviceDataSupp[7][8]={'DID':'00008','DNM':'Comms Status','KEY':'&deg;C','TYP':'switch','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};

// UNIT DATA (deviceData) ...data sent via XMPP (ie. values)
window.deviceData[7][0]={'ACT':'Normal Operations','GEO':'37.404+-121.828'};

// DEVICE DATA
window.deviceData[7][1]={'VAL':50};
window.deviceData[7][2]={'VAL':35};
window.deviceData[7][3]={'VAL':20};
window.deviceData[7][4]={'VAL':20};
window.deviceData[7][5]={'VAL':25};
window.deviceData[7][6]={'VAL':50};
window.deviceData[7][7]={'VAL':40};
window.deviceData[7][8]={'VAL':25};

// GPS ROUTE SEQUENCE (leave empty for static OR add positioning that runs X seconds as defined by window.gpsRouteFreq above @ line 50)
window.gpsRoute[7]=[null]; // lat/lon pairs with '+' symbol as a separator






// ------ UNIT 9 ------

window.deviceData[8]=[];
window.deviceDataSupp[8]=[];

// UNIT SUPPLEMENTAL DATA (deviceDataSupp) ...additional data supplied (ie. ID / units / names etc etc)
window.deviceDataSupp[8][0]={'UID':'00009','UNM':'USALB Ordnance 2','LOC':'USALB West'};

// DEVICE SUPPLEMENTAL DATA
window.deviceDataSupp[8][1]={'DID':'00001','DNM':'Power Usage','KEY':'Kwh','TYP':'vertical','MRK':'0+red+0+amber+0+green+70+amber+90+red+100'};
window.deviceDataSupp[8][2]={'DID':'00002','DNM':'Humidity','KEY':'&#37;','TYP':'vertical','MRK':'0+red+0+amber+0+green+70+amber+90+red+100'};
window.deviceDataSupp[8][3]={'DID':'00003','DNM':'Ambient Temp A','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+0+amber+15+green+70+amber+90+red+100'};
window.deviceDataSupp[8][4]={'DID':'00004','DNM':'Ambient Temp B','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+0+amber+15+green+70+amber+90+red+100'};
window.deviceDataSupp[8][5]={'DID':'00005','DNM':'Staffing Level','KEY':'&#37;','TYP':'vertical','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[8][6]={'DID':'00006','DNM':'Fuel Capacity','KEY':'Gal','TYP':'vertical','MRK':'0+red+20+amber+40+green+70+amber+90+red+100'};
window.deviceDataSupp[8][7]={'DID':'00007','DNM':'Goods Capacity','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+0+amber+0+green+70+amber+90+red+100'};
window.deviceDataSupp[8][8]={'DID':'00008','DNM':'Comms Status','KEY':'&deg;C','TYP':'switch','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};

// UNIT DATA (deviceData) ...data sent via XMPP (ie. values)
window.deviceData[8][0]={'ACT':'Normal Operations','GEO':'37.405+-121.832'};

// DEVICE DATA
window.deviceData[8][1]={'VAL':50};
window.deviceData[8][2]={'VAL':35};
window.deviceData[8][3]={'VAL':18};
window.deviceData[8][4]={'VAL':19};
window.deviceData[8][5]={'VAL':50};
window.deviceData[8][6]={'VAL':50};
window.deviceData[8][7]={'VAL':40};
window.deviceData[8][8]={'VAL':50};

// GPS ROUTE SEQUENCE (leave empty for static OR add positioning that runs X seconds as defined by window.gpsRouteFreq above @ line 50)
window.gpsRoute[8]=[null]; // lat/lon pairs with '+' symbol as a separator





// ------ UNIT 10 ------

window.deviceData[9]=[];
window.deviceDataSupp[9]=[];

// UNIT SUPPLEMENTAL DATA (deviceDataSupp) ...additional data supplied (ie. ID / units / names etc etc)
window.deviceDataSupp[9][0]={'UID':'00010','UNM':'USALB West Log','LOC':'USALB West'};

// DEVICE SUPPLEMENTAL DATA
window.deviceDataSupp[9][1]={'DID':'00001','DNM':'Power Usage','KEY':'Kwh','TYP':'vertical','MRK':'0+red+0+amber+0+green+70+amber+90+red+100'};
window.deviceDataSupp[9][2]={'DID':'00002','DNM':'Staffing Level','KEY':'&#37;','TYP':'vertical','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[9][3]={'DID':'00003','DNM':'Ambient Temp','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+0+amber+15+green+70+amber+90+red+100'};
window.deviceDataSupp[9][4]={'DID':'00004','DNM':'Comms Status','KEY':'&deg;C','TYP':'switch','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};

// UNIT DATA (deviceData) ...data sent via XMPP (ie. values)
window.deviceData[9][0]={'ACT':'Operating Within Parameters','GEO':'37.403+-121.833'};

// DEVICE DATA
window.deviceData[9][1]={'VAL':40};
window.deviceData[9][2]={'VAL':35};
window.deviceData[9][3]={'VAL':18};
window.deviceData[9][4]={'VAL':50};

// GPS ROUTE SEQUENCE (leave empty for static OR add positioning that runs X seconds as defined by window.gpsRouteFreq above @ line 50)
window.gpsRoute[9]=[null]; // lat/lon pairs with '+' symbol as a separator






// ------ UNIT 11 ------

window.deviceData[10]=[];
window.deviceDataSupp[10]=[];

// UNIT SUPPLEMENTAL DATA (deviceDataSupp) ...additional data supplied (ie. ID / units / names etc etc)
window.deviceDataSupp[10][0]={'UID':'00011','UNM':'USALB West Ops','LOC':'USALB West'};

// DEVICE SUPPLEMENTAL DATA
window.deviceDataSupp[10][1]={'DID':'00001','DNM':'Power Usage','KEY':'Kwh','TYP':'vertical','MRK':'0+red+0+amber+0+green+70+amber+90+red+100'};
window.deviceDataSupp[10][2]={'DID':'00002','DNM':'Staffing Level','KEY':'&#37;','TYP':'vertical','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[10][3]={'DID':'00003','DNM':'Ambient Temp','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+0+amber+15+green+70+amber+90+red+100'};
window.deviceDataSupp[10][4]={'DID':'00004','DNM':'Comms Status','KEY':'&deg;C','TYP':'switch','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};


// UNIT DATA (deviceData) ...data sent via XMPP (ie. values)
window.deviceData[10][0]={'ACT':'Operating Within Parameters','GEO':'37.402+-121.830'};

// DEVICE DATA
window.deviceData[10][1]={'VAL':40};
window.deviceData[10][2]={'VAL':35};
window.deviceData[10][3]={'VAL':19};
window.deviceData[10][4]={'VAL':50};

// GPS ROUTE SEQUENCE (leave empty for static OR add positioning that runs X seconds as defined by window.gpsRouteFreq above @ line 50)
window.gpsRoute[10]=[null]; // lat/lon pairs with '+' symbol as a separator






// ------ UNIT 12 ------

window.deviceData[11]=[];
window.deviceDataSupp[11]=[];

// UNIT SUPPLEMENTAL DATA (deviceDataSupp) ...additional data supplied (ie. ID / units / names etc etc)
window.deviceDataSupp[11][0]={'UID':'00012','UNM':'USALB Ordnance 1','LOC':'USALB East'};

// DEVICE SUPPLEMENTAL DATA
window.deviceDataSupp[11][1]={'DID':'00001','DNM':'Power Usage','KEY':'Kwh','TYP':'vertical','MRK':'0+red+0+amber+0+green+70+amber+90+red+100'};
window.deviceDataSupp[11][2]={'DID':'00002','DNM':'Humidity','KEY':'&#37;','TYP':'vertical','MRK':'0+red+0+amber+0+green+70+amber+90+red+100'};
window.deviceDataSupp[11][3]={'DID':'00003','DNM':'Ambient Temp A','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+0+amber+15+green+70+amber+90+red+100'};
window.deviceDataSupp[11][4]={'DID':'00004','DNM':'Ambient Temp B','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+0+amber+15+green+70+amber+90+red+100'};
window.deviceDataSupp[11][5]={'DID':'00005','DNM':'Staffing Level','KEY':'&#37;','TYP':'vertical','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[11][6]={'DID':'00006','DNM':'Fuel Capacity','KEY':'Gal','TYP':'vertical','MRK':'0+red+20+amber+40+green+70+amber+90+red+100'};
window.deviceDataSupp[11][7]={'DID':'00007','DNM':'Goods Capacity','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+0+amber+0+green+70+amber+90+red+100'};
window.deviceDataSupp[11][8]={'DID':'00008','DNM':'Comms Status','KEY':'&deg;C','TYP':'switch','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};

// UNIT DATA (deviceData) ...data sent via XMPP (ie. values)
window.deviceData[11][0]={'ACT':'Operating Within Parameters','GEO':'39.166+-76.801'};

// DEVICE DATA
window.deviceData[11][1]={'VAL':50};
window.deviceData[11][2]={'VAL':35};
window.deviceData[11][3]={'VAL':19};
window.deviceData[11][4]={'VAL':18};
window.deviceData[11][5]={'VAL':50};
window.deviceData[11][6]={'VAL':50};
window.deviceData[11][7]={'VAL':40};
window.deviceData[11][8]={'VAL':50};

// GPS ROUTE SEQUENCE (leave empty for static OR add positioning that runs X seconds as defined by window.gpsRouteFreq above @ line 50)
window.gpsRoute[11]=[null]; // lat/lon pairs with '+' symbol as a separator





// ------ UNIT 13 ------

window.deviceData[12]=[];
window.deviceDataSupp[12]=[];

// UNIT SUPPLEMENTAL DATA (deviceDataSupp) ...additional data supplied (ie. ID / units / names etc etc)
window.deviceDataSupp[12][0]={'UID':'00013','UNM':'USALB Ordnance 2','LOC':'USALB East'};

// DEVICE SUPPLEMENTAL DATA
window.deviceDataSupp[12][1]={'DID':'00001','DNM':'Power Usage','KEY':'Kwh','TYP':'vertical','MRK':'0+red+0+amber+0+green+70+amber+90+red+100'};
window.deviceDataSupp[12][2]={'DID':'00002','DNM':'Humidity','KEY':'&#37;','TYP':'vertical','MRK':'0+red+0+amber+0+green+70+amber+90+red+100'};
window.deviceDataSupp[12][3]={'DID':'00003','DNM':'Ambient Temp A','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+0+amber+15+green+70+amber+90+red+100'};
window.deviceDataSupp[12][4]={'DID':'00004','DNM':'Ambient Temp B','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+0+amber+15+green+70+amber+90+red+100'};
window.deviceDataSupp[12][5]={'DID':'00005','DNM':'Staffing Level','KEY':'&#37;','TYP':'vertical','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[12][6]={'DID':'00006','DNM':'Fuel Capacity','KEY':'Gal','TYP':'vertical','MRK':'0+red+20+amber+40+green+70+amber+90+red+100'};
window.deviceDataSupp[12][7]={'DID':'00007','DNM':'Goods Capacity','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+0+amber+0+green+70+amber+90+red+100'};
window.deviceDataSupp[12][8]={'DID':'00008','DNM':'Comms Status','KEY':'&deg;C','TYP':'switch','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};


// UNIT DATA (deviceData) ...data sent via XMPP (ie. values)
window.deviceData[12][0]={'ACT':'Operating Within Parameters','GEO':'39.166+-76.804'};

// DEVICE DATA
window.deviceData[12][1]={'VAL':50};
window.deviceData[12][2]={'VAL':35};
window.deviceData[12][3]={'VAL':20};
window.deviceData[12][4]={'VAL':21};
window.deviceData[12][5]={'VAL':50};
window.deviceData[12][6]={'VAL':50};
window.deviceData[12][7]={'VAL':40};
window.deviceData[12][8]={'VAL':50};

// GPS ROUTE SEQUENCE (leave empty for static OR add positioning that runs X seconds as defined by window.gpsRouteFreq above @ line 50)
window.gpsRoute[12]=[null]; // lat/lon pairs with '+' symbol as a separator





// ------ UNIT 14 ------

window.deviceData[13]=[];
window.deviceDataSupp[13]=[];

// UNIT SUPPLEMENTAL DATA (deviceDataSupp) ...additional data supplied (ie. ID / units / names etc etc)
window.deviceDataSupp[13][0]={'UID':'00014','UNM':'USALB East Log','LOC':'USALB East'};

// DEVICE SUPPLEMENTAL DATA
window.deviceDataSupp[13][1]={'DID':'00001','DNM':'Power Usage','KEY':'Kwh','TYP':'vertical','MRK':'0+red+0+amber+0+green+70+amber+90+red+100'};
window.deviceDataSupp[13][2]={'DID':'00002','DNM':'Staffing Level','KEY':'&#37;','TYP':'vertical','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[13][3]={'DID':'00003','DNM':'Ambient Temp','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+0+amber+15+green+70+amber+90+red+100'};
window.deviceDataSupp[13][4]={'DID':'00004','DNM':'Comms Status','KEY':'&deg;C','TYP':'switch','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};


// UNIT DATA (deviceData) ...data sent via XMPP (ie. values)
window.deviceData[13][0]={'ACT':'Operating Within Parameters','GEO':'39.169+-76.80'};

// DEVICE DATA1
window.deviceData[13][1]={'VAL':40};
window.deviceData[13][2]={'VAL':35};
window.deviceData[13][3]={'VAL':21};
window.deviceData[13][4]={'VAL':50};

// GPS ROUTE SEQUENCE (leave empty for static OR add positioning that runs X seconds as defined by window.gpsRouteFreq above @ line 50)
window.gpsRoute[13]=[null]; // lat/lon pairs with '+' symbol as a separator






// ------ UNIT 15 ------

window.deviceData[14]=[];
window.deviceDataSupp[14]=[];

// UNIT SUPPLEMENTAL DATA (deviceDataSupp) ...additional data supplied (ie. ID / units / names etc etc)
window.deviceDataSupp[14][0]={'UID':'00015','UNM':'USALB East Ops','LOC':'USALB East'};

// DEVICE SUPPLEMENTAL DATA
window.deviceDataSupp[14][1]={'DID':'00001','DNM':'Power Usage','KEY':'Kwh','TYP':'vertical','MRK':'0+red+0+amber+0+green+70+amber+90+red+100'};
window.deviceDataSupp[14][2]={'DID':'00002','DNM':'Staffing Level','KEY':'&#37;','TYP':'vertical','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};
window.deviceDataSupp[14][3]={'DID':'00003','DNM':'Ambient Temp','KEY':'&deg;C','TYP':'vertical','MRK':'0+red+0+amber+15+green+70+amber+90+red+100'};
window.deviceDataSupp[14][4]={'DID':'00004','DNM':'Comms Status','KEY':'&deg;C','TYP':'switch','MRK':'0+red+10+amber+30+green+70+amber+90+red+100'};


// UNIT DATA (deviceData) ...data sent via XMPP (ie. values)
window.deviceData[14][0]={'ACT':'Operating Within Parameters','GEO':'39.168+-76.803'};

// DEVICE DATA
window.deviceData[14][1]={'VAL':40};
window.deviceData[14][2]={'VAL':35};
window.deviceData[14][3]={'VAL':20};
window.deviceData[14][4]={'VAL':50};

// GPS ROUTE SEQUENCE (leave empty for static OR add positioning that runs X seconds as defined by window.gpsRouteFreq above @ line 50)
window.gpsRoute[14]=[null]; // lat/lon pairs with '+' symbol as a separator






}

initVars();
















// GPS Init
window.GPSFreq=gpsRouteFreq/window.deviceData.length;
window.unitIndex=0;

// Create an array to store index of GEO array, and initially populate all indexes with 0
window.dataIndex=new Array(window.deviceData.length+1).join('0').split('').map(parseFloat);


















// --------------------------------- 
// --------------------------------- 

// MANAGE XMPP SERVER CONNECTION

// ---------------------------------  	
// --------------------------------- 	
	
window.onload = function() {
 
	 

// WEBSOCKET/XMPP SERVER CONNECTION TEST
function onConnect(status){	
	
    if (status == Strophe.Status.CONNECTING) {
        $('aside').prepend('Connecting...');
    }
	
	else if (status == Strophe.Status.CONNFAIL) {
       $('aside').prepend('</br>Connection Failed!');
    }
	
	else if (status == Strophe.Status.DISCONNECTING) {
        $('aside').prepend('</br>Disconnecting...');
    }
	
	else if (status == Strophe.Status.DISCONNECTED) {
        $('aside').prepend('</br>Disconnected!');
    }
	
	else if (status == Strophe.Status.CONNECTED) {
        $('aside').prepend('</br></br>Connected to the Prasaga Network</br></br>');
	
		
		// CREATE / JOIN CHAT ROOM (UPDATE PRESENCE)
		var d = $pres({'from': window.userJID, 'to': window.roomJID + '/' + nickName}).c("status").t("online");
		ws.send(d.tree());

		iq = $iq({
 		   to: window.roomJID,
		    type: 'set'
		}).c("query", {
		    xmlns: Strophe.NS.MUC_OWNER
		});
		iq.c("x", {
		    xmlns: "jabber:x:data",
		    type: "submit"
		});

		
		
		
		// BEGIN RANDOMLY CHANGING DEVICE VALUES AT RANDOM TIMES
		setTimeout(devUpdate,(Math.random()*window.dataFreq)+30);
		
		// BEGIN RANDOMLY CHANGING DEVICE VALUES AT RANDOM TIMES
		setTimeout(gpsUpdate,window.GPSFreq);
		
		}

}























// --------------------------------- 
// --------------------------------- 

// UPDATE DEVICE VALUES

// ---------------------------------  	
// --------------------------------- 

devUpdate = function(){
			
	UCOUNT=window.deviceData.length; // Count number of units
	URAND=Math.floor((Math.random() * UCOUNT)); // Randomly select one unit
	
	DCOUNT=(window.deviceData[URAND].length)-1; // Count number of devices in unit
	DRAND=Math.floor((Math.random() * DCOUNT))+1; // Randomly select one device
				
	window.transCount++;
		
	
	
	
	
	// Adjust device values by random amount
	vari=(Math.random()*100)-50;
	deviceData[URAND][DRAND]['VAL']+=(vari/100);
	
	window.deviceData[URAND][DRAND]['VAL']+=(vari/100);
	
	if(window.deviceData[URAND][DRAND]['VAL']<1) window.deviceData[URAND][DRAND]['VAL']=1;
	if(window.deviceData[URAND][DRAND]['VAL']>99) window.deviceData[URAND][DRAND]['VAL']=99;
	
	
	
	

			
	// Report values to screen
	$('#trns').html(window.transCount);
	$('#devc').html(UCOUNT);
	
	if (window.transCount>70000){
		initVars();
	}
	
	





	// CREATE DATA STRING (KEY1=VAL1&KEY2=VAL2 etc)
	strRes1=[];
	strRes2=[];
	strRes3=[];
	strRes4=[];
	
		
	
	// UNIT SUPPLEMENTAL STRING
	$.each(window.deviceDataSupp[URAND][0], function(key,value) {
		  strRes1.push(key+"="+value);
	});
	
	// UNIT DATA STRING
	$.each(window.deviceData[URAND][0], function(key,value) {
		  strRes2.push(key+"="+value);
	});
	
	// DEVICE SUPPLEMENTAL STRING
	$.each(window.deviceDataSupp[URAND][DRAND], function(key,value) {
		  strRes3.push(key+"="+value);
	});
	
	// DEVICE DATA STRING
	$.each(window.deviceData[URAND][DRAND], function(key,value) {
		  strRes4.push(key+"="+value);
	});
	
	
	
	
	
	
	
	
	
	dataStr=strRes1.join('|')+'|'+strRes2.join('|')+'|'+strRes3.join('|')+'|'+strRes4.join('|');
	
	//console.log("DATASTR: "+dataStr);

	sendMessage(dataStr);
	

	if (($('body').height()+50)>window.innerHeight){
	$('aside').text('');
	}
	
	setTimeout(devUpdate,(Math.random()*window.dataFreq)+30);
}












// --------------------------------- 
// --------------------------------- 

// UPDATE GPS VALUES

// ---------------------------------  	
// --------------------------------- 

gpsUpdate = function(){

		
	
	// IF THIS UNIT HAS A GPS ROUTE
	if (window.gpsRoute[window.unitIndex].length>1){
		
		console.log("GEO MOVE - UNIT: "+window.unitIndex+" SEQUENCE INDEX: "+window.dataIndex[window.unitIndex]);
		
		window.deviceData[window.unitIndex][0]['GEO']=window.gpsRoute[window.unitIndex][window.dataIndex[window.unitIndex]];
		
	
		
	

	// CREATE DATA STRING (KEY1=VAL1&KEY2=VAL2 etc)
	strRes1=[];
	strRes2=[];
	strRes3=[];
	strRes4=[];
	
	
	// UNIT SUPPLEMENTAL STRING
	$.each(window.deviceDataSupp[window.unitIndex][0], function(key,value) {
		  strRes1.push(key+"="+value);
	});
	
	// UNIT DATA STRING
	$.each(window.deviceData[window.unitIndex][0], function(key,value) {
		  strRes2.push(key+"="+value);
	});
	
	// DEVICE SUPPLEMENTAL STRING
	$.each(window.deviceDataSupp[window.unitIndex][1], function(key,value) {
		  strRes3.push(key+"="+value);
	});
	
	// DEVICE DATA STRING
	$.each(window.deviceData[window.unitIndex][1], function(key,value) {
		  strRes4.push(key+"="+value);
	});
	
	dataStr=strRes1.join('|')+'|'+strRes2.join('|')+'|'+strRes3.join('|')+'|'+strRes4.join('|');
	//console.log("DATASTR: "+dataStr);
	sendMessage(dataStr);

		
		
	// RESET INDEX FOR THIS UNIT ON COMPLETED SEQUENCE
	window.dataIndex[window.unitIndex]++;
	if (window.dataIndex[window.unitIndex]==window.gpsRoute[window.unitIndex].length){
		window.dataIndex[window.unitIndex]=0;
	}
	
}

	
	
	
	
// RESET INDEX FOR UNIT ON COMPLETED RUN
window.unitIndex++;
if (window.unitIndex==window.deviceData.length){
	window.unitIndex=0;
}	
	
	

	

setTimeout(gpsUpdate,window.GPSFreq);
	
	
}





window.nickName = "user_nickName", // User nickname
window.userName = "user_userName", // User username
window.passWord = "user_passWord", // User password
window.serverName = "server.com", // Server domain
window.roomName = "room", // Room name
	
window.userJID = window.userName + '@' + window.serverName, // User JID
window.roomJID = window.roomName+'@conference.'+window.serverName, // Room JID







// SEND MESSAGE FUNCTION
function sendMessage(msg) {
	ws.flush();
	
	xml=$msg({
	from: window.userJID,
	to: window.roomJID,
	type:'groupchat'
	}).c('body').t(msg);
	
	ws.send(xml);
	
	xxx=$.text(xml);
	
	$('aside').text(xml);
	
}





// CONNECT TO XMPP SERVER
ws = new Strophe.Connection('http://127.0.0.1:7070/http-bind/');
ws.connect(window.userJID, window.passWord, onConnect);


}
