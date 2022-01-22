var attendeeGr = new GlideRecord('x_snc_training_attendee');
attendeeGr.addQuery('course', '112d90b4233200109b3dcb5a56bf6575');
attendeeGr.addQuery('state', 'registered');
attendeeGr.query();

while (attendeeGr.next()) {
    gs.info(attendeeGr.course.name + '|' + attendeeGr.employee.getDisplayValue());
}