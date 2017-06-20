var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies
  var boxs = [];
  var engine;
  var world;
  var ground;
  var particles = []
  var plinkos = []
  var cols = 5, rows = 5
  var off
  var spacing = 150

function setup() {
  createCanvas(600, 600)
  engine = Engine.create()
  world = engine.world

  off = false

  for(var i = 0; i < rows; i++)
    for(var j = 0; j < cols; j++) {
      if (off) {
          translate(spacing, 0)
          off = false
      } else {
        off = true
      }
      plinkos.push(new Plinko(i*spacing, j*spacing, 15))
    }

}

function draw() {

  if(frameCount % 60 == 0) {
    particles.push(new Particle(300, -100, 10))
  }

  background(51)
  Engine.update(engine)
  particles.forEach(function(particle) { particle.show() },this)
  plinkos.forEach(function(plinko) { plinko.show() },this)
}
