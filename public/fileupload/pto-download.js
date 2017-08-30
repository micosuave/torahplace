
	module.exports = function (appnum, req, res) {
		var path = require('path');
		var fs = require('fs');
		var http = require('http');
        var jszip = require('jszip');
		//var https = require('https');
        var filename =  appnum + '.zip'; 
         var storedir = path.join(process.cwd(),'files','uploads', appnum);
        //var storedir = process.cwd();
        var pathy =  '/https://storage.googleapis.com/uspto-pair/applications/' + appnum + '.zip';
        var path1 = '/uspto-pair/applications/'+appnum+'.zip';
        var option = { host: 'storage.googleapis.com', path: path1};
        var options = { host: '127.0.0.1',port:'8080', path: pathy };
		
		var callback = function (response) {
			var str = '';
            //var a = fs.createWriteStream('~/dev/files/uploads');
			//another chunk of data has been recieved, so append it to `str`
			response.on('data', function (chunk) {
				str += chunk;
                 
			});

			//the whole response has been recieved, so we just print it out here
			response.on('end', function () {
				
                 //fs.appendFile(storedir, str, messagedone);
                 res.send(str);
                // fs.writeFile(storedir, str, messagedone);
                // fs.createWriteStream(storedir,str) 
			});
		
		var messagedone = function () {
			var zip = new jszip().generate(str);
            fs.writeFile(zip);
                console.log(zip);console.log(filename);
		};
};
		http.get(option,callback);

	};

