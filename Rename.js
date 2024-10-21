var fs=require('fs');
fs.rename('mynewfile.txt','myrename.txt',function(err){
    if(err) throw err
;
console.log('renamed')
})