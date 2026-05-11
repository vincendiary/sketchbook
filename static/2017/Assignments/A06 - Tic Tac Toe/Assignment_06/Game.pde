class Game { //I had to document this before so i wouldn't get myself confused and lost.

  //welcome to the reckoning.
  
  //simple variables
  int player, winner, full;
  boolean gameover;

  Game() {
    player = 0; //starts off with player one
    winner = 0; //no winner. not yet.
    full = 0; //used to check whether a tie has occurred. Further explanation found below in checkWin()
    gameover = false; //game is not over yet.
  }

  void reset() {
    for (int i = 0; i < cols; i++) { //resets the board using a for loop. 
      for (int j = 0; j < rows; j++) { //creates new cells to play with.
        board[i][j] = new Cell(width/3*i, height/3*j, width/3, height/3);
      }
    }
  }

  void display() {
    for (int i = 0; i < cols; i++) { //displays every cell on the board
      for (int j = 0; j < rows; j++) { //using a for loop, again.
        board[i][j].display();
      }
    }
  }
  
  void interaction() {
    for (int i = 0; i < cols; i++) { //what's this, another one??
      for (int j = 0; j < rows; j++) { //it's just mouse interaction with the cells.
        board[i][j].click(mouseX, mouseY);
      }
    }
  }
  
  void checkWin() { //The beast among beasts... until we get to player 3, anyway.
  
  for (int i = 0; i < cols; i++) { //for loop used all throughout.

           //==========[ Check vertical & horizontal for both cross and circle ]==========//
           
           //-----[ CROSS BEGINS HERE ]-----//
           
           if (board[i][0].getState() == 1 &&
               board[i][1].getState() == 1 &&
               board[i][2].getState() == 1) { //detects whether any vertical column contains all crosses...
               
               //Cross win vertical
               winner = 1; //set winner to cross
               gameover = true; //end game
        
    } else if (board[0][i].getState() == 1 &&
               board[1][i].getState() == 1 &&
               board[2][i].getState() == 1) { //detects whether any horizontal row contains all crosses...

               //Cross win horizontal
               winner = 1;
               gameover = true;
               
           //-----[ CIRCLE BEGINS HERE ]-----//
               
    } else if (board[i][0].getState() == 2 &&
               board[i][1].getState() == 2 &&
               board[i][2].getState() == 2) { //detects whether any vertical column contains all circles...

               //Circle win vertical
               winner = 2;
               gameover = true;
               
    } else if (board[0][i].getState() == 2 &&
               board[1][i].getState() == 2 &&
               board[2][i].getState() == 2) { //detects whether any horizontal row contains all circles...

               //Circle win horizontal
               winner = 2;
               gameover = true;
    }

           //==========[ Check diagonals for both cross and circle ]==========//
           
           //-----[ CROSS BEGINS HERE ]-----//
           
           if (board[0][0].getState() == 1 &&
               board[1][1].getState() == 1 &&
               board[2][2].getState() == 1) { //if diagonal from top left to bottom right are all crosses...
  
               //Cross win diagonal [\] <-- what it looks like
               winner = 1;
               gameover =  true;
        
    } else if (board[0][2].getState() == 1 &&
               board[1][1].getState() == 1 &&
               board[2][0].getState() == 1) { //if diagonal from top right to bottom left are all crosses...

               //Cross win diagonal [/]
               winner = 1;
               gameover = true;
               
           //-----[ CIRCLE BEGINS HERE ]-----//
               
    } else if (board[0][0].getState() == 2 &&
               board[1][1].getState() == 2 &&
               board[2][2].getState() == 2) { //if diagonal from top left to bottom right are all circles...

               //Circle win diagonal [\]
               winner = 2;
               gameover = true;
               
    } else if (board[0][2].getState() == 2 &&
               board[1][1].getState() == 2 &&
               board[2][0].getState() == 2) { //if diagonal from top right to bottom left are all circles...

               //Circle win diagonal [/]
               winner = 2;
               gameover = true;
    }
  }
  
    if (full == 9) { //if full = 9, ie: all cells have been filled...
      gameover = true; //end the game in a tie.
    }
  
  }
  
  /*
  
  the big reveal! yes! i did go off and code an AI.
  it is of course, the legendary third player that i have spoke of.
  mind you, she is quite smart, but not perfect in any sense of the word.
  so please do not blame me if she misses an easy win. thank you.
  
  please look forward to it.
  
  */
  void AI() { //I documented this as i went... because if i did not, i would be very, very lost.
    if (player == 2) { //if it is the AI's turn...
    
      for (int i = 0; i < cols; i++) { //initialize for loop central
        for (int j = 0; j < rows; j++) { //this one is only used @ the end
                       
          //===============[ VERTICAL, HORIZONTAL CHECKS BEGIN HERE ]===============//
                       
                       //vertical, row 1 check
                       
                   if (board[i][0].getState() != 2 && //is not circle
                       board[i][1].getState() == 1 &&
                       board[i][2].getState() == 1) { //checks if the bottom 2 rows are crosses and the top row is not a circle.
              
                       board[i][0].click(width/3*i + width/6, height/3*0 + width/6); //clicks accordingly in that position. This repeats further below.
                       
                       if (debug) {println("hit top row");}
                       
                       /* i made all these grids to remind myself where I was
                       
                       [o][o][o] <-- hit this line
                       [x][x][x]
                       [x][x][x]
                       
                       */
                       
                       //vertical, row 2 check
              
            } else if (board[i][0].getState() == 1 &&
                       board[i][1].getState() != 2 &&
                       board[i][2].getState() == 1) { //checks if the top and bottom rows are crosses and the middle row is not a circle.
              
                       board[i][1].click(width/3*i + width/6,height/3*1 + width/6);
                       
                       if (debug) {println("hit middle row");}
                       
                       /*
                       
                       [x][x][x]
                       [o][o][o] <-- hit this line
                       [x][x][x]
                       
                       */
                       
                       //vertical, row 3 check
              
            } else if (board[i][0].getState() == 1 &&
                       board[i][1].getState() == 1 &&
                       board[i][2].getState() != 2) { //checks if the top 2 rows are crosses and bottom is not a circle.
                       
                       board[i][2].click(width/3*i + width/6,height/3*2 + width/6);
                       
                       if (debug) {println("hit bot row");}
                       
                       /*
                       
                       [x][x][x]
                       [x][x][x]
                       [o][o][o] <-- hit this line
                       
                       */
                       
                       //horizontal, column 1 check
                       
            } else if (board[0][i].getState() != 2 &&
                       board[1][i].getState() == 1 &&
                       board[2][i].getState() == 1) { //checks if the right 2 columns are crosses and left is not a circle.
              
                       board[0][i].click(width/3*0 + width/6,height/3*i + width/6);
                       
                       if (debug) {println("hit left col");}
                       
                       /*
                       
                       [o][x][x]
                       [o][x][x]
                       [o][x][x]
                        ^-- hit this line
                       
                       */
                       
                       //horizontal, column 2 check
              
            } else if (board[0][i].getState() == 1 &&
                       board[1][i].getState() != 2 &&
                       board[2][i].getState() == 1) { //checks if the left and right columns are crosses and middle is not a circle.
              
                       board[1][i].click(width/3*1 + width/6,height/3*i + width/6);
                       
                       if (debug) {println("hit mid col");}
                       
                       /*
                       
                       [x][o][x]
                       [x][o][x]
                       [x][o][x]
                           ^-- hit this line
                       
                       */
                       
                       //horizontal, column 3 check
              
            } else if (board[0][i].getState() == 1 &&
                       board[1][i].getState() == 1 &&
                       board[2][i].getState() != 2) { //checks if the left 2 columns are crosses and right is not a circle.
              
                       board[2][i].click(width/3*2 + width/6,height/3*i + width/6);
                       
                       if (debug) {println("hit right col");}
                       
                       /*
                       
                       [x][x][o]
                       [x][x][o]
                       [x][x][o]
                              ^-- hit this line
                       
                       */
                       
            //===============[ DIAGONAL CHECKS BEGIN HERE ]===============//
              
            } else if (board[0][0].getState() != 2 &&
                       board[1][1].getState() == 1 &&
                       board[2][2].getState() == 1) { //I can't really explain these well in text... just look at my diagrams below.
              
                       board[0][0].click(width/3*0 + width/6,height/3*0 + width/6);
                       
                       if (debug) {println("hit diag 1");}
                       
                       /*
                       
                       [o][-][-]
                       [-][x][-]
                       [-][-][x]
                        ^-- hit this spot (designated by circle)
                       
                       */
              
            } else if (board[0][0].getState() == 1 &&
                       board[1][1].getState() != 2 &&
                       board[2][2].getState() == 1) {
              
                       board[1][1].click(width/3*1 + width/6,height/3*1 + width/6);
                       
                       if (debug) {println("hit diag 2");}
                       
                       /*
                       
                       [x][-][-]
                       [-][o][-]
                       [-][-][x]
                           ^-- hit this spot
                       
                       */
              
            } else if (board[0][0].getState() == 1 &&
                       board[1][1].getState() == 1 &&
                       board[2][2].getState() != 2) {
              
                       board[2][2].click(width/3*2 + width/6,height/3*2 + width/6);
                       
                       if (debug) {println("hit diag 3");}
                       
                       /*
                       
                       [x][-][-]
                       [-][x][-]
                       [-][-][o]
                              ^-- hit this spot
                       
                       */
              
            } else if (board[0][2].getState() != 2 &&
                       board[1][1].getState() == 1 &&
                       board[2][0].getState() == 1) {
              
                       board[0][2].click(width/3*0 + width/6,height/3*2 + width/6);
                       
                       if (debug) {println("hit diag 4");}
                       
                       /*
                       
                       [-][-][x]
                       [-][x][-]
                       [o][-][-]
                        ^-- hit this spot
                       
                       */
              
            } else if (board[0][2].getState() == 1 &&
                       board[1][1].getState() != 2 &&
                       board[2][0].getState() == 1) {
              
                       board[1][1].click(width/3*1 + width/6,height/3*1 + width/6);
                       
                       if (debug) {println("hit diag 5");}
                       
                       /*
                       
                       [-][-][x]
                       [-][o][-]
                       [x][-][-]
                           ^-- hit this spot
                       
                       */
              
            } else if (board[0][2].getState() == 1 &&
                       board[1][1].getState() == 1 &&
                       board[2][0].getState() != 2) {
              
                       board[2][0].click(width/3*2 + width/6,height/3*0 + width/6);
                       
                       if (debug) {println("hit diag 6");}
                       
                       /*
                       
                       [-][-][o]
                       [-][x][-]
                       [x][-][-]
                              ^-- hit this spot
                       
                       */
              
            } else { //if the AI cannot find any suitable moves, just do a random one!
                       board[i][j].click(width/3*random(3) + 50,height/3*random(3) + 50);
                       //println("hit random");
          }
        }
      }
    }
  }
}