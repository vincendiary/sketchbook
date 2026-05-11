class Game {
  
  int score, map, round, selectedTower;
  boolean gameover;
  
  Game(int tempM) {
    map = tempM;
    score = 0;
    round = 0;
    selectedTower = 0;
    gameover = false;
  }
  
  // if map = 0, grass
  // if map = 1, snow
  // if map = 2, ethereal
  
  void setMap() {
    //no map cause ben hahahahahabhahahahaha
  }
  
  void reset() {
    for (int i = 0; i < cols; i++) {
      for (int j = 0; j < rows; j++) {
        board[i][j] = new Cell(cols*i, rows*j,(cols+rows)/2);
      }
    }
  }
  
  void display() {
    for (int i = 0; i < cols; i++) {
      for (int j = 0; j < rows; j++) {
        board[i][j].display();
      }
    }
  }
  
  void interaction() {
    for (int i = 0; i < cols; i++) {
      for (int j = 0; j < rows; j++) {
        board[i][j].click(mouseX, mouseY,selectedTower);
      }
    }
  }
  
}