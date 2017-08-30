module.exports = function (phdobj, config, parsedfiles) {
            var q = require('q');
            var deferred = q.defer();
            var $roarmap = require('./roarmap');
            var http = require('https');
            var path = require('path');
            var fs = require('fs');
            var downloadCtrl = require('./download');

            if (config.PNUM && config.PNUM > 0) {
                gete();

            }
            else if (config.IPANUM) {
                searchforpatent(phdobj, config.IPAYEAR + config.IPANUM);
            }


            return deferred.promise;
            function gete (){
                searchforpatent(phdobj, config.PNUM).then(function(patent){
                    try{
                        searchforpatent(phdobj, config.IPAYEAR + config.IPANUM).then(function(pubapp){
                         deferred.resolve({patent: patent, pubapp: pubapp});

                    });
                    } catch (ex) {
                        patent.pubapp = patent;
                        patent.pub = patent.id;
                        deferred.resolve({patent:patent, pubapp: patent})}
                        // deferred.resolve({ patent: patent });
//}

                });

            }
            function searchforpatent(phdobj, pnum) {
        var deferred = q.defer();
                var patentnumber = pnum || phdobj.application['Patent Number'].replace(',', '').replace(',', '');
                //var applicationnumber = phdobj['Appliction Number'];
                var pdfstorageuri = 'https://patentimages.storage.googleapis.com/pdfs/US' + patentnumber + '.pdf';
                var pdflocal = path.join(process.cwd(), 'files', 'public', 'uspto', 'patents', patentnumber, patentnumber + '.pdf');
                if(!fs.existsSync(pdflocal)){
                    downloadCtrl.download(pdfstorageuri, pdflocal,undefined,patentnumber ).then(function(){
                        console.log('patent downloaded');
                    });
                }

                var callback = function(response) {
        var str = '';


       response.on('data', function(chunk){
           str += chunk;

       });

        //the whole response has been recieved, so we just print it out here
        response.on('end', function() {

            // var patent = JSON.parse(str);
                            var patent = str;
                            patent.number = patentnumber;
                            //patent.media = Blob.url;
                            patent.media = '/files/public/uspto/patents/'+patentnumber+'/'+patentnumber+'.pdf';
                            patent.filename = 'US' + patentnumber + '.pdf';
                            //patent.title = phdobj['Title of Invention'] || null;

                            patent.google = 'https://www.google.com/patents/US' + patentnumber;
                            patent.rid = 'P1';
                            patent.doccode = 'P';
                            //if (phdobj['Issue Date of Patent'] !== '-') { patent.date = phdobj['Issue Date of Patent']; } else { patent.date = '1899-12-31'; }
                            patent.styleClass = 'NOA';
                            patent.name = 'US' + patentnumber;
                            //patent.description = phdobj['Title of Invention'];
                            var maildate = new Date(patent.issued);
                            var roardate = maildate.toDateString();
                            var noatemplate = '<div class="container-fluid two-col-left">' +
                                '<div class="row two-col-left">' +
                                '<div class="col-xs-4 col-sidebar"><a pop="true" src="/patents/US' + patent.number + '/preview"><img src="/patents/US' + patent.number + '/preview" class="img img-responsive img-shadow"/></a></div>' +
                                '<div class="col-xs-8 col-main"><div class="bs-callout bs-callout-NOA bs-callout-reverse"><h4>' + patent.title + '</h4><p>Filed ' + roardate + '</p><p>' + patent.abstract + '</p><cite>' + patent.filename + '&nbsp;&nbsp;<a pop="true" href="' + patent.media + '" target="fframe"><i class="fa fa-external-link"></i></a></cite></div></div>' +
                                '</div>' +
                                '</div>';
                            var ddd = new Date();
                            var n = ddd.getTime();
                            patent.rows = [
                                {
                                    columns: [{ cid: n + 9, styleClass: 'col-sm-6', widgets: [{ config: { height: '90vh', url: patent.media || 'http://www.google.com' }, styleClass: patent.styleClass || 'btn-dark', title: 'LexFrame', type: 'iframe', wid: n + 100 }] },
                                        { cid: n + 10, styleClass: 'col-sm-6', widgets: [
                                            { config: { id: patent.number, height: '90vh' }, styleClass: patent.styleClass || 'btn-dark', title: 'LexPad', type: 'ckwidget', wid: n + 1010 },
                                            { config: { id: patent.number, height: '90vh' }, styleClass: patent.styleClass || 'btn-dark', title: 'Metadata', type: 'metadata', wid: n + 101 },
                                            { config: { id: patent.number, height: '90vh' }, styleClass: patent.styleClass || 'btn-dark', title: 'Text', type: 'text', wid: n + 105 }] }

                                    ]
                                }
                            ]
                            var wraphead = require('./ckeditor_tpl').ckstarter;

                            var wraptail = require('./ckeditor_tpl').ckender;
                            patent.text = patent.claim;
                            var contenttemplate = '<p class="card-text">' + patent.text + '</p>';

                            patent.content = wraphead + noatemplate + contenttemplate + wraptail + '<patentreport patent="' + patent.number + '"></patentreport></body></html>';
                            //var a = $rootScope.$new();
                            //a.patent = patent;
                            //phdobj.content = wraphead + $(angular.element($compile($templateCache.get('{widgetsPath}/getphd/src/phd/patentReport.html'))(a))).html();
                            return  deferred.resolve(patent);


        });
    };
                        if(process.env.SERVERNAME == 'wiley'){
                          http.get('https://wileyrein.lexlab.io/getphd/patents/' + patentnumber, callback);
                        }else{
                        http.get('https://lexlab.io/getphd/patents/' + patentnumber,callback);
                        }
                    //});
                return deferred.promise;
            }
        };
