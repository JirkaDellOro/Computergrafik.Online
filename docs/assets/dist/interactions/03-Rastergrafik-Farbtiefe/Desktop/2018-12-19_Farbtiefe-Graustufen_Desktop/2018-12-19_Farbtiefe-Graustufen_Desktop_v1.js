(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"2018_12_19_Farbtiefe_Graustufen_Desktop_v1_atlas_", frames: [[0,1422,3000,1420],[0,0,3000,1420],[0,2844,3000,1420],[0,4266,3000,1420]]}
];


// symbols:



(lib.roboter_farbigesdisplay_1bit = function() {
	this.spriteSheet = ss["2018_12_19_Farbtiefe_Graustufen_Desktop_v1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.roboter_farbigesdisplay_2bit = function() {
	this.spriteSheet = ss["2018_12_19_Farbtiefe_Graustufen_Desktop_v1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.roboter_farbigesdisplay_4bit = function() {
	this.spriteSheet = ss["2018_12_19_Farbtiefe_Graustufen_Desktop_v1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.roboter_farbigesdisplay_8bit = function() {
	this.spriteSheet = ss["2018_12_19_Farbtiefe_Graustufen_Desktop_v1_atlas_"];
	this.gotoAndStop(3);
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



(lib._8Bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.roboter_farbigesdisplay_8bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._8Bit, new cjs.Rectangle(0,0,720,340.8), null);


(lib._4Bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.roboter_farbigesdisplay_4bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._4Bit, new cjs.Rectangle(0,0,720,340.8), null);


(lib._2Bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.roboter_farbigesdisplay_2bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2Bit, new cjs.Rectangle(0,0,720,340.8), null);


(lib._1Bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.roboter_farbigesdisplay_1bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._1Bit, new cjs.Rectangle(0,0,720,340.8), null);


(lib.Szene_1_script = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// script
	this.customCSS = new lib.an_CSS({'id': 'customCSS', 'href':'assets/.%5CcustomCss.css'});

	this.customCSS.setTransform(895.2,637.8,1,1,0,0,0,50,11);

	this.instance = new lib.an_CSS({'id': '', 'href':'assets/componentsCss.css'});

	this.instance.setTransform(895.2,695.9,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.customCSS}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_script, null, null);


(lib.Szene_1_Bilder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bilder
	this.img_bit_0 = new lib._1Bit();
	this.img_bit_0.name = "img_bit_0";
	this.img_bit_0.parent = this;
	this.img_bit_0.setTransform(0,0,1.333,1.333);

	this.img_bit_1 = new lib._2Bit();
	this.img_bit_1.name = "img_bit_1";
	this.img_bit_1.parent = this;
	this.img_bit_1.setTransform(0,0,1.333,1.333);

	this.img_bit_2 = new lib._4Bit();
	this.img_bit_2.name = "img_bit_2";
	this.img_bit_2.parent = this;
	this.img_bit_2.setTransform(0,0,1.333,1.333);

	this.img_bit_3 = new lib._8Bit();
	this.img_bit_3.name = "img_bit_3";
	this.img_bit_3.parent = this;
	this.img_bit_3.setTransform(0,0,1.333,1.333);

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
		this.customCSS = this.script.customCSS;
		this.img_bit_3 = this.Bilder.img_bit_3;
		this.img_bit_2 = this.Bilder.img_bit_2;
		this.img_bit_1 = this.Bilder.img_bit_1;
		this.img_bit_0 = this.Bilder.img_bit_0;
		$('body').append('<div class="Containerbox">')
		$('.Containerbox').append('<div class="Container1">')
		$('.Container1').append('<label class="container"><span class="text">1 Bit</span><input type="radio" class="radioBtn" name="1" value="0"   checked><span class="radioCheckmark"></span></label>');
		$('.Container1').append('<img src="./images/1bit.png" class="img_sheme_1bit" height="44px" width="280px">');

		$('.Containerbox').append('<div class="Container2">')		
		$('.Container2').append('<label class="container"><span class="text">2 Bit</span><input type="radio" class="radioBtn" name="1" value="1"><span class="radioCheckmark"></span></label>');
		$('.Container2').append('<img src="./images/2bit.png" class="img_sheme_2bit" height="44px" width="280px">');
		
		$('.Containerbox').append('<div class="Container3">')
		$('.Container3').append('<label class="container"><span class="text">4 Bit</span><input type="radio" class="radioBtn" name="1" value="2"><span class="radioCheckmark"></span></label>');
		$('.Container3').append('<img src="./images/4bit.png" class="img_sheme_4bit" height="44px" width="280px">');

		$('.Containerbox').append('<div class="Container4">')
		$('.Container4').append('<label class="container"><span class="text">8 Bit</span><input type="radio" class="radioBtn" name="1" value="3"><span class="radioCheckmark"></span></label>');
		$('.Container4').append('<img src="./images/8bit.png" class="img_sheme_8bit" height="44px" width="280px">');

		
		
		
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
	this.script.setTransform(895.1,666.9,1,1,0,0,0,895.1,666.9);
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
p.nominalBounds = new cjs.Rectangle(480,360,960,707.4);
// library properties:
lib.properties = {
	id: 'E170D18109494A478DDE61B1DE24B264',
	width: 960,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/2018_12_19_Farbtiefe_Graustufen_Desktop_v1_atlas_.png?1551082991430", id:"2018_12_19_Farbtiefe_Graustufen_Desktop_v1_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1551082991499", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1551082991499", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js?1551082991499", id:"an.CSS"}
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