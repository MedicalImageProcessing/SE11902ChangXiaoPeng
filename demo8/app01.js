var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  console.log(req.url);
//1.获取地址
  let pathname=req.url;
  pathname=pathname=='/'?'/index.html':pathname;
//2.通过fs模块读取文件
  if(pathname!='/favicon.ico'){

    fs.readFile('./static'+pathname,(err,data)=>{

        if(err){
            res.writeHead(404, {'Content-Type': 'text/html;charset="UTF-8"'});
            res.end('404这个页面不存在');
        }
        res.writeHead(200, {'Content-Type': 'text/html;charset="UTF-8"'});

        res.end(data);
    })
  }
 
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');