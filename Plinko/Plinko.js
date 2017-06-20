function Plinko(x, y, r) {
  var options = {
    isStatic:true
  }
  this.r = r
  this.body = Bodies.circle(x, y, this.r, options)
  World.add(world, this.body)
}

Plinko.prototype.show = function () {
  var pos = this.body.position;

  fill(0, 255, 0)
  stroke(255)
  push()
  translate(pos.x, pos.y)
  ellipse(0, 0, this.r*2)
  pop()
}
