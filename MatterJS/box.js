function Box(x, y, w, h) {
  this.body = Bodies.rectangle(x, y, w, h)
  World.add(world, this.body)
  this.w = w
  this.h = h
  this.red = round(random(0,255))
  this.green = round(random(0,255))
  this.blue = round(random(0,255))

  this.show = function() {
    var pos = this.body.position
    var angle = this.body.angle;
    push()
    translate(pos.x, pos.y)
    rotate(angle)
    noStroke()
    fill(this.red, this.green, this.blue)
    rectMode(CENTER)
    rect(0, 0, this.w, this.h)
    pop()
  }
}
