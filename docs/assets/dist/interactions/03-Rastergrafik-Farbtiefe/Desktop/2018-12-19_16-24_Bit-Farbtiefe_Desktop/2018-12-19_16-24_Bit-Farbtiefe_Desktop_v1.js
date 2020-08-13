(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"2018_12_19_16_24_Bit_Farbtiefe_Desktop_v1_atlas_", frames: [[0,261,304,73],[306,261,304,73],[0,0,930,259]]}
];


// symbols:



(lib._16bit = function() {
	this.initialize(ss["2018_12_19_16_24_Bit_Farbtiefe_Desktop_v1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._24bit = function() {
	this.initialize(ss["2018_12_19_16_24_Bit_Farbtiefe_Desktop_v1_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_39 = function() {
	this.initialize(ss["2018_12_19_16_24_Bit_Farbtiefe_Desktop_v1_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.roboter_farbigesdisplay_24bit = function() {
	this.initialize(img.roboter_farbigesdisplay_24bit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,1420);


(lib.roboter_farbigesdisplay_16bit = function() {
	this.initialize(img.roboter_farbigesdisplay_16bit);
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


(lib.Szene_1_Farbtiefen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Farbtiefen
	this.instance = new lib._24bit();
	this.instance.parent = this;
	this.instance.setTransform(45,622,0.7057,0.7057);

	this.instance_1 = new lib._16bit();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45,511,0.7057,0.7057);

	this.instance_2 = new lib.CachedTexturedBitmap_39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(44.35,567.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Farbtiefen, null, null);


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



(lib._24_Bit_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.roboter_farbigesdisplay_24bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._24_Bit_Ebene_1, null, null);


(lib._16_Bit_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.roboter_farbigesdisplay_16bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.32,0.3438);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._16_Bit_Ebene_1, null, null);


(lib.Szene_1_Actions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Actions
	this.customCSS = new lib.an_CSS({'id': 'customCSS', 'href':'assets/customCss.css'});

	this.customCSS.setTransform(888.15,639.7,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.customCSS).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Actions, null, null);


(lib._24Bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._24_Bit_Ebene_1();
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

}).prototype = getMCSymbolPrototype(lib._24Bit, new cjs.Rectangle(0,0,720,340.8), null);


(lib._16Bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._16_Bit_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(480,244.1,1,1,0,0,0,480,244.1);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._16Bit, new cjs.Rectangle(0,0,960,488.3), null);


(lib.Szene_1_Bilder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bilder
	this.img_bit_0 = new lib._16Bit();
	this.img_bit_0.name = "img_bit_0";
	this.img_bit_0.parent = this;
	this.img_bit_0.setTransform(480,244.1,1,1,0,0,0,480,244.1);

	this.instance = new lib.an_CSS({'id': '', 'href':'assets/componentsCss.css'});

	this.instance.setTransform(888.15,686.05,1,1,0,0,0,50,11);

	this.img_bit_1 = new lib._24Bit();
	this.img_bit_1.name = "img_bit_1";
	this.img_bit_1.parent = this;
	this.img_bit_1.setTransform(0,0,1.3333,1.4327);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.img_bit_1},{t:this.instance},{t:this.img_bit_0}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Bilder, null, null);


// stage content:
(lib._20181219_1624_BitFarbtiefe_Desktop_v1 = function(mode,startPosition,loop) {
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
		this.customCSS = this.Actions.customCSS;
		this.img_bit_1 = this.Bilder.img_bit_1;
		this.img_bit_0 = this.Bilder.img_bit_0;
		$('body').append('<div class="buttonContainer">')
		$('.buttonContainer').append('<label class="container">16 Bit<input type="radio" id="bit16_radio" class="radioBtn" name="radio" value="0" checked><span class="radioCheckmark"></span></label></br></br>');
		$('.buttonContainer').append('<label class="container">24 Bit<input type="radio" id="bit24_radio" class="radioBtn" name="radio" value="1"><span class="radioCheckmark"></span></label>');
		
		
		var elem = [this.img_bit_0, this.img_bit_1];
		
		$(".radioBtn").change(function () {
			var radioValue = $("input[name='radio']:checked").val();
			myFunction(radioValue);
		});
		
		function myFunction(value) {
			for (var i = 0; i <= 1; i++) {
				if (value == i) {
					elem[i].alpha = 1;
				} else {
					elem[i].alpha = 0;
				}
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions_obj_
	this.Actions = new lib.Szene_1_Actions();
	this.Actions.name = "Actions";
	this.Actions.parent = this;
	this.Actions.setTransform(888.1,639.7,1,1,0,0,0,888.1,639.7);
	this.Actions.depth = 0;
	this.Actions.isAttachedToCamera = 0
	this.Actions.isAttachedToMask = 0
	this.Actions.layerDepth = 0
	this.Actions.layerIndex = 0
	this.Actions.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Actions).wait(1));

	// Farbtiefen_obj_
	this.Farbtiefen = new lib.Szene_1_Farbtiefen();
	this.Farbtiefen.name = "Farbtiefen";
	this.Farbtiefen.parent = this;
	this.Farbtiefen.setTransform(276.9,603.9,1,1,0,0,0,276.9,603.9);
	this.Farbtiefen.depth = 0;
	this.Farbtiefen.isAttachedToCamera = 0
	this.Farbtiefen.isAttachedToMask = 0
	this.Farbtiefen.layerDepth = 0
	this.Farbtiefen.layerIndex = 1
	this.Farbtiefen.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Farbtiefen).wait(1));

	// Bilder_obj_
	this.Bilder = new lib.Szene_1_Bilder();
	this.Bilder.name = "Bilder";
	this.Bilder.parent = this;
	this.Bilder.setTransform(480,348.8,1,1,0,0,0,480,348.8);
	this.Bilder.depth = 0;
	this.Bilder.isAttachedToCamera = 0
	this.Bilder.isAttachedToMask = 0
	this.Bilder.layerDepth = 0
	this.Bilder.layerIndex = 2
	this.Bilder.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Bilder).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,360,480,337.6);
// library properties:
lib.properties = {
	id: 'F711CC29999C4644A59A71BB63AFA6E5',
	width: 960,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/roboter_farbigesdisplay_24bit.jpg", id:"roboter_farbigesdisplay_24bit"},
		{src:"images/roboter_farbigesdisplay_16bit.jpg", id:"roboter_farbigesdisplay_16bit"},
		{src:"images/2018_12_19_16_24_Bit_Farbtiefe_Desktop_v1_atlas_.png", id:"2018_12_19_16_24_Bit_Farbtiefe_Desktop_v1_atlas_"},
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
an.compositions['F711CC29999C4644A59A71BB63AFA6E5'] = {
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