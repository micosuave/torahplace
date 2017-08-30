

    var q = require('q');
    var deferred = q.defer();
    var fs = require('fs');
    var path = require('path');
    var shell = require('shelljs');
    
    
   

    module.exports = function (input) {
        var doocr = function(input){
            
        var output = input.toString().replace('.pdf', '_ocr.pdf');

         var child = shell.exec('./pdfocr/pdfocr.rb -i ' + input + ' -o ' + output, {async: true}, callback);
         
         var callback = function(code, stdout, stderr){
           console.log(code);
           console.log(stdout);   
            deferred.resolve(output);  
        };
         deferred.resolve(output);   
    };
    doocr(input);
    return deferred.promise;
};