exports.getPagesServedByAngular = function(req, res){
    if (req.user) {
        res.render('views/admin/index', {
            title: 'Entry to EnterprisePhD - powered by AngularJS',
            application: 'admin',
            user: req.user, 
            $location: req
        });
    } else {
        res.redirect('/login');
    }
};
