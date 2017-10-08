//console.log('Node Js is Installed');
var dt=require('./myfirstmodule');
var http=require('http');
var url = require('url');
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
var q = url.parse(req.url, true).query;
var txt = q.year + " " + q.month;
res.end('Hello World from node js'+txt);
}).listen(8010);
