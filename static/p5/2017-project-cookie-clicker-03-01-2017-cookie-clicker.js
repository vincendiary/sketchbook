window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-project-cookie-clicker-03-01-2017-cookie-clicker"] = function (p) {
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
		// Cookie_Clicker.pde
		/*
		
		Personal Project 01
		
		 -=-=- Cookie Clicker -=-=-
		 
		03/01/2017
		
		*/
		
		var cookie;
		var cookies;
		var cx, cy, cw, ch;
		
		function setup() {
		  fullScreen();
		  smooth(8);
		  frameRate(30);
		  background("#86E4FF");
		
		  cx = width/2-250;
		  cy = height/2-250;
		  cw = ch = 500;
		
		  cookieDraw(width/2, height/2, 400);
		  cookie = get(int(cx), int(cy), int(cw), int(ch));
		}
		
		function draw() {
		  background("#86E4FF");
		  image(cookie, cx, cy, cw, ch);
		  displayCookies(width/2, height/4*3);
		  cookieButton(width/2, height/2, 400);
		}
		
		var startup = true;
		var chocoX = new Array(15).fill(0);
		var chocoY = new Array(15).fill(0);
		
		function cookieDraw(x, y, d) {
		
		  stroke("#FFFFFF");
		  strokeWeight(d/20);
		  fill("#B9A785");
		  ellipse(x, y, d, d);
		
		  for (var i = 0; i < 15; i++) {
		    chocoX[i] = random(x-(d/3), x+(d/3));
		    chocoY[i] = random(y-(d/3), y+(d/3));
		
		    noStroke();
		    fill("#5F533B");
		    ellipse(chocoX[i], chocoY[i], d/10, d/10);
		  }
		}
		
		function cookieButton(x, y, d) {
		
		  if (dist(mouseX, mouseY, x, y) <= d/2) {
		
		    fill("#FFFFFF", 50);
		    ellipse(x, y, d+20, d+20);
		
		    cw = ch = 500;
		    cx = width/2-250;
		    cy = height/2-250;
		
		    if (mouseIsPressed) {
		
		      cx -= 15;
		      cy -= 15;
		      cw = ch = 530;
		      
		      clickText("+1", width/2, height/4);
		      
		      cookies += 1;
		      
		      mouseIsPressed = false;
		    }
		  }
		}
		
		function clickText(t, x, y) {
		  fill("#5F533B");
		  textAlign(CENTER, CENTER);
		  textSize(48);
		  text(t, x, y);
		}
		
		function displayCookies(x, y) {
		  fill("#5F533B");
		  textAlign(CENTER, CENTER);
		  textSize(48);
		  text("cookies: " + cookies, x, y);
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
