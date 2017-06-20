function Board(x, y) {
    this.x = x
    this.y = y
    this.w = 100
    this.h = 20
    this.xdir = 0

    this.show = function() {
        fill(3, 169, 244)
        rectMode(CENTER)
        rect(this.x, this.y, this.w, this.h)
    }

    this.update = function() {
        this.x += this.xdir;
    }

    this.move = function(dir) {
        this.xdir = dir
    }

}