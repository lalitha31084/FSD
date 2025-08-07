let row=0;
let col=0;
function createGrid() {
    row = parseInt(document.getElementsByTagName("input")[0].value);
     col = parseInt(document.getElementsByTagName("input")[1].value);
    let box = document.createElement("table");
    box.setAttribute("border","1");
    for(var i=0; i<row; i++){
        let tablerow = document.createElement("tr");
        for(var j=0; j<col; j++){
             let division = document.createElement("td");
            division.setAttribute("style","width:50px; height:50px; position:relative;box-sizing:border-box;");
            tablerow.appendChild(division);
           if(i==0 && j==0){
                 let image=document.createElement("img")
                image.setAttribute("src","./flower.jpeg ")
                image.setAttribute("id","img1")
                image.setAttribute("style","position:absolute; width:50px; height:50px; left:0px;top:0px;")
                division.appendChild(image)
           }
        } 
        box.appendChild(tablerow);
    }
    box.setAttribute("cellspacing","0");
    document.getElementsByTagName("body")[0].appendChild(box);

    

    let btn1=document.createElement("button");
    btn1.setAttribute("onclick","funtop()");
    btn1.textContent="top"
    let btn2=document.createElement("button");
     btn2.setAttribute("onclick","funleft()");
    btn2.textContent="left"
    let btn3=document.createElement("button");
    btn3.setAttribute("onclick","funbottom()");
     btn3.textContent="bottom"
    let btn4=document.createElement("button");
    btn4.setAttribute("onclick","funright()");
    btn4.textContent="right"
    btn1.setAttribute("style","width:40px; height:40px")
    document.body.appendChild(btn1);
     btn2.setAttribute("style","width:40px; height:40px")
    document.body.appendChild(btn2);
     btn3.setAttribute("style","width:40px; height:40px")
    document.body.appendChild(btn3);
     btn4.setAttribute("style","width:40px; height:40px")
    document.body.appendChild(btn4);

}
let leftpos=0;
let toppos=0;

    function funright(){
        let rightside=document.getElementById("img1");
        leftpos+=50;
         if(leftpos>=row*50){
            alert("bye");
        }
        else{
            rightside.style.left=leftpos+"px";
        }
       
    }
     function funleft(){
        let leftside=document.getElementById("img1");
        leftpos-=50;
         if(leftpos<0){
            alert("bye");
        }
        else{
            leftside.style.left=leftpos+"px";
        }
    }
     function funtop(){
        let topside=document.getElementById("img1");
        toppos-=50;
       
         if(toppos<0){
            alert("bye");
        }
        else{
             topside.style.top=toppos+"px";
        }
    }
     function funbottom(){
        let bottomside=document.getElementById("img1");
        toppos+=50;
        if(toppos>=col*50){
            alert("bye");
        }
        else{
            bottomside.style.top=toppos+"px";
        }
    }

   