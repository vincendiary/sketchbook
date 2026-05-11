// ============================== [ 12. OPTIONS SCREEN ] ============================== //

//Same old, same old

void optionsMenu() { //Draws the options menu

  //background
  tint(125, 125, 150);
  image(chalkboard, 0, 0, width, height);
  
  //Display all three buttons
  main.display();
  music.display();
  rainbow.display();
  
  //Title. Ok, not exactly. It says options.
  textFont(title);
  textSize(84);
  textAlign(CENTER,CENTER);
  fill(darkpink);
  text("Options", width/2*1.01, height/5*1.02);
  fill(pink);
  text("Options", width/2, height/5);
  
  //Button functionality
  if (main.click()) { //If the main menu button is clicked, return to the main menu
    state = 0;
    mousePressed = false;
    
  } else if (music.click()) { //If the music button is clicked...
  
    //Check whether music is currently on or off
    if (musicOn) { //If it's on, turn it off please
      music.t = "Music: OFF";
      musicOn = false;
    } else if (!musicOn) { //If it's off, turn those tunes up!
      music.t = "Music: ON";
      musicOn = true;
    }
    mousePressed = false;
    
  } else if (rainbow.click()) { //If the rainbow button is clicked
  
    //Check whether rainbow mode is currently on or off
    if (rainbowOn) { //If it's on, sleepy pink dream time
      rainbow.t = "Rainbow: OFF";
      rainbowOn = false;
    } else if (!rainbowOn) { //If it's off, time to go to the club
      rainbow.t = "Rainbow: ON";
      rainbowOn = true;
    }
    mousePressed = false;
  }
}