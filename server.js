/**
 * Created by sunil.jhamnani on 1/12/16.
 */
var http = require('http');
var port = process.env.port || 8899;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

