(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"test_atlas_1", frames: [[314,802,308,244],[834,246,270,269],[624,802,308,244],[834,517,270,269],[934,788,270,269],[834,0,308,244],[1144,0,270,269],[0,802,312,244],[0,0,832,800]]}
];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_9 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.triangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.tRed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(-76.4,-60,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tRed, new cjs.Rectangle(-76.4,-60,154,122), null);


(lib.tGreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-76.4,-60,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tGreen, new cjs.Rectangle(-76.4,-60,154,122), null);


(lib.tBlue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-76.4,-60,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tBlue, new cjs.Rectangle(-76.4,-60,154,122), null);


(lib.red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-67.35,-67.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.red, new cjs.Rectangle(-67.3,-67.3,135,134.5), null);


(lib.koordinatensythem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.text = new cjs.Text("X", "69px 'Times New Roman'");
	this.text.lineHeight = 78;
	this.text.lineWidth = 69;
	this.text.parent = this;
	this.text.setTransform(209.85,118.3,1.2274,1.2274);

	this.text_1 = new cjs.Text("Y", "69px 'Times New Roman'");
	this.text_1.lineHeight = 78;
	this.text_1.lineWidth = 69;
	this.text_1.parent = this;
	this.text_1.setTransform(-294.95,-262.45,1.2274,1.2274);

	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-231.2,-193.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.koordinatensythem, new cjs.Rectangle(-297.4,-264.9,594.9,529.8), null);


(lib.green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-67.35,-67.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.green, new cjs.Rectangle(-67.3,-67.3,135,134.5), null);


(lib.an_CSS = function(options) {
	this.initialize();
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-67.35,-67.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blue, new cjs.Rectangle(-67.3,-67.3,135,134.5), null);


// stage content:
(lib.test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.clearAllSoundStreams();
		 
		this.stop;
		
		let squareSelected = true;
		
		let squareWidth=3;
		let triangleWidth=3;
		
		let square = this.newSquare;
		console.log(square);
		let green = this.green;
		let red = this.red;
		let blue = this.blue;
		
		let triangle = this.triangle;
		let tGreen = this.tGreen;
		let tRed = this.tRed;
		let tBlue = this.tBlue;
		
		let canvas = document.getElementsByTagName("canvas")[0];
		let crc2 = canvas.getContext("2d");
		
		let body = document.querySelector('body');
		let wrapper = document.createElement("div");
		wrapper.className = "controls-wrapper";
		wrapper.style.cssText = "display: flex; justify-content: space-evenly; max-Width: 550px; margin:auto";
		body.appendChild(wrapper);
		
		let shapeContainer = document.createElement("div");
		wrapper.appendChild(shapeContainer);
		let text3 = document.createElement("p");
		text3.innerText = "Form";
		
		let inputShape = div = document.createElement("input");
		inputShape.className = "selectShape";
		inputShape.value = "square";
		inputShape.type = "radio";
		inputShape.name = "choice";
		inputShape.id = "radioSquare";
		inputShape.checked = true;
		
		let label = div = document.createElement("label");
		
		let inputShape2 = div = document.createElement("input");
		inputShape2.className = "selectShape";
		inputShape2.value = "triangle";
		inputShape2.type = "radio";
		inputShape2.name = "choice";
		inputShape2.id = "radioTriangle";
		
		let label2 = div = document.createElement("label");
		
		shapeContainer.appendChild(text3);
		shapeContainer.appendChild(label);
		label.appendChild(inputShape);
		var myvariable = document.createTextNode('Viereck');
		label.appendChild(myvariable);
		
		shapeContainer.appendChild(label2);
		label2.appendChild(inputShape2);
		var myvariable = document.createTextNode('Dreieck');
		label2.appendChild(myvariable);
		shapeContainer.style.cssText = "display: flex; flex-direction: column; width: 100px";
		
		
		let input1 = div = document.createElement("input");
		input1.className = "red";
		input1.value = 0;
		input1.min = 0;
		input1.max = 255;
		input1.step = 1;
		
		let input2 = div = document.createElement("input");
		input2.className = "green";
		input2.value = 0;
		input2.min = 0;
		input2.max = 255;
		input2.step = 1;
		
		let input3 = div = document.createElement("input");
		input3.className = "blue";
		input3.value = 0;
		input3.min = 0;
		input3.max = 255;
		input3.step = 1;
		
		input1.type = "range";
		input2.type = "range";
		input3.type = "range";
		
		let colorContainer = document.createElement("div");
		let text = document.createElement("p");
		text.innerText = "Farbauswahl";
		colorContainer.appendChild(text);
		wrapper.appendChild(colorContainer);
		
		colorContainer.appendChild(input1);
		colorContainer.appendChild(input2);
		colorContainer.appendChild(input3);
		colorContainer.style.cssText = "display: flex; flex-direction: column; width: 200px";
		
		let lineContainer = document.createElement("div");
		wrapper.appendChild(lineContainer);
		let text2 = document.createElement("p");
		text2.innerText = "Linienstärke";
		
		let inputLine = div = document.createElement("input");
		inputLine.className = "line";
		inputLine.value = 3;
		inputLine.min = 3;
		inputLine.max = 13;
		inputLine.step = 0.5;
		
		inputLine.type = "range";
		lineContainer.appendChild(text2);
		lineContainer.appendChild(inputLine);
		lineContainer.style.cssText = "display: flex; flex-direction: column; width: 200px";
		
		input1.addEventListener("input", changeColor);
		input2.addEventListener("input", changeColor);
		input3.addEventListener("input", changeColor);
		inputLine.addEventListener("input", changeLine);
		inputShape.addEventListener("input", test);
		inputShape2.addEventListener("input", test);
		
		
		let newGreen;
		let newRed;
		let newBlue;
		
		function changeColor() {
		
			newGreen = 1 / 255 * (input2.value);
			newRed = 1 / 255 * (input1.value);
			newBlue = 1 / 255 * (input3.value);
		
			if (squareSelected) {
				green.alpha = newGreen;
				red.alpha = newRed;
				blue.alpha = newBlue;
			} else {
				tGreen.alpha = newGreen;
				tRed.alpha = newRed;
				tBlue.alpha = newBlue;
			}
		}
		
		function changeLine() {
			console.log(square, "line");
			if (squareSelected) {
				squareWidth=inputLine.value;
				
			} else {
				triangleWidth=inputLine.value;
			}
		}
		
		function test() {
			console.log(inputShape.checked, "shape");
			if (inputShape.checked) {
				squareSelected = true;
		
				green.alpha = newGreen;
				red.alpha = newRed;
				blue.alpha = newBlue;
		
			} else {
				squareSelected = false;
		
				tGreen.alpha = newGreen;
				tRed.alpha = newRed;
				tBlue.alpha = newBlue;
		
			}
		}
		
		crc2.strokeStyle = "#000000";
		update();
		function update() {
			
			crc2.lineWidth =squareWidth
				
			crc2.beginPath();
			crc2.moveTo(291.5, 220.5);
			crc2.lineTo(426.5, 220.5);
			crc2.lineTo(426.5, 355.5);
			crc2.lineTo(291.5, 355.5);
			crc2.lineTo(291.5, 355.5);
			crc2.closePath();
			crc2.stroke();
			
			crc2.lineWidth = triangleWidth;
				
			crc2.beginPath();
			crc2.moveTo(257, 375);
			crc2.lineTo(333.5, 496);
			crc2.lineTo(180, 496);
			crc2.closePath();
			
			crc2.stroke();
			requestAnimationFrame(update);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Ebene_3
	this.koordinates = new lib.koordinatensythem();
	this.koordinates.name = "koordinates";
	this.koordinates.setTransform(350.5,349.9);

	this.timeline.addTween(cjs.Tween.get(this.koordinates).wait(1));

	// Ebene_2
	this.blue = new lib.blue();
	this.blue.name = "blue";
	this.blue.setTransform(359.6,287.75);
	this.blue.alpha = 0;
	this.blue.compositeOperation = "lighter";

	this.red = new lib.red();
	this.red.name = "red";
	this.red.setTransform(359.6,287.75);
	this.red.alpha = 0;
	this.red.compositeOperation = "lighter";

	this.green = new lib.green();
	this.green.name = "green";
	this.green.setTransform(359.6,287.75);
	this.green.alpha = 0;
	this.green.compositeOperation = "lighter";

	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(292.25,220.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.green},{t:this.red},{t:this.blue}]}).wait(1));

	// Ebene_1
	this.css = new lib.an_CSS({'id': 'css', 'href':'assets/main.css'});

	this.css.name = "css";
	this.css.setTransform(111.75,598.6,1,1,0,0,0,50,11);

	this.triangle = new lib.triangle();
	this.triangle.name = "triangle";
	this.triangle.setTransform(255.4,434.9);

	this.tBlue = new lib.tBlue();
	this.tBlue.name = "tBlue";
	this.tBlue.setTransform(256.3,434.15);
	this.tBlue.alpha = 0;
	this.tBlue.compositeOperation = "lighter";

	this.tRed = new lib.tRed();
	this.tRed.name = "tRed";
	this.tRed.setTransform(256.3,434.15);
	this.tRed.alpha = 0;
	this.tRed.compositeOperation = "lighter";

	this.tGreen = new lib.tGreen();
	this.tGreen.name = "tGreen";
	this.tGreen.setTransform(254.45,435.6);
	this.tGreen.alpha = 0;
	this.tGreen.compositeOperation = "lighter";

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(179.25,374.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.tGreen},{t:this.tRed},{t:this.tBlue},{t:this.triangle},{t:this.css}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(403.1,435,244.89999999999998,179.79999999999995);
// library properties:
lib.properties = {
	id: '4BBD723209EABE47BE4D2FD53AC2D319',
	width: 700,
	height: 700,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/test_atlas_1.png?1589655931589", id:"test_atlas_1"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1589655931602", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1589655931602", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js?1589655931602", id:"an.CSS"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4BBD723209EABE47BE4D2FD53AC2D319'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	if((this.stage == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element && this._element._attached) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	this._lastAddedFrame = this.parent.currentFrame;
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;