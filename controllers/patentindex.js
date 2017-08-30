exports.getPagesServedByAngular = function(req, res){
    
   /* if(req.hostname == ('localhost'||'micoff.local'||'lexspace.net')){
            var FIREBASE_URL = process.env.FIREBASE_DEV_URL;
            var FIREBASE_SECRET = process.env.FIREBASE_DEV_SECRET;
    }else{
     */   
    
    
             var FIREBASE_URL = process.env.FIREBASE_URL;
            var FIREBASE_SECRET = process.env.FIREBASE_SECRET;
    
    /*}*/
    var firebase = require('firebase');
    var firebaseTokenGenerator = require('firebase-token-generator');
    var tokenGenerator = new firebaseTokenGenerator(FIREBASE_SECRET);
    var firebaseQ = require("firebase-queue");
    if (req.user) {
        var d = new Date();
        var now = d.getTime();
        var expires = now + (60*60*12);
        var token = tokenGenerator.createToken({ uid: req.user._id.toString(), profile: req.user.profile, email: req.user.email, expires: expires  });
     var browserSync = require("browser-sync");
var spa         = require("browser-sync-spa");
 
// browserSync.use(spa({
//     selector: "[ng-app]" // Only needed for angular apps 
// }));

        res.render('views/patentindex', {
            title: 'LexLab™',
            application: 'patentindex',
            controller: 'AppCtrl as appCtrl',
            token: token,
            user: req.user,
            firebase_url: FIREBASE_URL,
            $location: req,
            fontSize: '14px'
        });
    } else {
        res.redirect('/login');
    }
    // res.sendFile('/opt/enterprisephd/dist/index.html');
};
