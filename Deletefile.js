var fs = require('fs');
fs.unlink('mynewfile2.txt',function(err){
    if(err) throw err;
    console.log("file deleted")
}).listen(3000)