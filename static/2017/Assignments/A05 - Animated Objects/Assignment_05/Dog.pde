class Dog { //Dog object

  //Variables
  PVector p, v;
  float angle, speed, accel;
  
  Dog() {
    p = new PVector(random(35, width-35), height/64*55);
    v = new PVector(1, 0);
    angle = -15; //Dog's starting angle
    speed = 0;
    accel = 0.1;
  }
  
  //funky rotation display function
  void display() { 
    tint(255); //display the dog at full brightness
    pushMatrix(); //push Neo
    translate(p.x, p.y); //google translate that image, quick
    
    if (!frozen) { //if time is not frozen...
      rotate(radians(angle)); //rotate that sucker!
    }
    
    image(dog, 0, 0, 70, 70); //display the dog
    popMatrix(); //pop Neo
  }
  
  //move function
  void move() { 
    if (!frozen) {//if time is not frozen, move that sucker!
      p = p.add(v);
      angle += speed; //next level rotation code
      speed += accel;
    }
  }
  
  //update function
  void update() {
    if (p.x >= (width-35)) { //if the dog hits the wall, reverse speed
      v = v.set(-1, 0);
    } else if (p.x <= 35) { //same as before
      v = v.set(1, 0);
    }

    if (speed >= 2) { //if the dog is rotating too fast, reverse acceleration
      accel = -0.1;
    } else if (speed <= -2) { //same as before
      accel = 0.1;
    }
  }
}