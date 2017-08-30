var q = require('q');
var Firebase = require('firebase-admin');
var FIREBASE_URL = process.env.FIREBASE_URL;
var path = require('path');

module.exports = function (record) {
    var deferred = q.defer();
    var ref = new Firebase(FIREBASE_URL + '/content/' + record.id);
    var ptref = new Firebase(FIREBASE_URL + '/content/' + record.patentid);
    var appstring = record.id.slice(0, record.id.indexOf('-'));
    var appref = new Firebase(FIREBASE_URL + '/content/' + appstring);
    var thisdate = record.id.slice(record.id.indexOf('-') + 1, record.id.indexOf('-') + 11);
    ref.authAnonymously(function (error, authData) {
        var proct = function (record) {



            /*
            *Applicants\s?hereby\s?elect\s?Group\s?I, ==> /(?:applicants?.*?)(elect)(?:(?=group\s?[1ilvx])/ig
            *
            *Claims\s?1-15,22,  and   24-34,
            *
            * __with(out)?\s?traverse__ ==> /\bwith(out)?\s?traverse\b/
            */

            var text = record.text;
            var claims = [];
            var phrase;
            var regex1 = new RegExp(/(?:applicants?.*?)(elect).*?(?:(?=group\s?[1ilvx]))/ig);
            var regex2 = new RegExp(/(?:(?:applicants?.*?)(elect).*?(?:(?=group\s?[1ilvx]))).*?(c[li]aims?\s((\s?\d+[\s,\-]*(\&|(and))*)*))/ig);
            if (regex1.test(text) === true) {

                phrase = text.match(regex2);
                phrase2 = text.match(regex1);
                console.log(phrase);
                var matches = phrase[0].match(/(\d+(?=(\s)(?!\-)))|(\d+\s?\-\s?\d+)/ig);
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

                claims.forEach(function (claimnum, xdex, claims) {
                    var claimindex = parseInt(claimnum) - 1;
                    appref.once("value", function (snapshot) {
                                var a = snapshot.exists();
                                // a === true

                                var b = snapshot.child("C").exists();
                                // b === true

                                var c = snapshot.child("C").child(claimindex).exists();
                                // c === true
                                if (c === true) {
                    appref.child('C').child(claimindex).child('history').child(record.id ).child('0').set({ status: 'elected', text: phrase[0], paper: record.id });
                                }
                    });
                });
            }
            var regex3 = new RegExp(/(c[li]aims?\s((\s?\d+[\s,\-]*(\&|(and))*)*)((\swere\s)|(\sare\s))?((rejected\s)|(objected\s)))/ig);
            //ptref.child('allowances').child(record.id).set(claims);
            ref.update({
                //allowed_claims: claims,
                matches: claims
            }, function (err) {

                return deferred.resolve(claims);
            });

        };


        if (error) {
            deferred.reject(error);
        } else {
            proct(record);
        }

    });

    return deferred.promise;
};
