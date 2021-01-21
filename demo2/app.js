const http = require('http');
const url=require('http');

http.createServer((req, res)=>{
    
  res.writeHead(200, {'Content-Type': 'text/html;charset="UTF-8"'});
  res.write('<head><meta charset="UTF-8"></head>');
  
  console.log(req.url);
  if(req.url!='/favicon.ico'){
    var userInfo=url.parse(req.url,true).query;
  console.log(`姓名：${userInfo.name}--年龄：${userInfo.age}`);

  }
  res.end();
}).listen(3000);