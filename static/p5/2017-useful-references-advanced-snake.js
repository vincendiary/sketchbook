window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-useful-references-advanced-snake"] = function (p) {
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
		// Advanced_Snake.pde
		var x = new ArrayList(), y = new ArrayList();
		var w=30, h=30, bs=20, dir=2, ax=12, ay=10;
		var dx= [0, 0, 1, -1], dy= [1, -1, 0, 0];
		var gameover=false;
		
		function setup() {
		  createCanvas(600, 600); 
		  x.add(5); 
		  y.add(5);
		}
		
		function draw() {
		  background("#EAEAEA");
		  for (var i=0; i<w; i++) line(i*bs, 0, i*bs, height);
		  for (var i=0; i<h; i++)line(0, i*bs, width, i*bs);
		  fill(0, 255, 0); 
		  for (var i = 0; i < x.size(); i++) rect(x.get(i)*bs, y.get(i)*bs, bs, bs);
		  if (!gameover) {  
		    fill(255, 0, 0); 
		    stroke(255);
		    strokeWeight(5);
		    rect(ax*bs, ay*bs, bs, bs); 
		    if (frameCount%5==0) {
		      x.add(0, x.get(0) + dx[dir]); 
		      y.add(0, y.get(0) + dy[dir]);
		      if (x.get(0) < 0 || y.get(0) < 0 || x.get(0) >= w || y.get(0) >= h) gameover = true;
		      for (var i=1; i<x.size(); i++) if (x.get(0)==x.get(i)&&y.get(0)==y.get(i)) gameover=true;
		      if (x.get(0)==ax && y.get(0)==ay) { 
		        ax = random(0, w); 
		        ay = random(0, h);
		      } else { 
		        x.remove(x.size()-1); 
		        y.remove(y.size()-1);
		      }
		    }
		  } else {
		    fill(0); 
		    textSize(30); 
		    textAlign(CENTER); 
		    text("GAME OVER. Press space", width/2, height/2);
		    if (keyIsPressed&&key==' ') { 
		      x.clear(); 
		      y.clear(); 
		      x.add(5);  
		      y.add(5); 
		      gameover = false;
		    }
		  }
		}
		
		function keyPressed() {
		  var nd=key=='s'? 0:(key=='w'?1:(key=='d'?2:(key=='a'?3:-1)));
		  if (nd!=-1&&(x.size()<=1||!(x.get(1)==x.get(0)+dx[nd]&&y.get(1)==y.get(0)+dy[nd]))) dir=nd;
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
