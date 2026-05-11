window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-lessons-drawing-shapes-01"] = function (p) {
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
		// Drawing_Shapes_01.pde
		//Setup
		function setup() {
		  createCanvas(400,400);
		  background("#EAEAEA");
		}
		
		function draw() {
		  
		  //--------------------------------------------Drawings 01-------------------------------------------------//
		  
		  ////White Circle
		  //noStroke();
		  //fill("#FFFFFF");
		  //ellipse(200,200,300,300);
		
		  ////Grey Lines
		  //stroke("#DBDBDB");
		  //strokeWeight(10);
		  //line(0,0,400,400);
		  //line(400,0,0,400);
		
		  ////Pink Circle
		  //noStroke();
		  //fill("#FF6464");
		  //ellipse(200,200,200,200);
		  
		  //--------------------------------------------Drawings 02-------------------------------------------------//
		  
		  ////Green Stroke Rectangle
		  //stroke("#00FF57");
		  //strokeWeight(5);
		  //fill("#FFFFFF");
		  //rect(50,100,300,200);
		  
		  ////Red Circle
		  //noStroke();
		  //fill("#FF4047");
		  //ellipse(200,200,200,200);
		  
		  //--------------------------------------------Drawings 03-------------------------------------------------//
		  
		  ////Green Lines
		  //stroke("#00FF57");
		  //strokeWeight(5);
		  //line(0,0,200,200);
		  //line(400,0,200,200);
		  
		  ////Red Rectangle
		  //noStroke();
		  //fill("#FF4047");
		  //rect(0,200,400,200);
		  
		  //--------------------------------------------Drawings 04-------------------------------------------------//
		  
		  ////Red Cross Line
		  //stroke("#FF4047");
		  //strokeWeight(5);
		  //line(0,0,400,400);
		  
		  ////Green Cross Line
		  //stroke("#00FF57");
		  //line(400,0,0,400);
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
