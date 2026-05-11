window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2016-assignments-a-05-programming-in-processing-assignment-05-mission-05"] = function (p) {
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
		// assignment_05_mission_05.pde
		var xNose = 140;
		var NoseSpd = -1;
		
		function setup() {
		 createCanvas(300,400);
		 background ("#AAEBF7");
		}
		
		function draw() {
		  
		 background ("#AAEBF7");
		 strokeWeight(3);
		  
		 // Head
		 fill("#FF820D");
		 stroke("#C46710");
		 ellipse(150,200,100,100); 
		 
		 // Eyes
		 // Left Eye (Green)
		 fill("#30FA89",127);
		 stroke("#27D66E");
		 ellipse(135,185,40,40);
		 // Right Eye (Blue)
		 fill("#28EAFA",127);
		 stroke("#20BAC6");
		 ellipse(165,185,40,40);
		 
		 // Nose
		 fill("#FF0307",127);
		 stroke("#D30206");
		 rect(xNose,190,20,20);
		 
		 // Mouth
		 fill("#363434");
		 stroke("#1A1919");
		 ellipse(150,230,40,15);
		 
		 // Movement
		 xNose += NoseSpd;
		 
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
