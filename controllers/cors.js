var host = process.env.PORT ? '0.0.0.0' : '127.0.0.1';
var port =  8080 || 8088;
 
var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins 
    requireHeader: ['Host'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});

module.exports = cors_proxy.createServer;