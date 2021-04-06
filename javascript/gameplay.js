var dino = document.getElementById('dino');
var cac = document.getElementById('cac');
var score = document.getElementById('score');
var counter = 0;


function jmp(){
   if( dino.classList !='animate'){
    dino.classList.add('animate');
   }
    setTimeout(function()  {
        dino.classList.remove("animate");
        
    }, 500);
}

function chk(){
let top =parseInt( window.getComputedStyle(dino).getPropertyValue("top"));
let right =parseInt( window.getComputedStyle(cac).getPropertyValue("right"));
if (right >493 && top>247 )
{
    var reset= confirm("game over");
    
     cac.style.animation ="none";
     cac.style.display ="none";
     if (reset ==1){
         window.location.reload();
     } 
}
else{
    counter++;
    let scr =Math.floor( counter/100);
    score.innerHTML="Your Score: "+ scr;
}
}
var checkDead = setInterval( chk,10);

  document.body.onkeyup = function(e){
    if(e.keyCode == 32 || e.keycode ==38){
    jmp(); 
    console.log('you pressed space'); 
    }
  }
