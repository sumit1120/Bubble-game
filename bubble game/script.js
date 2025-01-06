function makebubble(){
   var clutter = "";


for(var i=1;i<=190;i++){
   var a = Math.floor(Math.random()*10)
clutter +=`<div class="bubble">${a}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;
}


var hitrn = 0;
function hitval(){
hitrn = Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent=hitrn;
}

var score=0;
 
function increasescore(){
   score+=10;
   document.querySelector("#scoreval").textContent=score;
}


var timer=30;
function runtimer(){
   var timerint=setInterval (function(){
      if(timer>0){
        timer--;
        document.querySelector("#runtime").textContent=timer;
      }
      else{
         clearInterval(timerint);
         document.querySelector("#pbtm").innerHTML=`<h1>Game Over you score ${score} </h1>`;
      }
   
   },1000);

}

document.querySelector("#pbtm").addEventListener("click",function(det){
   var checkdnum = Number(det.target.textContent);
   if(checkdnum === hitrn){
      increasescore();
      makebubble();
      hitval();


   }
 
})



hitval();
runtimer();
makebubble();
