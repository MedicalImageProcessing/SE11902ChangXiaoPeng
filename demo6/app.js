/*
const fs=require('fs');

var path='./wwwroot';
var dirArr=[];
fs.readdir(path,(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    (function getDir(i){
        if(i==data.length){
            console.log(dirArr);
            return;
        }
        fs.stat(path+'/'+data[i],(error,stats)=>{
            if(stats.isDirectory()){
                dirArr.push(data[i]);
            }
            getDir(i+1)
        })
    })(0)
})
*/

//1.定义一个isDir的方法判断一个资源是目录还是文件
async function isDir(path){
    fs.stat(path,(error,stats)=>{
        if(err){
            console.log(err);
            return;
        }
        if(stats.isDirectory()){
            return true;
        }else{
            return false;
        }
        getDir(i+1)
    })
}


//2.获取wwwroot里面的所有资源，循环遍历