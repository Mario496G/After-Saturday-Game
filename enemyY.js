function EnemyY(y){
    var enemyY = this
    this.y = y
    this.sprite = document.getElementById("enemyY")
    this.directionY = 0
    this.speed = 12

    this.enemyMoveY = function (){
        var enemyMoveY = enemyY.y + (12 * enemyY.directionY)
        if (enemyMoveY >= 0 && enemyMoveY <= 665){
            enemyY.y = newMoveY
            enemyY.sprite.style.top = enemyY.y + "px"
        }
    }
}

export {EnemyY}