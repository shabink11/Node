var http=require('http')
var path=require('path')
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})
res.sendFile()
res.end()
}).listen(3000)