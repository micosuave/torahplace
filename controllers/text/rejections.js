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
    // var a = firebase.initializeApp({
    //     serviceAccount: '../config/lexlab-becb9c5f7cbf.json',
    //     databaseURL: 'lexlab.firebaseio.com'
    // });
    // firebase.initializeApp(config)
     var rootRef = fireapp.database().ref();
    var ref = rootRef.child('content').child(record.id);
    var ptref = rootRef.child('content').child(record.patentid);
    var appstring = record.id.slice(0, record.id.indexOf('-'))
    var appref = rootRef.child('content').child(appstring);
    var thisdate = record.id.slice(record.id.indexOf('-') + 1, record.id.indexOf('-') + 11)
// var ref = new Firebase(FIREBASE_URL + '/content/' + record.id);
//     var ptref = new Firebase(FIREBASE_URL + '/content/' + record.patentid);
//     var appstring = record.id.slice(0, record.id.indexOf('-'));
//     var appref = new Firebase(FIREBASE_URL + '/content/' + appstring);
//     var thisdate = record.id.slice(record.id.indexOf('-') + 1, record.id.indexOf('-') + 11);
    var patent, pubapp,  results, application;
      ptref.once('value', function (snapshot) {
             patent = snapshot.exportVal();
    //   var puap = patent.pub.replace('US','');
    //   var pu = new Firebase(FIREBASE_URL + '/content/' + puap);
    //   pu.once('value', function(snapshot){
    //       pubapp = snapshot.exportVal();
    //   });
      });
    // ref.authAnonymously().then(function (error, authData) {
        var proct = function (record) {
            var text = record.text.slice(record.text.indexOf('DETAILED ACTION'), record.text.indexOf('Conclusion'));
            //var text1 = text.slice(text.indexOf(/DETAILED\sACTION/ig), text.length);
            //var text2 = text.replace(/Application\/Control.*?Art\sUnit:.?\d+\s/ig, '<br><hr class="bg-PTO" style="display:inline-block;width:100%;">$&<hr class="text-PTO" style="display:inline-block;width:50%;margin-left:25%;margin-right:25%:"><br>');
            var tags = [];
            var rejections = [];
            var rejid = 0;
            var tstexp = [/*{
                    ex: /(35\s+U.?S.?C.?.*?119)/ig,
                    str: '119'
                }, {
                    ex: /(35\s+U.?S.?C.?.*?120)/ig,
                    str: '120'
                }, {
                    ex: /(35\s+U.?S.?C.?.*?101)/ig,
                    str: '101'
                }, {
                    ex: /(35\s+U.?S.?C.?.*?106)/ig,
                    str: '106'
                }, */{
                    ex: /(35\s+U.?S.?C.?.*?102\(a\))/ig,
                    str: '102(a)'
                }, {
                    ex: /(35\s+U.?S.?C.?.*?102\(b\))/ig,
                    str: '102(b)'
                }, {
                    ex: /(35\s+U.?S.?C.?.*?102\(c\))/ig,
                    str: '102(c)'
                }, {
                    ex: /(35\s+U.?S.?C.?.*?102\(d\))/ig,
                    str: '102(d)'
                }, {
                    ex: /(35\s+U.?S.?C.?.*?102\(e\))/ig,
                    str: '102(e)'
                }, {
                    ex: /(35\s+U.?S.?C.?.*?102\(f\))/ig,
                    str: '102(f)'
                }, {
                    ex: /(35\s+U.?S.?C.?.*?102\(g\))/ig,
                    str: '102(g)'
                }, {
                    ex: /(35\s+U.?S.?C.?.*?103\(a\))/ig,
                    str: '103(a)'
                }, {
                    ex: /(35\s+U.?S.?C.?.*?103\(b\))/ig,
                    str: '103(b)'
                }, {
                    ex: /(35\s+U.?S.?C.?.*?103\(c\))/ig,
                    str: '103(c)'
                }, {
                    ex: /(35\s+U.?S.?C.?.*?103\(d\))/ig,
                    str: '103(d)'
                }, {
                    ex: /(35\s+U.?S.?C.?.*?103\(e\))/ig,
                    str: '103(e)'
                }, {
                    ex: /(35\s+U.?S.?C.?.*?103\(f\))/ig,
                    str: '103(f)'
                }, {
                    ex: /(35\s+U.?S.?C.?.*?103\(g\))/ig,
                    str: '103(g)'
                }, {
                    ex: /(35\s+U.?S.?C.?\s?.?\s?112)/ig,
                    str: '112'
                }, {
                    ex: /first\sparagraph\s/ig,
                    str: '112-1¶;'
                }, {
                    ex: /double.?patenting/ig,
                    str: 'Double Patenting'
                }

            ];
            var text3;
            var reg;
            tstexp.forEach(function (val, index) {
                var regex = new RegExp(val.ex);
                if (regex.test(text) == true) {
                    tags.push(val.str);
                }
                //        text3 = text2.replace(regex, '<strong class="label text-PTO display-1">$&</strong>');


            });
            var pills = new RegExp(/(restriction)|(election)|(requirement)|(enablement)|(objected\sto)|(priority)/ig);
            //  var text4 = text3.replace(pills, '&nbsp;&nbsp;<em class="label text-PTO display-1">$&</em>&nbsp;&nbsp;');


            var typ = function (input) {
                var type = new RegExp(/(10[23]\([a-g]\))/);
                var type1 = new RegExp(/(112[\,\s]*(((fi)?rst.?paragraph)|(1st)|(1¶)))/ig);
                var type2 = new RegExp(/(obviousness-type.?double.?patenting)/ig);
                var type3 = new RegExp(/(allowable)/ig);
                var type4 = new RegExp(/(double.?patenting)/ig);
                var type5 = new RegExp(/(112[\,\s]*((second.?paragraph)|(2nd)|(2¶)|(\(b\))))/ig);
                var type6 = new RegExp(/(112[\,\s]*((third.?paragraph)|(3rd)|(3¶)))/ig);
                var type7 = new RegExp(/(112[\,\s]*((fourth.?paragraph)|(4th)|(4¶)))/ig);
                var type8 = new RegExp(/(112[\,\s]*((fifth.?paragraph)|(5th)|(5¶)))/ig);
                var type9 = new RegExp(/(112[\,\s]*((sixth.?paragraph)|(6th)|(6¶)))/ig);
                var type10 = new RegExp(/(101)/);
                var type11 = new RegExp(/describe/i);
                var o = type.test(input);
                var oo = type1.test(input);
                var ooo = type2.test(input);
                var oooo = type3.test(input);/*2015/0017650 14370446*/
                var ooooo = type4.test(input);
                var oooooo = type5.test(input);
                var ooooooo = type6.test(input);
                var oooooooo = type7.test(input);
                var ooooooooo = type8.test(input);
                var oooooooooo = type9.test(input);
                var ooooooooooo = type10.test(input);
                if (o !== false) {
                    var p = input.match(type);
                    return p[0];
                } else if (oo !== false) {
                    var p = input.match(type1);
                    return '112-1EN';
                } else if (ooo !== false) {
                    var p = input.match(type2);
                    return '103-ODP';
                } else if (oooo !== false) {
                    var p = input.match(type3);
                    return p[0];
                } else if (ooooo !== false) {
                    return 'DP';
                } else if (oooooo !== false) {
                    return '112-2¶';
                } else if (ooooooo !== false) {
                    return '112-3¶';
                } else if (oooooooo !== false) {
                    return '112-4¶';
                } else if (ooooooooo !== false) {
                    return '112-5¶';
                } else if (oooooooooo !== false) {
                    return '112-6¶';
                } else if(ooooooooooo !== false){
                    if(type11.test(input) !== false){
                    return '101-EN';
                    }else{
                        return '101-WD';
                    }
                } else {
                    return '-';

                }
            };
            var meta = {
                total: 0,
                v101: 0,
                v102: 0,
                v103: 0,
                v112: 0,
                allowable: 0
            };
            var eva = function(status){
                var v101 = new RegExp(/^101/);
                var v102 = new RegExp(/^102/);
                var v103 = new RegExp(/^103/);
                var v112 = new RegExp(/^112/);
                if (v101.test(status)=== true){
                   return meta.v101++;
                }
                else if (v102.test(status)=== true){
                   return meta.v102++;
                }
                else if (v103.test(status)=== true){
                   return meta.v103++;
                }
                else if (v112.test(status)=== true){
                   return meta.v112++;
                }else if(status ==='allowable'){
                    return meta.allowable++;
                }
            };
            var astyle = new RegExp(/[A-Z]\w+(?=(\s\D+))(\d(,\d{3}){2})|(\d{4}\/\d+)/);

            var style = astyle.test(text);

            // if (style == false) {
            var artref = new RegExp(/((\d,\d\d\d,\d\d\d)|(\d\d\d\d\/\d+))\sto\s(\w+)/ig);
            var artnum = new RegExp(/((\d,\d\d\d,\d\d\d)|(\d\d\d\d\/\d+))/ig);
            var artauth = new RegExp(/(?!\sto\s)\w+/ig);
            if (artref.test(text) == true) {
                var matches = text.match(artref);

                matches.forEach(function (val, index, array) {
                    var pieces = val.split(/\sto\s/);
                    var forma = pieces[1] + ' - ' + pieces[0];
                    tags.push(forma);
                });
            }
            var regex1 = new RegExp(/(c[li]aims?\s((\s?\d+[\s,\-]*(\&|(and))*)*)(((\sis\s)|(\sare\s))|((\swere\s)|(\sremain\s)))?((rejected\s)|(objected\s)))/ig);
            var regex2 = new RegExp(/(double\spatenting)|(\d+\.\s?c[li]aims?\s((\s?(\d+)?[\s,-]*)*).*?((\sis\s)|(\sare\s))((rejected)|(objected))).*?((?=(Claim\sRejections))|(?=(Any\sinquiry)))?/ig)
            if (regex1.test(text) == true) {

                var matches = text.match(regex1);

                matches.forEach(function (val, index) {
                    var t2 = text.slice(text.indexOf(val), text.indexOf(matches[index + 1]));

                    // var artexp = /((\d,\d\d\d,\d\d\d)|(\d\d\d\d\/\d+))\sto\s(\w+)/ig;
                    // var primary = val.match(/((\d,\d\d\d,\d\d\d)|(\d\d\d\d\/\d+))\sto\s(\w+)/ig);
                    // var pp = primary[0].split(/\sto\s/);
                    // var t3 = t2.slice(t2.indexOf(/\sin\sview\sof\s/), t2.length);
                    var primary = function () {
                        var p = t2.match(/((over)|(anticipated\sby)|(allowable\sif))\s.+(?!U\.S\.)[\,\.]/ig);
                        if (p !== null) {
                            return p[0]
                        }
                        else {
                            return '';
                        }
                    }
                    var secondary = t2.match(/(('\d{3})|(\d(,\d{3}){2})|(\d{4}\/\d+))/g);
                    var smatches = [];
                    if (secondary !== null) {
                        //console.log(secondary);
                        secondary.forEach(function (thisval, index, arry) {
                            var obj = {};
                            obj[index] = thisval;
                            smatches.push(obj);
                            //console.log(thisval);
                            // var s = thisval.split(/\sto\s/ig);
                            // if (s[0] !== pp[0]) {
                            //     var obj = {
                            //         id: s[0],
                            //         name: s[1]
                            //     };
                            //     smatches.push(obj);
                            // }
                        });
                    }
                    var claimarray = [];
                    var pre = val.slice(0, val.indexOf(/rejected|objected/));
                    var submatches = pre.match(/\d+([-\s]\d+)?/ig);
                    submatches.forEach(function (sub, index, array) {
                        if ((sub.indexOf('-') > -1) || (sub.indexOf(' ') > -1)) {
                            var parts = sub.split(/[-\s]/);
                            var a = parseInt(parts[0]);
                            var b = parseInt(parts[1]);
                            while (a < b + 1) {
                                claimarray.push(a);
                                a++;
                            }

                        } else {
                            claimarray.push(sub);
                        }
                    })

                    var rejection = {
                        paper: record.id,
                        status: typ(t2),
                        claims_affected: claimarray,
                        primary_reference: primary(),
                        secondary_references: smatches,
                        text: t2
                        //fulltext: text.slice(text.indexOf(val), text.indexOf(matches[index + 1]))
                    };
                    if(rejection.text !==''){
                        rejections.push(rejection);
                    }//tags.push(val);
                });
            }

            rejections.forEach(function (rejection, pindex, rejections) {
                if(rejection.text !== ''){
                    eva(rejection.status);
                rejection.claims_affected.forEach(function (claimnum, xdex, claims_affected) {
                    var claimindex = parseInt(claimnum) - 1;
                    appref.child('C').child(claimindex).child('history').child(record.id ).child(pindex).set({ status: rejection.status, text: rejection.text, paper: record.id });
                    appref.child('C').child(claimindex).child('rejections').child(record.id ).child(pindex).set(rejection);
                });

                }
            });

            ptref.child('rejectionhistory').child(record.id).set(rejections);
            ref.update({
                //text: text,
                tags: tags,
                description: tags.join(', '),
                matches: tags,
                meta:meta,
                rejections: rejections
            }, function (err) {
                if (err) {
                    return deferred.reject(err);
                } else {
               console.log(rejections);
           var report = rootRef.child('content/REPORT');
            report.child('meta').child(record.id).update(meta);
var arra = {pubapp: pubapp, patent:patent, application: application,  results: rejections}
                    return deferred.resolve(arra);
                }
            });



        };
    proct(record);
   // });

    return deferred.promise;
};
