(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"mixcolormode_atlas_", frames: [[0,0,1920,1080],[0,1082,672,504]]}
];


// symbols:



(lib._1 = function() {
	this.initialize(ss["mixcolormode_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.SMPTE_Color_Bars = function() {
	this.initialize(ss["mixcolormode_atlas_"]);
	this.gotoAndStop(1);
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


(lib.symbolTest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00ACB6").s().p("Ax9R+MAAAgj7MAj7AAAMAAAAj7g");
	this.shape.setTransform(115.025,115.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.symbolTest, new cjs.Rectangle(0,0,230.1,230.1), null);


(lib.roboterImage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.677,0.677);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.roboterImage, new cjs.Rectangle(0,0,1299.9,731.2), null);


(lib.foregroundimage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.SMPTE_Color_Bars();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3272,0.3272);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.foregroundimage, new cjs.Rectangle(0,0,219.9,164.9), null);


(lib.an_Button = function(options) {
	this._element = new $.an.Button(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



// stage content:
(lib.mixcolormode = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		console.log(this.backgroundImage);
		console.log(this.testImage);
		elem = this.testImage;
		
		rect = this.symboltest;
		
		this.addEventListener("click", handleClick);
		console.log($("#dom_overlay_container"));
		$("#dom_overlay_container")[0].addEventListener("click", handleClick);
		
		function handleClick(_event) {
			console.group("Click");
			console.log("target: ")
			console.log(_event.target);
			console.log("currentTarget: ")
			var ct = _event.currentTarget;
			console.log(ct);
			console.groupEnd();
			changeMixMode(_event.target.id);
			//changeMixMode(elem, _event.target.id);
		}
		
		function changeMixMode( targetId){
			console.log(elem);	
			console.log(targetId);
			var mixMode = targetId;
			console.log(rect);
			console.log(rect.shape.graphics._fill);
			rect.shape.graphics._fill.style = "#ffff00";
			parent.parent.canvas.nextElementSibling.style.mixBlendMode = mixMode;
			//rect.shape.graphics._fill.colorMixMode = mixMode;
			//this.rect._fill.style = "#333333";
			//this.rect.style.backgroundColor = "rgba(255,255,255,0)";
			//elem.x += 5;
			//elem._fill.style = "#0000FF";
			//elem.style.backgroundColor = "rgba(255,255,255,0)";
			//var elem = this._testImage;
			//elem.style.mixBlendMode = mixMode;
			//elem.style.backgroundColor = "red";
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// symbolTest
	this.symboltest = new lib.symbolTest();
	this.symboltest.name = "symboltest";
	this.symboltest.parent = this;
	this.symboltest.setTransform(132.85,507.15,1,1,0,0,0,115,115);

	this.timeline.addTween(cjs.Tween.get(this.symboltest).wait(1));

	// buttonMultiply
	this.multiply = new lib.an_Button({'id': 'multiply', 'label':'Multiplizieren', 'disabled':false, 'visible':true, 'class':'ui-button'});

	this.multiply.setTransform(50,284.1,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.multiply).wait(1));

	// buttonNormal
	this.normal = new lib.an_Button({'id': 'normal', 'label':'Normal', 'disabled':false, 'visible':true, 'class':'ui-button'});

	this.normal.setTransform(0,225.1);

	this.timeline.addTween(cjs.Tween.get(this.normal).wait(1));

	// foregroundimage copy
	this.testImage = new lib.foregroundimage();
	this.testImage.name = "testImage";
	this.testImage.parent = this;
	this.testImage.setTransform(110,82.5,1,1,0,0,0,110,82.5);

	this.timeline.addTween(cjs.Tween.get(this.testImage).wait(1));

	// foregroundimage
	this.testImage_1 = new lib.foregroundimage();
	this.testImage_1.name = "testImage_1";
	this.testImage_1.parent = this;
	this.testImage_1.setTransform(110,82.5,1,1,0,0,0,110,82.5);
	this.testImage_1.cache(-2,-2,224,169);

	this.timeline.addTween(cjs.Tween.get(this.testImage_1).wait(1));

	// backgroundImage
	this.backgroundImage = new lib.roboterImage();
	this.backgroundImage.name = "backgroundImage";
	this.backgroundImage.parent = this;
	this.backgroundImage.setTransform(505.9,364.6,1,1,0,0,0,649.9,365.6);

	this.timeline.addTween(cjs.Tween.get(this.backgroundImage).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#81D0FC").s().p("EhMDA5BMAAAhyBMCYHAAAMAAAByBg");
	this.shape.setTransform(480.825,360.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(336,356.1,819.9000000000001,374.1);
// library properties:
lib.properties = {
	id: '566019D5866C490E8B41A4649C244AD4',
	width: 960,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/mixcolormode_atlas_.png", id:"mixcolormode_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/button.js", id:"an.Button"}
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
an.compositions['566019D5866C490E8B41A4649C244AD4'] = {
	getStage: function() { return exportRoot.getStage(); },
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

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
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

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;