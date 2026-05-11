class Rain { //Rain object

  //Variables
  PVector p, v, a, prev; //prev is a variable to store the PVector when time freezes
  float w, h, life; //life is used to determine the longevity of a single rain object
  color c;
  boolean splashed; //used later on for splashing rain

  Rain() {
    p = new PVector(random(0, width), -30);
    prev = new PVector(0, 0);
    v = new PVector(0, 0);
    a = new PVector(0, 0.1);
    w = random(2, 4);
    h = random(20, 40);
    life = 255;
    
    if (!colours) { //Decides the colour of the rain based on whether rainbow mode is on or not
      c = color(random(95, 121), random(127, 148), random(155, 175)); //regular blues
    } else {
      c = color(random(100,200), random(100,200), random(100,200)); //random colours
    }
  }
  
  //Display function
  void display() {
    fill(c,life); //colour
    if (!splashed) { //if the rain has not yet splashed...
      rect(p.x, p.y, w, h, 2); //rectangle
    } else { //if the rain has splashed...
      ellipse(p.x, p.y, w, w); //circle
    }
  }
  
  //Move function
  void move() {
    p = p.add(v); //makes the rain fall according to gravity
    v = v.add(a);
  }
  
  //Boolean function to kill the rain after a certain amount of time
  boolean finished() {
    if (!frozen) {
      life -= 1.0;
    }

    if (life < 0) { 
      return true;
    } else { 
      return false;
    }
  }
  
  //Collision function with the ground
  void collision() {

    if ( p.y >= height/8*7 && !splashed) { //if the rain has hit the ground and is a rectangle

      splashed = true; //make it splash
      p.y = p.y - random(10, 100); //move it back up
      
    } else if ( p.y >= height/8*7 && splashed) { //if the rain has hit the ground but has already splashed

      p.y = p.y - random(10, 100); //move it back up
      
    } else if ((p.x - w/2) >= (red.getX() - 45) && //UMBRELLA & RAIN COLLISION DETECTION START!!
               (p.x + w/2) <= (red.getX() + 45) &&
               (p.y + h/2) >= (red.getY() - 40) &&
               (p.y + h/2) <= (red.getY() + 40)) { 

                splashed = true; //it splashed on the umbrella
                
                p.x = red.getX() + random(-60, 60); //moves it to a random x and y position
                p.y = red.getY() - random(40, 100);
                
    }
  }
}