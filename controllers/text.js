var q = require('q');
var Firebase = require('firebase-admin');
var FIREBASE_URL = process.env.FIREBASE_URL;
var path = require('path');
//var regexformulae = require('./regexformulae');

var parseremarks = require('./text/rem.js');
var parserejections = require('./text/rejections.js');


var parseclaims = require('./text/clm.js');
var parseallowances = require('./text/noa.js');

var parseapp = require('./text/p.js');
module.exports = {
    parseallowances: parseallowances,
    parseclaims: parseclaims,
    parseremarks: parseremarks,
    parserejections: parserejections,
    parseapp: parseapp
};
