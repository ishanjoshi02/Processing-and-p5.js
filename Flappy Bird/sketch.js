var bird
var pipes = []

function setup() {
  createCanvas(600, 600)
  bird = new Bird()
  pipes.push(new Pipe)
}

function draw() {
  background(0)
  bird.show()
  bird.update()
  pipes.forEach(function(pipe){
    pipe.show()
    pipe.update()
    if (pipe.hits(bird)){
      console.log("HIT")
    }
  },this)
  if (frameCount % 100 == 0)
    pipes.push(new Pipe())
  for (var i = pipes.length - 1; i >= 0 ; i-- ) {
    if(pipes[i].offscreen())
      pipes.splice(i, 1)
  }
}

function keyPressed() {
  if (key == ' ') {
    console.log("SPACE")
    bird.up()
  }
}
