(function (batch, output) {

    for (var i = 0; i < batch.length; i++) {
        
        var input = batch[i].input;

        if (input == null) {
            output[i] == false;
        } else {
            output[i] = input.indexOf('servicenow') >= 0;
        }
    }

})(batch, output);