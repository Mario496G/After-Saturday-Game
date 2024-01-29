//var domingoX = 324;
//var domingoY = 324;

function Player(x, y){
    var player = this
    this.x = x
    this.y = y
    this.sprite = document.getElementById("player")
    this.directionX = 0
    this.directionY = 0
    this.speed = 18
    this.moveX = function (){
        console.log(player.x)
        var newMoveX = player.x +(18 * player.directionX)
        if (newMoveX >= 0 && newMoveX <= 648){
            player.x = newMoveX
            player.sprite.style.left = player.x + "px"
        }
    }
    
    this.moveY = function (){
        var newMoveY = player.y + (18 * player.directionY)
        if (newMoveY >= 0 && newMoveY <= 648){
            player.y = newMoveY
            player.sprite.style.top = player.y + "px"
        }
    }
}

export {Player}