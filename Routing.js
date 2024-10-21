const http=require('http');
const url=require('url');
const port=3001;
const Server =http.createServer((req,res)=>{
const{pathname}=url.parse(req.url);

res.statusCode=200;
res.setHeader('Content-Type','text/plain');

if (pathname==='/'){
    res.end('Hello world');
}
else if (pathname==='/about'){
    res.end('About Page')
}
else if (pathname==='/contact'){
    res.end('Contact Page')
}
else {
    res.statusCode=404;
    res.end('page not found')
}
});
Server.listen(port,()=>{
    console.log(`server is running at ${port}`);
});