const http = require('http');

http.createServer((req, res)=>{
    console.log(req.url);
  res.writeHead(200, {'Content-Type': 'text/html;charset="UTF-8"'});
  
  
  res.write('this is nodejs sss');
  res.end();
}).listen(3000);