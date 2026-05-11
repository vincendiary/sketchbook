window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2016-assignments-a-06-paint-program-assignment-06-mission-08"] = function (p) {
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
		// assignment_06_mission_08.pde
		 //variables
		 var brush = "#000000";
		 var thickness = 3;
		 var strokeSize = str(thickness);
		 var rainbow = false;
		 var starmode = false;
		 
		 function setup() {
		   //standard stuff
		   createCanvas(600,400);
		   background("#E8E8E8"); //white-grey
		   textSize(12);
		   textAlign(CENTER);
		 }
		 
		 function draw() {
		   //cursor fun
		   if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40 || mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 80 || mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 120 || mouseX > 10 && mouseX < 40 && mouseY > 130 && mouseY < 160 || mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 200 || mouseX > 0 && mouseX < 50 && mouseY > 280 && mouseY < 300 || mouseX > 0 && mouseX < 50 && mouseY > 310 && mouseY < 330 || mouseX > 0 && mouseX < 50 && mouseY > 340 && mouseY < 360 || mouseX > 0 && mouseX < 50 && mouseY > 370 && mouseY < 400) {
		     cursor(HAND);
		   } else {
		     cursor(ARROW);
		   }
		   
		   //side-bar
		   stroke("#404040");
		   noStroke();
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
		   rect(2,280,46,20);
		   fill("#810045");
		   text("ERASER", 0, 282, 50, 310);
		   //rainbow
		   fill("#FF00A6");
		   rect(2,310,46,20);
		   fill("#FFFFFF");
		   text("rainbow", 0, 312, 50, 340);
		   //reset-button
		   fill("#7E00FF");
		   rect(2,340,46,20);
		   fill("#FFFFFF");
		   text("RESET", 0, 342, 50, 370);
		   //starmode
		   fill("#FFF300");
		   rect(2,370,46,20);
		   fill("#000000");
		   text("starmode", 0, 372, 50, 400);
		   
		   //current colour
		   noStroke();
		   fill(brush);
		   ellipse(25,240,30,30);
		   fill("#FFFFFF");
		   text("COLOUR", 0, 205, 50, 235);
		   
		   //current brush size
		   text("SIZE: " + strokeSize, 0, 260, 50, 300);
		   
		   //color & size of brush
		   stroke(brush);
		   strokeWeight(thickness);
		   fill(brush);
		   
		   //rainbow injection!
		   if (rainbow == true) {
		     var r1 = random(255);
		     var r2 = random(255);
		     var r3 = random(255);
		     var c1 = round(r1);
		     var c2 = round(r2);
		     var c3 = round(r3);
		     brush = color(c1,c2,c3);
		   }
		   
		   //brush code
		   if (mouseIsPressed == true && mouseX > 50 && pmouseX > 50 && starmode == false) {
		    line(mouseX, mouseY, pmouseX, pmouseY);
		   }
		   if (mouseIsPressed == true && mouseX > 50 && pmouseX > 50 && starmode == true) {
		    star(mouseX, mouseY, 15, 30, 5);
		   }
		 }
		 
		 function mouseClicked() {
		   if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {
		     brush = "#000000"; //BLACK
		     rainbow = false;
		   } if (mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 80) {
		     brush = "#FFFFFF"; //WHITE
		     rainbow = false;
		   } if (mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 120) {
		     brush = "#FF005E"; //RED
		     rainbow = false;
		   } if (mouseX > 10 && mouseX < 40 && mouseY > 130 && mouseY < 160) {
		     brush = "#00A8FF"; //BLUE
		     rainbow = false;
		   } if (mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 200) {
		     brush = "#00FF81"; //GREEN
		     rainbow = false;
		   } if (mouseX > 0 && mouseX < 50 && mouseY > 280 && mouseY < 300) {
		     brush = "#E8E8E8"; //white-grey
		     rainbow = false;
		   } if (mouseX > 0 && mouseX < 50 && mouseY > 310 && mouseY < 330) {
		     rainbow = true; //turns rainbow mode on
		   } if (mouseX > 0 && mouseX < 50 && mouseY > 340 && mouseY < 360) {
		     background("#E8E8E8"); //resets the background
		   } if (mouseX > 0 && mouseX < 50 && mouseY > 370 && mouseY < 400 && starmode == false) {
		     starmode = true;
		   } else if (mouseX > 0 && mouseX < 50 && mouseY > 370 && mouseY < 400 && starmode == true) {
		     starmode = false;
		   }
		 }
		
		//change brush size
		 function mouseWheel(event) {
		   // creates a quick variable to get the mousewheel value from
		  var e = event.getCount();
		  // if size is greater than or equal to 1, the mousewheel can be used to increase or decrease size of brush
		  if (thickness >= 1) {
		  thickness -= e;
		  strokeSize = str(thickness);
		  } if (thickness == 0) { // code to prevent the brush from reaching negative stroke createCanvas(crashes the program)
		    thickness = 1;
		    strokeSize = str(thickness);
		  }
		}
		
		//star shape code (i don't understand any of it)
		function star(x, y, radius1, radius2, npoints) {
		  var angle = TWO_PI / npoints;
		  var halfAngle = angle/2.0;
		  beginShape();
		  for (var a = 0; a < TWO_PI; a += angle) {
		    var sx = x + cos(a) * radius2;
		    var sy = y + sin(a) * radius2;
		    vertex(sx, sy);
		    sx = x + cos(a+halfAngle) * radius1;
		    sy = y + sin(a+halfAngle) * radius1;
		    vertex(sx, sy);
		  }
		  endShape(CLOSE);
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
