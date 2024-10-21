const { create } = require('domain');
const http=require('http')
const port=3000;
const url=require('url')
const server=http.createServer ((req,res)=>{
    const {pathname}=url.parse(req.url)

    
})





