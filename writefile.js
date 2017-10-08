var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
   res.writeHead(200,{'Content-Type':'text/html'});
   fs.writeFile('mytxt3.txt','Hwllo write file', function(err){
       if(err) throw err;
       console.log('File Written!');
   })
   res.end();
}).listen(8010);