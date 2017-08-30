var path = require('path');
var fs = require('fs');

exports.getPagesServedByAngular = function(req, res){

    if (req.user !== null) {
       
        res.render('views/labs/charts', {
            title: 'Test Reporting',
            application: 'd3app',
            user: req.user,
            $location: req,
            controller: 'ReportController as app'
        });
    } else {
        res.redirect('/login');
    }



};