var http = require('https');
var fs = require('fs');
var path = require('path');
var child_process = require('child_process');
var q = require('q');
var StreamZip = require('node-stream-zip');

//var firebase = require('firebase');

//var ref = firebase.database().ref();
    module.exports = function (req, res, inputfile, retryurl, config) {
        var deferred = q.defer();
     
            console.log(inputfile);
        
            var phd = require(path.join(__dirname, '..','..','controllers','phd'));
            var $patentsearch =  require(path.join(__dirname, '..', '..', 'controllers', 'patentsearch'));
            var $roarmap  = require(path.join(__dirname, '..', '..', 'controllers', 'roarmap'));

            var thing =  path.resolve(__dirname,inputfile.toString());
           if(!fs.accessSync(thing)){
               var zip = new StreamZip({
                file: inputfile,
                storeEntries: true
            });
           }
           else{
            var zip = new StreamZip({
                file: thing,
                storeEntries: true
            });
           }
            zip.on('error', function (err) { 
                
                console.log(err); 
                
                fs.unlink(inputfile, function(){return});
                
                setTimeout(function(){
                    http.get(retryurl);
                    // res.redirect(301, retryurl);
                },3000);
        });
            zip.on('ready', function () {
                console.log('Entries read: ' + zip.entriesCount);
                
                zip.extract(null, path.join(process.cwd(), 'files', 'public', 'uspto'), function (err, count) {
                    console.log('Extracted ' + count + ' entries');
                   
                  // res.write('Extracted ' + count + ' entries');
                   //setTimeout(function(){
                  //     deferred.resolve(count); 
                //    },1000);
                   //console.log(phd.phdparser(inputfile.toString().replace('.zip', ''))); 
                   //var pphd = phd.phdparser(inputfile.slice(inputfile.toString().lastIndexOf('/')||0,inputfile.toString().length));
                   var pphd = phd.phdparser(config.APPNUM);
                   console.log(pphd);
                   var newobj = {};
                   pphd.application.forEach(function (innerarray, key) {
                       if (innerarray[0] == 'Class / Subclass') {
                           newobj['Class Subclass'] = innerarray[1]
                       } else {
                           newobj[innerarray[0]] = innerarray[1]
                       }
                       pphd.application = newobj
                       console.log(newobj);
                   });
                   $roarmap(pphd, pphd, config).then(function (json) {
                resp.json(json);
              });
                //    $patentsearch(pphd, config, pphd).then(function (patentobj) {
                //        pphd.patent = patentobj.patent
                //        pphd.pubapp = patentobj.pubapp
                //        $roarmap(pphd, pphd, config).then(function (json) {
                //            console.log(json);
                //            resp.json(json);
                //        });
                //    });
                });

            });
            
            zip.on('extract', function (entry, file) {
                console.log('Extracted ' + entry.name + ' to ' + file);
              });
            zip.on('entry', function (entry) {
                console.log('Read entry ', entry.name);
            });
            
            zip.on('done', function () {
                console.log('Finished!');
                 deferred.resolve(inputfile);
            });
         //});

            return deferred.promise;
         
        //}
    };