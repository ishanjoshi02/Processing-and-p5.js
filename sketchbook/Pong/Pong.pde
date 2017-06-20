Puck puck;
Paddle left, right;
void setup() {
  size(600, 600);
  puck = new Puck();
  left = new Paddle(true);
  right = new Paddle(false);
}

void draw() {
  
  background(51);
  
  puck.checkPaddle(left);
  puck.checkPaddle(right);
  
  puck.show();
  puck.update();
  puck.edges();
  left.show();
  right.show();
  left.update();
  right.update();
}

void keyReleased() {
  left.move(0);
  right.move(0);
  
}

void keyPressed() {

  switch(key) {
  
    case 'w': {
      left.move(-10);
      break;
    }
    case 's': {
      left.move(10);
      break;
    }
    case 'i': {
      right.move(-10);
      break;
    }
    case 'k': {
      right.move(10);
      break;
    }
  }
  
}