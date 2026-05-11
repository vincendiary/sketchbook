window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-assignments-a03-menu-screen-03-05-2017-nguyen-vincent-assignment-03"] = function (p) {
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
		//Note: in the middle of finishing rollover (integrating it into button()). Up next is the clicked functionality
		
		
		// import ddf.minim.*; // Processing import omitted
		
		var minim;
		var music, dun;
		
		var font;
		var titleImage;
		var menu;
		
		function setup() {
		  createCanvas(800, 600);
		  font = loadFont(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-05-2017/Nguyen_Vincent_Assignment_03/data/DeterminationSans-36.vlw"));
		  titleImage = loadImage(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-05-2017/Nguyen_Vincent_Assignment_03/data/title.png"));
		  minim = new Minim(this);
		  music = minim.loadFile("menu.mp3");
		  menu = "intro";
		}
		
		function draw() {
		  audio();
		  background("#000000");
		  title(width/2, height/2, width/3*2, height/5);
		  buttonRect("Start", width/2, height/4, width/3, height/6);
		}
		
		function buttonRect(t, x, y, w, h) {
		  
		  var idle, rollover, clicked;
		  idle = "#FFFFFF";
		  rollover = "#FF9900";
		  clicked = "#FFD500";
		  
		  if (rolloverRect(x,y,w,h) == true) {
		    stroke(rollover);
		  } else {
		    stroke(idle);
		  }
		  
		  strokeWeight(5);
		  fill("#000000");
		  rectMode(CENTER);
		  rect(x, y, w, h);
		
		  noStroke();
		  fill("#FFFFFF");
		  textFont(font);
		  textSize(36);
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
		
		function title(x, y, w, h) {
		  imageMode(CENTER);
		  image(titleImage, x, y, w, h);
		}
		
		function audio() {
		  music.setGain(-12);
		
		  if (menu == "intro") {
		  }
		  if (music.position() == music.length()) {
		    music.rewind();
		  }
		  music.play();
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
