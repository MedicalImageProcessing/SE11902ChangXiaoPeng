const fs=require('fs');

const path=require('path');
const url=require('url');

exports.getMime = function (extname) {

    switch (extname) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        default:
            return 'text/html';

    }

}

 let getFileMime = function (extname) {

    var data=fs.readFileSync('./data/mime.json'); //同步方法
    let mimeObj=JSON.parse(data.toString());   
    return mimeObj[extname];    

}

exports.static=function(req,res,staticPath){

    let pathname=url.parse(req.url).pathname;
  pathname=pathname=='/'?'/index.html':pathname;
  let extname=path.extname(pathname);
//2.通过fs模块读取文件
  if(pathname!='/favicon.ico'){
    let mime= getFileMime(extname);
    return new Promise(function(resolve,reject){
        fs.readFile('./'+staticPath+pathname,function(err,data){

            if(err){
                resolve(pathname);
            }
            else{
                res.writeHead(200, {'Content-Type': ''+mime+';charset="UTF-8"'});
                res.end(data);
            }
        });
    });

  }
}
