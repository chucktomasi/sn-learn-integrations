(function runAction(/*GlideRecord*/ current, /*GlideRecord*/ event, /*EmailWrapper*/ email, /*ScopedEmailLogger*/ logger, /*EmailClassifier*/ classifier) {

	var fieldList = ['first_name', 'last_name', 'client_id', 'name', 'email', 'phone' ];

	for (var i = 0; i < fieldList.length; i++) {
		var f = fieldList[i];
		if (email.body[f]) {
			current[f] = email.body[f];
		}
	}
	current.update();

})(current, event, email, logger, classifier);