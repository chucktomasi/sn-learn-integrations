/* Example Script 
 (function(batch, output) {
     for (var i = 0; i < batch.length; i++) {

         //step1: access the input variables
         var a = batch[i].input1; //Value of the first source field. 
         var b = batch[i].input2; //Value of the second source field. 

         //step2: Your script/code goes here.
         var c = a + b;

         //step3: set the output for each elements
         output[i] = b;
     }

 })(batch, output);
 */

(function (batch, output) {
	for (var i = 0; i < batch.length; i++) {

		var a = batch[i].first_name + '';
		var b = batch[i].last_name + '';

		var c = a.trim().toLowerCase() + '.' + b.trim().toLowerCase();

		output[i] = c;
	}

})(batch, output);