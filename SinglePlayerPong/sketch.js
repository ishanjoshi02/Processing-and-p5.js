var ball;
var blocks = [];
var blockCount = 5;
var board;
var gameSpeed = 1;

function setup() {
    var j = 0
    createCanvas(600, 600);
    ball = new Ball(width / 2, height / 2);
    board = new Board(width / 2, height - 20);
    for (var i = 0; i < blockCount; i++) {
        blocks.push(
            new Block(i * 110 + 80, 30 + j * 30) //get Math Formula to automatically get the x and y coordinates
        )
    }
}

function draw() {
    background(51)
    ball.show()
    ball.update()
    board.show()
    board.update()
    ball.hitsBoard(board)
    blocks.forEach(function(block) {
        ball.hitsBlock(block)
        block.show()
    }, this);
    for (var i = blocks.length - 1; i >= 0; i--) {
        var block = blocks[i]
        if (block.del)
            blocks.splice(i, 1)
    }
}

function keyPressed() {
    switch (keyCode) {
        case RIGHT_ARROW:
            {
                board.move(gameSpeed)
                break
            }
        case LEFT_ARROW:
            {
                board.move(-gameSpeed)
                break
            }
    }
}

function keyReleased() {
    board.move(0);
}