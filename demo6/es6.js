//let 区域构造
//模板字符串  console.log(` ${}`)
//属性的简写
/*
function getData(callbck){

    setTimeout(function(){
        var name='张三';
        callbck(name)
    },1000);
}

getData(function(aaa){
    console.log(aaa);
})
*/



var p=new Promise(function(resolve,reject){


        setTimeout(function(){
            var name='张三';
            resolve(name)
        },1000);

})

p.then(function(data){
    console.log(data);
})