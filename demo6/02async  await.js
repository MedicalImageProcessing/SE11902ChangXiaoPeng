/*
  function test(){
    return '您好nodejs';
}

console.log(test());

您好nodejs
*/

/*
async  function test(){
    return '您好nodejs';
}

console.log(test());

Promise { '您好nodejs' }
*/

// await 要在异步中使用
/*
async  function test(){
    return '您好nodejs';
}
async  function main(){
    var data=await test();

    console.log(data);
}
main();
*/

async  function test(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            var name='张三 222';
            resolve(name);
        },1000);
    })
}
async  function main(){
    var data=await test();

    console.log(data);
}
main();