var http=require('http')
var fs=require('fs');
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  fs.appendFile('mytxt.txt','Hello txt file',function(err){
      if(err){
          throw err;
      }
        else{
            console.log('Saved');
        }
  });
  res.end();
}).listen(8010);