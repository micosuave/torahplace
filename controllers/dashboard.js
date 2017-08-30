exports.getPagesServedByAngular = function(req, res){
    if (req.user !== null) {

        res.render('views/dashboard', {
            title: 'Entry to EnterprisePhD - powered by AngularJS',
            application: 'dashboard',
            user: req.user,
            $location: req
        });
    } else {
        res.redirect('/login');
    }
};
