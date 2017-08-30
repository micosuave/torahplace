var q = require('q');
var firebase = require('firebase-admin');
var FIREBASE_URL = process.env.FIREBASE_URL;
var path = require('path');


module.exports = function (record, fireapp) {
    var deferred = q.defer();
    // var config = {
    //     apiKey: 'AIzaSyBt_uM7wWyLxgkJlEQXouHb15H0fV7xoI4',
    //     authDomain: 'lexlab.firebaseapp.com',
    //     databaseURL: 'https://lexlab.firebaseio.com',
    //     storageBucket: 'firebase-lexlab.appspot.com'
    // }
    // firebase.initializeApp(config)
    // var a = firebase.initializeApp({
    //     serviceAccount: '../config/lexlab-becb9c5f7cbf.json',
    //     databaseURL: 'lexlab.firebaseio.com'
    // });
    var rootRef = fireapp.database().ref();
    var ref = rootRef.child('content').child(record.id);
    var ptref = rootRef.child('content').child(record.patentid);
    var appstring = record.id.slice(0, record.id.indexOf('-'))
    var appref = rootRef.child('content').child(appstring);
    var thisdate = record.id.slice(record.id.indexOf('-') + 1, record.id.indexOf('-') + 11)
// var ref = new Firebase(FIREBASE_URL + '/content/' + record.id);
//     var ptref = new Firebase(FIREBASE_URL + '/content/' + record.patentid);
//     // var puap = new Firebase(FIREBASE_URL + '/content/' + record.pubapp);
//     var appstring = record.id.slice(0, record.id.indexOf('-'));
//     var appref = new Firebase(FIREBASE_URL + '/content/' + appstring);
//     var thisdate = record.id.slice(record.id.indexOf('-') + 1, record.id.indexOf('-') + 11);

   var patent, pubapp, sequence, results, application;
   appref.once('value', function(snapshot){
                        application = snapshot.exportVal();
                    });
                    // puap.once('value', function(snapshot){
                    //     pubapp = snapshot.exportVal();
                    // });
                    ptref.once('value', function(snapshot){
                        patent = snapshot.exportVal();
                    });

    ref.once('value',function (snapshot) {

        var proct = function (record) {

            var text = record.text;
            var claims = [];
            var phrase;
            var regex1 = new RegExp(/the\sallowed\sc[li]aim(\(s\))?\s((is\/are)|is|are)\s.*?(?=(\.\s))/ig);
            if (regex1.test(text) === true) {

                phrase = text.match(regex1);
                console.log(phrase);
                var matches = phrase[0].match(/(\d+(?=(\s)(?!\-)))|(\d+\s?\-?\s?\d+)/ig);
                if(matches !==null){
                    matches.forEach(function (sub, index, array) {
                    if (sub.indexOf('-') > -1) {
                        var parts = sub.split('-');
                        var a = parseInt(parts[0]);
                        var b = parseInt(parts[1]);
                        while (a < b + 1) {
                            claims.push(a);
                            a++;
                        }

                    } else {
                        claims.push(sub);
                    }
                });
                }
            }

            claims.forEach(function (claimnum, xdex, claims) {

                var claimindex = parseInt(claimnum) - 1;
                appref.once("value", function (snapshot) {
                                application = snapshot.exportVal();
                                var a = snapshot.exists();
                                // a === true

                                var b = snapshot.child("C").exists();
                                // b === true

                                var c = snapshot.child("C").child(claimindex).exists();
                                // c === true
                                if (c === true) {
                appref.child('C').child(claimindex).child('history').child(record.id ).child('0').set({ status: 'allowed', text: phrase[0], paper: record.id });
                appref.child('C').child(claimindex).child('rejections').child(record.id ).child('0').set({ status: 'allowed', text: phrase[0], paper: record.id });
                appref.child('C').child(claimindex).child('disposition').set('allowed');
                                }
                });
            });
            ptref.child('allowances').child(record.id).set(claims);
            var meta = {total: claims.length, allowed:claims.length};
            ref.update({
                allowed_claims: claims,
                matches: claims,
        meta:  meta
         }, function (err) {
 var arra = {pubapp: pubapp, patent:patent, application: application, sequence:application.sequence, results: claims}
 return deferred.resolve(arra);
 //
//                return deferred.resolve([record.id, thisdate,claims.length,claims.length,null,null,claims.length]);
            });


var meta = {total: claims.length, allowed:claims.length};
            var report = rootRef.child('content/REPORT');
            report.child('meta').child(record.id).update(meta);
 };
                proct(record);


    });

    return deferred.promise;
};
