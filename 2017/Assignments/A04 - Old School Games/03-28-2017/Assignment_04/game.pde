class game {
  int points, lives;
  boolean active, paused;

  game() {
    points = 0;
    lives = 3;
    active = false;
    paused = false;
  }

  void build() {
    for (int i=0; i<(numBricks*numRows); i++) {
      bricks[i].display();
    }
  }

  void reset() {
    for (int i=0; i<(numBricks*numRows); i++) {
      bricks[i] = new brick((i%13)*60+40, (i/13)*40+30);
    }
  }
  
  void points() {
    points += int(random(18,23));
  }
  
  int collision() {
    float x,y;
    int hit;
    x = ball.getX();
    y = ball.getY();
    
    hit = 46;
    
    if (y >= 15 && y <= 45) { //Row 1
    
      if (x >= 15 && x <= 65 ) { hit = 0;} //Column 1
        else if (x >= 75 && x <= 125) { hit = 1; }
        else if (x >= 135 && x <= 185) { hit = 2; }
        else if (x >= 195 && x <= 245) { hit = 3; }
        else if (x >= 255 && x <= 305) { hit = 4; }
        else if (x >= 315 && x <= 365) { hit = 5; }
        else if (x >= 375 && x <= 425) { hit = 6; }
        else if (x >= 435 && x <= 485) { hit = 7; }
        else if (x >= 495 && x <= 545) { hit = 8; }
        else if (x >= 555 && x <= 605) { hit = 9; }
        else if (x >= 615 && x <= 665) { hit = 10; }
        else if (x >= 675 && x <= 725) { hit = 11; }
        else if (x >= 735 && x <= 785) { hit = 12; }
        
    } else if (y >= 55 && y <= 85) { //Row 2
      
      if (x >= 15 && x <= 65 ) { hit = 13;} //Column 1
        else if (x >= 75 && x <= 125) { hit = 14; }
        else if (x >= 135 && x <= 185) { hit = 15; }
        else if (x >= 195 && x <= 245) { hit = 16; }
        else if (x >= 255 && x <= 305) { hit = 17; }
        else if (x >= 315 && x <= 365) { hit = 18; }
        else if (x >= 375 && x <= 425) { hit = 19; }
        else if (x >= 435 && x <= 485) { hit = 20; }
        else if (x >= 495 && x <= 545) { hit = 21; }
        else if (x >= 555 && x <= 605) { hit = 22; }
        else if (x >= 615 && x <= 665) { hit = 23; }
        else if (x >= 675 && x <= 725) { hit = 24; }
        else if (x >= 735 && x <= 785) { hit = 25; }
        
    } else if (y >= 95 && y <= 125) {
      
      if (x >= 15 && x <= 65 ) { hit = 26;} //Column 1
        else if (x >= 75 && x <= 125) { hit = 27; }
        else if (x >= 135 && x <= 185) { hit = 28; }
        else if (x >= 195 && x <= 245) { hit = 29; }
        else if (x >= 255 && x <= 305) { hit = 30; }
        else if (x >= 315 && x <= 365) { hit = 31; }
        else if (x >= 375 && x <= 425) { hit = 32; }
        else if (x >= 435 && x <= 485) { hit = 33; }
        else if (x >= 495 && x <= 545) { hit = 34; }
        else if (x >= 555 && x <= 605) { hit = 35; }
        else if (x >= 615 && x <= 665) { hit = 36; }
        else if (x >= 675 && x <= 725) { hit = 37; }
        else if (x >= 735 && x <= 785) { hit = 38; }
      
    } else if (y >= 135 && y <= 165) {
      
      if (x >= 15 && x <= 65 ) { hit = 39;} //Column 1
        else if (x >= 75 && x <= 125) { hit = 40; }
        else if (x >= 135 && x <= 185) { hit = 41; }
        else if (x >= 195 && x <= 245) { hit = 42; }
        else if (x >= 255 && x <= 305) { hit = 43; }
        else if (x >= 315 && x <= 365) { hit = 44; }
        else if (x >= 375 && x <= 425) { hit = 45; }
        else if (x >= 435 && x <= 485) { hit = 46; }
        else if (x >= 495 && x <= 545) { hit = 47; }
        else if (x >= 555 && x <= 605) { hit = 48; }
        else if (x >= 615 && x <= 665) { hit = 49; }
        else if (x >= 675 && x <= 725) { hit = 50; }
        else if (x >= 735 && x <= 785) { hit = 51; }
      
    }
    
    return hit;
  }
}