/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
    var location = req.url;
    if (req.user !== null) {
        res.render('views/home', {
            title: 'Welcome',
            user: req.user,
            $location: req,
            application: 'HomePageApp',
            controller: 'HomePageCtrl as home'
        });
    } else {
        res.render('views/home', {
            title: 'Welcome',
            $location: req,
            application: 'HomePageApp',
            controller: 'HomePageCtrl as home'
        });
    }

};
exports.video = function(req, res){
    var location = req.url;
    res.render('views/introvideo', {
        title: 'Welcome',
        $location: req, 
        application: 'HomePageApp',
        controller: 'HomePageCtrl as home'
    });
};