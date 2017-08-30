exports.getPagesServedByAngular = function(req, res){
    var FIREBASE_URL = process.env.FIREBASE_URL;
    var FIREBASE_SECRET = process.env.FIREBASE_SECRET;
    var firebase = require('firebase');
    var firebaseTokenGenerator = require('firebase-token-generator');
    var tokenGenerator = new firebaseTokenGenerator(FIREBASE_SECRET);
    var firebaseQ = require("firebase-queue");

     if (req.user !== null) {
        var token = tokenGenerator.createToken({ uid: req.user._id.toString(), profile: req.user.profile, email: req.user.email });
        res.render('views/enterprise', {
            title: 'PatentPhD™',
            application: 'roarmap',
            user: req.user,
            controller: 'AppCtrl as appCtrl',
            token: token,
            $location: req
        });
     } else {
         res.redirect('/login');
    }
    // res.sendFile('/opt/enterprisephd/dist/index.html');
};
