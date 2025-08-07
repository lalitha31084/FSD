

// var res=new Promise(function(reslove,reject){
//     var x=10;
//     if(x==10){
//         reslove("eligible");
//     }
//     else{
//         reject("not eligible");
//     }
// })

// res.then(function(res){
//     console.log(res)
// })
// .catch(function(err){
//     console.log(err)
// })


function fun1(){
     return new Promise(function(res,rej){
        setTimeout(function(){
            res();
    },1000)
    })
}
function fun2(){
     return new Promise(function(res,rej){
        setTimeout(function(){
            res();
    },1000)
    })
}
function fun3(){
     return new Promise(function(res,rej){
        setTimeout(function(){
            res();
    },1000)
    })
}
fun1().then(function(){
    console.log("fun1 completed")
    fun2().then(function(){
        console.log("fun2 completed")
        fun3.then(function(){
            console.log("fun3 completed");

        })
    })
})


