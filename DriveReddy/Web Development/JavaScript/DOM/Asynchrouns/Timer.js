function startfun(){
    var timer=0;
    var interval=setInterval(function(){
    timer=timer+1;
    document.getElementsByClassName("min")[0].innerText=parseInt(timer/60);
    document.getElementsByClassName("sec")[0].innerText=parseInt(timer%60);
   

},1000);
}


    setTimeout(function(){
    clearInterval(interval);
},1000);





