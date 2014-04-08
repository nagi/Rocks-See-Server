var http = require('http');
var setup = require('proxy');
var basicAuthParser = require('basic-auth-parser');

var port   = 80;
var server = setup(http.createServer());
server.listen(port, function () {
  console.log('HTTP(s) proxy server listening on port %d', port);
});

server.authenticate = function (req, fn) {
  // parse the "Proxy-Authorization" header
  var auth = req.headers['proxy-authorization'];
  if (!auth) {
    return fn(null, false);
  }
  var parsed = basicAuthParser(auth);
  // check credentials
  if(parsed.username === process.env.PROXY_AUTH_USERNAME &&
     parsed.password === process.env.PROXY_AUTH_PASSWORD) {
    console.log('Serviced: ' + req.url)
    return fn(null, true);
  } else {
    console.log('Denied: ' + req.url)
    return fn(null, false);
  }
}
