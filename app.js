/**
 * Module dependencies.
 */

var express = require('express')
var cookieParser = require('cookie-parser')
var compress = require('compression')
var favicon = require('serve-favicon')
var session = require('express-session')
var bodyParser = require('body-parser')
var logger = require('morgan')
var errorHandler = require('errorhandler')
var lusca = require('lusca')
var methodOverride = require('method-override')
var firebase = require('firebase-admin')
var path = require('path')
var serviceAccount = require('./config/firebase-lexlab-firebase-adminsdk-j7h05-3695f670cc.json')
var firebaseUrl = process.env.FIREBASE_URL
var _ = require('lodash')
var MongoStore = require('connect-mongo')(session)
var flash = require('express-flash')
var path = require('path')
var mongoose = require('mongoose')
var passport = require('passport')
var serveIndex = require('serve-index')
var serveFav = require('serve-favicon')
var serveStatic = require('serve-static')
var vhost = require('vhost')
var expressValidator = require('express-validator')
// var sass = require('node-sass-middleware')

var jwt = require('express-jwt')
var fs = require('fs')
var helpers = require('view-helpers')

var jsonServer = require('json-server')
// var server = jsonServer.create()
// server.use(jsonServer.defaults())
var jsonrouter = jsonServer.router(path.join(__dirname, '..', 'db.json'))
var directory = require('express-directory')
/**
 * Controllers (route handlers).
 */
var homeController = require('./controllers/home')
var userController = require('./controllers/user')
var apiController = require('./controllers/api')
var contactController = require('./controllers/contact')
var angularPagesController = require('./controllers/angular')
var adminPagesController = require('./controllers/ng-admin')
var phdPagesController = require('./controllers/phd')
var dashboardPagesController = require('./controllers/dashboard')
var blogPagesController = require('./controllers/blog')
var filesController = require('./controllers/files')
var messagesController = require('./controllers/messages')
var pressPagesController = require('./controllers/press')
var roarPagesController = require('./controllers/ROAR')
var ptoController = require('./controllers/pto')
// var urlshortener = require('../url-shortener/app')
/**
 * API keys and Passport configuration.
 */
var phd = require('./controllers/phd')
var secrets = require('./config/secrets')
var passportConf = require('./config/passport')
var corsCtrl = require('./controllers/cors')
/**
 * Create Express server.
 */
var app = express()
var jwtCheck = jwt({
  secret: new Buffer('QA11_aaC1FkLpjW1DFXftrd9F05CzFuTgU84gdDTXfeZ_Y1DpY5IG7X9BRXwXTx_', 'base64'),
  audience: 'cUlDdJf95PlGqge70bd2MfrLQlBb8Aws'
})
/**
 * Connect to MongoDB.
 */
var opTions = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
}

mongoose.connect(secrets.db, opTions)
var conn = mongoose.connection

conn.on('error', console.error.bind(console, 'connection error:'))

conn.once('open', function () {
  // Wait for the database connection to establish, then start the app.

  /**
   * Express configuration.
   */
  app.set('port', process.env.PORT || 80)
  app.set('views', './lexlab-starter/')
  app.set('view engine', 'jade')
  app.use(compress())
  // app.use(sass({
  //     src: path.join(__dirname, 'public'),
  //     dest: path.join(__dirname, 'public'),
  //     debug: true,
  //     outputStyle: 'expanded'
  // }))
  app.use(logger('dev'))
  app.use(favicon(path.join(__dirname, 'public', 'favicon.png')))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(expressValidator())
  app.use(methodOverride())
  app.use(cookieParser())
  app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: secrets.sessionSecret,
    store: new MongoStore({ url: secrets.db, autoReconnect: true })
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(flash())
  app.all('*', function (req, res, next) {
    /**
     * Response settings
     * @type {Object}
     */
    var responseSettings = {
      'AccessControlAllowOrigin': req.headers.origin,
      'AccessControlAllowHeaders': 'Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,    Date, X-Api-Version, X-File-Name',
      'AccessControlAllowMethods': 'POST, GET, PUT, DELETE, OPTIONS',
      'AccessControlAllowCredentials': true
    }

    /**
     * Headers
     */
    res.header('Access-Control-Allow-Credentials', responseSettings.AccessControlAllowCredentials)
    res.header('Access-Control-Allow-Origin', responseSettings.AccessControlAllowOrigin)
    res.header('Access-Control-Allow-Headers', (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : 'x-requested-with')
    res.header('Access-Control-Allow-Methods', (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods)

    if ('OPTIONS' == req.method) {
      res.send(200)
    } else {
      next()
    }
  })
  app.use(helpers('lexlab')); // make sure you declare this middleware after `connect-flash` and `express.session` middlewares and before `express.router`.

  //    app.use(lusca({
  //        csrf: true,
  //        xframe: '*',
  //        xssProtection: true
  //    }))

  app.use(function (req, res, next) {
    res.locals.user = req.user
    next()
  })
  app.use(function (req, res, next) {
    if (/api/i.test(req.path)) {
      req.session.returnTo = req.path
    }
    next()
  })
  // app.use('/', jwtCheck)
  process.chdir('..')
  // app.use('', express.static(process.cwd(), { maxAge: 10000 }))

  app.use('/data_api', jsonrouter)
  /**
   * Primary app routes.
   */
  app.get('/', homeController.index)
  app.get('/private/welcome/**', homeController.video)
  app.get('/login', userController.getLogin)
  app.post('/login', userController.postLogin)
  app.get('/logout', userController.logout)
  app.get('/forgot', userController.getForgot)
  app.post('/forgot', userController.postForgot)
  app.get('/reset/:token', userController.getReset)
  app.post('/reset/:token', userController.postReset)
  app.get('/signup', userController.getSignup)
  app.post('/signup', userController.postSignup)
  app.get('/contact', contactController.getContact)
  app.post('/contact', contactController.postContact)
  app.get('/account', passportConf.isAuthenticated, userController.getAccount)
  app.post('/account/profile', passportConf.isAuthenticated, userController.postUpdateProfile)
  app.post('/account/password', passportConf.isAuthenticated, userController.postUpdatePassword)
  app.post('/account/delete', passportConf.isAuthenticated, userController.postDeleteAccount)
  app.get('/account/unlink/:provider', passportConf.isAuthenticated, userController.getOauthUnlink)

  // app.use('/l', urlshortener)

  /**
   * API examples routes.
   */
  /*app.get('/api', apiController.getApi)
  app.get('/api/lastfm', apiController.getLastfm)
  app.get('/api/nyt', apiController.getNewYorkTimes)
  app.get('/api/aviary', apiController.getAviary)
  app.get('/api/steam', apiController.getSteam)
  app.get('/api/stripe', apiController.getStripe)
  app.post('/api/stripe', apiController.postStripe)
  app.get('/api/scraping', apiController.getScraping)
  app.get('/api/twilio', apiController.getTwilio)
  app.post('/api/twilio', apiController.postTwilio)
  app.get('/api/clockwork', apiController.getClockwork)
  app.post('/api/clockwork', apiController.postClockwork)
  app.get('/api/foursquare', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.getFoursquare)
  app.get('/api/tumblr', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.getTumblr)
  app.get('/api/facebook', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.getFacebook)
  app.get('/api/github', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.getGithub)
  app.get('/api/twitter', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.getTwitter)
  app.post('/api/twitter', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.postTwitter)
  app.get('/api/venmo', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.getVenmo)
  app.post('/api/venmo', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.postVenmo)
  app.get('/api/linkedin', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.getLinkedin)
  app.get('/api/instagram', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.getInstagram)
  app.get('/api/yahoo', apiController.getYahoo)
  app.get('/api/paypal', apiController.getPayPal)
  app.get('/api/paypal/success', apiController.getPayPalSuccess)
  app.get('/api/paypal/cancel', apiController.getPayPalCancel)
  app.get('/api/lob', apiController.getLob)
  app.get('/api/bitgo', apiController.getBitGo)
  app.post('/api/bitgo', apiController.postBitGo)
  */
  /**
   * OAuth authentication routes. (Sign in)
   */

  // app.get('/', passport.authenticate('auth0'))
  // app.get('/', passport.authenticate('auth0', { failureRedirect: '/login' }), function(req, res) {
  //     res.redirect(req.session.returnTo || '/')
  // })
  app.get('/auth/instagram', passport.authenticate('instagram'))
  app.get('/auth/instagram/callback', passport.authenticate('instagram', { failureRedirect: '/login' }), function (req, res) {
    res.redirect(req.session.returnTo || '/')
  })
  app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'user_location'] }))
  app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), function (req, res) {
    res.redirect(req.session.returnTo || '/')
  })
  app.get('/auth/github', passport.authenticate('github'))
  app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), function (req, res) {
    res.redirect(req.session.returnTo || '/')
  })
  app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }))
  app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function (req, res) {
    res.redirect(req.session.returnTo || '/')
  })
  app.get('/auth/twitter', passport.authenticate('twitter'))
  app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), function (req, res) {
    res.redirect(req.session.returnTo || '/')
  })
  app.get('/auth/linkedin', passport.authenticate('linkedin', { state: 'SOME STATE' }))
  app.get('/auth/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login' }), function (req, res) {
    res.redirect(req.session.returnTo || '/')
  })

  /**
   * OAuth authorization routes. (API examples)
   */
  app.get('/auth/foursquare', passport.authorize('foursquare'))
  app.get('/auth/foursquare/callback', passport.authorize('foursquare', { failureRedirect: '/api' }), function (req, res) {
    res.redirect('/api/foursquare')
  })
  app.get('/auth/tumblr', passport.authorize('tumblr'))
  app.get('/auth/tumblr/callback', passport.authorize('tumblr', { failureRedirect: '/api' }), function (req, res) {
    res.redirect('/api/tumblr')
  })
  app.get('/auth/venmo', passport.authorize('venmo', { scope: 'make_payments access_profile access_balance access_email access_phone' }))
  app.get('/auth/venmo/callback', passport.authorize('venmo', { failureRedirect: '/api' }), function (req, res) {
    res.redirect('/api/venmo')
  })
  /**
   * Angular-Applications
   */
  if (process.env.SERVERNAME == 'wiley') {
    var a = firebase.initializeApp({
      credential: firebase.credential.cert(serviceAccount),
      databaseURL: 'https://lexlab.firebaseio.com'
    }, 'firebase')
  }else {
    var configb = {
     credential: firebase.credential.cert(serviceAccount),
      databaseURL: 'https://dazzling-fire-2433.firebaseio.com',
    }
    var a = firebase.initializeApp(configb)
  }
  //var a = firebase.initializeApp({
  //  credential: firebase.credential.cert(serviceAccount),
  //  databaseURL: 'https://lexlab.firebaseio.com'
  // })
  a
  // var b = firebase.initializeApp({
  //   credential: firebase.credential.applicationDefault,
  //   databaseURL:'https://lexlab.firebaseio.com'
  // })

  // app.use('', express.static(path.join(process.cwd())))
  app.use('/lexlab-starter', express.static(path.join(process.cwd(), 'lexlab-starter')))
  app.use('/getphdwidget', express.static(path.join(process.cwd(), 'getphdwidget')))
  app.use('/newwidget', express.static(path.join(process.cwd(), 'newwidget')))
  app.use('/pagebuilderwidget', express.static(path.join(process.cwd(), 'pagebuilderwidget')))
  app.use('/collectionwidget', express.static(path.join(process.cwd(), 'collectionwidget')))
  app.use('/treewidget', express.static(path.join(process.cwd(), 'treewidget')))
  app.use('/timetracker', express.static(path.join(process.cwd(), 'timetracker')))
  app.use('/llp_core', express.static(path.join(process.cwd(), 'llp_core')))
  app.get('/assets', express.static(path.join(__dirname, 'public')))
  app.get("/testpage", express.static(path.join(process.cwd(), "files", "uploads", "1466118001490.html")));
  app.get('/labs', angularPagesController.getPagesServedByAngular)
  app.get('/admin', adminPagesController.getPagesServedByAngular)
    var uploader = require('./public/fileupload/server')
  app.use('/upload', uploader)
  app.use('/app/upload', uploader)
  app.all('/app*', phdPagesController.getPagesServedByAngular)

  var ocrctrl = require('./controllers/ocr')
  app.use('/files/public/timelines', serveIndex(path.join(process.cwd(), 'files', 'public', 'timelines'), {icons: true, view: 'details'}))

  app.use('/files/**.pdf$', function (req, res, next) {
    var user = req.user
    if (user === undefined) {
      next()
    }else {
      var _p = req.originalUrl
      res.redirect('/files/viewer/web/viewer.html?file=/ff/' + _p.slice(7, _p.length))
    }
  })
  app.use('/files/uploads', filesController.getPagesServedByAngular)
  app.use('', serveStatic(path.join(process.cwd())))

  app.use('/ff', express.static(path.join(process.cwd(), 'files')))
  app.get('/preview?file=*', function (req, res, next) {
    var webshot = require('webshot')
    var newurl = req.originalUrl.slice(15, req.originalUrl.length)
    var filename = req.originalUrl.slice(req.originalUrl.lastIndexOf('/'), req.originalUrl.length)
    var options = {
      windowSize: {
        width: 1200,
        height: 800
      },
      renderDelay: 1500,
      takeShotOnCallback: true,
      userAgent: req.headers['user-agent']
    }
    var thumb = path.join(process.cwd(), 'files', 'thumbs', filename)
    if (!fs.existsSync(thumb)) {
      var renderStream = webshot('https//' + newurl, thumb, options, function (err) {
        if (err) {}else {
          res.sendFile(thumb)
        }
      })
    } else {
      res.sendFile(thumb)
    }
  })
  // app.use('/*', express.static(path.join(process.cwd(), 'files')))
  // app.use('/ocr', ocrctrl.ocrctrl)

  app.use('/fonts', express.static(path.join(process.cwd(), 'llp_core', 'fonts')))
  app.get('/blog', blogPagesController.getPagesServedByAngular)

  app.get('/lexpress/:domain/:user/:file', function (req, res, next) {
    var User = require('./models/User')
    var use = req.params.user
    var user = req.user
    var domain = req.params.domain
    var file = req.params.file
    var pathtofile = req.params
    var email = use + '@' + domain + ('.com' || '.net' || '.org' || '.edu')
    var path = require('path')
    User.findOne({ email: email }, function (err, existingUser) {
      if (existingUser) {
        //   return  express.static(path.join(process.cwd(), 'files', (existingUser._id.toString())))

        res.sendFile(path.resolve(process.cwd(), 'files', existingUser._id.toString(), file))
      }
    })
  })
  app.get('/user/images/*', function (req, res, next) {
    var User = require('./models/User')
    var fs = require('fs')
    var path = require('path')
    // var use = req.params.user
    var mkdir = require('mkdirp')

    var user = req.user
    var dir2 = path.join(process.cwd(), 'files', 'public', 'uspto', 'patents')
    var dir1 = path.join(process.cwd(), 'files', req.user._id.toString())
    var dir = path.join(process.cwd(), 'llp_core', 'img')

    var tester = new RegExp(/\.(png)|(svg)|(gif)|(jpg)|(bmp)|(tif)/ig)
    var list = [], resp = []
    var filelist = []
    function processer (_p, resp, group) {
      fs.readdir(_p, function (err, list) {
        for (var i = list.length - 1; i >= 0; i--) {
          resp.push(processNode(_p, list[i]))
        }

        list.forEach(function (entry, index, list) {
          tester.test(entry) === true ? filelist.push({image: '/llp_core/img/' + entry, folder: group}) : false
          console.log(filelist)
          console.log('Total: ', filelist.length)
        //   if (tester.test(entry) === true) { } else {}
        })
        var source = fs.createReadStream(dir + '/images.json')
        // var filename = file.slice(file.lastIndexOf('/')+1, file.length)
        // console.log(__filename + ': ' + filename + ' |' + date)
        var dest = fs.createWriteStream(dir + '/images.json')
        // var dest2 =  fs.createWriteStream(path.join(publicdirectory, filename + '__' + now.getFullYear() + '-'+ now.getMonth() + '-' + now.getDate() + '::' + now.getHours() +':'+ now.getMinutes()+'.html'))

        source.pipe(dest)
        source.on('end', function () { console.log('images json' + ' /* copied */ ');})
      })
    }
    var result = [processer(dir, resp, 'public'), processer(dir1, resp, 'user'), processer(dir2, resp, 'patents')]

    return res.sendFile(dir + '/images.json')
  })
  app.post('/lexpress/:domain', function (req, res, next) {
    var User = require('./models/User')
    var fs = require('fs')
    var path = require('path')
    // var use = req.params.user
    var mkdir = require('mkdirp')

    var user = req.user
    var domain = req.params.domain

    // var email = use + '@' + domain
    // if (domain){
    var dest = path.join(process.cwd(), 'files', domain)
    mkdir(dest, function (err, made) {
      if (err) {
        console.log(err)
      }
      fs.writeFile(dest + '.html', req.body.file, function (err) {
        console.log(err)
        res.status(202).end()
      })
    })

  // }
  // else{
  //  res.status(400).end()
  // }
  })
  app.get('/ROAR', roarPagesController.getPagesServedByAngular)
  app.get('/timetracker', express.static(path.join(process.cwd(), 'timetracker')))

  var getter = require('./public/fileupload/pto-download')
  app.post('/import', function (req, res, next) {
    // var Firebase = require('firebase')
    // var FIREBASE_URL = process.env.FIREBASE_URL
    var date = new Date()
    var dest = path.resolve(process.cwd(), 'files', req.user._id)

    var originfile = req.body.url
    var Downloader = require('mt-files-downloader')
    var downloader = new Downloader()
    var dl = downloader.download(originfile, dest)
    dl.setOptions({ threadsCount: 3, timeout: 10000 })
    dl.setRetryOptions({ maxRetries: 10, retryInterval: 4000 })

    dl.start()
    dl.on('error', function (dl) {
      dl.destroy()
      res.status('402').end()
    })
    dl.on('end', function (dl) {
      res.status('200').json({newurl: '/files/' + req.user._id + '/'})
    })
  })
  app.all('/getphd/:appnum/:pnum/:year/:ipa/:idref/:source', function (req, res, next) {
    var appnum = req.params.appnum
    var config = {
      PNUM: req.params.pnum,
      id: req.params.idref,
      IPAYEAR: req.params.year,
      IPANUM: req.params.ipa,
      APPNUM: req.params.appnum
    }
    var http = require('https')
    var fs = require('fs')
    // var download = require('download')

    var zipfile = require('./public/fileupload/zipfile')
    var downloadCtrl = require('./controllers/download')
    var date = new Date()
    var desta = path.join(process.cwd(), 'files', 'public', 'uspto', appnum)
    var dest = path.join(process.cwd(), 'files', 'uploads', appnum + '.zip')
    var googleurl = 'https://storage.googleapis.com/uspto-pair/applications/' + appnum + '.zip'
    var reedtechurl = 'https://patents.reedtech.com/downloads/pairdownload/' + appnum + '.zip'
    var useurl
    if (req.params.source === 'google') {
      useurl = googleurl
    } else {
      useurl = reedtechurl
    }

    var retryurl = '' + req.url
    var ref = a.database().ref().child('content').child(appnum)

    // var phd = require('./controllers/phd')
    var $roarmap = require('./controllers/roarmap')
    var $patentsearch = require('./controllers/patentsearch')

    // firebase.auth().signInAnonymously().then(function (error, authData) {
    //   if (error) {console.log(error)} else {
    if (!fs.existsSync(desta)) {
      // if (!fs.existsSync(dest)) {
      downloadCtrl.download(useurl, dest, ref, config.APPNUM)
        .then(function (dl) {
          console.log('dl: ', dl)
          zipfile(req, res, dl.filePath, retryurl, config)
            .then(function (count) {
              var pphd = phd.phdparser(appnum)
              var newobj = {}
              pphd.application.forEach(function (innerarray, key) {
                if (innerarray[0] == 'Class / Subclass') {
                  newobj['Class Subclass'] = innerarray[1]
                } else {
                  newobj[innerarray[0]] = innerarray[1]
                }
                pphd.application = newobj
              })
              $roarmap(pphd, pphd, config).then(function (json) {
                resp.json(json)
              })
            })
        })
    // }
    // })
    // .catch(function (dl) {
    //   console.log(dl)
    //   setTimeout(function () {
    //     http.get(retryurl, null)
    //   }, 1500)
    // })
    // } else {
    //   zipfile(req, res, dest, retryurl, config)
    //   // .then(function (count) {
    //   var pphd = phd.phdparser(appnum)
    //   var newobj = {}
    //   pphd.application.forEach(function (innerarray, key) {
    //     if (innerarray[0] == 'Class / Subclass') {
    //       newobj['Class Subclass'] = innerarray[1]
    //     } else {
    //       newobj[innerarray[0]] = innerarray[1]
    //     }
    //     pphd.application = newobj
    //   })
    //   $roarmap(pphd, pphd, config).then(function (json) {
    //     resp.json(json)
    //   })
    // })
    // })
    // })
    // }
    } else {
      var pphd = phd.phdparser(appnum)
      var newobj = {}
      pphd.application.forEach(function (innerarray, key) {
        if (innerarray[0] == 'Class / Subclass') {
          newobj['Class Subclass'] = innerarray[1]
        } else {
          newobj[innerarray[0]] = innerarray[1]
        }
        pphd.application = newobj
      })
      $roarmap(pphd, pphd, config).then(function (json) {
        res.json(json)
      })
    // })
    // })
    }
  // }
  // })
  })

  var feedapi = require('./public/ptoservices/ptolitigationcenter')
  app.use('/ptolitigationcenter', feedapi)

  var browser = require('./public/fileBroswerApp/server/app')
  app.get('/chat', express.static(path.join(process.cwd(), 'llp_core', 'chat')))
  app.get('/3dchart', express.static(path.join(process.cwd(), 'lexlab-starter', 'public', '3Dchart')))

  var report = require('./controllers/report')

  app.get('/report', report.getPagesServedByAngular)

  app.get('/report/all', function (req, res, next) {
    var fs = require('fs'),
      path = require('path'),
      phd = require('./controllers/phd'),
      $roarmap = require('./controllers/roarmap'),
      $patentsearch = require('./controllers/patentsearch'),
      moment = require('moment')

    var _p = path.resolve(process.cwd(), 'files/public/uspto/')
    var resp = []
    var filelist = []

    var apps = []
    var total = 0,
      incomplete = 0,
      complete = 0,
      paID
    var tester = new RegExp(/^[\.\D]/)
    function processer (_p, res) {
      fs.readdir(_p, function (err, list) {
        for (var i = list.length - 1; i >= 0; i--) {
          resp.push(processNode(_p, list[i]))
        }
        list.forEach(function (entry, index, list) {
          tester.test(entry) ? false : filelist.push(entry)
          console.log(filelist)
          console.log('Total: ', filelist.length)
          if (tester.test(entry) === true) { } else {
            var parsedfiles = phd.phdparser(entry)
            var pphd = parsedfiles
            var newobj = {}
            var reportobject = {}

            if (pphd.application !== undefined) {
              pphd.application.forEach(function (innerarray, key) {
                if (innerarray[0] == 'Class / Subclass') {
                  newobj['Class Subclass'] = innerarray[1]
                } else {
                  newobj[innerarray[0]] = innerarray[1]
                }
                pphd.application = newobj
              })
              reportobject = {
                appnum: entry,
                isReedTech: (pphd.README['2']['0'].indexOf('Reed Technology') > -1) ? true : false,
                application: {
                  utility: pphd.application['Application Number'],
                  date_filed: new Date(pphd.application['Filing or 371 (c) Date']).getTime(),
                  publication: pphd.application['Earliest Publication No'],
                  date_pub: new Date(pphd.application['Earliest Publication Date']).getTime()
                },
                art_unit: pphd.application['Group Art Unit'],
                patent: pphd.application['Patent Number'],
                title: pphd.application['Title of Invention'],
                date: pphd.application['Issue Date of Patent'],
                examiner: pphd.application['Examiner Name'],
                docket: pphd.application['Attorney Docket Number']
              //                              paper_count: parsedfiles.imagefile.length
              }
              if (reportobject.patent == '-') {
                paID = reportobject.application.publication.replace('US ', '').replace('-', '').replace(' ', '')
                reportobject.pub = { id: paID }
                if (!fs.existsSync(path.resolve(process.cwd(), 'files/public/uspto/patents', paID, paID + '.json'))) {
                  var http = require('http')
                  http.get('http://127.0.0.1:8000/getphd/patents/' + paID, function (err, respd) {
                    if (!err) {
                      respd.on('end', function () {
                        var pub = require(path.resolve(process.cwd(), 'files/public/uspto/patents', paID, paID + '.json'))
                        var altimageurl = '/patents/' + paID + '/preview'
                        var grant_link = pub.grant_link
                        reportobject.patent = grant_link.slice(grant_link.indexOf(US) + 1, grant_link.length)
                        //                                    var altimageurl = '/files/public/uspto/patents/' + paID + '.png'
                        reportobject.media = altimageurl

                        reportobject.altimageurl = altimageurl
                        reportobject.pub.media = altimageurl
                        reportobject.claims_pending_total = pub.claim_total
                        reportobject.independent_pending_claims = pub.claims.length
                      }); }
                  })
                } else {
                  var pub = require(path.resolve(process.cwd(), 'files/public/uspto/patents', paID, paID + '.json'))
                  var altimageurl = '/patents/' + paID + '/preview'

                  // var altimageurl = '/files/public/uspto/patents/' + paID + '.png'
                  reportobject.media = altimageurl

                  reportobject.altimageurl = altimageurl
                  reportobject.pub.media = altimageurl
                  reportobject.claims_pending_total = pub.claim_total
                  reportobject.independent_pending_claims = pub.claims.length
                }
              } else {
                var id = reportobject.patent.replace(/\D/ig, '')
                reportobject.id = id
                if (!fs.existsSync(path.resolve(process.cwd(), 'files/public/uspto/patents', id, id + '.json'))) {
                  var http = require('http')
                  http.get('http://127.0.0.1:8000/getphd/patents/' + id, function (err, respd) {
                    if (!err) {
                      respd.on('end', function () {
                        var pat = require(path.resolve(process.cwd(), 'files/public/uspto/patents', id, id + '.json'))
                        var imageurl = '/patents/' + id + '/preview'

                        // var imageurl = '/files/public/uspto/patents/' + id + '.png'
                        reportobject.imageurl = imageurl
                        reportobject.media = imageurl
                        reportobject.claims_issued_total = pat.claim_total
                        reportobject.independent_claims = pat.claims.length
                        reportobject.links = pat.references
                      }); }
                  })
                } else {
                  var pat = require(path.resolve(process.cwd(), 'files/public/uspto/patents', id, id + '.json'))
                  var imageurl = '/patents/' + id + '/preview'

                  // var imageurl = '/files/public/uspto/patents/' + id + '.png'
                  reportobject.imageurl = imageurl
                  reportobject.media = imageurl
                  reportobject.claims_issued_total = pat.claim_total
                  reportobject.independent_claims = pat.claims.length
                  reportobject.links = pat.references
                  total++
                  complete++
                }
              }
              if (reportobject.application.publication == '-') {
              } else {
                reportobject.funconfig = {
                  PNUM: reportobject.id,
                  id: 'REPORT' + entry,
                  IPAYEAR: paID ? paID.slice(0, 4) : 2016,
                  IPANUM: paID ? paID.slice(4, paID.length) : 123456,
                  APPNUM: entry
                }
                paID = reportobject.application.publication.replace('US ', '').replace('-', '').replace(' ', '')
                reportobject.pub = { id: paID }
                if (!fs.existsSync(path.resolve(process.cwd(), 'files/public/uspto/patents', paID, paID + '.json'))) {
                  var http = require('http')
                  http.get('http://127.0.0.1:8000/getphd/patents/' + paID, function (err, respd) {
                    if (!err) {
                      respd.on('end', function () {
                        var pub = require(path.resolve(process.cwd(), 'files/public/uspto/patents', paID, paID + '.json'))
                        var altimageurl = '/patents/' + paID + '/preview'

                        //                                    var altimageurl = '/files/public/uspto/patents/' + paID + '.png'
                        reportobject.media = altimageurl

                        reportobject.altimageurl = altimageurl
                        reportobject.pub.media = altimageurl
                        reportobject.claims_pending_total = pub.claim_total
                        reportobject.independent_pending_claims = pub.claims.length
                      }); }
                  })
                } else {
                  var pub = require(path.resolve(process.cwd(), 'files/public/uspto/patents', paID, paID + '.json'))
                  var altimageurl = '/patents/' + paID + '/preview'

                  // var altimageurl = '/files/public/uspto/patents/' + paID + '.png'
                  reportobject.media = altimageurl

                  reportobject.altimageurl = altimageurl
                  reportobject.pub.media = altimageurl
                  reportobject.claims_pending_total = pub.claim_total
                  reportobject.independent_pending_claims = pub.claims.length
                }
              }
              var fstat = fs.statSync(path.join(_p, entry))
              reportobject.file = {
                size: bytes(fstat.ino),
                added: moment(fstat.birthtime).format('dd MM Do YYYY, h:mm:ss a'),
                fstat: {
                  size: fstat.ino,
                  added: new Date(fstat.birthtime).getTime(),
                  atime: new Date(fstat.atime).getTime(),
                  mtime: new Date(fstat.mtime).getTime(),
                  ctime: new Date(fstat.ctime).getTime()
                }
              }
              // reportobject.paper_count = pphd.imagefile.length
              // $patentsearch(pphd, rconfig, parsedfiles).then(function (patentobj) {
              //                         pphd.patent = patentobj
              //                         console.log(pphd)
              //                          $roarmap(parsedfiles, pphd, config)
              //                     })
              apps.push(reportobject)
            // http.post({method: 'PUT', url: '/data_api/posts', data: reportobject}, null)
            }
          }
        })

        res.json({ total: total, complete: complete, incomplete: incomplete, data: apps })
      })

      //  filelist.forEach(function(appnum, listdex, filelist){

    //                             // $patentsearch(pphd, config, parsedfiles).then(function(patentobj){
    //                             //     pphd.patent = patentobj
    //                             //     console.log(pphd)
    //                             //    // $roarmap(parsedfiles, pphd, config)
    //                             // })
    //  })
    }
    function bytes (bytes) {
      bytes = parseInt(bytes)
      if (bytes >= 1000000000) { bytes = (bytes / 1000000000).toFixed(2) + ' GB'; }
      else if (bytes >= 1000000) { bytes = (bytes / 1000000).toFixed(2) + ' MB'; }
      else if (bytes >= 1000) { bytes = (bytes / 1000).toFixed(2) + ' KB'; }
      else if (bytes > 1) { bytes = bytes + ' bytes'; }
      else if (bytes == 1) { bytes = bytes + ' byte'; } else { bytes = '0 byte'; }
      return bytes
    }
    processer(_p, res)
  })
  app.get('/files/tree', function (req, res) {
    var _p
    if (req.query.id == 1) {
      _p = path.resolve(process.cwd(), 'files', req.user._id.toString())
      if (!fs.existsSync(_p)) {
        fs.mkdirSync(_p, 1)
      }
      processReq(_p, res)
    } else {
      if (req.query.id) {
        _p = req.query.id
        processReq(_p, res)
      } else {
        res.json(['No valid data found'])
      }
    }
  })
  app.get('/files/publictree', function (req, res) {
    var _p
    if (req.query.id == 1) {
      _p = path.resolve(process.cwd(), 'files/public/uspto/')
      if (!fs.existsSync(_p)) {
        fs.mkdirSync(_p, 1)
      }
      processReq(_p, res)
    } else {
      if (req.query.id) {
        _p = req.query.id
        processReq(_p, res)
      } else {
        res.json(['No valid data found'])
      }
    }
  })
  /* Serve a Resource */
  app.get('/files/resource', function (req, res) {
    res.send(fs.readFileSync(req.query.resource, 'UTF-8'))
  // res.sendFile(req.query.resource)
  })

  function processReq (_p, res) {
    var resp = []
    fs.readdir(_p, function (err, list) {
      for (var i = list.length - 1; i >= 0; i--) {
        resp.push(processNode(_p, list[i]))
      }
      res.json(resp)
    })
  }

  function processNode (_p, f) {
    var s = fs.statSync(path.join(_p, f))
    // console.log(s)
    return {
      'id': path.join(_p, f),
      'name': f,
      'text': f,
      'icon': s.isDirectory() ? 'jstree-custom-folder' : 'jstree-custom-file',
      'state': {
        'opened': false,
        'disabled': false,
        'selected': false
      },
      'li_attr': {
        'base': path.join(_p, f),
        'isLeaf': !s.isDirectory()
      },
      'children': s.isDirectory()
    }
  }

  app.get('/dev/archive', function (req, res, next) {
    var CREDENTIAL = process.env.FIREBASE_SECRET
    var source = 'https://lexlab.firebaseio.com//.json?print=pretty&auth=' + CREDENTIAL
    var date = new Date()
    var now = date.getTime()
    var https = require('https')

    var callback = function (response) {
      var str = ' '
      // var a = fs.createWriteStream('~/dev/files/uploads')
      // another chunk of data has been recieved, so append it to `str`
      response.on('data', function (chunk) {
        str += chunk
      })

      // the whole response has been recieved, so we just print it out here
      response.on('end', function () {
        // fs.appendFile(storedir, str, messagedone)
        // res.send(str)
        // fs.writeFile(storedir, str, messagedone)
        // fs.createWriteStream(storedir,str)

        fs.writeFile(
          path.join(process.cwd(), 'files', 'archive') + '/' + now + '.json',
          str,
          function (err) {
            if (err) {
              return next(err)
            }
            res.status(204).redirect('/admin')
          }
        )
      })
    }
    https.get(source, callback)
  })
  // var patentscraper = require('./public/ptoservices/patentscraper')
  // app.use('', patentscraper)
  var patentindexController = require('./controllers/patentindex')
  app.get('/patents', patentindexController.getPagesServedByAngular)
  app.get('/patents/index', function (req, res, next) {
    var _p
    _p = path.resolve(process.cwd(), 'files/public/uspto/patents')
    if (!fs.existsSync(_p)) {
      fs.mkdirSync(_p, 1)
    }
    processReq(_p, res)
  })
  var pindex = require('./controllers/patentindex')
  app.get('/patents/:id', pindex.getPagesServedByAngular)
  // app.get('/patents/US:id', function(req,res,next){
  //     // var data = fs.readFileSync(path.join(process.cwd(),'files','public','uspto','patents',req.params.id+'-claims.json'), 'UTF-8')
  //     // res.render('views/test',{patent: req.params.id, data: data})
  //     res.redirect('/lexlab-starter/public/claimtree/?'+req.params.id)
  // })

  app.delete('/patents/:id/preview', function (req, res, next) {
    var fs = require('fs')
    var path = require('path')
    var _p = path.resolve(process.cwd(), 'files', 'public', 'uspto', 'patents', req.params.id, req.params.id + '.png')
    if (!fs.existsSync(_p)) {
      res.status(200).end()
    } else {
      fs.unlink(_p, function () {
        res.status(200).end()
      })
    }
  })
  app.get('/patents/:id/preview', function (req, res, next) {
    var webshot = require('webshot')
    var fs = require('fs')
    var child_process = require('child_process')
    // var kill = require('tree-kill')
    // webshot('https://www.google.com/fonts/specimen/Open+Sans', './webfonts.png', function (err) {
    //     if (err) return console.log(err)
    //     console.log('OK')
    // })
    var x = req.query.x
    var y = req.query.y
    // console.log(req)
    // console.log(req.headers['user-agent'])
    var _p = path.resolve(process.cwd(), 'files', 'public', 'uspto', 'patents', req.params.id, req.params.id + '.png')
    if (!fs.existsSync(_p)) {
      var options = {
        windowSize: {
          width: 1200,
          height: 800
        },
        renderDelay: 1500,
        takeShotOnCallback: true,
        userAgent: req.headers['user-agent']
      }

      var renderStream = webshot('/lexlab-starter/public/claimtree/?' + req.params.id, _p, options, function (err) {
        if (err) { } else {
          res.sendFile(_p)
        //   kill(renderStream, 'SIGKILL',function(err){
        //       console.log(err)
        //   })
        }
      })
    } else {
      res.sendFile(_p)
    }
  })

  app.get('/getphd/patents/:id', ptoController.getPatentData)

  app.post('/getphd/store/:id', function (req, res, next) {
    fs.writeFile(
      path.join(process.cwd(), 'files', 'public', 'uspto', req.params.id) + '/index.json',
      JSON.stringify(req.body, undefined, 2),
      function (err) {
        if (err) {
          return next(err)
        }
        res.status(204).end()
      }
    )
  })
  app.get('/timeline/:id', function (req, res, next) {
    var data = path.join(process.cwd(), 'files', 'public', 'timelines', req.params.id + '.json')
    res.sendFile(data)
  })
  app.post('/timeline/:id', function (req, res, next) {
    fs.writeFile(
      path.join(process.cwd(), 'files', 'public', 'timelines', req.params.id) + '.json',
      JSON.stringify(req.body, undefined, 2),
      function (err) {
        if (err) {
          return next(err)
        }
        res.status(204).end()
      }
    )
  })
  var options = {
    host: '/',
    secure: true,
    path: '/peerjs',
    debug: 3
  }

  var ExpressPeerServer = require('peer').ExpressPeerServer
  var server = require('http').createServer(app)

  app.use(vhost('patents.lexspace.net', serveStatic(path.join(process.cwd(), 'files', 'public', 'uspto', 'patents'))))
  app.use('/peerjs', ExpressPeerServer(server, options))
  /**
   * Error Handler.
   */
  app.use(errorHandler())
  app.set('json spaces', 2)
  app.set('trust proxy', true)
  /**
   * Start Express server.
   */
  app.listen(app.get('port'), function () {
    console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'))
  })
})

module.exports = app
