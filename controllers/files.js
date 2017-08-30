var path = require('path')
var fs = require('fs')
var express = require('express')
var serveStatic = require('serve-static')
exports.getPagesServedByAngular = function (req, res, next) {
  var file = req.path

  if (req.user === undefined) {
    //res.redirect('/login')
    next()
  }else {
    var storeDir = path.join(process.cwd(), 'files', req.user._id.toString())
    if (!fs.existsSync(storeDir)) {
      fs.mkdir(storeDir)
    }
    // res.redirect('/'+file)
    // express.static(path.join(process.cwd(),file))
    // serveStatic(path.join(process.cwd()))
    // res.sendFile(path.join(process.cwd(),'files',req.path))
    next()
  }
}
