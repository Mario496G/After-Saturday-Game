function EnemyY(x, y, parent, player) {
  var enemyY = this;
  this.height = 55;
  this.width = 55;
  this.x = x;
  this.y = y;
  this.sprite = document.createElement("div");
  this.directionY = 0;
  this.speed = 12;

  this.insertEnemy = function () {
    // console.log(parent)
    this.sprite.setAttribute("id", "enemyY");
    this.sprite.style.left = this.x + "px";
    this.sprite.style.top = this.y + "px";
    parent.appendChild(this.sprite);
  };
  this.enemyMoveY = function () {
    enemyY.checkCollision();
    //console.log(enemyY.y)
    if (enemyY.y >= 0 && enemyY.y <= 720) {
      enemyY.y += enemyY.speed;
      enemyY.sprite.style.top = enemyY.y + "px";
    } //movimiento del enemigo en caida libre
    if (enemyY.y > 670) {
      enemyY.removeEnemy();
    }
  };

  this.removeEnemy = function () {
    clearInterval(enemyY.enemyMoveY, 200);
    parent.removeChild(this.sprite);
  };

  this.checkCollision = function () {
    //console.log(enemyY)
    if (
      enemyY.x < player.x + player.width &&
      enemyY.y < player.y + player.height &&
      enemyY.x + enemyY.width > player.x &&
      enemyY.y + enemyY.height > player.y
    ) {
      enemyY.removeEnemy();
      window.alert(player.remainingLife);
      player.remainingLife = player.remainingLife - 1;
      window.alert(player.remainingLife);
      if (player.remainingLife <= 0) {
          window.alert("GAME OVER");
        }
        board.removeChild(life.sprite);
    }
  };
}

export { EnemyY };
