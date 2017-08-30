var q = require('q');
var path = require('path');
var fs = require('fs');


exports.getPagesServedByAngular = function (req, res) {
  var FIREBASE_URL = process.env.FIREBASE_URL;
  var FIREBASE_SECRET = process.env.FIREBASE_SECRET;
  var firebase = require('firebase-admin');
  var serviceAccount = require('../config/firebase-lexlab-firebase-adminsdk-j7h05-3695f670cc.json');
//   var FirebaseTokenGenerator = require('firebase-token-generator');
//   var tokenGenerator = new FirebaseTokenGenerator(FIREBASE_SECRET);
//  var sec = firebase.initializeApp({
//       serviceAccount: path.resolve(process.cwd(), 'lexlab-starter', 'config', 'lexlab-f48555d15bec.json'),
//       databaseURL: "https://lexlab.firebaseio.com"
//   });
  if (req.user) {


      var d = new Date();
      var now = d.getTime();
      var expires = now + (60 * 60 * 12);
      var uid = req.user._id.toString();
      var additionalClaims = {
        premiumAccount: true
    };
 /*if(process.env.SERVERNAME=='wiley'){


  var a = firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://lexlab.firebaseio.com'
  },'b')
}
else{
  var configb = {
   credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://dazzling-fire-2433.firebaseio.com"
  };
  var a = firebase.initializeApp(configb,'h');
}*/

    //var token = a.app().auth().createCustomToken(uid, { profile: req.user.profile, email: req.user.email, expires: expires });
    //var token = tokenGenerator.createToken({ uid: req.user._id.toString(), profile: req.user.profile, email: req.user.email, expires: expires  })

    res.render('views/enterprise', {
      title: 'LexLab™',
      application: 'mini',
      controller: 'AppCtrl as appCtrl',
      //token: token,
      user: req.user,
      firebase_url: FIREBASE_URL,
      $location: req,
      fontSize: '14px'
    });
  } else {
    res.redirect('/login');
  }
};
/*exports.phdparser = function (appnum) {
  var deferred = q.defer()
  var Baby = require('babyparse')

  var attorney = path.join(process.cwd(), 'files', 'public', 'uspto', appnum , appnum + '-address_and_attorney_agent.tsv')
  var application = path.join(process.cwd(), 'files', 'public', 'uspto', appnum , appnum + '-application_data.tsv')
  var continuity = path.join(process.cwd(), 'files', 'public', 'uspto', appnum , appnum + '-continuity_data.tsv')
  var foreign = path.join(process.cwd(), 'files', 'public', 'uspto', appnum , appnum + '-foreign_priority.tsv')
  var transaction = path.join(process.cwd(), 'files', 'public', 'uspto', appnum , appnum + '-transaction_history.tsv')
  var term = path.join(process.cwd(), 'files', 'public', 'uspto', appnum , appnum + '-patent_term_adjustments.tsv')
  var imagefile = path.join(process.cwd(), 'files', 'public', 'uspto', appnum , appnum + '-image_file_wrapper', appnum + '-image_file_wrapper.tsv')
  var readme = path.join(process.cwd(), 'files', 'public', 'uspto', appnum , 'README.txt')
  var opts = {
    header: true,
    skipEmptyLines: true
  }
  var targets = [{
    label: 'README',
    file: readme,
    config: {skipEmptyLines: true}
  }, {
    label: 'attorney',
    file: attorney,
    config: {skipEmptyLines: true}
  }, {
    label: 'application',
    file: application,
    config: {skipEmptyLines: true}
  }, {
    label: 'continuity',
    file: continuity,
    config: {skipEmptyLines: true}
  }, {
    label: 'foreign',
    file: foreign,
    config: opts
  }, {
    label: 'term',
    file: term,
    config: {skipEmptyLines: true}
  }, {
    label: 'transaction',
    file: transaction,
    config: opts
  }, {
    label: 'imagefile',
    file: imagefile,
    config: opts
  }]
  var phd = {};
  phd.file = [];
  // var parsed = Baby.parseFiles(targets)
  targets.forEach(function (value, index, targets) {
    if (!fs.existsSync(value.file)) {
    } else {
      file = fs.readFileSync(value.file, 'utf8')
      // console.log(file)
      var p = Baby.parse(file, value.config)
      phd.file.push({label: value.label,file: file})

      if (value.label == 'application') {
        var newobj = {}
        var fip = p.data;
        fip.forEach(function (innerarray, key) {
          if (innerarray[0] == 'Class / Subclass') {
            newobj['Class Subclass'] = innerarray[1]
          } else {
            newobj[innerarray[0]] = innerarray[1]
          }

          phd.application = newobj;
        })
      } else {
        phd[value.label] = p.data;
      }

      deferred.resolve(phd)
    }
  });

  return deferred.promise;
};*/
exports.phdparser = function (appnum) {
    var path = require('path');
    var Baby = require('babyparse');
    // var Papa = require('papaparse.js');
    var fs = require('fs');
    var attorney = path.join(process.cwd(), 'files', 'public', 'uspto', appnum, appnum + '-address_and_attorney_agent.tsv');
    var application = path.join(process.cwd(), 'files', 'public', 'uspto', appnum, appnum + '-application_data.tsv');
    var continuity = path.join(process.cwd(), 'files', 'public', 'uspto', appnum, appnum + '-continuity_data.tsv');
    var foreign = path.join(process.cwd(), 'files', 'public', 'uspto', appnum, appnum + '-foreign_priority.tsv');
    var transaction = path.join(process.cwd(), 'files', 'public', 'uspto', appnum, appnum + '-transaction_history.tsv');
    var term = path.join(process.cwd(), 'files', 'public', 'uspto', appnum, appnum + '-patent_term_adjustments.tsv');
    var imagefile = path.join(process.cwd(), 'files', 'public', 'uspto', appnum, appnum + '-image_file_wrapper', appnum + '-image_file_wrapper.tsv');
    var readme = path.join(process.cwd(), 'files', 'public', 'uspto', appnum, 'README.txt');
    var opts = {
        header: true,
        skipEmptyLines: true
    };
    var targets = [{
        label: 'README',
        file: readme,
        config: { skipEmptyLines: true }
    }, {
            label: 'attorney',
            file: attorney,
            config: { skipEmptyLines: true }
        }, {
            label: 'application',
            file: application,
            config: { skipEmptyLines: true }
        }, {
            label: 'continuity',
            file: continuity,
            config: { skipEmptyLines: true }
        }, {
            label: 'foreign',
            file: foreign,
            config: opts
        }, {
            label: 'term',
            file: term,
            config: { skipEmptyLines: true }
        }, {
            label: 'transaction',
            file: transaction,
            config: opts
        }, {
            label: 'imagefile',
            file: imagefile,
            config: opts
        }];
    var phd = {};
    phd.file = [];
    // var parsed = Baby.parseFiles(targets);
    targets.forEach(function (value, index, targets) {
        if (!fs.existsSync(value.file)) {

        } else {
            file = fs.readFileSync(value.file, 'utf8');
            // console.log(file);
            var p = Baby.parse(file, value.config);
            phd.file.push({ label: value.label, file: file });
            phd[value.label] = p.data;
        }
    });
    /*
    phd.readme = parsed[0].data;
    phd.attorney = parsed[1].data;
    phd.application = parsed[2].data;
    phd.continuity = parsed[3].data;
    phd.foreign = parsed[4].data;
    phd.term = parsed[5].data;
    phd.transaction = parsed[6].data;
    phd.imagefile = parsed[7].data;*/
    return phd;

};
