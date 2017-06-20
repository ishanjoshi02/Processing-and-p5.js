class Puck {
  float x = width/2;
  float y = height/2;
  float xspeed = 3;
  float yspeed = -1;

  void checkPaddle(Paddle p) {
    if (x > p.x && y < p.y + p.h/2 && y > p.y - p.h/2) {
      xspeed *= -1;
    }
  }

  void update() {
    x += xspeed;
    y += yspeed;
  }
  
  void edges() {
    if (y < 0 || y > height) {
      yspeed *= -1;
    } else if (x < 0 ) {
    } else if (x > width) {
    }
  }
  
  void reset() {
    x = width/2;
    y = height/2;
  }
  
  void show() {
    fill(255);
    ellipse(x,y, 24, 24);
  }
}