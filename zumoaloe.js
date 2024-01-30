var heart = document.getElementsByClassName("life");
var board = document.getElementById("board");

function ZumoX(x, y, parent, player) {
  var zumoX = this;
  this.height = 55;
  this.width = 55;
  this.x = x;
  this.y = y;
  this.sprite = document.createElement("div");
  this.directionX = 0;
  this.speed = 12;
  this.timerId;
 // var musicBad = new Audio ("./images/badcollision.mp3") // Hay que cambiar la musica para obtener vidas!!!!!

  this.insertZumo = function () {
    // console.log(parent)
    this.sprite.setAttribute("id", "zumoX");
    this.sprite.style.left = this.x + "px";
    this.sprite.style.top = this.y + "px";
    parent.appendChild(this.sprite);
    this.timerId = setInterval(zumoX.zumoMoveX, 100);
  };
  this.zumoMoveX = function () {
    zumoX.checkCollision();
    //console.log(zumoX.x)
    if (zumoX.x >= 0 && zumoX.x <= 720) {
      zumoX.x += zumoX.speed;
      zumoX.sprite.style.left = zumoX.x + "px";
    } //movimiento del enemigo en caida libre
    if (zumoX.x > 670) {
      zumoX.removeZumo();
    }
  };

  this.removeZumo = function () {
    parent.removeChild(zumoX.sprite);
    clearInterval(zumoX.timerId);
  };

  this.checkCollision = function () {
    //console.log(enemyY)
    if (
      zumoX.x < player.x + player.width &&
      zumoX.y < player.y + player.height &&
      zumoX.x + zumoX.width > player.x &&
      zumoX.y + zumoX.height > player.y
    ) {
      zumoX.removeZumo();
      //musicBad.play() // Ojo cambiar la musica al coger una vida
      this.addBotel()
      
    }
    
    
    
    //if (player.remainingLife < 3 && player.remainingLife > 0) {
        //  player.remainingLife = player.remainingLife + 1;
        // window.alert(player.remainingLife)
        //heart[0].parentNode.removeChild(heart[0]);
        //}
    };
    
    this.addBotel = function () {
    var botel = document.createElement ("span")
    botel.setAttribute("class", "botel")
    botel.style.height = 55 + "px"
    botel.style.width = 55 + "px"
    botel.style.left = 640 + "px"
    botel.style.top = 640 + "px"
    board.appendChild(botel)

  }
}

export { ZumoX };
