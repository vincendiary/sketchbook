void gameOver() {
  //draw background
  tint(125, 125, 150);
  image(chalkboard, 0, 0, width, height);
  
  textFont(title);
  textSize(72);
  textAlign(CENTER, CENTER);
  fill(lightpink);
  text("game over!", xcenter, ycenter-150);
  fill(lightblue);
  text("final score: " + str(breakout.points), xcenter, ycenter-50);
  
  main.display();
  
  if (main.click()) {
    state = 0;
    mousePressed = false;
  }
}