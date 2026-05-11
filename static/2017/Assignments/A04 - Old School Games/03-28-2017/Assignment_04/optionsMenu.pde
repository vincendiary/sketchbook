void optionsMenu() {
  //background
  tint(125, 125, 150);
  image(chalkboard, 0, 0, width, height);
  
  main.display();
  
  if (main.click()) {
    state = 0;
    mousePressed = false;
  }
}