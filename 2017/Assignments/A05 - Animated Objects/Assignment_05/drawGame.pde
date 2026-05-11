void drawGame() { //drawGame function
  
  tint(100); //tints the background images to make them darker
  
  switch(backState) { //switch for image state
    case 0: image(back01, width/2, height/2); break;
    case 1: image(back02, width/2, height/2); break;
    case 2: image(back03, width/2, height/2); break;
    case 3: image(back04, width/2, height/2); break;
    case 4: image(back05, width/2, height/2); break;
    default: image(back01, width/2, height/2); break;
  }
  
  //Puppy functions
  puppersnup.display();
  puppersnup.move();
  puppersnup.update();
  
  //Umbrella functions
  red.display();
  red.update();

  //Freeze button
  if (freeze.click()) { //if button is clicked...
    if (frozen) { //if time is already frozen...
      frozen = false; //unfreeze
    } else if (!frozen) { //if time is not frozen...
      frozen = true; //freeze
    }
    mousePressed = false;
  }
  
  //Rainbow button
  if (rainbow.click()) { //if button is clicked...
    if (colours) { //if rainbow is already random...
      colours = false; //disable rainbow
    } else if (!colours) { //if rainbow is not active...
      colours = true; //enable it
    }
    mousePressed = false;
  }
  
  //Background image button
  if (backdrop.click()) { //If button is clicked...
    if (backState >= 5) { //if the background image state has reached the end...
      backState = 0; //set it back to the beginning
    }
    backState++; //move the background image state forward
    mousePressed = false;
  }
  
  //ArrayList "for" loop for the rain array
  for (Rain r : rain) {
    r.display(); //display rain

    if (!frozen) { //if time is not frozen...
      r.move(); //rain moves
    }
    
    r.collision(); //collision check with ground
  }
  
  //Regular "for" loop for the rain array
  for (int i=0; i < rain.size(); i++) {
    Rain r = rain.get(i);

    if (r.finished()) { //if rain's life span is < 0
      rain.remove(i); //remove it from the ArrayList
    }
  }
  
  //Regular "for" loop to spawn new rain objects
  for (int i=0; i < 5; i++) {
    if (!frozen) { //if time is not frozen...
      rain.add(new Rain()); //add rain!
    }
  }

  if (mouseX >= (red.getX() - 45) && mouseX <= (red.getX() + 45) && mouseY >= (red.getY() - 60) && mouseY <= (red.getY() + 30)) { //If mouse is over umbrella...
    cursor(HAND); //show hand cursor
    if (mousePressed && !frozen) { //if mouse is clicked and time is not frozen
      red.grabbed = true; //the umbrella is being "held"
    } else { //otherwise, let go of the umbrella
      red.grabbed = false;
    }
  } else { //if the mouse is not over the umbrella
    cursor(0); //return to regular cursor
    red.grabbed = false;
  }
  
  //fill and draw for the black rectangle at the bottom of the screen
  fill(#000000,180);
  rect(width/2, height, width, height/4);
  
  //display the 3 main buttons
  freeze.display();
  rainbow.display();
  backdrop.display();
  
  //random thunder code
  if (random(0, 500) > 498 && !frozen) {
    
    fill(255); //big, white flash on screen
    rect(width/2, height/2, width, height);
    
    if (!thunder.isPlaying()) { //if thunder sound is not playing
      thunder.cue(0); //reset it
    }
    thunder.play(); //and play the sound
  }
  
  //small, short black fade-in @ beginning of drawGame
  fill(#000000, opacity);
  rect(width/2, height/2, width, height);
  opacity -= 1;
}