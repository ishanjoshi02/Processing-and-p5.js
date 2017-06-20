function Particle(x, y, r) {
  this.r = r
  this.body = Bodies.circle(x, y, this.r)
  World.add(world, this.body)
}

Particle.prototype.show = function () {
  var pos = this.body.position;

  fill(255)
  stroke(255)
  push()
  translate(pos.x, pos.y)
  ellipse(0, 0, this.r*2)
  pop()
}
