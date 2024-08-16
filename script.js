var ani1=document.getElementById("animation1");
var ani2=document.getElementById("animation2");

var button1=document.getElementById('button1');
button1.addEventListener("click",() =>{
    var ani=document.getElementById('animation1');
    if(ani.style.width=="30vw")ani.style.width="0vw";
    else ani.style.width="30vw";
})

var button2=document.getElementById('button2');
button2.addEventListener("click",() =>{
    var ani=document.getElementById('animation2');
    if(ani.style.left=="0vw") ani.style.left="25vw";
    else ani.style.left="0vw";
})
