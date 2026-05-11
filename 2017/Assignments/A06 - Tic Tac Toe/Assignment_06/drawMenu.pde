void drawMenu() { //barebones menu
  
  background(0);
  tint(#FFFFFF,80);
  image(kingsrow, 0, 0, width, height); //draw a tinted image of king's row
  
  //display la 3 buttons
  ai.display();
  two.display();
  exit.display();
  
  //display la sub-title
  fill(255);
  textSize(72);
  text("Tic-Tac-Toe", width/2, height/32*9);
  
  //display la actual title
  tint(#FFFFFF);
  image(title,width/16,height/8);
  
  //click detecto
  if (ai.click()) { //one player
    
    singleplayer = true; //enable singleplayer
    state++; //move onto game
    mousePressed = false;
    
  } else if (two.click()) { //two player
    
    singleplayer = false; //disable singleplayer
    state++; //move onto game
    mousePressed = false;
    
  } else if (exit.click()) {
    exit(); //goodbye
  }
}