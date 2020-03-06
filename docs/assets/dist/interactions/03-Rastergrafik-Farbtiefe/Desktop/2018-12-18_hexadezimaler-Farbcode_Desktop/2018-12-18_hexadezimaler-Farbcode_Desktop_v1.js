(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"2018_12_18_hexadezimaler_Farbcode_Desktop_v1_atlas_", frames: [[1968,0,61,93],[1788,0,90,93],[1880,0,86,93],[0,0,1200,1452],[1202,586,584,584],[1202,1172,584,584],[1202,0,584,584]]}
];


// symbols:



(lib.CachedTexturedBitmap_31 = function() {
	this.initialize(ss["2018_12_18_hexadezimaler_Farbcode_Desktop_v1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_32 = function() {
	this.initialize(ss["2018_12_18_hexadezimaler_Farbcode_Desktop_v1_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_33 = function() {
	this.initialize(ss["2018_12_18_hexadezimaler_Farbcode_Desktop_v1_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_34 = function() {
	this.initialize(ss["2018_12_18_hexadezimaler_Farbcode_Desktop_v1_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_35 = function() {
	this.initialize(ss["2018_12_18_hexadezimaler_Farbcode_Desktop_v1_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_36 = function() {
	this.initialize(ss["2018_12_18_hexadezimaler_Farbcode_Desktop_v1_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_37 = function() {
	this.initialize(ss["2018_12_18_hexadezimaler_Farbcode_Desktop_v1_atlas_"]);
	this.gotoAndStop(6);
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


(lib.Szene_1_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.CachedTexturedBitmap_33();
	this.instance.parent = this;
	this.instance.setTransform(863.5,138.15,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(763.35,138.15,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(673.05,138.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_text, null, null);


(lib.Szene_1_schwarze_Ebene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// schwarze_Ebene
	this.instance = new lib.CachedTexturedBitmap_34();
	this.instance.parent = this;
	this.instance.setTransform(-16,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_schwarze_Ebene, null, null);


(lib.roter_Kreis_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_37();
	this.instance.parent = this;
	this.instance.setTransform(-0.45,-0.45,0.2501,0.2501);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.roter_Kreis_Ebene_1, null, null);


(lib.grüner_Kreis_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_36();
	this.instance.parent = this;
	this.instance.setTransform(-0.45,-0.45,0.2501,0.2501);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.grüner_Kreis_Ebene_1, null, null);


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



(lib.blauer_Kreis_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_35();
	this.instance.parent = this;
	this.instance.setTransform(-0.45,-0.45,0.2501,0.2501);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blauer_Kreis_Ebene_1, null, null);


(lib.Szene_1_css = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// css
	this.myCss = new lib.an_CSS({'id': 'myCss', 'href':'assets/componentsCss.css'});

	this.myCss.setTransform(896.3,683.55,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.myCss).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_css, null, null);


(lib.roter_Kreis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.roter_Kreis_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(72.5,72.5,1,1,0,0,0,72.5,72.5);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.roter_Kreis, new cjs.Rectangle(-0.4,-0.4,146,146), null);


(lib.grüner_Kreis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.grüner_Kreis_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(72.5,72.5,1,1,0,0,0,72.5,72.5);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.grüner_Kreis, new cjs.Rectangle(-0.4,-0.4,146,146), null);


(lib.blauer_Kreis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.blauer_Kreis_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(72.5,72.5,1,1,0,0,0,72.5,72.5);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.blauer_Kreis, new cjs.Rectangle(-0.4,-0.4,146,146), null);


(lib.Szene_1_roter_Kreis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// roter_Kreis
	this.customCSS = new lib.an_CSS({'id': 'customCSS', 'href':'assets/customCss.css'});

	this.customCSS.setTransform(729.55,683.55,1,1,0,0,0,50,11);

	this.r_circle = new lib.roter_Kreis();
	this.r_circle.name = "r_circle";
	this.r_circle.parent = this;
	this.r_circle.setTransform(204.3,253.95,1.9989,1.9989,0,0,0,72.5,72.5);
	this.r_circle.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.r_circle},{t:this.customCSS}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_roter_Kreis, null, null);


(lib.Szene_1_grüner_Kreis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// grüner_Kreis
	this.g_circle = new lib.grüner_Kreis();
	this.g_circle.name = "g_circle";
	this.g_circle.parent = this;
	this.g_circle.setTransform(368,257.3,1.9989,1.9989,0,0,0,72.5,72.5);
	this.g_circle.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.g_circle).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_grüner_Kreis, null, null);


(lib.Szene_1_blauer_Kreis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blauer_Kreis
	this.b_circle = new lib.blauer_Kreis();
	this.b_circle.name = "b_circle";
	this.b_circle.parent = this;
	this.b_circle.setTransform(277.6,418.75,1.9989,1.9989,0,0,0,72.5,72.5);
	this.b_circle.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.b_circle).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_blauer_Kreis, null, null);


// stage content:
(lib._20181218_hexadezimalerFarbcode_Desktop_v1 = function(mode,startPosition,loop) {
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
		this.myCss = this.css.myCss;
		this.b_circle = this.blauer_Kreis.b_circle;
		this.g_circle = this.grüner_Kreis.g_circle;
		this.r_circle = this.roter_Kreis.r_circle;
		this.customCSS = this.roter_Kreis.customCSS;
		$('body').append('<div class="hexContainer">')
		$('.hexContainer').append('</div><span id="hex_char">#</span><span id="hex_r_color">ff</span><span id="hex_g_color">ff</span><span id="hex_b_color">ff</span></div>');
		
		$('body').append('<div class="sliderContainer">')
		$('body').append('<div class="rSliderValueContainer">')
		$('body').append('<div class="gSliderValueContainer">')
		$('body').append('<div class="bSliderValueContainer">')
		
		$('.sliderContainer').append('<input type="range" class="slider" id="r_slider" value="255" min="0" max="255">');
		$('.rSliderValueContainer').append('<span id="r_slider_value">255</span>');
		
		$('.sliderContainer').append('<input type="range" class="slider" id="g_slider" value="255" min="0" max="255">');
		$('.gSliderValueContainer').append('<span id="g_slider_value">255</span>');
		
		$('.sliderContainer').append('<input type="range" class="slider" id="b_slider" value="255" min="0" max="255">');
		$('.bSliderValueContainer').append('<span id="b_slider_value">255</span>');
		
		
		var r_id = this.r_circle;
		var g_id = this.g_circle;
		var b_id = this.b_circle;
		
		var hex_output = this.hex_output;
		
		$(document).on('input', '#r_slider', function () {
			$('#r_slider_value').html($(this).val());
		
			r_sat = 1 / 255 * ($(this).val());
			r_id.alpha = r_sat;
		});
		
		$(document).on('input', '#g_slider', function () {
			$('#g_slider_value').html($(this).val());
		
			g_sat = 1 / 255 * ($(this).val());
			g_id.alpha = g_sat;
		});
		
		$(document).on('input', '#b_slider', function () {
			$('#b_slider_value').html($(this).val());
		
			b_sat = 1 / 255 * ($(this).val());
			b_id.alpha = b_sat;
		});
		
		$(document).on('input', '#r_slider, #g_slider, #b_slider', function () {
			var r_hex = Number(document.getElementById("r_slider").value).toString(16);
			console.log(r_hex);
			var g_hex = Number(document.getElementById("g_slider").value).toString(16);
			console.log(r_hex);
			var b_hex = Number(document.getElementById("b_slider").value).toString(16);
			console.log(r_hex);
			document.getElementById("hex_r_color").innerHTML = r_hex;
			document.getElementById("hex_g_color").innerHTML = g_hex;
			document.getElementById("hex_b_color").innerHTML = b_hex;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text_obj_
	this.text = new lib.Szene_1_text();
	this.text.name = "text";
	this.text.parent = this;
	this.text.setTransform(789.8,161.4,1,1,0,0,0,789.8,161.4);
	this.text.depth = 0;
	this.text.isAttachedToCamera = 0
	this.text.isAttachedToMask = 0
	this.text.layerDepth = 0
	this.text.layerIndex = 0
	this.text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// css_obj_
	this.css = new lib.Szene_1_css();
	this.css.name = "css";
	this.css.parent = this;
	this.css.setTransform(896.3,683.6,1,1,0,0,0,896.3,683.6);
	this.css.depth = 0;
	this.css.isAttachedToCamera = 0
	this.css.isAttachedToMask = 0
	this.css.layerDepth = 0
	this.css.layerIndex = 1
	this.css.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.css).wait(1));

	// blauer_Kreis_obj_
	this.blauer_Kreis = new lib.Szene_1_blauer_Kreis();
	this.blauer_Kreis.name = "blauer_Kreis";
	this.blauer_Kreis.parent = this;
	this.blauer_Kreis.setTransform(277.8,418.9,1,1,0,0,0,277.8,418.9);
	this.blauer_Kreis.depth = 0;
	this.blauer_Kreis.isAttachedToCamera = 0
	this.blauer_Kreis.isAttachedToMask = 0
	this.blauer_Kreis.layerDepth = 0
	this.blauer_Kreis.layerIndex = 2
	this.blauer_Kreis.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.blauer_Kreis).wait(1));

	// grüner_Kreis_obj_
	this.grüner_Kreis = new lib.Szene_1_grüner_Kreis();
	this.grüner_Kreis.name = "grüner_Kreis";
	this.grüner_Kreis.parent = this;
	this.grüner_Kreis.setTransform(368.2,257.4,1,1,0,0,0,368.2,257.4);
	this.grüner_Kreis.depth = 0;
	this.grüner_Kreis.isAttachedToCamera = 0
	this.grüner_Kreis.isAttachedToMask = 0
	this.grüner_Kreis.layerDepth = 0
	this.grüner_Kreis.layerIndex = 3
	this.grüner_Kreis.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.grüner_Kreis).wait(1));

	// roter_Kreis_obj_
	this.roter_Kreis = new lib.Szene_1_roter_Kreis();
	this.roter_Kreis.name = "roter_Kreis";
	this.roter_Kreis.parent = this;
	this.roter_Kreis.setTransform(419.3,401.6,1,1,0,0,0,419.3,401.6);
	this.roter_Kreis.depth = 0;
	this.roter_Kreis.isAttachedToCamera = 0
	this.roter_Kreis.isAttachedToMask = 0
	this.roter_Kreis.layerDepth = 0
	this.roter_Kreis.layerIndex = 4
	this.roter_Kreis.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.roter_Kreis).wait(1));

	// schwarze_Ebene_obj_
	this.schwarze_Ebene = new lib.Szene_1_schwarze_Ebene();
	this.schwarze_Ebene.name = "schwarze_Ebene";
	this.schwarze_Ebene.parent = this;
	this.schwarze_Ebene.setTransform(284,363,1,1,0,0,0,284,363);
	this.schwarze_Ebene.depth = 0;
	this.schwarze_Ebene.isAttachedToCamera = 0
	this.schwarze_Ebene.isAttachedToMask = 0
	this.schwarze_Ebene.layerDepth = 0
	this.schwarze_Ebene.layerIndex = 5
	this.schwarze_Ebene.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.schwarze_Ebene).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(464,360,482.79999999999995,366);
// library properties:
lib.properties = {
	id: '6C66711D337ACE4389B5581A823A3FB4',
	width: 960,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/2018_12_18_hexadezimaler_Farbcode_Desktop_v1_atlas_.png", id:"2018_12_18_hexadezimaler_Farbcode_Desktop_v1_atlas_"},
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
an.compositions['6C66711D337ACE4389B5581A823A3FB4'] = {
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