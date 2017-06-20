class Rectangle {
  
  float top, bottom, right, x;
  
  Rectangle(float x, float y, float w, float h) {
    
    left = x;
    right = x + w;
    top = y;
    bottom = y + h;
    
  }
  
  boolean intersect(Rectangle other) {
  
    return !(this.left > other.right || this.right < other.left || this.top > other.bottom 
        || this.bottom < other.top); 
    
  }
}