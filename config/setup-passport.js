var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var strategy = new Auth0Strategy({
    domain:       'lexlab.auth0.com',
    clientID:     'cUlDdJf95PlGqge70bd2MfrLQlBb8Aws',
    clientSecret: 'QA11_aaC1FkLpjW1DFXftrd9F05CzFuTgU84gdDTXfeZ_Y1DpY5IG7X9BRXwXTx_',
    callbackURL:  '/'
  }, function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  });

passport.use(strategy);

// This is not a best practice, but we want to keep things simple for now
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = strategy;
