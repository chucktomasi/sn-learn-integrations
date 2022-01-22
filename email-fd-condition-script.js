/*
**Access Flow/Action data using the fd_data object. Script must return a value.
**example: var shortDesc = fd_data.trigger.current.short_description;
**return shortDesc;
**
**Requires GlideRecord encodedQuery response, example:
**"active=true^short_descriptionSTARTSWITHtest";
*/
var answer = 'client_id=NO CLIENT ID';
var subject = fd_data.trigger.subject.toString();
var pos = subject.indexOf('CLIENT UPDATE ');

if (pos >= 0) {
    answer = 'client_id=' + subject.replace('CLIENT UPDATE ', '');
}

return answer;