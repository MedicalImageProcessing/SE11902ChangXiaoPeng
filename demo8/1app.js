var http = require('http');
http.createServer(function (request, response) {
  console.log(request.url);
//1.获取地址
  let pathname=req.url;
//2.通过fs模块读取文件
  if(pathname!='favicon.ico'){

    false.readFile('/static'+pathname,(err,data)=>{

        if(err){
            console.log('')
        }
    })
  }
  response.writeHead(200, {'Content-Type': 'text/html;charset="UTF-8"'});
  response.write('<head><meta charset="UTF-8"></head>') 
  response.end('Hello,World');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');