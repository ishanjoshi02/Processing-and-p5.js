function Block(x, y) {
    this.x = x;
    this.y = y;
    this.r = 30;
    this.xdir = 1;
    this.show = function() {
        fill(235);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
    this.respawn = function() {
        this.r = this.r + 2;
    }
    this.move = function() {
        this.x += this.xdir;

    }
    this.shiftDown = function() {
        this.xdir *= -1;
        this.y += this.r;
    }
}