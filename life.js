<<<<<<< HEAD

function Life(x, y, parent){
    var life = this
    this.height = 41
    this.width = 41
    this.x = x
    this.y = y 
    this.sprite = document.createElement("div")
    
    
    
    this.insertLife = function () {
        life.sprite.setAttribute ("class", "life")
        life.sprite.style.position = "absolute"
        life.sprite.style.left = life.x + "px";
        life.sprite.style.top = life.y + "px";
        life.sprite.style.height = life.height + "px"; 
        life.sprite.style.width = life.width + "px";
        parent.appendChild(life.sprite)
    }

}
=======
function Life(x, y, parent){
    var life = this
    this.height = 20
    this.width = 20
    this.x = x
    this.y = y 
    this.sprite = document.createElement("div")
    
    
    
    this.insertLife = function () {
        life.sprite.setAttribute ("class", "life")
        life.sprite.style.position = "absolute"
        life.sprite.style.left = life.x + "px";
        life.sprite.style.top = life.y + "px";
        life.sprite.style.height = life.height + "px"; 
        life.sprite.style.width = life.width + "px";
        parent.appendChild(life.sprite)
    }

}
>>>>>>> 5c16f44655e898d6edbbeb6b05850c0ec2a9f1cd
export {Life}