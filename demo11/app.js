const http = require('http');
const routes=require('./module/routes')
const url=require('url')
const ejs=require('ejs')

http.createServer(async function (req, res) {
 
//创建静态web服务


  //路由
  var pathname=await routes.static(req,res,'static');

  console.log(req.method);

  if(pathname=='/news'){
      var query=url.parse(req.url,true).query;
      console.log(query.age)

      res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
      res.end('get传值获取成功');
  }else if(pathname=='/login'){
    //post 演示

    ejs.renderFile("./views/form.ejs",{},(err,data)=>{
        res.writeHead(200, {'Content-Type': 'text/html;charset="UTF-8"'});
        res.end(data)
    })
  }else if(pathname=='/dologin'){
      let postData='';

      req.on('data',(chunk)=>{
          postData+=chunk;
      })
      await req.on('end',()=>{
          console.log(postData);
          res.end(postData);
      })
    res.writeHead(200, {'Content-Type': 'text/html;charset="UTF-8"'});

    res.end("post ok");
  }else {
    res.writeHead(404, {'Content-Type': 'text/html;charset="UTF-8"'});

    res.end("页面不存在");
  }
  
 
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');