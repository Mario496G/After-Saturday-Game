import { Player } from './domingo.js'
import { EnemyY } from './enemyY.js'
import { EnemyX } from './enemyX.js'
import { Life } from './life.js'
var board = document.getElementById("board")
var player = new Player (324, 324, board)
var enemies = []
var enemyX = new EnemyX
var enemyY = new EnemyY
var intervalEnemyY;
var intervalEnemyX;
var life;
var music = new Audio('./images/happy.mp3');

function createEnemy() {
    var coord = Math.floor(Math.random() * 10) * 50 // generacion de ramdon
    var coord1 = Math.floor(Math.random() * 10) * 50 // generacion de ramdon
    var enemyY = new EnemyY(coord, 0, board, player, enemies)
    var enemyX = new EnemyX(0, coord1, board, player, enemies)
    enemyY.insertEnemy() 
    enemyX.insertEnemy()
    enemies.push(enemyY, enemyX) 
     //velocidad de la caida libre
    
  }
  
  function createLife (){
    for (var i = 0; i < 3; i++) {
        life = new Life(30 * i, 15, board); 
        life.insertLife();
    }
}


function gameStart(){ //función de creación de personaje + enemigo amarillo
    music.play();
    player.insertPlayer()
    createLife()
    var createEnemyInt = setInterval(createEnemy,2000)
   
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

function restLifeY () {
    if (enemyX.checkCollision() === true || enemyY.checkCollision() === true)
    player.remainingLife - 1
    board.removeChild(life.sprite)
    if (player.remainingLife <=0){
       window.alert("GAME OVER")
    }
}