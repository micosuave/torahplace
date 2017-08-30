var q = require('q');
var Firebase = require('firebase-admin');
var path = require('path');
var FIREBASE_URL = process.env.FIREBASE_URL;

module.exports = function (record) {
    var deferred = q.defer();
    var ref = new Firebase(FIREBASE_URL + '/content/' + record.id);
    //var ptref = new Firebase(FIREBASE_URL + '/content/' + record.patentid);
    var appstring = record.application_number.replace(/\D/,'');
    var appref = new Firebase(FIREBASE_URL + '/content/' + appstring);
    var date, thisdate;

    ref.authAnonymously(function (error, authData) {
        var proct = function (record) {

            var claim = record.claim;
            var claims = [];


            claim.forEach(function (claimnum, xdex, claims) {


                appref.child('C').child(xdex).child('history').child(record.id ).child('0').set({ status: 'allowed', text: claimnum.text, paper: record.id });


            });

            return deferred.resolve([record.id, thisdate,claim.length,claim.length,null,null,claim.length]);


        };


        if (error) {
            deferred.reject(error);
        } else {
            proct(record);
        }

    });

    return deferred.promise;
};
