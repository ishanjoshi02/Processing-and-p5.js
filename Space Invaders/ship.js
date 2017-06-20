function Ship() {
    this.x = width / 2;
    this.xdir = 0;
    this.show = function() {
        fill(235);
        rectMode(CENTER);
        rect(this.x, height - 20, 20, 70);
    }
    this.move = function() {
        this.x += this.xdir;
    }
    this.setDir = function(dir) {
        this.xdir = dir * 10;
    }
}