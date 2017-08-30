var bcrypt = require('bcrypt-nodejs')
var crypto = require('crypto')
var mongoose = require('mongoose')

var roareventSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  ocrlink: { type: String,default: ''},
  selflink: { type: String, default: '' },
  media: { type: String, default: '' },
  description: { type: String, default: '' },
  filename: { type: String, default: '' },
  collections: { type: String, default: '' },
  Application: { type: String, default: '' },
  date: { type: String, default: '' },
  rid: { type: String, default: '' },
  patentid: { type: String, default: '' },
  doccode: { type: String,default: ''},
  profile: {
    name: { type: String, default: '' },
    gender: { type: String, default: '' },
    location: { type: String, default: '' },
    website: { type: String, default: '' },
    picture: { type: String, default: '' }
  },

  resetPasswordToken: String,
  resetPasswordExpires: Date
})

/**
 * Password hash middleware.
 */
roareventSchema.pre('save', function (next) {
  var user = this
  if (!user.isModified('password')) {
    return next()
  }
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err)
    }
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err)
      }
      user.password = hash
      next()
    })
  })
})

/**
 * Helper method for validating user's password.
 */
roareventSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return cb(err)
    }
    cb(null, isMatch)
  })
}

/**
 * Helper method for getting user's gravatar.
 */
roareventSchema.methods.gravatar = function (size) {
  if (!size) {
    size = 200
  }
  if (!this.email) {
    return 'https://gravatar.com/avatar/?s=' + size + '&d=retro'
  }
  var md5 = crypto.createHash('md5').update(this.email).digest('hex')
  return 'https://gravatar.com/avatar/' + md5 + '?s=' + size + '&d=retro'
}

module.exports = mongoose.model('User', roareventSchema)
