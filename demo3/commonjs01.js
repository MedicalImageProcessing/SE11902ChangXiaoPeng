const http = require('http');
const { listenerCount } = require('process');
const tools = require('./module/tools.js');
console.log(tools);

http.createServer((req,res)=>{
res.writeHead(200,{"Content.type":"text/html;charset='utf-8'"});
res.write("<head><meta charset='UTF-8'></head>");
res.write('你好 nodejs<br>');
var api = tools.formatApi('api/focus');
res.write(api);
res.end;

}).listen(3000);