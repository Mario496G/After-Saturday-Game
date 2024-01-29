import { Player } from './domingo.js'
import { EnemyY } from './enemyY.js'
var board = document.getElementById("board")
var player = new Player (324, 324, board)
var enemyY = new EnemyY (200, 100, board, player)
var enemies = []
var intervalEnemyY

/*function createEnemy(){

    enemies.push(enemyY)
}*/

function gameStart(){ //función de creación de personaje + enemigo amarillo
    player.insertPlayer()
    enemyY.insertEnemy()

intervalEnemyY = setInterval(enemyY.enemyMoveY, 200);
enemyY.enemyMoveY()
} //velocidad de la caida libre

window.onload=function(){
gameStart()
}

window.addEventListener('keydown', function(e){
//console.log("paso de ti")
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
