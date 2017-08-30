var request = require('request');
  var cheerio = require('cheerio');
  var fs = require('fs');
  var path = require('path');
  var downloadCtrl = require('./download');
  var shell = require('shelljs');

    
    var getPatentData = function (req, res, next) {
  
  var url = 'https://www.google.com/patents/US' + req.params.id;

  var pdfstorageuri = 'https://patentimages.storage.googleapis.com/pdfs/US' + req.params.id + '.pdf';
  var pdflocal = path.join(process.cwd(), 'files', 'public', 'uspto', 'patents', req.params.id);
  shell.exec('mkdir ' + pdflocal);
  
  shell.exec('touch ' + path.join(pdflocal, req.params.id+ '.pdf'));
  console.log(pdflocal);
  //if (!fs.existsSync(path.join(pdflocal, req.params.id+ '.pdf'))) {
    downloadCtrl.download(pdfstorageuri, pdflocal+'/'+req.params.id, undefined, req.params.id).then(function () {
      console.log('patent downloaded');
request(url, reqcallback);   
 });
  /*} else{
      console.log('file located');
      request(url, reqcallback);
  }*/


  var reqcallback = function (error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);

      /** 
       * meta tags
       */
      var idd = function (input) {
        if (input) {
          // var p = input.slice(0, input.indexOf('.'))
          var p = input.match(/\d+/);
          if (p !== null) {
            return p[0];
          }
        } else {
          return '-';
        }
      };
      var parentt = function (input) {
        if (input) {
          var dependencytest = new RegExp(/\s((of)|(to)|(in))\sc[li]aim\s(\d+)/ig);
          var idref = input.match(dependencytest);
          var idr;
          if (idref !== null) {
             idr = idref[0].match(/\d+/);
            return idr[0] || null;
          }
        } else {
          return null;
        }
      };
      var type, title, inventor, assignee, dateSubmitted, description, issued, references, citation_patent_number, citation_patent_application_number;

      var json = {id: req.params.id, abstract: '', thumbnails: [], claims: [], drawings: [], references: []};

      type = $('meta[name="DC.type"]').attr('content');
      json.type = type;
      title = $('meta[name="DC.title"]').attr('content');
      json.title = title;
      inventor = $('meta[scheme="inventor"]').attr('content');
      json.inventor = inventor;
      assignee = $('meta[scheme="assignee"]').attr('content');
      json.assignee = assignee;
      dateSubmitted = $('meta[scheme="dateSubmitted"]').attr('content');
      var c = new Date(dateSubmitted);
      var cc = c.getFullYear() + '-' + c.getMonth() + '-' + c.getDate();

      json.dateSubmitted = cc;
      description = $('meta[name="DC.description"]').attr('content');
      json.description = description;
      issued = $('meta[scheme="issued"]').attr('content');
      var d = new Date(issued);
      var dd = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
      json.issued = dd;
      json.date = dd;
      references = $('meta[scheme="references"]').toArray();
      for (var key in references) {
        if (references.hasOwnProperty(key)) {
          var element = references[key];
          json.references.push($(element).attr('content').replace(':', ''));
        }
      }
      citation_patent_number = $('meta[name="citation_patent_number"]').attr('content');
      json.patent_number = citation_patent_number;
      citation_patent_application_number = $('meta[name="citation_patent_application_number"]').attr('content');
      json.application_number = citation_patent_application_number;
      $('.abstract').filter(function () {
        var data = $(this);
        abstract = data.text();
        json.abstract = abstract;
      });

      $('.drawings').filter(function () {
        var data = $(this);
        drawings = data.children('.patent-image').children('.patent-thumbnail').children('a');
        for (var key in drawings) {
          if (drawings.hasOwnProperty(key)) {
            var element = drawings[key];
            if ($(element).attr('href')) {
              json.drawings.push($(element).attr('href'));
            }
          }
        }
        thumbnails = $('.patent-thumbnail-image');
        for (var ky in thumbnails) {
          if (thumbnails.hasOwnProperty(ky)) {
            var lement = thumbnails[ky];
            if ($(lement).attr('src')) {
              json.thumbnails.push($(lement).attr('src'));
            }
          }
        }
      });
      $('.patent-claims-section').filter(function () {
        var data = $(this);
        var num = data.children('.patent-section-header').children('.patent-section-title').children('.patent-section-count').text();
        json.claim_total = num.slice(num.indexOf('(') + 1, num.indexOf(')'));
      });
      $('.claims').filter(function () {
        var data = $(this);
        claims = data.children();
        var temparray = [];
        var altarray = [];
        var flatarray = [];
        for (var key in claims) {
          if (claims.hasOwnProperty(key)) {
            var element = claims[key];
            var text = $(element).text();
            var id = idd(text);
            var el = $(element).attr('id', id);
            var dependencytest = new RegExp(/\s((of)|(to)|(in))\sc[li]aim\s\d+/ig);
            flatarray[id - 1]={ name: id, id: id, class: $(element).attr('class'), text: $(element).text(), children: [] };
            
            if ($(element).attr('class') === 'claim') {
              var obj = { name: id, id: id, class: 'independent', text: $(element).text(), children: [] };
              var altobj = { name: id, id: id, class: 'sub-independent', text: $(element).text(), children: [{ name: id, id: id, class: 'independent', text: $(element).html() }] };
              temparray.push(obj);
              altarray.push(altobj);
            flatarray[id - 1]={ name: id, id: id, class: $(element).attr('class'), text: $(element).text(), children: [] };
             // console.log(obj);
            } else if ($(element).attr('class') === 'claim-dependent') {
              // var idref = $(element).children('.claim').children('.claim-text').children('claim-ref').attr('idref')
              var idref = parentt(text);
              // console.log('id', id)
              // console.log('parent', idref)
              var obbj = { name: id, id: id, class: 'dependent', text: $(element).text(), parent: idref, children: [] };
              var obbjj = { name: id, id: id, class: 'dependent', text: $(element).text(), parent: idref, children: [] };
              var array = temparray;
            flatarray[id - 1]={ name: id, id: id, class: $(element).attr('class'), text: $(element).text(), children: [] };
              for (var index = 0; index < array.length; index++) {
                 element = array[index];
                if (idref == element.id) {
                  element.children.push(obbj);
                } else {
                  try {
                    var array4 = element.children;
                    for (var index4 = 0; index4 < array4.length; index4++) {
                      var element4 = array4[index4];
                      if (idref == element4.id) {
                        element4.children.push(obbj);
                      }else {
                        try {
                          var array5 = element4.children;
                          for (var index5 = 0; index5 < array5.length; index5++) {
                            var element5 = array5[index5];
                            if (idref == element5.id) {
                              element5.children.push(obbj);
                            }
                          }
                        } catch (ex) {console.log(ex); }
                        finally {}
                      }
                    }
                  } catch (ex) {console.log(ex); }
                  finally {}
                }
              }

              var array1 = altarray;
              for (var index1 = 0; index1 < array1.length; index1++) {
                var element1 = array1[index1];
                if (idref === element1.id) {
                  element1.children.push(obbjj);
                } else {
                  try {
                    var array2 = element1.children;
                    for (var index2 = 0; index2 < array2.length; index2++) {
                      var element2 = array2[index2];
                      if (idref === element2.id && element2.children.length == 1) {
                        element2.children.push({ name: element2.name, id: element2.id, text: element2.text, class: 'independent', children: [], parent: element2.parent });
                      // element2.children.push(obbj)
                      }else if (idref === element2.id && element2.children.length > 2) {
                        element2.children.push(obbjj);
                      //   if (element.children.length == 0){
                      //       //element.children.push(element)
                      //       element.children.push({name: element.name, id: element.id, text: element.text, class: 'independent',children:[],parent: element.parent})
                      //       element.children.push(obbj)
                      //   }else{
                      //    element.children.push(obbj)
                      //   }
                      }else {
                        try {
                          var array3 = element2.children;
                          if (array3 !== undefined) {
                            for (var index3 = 0; index3 < array3.length; index3++) {
                              var element3 = array3[index3];
                              if (idref === element3.id && element3.children.length < 1) {
                                element3.children.push({ name: element3.name, id: element3.id, text: element3.text, class: 'independent', children: [], parent: element3.parent });
                              // element2.children.push(obbj)
                              }else if (idref === element3.id && element3.children.length > 0) {
                                element3.children.push(obbjj);
                              //   if (element.children.length == 0){
                              //       //element.children.push(element)
                              //       element.children.push({name: element.name, id: element.id, text: element.text, class: 'independent',children:[],parent: element.parent})
                              //       element.children.push(obbj)
                              //   }else{
                              //    element.children.push(obbj)
                              //   }
                              }else {
                                try {
                                  var array6 = element3.children;
                                  if (array6 !== undefined) {
                                    for (var index6 = 0; index6 < array2.length; index6++) {
                                      var element6 = array6[index6];
                                      if (idref === element6.id && element6.children.length == 1) {
                                        element6.children.push({ name: element6.name, id: element6.id, text: element6.text, class: 'independent', children: [], parent: element6.parent });
                                      // element2.children.push(obbj)
                                      }else if (idref === element2.id && element6.children.length > 2) {
                                        element6.children.push(obbjj);
                                      //   if (element.children.length == 0){
                                      //       //element.children.push(element)
                                      //       element.children.push({name: element.name, id: element.id, text: element.text, class: 'independent',children:[],parent: element.parent})
                                      //       element.children.push(obbj)
                                      //   }else{
                                      //    element.children.push(obbj)
                                      //   }
                                      }else {
                                      }
                                    }
                                  }
                                } catch (ex) {console.log(ex); }
                                finally {}
                              }
                            }
                          }
                        } catch (ex) {console.log(ex); }
                        finally {}
                      }
                    }
                  } catch (ex) {console.log(ex); }
                  finally {}
                }
              }
            }
          }
        }


        json.claims = temparray;
        json.claim = flatarray;
        alt = altarray;
      });
      var backward_citations = $('#backward-citations').siblings('table');
      json.backward_citations = backward_citations.html();
      // var ary = []
      // var kids = backward_citations.children().children('tr').toArray()
      // kids.forEach(function(value, index, kids){
      //     var row = []
      //     var cells  = $(value).children('td').toArray()
      //     cells.forEach(function(value, index, cells){
      //         var info = value.text()
      //         row.push(info)
      //     })
      //     ary.push(row)
      // })
      // json.bc = ary
      var forward_citations = $('#forward-citations').siblings('table');
      json.forward_citations = forward_citations.html();
      var classifications = $('#classifications').siblings('table');
      json.classifications = classifications.html();
      var legalevents = $('#legal-events').siblings('table');
      json.legal = legalevents.html();
      try {
        var application = $('[data-label="Application"].appbar-application-grant-link').attr('href');
        var grant = $('[data-label="Grant"].appbar-application-grant-link').attr('href');
        var num = application.slice(application.indexOf('US'), application.length);
        var gnum = grant.slice(grant.indexOf('US'), grant.length);
        json.grant_link = grant;
        json.pub_link = application;
        json.pub = num;
        json.grant = gnum;
        console.log('Pub - ', json.pub, json.pub_link);
        console.log('Grant - ', json.grant, json.grant_link);
      } catch(ex) {console.log(ex); }
      finally {
        json.text = $('.patent-description-section').html();
      }
      // json.totalclaims = $(".claims").children().length

      var claimroot = { name: 'issued', class: 'super-independent', children: json.claims };
      // var claimroot = json.claims
      if (json.title !== undefined) {
        fs.writeFile(path.join(process.cwd(), 'files', 'public', 'uspto', 'patents', req.params.id, req.params.id + '.json'), JSON.stringify(json, null, 4), function (err) {
          console.log('json written');
     fs.writeFile(path.join(process.cwd(), 'files', 'public', 'uspto', 'patents', req.params.id, req.params.id + '-claims.json'), JSON.stringify(claimroot, null, 4), function (err) {
          console.log('claims written');
    res.json(json);    
    });   
     });
       
        //            res.send(json.text)
        
      }else {
        res.status(404);
      }
    }
  };

//request(url, reqcallback);
  
};
exports.getPatentData = getPatentData;