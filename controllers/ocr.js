var express = require("express");
var q = require('q');
var path = require('path');
var fs = require('fs');
var shell = require('shelljs');
var textract = require('textract');
var app = express();
var text =require('./text.js');

exports.ocrctrl = function(req,ref,record){
  var deferred = q.defer();
     //express.static(path.join(process.cwd(), 'files'))
    var filepath = req.file;
//      var file = path.join(process.cwd(),'files', filepath);
//    console.log(filepath);
   
    var tmp = shell.tempdir();
    // console.log(tmp);
    var outpath = filepath.replace(/\.pdf$/,  '_ocr.pdf');
    console.log(outpath);
    //var app = outpath.slice(0,outpath.indexOf('-'));
    // try{
    //     textract.fromFileWithPath(path.join(process.cwd(), 'files', outpath), function(err, text){
    //         res.json(text);
    //     });
    // }
    // catch(ex){
         if(!fs.existsSync(outpath)){
             var child = shell.exec(__dirname + '/../../pdfocr/pdfocr.rb -i ' + filepath + ' -o ' + outpath, { async: true }, function (code, stdout, stderr) {/*console.log(code);*/ });

child.stdout.on('data', function(data) {
            /* ... do something with data ... */
             console.log('data',data);
           
    });
    child.stdout.on('error',function(err){
            deferred.reject(err);
    });
    child.stdout.on('end', function(){
        textract.fromFileWithPath(outpath,{splitPages:true,layout:"htmlmeta"}, function(err,text){
                if (err){
                    deferred.reject(err);
                }
                else{
                //console.log('text',text);
                
                deferred.resolve(text);
               // child.exit(0);  
                }
                //shell.cat(text).to(filepath.slice(filepath.lastIndexOf('.') + 1,filepath.length) + 'txt');
           
                // res.write(text);
           
         });
        
    });
    
    
   }else{
       textract.fromFileWithPath(outpath,{layout:"htmlmeta",splitPages:true}, function(err, text){
            if (err){
                deferred.reject(err);
            }
            else{
                //console.log('text',text);
                
                return deferred.resolve(text);
            }
            
        });
   }
    // }
    // finally{
        
    // }
    
    return deferred.promise;
  
};

//module.exports = app;