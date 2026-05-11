window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2016-assignments-a-06-paint-program-assignment-06-mission-05"] = function (p) {
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
		// assignment_06_mission_05.pde
		 //variables
		 var brush = "#000000";
		 var thickness = 3;
		 var strokeSize = str(thickness);
		 
		 function setup() {
		   //standard stuff
		   createCanvas(600,400);
		   background("#E8E8E8"); //white-grey
		   textSize(12);
		   textAlign(CENTER);
		 }
		 
		 function draw() {
		   //cursor fun
		   if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40 || mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 80 || mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 120 || mouseX > 10 && mouseX < 40 && mouseY > 130 && mouseY < 160 || mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 200 || mouseX > 0 && mouseX < 50 && mouseY > 300 && mouseY < 320) {
		     cursor(HAND);
		   } else {
		     cursor(ARROW);
		   }
		   
		   //side-bar
		   stroke("#404040");
		   strokeWeight(0);
		   fill("#404040"); //dark-grey
		   rect(0,0,50,400);
		   
		   //colour buttons
		   //black
		   fill("#000000");
		   rect(10,10,30,30);
		   //white
		   fill("#FFFFFF");
		   rect(10,50,30,30);
		   //red
		   fill("#FF005E");
		   rect(10,90,30,30);
		   //blue
		   fill("#00A8FF");
		   rect(10,130,30,30);
		   //green
		   fill("#00FF81");
		   rect(10,170,30,30);
		   //eraser
		   fill("#E8E8E8");
		   rect(2,300,46,20);
		   fill("#810045");
		   text("ERASER", 0, 302, 50, 330);
		   
		   //current colour
		   strokeWeight(0);
		   fill(brush);
		   ellipse(25,250,30,30);
		   fill("#FFFFFF");
		   text("COLOUR", 0, 215, 50, 235);
		   
		   //current brush size
		   text("SIZE: " + strokeSize, 0, 270, 50, 300);
		   
		   //color & size of brush
		   stroke(brush);
		   strokeWeight(thickness);
		   //brush code
		   if (mouseIsPressed == true && mouseX > 50 && pmouseX > 50) {
		    line(mouseX, mouseY, pmouseX, pmouseY);
		   }
		 }
		 
		 function mouseClicked() {
		   if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {
		     brush = "#000000"; //BLACK
		   } if (mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 80) {
		     brush = "#FFFFFF"; //WHITE
		   } if (mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 120) {
		     brush = "#FF005E"; //RED
		   } if (mouseX > 10 && mouseX < 40 && mouseY > 130 && mouseY < 160) {
		     brush = "#00A8FF"; //BLUE
		   } if (mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 200) {
		     brush = "#00FF81"; //GREEN
		   } if (mouseX > 0 && mouseX < 50 && mouseY > 300 && mouseY < 320) {
		     brush = "#E8E8E8"; //white-grey
		   }
		 }
		 
		 function mouseWheel(event) {
		  var e = event.getCount();
		  if (thickness >= 1) {
		  thickness -= e;
		  strokeSize = str(thickness);
		  } if (thickness == 0) {
		    thickness = 1;
		    strokeSize = str(thickness);
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
