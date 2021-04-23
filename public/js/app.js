//
/// Stef's NodeJS Webserver for Docker & Kubernetes experiments
///
var myip = require('ip');
var myos = require('os');
var mycounter = require("./appmodules.js");
var http = require('http');
const hostname = '0.0.0.0';
const port = 8088;
var vhost = myos.hostname;
var vcounter =  mycounter.getcounter(vhost);

//const args = process.argv.slice(2);

const server = http.createServer((req, res) => {
  /// 
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<html><body><h1>Sample Web App</h1>");
  res.write("<h3> New Tech In Action - Summer 2021 edtion**</h3>");
  //  res.write("<img src='./images/logo.jpg'><br>");
  res.write("      Node Name: " + vhost +  "<br>");
  res.write("   Node Address: " + myip.address() + " port: "+ server.address().port + "<br>");
  res.write("        Counter: " + vcounter + "<br>");
  res.write("    Time is now: " + Date().toString()+ "</body></html>");
  res.end();
  vcounter =  mycounter.getcounter(vhost); 
});

server.listen(port, hostname, () => {
  console.log("Server listing on port " + port.toString() );
});

var callback = function (err, data) {
  if (err) return console.error(err);
  console.log(data);
};
