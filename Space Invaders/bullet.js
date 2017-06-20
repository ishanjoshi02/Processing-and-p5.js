function Bullet(x, y) {
    this.x = x;
    this.y = y;
    this.r = 8;
    this.toDelete = false;

    this.show = function() {
        fill(2, 136, 209);
        noStroke();
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    this.move = function() {
        this.y = this.y - 5;
    }

    this.hits = function(block) {
        var d = dist(this.x, this.y, block.x, block.y);
        return (d < this.r + block.r);
    }

}