var openPathway = true
var openTracks = true
var openSteps = true
var openActivity = true

var demo_tasks = {
	"data":[
		/** EVENTS */
		{"id":999, "text":"Pathway", "start_date":new Date('2021-12-01T15:30:00'), "element_type": "pathway", "type":"project", "open": openPathway, "hide_bar": false, "pathway_name": "Breast cancer"}, 
		{"id":9991, "text":"When pathway starts", "start_date":new Date('2021-12-01T15:30:00'), "element_type": "pathway_event", "type":"milestone", "rollup": false, "hide_bar": false, "parent":"999", "open": false}, 
		
		/** TRACK */
		{"id":1, "text":"Opstart", "start_date":new Date('2021-12-01T15:30:00'), "open": openTracks, "element_type": "track", "type": "project", "parent": "999"},

			{"id":11, "text":"Clinical: opstart zorgpad", "start_date":new Date('2021-12-01T15:30:00'), "parent":"1", "open": openSteps, "element_type": "step"},
				{"id":111, "text":"Keuze behandeling Activity #1", "start_date":new Date('2021-12-01T15:30:00'), "end_date": new Date('2021-12-02T15:32:00'), "parent":"11", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Doctor"},

			{"id":12, "text":"Introductie bericht + geïnformeerde toestemming", "start_date":new Date('2021-12-02T15:32:00'), "parent":"1", "open": openSteps, "element_type": "step"},
				{"id":121, "text":"Introductie MyCare app", "start_date":new Date('2021-12-02T15:32:00'), "end_date": new Date('2021-12-02T18:32:00'), "parent":"12", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
				{"id":122, "text":"Geïnformeerde toestemming", "start_date":new Date('2021-12-02T15:32:00'), "end_date": new Date('2021-12-02T19:00:00'), "parent":"12", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Patient"},
		
			{"id":13, "text":"Baseline formulieren + calculaties", "start_date":new Date('2021-12-02T19:00:00'), "parent":"1", "open": openSteps, "element_type": "step"},
				{"id":131, "text":"Patiënt bericht: invullen vragenlijsten", "start_date":new Date('2021-12-02T19:00:00'), "end_date": new Date('2021-12-04T19:00:00'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
				{"id":132, "text":"Patient formulier: ICHOM baseline", "start_date":new Date('2021-12-04T19:00:00'), "end_date": new Date('2021-12-04T19:05:00'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Patient"},
				{"id":133, "text":"Patient formulier: Breast-Q baseline", "start_date":new Date('2021-12-04T19:05:00'), "end_date": new Date('2021-12-04T19:15:00'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Patient"},
				{"id":134, "text":"Patient formulier: EORTC QLQ-C30 baseline", "start_date":new Date('2021-12-04T19:15:00'), "end_date": new Date('2021-12-04T19:33:00'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Patient"},
				{"id":1310, "text":"Patient formulier: EQ-5D-5L baseline", "start_date":new Date('2021-12-04T19:33:00'), "end_date": new Date('2021-12-04T19:45:00'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Patient"},
				{"id":135, "text":"Calculation EORTC-QLQ-C30", "start_date":new Date('2021-12-04T19:45:00'), "end_date": new Date('2021-12-04T19:45:00'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "calculation",  "stakeholder": "Patient"},
				{"id":136, "text":"Calculation EORTC-QLQ-BR45", "start_date":new Date('2021-12-04T19:45:00'), "end_date": new Date('2021-12-04T19:45:00'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "calculation",  "stakeholder": "Patient"},
				{"id":137, "text":"Calculation Breast-Q", "start_date":new Date('2021-12-04T19:45:00'), "end_date": new Date('2021-12-04T19:45:00'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "calculation",  "stakeholder": "Patient"},
				{"id":138, "text":"Calculation EQ-5D-5L", "start_date":new Date('2021-12-04T19:45:00'), "end_date": new Date('2021-12-04T19:45:00'), "parent":"13", "open": openActivity, "element_type": "activity", "activity_type": "calculation",  "stakeholder": "Patient"},

			{"id":14, "text":"Chirurgie: neveneffecten", "start_date":new Date('2021-12-04T19:45:00'), "parent":"1", "open": openSteps, "element_type": "step"},
				{"id":141, "text":"Patient formulier: neveneffecten baseline (Chirurgie)", "start_date":new Date('2021-12-04T19:45:00'), "end_date": new Date('2021-12-04T19:55:00'), "parent":"14", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
				{"id":142, "text":"Calculation PRO-CTCAE (neveneffecten)", "start_date":new Date('2021-12-04T19:55:00'), "end_date": new Date('2021-12-04T19:55:00'), "parent":"14", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
		
		/** TRACK */
		{"id":2, "text":"Chirurgie", "start_date":new Date('2021-12-04T19:55:00'), "open": openTracks, "element_type": "track", "type": "project", "parent": "999"},
		
			{"id":21, "text":"PRE-OP Reconstructie in tweede tijd", "start_date":new Date('2021-12-04T19:55:00'), "parent":"2", "open": openSteps, "element_type": "step"},
				{"id":211, "text":"Message", "start_date":new Date('2021-12-04T19:55:00'), "end_date": new Date('2021-12-05T19:55:00'), "parent":"21", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
			
			{"id":22, "text":"POST-OP Reconstructie in tweede tijd", "start_date":new Date('2021-12-08T19:55:00'), "parent":"2", "open": openSteps, "element_type": "step"},
				{"id":221, "text":"Message", "start_date":new Date('2021-12-08T19:55:00'), "end_date": new Date('2021-12-08T21:00:00'), "parent":"22", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
			
			{"id":23, "text":"POST-OP Dag 5 na ingreep", "start_date":new Date('2021-12-12T21:00:00'), "parent":"2", "open": openSteps, "element_type": "step"},
				{"id":231, "text":"Patiënt bericht: invullen vragenlijsten", "start_date":new Date('2021-12-12T21:00:00'), "end_date": new Date('2021-12-13T08:00:00'), "parent":"23", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
				{"id":232, "text":"Patient formulier: neveneffecten post-op (Chirurgie)", "start_date":new Date('2021-12-13T08:00:00'), "end_date": new Date('2021-12-13T08:07:00'), "parent":"23", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Patient"},
				{"id":233, "text":"Calculation PRO-CTCAE (neveneffecten)", "start_date":new Date('2021-12-13T08:07:00'), "end_date": new Date('2021-12-13T08:15:00'), "parent":"23", "open": openActivity, "element_type": "activity", "activity_type": "calculation",  "stakeholder": "Patient"},
				
			{"id":24, "text":"Vragenlijst 2 maand (Mammacare)", "start_date":new Date('2022-02-13T08:15:00'), "parent":"2", "open": openSteps, "element_type": "step"},
				{"id":241, "text":"Patiënt bericht: invullen vragenlijsten", "start_date":new Date('2022-02-13T08:15:00'), "end_date": new Date('2022-02-13T17:00:00'), "parent":"24", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
				{"id":242, "text":"Patient formulier: Mammacare K1)", "start_date":new Date('2022-02-13T17:00:00'), "end_date": new Date('2022-02-13T17:15:00'), "parent":"24", "open": openActivity, "element_type": "activity", "activity_type": "form",  "stakeholder": "Patient"},

			/** Alert */
			{"id":3, "text":"Alerts", "start_date":new Date('2021-12-04T19:55:00'), "open": openTracks, "element_type": "track", "type": "project", "parent": "999"},
					
			{"id":31, "text":"Send side effects information", "start_date":new Date('2021-12-13T08:07:00'), "parent":"3", "open": openSteps, "element_type": "step"},
				{"id":331, "text":"Side effects brochure", "start_date":new Date('2021-12-13T08:07:00'), "end_date": new Date('2021-12-16T08:00:00'), "parent":"31", "open": openActivity, "element_type": "activity", "activity_type": "message",  "stakeholder": "Patient"},
			
			/** EVENTS */
			{"id":9992, "text":"When data point \"Nausa\" is collected and is higher than 5", "start_date":new Date('2021-12-13T08:07:00'), "element_type": "pathway_event", "type":"milestone", "rollup": false, "hide_bar": false, "parent":"232", "open": false}, 
			{"id":9993, "text":"When step \"Chirurgie: neveneffecten\" is completed", "start_date":new Date('2021-12-04T19:55:00'), "element_type": "pathway_event", "type":"milestone", "rollup": false, "hide_bar": false, "parent":"14", "open": false}, 	
	],
	"links":[
		{"id":"1","source":"9993","target":"2","type":"0"},
		{"id":"2","source":"9992","target":"3","type":"0"},
		{"id":"3","source":"9991","target":"1","type":"0"}
	]
};