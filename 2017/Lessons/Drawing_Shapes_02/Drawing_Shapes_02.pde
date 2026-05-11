//Feb 2, 2017
//More basic drawing

void setup() {
  size(400, 400);
  background(#484848);
}

void draw() {
  noStroke();

  //------------------------------------------------Tutorial------------------------------------------------//

  ////Black Square
  //fill(#000000);
  //quad(50, 50, 50, 350, 350, 350, 350, 50);

  ////Grey Arc
  //fill(#1C1C1C);
  //arc(50,350,600,600,radians(270),radians(360));

  ////Black Arc
  //fill(#000000);
  //arc(50,350,400,400,radians(270),radians(360));

  ////White Triangle
  //fill(#FFFFFF,180);
  //triangle(200,50,50,350,350,350);

  //------------------------------------------------Drawing 01------------------------------------------------//

  ////Green Square
  //fill(#00FF8E);
  //quad(100,100,300,100,300,300,100,300);

  ////Red Triangle
  //fill(#FF2600);
  //triangle(200,200,400,400,0,400);

  //------------------------------------------------Drawing 02------------------------------------------------//

  ////Red Rectangle
  //fill(#FF2600);
  //quad(150,0,250,0,250,400,150,400);

  ////Green Rectangle
  //fill(#00FF8E,128);
  //quad(0,150,0,250,400,250,400,150);

  //------------------------------------------------Drawing 03------------------------------------------------//

  ////Green Triangle
  //fill(#00FF8E);
  //triangle(200,200,400,400,0,400);

  ////White Arc
  //fill(#FFFFFF);
  //arc(200,0,400,400,radians(0),radians(180));

  ////Red Arc
  //fill(#FF2600);
  //arc(200,0,200,200,radians(0),radians(180));

  //------------------------------------------------Drawing 04------------------------------------------------//

  ////White Diamond
  //fill(#FFFFFF);
  //quad(200,0,400,200,200,400,0,200);

  ////Green Rectangle
  //fill(#00FF8E);
  //quad(100,100,300,100,300,300,100,300);

  ////White Circle
  //fill(#FF2600);
  //ellipse(200,200,200,200);

  ////Black Eye
  //fill(#000000);
  //arc(200,200,50,200,radians(90),radians(270));
  //arc(200,200,50,200,radians(270),radians(450));

  //------------------------------------------------Drawing 05------------------------------------------------//
  
  //White Wings
  fill(#FFFFFF);
  arc(225,300,400,600,radians(165),radians(255));
  arc(175,300,400,600,radians(285),radians(375));
  
  //Purple Wings
  fill(#4300FF);
  arc(225,300,350,550,radians(180),radians(255));
  arc(175,300,350,550,radians(285),radians(360));
  
  //Black Diamond
  fill(#000000);
  quad(200, 50, 350, 300, 200, 350, 50, 300);

  //Yellow Triangle
  fill(#FFEA00);
  triangle(200, 100, 300, 300, 100, 300);

  //Black Triangle
  fill(#000000);
  triangle(150, 200, 250, 200, 200, 300);
}