function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.r = 16;
    this.xdir = 0;
    this.ydir = 1;

    this.show = function() {
        fill(235);
        noStroke();
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    this.update = function() {
        this.x += this.xdir
        this.y += this.ydir

        if(this.hitsEdges()) {
          console.log('Edge Hit');
        }

    }

    this.hitsBlock = function(block) {
        var distX = abs(this.x - block.x)
        var distY = abs(this.y - block.y)

        if ((distX == block.w / 2 || distY == block.h / 2 + 15) &&
            ((this.x > block.x && this.x < block.x + block.w))) {
            console.log("Block Hit")
            this.xdir *= -1
            this.ydir *= -1
            block.del = true
        }

    }

    this.hitsBoard = function(board) {
        var distX = abs(this.x - board.x - board.w / 2)
        var distY = abs(this.y - board.y - board.h / 2)

        if (distX == 0 || distY == 0) {
            console.log("Board Hit")
            this.xdir *= -1
            this.ydir *= -1
        }

    }

    this.hitsEdges = function() {}
      return (this.x > width || this.x < 0 || this.y < 0 || this.y > height)
    }
