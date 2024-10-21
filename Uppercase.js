var http=require('http');
var upperCase=requrie('upper-case-string');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});


res.write(upperCase("hello world"));
res.end();
}).listen(8080);
console.log("server is running on http://localhost:8080");