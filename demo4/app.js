var sd = require('silly-datetime');

var d=sd.format(new Date(), 'YYYY-MM-DD HH:mm');

var md5=require('md5');
console.log(md5('123456'));
console.log(d);

