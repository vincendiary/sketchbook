window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-just-for-fun-ben-hines"] = function (p) {
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
		// Ben_Hines.pde
		
		//for benjamin-kouhai-chan
		
		var backdrop, title;
		var font;
		
		//important stuff is commented
		var opacity = 50; //the god variable.
		var speed = 5; //how fast the opacity changes (set this to whatever you want)
		
		function setup() {
		  
		  //nothing here matters
		  createCanvas(1280, 720);
		  imageMode(CENTER);
		  rectMode(CENTER);
		  textAlign(LEFT, CENTER);
		  backdrop = loadImage(sketchbookAsset("2017/Just for Fun/Ben_Hines/data/background.jpg")); 
		  title = loadImage(sketchbookAsset("2017/Just for Fun/Ben_Hines/data/title.png"));
		  font = loadFont(sketchbookAsset("2017/Just for Fun/Ben_Hines/data/Dotum-36.vlw"));
		}
		
		function draw() {
		  
		  //runs the opacity function constantly
		  updateOpacity(); //this changes the opacity between 50-100 to simulate that cool shit
		  
		  image(backdrop, width/2, height/2, width, height);
		  image(title, width/6*5, height/8*7);
		  
		  button("Play Single Player", width/2, 600, 300, 50); //vincent's patented button function
		}
		
		function updateOpacity() {
		  
		  //opacity = opacity + speed
		  opacity += speed;
		  
		  if (opacity >= 100 || opacity <= 50) { //if opacity is greater than 100 or less than 50...
		    speed *= -1; //speed reverses. This keeps the opacity within an area. Adjust as you desire.
		  }
		}
		
		function button(t, x, y, w, h) {
		
		  noStroke(); //fuck borders
		  if (mouseX >= x-w/2 && mouseX <= x+w/2 && mouseY >= y-h/2 && mouseY <= y+h/2) {
		    fill("#BFBFBF", int(opacity)); //if rollover = true, fill(grey,opacity). We use int() because fill only accepts integers
		  } else {
		    fill("#BFBFBF", 0); //if rollover = false, fill(grey,invisible)
		  }
		  rect(x, y, w, h); //draw the rectangle
		
		  fill("#FFFFFF", 200);
		  textFont(font);
		  textSize(36);
		  text(t, (x-w/2), y); //draw the text
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
