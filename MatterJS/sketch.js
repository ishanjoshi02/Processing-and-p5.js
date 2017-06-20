var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies
  var boxs = [];
  var engine;
  var world;
  var ground;

function setup() {
  createCanvas(window.innerWidth - 4, window.innerHeight - 4)

  engine = Engine.create();
  world = engine.world
  Engine.run(engine)
  var option = {
    isStatic:true
  }
  ground = Bodies.rectangle(200, height, width, 60, option)
  World.add(world, ground)
}

function mousePressed() {
  boxs.push(new Box(mouseX, mouseY, 20, 20))
}

function mouseDragged() {
  boxs.push(new Box(mouseX, mouseY, 20, 20))
}

function draw() {
  background(55)
  // fill(255)
  for (var i = 0; i < boxs.length ;  i++ ) {
    boxs[i].show()
  }

  fill(255)
  noStroke()
  rect(200, height, width, 60)

}
