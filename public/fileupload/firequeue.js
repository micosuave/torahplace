

var Queue = require('firebase-queue');
var FIREBASE_URL = process.env.FIREBASE_URL;
var Firebase = require('firebase');

module.exports = function(){
    var ref = firebase.database().ref().child('queue');
    firebase.auth().authAnonymously(function(error, authData){
    if (error){}
    else{
    var que = new Queue(ref, function(data, progress, resolve, reject){
       var ocr = require('./ocr');
       
       ocr(data.file).then(function(newfile){
           data.file = newfile;
           resolve(newfile);
       });
       
        });
    }    
});
    
};
