function Blob(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;

    this.show = function() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
    }

    this.update = function() {
        var mouse = createVector(mouseX - width/2, mouseY - height/2);
        mouse.setMag(3);
        this.pos.add(mouse);
    }

    this.eats = function(other) {
        var d = p5.Vector.dist(this.pos, other.pos);
        if (d < this.r + other.r) {
            // this.r += other.r * 0.2;
            var sum = PI * this.r * this.r + PI * other.r * other.r;
            this.r = sqrt(sum/PI);
            return true;
        }
        return false;
    }

}