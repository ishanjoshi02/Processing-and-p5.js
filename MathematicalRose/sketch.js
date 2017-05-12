var k = 5 / 200;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(52);

  translate(width/2, height/2);

  noFill();
  beginShape();
  for(var a = 0; a < TWO_PI*200; a += 0.01) {
    var r = 200 * cos(k * a);
    var x = r * cos(a);
    var y = r * sin(a);

    stroke(255);
    vertex(x,y);
  }
  endShape(CLOSE);

}
