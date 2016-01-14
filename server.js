/**
 * Created by sunil.jhamnani on 1/12/16.
 */
var http = require('http');
console.log("Making a request");
var options = {
    host: "www.google.com",
    port: 80,
    path: '/',
    method: 'GET'
}
var req = http.request(options,function(response){
    console.log(response.statusCode);
    response.pipe(process.stdout);
});

req.end();

