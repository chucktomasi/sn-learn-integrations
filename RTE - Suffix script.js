(function (batch, output) {

    for (var i = 0; i < batch.length; i++) {
        
        // Step 1: Access the input variable
        var a = batch[i].input;

        // Step 2: perform operation
        var b = a + " (Now)";

        // Step 3: set the output variable
        output[i] = b;
    }

})(batch, output);