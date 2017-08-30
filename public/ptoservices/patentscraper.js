var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();

app.get('/:id', function(req, res, next) {
    var url = 'https://www.google.com/patents/US' + req.params.id;
    var request = require('request');
    var cheerio = require('cheerio');
    request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
            var abstract, thumbnails, claims, drawings, text;
            var json = { abstract: "", thumbnails: [], claims: [], drawings: [] };
            $('.abstract').filter(function() {
                var data = $(this);
                abstract = data.text();
                json.abstract = abstract;
            });
            var alt;
            
            $(".drawings").filter(function() {
                var data = $(this);
                drawings = data.children(".patent-image").children(".patent-thumbnail").children("a");
                for (var key in drawings) {
                    if (drawings.hasOwnProperty(key)) {
                        var element = drawings[key];
                        if ($(element).attr('href')) {
                            json.drawings.push($(element).attr('href'));
                        }
                    }
                }
                thumbnails = $(".patent-thumbnail-image");
                for (var ky in thumbnails) {
                    if (thumbnails.hasOwnProperty(ky)) {
                        var lement = thumbnails[ky];
                        if ($(lement).attr('src')) {
                            json.thumbnails.push($(lement).attr('src'));
                        }
                    }
                }
                //json.drawings.push(thumbnails.length);
            });

            var Claim = function(element) {
                var claim = this;
                var dependency, dependents, antecessor, descendent, classy, terms;
                var localid = $(element).attr('id') || $(element).children('.claim-dependent').attr('id');
                var publicid = req.params.id + localid.slice(localid.indexOf('-'), 1);
                var text = $(element).children('.claim-text').text();
                var html = $(element).html();
                if ($(element).attr('class') === 'claim') { classy = 'independent'; dependency = ''; }
                else {
                    classy = "dependent";
                    var idref = $(element).children('.claim').children('.claim-text').children('claim-ref').attr('idref');
                    dependency = req.params.id + idref.slice(idref.indexOf('-'), 1);
                }


                return claim = {
                    name: localid,
                    id: publicid,
                    text: text,
                    html: html,
                    class: classy,
                    dependency: dependency

                };

            };
            $(".claims").filter(function() {
                var data = $(this);
                //claims = data.children(".claim").children(".claim").children(".claim-text");
                claims = data.children();
                var temparray = [];
                var altarray = [];
                for (var key in claims) {
                    if (claims.hasOwnProperty(key)) {
                        var element = claims[key];
                        var id = $(element).children('.claim').attr('id');
                        var el = $(element).attr('id', id);                       
                        if ($(element).attr('class') === 'claim') {

                            // tree[id] = element;
                            var obj = new Object({ name: id, id: id, class: 'independent', text: $(element).html(), children: [] });
                            var altobj = new Object({ name: id, id: id, class: 'sub-independent', text: $(element).html(), children: [{ name: id, id: id, class: 'independent', text: $(element).html() }] });
                            temparray.push(obj);
                            altarray.push(altobj);
                        } else if ($(element).attr('class') === 'claim-dependent') {
                            var idref = $(element).children('.claim').children('.claim-text').children('claim-ref').attr('idref');

                            var obbj = { name: id, id: id, class: 'dependent', text: $(element).html(), parent: idref, children: [] };
                               var parent = temparray[temparray.length - 1];
                               parent.children.push(obbj);
                               var altparent = altarray[altarray.length - 1];
                               altparent.children.push(obbj);
                           
                        }
                    }
                }
                

                json.claims = temparray;
                alt = altarray;
            });
            var application = $('[data-label="Application"].appbar-application-grant-link').attr('href');
            var num = application.slice(application.indexOf('US'), application.length);
            json.pub = num;
            json.text = $('.patent-description-section').html();

            //json.totalclaims = $(".claims").children().length;


            var claimroot = { name: 'issued', class: 'super-independent', children: alt };
            //var claimroot = json.claims;
            fs.writeFile(path.join(process.cwd(), 'files', 'public', 'uspto', 'patents', req.params.id + '.json'), JSON.stringify(json, null, 4), function(err) {
                console.log('json written');
            });
            fs.writeFile(path.join(process.cwd(), 'files', 'public', 'uspto', 'patents', req.params.id + '-claims.json'), JSON.stringify(claimroot, null, 4), function(err) {
                console.log('claims written');
            });
            res.send(json).end();
        }
    });
});
module.exports = app;