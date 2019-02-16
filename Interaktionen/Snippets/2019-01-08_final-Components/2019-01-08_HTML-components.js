(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"2019_01_08_HTML_components_atlas_", frames: [[0,0,196,137]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["2019_01_08_HTML_components_atlas_"]);
	this.gotoAndStop(0);
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


(lib.joystick_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.0116,1.0116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.joystick_Ebene_1, null, null);


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



(lib.Szene_1_CSS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CSS
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/componentsCss.css'});

	this.instance.setTransform(601.45,62.1,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_CSS, null, null);


(lib.joystick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.joystick_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(99.1,69.3,1,1,0,0,0,99.1,69.3);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.joystick, new cjs.Rectangle(0,0,198.3,138.6), null);


(lib.Szene_1_Joystick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Joystick
	this.joystick_left = new lib.joystick();
	this.joystick_left.name = "joystick_left";
	this.joystick_left.parent = this;
	this.joystick_left.setTransform(540.65,219.4,0.4942,0.4943,-90,0,0,95.2,73.2);

	this.joystick_down = new lib.joystick();
	this.joystick_down.name = "joystick_down";
	this.joystick_down.parent = this;
	this.joystick_down.setTransform(580.25,258.8,0.4943,0.4942,180,0,0,94.4,65.8);

	this.joystick_right = new lib.joystick();
	this.joystick_right.name = "joystick_right";
	this.joystick_right.parent = this;
	this.joystick_right.setTransform(618.95,219.4,0.4942,0.4943,90,0,0,102.7,65.8);

	this.joystick_up = new lib.joystick();
	this.joystick_up.name = "joystick_up";
	this.joystick_up.parent = this;
	this.joystick_up.setTransform(580.25,180.85,0.4943,0.4942,0,0,0,103.5,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.joystick_up},{t:this.joystick_right},{t:this.joystick_down},{t:this.joystick_left}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Joystick, null, null);


// stage content:
(lib._20190108_HTMLcomponents = function(mode,startPosition,loop) {
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
		this.joystick_up = this.Joystick.joystick_up;
		this.joystick_right = this.Joystick.joystick_right;
		this.joystick_down = this.Joystick.joystick_down;
		this.joystick_left = this.Joystick.joystick_left;
		//HTML-Einbindung
		$('body').append('<div class="buttonContainer">')
		$('.buttonContainer').append('<button id="btn" class="button" value="1">Button 1</button>');
		$('.buttonContainer').append('<button id="btn" class="button" value="2">Button 2</button>');
		$('.buttonContainer').append('<button id="btn" class="button" value="3">Button 3</button>');
		
		$('body').append('<div class="radioContainer">')
		$('.radioContainer').append('<label class="container">Radio 1<input type="radio" id="bit1_radio" class="radioBtn" name="radio" value="1"  checked><span class="radioCheckmark"></span></label></br></br>');
		$('.radioContainer').append('<label class="container">Radio 2<input type="radio" id="bit2_radio" class="radioBtn" name="radio" value="2"><span class="radioCheckmark"></span></label></br></br>');
		
		$('body').append('<div class="checkboxContainer">')
		$('.checkboxContainer').append('<label class="checkContainer">Example<input id="checkbox_01" type="checkbox" name="checkbox" value="cyan"><span class="checkmark"></span></label>');
		
		$('body').append('<div class="sliderContainer">')
		$('.sliderContainer').append('Slider: <input type="range" class="slider" id="slider" value="100" step="10" min="0" max="100">');
		$('.sliderContainer').append('<span id="slider_value">100</span> %');
		
		$('body').append('<div class="colorContainer">')
		$('.colorContainer').append('<div><input type="color" id="head" name="head" value="#e66465"> <label for="head">Color picker</label></div>');
		
		
		
		//extra CSS: muss nicht übernommen werden - nicht notwendig
		$('body').css({
			'overscroll-behavior-y': 'contain'
		});
		
		$('.buttonContainer').css({
			'position': 'absolute',
			'margin-top': '-1000px',
			'margin-left': '50px'
		});
		
		$('.radioContainer').css({
			'position': 'absolute',
			'margin-top': '-700px',
			'margin-left': '50px'
		
		});
		
		$('.sliderContainer').css({
			'overscroll-behavior-x': 'contain',
		});
		
		//Script
		
		//erneuert den Value
		$(document).on('input', '#slider', function () {
			$('#slider_value').html($(this).val());
		});
		
		//ermöglicht, dass man ein Button (de)aktivieren kann
		$(document).ready(function(){ 
		    $('.button').click(function() { 
		        $(this).toggleClass('active');
		    });
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// CSS_obj_
	this.CSS = new lib.Szene_1_CSS();
	this.CSS.name = "CSS";
	this.CSS.parent = this;
	this.CSS.setTransform(601.5,62.1,1,1,0,0,0,601.5,62.1);
	this.CSS.depth = 0;
	this.CSS.isAttachedToCamera = 0
	this.CSS.isAttachedToMask = 0
	this.CSS.layerDepth = 0
	this.CSS.layerIndex = 0
	this.CSS.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.CSS).wait(1));

	// Joystick_obj_
	this.Joystick = new lib.Szene_1_Joystick();
	this.Joystick.name = "Joystick";
	this.Joystick.parent = this;
	this.Joystick.setTransform(578,217.8,1,1,0,0,0,578,217.8);
	this.Joystick.depth = 0;
	this.Joystick.isAttachedToCamera = 0
	this.Joystick.isAttachedToMask = 0
	this.Joystick.layerDepth = 0
	this.Joystick.layerIndex = 1
	this.Joystick.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Joystick).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(864.5,690.6,-212.5,-399.3);
// library properties:
lib.properties = {
	id: 'C9C350A174742E4C96AE1B1D50D89F02',
	width: 720,
	height: 1280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/2019_01_08_HTML_components_atlas_.png", id:"2019_01_08_HTML_components_atlas_"},
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
an.compositions['C9C350A174742E4C96AE1B1D50D89F02'] = {
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