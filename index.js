import { Player } from './domingo.js'
var board = document.getElementById("board")
var player = new Player (324, 324, board)


window.addEventListener('keydown', function(e){
console.log("paso de ti")
    switch(e.key){
case "a": 
player.directionX = -1
player.moveX()
break;
case "d": 
player.directionX = 1
player.moveX()
break;
case "w": 
player.directionY = -1
player.moveY()
break;
case "s": 
player.directionY = 1
player.moveY()
break;
    }
})
