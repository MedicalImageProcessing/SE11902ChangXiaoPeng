const fs=require('fs');
var str='';

for(var i=0;i<500;i++){

    str+='我是大帅鹏，我要女朋友\n';
}

var writeStream=fs.createWriteStream('./data/output.txt');

writeStream.write(str);

writeStream.end();

writeStream.on('finish',()=>{
    console.log('写入完成');
})