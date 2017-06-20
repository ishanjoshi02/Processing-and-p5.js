var ship;
var blocks = [];
var bullets = [];

function setup() {
    createCanvas(600, 400);
    ship = new Ship();
    for (var i = 0; i < 6; i++) {
        blocks.push(new Block(i * 80 + 80, 20))
    }
}

function draw() {
    background(51);
    ship.show();
    ship.move();
    var edge = false;
    blocks.forEach(function(element) {
        element.show();
        element.move();
        if (element.x > width || element.x < 0) {
            edge = true;
        }
    }, this);
    for (var i = 0; i < bullets.length; i++) {
        bullets[i].show();
        bullets[i].move();

        for (var j = 0; j < blocks.length; j++) {
            if (bullets[i].hits(blocks[j])) {
                blocks[j].respawn();
                bullets[i].toDelete = true;
            }
        }
    }
    if (edge) {
        blocks.forEach(function(element) {
            element.shiftDown();
        }, this);
    }
    for (var i = bullets.length - 1; i >= 0; i--) {
        if (bullets[i].toDelete) {
            bullets.splice(i, 1);
        }
    }
}

function keyReleased() {
    ship.setDir(0);
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        ship.setDir(1);
        console.log("RIGHT");
    }
    if (keyCode == LEFT_ARROW) {
        ship.setDir(-1);
    }
    if (keyCode === UP_ARROW) {
        bullets.push(new Bullet(ship.x, height / 2 + 100));
    }
}