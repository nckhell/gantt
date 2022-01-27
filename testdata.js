var openPathway = true
var openTracks = true
var openSteps = true
var openActivity = true

var demo_tasks = {
	"data":[
		/** EVENTS */
		{"id":999, "text":"Pathway", "start_date":new Date('2021-12-01T15:30:00'), "completed": false, "element_type": "pathway", "type":"project", "open": openPathway, "hide_bar": false, "pathway_name": "Breast cancer"}, 
		{"id":9991, "text":"When pathway starts", "start_date":new Date('2021-12-01T15:30:00'), "element_type": "pathway_event", "type":"milestone", "rollup": false, "hide_bar": false, "parent":"999", "open": false}, 
		
		/** TRACK */
		{"id":1, "text":"Intake", "start_date":new Date('2021-12-01T15:30:00'), "open": openTracks, "element_type": "track", "type": "project", "parent": "999"},

			{"id":11, "text":"Clinical intake", "start_date":new Date('2021-12-01T15:30:00'), "parent":"1", "open": openSteps, "element_type": "step"},
				{"id":111, "text":"Choose treatment", "start_date":new Date('2021-12-01T15:30:00'), "end_date": new Date('2021-12-02T15:32:00'), "parent":"11", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Doctor"},

			{"id":12, "text":"Message sign informed consent", "start_date":new Date('2021-12-02T15:32:00'), "parent":"1", "open": openSteps, "element_type": "step"},
				{"id":121, "text":"Introduction MyCare app", "start_date":new Date('2021-12-02T15:32:00'), "end_date": new Date('2021-12-02T18:32:00'), "parent":"12", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
				{"id":122, "text":"Informed consent", "start_date":new Date('2021-12-02T15:32:00'), "end_date": new Date('2021-12-02T19:00:00'), "parent":"12", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Patient"},
		
			{"id":13, "text":"Baseline questionnaires + calculations", "start_date":new Date('2021-12-02T19:00:00'), "parent":"1", "open": openSteps, "element_type": "step"},
				{"id":131, "text":"Message to patient: fill in questionnaires", "start_date":new Date('2021-12-02T19:00:00'), "end_date": new Date('2021-12-04T19:00:00'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
				{"id":132, "text":"Patient form: ICHOM baseline", "start_date":new Date('2021-12-04T19:00:00'), "end_date": new Date('2021-12-04T19:05:00'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Patient"},
				{"id":133, "text":"Patient form: Breast-Q baseline", "start_date":new Date('2021-12-04T19:05:00'), "end_date": new Date('2021-12-04T19:15:00'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Patient"},
				{"id":134, "text":"Patient form: EORTC QLQ-C30 baseline", "start_date":new Date('2021-12-04T19:15:00'), "end_date": new Date('2021-12-04T19:33:00'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Patient"},
				{"id":1310, "text":"Patient form: EQ-5D-5L baseline", "start_date":new Date('2021-12-04T19:33:00'), "end_date": new Date('2021-12-04T19:45:00'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Patient"},
				{"id":135, "text":"Calculation EORTC-QLQ-C30", "start_date":new Date('2021-12-04T19:45:00'), "end_date": new Date('2021-12-04T19:45:00'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "calculation",  "stakeholder": "Patient"},
				{"id":136, "text":"Calculation EORTC-QLQ-BR45", "start_date":new Date('2021-12-04T19:45:00'), "end_date": new Date('2021-12-04T19:45:00'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "calculation",  "stakeholder": "Patient"},
				{"id":137, "text":"Calculation Breast-Q", "start_date":new Date('2021-12-04T19:45:00'), "end_date": new Date('2021-12-04T19:45:00'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "calculation",  "stakeholder": "Patient"},
				{"id":138, "text":"Calculation EQ-5D-5L", "start_date":new Date('2021-12-04T19:45:00'), "end_date": new Date('2021-12-04T19:45:00'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "calculation",  "stakeholder": "Patient"},

			{"id":14, "text":"Surgery: side effects", "start_date":new Date('2021-12-04T19:45:00'), "parent":"1", "open": openSteps, "element_type": "step"},
				{"id":141, "text":"Patient form: baseline side effects", "start_date":new Date('2021-12-04T19:45:00'), "end_date": new Date('2021-12-04T19:55:00'), "parent":"14", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
				{"id":142, "text":"Calculation PRO-CTCAE (side effects)", "start_date":new Date('2021-12-04T19:55:00'), "end_date": new Date('2021-12-04T19:55:00'), "parent":"14", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
		
		/** TRACK */
		{"id":2, "text":"Surgery", "start_date":new Date('2021-12-04T19:55:00'), "open": openTracks, "element_type": "track", "type": "project", "parent": "999"},
		
			{"id":21, "text":"PRE-OP Reconstruction", "start_date":new Date('2021-12-04T19:55:00'), "parent":"2", "open": openSteps, "element_type": "step"},
				{"id":211, "text":"Message", "start_date":new Date('2021-12-04T19:55:00'), "end_date": new Date('2021-12-05T19:55:00'), "parent":"21", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
			
			{"id":22, "text":"POST-OP Reconstruction", "start_date":new Date('2021-12-08T19:55:00'), "parent":"2", "open": openSteps, "element_type": "step"},
				{"id":221, "text":"Message", "start_date":new Date('2021-12-08T19:55:00'), "end_date": new Date('2021-12-08T21:00:00'), "parent":"22", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
			
			{"id":23, "text":"POST-OP 5 days after surgery", "start_date":new Date('2021-12-12T21:00:00'), "parent":"2", "open": openSteps, "element_type": "step"},
				{"id":231, "text":"Message to patient: fill in questionnaires", "start_date":new Date('2021-12-12T21:00:00'), "end_date": new Date('2021-12-13T08:00:00'), "parent":"23", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
				{"id":232, "text":"Patient form: side effects post-op", "start_date":new Date('2021-12-13T08:00:00'), "end_date": new Date('2021-12-13T08:07:00'), "parent":"23", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Patient"},
				{"id":233, "text":"Calculation PRO-CTCAE (side effects)", "start_date":new Date('2021-12-13T08:07:00'), "end_date": new Date('2021-12-13T08:15:00'), "parent":"23", "open": openActivity, "element_type": "activity", "activity_type": "calculation",  "stakeholder": "Patient"},
				
			{"id":24, "text":"Questionnaires 2 months (Mammacare)", "start_date":new Date('2022-02-13T08:15:00'), "parent":"2", "open": openSteps, "element_type": "step"},
				{"id":241, "text":"Message to patient: fill in questionnaires", "start_date":new Date('2022-02-13T08:15:00'), "end_date": new Date('2022-02-13T17:00:00'), "parent":"24", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
				{"id":242, "text":"Patient form: Mammacare", "start_date":new Date('2022-02-13T17:00:00'), "end_date": new Date('2022-02-13T17:15:00'), "parent":"24", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Patient"},

			/** Alert */
			{"id":3, "text":"Alerts", "start_date":new Date('2021-12-04T19:55:00'), "open": openTracks, "element_type": "track", "type": "project", "parent": "999"},
					
			{"id":31, "text":"Send side effects information", "start_date":new Date('2021-12-13T08:07:00'), "parent":"3", "open": openSteps, "element_type": "step"},
				{"id":331, "text":"Side effects brochure", "start_date":new Date('2021-12-13T08:07:00'), "end_date": new Date('2021-12-16T08:00:00'), "parent":"31", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
			
			/** EVENTS */
			{"id":9992, "text":"When data point \"Nausa\" is collected and is higher than 5", "start_date":new Date('2021-12-13T08:07:00'), "element_type": "pathway_event", "type":"milestone", "rollup": false, "hide_bar": false, "parent":"232", "open": false}, 
			{"id":9993, "text":"When step \"Chirurgie: neveneffecten\" is completed", "start_date":new Date('2021-12-04T19:55:00'), "element_type": "pathway_event", "type":"milestone", "rollup": false, "hide_bar": false, "parent":"14", "open": false}, 	

		/** TRACK */
		{"id":4, "text":"Non-completed track", "start_date":new Date('2021-12-04T19:55:00'), "end_date": new Date(), "completed": false, "open": openTracks, "element_type": "track", "type": "project", "parent": "999"},
		
			{"id":41, "text":"Non-completed step", "start_date":new Date('2021-12-04T19:55:00'), "end_date": new Date(), "completed": false, "parent":"4", "open": openSteps, "element_type": "step"},
				{"id":411, "text":"Non completed activity", "start_date":new Date('2021-12-04T19:55:00'), "end_date": new Date(), "completed": false, "parent":"41", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
	],
	"links":[
		{"id":"1","source":"9993","target":"2","type":"0"},
		{"id":"2","source":"9992","target":"3","type":"0"},
		{"id":"3","source":"9991","target":"1","type":"0"}
	]
};

var demo_tasks_full_days = {
	"data":[
		/** EVENTS */
		{"id":999, "text":"Pathway", "start_date":new Date('2021-12-01'), "end_date":new Date('2021-12-02'), "element_type": "pathway", "type":"project", "open": openPathway, "hide_bar": false, "pathway_name": "Breast cancer"}, 
		// {"id":9991, "text":"When pathway starts", "start_date":new Date('2021-12-01'), "element_type": "pathway_event", "type":"milestone", "rollup": false, "hide_bar": false, "parent":"999", "open": false}, 
		
		/** TRACK */
		{"id":1, "text":"Opstart", "open": openTracks, "element_type": "track", "type": "project", "parent": "999"},

			{"id":11, "text":"Clinical: opstart zorgpad", "parent":"1", "open": openSteps, "element_type": "step"},
				{"id":111, "text":"Keuze behandeling Activity #1", "start_date":new Date('2021-12-01'), "end_date": new Date('2021-12-03'), "parent":"11", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Doctor"},

			{"id":12, "text":"Introductie bericht + geïnformeerde toestemming", "parent":"1", "open": openSteps, "element_type": "step"},
				{"id":121, "text":"Introductie MyCare app", "start_date":new Date('2021-12-02'), "end_date": new Date('2021-12-03'), "parent":"12", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
				{"id":122, "text":"Geïnformeerde toestemming", "start_date":new Date('2021-12-02'), "end_date": new Date('2021-12-03'), "parent":"12", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Patient"},
		
			{"id":13, "text":"Baseline formulieren + calculaties", "parent":"1", "open": openSteps, "element_type": "step"},
				{"id":131, "text":"Message to patient: invullen vragenlijsten", "start_date":new Date('2021-12-02'), "end_date": new Date('2021-12-05'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
				{"id":132, "text":"Patient form: ICHOM baseline", "start_date":new Date('2021-12-04'), "end_date": new Date('2021-12-05'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Patient"},
				{"id":133, "text":"Patient form: Breast-Q baseline", "start_date":new Date('2021-12-04'), "end_date": new Date('2021-12-05'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Patient"},
				{"id":134, "text":"Patient form: EORTC QLQ-C30 baseline", "start_date":new Date('2021-12-04'), "end_date": new Date('2021-12-05'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Patient"},
				{"id":1310, "text":"Patient form: EQ-5D-5L baseline", "start_date":new Date('2021-12-04'), "end_date": new Date('2021-12-05'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Patient"},
				{"id":135, "text":"Calculation EORTC-QLQ-C30", "start_date":new Date('2021-12-04'), "end_date": new Date('2021-12-05'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "calculation",  "stakeholder": "Patient"},
				{"id":136, "text":"Calculation EORTC-QLQ-BR45", "start_date":new Date('2021-12-04'), "end_date": new Date('2021-12-05'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "calculation",  "stakeholder": "Patient"},
				{"id":137, "text":"Calculation Breast-Q", "start_date":new Date('2021-12-04'), "end_date": new Date('2021-12-05'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "calculation",  "stakeholder": "Patient"},
				{"id":138, "text":"Calculation EQ-5D-5L", "start_date":new Date('2021-12-04'), "end_date": new Date('2021-12-05'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "calculation",  "stakeholder": "Patient"},

			{"id":14, "text":"Chirurgie: neveneffecten", "parent":"1", "open": openSteps, "element_type": "step"},
				{"id":141, "text":"Patient form: neveneffecten baseline (Chirurgie)", "start_date":new Date('2021-12-04'), "end_date": new Date('2021-12-05'), "parent":"14", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
				{"id":142, "text":"Calculation PRO-CTCAE (neveneffecten)", "start_date":new Date('2021-12-04'), "end_date": new Date('2021-12-05'), "parent":"14", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
		
		/** TRACK */
		{"id":2, "text":"Chirurgie", "start_date":new Date('2021-12-04'), "open": openTracks, "element_type": "track", "type": "project", "parent": "999"},
		
			{"id":21, "text":"PRE-OP Reconstructie in tweede tijd", "parent":"2", "open": openSteps, "element_type": "step"},
				{"id":211, "text":"Message", "start_date":new Date('2021-12-04'), "end_date": new Date('2021-12-06'), "parent":"21", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
			
			{"id":22, "text":"POST-OP Reconstructie in tweede tijd", "parent":"2", "open": openSteps, "element_type": "step"},
				{"id":221, "text":"Message", "start_date":new Date('2021-12-08'), "end_date": new Date('2021-12-09'), "parent":"22", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
			
			{"id":23, "text":"POST-OP Dag 5 na ingreep", "parent":"2", "open": openSteps, "element_type": "step"},
				{"id":231, "text":"Message to patient: invullen vragenlijsten", "start_date":new Date('2021-12-12'), "end_date": new Date('2021-12-14'), "parent":"23", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
				{"id":232, "text":"Patient form: neveneffecten post-op (Chirurgie)", "start_date":new Date('2021-12-13'), "end_date": new Date('2021-12-14'), "parent":"23", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Patient"},
				{"id":233, "text":"Calculation PRO-CTCAE (neveneffecten)", "start_date":new Date('2021-12-13'), "end_date": new Date('2021-12-14'), "parent":"23", "open": openActivity, "element_type": "activity", "activity_type": "calculation",  "stakeholder": "Patient"},
				
			{"id":24, "text":"Vragenlijst 2 maand (Mammacare)", "parent":"2", "open": openSteps, "element_type": "step"},
				{"id":241, "text":"Message to patient: invullen vragenlijsten", "start_date":new Date('2022-02-13'), "end_date": new Date('2022-02-14'), "parent":"24", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
				{"id":242, "text":"Patient form: Mammacare K1)", "start_date":new Date('2022-02-13'), "end_date": new Date('2022-02-14'), "parent":"24", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Patient"},

			/** Alert */
			{"id":3, "text":"Alerts", "open": openTracks, "element_type": "track", "type": "project", "parent": "999"},
					
			{"id":31, "text":"Send side effects information", "parent":"3", "open": openSteps, "element_type": "step"},
				{"id":331, "text":"Side effects brochure", "start_date":new Date('2021-12-13'), "end_date": new Date('2021-12-17'), "parent":"31", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
			
			/** EVENTS */
			{"id":9992, "text":"When data point \"Nausa\" is collected and is higher than 5", "start_date":new Date('2021-12-13'), "element_type": "pathway_event", "type":"milestone", "rollup": false, "hide_bar": false, "parent":"232", "open": false}, 
			{"id":9993, "text":"When step \"Chirurgie: neveneffecten\" is completed", "start_date":new Date('2021-12-04'), "element_type": "pathway_event", "type":"milestone", "rollup": false, "hide_bar": false, "parent":"14", "open": false}, 	
	],
	"links":[
		{"id":"1","source":"9993","target":"2","type":"0"},
		{"id":"2","source":"9992","target":"3","type":"0"},
		{"id":"3","source":"9991","target":"1","type":"0"}
	]
};