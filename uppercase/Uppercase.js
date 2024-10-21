import http from "http";
import { upperCase } from "upper-case";
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});


res.write(upperCase("hello world"));
res.end();
}).listen(3004);
console.log("server is running on http://localhost:3004");