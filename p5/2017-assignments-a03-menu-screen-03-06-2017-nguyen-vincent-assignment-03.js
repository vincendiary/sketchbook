window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-assignments-a03-menu-screen-03-06-2017-nguyen-vincent-assignment-03"] = function (p) {
	class ArrayList extends Array {
		add(index, value) {
			if (arguments.length === 1) this.push(index);
			else this.splice(index, 0, value);
			return true;
		}
		get(index) { return this[index]; }
		set(index, value) { this[index] = value; return value; }
		size() { return this.length; }
		remove(value) {
			if (typeof value === "number") return this.splice(value, 1)[0];
			const index = this.indexOf(value);
			if (index >= 0) return this.splice(index, 1)[0];
			return undefined;
		}
	}
	class AudioPlayer {
		play() {}
		rewind() {}
		loop() {}
		pause() {}
		close() {}
		setGain() {}
		position() { return 0; }
		length() { return 1; }
		isPlaying() { return false; }
	}
	class Minim {
		loadFile() { return new AudioPlayer(); }
		stop() {}
	}
	function PVector(x = 0, y = 0, z = 0) { return p.createVector(x, y, z); }
	PVector.fromAngle = function (angle, length) {
		const VectorClass = p.constructor?.Vector || window.p5?.Vector;
		const vector = VectorClass.fromAngle(angle);
		if (length !== undefined) vector.setMag(length);
		return vector;
	};
	function sketchbookAsset(file) {
		if (/^(?:https?:)?\//.test(file)) return file;
		const base = window.__SKETCHBOOK_ASSET_BASE__ || "";
		return base + "/" + file.replace(/^\/+/, "");
	}
	with (p) {
		// Nguyen_Vincent_Assignment_03.pde
		// import ddf.minim.*; // Processing import omitted
		
		var minim;
		var music, dun, fightSound, hit;
		
		var font;
		var titleImage, toriel, papyrus, sans, undyne, alphys, lines, stats, slash;
		var white, orange, yellow;
		var menu, attack;
		var prevTime, currTime;
		
		function setup() {
		  createCanvas(800, 600);
		  load();
		}
		
		function draw() {
		  background("#000000");
		  audio();
		  engine();
		}
		
		function load() {
		  //Font
		  font = loadFont(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/DeterminationSans-36.vlw"));
		
		  //Images
		  titleImage = loadImage(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/title.png"));
		  toriel = loadImage(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/toriel.png"));
		  papyrus = loadImage(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/papyrus.png"));
		  sans = loadImage(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/sans.png"));
		  undyne = loadImage(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/undyne.png"));
		  alphys = loadImage(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/alphys.png"));
		  lines = loadImage(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/lines.png"));
		  stats = loadImage(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/stats.png"));
		  slash = loadImage(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/attack.png"));
		
		  //Colours
		  white = "#FFFFFF";
		  orange = "#FF9900";
		  yellow = "#FFD500";
		
		  //Audio
		  minim = new Minim(this);
		  music = minim.loadFile("menu.mp3");
		  dun = minim.loadFile("dun.mp3");
		  fightSound = minim.loadFile("spear.mp3");
		  hit = minim.loadFile("attack.mp3");
		
		  menu = "Intro";
		  attack = "* Undyne bounces impatiently.";
		  prevTime = second();
		}
		
		function engine() {
		  if (menu == "Intro") {
		
		    title(width/2, height/2, width/3*2, height/5);
		  } else if (menu == "Main") {
		
		    hub();
		  } else if (menu == "Fight") {
		
		    fight();
		  } else if (menu == "Info") {
		
		    info();
		  } else if (menu == "Reset") {
		
		    reset();
		  }
		}
		
		function hub() {
		  friends();
		  copyright();
		
		  buttonRect("Fight", width/5, height/5*4, width/4, height/8, white, orange, yellow);
		  buttonRect("Info", width/2, height/5*4, width/4, height/8, white, orange, yellow);
		  buttonRect("Reset", width/5*4, height/5*4, width/4, height/8, white, orange, yellow);
		
		  infoBox("Frisk    LV 1    0:00\nRuins - Leaf Pile    ", width/2, height/6, width/8*7, height/5);
		}
		
		function fight() {
		  buttonEllipse("FIGHT", width/2, height/8*7.2, width/6, height/6, orange, yellow, yellow);
		  buttonRect("Main", width/5*4, height/8*7.2, width/4, height/8, orange, yellow, yellow);
		
		  image(lines, width/2, height/4, width, height/2*0.95);
		  image(stats, width/2, height/8*6.25, width/3, height/32);
		
		  gif();
		
		  infoBox(attack, width/2, height/5*3, width/8*7, height/4*1.15);
		
		  currTime = second();
		  if ((currTime - prevTime) <= 1) {
		    attack = "* You hit Undyne!";
		    image(slash, width/2*1.1, height/4, 400, 400);
		  } else {
		    attack = "* Undyne bounces impatiently.";
		  }
		}
		
		function info() {
		  infoBox("Hello!\nThis is my submission for assignment\n03: Menu Screens! The game I chose to\nrecreate is Undertale. Compared to the\noriginal menu screen, I've added clean\nborders to the buttons and a wider\ncolour palette for the buttons. IMO,\nI like this one better. It feels cozier\n than the original and somewhat nostalgic.\n\nThanks for reading! -Vincent", width/2, height/2.4, width/12*11, height/1.4);
		  buttonRect("Main", width/2, height/16*14.5, width/4, height/8, white, orange, yellow);
		}
		
		function reset() {
		  dun.pause();
		  dun.rewind();
		  menu = "Intro";
		  prevTime = second();
		}
		
		
		
		
		function buttonEllipse(t, x, y, w, h, idle, rollover, clicked) {
		
		  var current;
		
		  if (rolloverEllipse(x, y, w, h) == true) {
		
		    current = rollover;
		
		    if (clickedEllipse(x, y, w, h) == true) {
		
		      current = clicked;
		      hit.pause();
		      hit.rewind();
		      hit.play();
		      prevTime = second();
		    }
		  } else {
		
		    current = idle;
		  }
		
		  stroke(current);
		  strokeWeight(5);
		  fill("#000000");
		  ellipse(x, y, w, h);
		
		  noStroke();
		  fill(current);
		  textFont(font);
		  textSize(32);
		  textAlign(CENTER, CENTER);
		  text(t, x, y);
		}
		
		function rolloverEllipse(x, y, w, h) {
		  var hit;
		  var d = (w+h)/2;
		  if (dist(mouseX, mouseY, x, y) <= d/2) {
		    hit = true;
		  } else {
		    hit = false;
		  }
		  return hit;
		}
		
		function clickedEllipse(x, y, w, h) {
		  var hit;
		  var d = (w+h)/2;
		  if (dist(mouseX, mouseY, x, y) <= d/2 && mouseIsPressed == true) {
		    hit = true;
		    mouseIsPressed = false;
		  } else {
		    hit = false;
		  }
		  return hit;
		}
		
		function friends() {
		  image(undyne, (width/16*2.75), (height/2-15), 50, 125);
		  image(alphys, (width/16*3.75), (height/2+5), 50, 80);
		  image(toriel, width/2, height/2, 360, 180);
		  image(papyrus, (width/16*12.25), (height/2-15), 75, 125);
		  image(sans, (width/16*13.5), height/2, 60, 90);
		}
		
		function copyright() {
		  noStroke();
		  fill("#9B9B9B");
		  textFont(font);
		  textSize(28);
		  textAlign(CENTER, CENTER);
		  text("Demo by Vincent Nguyen 2017", width/2, height/10*9.25);
		}
		
		var images;
		var frame;
		
		function gif() {
		  images = new Array(33);
		
		  for (var i = 0; i < 33; i++) {
		    var filename = "Undyne_" + nf(i, 4) + ".png";
		    images[i] = loadImage(filename);
		  }
		  frame = (frame+1) % 33;
		  image(images[frame], width/2*0.95, height/4);
		}
		
		function infoBox(t, x, y, w, h) {
		  //Rectangle
		  stroke("#FFFFFF");
		  strokeWeight(5);
		  fill("#000000");
		  rectMode(CENTER);
		  rect(x, y, w, h);
		
		  //Text
		  noStroke();
		  fill("#FFFFFF");
		  textFont(font);
		  textSize(32);
		  textAlign(CENTER, CENTER);
		  text(t, x, y);
		}
		
		function buttonRect(t, x, y, w, h, idle, rollover, clicked) {
		
		  var current;
		
		  if (rolloverRect(x, y, w, h) == true) {
		
		    current = rollover;
		
		    if (clickedRect(x, y, w, h) == true) {
		      current = clicked;
		      menu = t;
		    }
		  } else {
		
		    current = idle;
		  }
		
		  //Rectangle
		  stroke(current);
		  strokeWeight(5);
		  fill("#000000");
		  rectMode(CENTER);
		  rect(x, y, w, h);
		
		  //Text
		  noStroke();
		  fill(current);
		  textFont(font);
		  textSize(32);
		  textAlign(CENTER, CENTER);
		  text(t, x, y);
		}
		
		function rolloverRect(x, y, w, h) {
		  var hit;
		  if (mouseX >= (x-w/2) &&
		    mouseX <= (x+w/2) &&
		    mouseY >= (y-h/2) &&
		    mouseY <= (y+h/2)) {
		    hit = true;
		  } else {
		    hit = false;
		  }
		  return hit;
		}
		
		function clickedRect(x, y, w, h) {
		  var hit;
		  if (mouseX >= (x-w/2) &&
		    mouseX <= (x+w/2) &&
		    mouseY >= (y-h/2) &&
		    mouseY <= (y+h/2) &&
		    mouseIsPressed == true) {
		    hit = true;
		    mouseIsPressed = false;
		  } else {
		    hit = false;
		  }
		  return hit;
		}
		
		function title(x, y, w, h) {
		  imageMode(CENTER);
		  image(titleImage, x, y, w, h);
		
		  currTime = second();
		
		  if ((currTime - prevTime) >= 3) {
		
		    noStroke();
		    fill("#9B9B9B");
		    textFont(font);
		    textSize(28);
		    textAlign(CENTER, CENTER);
		    text("Click anywhere to start", width/2, height/10*9);
		
		    if (mouseIsPressed) {
		      menu = "Main";
		      mouseIsPressed = false;
		    }
		  }
		}
		
		function audio() {
		  //Setting the gain
		  music.setGain(-12);
		  dun.setGain(4);
		  fightSound.setGain(-12);
		  hit.setGain(-8);
		
		  if (menu == "Intro") {
		
		    music.pause();
		    dun.play();
		  } else if (menu == "Main" || menu == "Info") {
		
		    dun.pause();
		    fightSound.pause();
		
		    if (music.isPlaying() != true) {
		      music.pause();
		      music.rewind();
		    }
		
		    music.play();
		  } else if (menu == "Fight") {
		
		    music.pause();
		
		    if (fightSound.isPlaying() != true) {
		      fightSound.pause();
		      fightSound.rewind();
		    }
		
		    fightSound.play();
		  }
		}
		

		if (typeof preload === "function") p.preload = preload;
		if (typeof setup === "function") p.setup = setup;
		if (typeof draw === "function") p.draw = draw;
		if (typeof mousePressed === "function") p.mousePressed = mousePressed;
		if (typeof mouseReleased === "function") p.mouseReleased = mouseReleased;
		if (typeof mouseDragged === "function") p.mouseDragged = mouseDragged;
		if (typeof mouseClicked === "function") p.mouseClicked = mouseClicked;
		if (typeof keyPressed === "function") p.keyPressed = keyPressed;
		if (typeof keyReleased === "function") p.keyReleased = keyReleased;
		if (typeof keyTyped === "function") p.keyTyped = keyTyped;
	}
};
