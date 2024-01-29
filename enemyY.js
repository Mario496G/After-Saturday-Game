function EnemyY(x, y){
    var enemyY = this
    this.x = x
    this.y = y
    this.sprite = document.getElementById("enemyY")
    this.directionY = 0
    this.speed = 12

    this.enemyMoveY = function (){
        console.log(enemyY.y)
        if (enemyY.y >= 0 && enemyY.y <= 720){
            enemyY.y += enemyY.speed
            enemyY.sprite.style.top = enemyY.y + "px"
        }
    }

   //setInterval(enemyMoveY(), 2000);
}

export {EnemyY}