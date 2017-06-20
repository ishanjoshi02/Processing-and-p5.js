Frog frog;

float grid = 50;

void setup() {

  size(640, 480);
  frog = new Frog(100, 100, grid);
  
}

void draw() {

  background(51);
  frog.show();

}

void keyPressed() {

  switch(keyCode) {
  
    case UP: {
      frog.move(0, -1);
    }
    
    case DOWN: {
      frog.move(0, 1);
    }
    
    case RIGHT: {
      frog.move(1, 0);
    }
    
    case LEFT: {
      frog.move(-1, 0);  
    }
    
  }

}