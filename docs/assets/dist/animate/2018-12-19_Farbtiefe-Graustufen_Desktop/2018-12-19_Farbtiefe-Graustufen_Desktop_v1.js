(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.roboter_farbigesdisplay_1bit = function() {
	this.initialize(img.roboter_farbigesdisplay_1bit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,1420);


(lib.roboter_farbigesdisplay_2bit = function() {
	this.initialize(img.roboter_farbigesdisplay_2bit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,1420);


(lib.roboter_farbigesdisplay_4bit = function() {
	this.initialize(img.roboter_farbigesdisplay_4bit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,1420);


(lib.roboter_farbigesdisplay_8bit = function() {
	this.initialize(img.roboter_farbigesdisplay_8bit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,1420);// helper functions:

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


(lib.an_CSS = function(options) {
	this._element = new $.an.CSS(options);
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



(lib._8_Bit_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.roboter_farbigesdisplay_8bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._8_Bit_Ebene_1, null, null);


(lib._4_Bit_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.roboter_farbigesdisplay_4bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._4_Bit_Ebene_1, null, null);


(lib._2_Bit_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.roboter_farbigesdisplay_2bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2_Bit_Ebene_1, null, null);


(lib._1_Bit_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.roboter_farbigesdisplay_1bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._1_Bit_Ebene_1, null, null);


(lib.Szene_1_script = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// script
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/componentsCss.css'});

	this.instance.setTransform(895.15,695.9,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_script, null, null);


(lib._8Bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._8_Bit_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(360,170.4,1,1,0,0,0,360,170.4);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._8Bit, new cjs.Rectangle(0,0,720,340.8), null);


(lib._4Bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._4_Bit_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(360,170.4,1,1,0,0,0,360,170.4);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._4Bit, new cjs.Rectangle(0,0,720,340.8), null);


(lib._2Bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._2_Bit_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(360,170.4,1,1,0,0,0,360,170.4);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._2Bit, new cjs.Rectangle(0,0,720,340.8), null);


(lib._1Bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._1_Bit_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(360,170.4,1,1,0,0,0,360,170.4);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._1Bit, new cjs.Rectangle(0,0,720,340.8), null);


(lib.Szene_1_Bilder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bilder
	this.img_bit_0 = new lib._1Bit();
	this.img_bit_0.name = "img_bit_0";
	this.img_bit_0.parent = this;
	this.img_bit_0.setTransform(0,0,1.3333,1.3333);

	this.img_bit_1 = new lib._2Bit();
	this.img_bit_1.name = "img_bit_1";
	this.img_bit_1.parent = this;
	this.img_bit_1.setTransform(0,0,1.3333,1.3333);

	this.img_bit_2 = new lib._4Bit();
	this.img_bit_2.name = "img_bit_2";
	this.img_bit_2.parent = this;
	this.img_bit_2.setTransform(0,0,1.3333,1.3333);

	this.img_bit_3 = new lib._8Bit();
	this.img_bit_3.name = "img_bit_3";
	this.img_bit_3.parent = this;
	this.img_bit_3.setTransform(0,0,1.3333,1.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.img_bit_3},{t:this.img_bit_2},{t:this.img_bit_1},{t:this.img_bit_0}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Bilder, null, null);


// stage content:
(lib._20181219_FarbtiefeGraustufen_Desktop_v1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.img_bit_3 = this.Bilder.img_bit_3;
		this.img_bit_2 = this.Bilder.img_bit_2;
		this.img_bit_1 = this.Bilder.img_bit_1;
		this.img_bit_0 = this.Bilder.img_bit_0;
		$('body').append('<div class="buttonContainerLeft">')
		$('.buttonContainerLeft').append('<label class="container"><span class="text">1 Bit</span><input type="radio" class="radioBtn" name="1" value="0"   checked><span class="checkmark"></span></label></br></br>');
		$('.buttonContainerLeft').append('<label class="container"><span class="text">2 Bit</span><input type="radio" class="radioBtn" name="1" value="1"><span class="checkmark"></span></label></br></br>');
		
		$('body').append('<div class="buttonContainerRight">')
		$('.buttonContainerRight').append('<label class="container"><span class="text">4 Bit</span><input type="radio" class="radioBtn" name="1" value="2"><span class="checkmark"></span></label></br></br>');
		$('.buttonContainerRight').append('<label class="container"><span class="text">8 Bit</span><input type="radio" class="radioBtn" name="1" value="3"><span class="checkmark"></span></label>');
		
		$('body').append('<div class="shemeContainerLeft">')
		$('.shemeContainerLeft').append('<img src="./images/1bit.png" class="img_sheme_1bit image-scale"></br></br>');
		$('.shemeContainerLeft').append('<img src="./images/2bit.png" class="img_sheme_2bit image-scale"></br></br>');
		
		$('body').append('<div class="shemeContainerRight">')
		$('.shemeContainerRight').append('<img src="./images/4bit.png" class="img_sheme_4bit image-scale"></br></br>');
		$('.shemeContainerRight').append('<img src="./images/8bit.png" class="img_sheme_8bit image-scale">');
		
		
		$('body').css({
			'overscroll-behavior-y': 'contain'
		});
		
		$('.buttonContainerLeft').css({
			'position': 'absolute',
			'margin-top': '-150px',
			'margin-left': '375px'
		});
		$('.shemeContainerLeft').css({
			'position': 'absolute',
			'margin-top': '-160px',
			'margin-left': '75px'
		});
		
		$('.shemeContainerRight').css({
			'position': 'absolute',
			'margin-top': '-177px',
			'margin-left': '525px'
		});
		
		$('.buttonContainerRight').css({
			'position': 'absolute',
			'margin-top': '-150px',
			'margin-left': '825px'
		});
		
		$('.text').css({
			'font-size': '20px'
		});
		
		$('.img_sheme_1bit').css({
		
		});
		
		$('.img_sheme_2bit').css({
			'padding-top': '19px'
		});
		
		$('.img_sheme_4bit').css({
			'padding-top': '19px'
		});
		
		$('.img_sheme_8bit').css({
			'padding-top': '18px'
		});
		
		$('.shemeContainerLeft').css({
		  'max-width': '100%',
		  'height': 'auto'
		})
		
		
		//$('.image-scale)
		
		var elem = [this.img_bit_0, this.img_bit_1, this.img_bit_2, this.img_bit_3];
		
		$(".radioBtn").change(function () {
			var radioValue = $("input[name='1']:checked").val();
			myFunction(radioValue);
		});
		
		function myFunction(value) {
			console.log("test " + value);
			for (var i = 0; i <= 3; i++) {
				console.log(i);
				if (value == i) {
					console.log("test : " + i);
					elem[i].alpha = 1;
				} else {
					elem[i].alpha = 0;
				}
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// script_obj_
	this.script = new lib.Szene_1_script();
	this.script.name = "script";
	this.script.parent = this;
	this.script.setTransform(895.1,695.9,1,1,0,0,0,895.1,695.9);
	this.script.depth = 0;
	this.script.isAttachedToCamera = 0
	this.script.isAttachedToMask = 0
	this.script.layerDepth = 0
	this.script.layerIndex = 0
	this.script.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.script).wait(1));

	// Bilder_obj_
	this.Bilder = new lib.Szene_1_Bilder();
	this.Bilder.name = "Bilder";
	this.Bilder.parent = this;
	this.Bilder.setTransform(480,227.2,1,1,0,0,0,480,227.2);
	this.Bilder.depth = 0;
	this.Bilder.isAttachedToCamera = 0
	this.Bilder.isAttachedToMask = 0
	this.Bilder.layerDepth = 0
	this.Bilder.layerIndex = 1
	this.Bilder.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Bilder).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,360,480,347.4);
// library properties:
lib.properties = {
	id: 'E170D18109494A478DDE61B1DE24B264',
	width: 960,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/roboter_farbigesdisplay_1bit.png", id:"roboter_farbigesdisplay_1bit"},
		{src:"images/roboter_farbigesdisplay_2bit.jpg", id:"roboter_farbigesdisplay_2bit"},
		{src:"images/roboter_farbigesdisplay_4bit.jpg", id:"roboter_farbigesdisplay_4bit"},
		{src:"images/roboter_farbigesdisplay_8bit.jpg", id:"roboter_farbigesdisplay_8bit"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js", id:"an.CSS"}
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
an.compositions['E170D18109494A478DDE61B1DE24B264'] = {
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


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
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