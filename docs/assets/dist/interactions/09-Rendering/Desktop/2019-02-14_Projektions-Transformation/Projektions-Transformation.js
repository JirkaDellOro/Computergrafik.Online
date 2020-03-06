(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Projektions_Transformation_atlas_", frames: [[0,0,960,720],[0,722,960,720]]}
];


// symbols:



(lib.ProjetionsTrans_orthografisch = function() {
	this.initialize(ss["Projektions_Transformation_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ProjetionsTrans_perspektivisch = function() {
	this.initialize(ss["Projektions_Transformation_atlas_"]);
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


(lib.perspektivisch_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.ProjetionsTrans_perspektivisch();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.perspektivisch_Ebene_1, null, null);


(lib.orthografisch_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.ProjetionsTrans_orthografisch();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.orthografisch_Ebene_1, null, null);


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



(lib.Szene_1_Actions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Actions
	this.customCSS = new lib.an_CSS({'id': 'customCSS', 'href':'assets/customCss.css'});

	this.customCSS.setTransform(557.95,858,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.customCSS).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Actions, null, null);


(lib.perspektivisch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.perspektivisch_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(480,360,1,1,0,0,0,480,360);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.perspektivisch, new cjs.Rectangle(0,0,960,720), null);


(lib.orthografisch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.orthografisch_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(480,360,1,1,0,0,0,480,360);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.orthografisch, new cjs.Rectangle(0,0,960,720), null);


(lib.Szene_1_Bilder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bilder
	this.img_0 = new lib.perspektivisch();
	this.img_0.name = "img_0";
	this.img_0.parent = this;
	this.img_0.setTransform(205.25,360,1,1,0,0,0,480,360);

	this.img_1 = new lib.orthografisch();
	this.img_1.name = "img_1";
	this.img_1.parent = this;
	this.img_1.setTransform(186.5,360,1,1,0,0,0,480,360);

	this.instance = new lib.an_CSS({'id': '', 'href':'assets/componentsCss.css'});

	this.instance.setTransform(560.15,820.05,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.img_1},{t:this.img_0}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Bilder, null, null);


// stage content:
(lib.ProjektionsTransformation = function(mode,startPosition,loop) {
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
		this.img_1 = this.Bilder.img_1;
		this.img_0 = this.Bilder.img_0;
		$('body').append('<div class="buttonContainer">')
		$('.buttonContainer').append('<label class="container">perspektivische Projektions-Transformation<input type="radio" id="shading_radio" class="radioBtn" name="radio" value="0" checked><span class="radioCheckmark"></span></label></br></br>');
		$('.buttonContainer').append('<label class="container">orthografische Projektions-Transformation<input type="radio" id="raytracing_radio" class="radioBtn" name="radio" value="1"><span class="radioCheckmark"></span></label>');
		
		
		var elem = [this.img_0, this.img_1];
		
		$(".radioBtn").change(function () {
			var radioValue = $("input[name='radio']:checked").val();
			myFunction(radioValue);
		});
		
		function myFunction(value) {
			console.log("test " + value);
			for (var i = 0; i <= 1; i++) {
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

	// Actions_obj_
	this.Actions = new lib.Szene_1_Actions();
	this.Actions.name = "Actions";
	this.Actions.parent = this;
	this.Actions.setTransform(558,858,1,1,0,0,0,558,858);
	this.Actions.depth = 0;
	this.Actions.isAttachedToCamera = 0
	this.Actions.isAttachedToMask = 0
	this.Actions.layerDepth = 0
	this.Actions.layerIndex = 0
	this.Actions.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Actions).wait(1));

	// Bilder_obj_
	this.Bilder = new lib.Szene_1_Bilder();
	this.Bilder.name = "Bilder";
	this.Bilder.parent = this;
	this.Bilder.setTransform(195.8,415.8,1,1,0,0,0,195.8,415.8);
	this.Bilder.depth = 0;
	this.Bilder.isAttachedToCamera = 0
	this.Bilder.isAttachedToMask = 0
	this.Bilder.layerDepth = 0
	this.Bilder.layerIndex = 1
	this.Bilder.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Bilder).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(186.5,360,498.79999999999995,509.5);
// library properties:
lib.properties = {
	id: 'F711CC29999C4644A59A71BB63AFA6E5',
	width: 960,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Projektions_Transformation_atlas_.png", id:"Projektions_Transformation_atlas_"},
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