var secrets = require('../config/secrets');
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: 'MailGun',
  auth: {
    user: secrets.mailgun.user,
    pass: secrets.mailgun.password
  }
});

/**
 * GET /contact
 * Contact form page.
 */
exports.getContact = function(req, res) {
  res.render('views/contact', {
      title: 'Contact',
    $location: req
  });
};

/**
 * POST /contact
 * Send a contact form via Nodemailer.
 */
exports.postContact = function(req, res) {
  req.assert('name', 'Name cannot be blank').notEmpty();
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('message', 'Message cannot be blank').notEmpty();

  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/contact');
  }

  var from = req.body.email;
  var name = req.body.name;
  var body = req.body.message;
  var to = 'michaelmcosta@me.com';
  var cc = 'arie.michelsohn@gmail.com';
  var subject = 'Contact Form | LexLab';

  var mailOptions = {
    to: to,
    from: from,
    subject: subject,
    text: body
  };

  transporter.sendMail(mailOptions, function(err) {
    if (err) {
      req.flash('errors', { msg: err.message });
      return res.redirect('/contact');
    }else{
    req.flash('success', { msg: 'Email has been sent successfully!' });
    res.redirect('/');
    }
  });
};
