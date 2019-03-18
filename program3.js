var fs=require('fs')
var filePath= process.argv[2]

fs.readFile(filePath,function callback(err,data){
    if(err){return err}

 var str=data.toString();


})