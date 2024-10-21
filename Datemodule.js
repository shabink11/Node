var http =require('http');
var dt =require('./Firstmodule');
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'})
    res.write("The date and time are curently:"+dt.myDateTime());
    res.end();
}).listen(3000);