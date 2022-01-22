(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

	var answer = {
		"course" : {
			"id"              : null,
			"name"            : "No course",
			"start"           : null,
			"end"             : null,
			"capacity"        : 0,
			"min_threshold"   : 0,
			"attendee_count"  : 0,
			"course_offering" : {
				"value"         : null,
				"display_value" : null
			},
			"state": {
				"value"         : null,
				"display_value" : null
			},
			"assigned_to" : {
				"value"         : null,
				"display_value" : null

			}
		},

		"students" : []
	};
	var responseStatus = 404;
	var courseName = request.queryParams.name.toString();	
	var courseGr = new GlideRecord('x_snc_training_course');

	if (courseGr.get('name', courseName)) {
				
		// Update the response status
		responseStatus = 200;
		
		// Populate the course details
		answer.course = {
			"id"              : courseGr.getUniqueValue(),
			"name"            : courseGr.getValue('name'),
			"start"           : courseGr.getValue('work_start'),
			"end"             : courseGr.getValue('work_end'),
			"capacity"        : parseInt(courseGr.getValue('capacity'),10),
			"min_threshold"   : parseInt(courseGr.getValue('min_threshold'),10),
			"attendee_count"  : parseInt(courseGr.getValue('attendee_count'),10),
			"course_offering" : {
				"value"         : courseGr.getValue('course_offering'),
				"display_value" : courseGr.course_offering.getDisplayValue()
			},
			"state"           : {
				"value"         : courseGr.getValue('state'),
				"display_value" : courseGr.state.getDisplayValue()
			},
			"assigned_to"     : {
				"value"         : courseGr.getValue('assigned_to'),
				"display_value" : courseGr.assigned_to.getDisplayValue()
			}
		};
		
		// Look up attendee records
		var studentGr = new GlideRecord('x_snc_training_attendee');
		studentGr.addQuery('course', courseGr.getUniqueValue());
		studentGr.query();

		while (studentGr.next()) {
			var empGr = studentGr.employee.getRefRecord();
			var studentObj = {
				"id"         : studentGr.getUniqueValue(),
				"first_name" : empGr.getValue('first_name'),
				"last_name"  : empGr.getValue('last_name'),
				"name"       : empGr.getValue('name'),
				"email"      : empGr.getValue('email'),
			};
			answer.students.push(studentObj);
		}
	}
	
	response.setBody(answer);
	response.setStatus(responseStatus);

})(request, response);