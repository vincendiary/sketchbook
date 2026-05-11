// ============================== [ 10. GAME OVER SCREEN ] ============================== //

//I'm sure I don't have to explain this...
//But I will.
//Because I'm a sweetheart.

void gameOver() { //Function to draw the game over menu

  //draw background
  tint(125, 125, 150);
  image(chalkboard, 0, 0, width, height);
  
  //Cool text detailing your score
  textFont(title);
  textSize(72);
  textAlign(CENTER, CENTER);
  fill(lightpink);
  text("game over!", xcenter, ycenter-150);
  fill(lightblue);
  text("final score: " + str(breakout.points), xcenter, ycenter-50);
  
  //Display the button to return home
  main.display();
  
  //If its clicked, go back to the main menu
  if (main.click()) {
    state = 0;
    mousePressed = false;
  }
}