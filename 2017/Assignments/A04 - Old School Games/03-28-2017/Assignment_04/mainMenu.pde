void mainMenu() {
  tint(125, 125, 150);
  image(chalkboard, 0, 0, width, height);
  
  start.display();
  options.display();
  exit.display();
  
  //Title
  textFont(title);
  textSize(84);
  fill(darkpink);
  text("Breakout", width/2*1.01, height/5*1.02);
  fill(pink);
  text("Breakout", width/2, height/5);
  
  if (start.click()) {
    state = 2;
    breakout = new game();
    mousePressed = false;
  } else if (options.click()) {
    state = 1;
    mousePressed = false;
  } else if (exit.click()) {
    exit();
  }
}