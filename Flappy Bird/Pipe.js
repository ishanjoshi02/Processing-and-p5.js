function Pipe() {
  this.top = random(height/2)
  this.bottom = random(height/2)
  this.x = width
  this.w = 20
  this.speed = 3
  this.highlight = false

  this.show = function() {
    if(this.highlight) {
      fill(255, 0, 0)
    } else {
      fill(255)
    }
    rect(this.x, 0, this.w, this.top)
    rect(this.x, height - this.bottom, this.w, this.bottom)
  }

  this.update = function() { this.x -= this.speed }

  this.offscreen = function() { return (this.x < -this.w) }

  this.hits = function(bird) {
    return ((bird.y < this.top || bird.y > height - this.bottom) &&
        (bird.x > this.x && bird.x < this.x + this.w) &&
        (this.highlight = true))
  }

}
