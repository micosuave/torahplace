var path = require('path');
var fs = require('fs');

exports.getPagesServedByAngular = function(req, res){
    var storeDir = path.join(process.cwd(), 'files', req.user._id.toString());
    if (!fs.existsSync(storeDir)){
        fs.mkdir(storeDir);
    }
    
    res.render('views/messages/index',{
        title: 'Entry to EnterprisePhD - powered by AngularJS',
        application: 'fileBrowserApp',
        user: req.user, 
        $location: req
    });
    
var firebase = require('firebase');
var slack = require('slack');



var messages = function(req, res, next){
    var user = req.user;

    res.json({messages:[{sender:'michael@mylionlaw.com', body:'hello'},{sender:'arie@mylionlaw', body:'hello'},{sender: 'shadow@mylionlaw.com', body:'woof!'}]});  
    
};

};