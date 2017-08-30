

var Downloader = require('mt-files-downloader');
var q = require('q');
var firebase = require('firebase-admin');
var FIREBASE_URL = process.env.FIREBASE_URL;
var mkdir = require('mkdirp');
var path = require('path');
var os = require('os');
var fs =require('fs');
var serviceAccount = require('../config/firebase-lexlab-firebase-adminsdk-j7h05-3695f670cc.json');
var download = function(useurl, dest, ref, num){
  /* if(process.env.SERVERNAME=='wiley'){


  var a = firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://lexlab.firebaseio.com'
  },'s')
}
else{
  var configb = {
   credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://dazzling-fire-2433.firebaseio.com"
  };
  var a = firebase.initializeApp(configb,'p');
}*/

   var deferred = q.defer();
    // var ar = firebase.database().ref().child('content/REPORT');
    // //var auth = firebase.auth().signInAnonymously();
    /*var refr = a.database().ref();
    // refr.authAnonymously().then(function(error, authData){
   var t = (ref !== undefined) ? true : ref = refr.child('content').child('REPORT');*/
    var downloader = new Downloader();


    //mkdir(dest, {mode: '777'}, mkcall);

    var mkcall = function(err, made) {
      if(err) {
        console.log(err);
      }
    };
    var fileSavePath = path.join(os.tmpdir(), dest);

     console.log('File will be downloaded from\n '+ useurl +' \nto\n '+ dest);


    var dl = downloader.download(useurl, dest);
    dl.setOptions({ threadsCount: 6, timeout: 15000 });
    dl.setRetryOptions({ maxRetries: 6, retryInterval: 4000 });

    dl.start();
    dl.on('error', function (dl) {
        dl.destroy();
        deferred.reject(dl);
    });
    dl.on('end', function (dl) {

//         var source = fs.createReadStream(fileSavePath);

//         var finaldest = fs.createWriteStream(dest);
//     source.pipe(finaldest);
// source.on('end', function() { console.log(finaldest + ' /* copied */ ');});
//         source.on('error', function(err) { console.log('/* error */'); });



        deferred.resolve(dl);

    });
    var num = num || 1;
    require('./_handleEvents')(dl, num);
    require('./_printStats')(dl, num);


   /* var timer = setInterval(function () {
        if (dl.status === 0) {
            ref.update({ 'status': 'warning' });
        } else if (dl.status == 1) {
            var stats = dl.getStats();
            ref.update({
                'status': 'info',
                'complete': stats.total.completed,
                'total': stats.total.size,
                'downloaded': stats.total.downloaded,
                'speed': Downloader.Formatters.speed(stats.present.speed),
                'elapsed': Downloader.Formatters.elapsedTime(stats.present.time),
                'eta': Downloader.Formatters.remainingTime(stats.future.eta)
            });
        } else if (dl.status == 2) {
            ref.update({ 'status': 'warning' });
        } else if (dl.status == 3) {
            ref.update({ 'status': 'success' });
        } else if (dl.status == -1) {
            ref.update({ 'status': 'danger' });
        } else if (dl.status == -2) {
            ref.update({ 'status': 'primary' });
        } else if (dl.status == -3) {
            ref.update({ 'status': 'danger' });
        }

        if (dl.status === -1 || dl.status === 3 || dl.status === -3) {
            clearInterval(timer);
            timer = null;
        }
    }, 1000);*/

    return deferred.promise;
};



module.exports = {
    download: download
};
