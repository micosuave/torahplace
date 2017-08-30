var path = require('path');
var fs = require('fs');

exports.getPagesServedByAngular = function(req, res){
    var storeDir = path.join(process.cwd(), 'files', req.user._id.toString());
    if (!fs.existsSync(storeDir)){
        fs.mkdir(storeDir);
    }
    if (req.user !== null) {
        res.render('views/labs/index', {
            title: 'Entry to EnterprisePhD - powered by AngularJS',
            application: 'fileBrowserApp',
            user: req.user,
            $location: req
        });
    } else {
        res.redirect('/login');
    }
};
