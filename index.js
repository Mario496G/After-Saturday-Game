var board = document.getElementById("board")
var domingo = document.getElementById("player")
var domingoX = 324;
var domingoY = 324;
function moveDomingo(){

}

window.addEventListener('keydown', function(e){
switch(e.key){
case "a": 
movePlayer (-1)
break;
case "d": 
movePlayer (1)
break;
case "w": 
movePlayer (-1)
break;
case "s": 
movePlayer (1)
break;
    }
})
