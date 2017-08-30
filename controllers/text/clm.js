/*jshint: esversion:6, undef: true, unused:true,shelljs:true, node: true, jquery:true, strict:false, maxerr:100 */
/* globals firebase angular */

var q = require('q');
var firebase = require('firebase-admin');
var serviceAccount = require('../../config/lexlab-becb9c5f7cbf.json');
var FIREBASE_URL = process.env.FIREBASE_URL;
var path = require('path');
var http = require('https');
var fs = require('fs');

module.exports = function(record, fireapp) {
        var deferred = q.defer();
        //   var config = {
        //     apiKey: 'AIzaSyBt_uM7wWyLxgkJlEQXouHb15H0fV7xoI4',
        //     authDomain: 'lexlab.firebaseapp.com',
        //     databaseURL: 'https://lexlab.firebaseio.com',
        //     storageBucket: 'firebase-lexlab.appspot.com'
        //   }
        //   firebase.initializeApp(config)
        //   var a = firebase.initializeApp({
        //       serviceAccount: '../config/lexlab-becb9c5f7cbf.json',
        //       databaseURL: 'lexlab.firebaseio.com'
        //   });
        var rootRef = fireapp.database().ref();
        //var rootRef = new Firebase(FIREBASE_URL);

        var ref = rootRef.child('content').child(record.id);
        var ptref = rootRef.child('content').child(record.patentid);
        var appstring = record.id.slice(0, record.id.indexOf('-'));
        var appref = rootRef.child('content').child(appstring);
        var thisdate = record.id.slice(record.id.indexOf('-') + 1, record.id.indexOf('-') + 11);

        // var appref = new Firebase(FIREBASE_URL + '/content/' + appstring)

        var patent, pubapp, application, results, sequence;
        ref.once('value', function(snapshot) {

            appref.once('value', function(snapshot) {
                application = snapshot.exportVal();

                ptref.once('value', function(snapshot) {
                    patent = snapshot.exportVal();
                    var ppup = patent.pub ? patent.pub.replace('US', '') : patent.id || '0';
                    var puap = path.resolve(__dirname,'..','..','..', 'files', 'public', 'uspto', 'patents',ppup ,ppup + '.json');
                     console.log('FIRELOCATATION',puap);
                    if (!fs.existsSync(puap)) {
                        console.log('making request');
                        http.get('/getphd/patents/' + ppup, function(resp){
                            resp.on('end', function(){
                                console.log('parsing text');
                                proct(record, resp.data, patent, application);
                        });
                        });
                } else {
                        pubapp = require(puap);
                         console.log('pubapp claims found',pubapp.claim);
                        proct(record, pubapp, patent, application);
                    }

                });
            });
        });

        var proct = function(record, pubapp, patent, application) {
                var e = /((?!\.)\s(\S+?)\s)*(sn\.\s\d\d\/\d\d\d,\d\d\d\spage\s\d+)|(docket\s?no\.\s?\d+\s?(UT[A-Z]*)?)/ig;
                var f = /Express\smail.+?UTIL/g;
                var tt = record.text.replace(e, '');
                var tet = tt.replace(f, '');
                var text = tet.slice(tet.indexOf(/Claims:?\s(?=1\.)/i) + 7, tet.length);
                // var text = record.text
                var matches = text.match(e);
                var expect = pubapp ? pubapp.claim_total : patent ? patent.claim_total : 50;
                var pending = 0,
                    canceled = 0,
                    amended = 0,
                    withdrawn = 0,
                    original = 0,
                    newc = 0,
                    previously = 0,
                    currently = 0,
                    total = 0;



                var tc = new RegExp(/cancel/i),
                    td = new RegExp(/withdrawn/i),
                    te = new RegExp(/new/i),
                    tf = new RegExp(/currently/i),
                    tg = new RegExp(/previously/i),
                    th = new RegExp(/original/i);
                var claims = [];
                var statuscount = function(status) {
                    pending++;
                    if (tc.test(status) === true) {
                        return canceled++;
                    } else if (td.test(status) === true) {
                        return withdrawn++;
                    } else if (te.test(status) === true) {
                        return newc++;
                    } else if (tf.test(status) === true) {
                        return currently++;
                    } else if (tg.test(status) === true) {
                        return previously++;
                    } else if (th.test(status) === true) {
                        return original++;
                    }
                };
                for (var index = 0; index < pubapp.claim.length; index++) {
                     var element = pubapp.claim[index];
                      appref.child('C').child(index).update(element);
                            appref.child('C').child(index).child('history').child(record.id).child('0')
                                .set({ status: 'original', text: element['text'], paper: record.id });
                            appref.child('C').child(index).child('versions').child(record.id).child('0')
                                .set({ status: 'original', text: element['text'], paper: record.id });
                            statuscount('original');
                 }



                var idd = function(input) {
                    if (input) {
                        var inp = input.replace(/l/g, '1');
                        var pp = inp.match(/\d+/);
                        var p = inp.slice(0, inp.indexOf('.'));

                        return (pp && pp[0] == p) ? pp[0] : p
                    }
                }
                var status = function(input) {
                    var status = new RegExp(/(?=\()?(cancell?ed)|(withdrawn)|(currently\s?amended)|(previously\s?amended)|(previously\s?presented)|(original)|(new)(?=\))?/i);
                    if (status.test(input) !== false) {
                        var match = input.match(status);
                        console.log(match[0]);
                        return match[0];
                    } else if (input === undefined) {
                        return null;
                    } else {
                        // return null
                        try {
                            var can = new RegExp(/(cancell?(ed)?)|(withdrawn)/i);
                            var mach = input.match(can);
                            console.log(mach[1]);
                            return mach[1];
                        } catch (ex) {
                            return 'original ';
                        } finally {}
                    }
                };

                var dependency = function(input) {
                    var reg = new RegExp(/(to)|(of)\sc[li1]a[i1l][mn]\s?(\d+)/ig);
                    if (input.match(reg) !== null) {
                        return input.match(reg)[3];
                    } else {
                        return '-1';
                    }
                };

                var canceltest = new RegExp(/cancell?ed/ig);
                var dependencytest = new RegExp(/\sof\sc[li]aim\s\d+,?\s/ig);
                var multitest = new RegExp(/(to\s)?.*?cancell?ed/ig);
                var altarray = [];
                var totest = new RegExp(/\d+\.?\s?[to\-]*\s?/i);

                var sp = new RegExp(/(?:(?:.*?[\d+\.\s\(\)\w.]?(The|\b[A-Z]n?)\s?){1})(.+?)(?:(?=\s?$)|(?=\s?\1))/g);
                var ps = new RegExp(/\D(?=[1-9]\d{0,1}\s?\.?\D+(?=(?:The|\b[A-Z]n?)))/g);
                var pss = new RegExp(/\D(?=((?:\d+\.)?\s?\(\w\w+(\s\w+)*\).+?(?=(?:\d+\.)?\s?\()))/g);
                var regex = new RegExp(/c[li]aim[s5]?\s\d+.(\d+)?/ig);
                var can = new RegExp(/(\sto\s\d+)|(\(?Cancelle[dcli]\)?)|(consisting)|(comprising)|(having)|(where)/ig);
                var altsplit = new RegExp(/\D(?=(?:\d+\..*?\((?:(?:cancell?ed)|(?:withdrawn)|(?:currently\s?amended)|(?:previously\s?amended)|(?:previously\s?presented)|(?:original)|(?:new))\)))/ig);

                // var me = /(?:(?:\(\w+(\s\w+)*\))){n}(.*?)(?=(?:The|An?\b)|\s$)/g

                if (status(text) === 'original ') {
                    if (pubapp && pubapp.claim) {

                        pubapp.claim.forEach(function(vt, it, at) {
                            if (vt !==null){
                            appref.child('C').child(it).update(vt);
                            appref.child('C').child(it).child('history').child(record.id).child('0')
                                .set({ status: 'original', text: vt['text'], paper: record.id });
                            appref.child('C').child(it).child('versions').child(record.id).child('0')
                                .set({ status: 'original', text: vt['text'], paper: record.id });
                            statuscount('original');
                            }
                        });
                    } else {
                        var re = /(?=The|\b[A-Z]n?)(.+?\.|)(?=.*?(?:The|\b[A-Z]n?))/g
                        var m;
                        var n = 0;
                        while ((m = re.exec(text)) !== null) {
                            if (m.index === re.lastIndex) {
                                re.lastIndex++;
                            }
                            if (n >= expect) {} else {}

                            if (n >= expect) {} else {
                                appref.child('C').child(n).child('history').child(record.id).child('0')
                                    .set({ status: 'original', text: pubapp ? pubapp.claim[n] ? pubapp.claim[n]['text'] : m[0] : m[0], paper: record.id })
                                appref.child('C').child(n).child('versions').child(record.id).child('0')
                                    .set({ status: 'original', text: pubapp ? pubapp.claim[n] ? pubapp.claim[n]['text'] : m[0] : m[0], paper: record.id })
                                statuscount('original')

                                claims[n] = pubapp ? pubapp.claim[n] : m[0]
                            }


                            n++
                        }
                    }
                }
                //      console.log(claims)
                /*-------------------------------*/
                if (status(text) !== 'original ') {
                    var candidates = text.split(altsplit)
                    candidates.forEach(function(value, index, candidates) {
                        // console.log(index + ' of ' + candidates.length, value)
                        var writeout = function(v, i, record) {
                            /* appref.once("value", function (snapshot) {
                                          var a = snapshot.exists()
                                          // a === true

                                          var b = snapshot.child("C").exists()
                                          // b === true

                                          var c = snapshot.child("C").child(i).exists()
                                          // c === true
                                          if ((c === true)||(te.test(status(v)) == true)){*/
                            appref.child('C').child(i).child('history').child(record.id).child('0').set({ status: status(v), text: v, paper: record.id })
                            appref.child('C').child(i).child('versions').child(record.id).child('0').set({ status: status(v), text: v, paper: record.id })
                            statuscount(status(v))
                                /*  }
                                     });*/
                        }
                        var statuswrite = function(value) {
                            if (tc.test(value) === true) {
                                console.log(idd(value) + ' ' + status(value) + ' ' + value)
                                return writeout(value, idd(value) - 1, record)
                            } else if (td.test(value) === true) {
                                console.log(idd(value) + ' ' + status(value) + ' ' + value)
                                return writeout(value, idd(value) - 1, record)
                            } else if (te.test(value) === true) {
                                console.log(idd(value) + ' ' + status(value) + ' ' + value)
                                return writeout(value, idd(value) - 1, record)
                            } else if (tf.test(value) === true) {
                                console.log(idd(value) + ' ' + status(value) + ' ' + value)
                                return writeout(value, idd(value) - 1, record)
                            } else if (tg.test(value) === true) {
                                console.log(idd(value) + ' ' + status(value) + ' ' + value)
                                return writeout(value, idd(value) - 1, record)
                            } else if (th.test(value) === true) {
                                console.log(idd(value) + ' ' + status(value) + ' ' + value)
                                return writeout(pubapp.claim[parseInt(idd(value) - 1)] ? pubapp.claim[parseInt(idd(value) - 1)]['text'] : value, parseInt(idd(value) - 1), record)
                            }
                        }

                        statuswrite(value)
                            /*
                if (status(value) == 'original') {
          console.log(status(value) + '  ' + value)
              //  writeout(value, idd(value) - 1, record)
          writeout(pubapp.claim[parseInt(idd(value)-1)]['text'], parseInt(idd(value)-1), record)
                //                       claims.push(pubapp ? pubapp.claim[idd(value)-1]:value)
                }
                else if (status(value) == 'new') {
          console.log(status(value) + '  ' + value)
          writeout(value, idd(value)-1, record)
                }
                else if (status(value) == 'currently') {
          console.log(status(value) + '  ' + value)
          writeout(value, idd(value)-1, record)
                }
                else if (status(value) == 'previously') {
          console.log(status(value) + '  ' + value)
          writeout(value, idd(value)-1, record)
                //    claims.push(pubapp ? pubapp.claim[idd(value)] :value)
                }
                else if (status(value) == 'withdrawn') {
          console.log(status(value) + '  ' + value)
                writeout(value, idd(value) - 1, record)
                //         writeout(pubapp.claim[parseInt(idd(value)-1)]['text'], parseInt(idd(value)-1), record)
   }
                else if (status(value) == 'canceled') {
          console.log(status(value) + '  ' + value)
//writeout(value, idd(value) - 1, record)
              writeout(value, idd(value)-1, record)
            }
                else{
           // writeout(value, idd(value)-1, record)
                }*/
                            /*-------------------------------*/
                        /*var otherdots = new RegExp(/(?:(?:\(\w+(?:\s\w+)?\)).+?\.){0}\D(?=\(\w\w+)/g)
                        var hardcandies = value.split(otherdots)
                        hardcandies.forEach(function(hardy, sindex, hardcandies) {
                            console.log('hardcandies', sindex, hardy)
                            var te = new RegExp(/\d+\.$/)
                            if (sindex > 1 && te.test(hardcandies[sindex - 1]) === false) {
                                var int = parseInt(idd(hardcandies[0])) || 0
                                var pop = int - 1 + sindex

                                var text = (pop + 1) + '. ' + hardy

                                appref.once('value', function(snapshot) {
                                    var a = snapshot.exists()
                                        // a === true

                                    var b = snapshot.child('C').exists()
                                        // b === true

                                    var c = snapshot.child('C').child(pop).exists()
                                        // c === true
                                    if ((c === true) || (te.test(status(text)) == true)) {
                                        appref.child('C').child(pop).child('history').child(record.id).child('0').set({ status: status(text), text: text, paper: record.id })
                                        appref.child('C').child(pop).child('versions').push({ status: status(text), text: text, paper: record.id })
                                        statuscount(status(text))
                                        claims[pop] = { id: pop + 1, status: status(text), text: text }
                                    }
                                })
                            }
                        })

                        var dots = new RegExp(/\D(?=\d+\s?\.?)/)
                        var candies = value.split(dots)*/
                            // console.log(candies)
                            /*    candies.forEach(function (candy, index, candies) {
                                  //console.log('candies', candies)

                                  var c = parseInt(candies[0].slice(0, candies[0].indexOf('.'))) || 0
                                  var d = parseInt(candy.slice(0, candy.indexOf('.'))) - index
                                  if (totest.test(candy) === true && (d == c)) {
                                    console.log('2test')
                                    var myref = candies[index + 1]
                                    if (myref !== undefined) {
                                      var a = parseInt(candy.slice(0, candy.indexOf('.'))) - 1
                                      var b = parseInt(myref.slice(0, myref.indexOf('.'))) - 1
                                      while (a < b) {
                                          appref.once("value", function (snapshot) {
                                            var d = snapshot.exists()
                                            // a === true

                                            var b = snapshot.child("C").exists()
                                            // b === true

                                            var c = snapshot.child("C").child(a).exists()
                                            // c === true
                                            if ((c === true)||(te.test(status(myref)) === true)) {
                                        appref.child('C').child(a).child('history').child(record.id).child('0').set({ status: status(myref), text: candy.concat(myref), paper: record.id })
                                        appref.child('C').child(a).child('versions').child(record.id).child('0').set({ status: status(myref), text: candy.concat(myref), paper: record.id })
                                        appref.child('H').child(record.id).child(record.id).child(a).set({ status: status(myref), text: candy.concat(myref) })
                                        statuscount(status(myref))

                                        claims[a] = {id: a + 1, status: status(myref), text: candy.concat(myref)}

                                        a++
                                      }
                                   }
                                      ) /*else {
                                              console.log('other')
                                                  var bb = parseInt(idd(candy)) - 1
                                                  var bc = status(candy)

                                                  if (isNaN(bb) !== true && bc !== 'original ') {
                                                      appref.child('C').child(bb).child('history').child(record.id ).child('0').set({ status: bc, text: candy, paper: record.id })
                                                      appref.child('C').child(bb).child('versions').push({ status: bc, text: candy, paper: record.id })
                                                      appref.child('H').child(record.id ).child(record.id).child(bb).set({ status: bc, text: candy })
                                                      statuscount(bc)
                                                      claims[bb] = {id: bb+1, status: bc, text: candy}
                                                  }
                                              }*/
                            /*        }
                                // claims.forEach(function(claim, indexx, claims){
                                //                 statuscount(claim.status)
                                //             })
                                // console.log(claims)
                                    }
                              }
                              });*/
                    })
                }

                var meta = { total: claims.length, pending: pending, original: original, new: newc, canceled: canceled, withdrawn: withdrawn, amended: { previously: previously, currently: currently } }
                ptref.child('claimhistory').child(record.id).set(claims)
                appref.child('meta').child(record.id).update(meta)
                var report = rootRef.child('content/REPORT');
                report.child('meta').child(record.id).update(meta)
                ref.update({ meta: meta, data: claims }, function(err) {
                    var arra = { pubapp: pubapp, patent: patent, application: application, sequence: application.sequence, results: claims }
                    return deferred.resolve(arra)
                })
            }
            //})
        return deferred.promise
    }
    /*
    module.exports = function (record) {
        var deferred = q.defer()
        var ref = new Firebase(FIREBASE_URL + '/content/' + record.id)
        var ptref = new Firebase(FIREBASE_URL + '/content/' + record.patentid)
        var appstring = record.id.slice(0, record.id.indexOf('-'))
        var appref = new Firebase(FIREBASE_URL + '/content/' + appstring)
        var thisdate = record.id.slice(record.id.indexOf('-') + 1, record.id.indexOf('-') + 11)

       //var appref = new Firebase(FIREBASE_URL + '/content/' + appstring)


        ref.authAnonymously(function (error, authData) {
       if (error) {
                deferred.reject(error)
            } else {
                 var patent, pubapp
         ptref.once('value', function (snapshot) {
                 patent = snapshot.exportVal()
          var puap = patent.pub.replace('US','')
          var pu = new Firebase(FIREBASE_URL + '/content/' + puap)
          pu.once('value', function(snapshot){
              pubapp = snapshot.exportVal()

    proct(record, pubapp, patent);

        })




        });
            }
     })
            var proct = function (record, pubapp, patent) {
                var e = /((?!\.)\s(\S+?)\s)*(sn\.\s\d\d\/\d\d\d,\d\d\d\spage\s\d+)|(docket\s?no\.\s?\d+\s?(UT[A-Z]*)?)/ig
                var f = /Express\smail.+?UTIL/g
                var tt = record.text.replace(e, '')
                var tet = tt.replace(f, '')
                //var text = tet.slice(tet.indexOf(/Claims:?\s(?=1)/i)+6,tet.length)
                var text = record.text
                var matches = text.match(e)
                var expect = pubapp ? pubapp.claim_total : patent.claim_total
                var pending = 0 ,canceled= 0, amended = 0, withdrawn = 0, original = 0 ,newc = 0, previously = 0,currently = 0,total = 0
                // if (matches !== null) {
                //     matches.forEach(function (value, index) {
                //         text.replace(e, function () {
                //             return ''
                //         })
                //     })
                // }
                // var text = record.text.replace(, function(){return '';})
                var claims = []
                //var sp = new RegExp(/\s+((?=\d+\.(\sto\s\d+\.)?.*?\.)|(?:Page)|(?=(\d+.*?The))|(?=(\d+.*?A\b)))|((?:,\d)\s\w)/g)
                var statuscount = function(status){
                    pending++
                    if(/cancel/i.test(status) == true){
                        canceled++
                    }

                    else if(/withdrawn/i.test(status) == true){
                        withdrawn++
                    }
                    else if(/new/i.test(status) == true){
                        newc++
                    }
                    else if(/currently/i.test(status) == true){
                        currently++
                    }
                    else if(/previously/i.test(status) == true){
                        previously++
                    }
                    else if(/original/i.test(status) == true){
                        original++
                    }
                }
                var idd = function (input) {
                    if (input) {
                        var inp = input.replace(/l/g, '1')
                        var pp = inp.match(/\d+/)
                        var p = inp.slice(0, inp.indexOf('.'))

                        return (pp && pp[0] == p) ? pp[0] : p
                    }
                }
                var status = function (input) {
                    var status = new RegExp(/(?=\()?(cancell?ed)|(withdrawn)|(currently\s?amended)|(previously\s?amended)|(previously\s?presented)|(original)|(new)(?=\))?/i)
                    if (status.test(input) !== false) {
                        var match = input.match(status)
                        return match[0]
                    }else if(input == undefined){
                        return null
                    }
                    else {
                        //return null
                        try {
                            var can = new RegExp(/(cancell?(ed)?)|(withdrawn)/i)
                            var mach = input.match(can)
                            return mach[1]
                        } catch (ex) {
                            return 'original '
                        } finally {

                        }

                    }
                }

                var dependency = function (input) {
                    var reg = new RegExp(/(to)|(of)\sc[li1]a[i1l][mn]\s?(\d+)/ig)
                    if (input.match(reg) !== null) {
                        return input.match(reg)[3]
                    } else {
                        return '-1'
                    }
                }

                var canceltest = new RegExp(/cancell?ed/ig)
                var dependencytest = new RegExp(/\sof\sc[li]aim\s\d+,?\s/ig)
                var multitest = new RegExp(/(to\s)?.*?cancell?ed/ig)
                var altarray = []
                var totest = new RegExp(/^\d+\.?\s?[to\-]*\s?$/i)

                var sp = new RegExp(/(?:(?:.*?[\d+\.\s\(\)\w.]?(The|\b[A-Z]n?)\s?){1})(.+?)(?:(?=\s?$)|(?=\s?\1))/g)
                var ps = new RegExp(/\D(?=[1-9li]\d{0,1}\s?\.?\D{0,20}(?=(?:The|\b[A-Z]n?)))/g)
                var pss = new RegExp(/\D(?=((?:\d+\.)?\s?\(\w\w+(\s\w+)*\).+?(?=(?:\d+\.)?\s?\()))/g)
                var regex = new RegExp(/c[li]aim[s5]?\s\d+.(\d+)?/ig)
                var can = new RegExp(/(\sto\s\d+)|(\(?Cancelle[dcli]\)?)|(consisting)|(comprising)|(having)|(where)/ig)


                //var me = /(?:(?:\(\w+(\s\w+)*\))){n}(.*?)(?=(?:The|An?\b)|\s$)/g
                var re = /(?=The|\b[A-Z]n?)(.+?\.|)(?=.*?(?:The|\b[A-Z]n?))/g
                var m
                var n = 0
                while ((m = re.exec(text)) !== null) {
                    if (m.index === re.lastIndex) {
                        re.lastIndex++
                    }
                    //console.log('one' , m[1])
                    //console.log(n + (' of ' + expect), n + '. ' +  m[0])
                    if (status(text) === 'original ') {
                      if (n >= expect){}
                      else{
                        //console.log(n + (' of ' + expect), n + '. ' +  pubapp.claim[n]['text'])

                        appref.child('C').child(n).child('history').child(record.id ).child('0')
                        .set({ status: 'original', text:   pubapp.claim[n]?pubapp.claim[n]['text']:m[0] , paper: record.id })
                        appref.child('C').child(n).child('versions')
                        .push({ status: 'original', text: pubapp.claim[n]? pubapp.claim[n]['text']:m[0], paper: record.id })
                         claims[n] = pubapp.claim[n]
                         //claims[n] = {id:n+1,status:'original',text:m[0]}
                        //claims[n] =   {id:n+1,status:'original',text:pubapp.claim[n]['text']}
                        //console.log(reducer(pubapp.claims))
                      }
                        //claims = pubapp.claims;
                }

                    n++
                    //claims.push(m[0])
                    // View your result using the m-variable.
                    // eg m[0] etc.
                }
                console.log(claims)
                // if(status(text)!== 'original '){
                //     var o
                // var p = 0
                // while ((o = pss.exec(text)) !== null) {
                //     if (o.index === pss.lastIndex) {
                //         pss.lastIndex++
                //     }
                //     //console.log('one' , m[1])
                //     console.log(p, o[1])
                //     if(status(o[1]) !== 'original '){
                //         appref.child('C').child(p).child('history').child(record.id ).child('0').set({status: status(o[1]), text: o[1], paper: record.id})
                //     }

                //     p++
                //     //claims.push(o[1])
                //     // View your result using the m-variable.
                //     // eg m[0] etc.
                // }
                // }
                /*-------------------------------*/
    /*            if (status(text) !== 'original ') {
                    var candidates = text.match(ps)
                    candidates.forEach(function (value, index, candidates) {
                       console.log(index + ' of ' + candidates.length, value)

                        //      var o
                        // var p = index
                        // while ((o = pss.exec(value)) !== null) {
                        //     if (o.index === pss.lastIndex) {
                        //         pss.lastIndex++
                        //     }
                        //     //console.log('one' , m[1])
                        //     console.log(p, o[1])
                        //     if(index ===0 && p > index){
                        //         appref.child('C').child(p).child('history').child(record.id ).child('0').set({status: status(o[1]), text: o[1], paper: record.id})
                        //     }

                        //     p++
                        //     //claims.push(o[1])
                        //     // View your result using the m-variable.
                        //     // eg m[0] etc.
                        // }
                        if (value && index == 0 && ps.test(value) !== false) {
                            console.log('if1')
                            var aa = value.split(ps)
                            if (aa.length > 2) {
                                aa.forEach(function (localval, localindex, aa) {
                                    if (localval && localindex > 0) {
                                        var l = claims.length

                                        var ba = l + localindex
                                        var bd = status(localval)
                                        if (bd !== 'original ') {
                                            appref.child('C').child(ba).child('history').child(record.id ).child('0').set({ status: bd, text: localval, paper: record.id })
                                            //statuscount(bd)
                                            claims[ba] = {id: ba+1,status:bd,text:localval}
                                        }

                                    }
                                })
                            }
                        }
                        /*-------------------------------*/
    /*                    if (value && index > 0) {
                            //console.log('if2')
                            var bb = parseInt(idd(value)) - 1
                            var bc = status(value)

                            if (isNaN(bb) !== true && bc !== 'original ') {
                                appref.child('C').child(bb).child('history').child(record.id ).child('0').set({ status: bc, text: value, paper: record.id })
                                appref.child('C').child(bb).child('versions').push({ status: bc, text: value, paper: record.id })
                                //statuscount(bc)
                                claims[bb] = {id:bb+1,status:bc,text:value}
                            }
                        }
                        //console.log(value)
                        //if (value && value !== undefined && )

                        /*-------------------------------*/
    /*                   var otherdots = new RegExp(/(?:(?:\(\w+(?:\s\w+)?\)).+?\.){0}\D(?=\(\w\w+)/g)
                       var hardcandies = value.split(otherdots)
                       hardcandies.forEach(function (hardy, sindex, hardcandies) {
                           console.log(sindex, hardy)
                           var te = new RegExp(/\d+\.$/)
                           if (sindex > 1 && te.test(hardcandies[sindex-1]) === false) {
                               var int = parseInt(idd(hardcandies[0])) || 0
                               var pop = int - 1 + sindex

                               var text = (pop + 1) + '. ' + hardy

                               appref.once("value", function (snapshot) {
                                   var a = snapshot.exists()
                                   // a === true

                                   var b = snapshot.child("C").exists()
                                   // b === true

                                   var c = snapshot.child("C").child(pop).exists()
                                   // c === true
                                   if ((c === true)||(status(text) == 'new')) {
                                       appref.child('C').child(pop).child('history').child(record.id ).child('0').set({ status: status(text), text: text, paper: record.id })
                                       appref.child('C').child(pop).child('versions').push({ status: status(text), text: text, paper: record.id })
                                       //statuscount(status(text))
                                       claims[pop] = {id: pop + 1, status: status(text), text: text}
                                   }

                               })
                           }
                       })

                       var dots = new RegExp(/\D(?=\d+\s?\.)/)
                       var candies = value.split(dots)
                       //console.log(candies)
                       candies.forEach(function (candy, index, candies) {
                           var c = parseInt(candies[0].slice(0, candies[0].indexOf('.'))) || 0
                           var d = parseInt(candy.slice(0, candy.indexOf('.'))) - index
                           if (totest.test(candy) === true && (d == c)) {
                               console.log('2test')
                               var myref = candies[index + 1]
                              if(myref !== undefined){
                               var a = parseInt(candy.slice(0, candy.indexOf('.'))) - 1
                               var b = parseInt(myref.slice(0, myref.indexOf('.'))) - 1
                               while (a < b) {

                                           appref.child('C').child(a).child('history').child(record.id ).child('0').set({ status: status(myref), text: candy.concat(myref), paper: record.id })
                                           appref.child('C').child(a).child('versions').push({ status: status(myref), text: candy.concat(myref), paper: record.id })
                                           appref.child('H').child(record.id ).child(record.id).child(a).set({ status: status(myref), text: candy.concat(myref) })
                                           //statuscount(status(myref))

                                           claims[a] = {id: a + 1, status: status(myref), text:candy.concat(myref)}


                                   a++
                               }
                              }
                           } else {
                               //console.log('other')
                               var bb = parseInt(idd(candy)) - 1
                               var bc = status(candy)

                               if (isNaN(bb) !== true && bc !== 'original ') {
                                   appref.child('C').child(bb).child('history').child(record.id ).child('0').set({ status: bc, text: candy, paper: record.id })
                                   appref.child('C').child(bb).child('versions').push({ status: bc, text: candy, paper: record.id })
                                   appref.child('H').child(record.id ).child(record.id).child(bb).set({ status: bc, text: candy })
                                   //statuscount(bc)
                                   claims[bb] = {id: bb+1, status: bc, text: candy}
                               }
                           }
                       }, claims)

                       //console.log(claims)

                   })
               }
               ptref.child('claimhistory').child(record.id).set(claims)
               claims.forEach(function(claim, indexx, claims){
                   statuscount(claim.status)
               })
               ref.update({meta:{total: claims.length, pending: pending,original: original,new:newc, canceled: canceled, withdrawn: withdrawn, amended: {previously: previously, currently: currently, total: previously + currently}},data: claims}, function (err) {
    var arra = [record.id, thisdate, pending, original, canceled, withdrawn]
                   return deferred.resolve(arra)
               })

           }

    return deferred.promise


    };*/
