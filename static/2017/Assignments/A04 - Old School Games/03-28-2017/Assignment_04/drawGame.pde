void drawGame() {

  //draw background
  tint(60, 60, 80);
  image(chalkboard, 0, 0, width, height);

  //draw bricks
  breakout.build();

  //draw paddle and ball
  player.display();
  ball.display();
  
  fill(lightblue);
  
  textFont(body);
  textSize(20);
  textAlign(LEFT, CENTER);
  text("lives: " + str(breakout.lives), 20, height/64*63);

  textFont(body);
  textSize(20);
  textAlign(RIGHT, CENTER);
  text("points: " + str(breakout.points), width-20, height/64*63);

  if (breakout.active) {
    ball.move();

    if (breakout.paused) {
      textFont(body);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Paused", xcenter, ycenter);
    } else {
      textFont(body);
      textSize(20);
      textAlign(CENTER, CENTER);
      text("Click anywhere to pause", xcenter, height/64*63);
    }
  } else {
    ball.rest();
    breakout.reset();

    textFont(body);
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(pink);
    text("Click anywhere to start", xcenter, ycenter);
  }

  if (ball.missed()) {
    breakout.active = false;
    breakout.lives -= 1;
  }

  if (ball.hitPaddle()) {
    ball.reboundPaddle();
  }

  if (ball.hitBrick()) {
    int hit = breakout.collision();

    if (bricks[hit].getStatus()) {
      bricks[hit].die();
      ball.reboundBrick();
      breakout.points();
    }
  }
  if (breakout.lives <= 0) {
    state = 3;
  }
}