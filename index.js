var board = document.getElementById("board")
var domingo = document.getElementById("player")
var domingoX = 324;
var domingoY = 324;
var speed = 1;
function moveDomingoX(speed){
    domingoX += speed*18
    domingo.style.left = domingoX + "px"
}

function moveDomingoY(speed){
    domingoY += speed*18
    domingo.style.top = domingoY + "px"
}

window.addEventListener('keydown', function(e){
switch(e.key){
case "a": 
moveDomingoX (-1)
break;
case "d": 
moveDomingoX (1)
break;
case "w": 
moveDomingoY (-1)
break;
case "s": 
moveDomingoY (1)
break;
    }
})
