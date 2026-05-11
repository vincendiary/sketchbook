window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-lessons-drawing-shapes-02"] = function (p) {
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
		// Drawing_Shapes_02.pde
		//Feb 2, 2017
		//More basic drawing
		
		function setup() {
		  createCanvas(400, 400);
		  background("#484848");
		}
		
		function draw() {
		  noStroke();
		
		  //------------------------------------------------Tutorial------------------------------------------------//
		
		  ////Black Square
		  //fill("#000000");
		  //quad(50, 50, 50, 350, 350, 350, 350, 50);
		
		  ////Grey Arc
		  //fill("#1C1C1C");
		  //arc(50,350,600,600,radians(270),radians(360));
		
		  ////Black Arc
		  //fill("#000000");
		  //arc(50,350,400,400,radians(270),radians(360));
		
		  ////White Triangle
		  //fill("#FFFFFF",180);
		  //triangle(200,50,50,350,350,350);
		
		  //------------------------------------------------Drawing 01------------------------------------------------//
		
		  ////Green Square
		  //fill("#00FF8E");
		  //quad(100,100,300,100,300,300,100,300);
		
		  ////Red Triangle
		  //fill("#FF2600");
		  //triangle(200,200,400,400,0,400);
		
		  //------------------------------------------------Drawing 02------------------------------------------------//
		
		  ////Red Rectangle
		  //fill("#FF2600");
		  //quad(150,0,250,0,250,400,150,400);
		
		  ////Green Rectangle
		  //fill("#00FF8E",128);
		  //quad(0,150,0,250,400,250,400,150);
		
		  //------------------------------------------------Drawing 03------------------------------------------------//
		
		  ////Green Triangle
		  //fill("#00FF8E");
		  //triangle(200,200,400,400,0,400);
		
		  ////White Arc
		  //fill("#FFFFFF");
		  //arc(200,0,400,400,radians(0),radians(180));
		
		  ////Red Arc
		  //fill("#FF2600");
		  //arc(200,0,200,200,radians(0),radians(180));
		
		  //------------------------------------------------Drawing 04------------------------------------------------//
		
		  ////White Diamond
		  //fill("#FFFFFF");
		  //quad(200,0,400,200,200,400,0,200);
		
		  ////Green Rectangle
		  //fill("#00FF8E");
		  //quad(100,100,300,100,300,300,100,300);
		
		  ////White Circle
		  //fill("#FF2600");
		  //ellipse(200,200,200,200);
		
		  ////Black Eye
		  //fill("#000000");
		  //arc(200,200,50,200,radians(90),radians(270));
		  //arc(200,200,50,200,radians(270),radians(450));
		
		  //------------------------------------------------Drawing 05------------------------------------------------//
		  
		  //White Wings
		  fill("#FFFFFF");
		  arc(225,300,400,600,radians(165),radians(255));
		  arc(175,300,400,600,radians(285),radians(375));
		  
		  //Purple Wings
		  fill("#4300FF");
		  arc(225,300,350,550,radians(180),radians(255));
		  arc(175,300,350,550,radians(285),radians(360));
		  
		  //Black Diamond
		  fill("#000000");
		  quad(200, 50, 350, 300, 200, 350, 50, 300);
		
		  //Yellow Triangle
		  fill("#FFEA00");
		  triangle(200, 100, 300, 300, 100, 300);
		
		  //Black Triangle
		  fill("#000000");
		  triangle(150, 200, 250, 200, 200, 300);
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
