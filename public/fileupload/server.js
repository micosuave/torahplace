var express = require("express");
var multer = require("multer");
var path = require('path');
var app = express();
var fs = require('fs');
var upload = multer({
        dest: path.join(process.cwd(),'files','uploads')
});
var watcher = require('./watcher');
var jsonresp = []; 
app.use(multer({
        dest: path.join(process.cwd(),'files','uploads'),
        rename: function(fieldname, filename) {
                return filename;
        },
        onFileUploadStart: function(file) {
                console.log(file.originalname + ' is starting');
        },
        onFileUploadComplete: function(file) {
                console.log(file.originalname + ' uploaded to ' + file.path);
                jsonresp.push(file.path);
                 
        }
}));


app.get('/', function(req, res) {
        res.sendFile(__dirname + '/index.html');
     
});
app.options('/', function (req, res) {
        upload(req, res, function (err) {

                if (err) {
                        return res.end("Error uploading file.");
                }
                res.jsonp({ body: jsonresp });

        });
});
app.post('/', function(req, res) {

        upload(req, res, function(err) {
                
                if (err) {
                        return res.end("Error uploading file.");
                }
                res.status(200).json(jsonresp);
                watcher(req, res,    jsonresp);
             // res.jsonp({body:    jsonresp });
                
        });
        

});
module.exports = app;
