const fs=require('fs');
var readStream=fs.createReadStream('../demo6/app.js');

var writeStream=fs.createWriteStream('./data/aaa.jpg');

readStream.pipe(writeStream);