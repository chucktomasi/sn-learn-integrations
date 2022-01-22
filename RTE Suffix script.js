/* Example Script 
 (function(batch, output) {
     for (var i = 0; i < batch.length; i++) {
 
         //step1: access the input variables
         var a = batch[i].input; //Value of the source field. 
 
         //step2: Your script/code goes here.
         var b = a + 1;
 
         //step3: set the output for each elements
         output[i] = b;
     }
 
 })(batch, output);
 */
 
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