var fs = require('fs');
var path = require('path');
var unzip = require('./zipfile');
// var que = require('./firequeue');
var watcher = function(req, res, files){
        //Var sourcedirectory = path.join(process.cwd(), 'files/uploads/');
        var publicdirectory = path.join(process.cwd(), 'files', req.user._id.toString());
        //Privatedirectory = path.join('/home/leo/files','private',req.user._id)
        var i = files.length - 1;
        var file = files[i] || files;
        var date = new Date();
        var now = date;
        console.log(__filename + ': ' + files + ' |' + date);
        var source = fs.createReadStream(file);
        var filename = file.slice(file.lastIndexOf('/')+1, file.length);
        console.log(__filename + ': ' + filename + ' |' + date);
        var dest = fs.createWriteStream(path.join(publicdirectory, filename));
        var dest2 =  fs.createWriteStream(path.join(publicdirectory, filename + '__' + now.getFullYear() + '-'+ now.getMonth() + '-' + now.getDate() + '::' + now.getHours() +':'+ now.getMinutes()+'.html'));
var closer = function(req, res, filename) {
                 if (filename.indexOf('.zip') > -1){
                 console.log("zipfile! extracting...");
                 res.write("zipfile! extracting...\n\n");
                //  que();
                 unzip(req, res, filename);

                 }
         };



        source.pipe(dest);
source.on('end', function() { console.log(filename + ' /* copied */ '); closer(req, res, filename);});
        source.on('error', function(err) { console.log('/* error */'); this.close();});
source.pipe(dest2);
// fs.watch(sourcedirectory, function (event, filename) {
//     console.log('event is: ' + event);
//     if (filename) {
//         console.log('filename provided: ' + filename);

//         var source = fs.createReadStream(path.join(sourcedirectory, filename));
//         var dest = fs.createWriteStream(path.join(publicdirectory,filename));

//         source.pipe(dest);

// } else {
//         console.log('filename not provided');
//     }

// });

};

module.exports = watcher;

