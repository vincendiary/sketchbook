// ============================== [ 11. MAIN MENU SCREEN ] ============================== //

//Three buttons, WHOA
//Yes, it's true. I really am a self-proclaimed object connoisseur!

void mainMenu() { //Function to draw the main menu
  
  //Background
  tint(125, 125, 150);
  image(chalkboard, 0, 0, width, height);
  
  //Display all three buttons
  start.display();
  options.display();
  exit.display();
  
  //Title. No, seriously it's just the title
  textFont(title);
  textSize(84);
  fill(darkpink);
  text("Breakout", width/2*1.01, height/5*1.02);
  fill(pink);
  text("Breakout", width/2, height/5);
  
  //Button clicking
  if (start.click()) { //If the start button is clicked, state = game and make a new game object (reset)
    state = 2;
    breakout = new game();
    mousePressed = false;
  } else if (options.click()) { //If the options button is clicked, options screen now
    state = 1;
    mousePressed = false;
  } else if (exit.click()) { //If the exit button is clicked... then ok, bye.
    exit();
  }
}