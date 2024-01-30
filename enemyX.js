var heart = document.getElementsByClassName("life");
var board = document.getElementById("board");
function EnemyX(x, y, parent, player) {
  var enemyX = this;
  this.height = 55;
  this.width = 55;
  this.x = x;
  this.y = y;
  this.sprite = document.createElement("div");
  this.directionX = 0;
  this.speed = 12;
  this.timerId;
  var musicBad = new Audio ("./images/badcollision.mp3")

  this.insertEnemy = function () {
    // console.log(parent)
    this.sprite.setAttribute("id", "enemyX");
    this.sprite.style.left = this.x + "px";
    this.sprite.style.top = this.y + "px";
    parent.appendChild(this.sprite);
    this.timerId = setInterval(enemyX.enemyMoveX, 100);
  };
  this.enemyMoveX = function () {
    enemyX.checkCollision();
    //console.log(enemyX.x)
    if (enemyX.x >= 0 && enemyX.x <= 720) {
      enemyX.x += enemyX.speed;
      enemyX.sprite.style.left = enemyX.x + "px";
    } //movimiento del enemigo en caida libre
    if (enemyX.x > 670) {
      enemyX.removeEnemy();
    }
  };

  this.removeEnemy = function () {
    parent.removeChild(enemyX.sprite);
    clearInterval(enemyX.timerId);
  };

  this.checkCollision = function () {
    //console.log(enemyY)
    if (
      enemyX.x < player.x + player.width &&
      enemyX.y < player.y + player.height &&
      enemyX.x + enemyX.width > player.x &&
      enemyX.y + enemyX.height > player.y
    ) {
      enemyX.removeEnemy();
      heart[0].parentNode.removeChild(heart[0]);
      player.remainingLife = player.remainingLife - 1;
      musicBad.play()
      if (player.remainingLife <= 0) {
        gameover.style.opacity = 1;
        //window.alert("GAME OVER");
      }
    }
  };
}

export { EnemyX };
