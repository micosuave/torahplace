
  var express = require('express');
  var router = express.Router();
  var fs = require('fs');
  var path = require('path');

  /* GET home page. */
  router.get('/', function(req, res) {
	res.render('index');
  });
/*Get ALT page*/
router.get('/pdf',  function(req, res){
res.sendFile('pdf.html');
});

  /* Serve the Tree */
  router.get('/files/tree', function(req, res) {
	var _p;
	if (req.query.id == 1) {
	  _p = path.resolve(process.cwd(), 'files', req.user._id.toString());
	  processReq(_p, res);

	} else {
	  if (req.query.id) {
		_p = req.query.id;
		processReq(_p, res);
	  } else {
		res.json(['No valid data found']);
	  }
	}
  });
router.get('/files/publictree', function(req, res) {
	var _p;
	if (req.query.id == 1) {
	  _p = path.resolve(process.cwd(), 'files/public/');
	  processReq(_p, res);

	} else {
	  if (req.query.id) {
		_p = req.query.id;
		processReq(_p, res);
	  } else {
		res.json(['No valid data found']);
	  }
	}
  });
  /* Serve a Resource */
  router.get('/files/resource', function(req, res) {
   res.send(fs.readFileSync(req.query.resource, 'UTF-8'));
 	//res.sendFile(req.query.resource);
 });

  function processReq(_p, res) {
	var resp = [];
	fs.readdir(_p, function(err, list) {
	  for (var i = list.length - 1; i >= 0; i--) {
		resp.push(processNode(_p, list[i]));
	  }
	  res.json(resp);
	});
  }

  function processNode(_p, f) {
	var s = fs.statSync(path.join(_p, f));
	return {
	  "id": path.join(_p, f),
	  "text": f,
	  "icon" : s.isDirectory() ? 'jstree-custom-folder' : 'jstree-custom-file',
	  "state": {
		"opened": false,
		"disabled": false,
		"selected": false
	  },
	  "li_attr": {
		"base": path.join(_p, f),
		"isLeaf": !s.isDirectory()
	  },
	  "children": s.isDirectory()
	};
  }

  module.exports = router;
