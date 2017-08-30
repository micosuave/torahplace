var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var Firebase = require('firebase');
var FIREBASE_URL = "https://lexlab.firebaseio.com";
var FIREBASE_SECRET= require('./firesecret.js');
var FirebaseTokenGenerator = require('firebase-token-generator');
var tokenGenerator = new FirebaseTokenGenerator(FIREBASE_SECRET);
var storeDir = path.join('/home/leo/fileserver/uploads/', 'users');
var token = tokenGenerator.createToken({uid: 'micosuave', email: 'michael@mylionlaw.com', avatar: 'img/GoldLion.png'});
var ref = firebase.database().ref();

var passport = require('passport');

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login' }));
app.get('', function (req, res, next) {
  var authData = ref.getAuth();
  if (authData) {
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
    next();
  } else {
    console.log("User is logged out");

    app.use(express.static(path.join(__dirname + '/dist')));
  }
});
app.get('/', function(req, res, next){
	
  // Create a callback to handle the result of the authentication
function authHandler(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
  };

/* Authenticate users with a custom authentication token
ref.authWithCustomToken(token, authHandler);
	next();
/* Alternatively, authenticate users anonymously
ref.authAnonymously(authHandler);

// Or with an email/password combination
ref.authWithPassword({
  email    : 'bobtony@firebase.com',
  password : 'correcthorsebatterystaple'
}, authHandler);

// Or via popular OAuth providers ("facebook", "github", "google", or "twitter")
ref.authWithOAuthPopup("<provider>", authHandler);
ref.authWithOAuthRedirect("<provider>", authHandler);
  */
//}

	
	
});
app.get('/api/v1/store/:id', function(req, res, next){
  fs.readFile(storeDir + req.params.id + '.html', encoding, function(err, data){
    if (err) {
      return next(err);
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
});
app.use(bodyParser.raw());
app.post('/api/v1/:id', function(req, res, next){
	app.use(bodyParser.json());
  decodeURI(req.url);
  File.mkdirsSync(req.url.slice(8, req.url.indexOf('?=')));
  console.log(req.params);
  fs.writeFile(
    storeDir + '/' + req.params.id + '/' + req.params.domain + '/' + req.params.subdomain + '/' + req.params.path + '/' + req.params.page + '.html',
    //decodeURI(req.url.replace(/\\\"/, '').replace('"""', '').replace('\"', '').slice(req.url.indexOf('=') + 1, req.url.length)).replace(/\\"/, ''),
    decodeURIComponent(req.url.slice(req.url.indexOf('?='), req.url.length)),
    //req.data.body,
	function (err) {
      if (err) {
        return next(err);
      }
      res.status(204).end();
    }
  );
});

app.delete('/v1/store/:id', function(req, res, next){
  fs.unlink(storeDir + req.params.id + '.json', function(err){
    if (err) {
      return next(err);
    }
    res.status(204).end();
  });
});
module.exports = app;

