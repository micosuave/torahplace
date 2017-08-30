var express = require("express");
//var multer = require("multer");
var path = require('path');
var app = express();
var fs = require('fs');

var jsonresp = []; 
 

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
                res.writeHead(200, { "Content-Type": "text/event-stream" });
                watcher(req, res,    jsonresp);
             // res.jsonp({body:    jsonresp });
                
        });
        

});
module.exports = app;
