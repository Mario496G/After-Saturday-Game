import { Player } from './domingo.js'
import { EnemyY } from './enemyY.js'
import { EnemyX } from './enemyX.js'
import { Life } from './life.js'
var board = document.getElementById("board")
var player = new Player (324, 324, board)
var enemies = []
/*var enemyX = new EnemyX
var enemyY = new EnemyY
var intervalEnemyY;
var intervalEnemyX;*/
var life;
var gameOverId
var createEnemyInt
function createEnemy() {
    var coord = Math.floor(Math.random() * 10) * 50 // generacion de ramdon
    var coord1 = Math.floor(Math.random() * 10) * 50 // generacion de ramdon
    var enemyY = new EnemyY(coord, 0, board, player, enemies)
    var enemyX = new EnemyX(0, coord1, board, player, enemies)
    enemyY.insertEnemy() 
    enemyX.insertEnemy()
    enemies.push(enemyY, enemyX) 
     //velocidad de la caida libre
     console.log(enemies)

  }
  
  function createLife (){
    for (var i = 0; i < 3; i++) {
        life = new Life(30 * i, 15, board); 
        life.insertLife();
    }
}

function gameOver(){
    if (player.remainingLife <= 0){
        clearInterval(player)
        clearInterval(gameOverId)
        clearInterval(createEnemyInt)
        enemies.forEach(function(enemy){
            enemy.removeEnemy()
        })
        board.removeChild(player.sprite)
        gameover.style.opacity = 1
    }
}


function gameStart(){ //función de creación de personaje + enemigo amarillo
    player.insertPlayer()
    createLife()
     createEnemyInt = setInterval(createEnemy,2000)
    gameOverId = setInterval(gameOver, 500)
   
} 

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
case "A": 
player.directionX = -1
player.moveX()
break;
case "d": 
player.directionX = 1
player.moveX()
break;
case "D": 
player.directionX = 1
player.moveX()
break;
case "w": 
player.directionY = -1
player.moveY()
break;
case "W": 
player.directionY = -1
player.moveY()
break;
case "s": 
player.directionY = 1
player.moveY()
break;
case "S": 
player.directionY = 1
player.moveY()
break;
    }
})

/*function restLifeY () {
    if (enemyX.checkCollision() === true || enemyY.checkCollision() === true)
    player.remainingLife - 1
    board.removeChild(life.sprite)
    if (player.remainingLife <=0){
       window.alert("GAME OVER")
    }
}*/

