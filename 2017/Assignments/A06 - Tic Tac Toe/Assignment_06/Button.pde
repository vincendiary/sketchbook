class Button { //we've gone over this a million times now...

  //variables
  PVector p;
  float w, h, o; //o = opacity
  String t;

  Button(String text, float tempX, float tempY) {
    p = new PVector(tempX, tempY);
    w = width; //the entire width of the window! Yeah, we're cool now!
    h = 60; //not the entire height...
    o = 0; //opacity starts at 0
    t = text; //it's simple stuff, really.
  }

  void display() {
    noStroke(); //i do not like strokes
    o -= 2; //"fading away" effect... i like it :D
    
    if (mouseOver(p.x,p.y,w,h)) { //if mouse is over button...
      o = 100; //set the opacity to 100
      if (click()) { //if mouse clicks...
        o = 150; //set opacity to 150
      } 
    }
    
    fill(#E8E8E8, o); //fill grey, according to opacity
    rect(p.x, p.y, w, h); //draw rectangle

    fill(#FFFFFF);
    textSize(32); //draw text on button
    text(t, p.x+w/2, p.y+h/2);
  }
  
  boolean mouseOver(float x, float y, float w, float h) { //the same rollover function as before, now tuned for corner mode!
    if (mouseX >= (x) && mouseX <= (x+w) && mouseY >= (y) && mouseY <= (y+h)) {
          return true;
        } else {
          return false;
        }
  }
  
  boolean click() { //oh yes, tuned for corner mode as well!
    if (mouseOver(p.x, p.y, w, h) == true) {
      if (mousePressed) {
        
        if ( !hit.isPlaying() ) { //this is new? Ah yes, the audio for button clicks.
          hit.cue(0); //if it's not playing, reset it,
        }
        hit.play(); //and play it.
          
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}