class Paddle {
  
  float x, y, h, w, gap;
  float ychange = 0;
  Paddle(boolean left) {
    gap = 10;
    if (left) {
      this.x = w;
    } else {
      x = width - w;
    }
    this.y = height/2;
    this.w = 25;
    this.h = 100;
  }
  void update() {
    y += ychange;
    y = constrain(y, 0, height);
  }
  
  void move(float steps) {
    ychange = steps;
  }
  void show() {
    fill(255);
    rectMode(CENTER);
    rect(x, y, w, h);
  }
}