/*const fs=require('fs');

//
fs.stat('./html',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log("是文件:${data.isFile()}");
    console.log("是目录:${data.isDirectory()}");
})
*/
/*const fs=require('fs');

//
fs.stat('./package.json',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log(`是文件:${data.isFile()}`);
    console.log(`是目录:${data.isDirectory()}`);
})*/


 
const fs=require('fs');

//2 fs.mkdir 创建目录
/*fs.mkdir('./css',(err)=>{
   if(err){
       console.log(err);
       return;
   }
   console.log('创建成功');
})
*/ 


//3.fs.writeFile 创建写入文件
/*fs.writeFile('./html/index.html','你好nodejs',(err)=>{

    if(err){
        console.log(err);
        return;
    }
    console.log('创建写入文件成功');
    
})
*/
/*fs.writeFile('./html/index.html','你好nodejs hhh',(err)=>{

    if(err){
        console.log(err);
        return;
    }
    console.log('创建写入文件成功');
    
})*/

//4.fs.appendFile 追加文件
/*fs.appendFile('./css/base.css','body{color:red}',(err)=>{

    if(err){
        console.log(err);
        return;
    }
    console.log('appendFile 成功');
})
*/

/*fs.appendFile('./css/base.css','h3{color:red}',(err)=>{

    if(err){
        console.log(err);
        return;
    }
    console.log('appendFile 成功');
})
*/

//5.readFile 读取文件

/*fs.readFile('./html/index.html',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    console.log(data.toString());//把Buffer 转化为string类型
})
*/

//6.fs.readdir 读取目录

/*fs.readdir('./html',(err,data)=>{

    if(err){
        console.log(err);
        return;
    }

    console.log(data);
})
*/

//7.fs.rename 重命名   功能1、重命名 2、移动文件
/*
fs.rename('./css/aaa.css','./css/index.css',(err)=>{

    if(err){
        console.log(err);
        return;
    }
    console.log('重命名成功');
})
*/
/*
fs.rename('./css/index.css','./html/index.css',(err)=>{

    if(err){
        console.log(err);
        return;
    }
    console.log('移动成功');
})
*/

//8.fs.rmdir 删除目录

fs.rmdir('./aaaa',(err)=>{

    if(err){
        console.log(err);
        return;
    }
    console.log('删除目录成功');
})


//9.fs.unlink 删除文件

/*fs.unlink('./aaaa/index.html',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('删除文件成功');
})
*/