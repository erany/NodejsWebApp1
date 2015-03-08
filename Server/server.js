
var express = require('express');
var path = require('path');
var helpers = require('express-helpers');
var customers = require('./routes/clientReception');

var app = express();
//app.use(express.bodyParser()); 
app.use(express.static(path.join(__dirname, 'app')));

//configure app
//app.set('view engine' , 'jade');
//app.set('views' , path.join(__dirname, '../views'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(path.join(__dirname, '../app')));

// JSON API
app.get('/customers', customers.getList); 

//define routes
app.get('/', function(req,res){
    //res.send(__dirname); 
    res.render('index'); 
});

app.listen(3500, function () { 
    console.log('ready on port 3500'); 
}); 


//var http = require('http');
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(1337, '127.0.0.1');
//console.log('Server running at http://127.0.0.1:1337/');