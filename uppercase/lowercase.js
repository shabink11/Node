var http=require('http');
var lowerCase=require('lower-case').lowerCase
http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"})
    res.write(lowerCase("HELLO WORLD"));
    res.end()
}).listen(3000);
console.log(`server running on http://localhost:3000`)
