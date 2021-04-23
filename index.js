/**
 * Module dependencies.
 */
var express = require('express');
var path = require('path');
var app = express();

var myip = require('ip');
var myos = require('os');

var mycounter = require("./public/js/appmodules.js");
var vhost = myos.hostname;
var vcounter =  mycounter.getcounter(vhost);

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// express on its own has no notion
// of a "file". The express.static()
// middleware checks for a file matching
// the `req.path` within the directory
// that you pass it. In this case "GET /js/app.js"
// will look for "./public/js/app.js".

app.use(express.static(path.join(__dirname, 'public')));

// if you wanted to "prefix" you may use
// the mounting feature of Connect, for example
// "GET /static/js/app.js" instead of "GET /js/app.js".
// The mount-path "/static" is simply removed before
// passing control to the express.static() middleware,
// thus it serves the file correctly by ignoring "/static"
app.use('/static', express.static(path.join(__dirname, 'public')));

// if for some reason you want to serve files from
// several directories, you can use express.static()
// multiple times! Here we're passing "./public/css",
// this will allow "GET /style.css" instead of "GET /css/style.css":
app.use(express.static(path.join(__dirname, 'public', 'css')));

app.get('/', function (req, res) {
    res.write("   Node Address: " + myip.address() + "<br>");
    res.end();
    res.writeFile('index.html');
});

app.get('/test', function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html><body><img src='/images/logo.jpg' width='325' height='150'>");
        res.write("<h3> New Tech In Action - Summer 2021 edition</h3>");
    res.write("      Node Name: " + vhost +  "<br>");
    res.write("   Node Address: " + myip.address() + "<br>");
    res.write("        Counter: " + vcounter + "<br>");
    res.write("    Time is now: " + Date().toString()+ "</body></html>");
    res.end();
    vcounter =  mycounter.getcounter(vhost);
  });

app.post('/submit', function (req, res) {
//    console.log("*** Submitting ***")
    var name = req.body.firstName + ' ' + req.body.lastName;
    if (name === " ") {
        res.write("<html><body><h1>** Nothing to submit **</h1></body></html>");
    }
    else if (name === "kill bill") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("*** Bill was here and KILLED this webserver ***<br>");
        res.end(); 
        console.log("*** webserver stopped ***");
        process.exit();    
    }
    else {
        res.write("<html><body><h2>" + name + " has been submitted</h2></body></html>");
    }
    res.end();
});

app.listen(3000);
console.log('Webserver started. Listening on port 3000');