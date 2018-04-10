var score = 0;
document.getElementById('playerScore').innerHTML = score;

// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed*dt;
    if(this.x > 505) {
        this.x = 0;
        this.speed = 100 + Math.floor(Math.random() * 200);
    }

    if(player.x <= this.x + 60 &&
        player.x + 37 >= this.x &&
        player.y <= this.y + 25 &&
        player.y + 30 >= this.y) {
            player.x = 202;
            player.y = 415;
        }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function() {
    this.x = 202;
    this.y = 415;

    this.sprite = 'images/char-boy.png';
}

Player.prototype.update = function() {

}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player();

enemy = new Enemy(0, 83, Math.floor(Math.random() + 1) * 200);
enemy1 = new Enemy(0, 166, Math.floor(Math.random() + 1) * 200);
enemy2 = new Enemy(0, 249, Math.floor(Math.random() + 1) * 200);
const allEnemies = [enemy, enemy1, enemy2];


Player.prototype.handleInput = function(input) {
    switch(input){
        case 'left': 
            if(this.x <= 100) {
                this.x = this.x;
            }
            else {
                this.x -= 101;
            }
            break;
        case 'right': 
            if(this.x >= 304) {
                this.x = this.x;
            }
            else {
                this.x += 101;
            }
            break;
        case 'up': 
            if(this.y === 0) {
                this.x = 202;
                this.y = 415;
                score++;
                document.getElementById('playerScore').innerHTML = score;
            }
            else {
                this.y -= 83;
            }
            break;
        case 'down': 
            if (this.y >= 415){
                this.y = this.y;
            }
            else {
                this.y += 83;
            }    
            break;
    }
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
