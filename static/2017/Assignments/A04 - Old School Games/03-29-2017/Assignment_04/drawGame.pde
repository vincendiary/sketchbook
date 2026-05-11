// ============================== [ 08. GAME MENU SCREEN ] ============================== //

void drawGame() { //Function to draw the game. No, really.

  //Background
  tint(60, 60, 80);
  image(chalkboard, 0, 0, width, height);

  //Draw bricks
  breakout.build();

  //Draw paddle and ball
  player.display();
  ball.display();
  
  //Draw the pretty text at the bottom
  fill(lightblue);
  
  textFont(body);
  textSize(20);
  textAlign(LEFT, CENTER);
  text("lives: " + str(breakout.lives), 20, height/64*63); //Uses the value inside of the game class because I love objects

  textFont(body);
  textSize(20);
  textAlign(RIGHT, CENTER);
  text("points: " + str(breakout.points), width-20, height/64*63); //Uses the value inside of the game class because I love objects v.2

  if (breakout.active) { //If the game is active...
    ball.move(); //Get the ball moving!

    if (breakout.paused) { //If the game is paused, give them a reminder that hey, you paused the game, buddy.
      textFont(body);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Paused", xcenter, ycenter);
    } else { //If the game is not paused, give them a reminder that hey, you can pause the game, buddy.
      textFont(body);
      textSize(20);
      textAlign(CENTER, CENTER);
      text("Click anywhere to pause", xcenter, height/64*63);
    }
  } else { //If the game is not active (ie: ball went off-screen)
    ball.rest(); //Ball go back to the rest position atop the paddle
    breakout.reset(); //Reset the game

    textFont(body); //Display cute text reminding them that hey, click to start the game, buddy
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(pink);
    text("Click anywhere to start", xcenter, ycenter); 
  }

  if (ball.missed()) { //If the ball misses (off screen)
    breakout.active = false; //GAME ENDS
    breakout.lives -= 1; //You lose a life! :C
  }

  if (ball.hitPaddle()) { //If the ball hits the paddle
    ball.reboundPaddle(); //BOUNCE
  }
  
  if (breakout.lives <= 0) { //If you have no more lives
    state = 3; //GAME OVER
  }
}