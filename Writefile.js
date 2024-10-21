var fs=require('fs')
fs.writeFile('mynewfile.txt','hello content',function(err){
    if(err) throw err
    console.log('saved')

})