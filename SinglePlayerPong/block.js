function Block(x, y) {
    this.x = x
    this.y = y
    this.w = 100
    this.h = 20
    this.del = false;

    this.show = function() {
        fill(255, 0, 100)
        rectMode(CENTER)
        rect(this.x, this.y, this.w, this.h)
    }

}