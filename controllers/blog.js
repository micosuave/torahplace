exports.getPagesServedByAngular = function(req, res){
    if (req.user !== null) {

        var FIREBASE_URL = process.env.FIREBASE_URL;
        var FIREBASE_SECRET = process.env.FIREBASE_SECRET;
        var firebase = require('firebase');
        var firebaseTokenGenerator = require('firebase-token-generator');
        var tokenGenerator = new firebaseTokenGenerator(FIREBASE_SECRET);
        var firebaseQ = require("firebase-queue");


        var token = tokenGenerator.createToken({ uid: req.user._id.toString(), profile: req.user.profile, email: req.user.email });
        res.render('views/blog/index', {
            title: 'LexSpace Demo',
            application: 'lexspacedemo',
            user: req.user,
            controller: 'BlogController as blog',
            token: token,
            $location: req
        });
    } else {
        res.redirect('/login');
    }
    
};

