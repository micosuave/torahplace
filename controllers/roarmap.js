/*jshint: esversion:6, undef: true, unused:true,shelljs:true, node: true, jquery:true, strict:false, maxerr:100 */

var q = require('q')
var firebase = require('firebase-admin')
var serviceAccount = require('../config/firebase-lexlab-firebase-adminsdk-j7h05-3695f670cc.json');
var FIREBASE_URL = process.env.FIREBASE_URL
var fs = require('fs')
var path = require('path')
var MERITSDOCS = require('./ptocodes').MERITSDOCS
var ARTDOCS = require('./ptocodes').ARTDOCS
var CLAIMDOCS = require('./ptocodes').CLAIMDOCS
var DOCNAMES = require('./ptocodes').USPTOCODES

var wraphead = require('./ckeditor_tpl').ckstarter
var wraptail = require('./ckeditor_tpl').ckender

var APPDOCCODES = require('./ptocodes').APPDOCCODES
var PTODOCCODES = require('./ptocodes').PTODOCCODES
var INTVDOCCODES = require('./ptocodes').INTVDOCCODES
var $patentsearch = require('./patentsearch')
module.exports = function (files, phd, config) {
  config.mercount = 0
  config.queued = 0

  phd.roarmap = {
    collections: [],
    roarlist: []
  }
  phd.roarlist = {}
  var bufferz = []
  var deferred = q.defer()

  /*
          var matter = Matter($stateParams.matterId, $stateParams.groupId)
          //var collections = Collections()
          var dashboards = Collection($stateParams.pageid)
          var dashboardsref = dashboards.$ref()
          */
  /*var projref = Collection($stateParams.pId).$ref()
*/
if(process.env.SERVERNAME=='wiley'){


  var a = firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://lexlab.firebaseio.com'
  },'roar')
}
else{
  var configb = {
   credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://dazzling-fire-2433.firebaseio.com"
  };
  var a = firebase.initializeApp(configb,'rr');
}
  var Collection = function (idnum) {
    if (idnum === undefined){}
    else{
    return a.database().ref().child('content').child(idnum)
  }}
  var phdref = Collection(config.id)

  function hello (phd) {
    //  var check = checkforexistingphd()
    //  if (check) {
    //      alertify.alert('already exists')
    //  } else {
    //      buildroar()
    //  }

    buildcollections(phd)
    //  phdref.authAnonymously(function (error, authData) {
    //    if(error){}else{console.log(authData)

  //  }})
  }
  hello(phd)
  return deferred.promise

  function buildroar (groupids, phd) {
    var claimref = Collection(groupids[3])
    var artref = Collection(groupids[2])
    var meritsref = Collection(groupids[1])
    var allref = Collection(groupids[0])

    phd.imagefile.forEach(function (file, key, imagefile) {
      // $timeout(function () {
      if ((file['Mail Room Date'] === '') || (file.Filename === '')) {
        return
      } else {
        var appnumber = phd.application['Application Number'].replace('/', '').replace(',', '').replace(',', '')
        var reporter = Collection('REPORT')
        reporter.child('roarlist').child('REPORT' + appnumber).set('REPORT' + appnumber)
        var appref = Collection(appnumber)
        var date = new Date()
        var roarevent = file
        var maildate = new Date(file['Mail Room Date'])
        var mailyear = maildate.getFullYear()
        var mailmonth = maildate.getMonth()
        var mailday = maildate.getDate()
        var roardate = maildate.toDateString()

        var filename = file.Filename || null
        var appnumsubstring = filename.slice(0, filename.indexOf('-'))
        var appdatesubstring = filename.slice((filename.indexOf('-') + 1), (filename.indexOf('-') + 11))
        var subsectionid = filename.slice(filename.indexOf('-') + 11, filename.lastIndexOf('-'))
        var doccode = filename.slice((filename.lastIndexOf('-') + 1), (filename.indexOf('.pdf')))
        roarevent.content_type = 'document'
        var de = filename.slice(0, filename.lastIndexOf('-'))
        roarevent.id = de
        console.log(de)
        /*if ($location.host() === 'localhost') {

          roarevent.ocrlink = '/files/public/uspto/' + appnumsubstring + '/' + appnumsubstring + '-image_file_wrapper/' + filename.replace('.pdf', '_ocr.pdf')

          roarevent.selflink = '/files/public/uspto/' + appnumsubstring + '/' + appnumsubstring + '-image_file_wrapper/' + filename
          roarevent.media = roarevent.ocrlink
          //  roarevent.media = '/files/viewer/web/viewer.html?file=%2Ffiles/public/uspto/' + appnumsubstring + '/' + appnumsubstring + '-image_file_wrapper/' + filename
        } else {*/
        roarevent.ocrlink = '/files/public/uspto/' + appnumsubstring + '/' + appnumsubstring + '-image_file_wrapper/' + filename.replace('.pdf', '_ocr.pdf')

        roarevent.selflink = '/files/public/uspto/' + appnumsubstring + '/' + appnumsubstring + '-image_file_wrapper/' + filename
        roarevent.media = roarevent.selflink
        roarevent.media = '/files/public/uspto/' + appnumsubstring + '/' + appnumsubstring + '-image_file_wrapper/' + filename
        // }
        roarevent.description = file['Document Description'] || null
        roarevent.filename = file.Filename || null
        roarevent.collections = []
        roarevent.Application = appnumsubstring || null
        roarevent.date = appdatesubstring || null
        roarevent.rid = phd.imagefile.length - phd.imagefile.indexOf(file)
        // roarevent.file = file
        // roarevent.collections.push(roarmap.collections[0])
        roarevent.patentid = config.PNUM

        roarevent.doccode = file['Document Code'] || null
        // roarevent.collections.push(phd.roarmap.collections[0].id)
        DOCNAMES.forEach(function (code, key) {
          // code.forEach(function (value, key) {

          if (doccode === code.value) {
            roarevent.name = code.label
            roarevent.title = code.label
          }
        // })
        })

        var appfunction = function (roarevent, roarevents, controller, phd) {
          var template = '<script>var app = angular.module("ckapp").controller("AppCtrl", ["$scope", "$compile","$templateCache", "$http", "Collection","$window","$document","$location",function($scope, $compile,$templateCache, $http, Collection,$window,$document,$location){var app = this;' +
            'app = ' + controller + ';' +
            'app.patent = ' + phd.patent + ';' +
            'app.roarevent = ' + roarevent + ';' +
            'app.phd = ' + phd + ';' +
            'console.log(' + controller + ');' +
            'console.log(' + phd.patent + ');' +
            'console.log(' + roarevent + ');' +
            'console.log(' + phd + ');' +
            '});</script>'
          return template
        }
        var showheader = '<!doctype html><html ng-app="revealjs" class="html2"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"><title>reveal.js</title><base href="/" target="_blank"></base><link rel="stylesheet" href="/lexlab-starter/node_modules/reveal.js/css/reveal.css" />'

        var showheaderone = '<!-- Theme used for syntax highlighting of code --><link rel="stylesheet" href="/lexlab-starter/node_modules/reveal.js/lib/css/zenburn.css"><!-- Printing and PDF exports --><link rel="stylesheet" href="/lexlab-starter/node_modules/reveal.js/lib/css/print/print.css"/><link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" rel="stylesheet"/>     <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/></head>	<body>		<div class="reveal">			<!-- Any section element inside of this container is displayed as a slide -->			<div class="slides">'
        var theme = '<link rel="stylesheet" href="/lexlab-starter/node_modules/reveal.js/css/theme/league.css" id="theme">'
        var showfooter = '<script src="/lexlab-starter/node_modules/reveal.js/lib/js/head.min.js"></script><script src="/lexlab-starter/node_modules/reveal.js/js/reveal.js"></script><script>			Reveal.initialize({history: true,controls: true,progress: true,slideNumber: true,overview: true,center: true,touch: true,loop: true,rtl: false,shuffle: false, fragments: true,embedded: true,help: true,showNotes: false, autoSlide:0,autoSlideStoppable: true,autoSlideMethod: Reveal.navigateNext,mouseWheel: true, hideAddressBar: true,previewLinks: true,transition: "slide",transitionSpeed: "slow",backgroundTransition: "convex",viewDistance: 4,parallaxBackgroundImage: "/llp_core/img/blueroundlion.svg",parallaxBackgroundSize: "2500px 1500px",dependencies: [{ src: "/lexlab-starter/node_modules/reveal.js/plugin/markdown/marked.js" },{ src: "/lexlab-starter/node_modules/reveal.js/plugin/markdown/markdown.js" },{ src: "/lexlab-starter/node_modules/reveal.js/plugin/notes/notes.js", async: true },{ src: "/lexlab-starter/node_modules/reveal.js/plugin/highlight/highlight.js", async: true, callback: function() { hljs.initHighlightingOnLoad(); } },{ src: "/lexlab-starter/node_modules/reveal.js/plugin/zoom-js/zoom.js", async: true},/*{ src: "/lexlab-starter/node_modules/reveal.js/plugin/search/search.js", async: true},*/{ src: "/lexlab-starter/node_modules/reveal.js/plugin/print-pdf/print-pdf.js", async: true}]});</script></body></html>'

        var apptemplate = showheader + theme + showheaderone + '<!--CUTSLIDEHEAD--><div id="docheader" class="container-fluid two-col-right"  roarid="' + roarevent.id + '">' +
          '<div class="row">' +
          '<div class="col-xs-8"><div class="bs-callout bs-callout-Applicant"><h4>' + roarevent.title + '</h4><p>Dated ' + roardate + '</p><cite>' + roarevent.filename + '&nbsp;&nbsp;<a href="' + roarevent.media + '" pop="true" target="fframe"><i class="fa fa-external-link"></i></a></cite></div></div>' +
          '<div class="col-xs-4 col-sm-3 card card-' + roarevent.styleClass + '"><img src="https://placehold.it/250x150/4682b4/fff/&text=' + roarevent.rid + '" class="img img-hover img-responsive img-shadow"/> <p class="card-text">' +
          '<div class="col-xs-4"><iframe src="' + roarevent.media + '" class="img img-hover img-responsive img-shadow"></iframe></div>' +
          '</div>' +
          '</div><!--CUTSLIDETAIL-->' + showfooter

        APPDOCCODES.forEach(function (code, key) {
          if (doccode === code) {
            roarevent.styleClass = 'Applicant'
            //      roarevent.content = wraphead + apptemplate + wraptail
            // + appfunction(roarevent, phd.imagefile, main, phd)
            roarevent.data = wraphead + apptemplate + wraptail
            roarevent.slide = apptemplate
            // + appfunction(roarevent, phd.imagefile, main, phd)

          }
        })
        PTODOCCODES.forEach(function (code, key) {
          if (doccode === code) {
            roarevent.styleClass = 'PTO'
            //       roarevent.content = wraphead + apptemplate + wraptail
            // + appfunction(roarevent, phd.imagefile, main, phd)
            roarevent.data = wraphead + apptemplate + wraptail
            roarevent.slide = apptemplate
            // + appfunction(roarevent, phd.imagefile, main, phd)

          }
        })
        INTVDOCCODES.forEach(function (code, key) {
          if (doccode === code) {
            roarevent.styleClass = 'Interview'
            //    roarevent.content = wraphead + apptemplate + wraptail
            // + appfunction(roarevent, phd.imagefile, main, phd)
            roarevent.data = wraphead + apptemplate + wraptail
            roarevent.slide = apptemplate
            // + appfunction(roarevent, phd.imagefile, main, phd)

          }
        })
        var NOADOCCODES = require('./ptocodes').NOADOCCODES
        NOADOCCODES.forEach(function (code, key) {
          if (doccode === code) {
            roarevent.styleClass = 'NOA'
            //      roarevent.content = wraphead + apptemplate + wraptail
            // + appfunction(roarevent, phd.imagefile, main, phd)
            roarevent.data = wraphead + apptemplate + wraptail
            roarevent.slide = apptemplate
            // + appfunction(roarevent, phd.imagefile, main, phd)
            phd.content += apptemplate
          }
        })
        var PETDOCCODES = require('./ptocodes').PETDOCCODES
        PETDOCCODES.forEach(function (code, key) {
          if (doccode === code) {
            roarevent.styleClass = 'Petition'
            //     roarevent.content = wraphead + apptemplate + wraptail
            // + appfunction(roarevent, phd.imagefile, main, phd)
            roarevent.data = wraphead + apptemplate + wraptail
            roarevent.slide = apptemplate
            // + appfunction(roarevent, phd.imagefile, main, phd)
            phd.content += apptemplate
          }
        })
        //  roarevent.content = wraphead + '<doc-header roarid="' + de + '" roarevent="roarevent"></doc-header>' + wraptail + appfunction(roarevent, phd.imagefile,main,phd)
        //  roarevent.data = wraphead + '<doc-header roarid="' + de + '" roarevent="roarevent"></doc-header>' + wraptail + appfunction(roarevent, phd.imagefile,main,phd)
        //  phd.content += '<doc-header roarid="' + de + '" roarevent="roarevent"></doc-header>'
        var d = new Date()
        var n = d.getTime()
        roarevent.rows = [
          {
            columns: [{cid: n + 9,styleClass: 'col-sm-6',widgets: [
              { config: { height: '90vh', url: roarevent.media || 'http://www.google.com' }, styleClass: roarevent.styleClass || 'btn-dark', title: 'LexFrame', type: 'iframe', wid: n + 100 }]},
              { cid: n + 10, styleClass: 'col-sm-6', widgets: [
                  { config: { slidemode: false,id: 'PROMISE', height: '90vh' }, styleClass: roarevent.styleClass || 'btn-dark', title: 'LexPad', type: 'ckwidget', wid: n + 10110 },
                  // { config: { modelfield: 'draft',id: 'PROMISE', height: '90vh' }, styleClass: roarevent.styleClass || 'btn-dark', title: 'LexPad', type: 'ckwidget', wid: n + 1010 },

                  { config: { id: 'PROMISE', height: '90vh' }, styleClass: roarevent.styleClass || 'btn-dark', title: 'Text', type: 'text', wid: n + 105 },
                { config: { id: 'PROMISE', height: '90vh' }, styleClass: roarevent.styleClass || 'btn-dark', title: 'Settings', type: 'metadata', wid: n + 101 }] }

            ]
          }
        ]
        // roarevent.content = ckstarter + ckheader + ckender
        roarevent.structure = '6-6'
        roarevent.isActive = false

        // filepicker.storeUrl(roarevent.selflink,
        //   { filename: roarevent.filename },
        //   function (Blob) {
        //     filepicker.convert(
        //       Blob,
        //       { format: 'txt' },
        //       function (new_Blob) {
        //         roarevent.txt = new_Blob.url

        // alertify.success('text file added for' + roarevent.title)
        var refr = Collection(de)

        refr.update(roarevent, function (err) {
          var id = de

          refr.update({
            id: id,

            timestamp: firebase.database.ServerValue.TIMESTAMP
          })
          refr.child('rows').child('0').child('columns').child('1').child('widgets').child('0').child('config').child('id').set(id)
          refr.child('rows').child('0').child('columns').child('1').child('widgets').child('1').child('config').child('id').set(id)
          refr.child('rows').child('0').child('columns').child('1').child('widgets').child('2').child('config').child('id').set(id)
          // refr.child('rows').child('9').child('columns').child('1').child('widgets').child('3').child('config').child('id').set(id)
          // p.filelist.push(id)
          // phdref.child('roarmap').child('roarlist').push(id)
          // roarmap.roarevents.push(id)
          phd.roarmap.roarlist[id] = id

          var appref = Collection(roarevent.Application)
          appref.child('history').child(roarevent.date).child(id).set(id)
          allref.child('roarlist').child(id).set(id)

          // var queued
          var oc = new RegExp(/(^CLM)|(NOA)|(CTNF)|(CTFR)|(REM)|(^\bA\..)|(CTRS)|(CTNS)|(^\bSA\..)|(ABST)/)
          if (oc.test(roarevent.doccode) !== false) {
            // console.log(file)
            // bufferz.push(file)
            // bufferz.sort(function (a, b) {
            //   return a.date - b.date
            // })
            pushtoqueue(file)
            config.queued++
          }
          var mercount
          MERITSDOCS.forEach(function (code, key) {
            if (roarevent.doccode === code) {
              meritsref.child('roarlist').child(id).set(id)

              config.mercount++
              // buffe.push(file)
              console.log('merits', id)
            }
          })
          // config.mercount = mercount
          // config.queued = queued
          ARTDOCS.forEach(function (code, key) {
            if (roarevent.doccode === code) {
              // p.artlist.push(id)

              artref.child('roarlist').child(id).set(id)
              console.log('art', id)
            }
          })
          CLAIMDOCS.forEach(function (code, key) {
            if (roarevent.doccode === code) {
              claimref.child('roarlist').child(id).set(id)
              console.log('claims', id)
            }
          })
        })
      }
    })
    finalize(phd, groupids, config)
    // bufferz.forEach(function (file, index, bufferz) {
    //   return setTimeout(function () {
    //     pushtoqueue(file)
    //   }, 500 )
    // })
    return deferred.resolve(groupids)
  }

  function buildcollections (phd) {
    var d = new Date()
    var n = d.getTime()

    var Binder = function (options) {
      var binder = this
      binder = {
        name: 'USSN ' + phd.application['Application Number'],

        rid: options.rid,
        title: options.title + ' - ' + 'USSN ' + phd.application['Application Number'],
        collection_type: 'source',
        description: 'for US ' + config.PNUM,
        styleClass: options.styleClass,
        sortOrder: options.sortOrder,
        icon: options.icon,
        app: phd.application['Application Number'],
        content_type: 'collection',
        /*titleTemplateUrl: '/llp_core/modules/roarmap/directive/roargrid/roargrid-title.html',*/
        rows: [{ styleClass: 'row leather', columns: [{ cid: n + 10, styleClass: 'col-sm-12', widgets: [{ type: 'pagebuilder', title: options.rid + ' - ' + 'USSN ' + phd.application['Application Number'], styleClass: options.styleClass || 'btn-dark', config: { id: 'PROMISE', url: '/llp_core/modules/roarmap/directive/roargrid/roargrid.html' } }, {type: 'metadata',config: {id: 'PROMiSE'}}, {type: 'ckwidget',config: {id: 'PROMISE'}}] }] }]

      }
      return binder
    }
    var phdall = { rid: 'PHD1', title: 'ALL', styleClass: 'NOA', icon: 'fa-legal', sortOrder: 1 },
      phdmerits = { rid: 'PHD4', title: 'MERITS', styleClass: 'PTO', icon: 'fa-balance-scale', sortOrder: 4 },
      phdart = { rid: 'PHD2', title: 'ART', styleClass: 'Petition', icon: 'fa-leaf', sortOrder: 2 },
      phdclaims = { rid: 'PHD3', title: 'CLAIMS', styleClass: 'Applicant', icon: 'fa-sitemap', sortOrder: 3 },
      phddigest = {rid: 'PHD5', title: 'DIGEST', styleClass: 'NOA', icon: 'fa-chrome', sortOrder: 5}


    var groupids = []
    var groups = [ phdall, phdmerits, phdart, phdclaims, phddigest ]
    groups.forEach(function (group, key) {
      var refr = Collection(config.PNUM + group.title)
      refr.set(new Binder(group), function (err) {
        var id = config.PNUM + group.title
        refr.update({
          id: id,
          timestamp: firebase.database.ServerValue.TIMESTAMP
        })
        refr.child('thumbnail').set('/files/public/uspto/patents' + config.PNUM + '/' + config.PNUM + '.png'),

        refr.child('rows').child('0').child('columns').child('0').child('widgets').child('0').child('config').child('id').set(id)
        refr.child('rows').child('0').child('columns').child('0').child('widgets').child('1').child('config').child('id').set(id)
        refr.child('rows').child('0').child('columns').child('0').child('widgets').child('2').child('config').child('id').set(id)
        refr.child('roarlist').child(config.PNUM).set(config.PNUM)
        var ptid = config.IPAYEAR.toString() + config.IPANUM
        refr.child('roarlist').child(ptid).set(ptid)

        return groupids.push(id)
      })
    })
    setTimeout(function () {
      addpatent(groupids, phd, config, 1)
      setTimeout(function () {
        try {addpatent(groupids, phd, config, 0)} catch(ex) {}
        finally {
          setTimeout(function () {
            buildroar(groupids, phd)
          }, 500)
        }
      }, 500)
    }, 500)
  }

  function addpatent (groupids, phd, config, ny) {
    var phdpatent
    if (ny === 1) {
      phdpatent = {PNUM: config.PNUM}
    }else if (ny === 0) {
      phdpatent = {IPAYEAR: config.IPAYEAR,IPANUM: config.IPANUM}
    }
    $patentsearch(phd, phdpatent, phd).then(function (patentobj) {
      if (ny === 1) {
        phd.patent = patentobj
      }else if (ny === 0) {
        phd.pubapp = patentobj
      }

      var date = new Date()
      var d = new Date()
      var n = d.getTime()
      var patent = patentobj
      patent.rid = 'P' + ny
      // patent.text = patent.claim
      // patent.rows = [
      //   {
      //     columns: [
      //       { cid: n + 10, styleClass: 'col-sm-6', widgets: [{ config: { height: '30em', url: patent.media || 'http://www.google.com' }, title: patent.title || 'title', titleTemplateUrl: '{widgetsPath}/testwidget/src/title.html', type: 'iframe', wid: n + 100, styleClass: patent.styleClass || 'btn-dark' }] },
      //       { cid: n + 1000, styleClass: 'col-sm-6', widgets: [{ config: { id: 'PROMISE' }, title: patent.title || 'title', titleTemplateUrl: '{widgetsPath}/testwidget/src/title.html', type: 'ckwidget', wid: n + 15, styleClass: patent.styleClass || 'btn-dark' }] }
      //     ]
      //   }
      // ]
      patent.structure = '6-6'
      var refr = Collection(patent.id)
      refr.update(patent, function (err) {
        var id = patent.id
        refr.update({
          id: id,
          timestamp: firebase.database.ServerValue.TIMESTAMP
        })
        refr.child('rows').child('0').child('columns').child('1').child('widgets').child('0').child('config').child('id').set(id)
        var allref = Collection(groupids[0])
        var meritsref = Collection(groupids[1])
        allref.child('roarlist').child(id).set(id)
        meritsref.child('roarlist').child(id).set(id)
      })
    })
  }
  function pushtoqueue (record) {
    var queue = a.database().ref().child('queue/tasks')
    var application = record['Filename'].slice(0, record['Filename'].indexOf('-'))
    var id = record['Filename'].slice(0, record['Filename'].lastIndexOf('-'))
    queue.push({ 'id': id, 'name': id, 'file': '/opt/files/public/uspto/' + application + '/' + application + '-image_file_wrapper/' + record['Filename']})
  }
  function finalize (phd, groupids, config, bufferz) {
    var appnum = config.APPNUM
    var applicationobj = Collection(appnum)

    var phdref = Collection(config.id)
    var dd = config.PNUM + 'DIGEST'
    var patentdigest = {
      title: 'DIGEST for ' + config.PNUM,
      rows: [{ styleClass: 'leather', columns: [{ cid: dd + 5, style: 'col-sm-12', widgets: [{ config: { id: dd, PNUM: config.PNUM, APPNUM: config.APPNUM, IPAYEAR: config.IPAYEAR, IPANUM: config.IPANUM }, type: 'patent', styleClass: 'NOA', wid: dd + 10 }] }] }]
    }
    Collection(dd).update(patentdigest)
    phd.appnum = config.APPNUM
    phd.media = '/lexlab-starter/public/claimtree/?' + config.PNUM + '/preview'
    phd.title = 'PhD for ' + config.PNUM
    phd.description = 'USSN ' + phd.application['Application Number']
    phd.styleClass = 'Applicant'
    phd.rid = 'PHD'
    phd.icon = 'fa-balance-scale'
    // phd.rows= [{columns:[{widgets:[{config:{id:dd},type:'getphd'}],styleClass:'col-sm-12'}]}]
    groupids.forEach(function (id, key) {
      /*-- create internal report pages --*/ // phdref.child('roarlist').child(id).set(id)
      phd.roarlist[id] = id
    })

    // phd.roarlist[dd] = dd
    var countm = 0
    phd.imagefile.forEach(function (img, idx, all) {
      MERITSDOCS.forEach(function (code, key) {
        if (img['Document Code'] === code) {
          countm++
        }
      })
    })
    // localStorageService.set(phd.application['Application Number'], phd)
    // $http.post('/getphd/store/' + appnum, phd)
    fs.writeFile(path.join(process.cwd(), 'files', 'public', 'uspto', appnum, 'index.json'),
      JSON.stringify(phd, undefined, 2),
      function (err) {
        phdref.update(phd)
        applicationobj.update(phd)
        var rep = Collection('REPORT' + appnum)
        rep.update(phd)
        rep.update({id: 'REPORT' + appnum,
          title: 'US ' + config.PNUM,
          media: '/lexlab-starter/public/claimtree/?' + config.IPAYEAR + config.IPANUM + '/preview',
          rid: phd.imagefile.length + '|' + countm,
          styleClass: 'NOA',
          rows: [{ styleClass: 'leather', columns: [{ cid: dd + 5, style: 'col-sm-12', widgets: [{ config: { id: 'REPORT' + appnum }, type: 'getphd', styleClass: 'info', wid: dd + 10 }] }] }]
        })
        var piy = new Date()
        var report = Collection('REPORT')
        report.child('roarlist').child('REPORT' + appnum).set('REPORT' + appnum)
        var msg = piy.toISOString() + ' |  Finished history of US ' + config.PNUM + ' - USSN ' + config.APPNUM + ' [[publication no]] ' + config.IPAYEAR + '/' + config.IPANUM + ''
        var alerts = a.database().ref().child('alertfeed')
        alerts.push(msg)
        console.log(msg)
      }
    )
  }
}
