(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"2018_12_15_hexa_slider_mit_HTML_v2_atlas_", frames: [[0,0,1440,1418]]},
		{name:"2018_12_15_hexa_slider_mit_HTML_v2_atlas_2", frames: [[0,0,762,762],[0,764,762,762],[764,0,762,762]]}
];


// symbols:



(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(ss["2018_12_15_hexa_slider_mit_HTML_v2_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_7 = function() {
	this.initialize(ss["2018_12_15_hexa_slider_mit_HTML_v2_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_8 = function() {
	this.initialize(ss["2018_12_15_hexa_slider_mit_HTML_v2_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_9 = function() {
	this.initialize(ss["2018_12_15_hexa_slider_mit_HTML_v2_atlas_2"]);
	this.gotoAndStop(2);
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


(lib.Szene_1_schwarzer_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// schwarzer_background
	this.instance = new lib.CachedTexturedBitmap_6();
	this.instance.parent = this;
	this.instance.setTransform(1.75,1.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_schwarzer_background, null, null);


(lib.roter_Kreis_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_9();
	this.instance.parent = this;
	this.instance.setTransform(-0.45,-0.45,0.1917,0.1917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.roter_Kreis_Ebene_1, null, null);


(lib.grüner_Kreis_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_8();
	this.instance.parent = this;
	this.instance.setTransform(-0.45,-0.45,0.1917,0.1917);

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
	this.instance = new lib.CachedTexturedBitmap_7();
	this.instance.parent = this;
	this.instance.setTransform(-0.45,-0.45,0.1917,0.1917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blauer_Kreis_Ebene_1, null, null);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-361,-641,722,1282);


(lib.Szene_1_script = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// script
	this.customCSS = new lib.an_CSS({'id': 'customCSS', 'href':'assets/customCss.css'});

	this.customCSS.setTransform(591.65,761.95,1,1,0,0,0,50,11);

	this.myCss = new lib.an_CSS({'id': 'myCss', 'href':'assets/componentsCss.css'});

	this.myCss.setTransform(604.1,729.25,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.myCss},{t:this.customCSS}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_script, null, null);


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
	this.r_circle = new lib.roter_Kreis();
	this.r_circle.name = "r_circle";
	this.r_circle.parent = this;
	this.r_circle.setTransform(253.35,243.35,2.6088,2.6088,0,0,0,72.5,72.5);
	this.r_circle.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.r_circle).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_roter_Kreis, null, null);


(lib.Szene_1_grüner_Kreis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// grüner_Kreis
	this.g_circle = new lib.grüner_Kreis();
	this.g_circle.name = "g_circle";
	this.g_circle.parent = this;
	this.g_circle.setTransform(467,247.7,2.6088,2.6088,0,0,0,72.5,72.5);
	this.g_circle.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.g_circle).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_grüner_Kreis, null, null);


(lib.Szene_1_blauer_Kreis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blauer_Kreis
	this.b_circle = new lib.blauer_Kreis();
	this.b_circle.name = "b_circle";
	this.b_circle.parent = this;
	this.b_circle.setTransform(349,458.4,2.6088,2.6088,0,0,0,72.5,72.5);
	this.b_circle.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.b_circle).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_blauer_Kreis, null, null);


// stage content:
(lib._20181215_hexa_slidermitHTML_v2 = function(mode,startPosition,loop) {
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
		this.myCss = this.script.myCss;
		this.customCSS = this.script.customCSS;
		this.b_circle = this.blauer_Kreis.b_circle;
		this.g_circle = this.grüner_Kreis.g_circle;
		this.r_circle = this.roter_Kreis.r_circle;
		$('body').append('<div class="hexContainer">')
		$('.hexContainer').append('</div><span id="hex_char">#</span><span id="hex_r_color">ff</span><span id="hex_g_color">ff</span><span id="hex_b_color">ff</span></div>');
		
		
		
		$('body').append('<div class="sliderContainer">')
		$('.sliderContainer').append('<span class="text">Rot: </span><input type="range" class="slider" id="r_slider" value="255" min="0" max="255">');
		$('.sliderContainer').append('<span id="r_slider_value">255</span></br></br>');
		
		$('.sliderContainer').append('<span class="text">Grün: </span><input type="range" class="slider" id="g_slider" value="255" min="0" max="255">');
		$('.sliderContainer').append('<span id="g_slider_value">255</span></br></br>');
		
		$('.sliderContainer').append('<span class="text">Blau: </span><input type="range" class="slider" id="b_slider" value="255" min="0" max="255">');
		$('.sliderContainer').append('<span id="b_slider_value">255</span></br></br>');
		
		$('body').append('<div class="audioFile">')
		$('.audioFile').append('<audio id="hexAudio" src ="./sounds/hexAudioInteraktion.wav" type="audio/wav"  autoplay></audio>');
		
		window.onload = function() {
		    document.getElementById("hexAudio").play();
		}
		
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

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(360,640);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1));

	// script_obj_
	this.script = new lib.Szene_1_script();
	this.script.name = "script";
	this.script.parent = this;
	this.script.setTransform(597.9,745.6,1,1,0,0,0,597.9,745.6);
	this.script.depth = 0;
	this.script.isAttachedToCamera = 0
	this.script.isAttachedToMask = 0
	this.script.layerDepth = 0
	this.script.layerIndex = 0
	this.script.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.script).wait(1));

	// blauer_Kreis_obj_
	this.blauer_Kreis = new lib.Szene_1_blauer_Kreis();
	this.blauer_Kreis.name = "blauer_Kreis";
	this.blauer_Kreis.parent = this;
	this.blauer_Kreis.setTransform(349.2,458.6,1,1,0,0,0,349.2,458.6);
	this.blauer_Kreis.depth = 0;
	this.blauer_Kreis.isAttachedToCamera = 0
	this.blauer_Kreis.isAttachedToMask = 0
	this.blauer_Kreis.layerDepth = 0
	this.blauer_Kreis.layerIndex = 1
	this.blauer_Kreis.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.blauer_Kreis).wait(1));

	// grüner_Kreis_obj_
	this.grüner_Kreis = new lib.Szene_1_grüner_Kreis();
	this.grüner_Kreis.name = "grüner_Kreis";
	this.grüner_Kreis.parent = this;
	this.grüner_Kreis.setTransform(467.2,247.9,1,1,0,0,0,467.2,247.9);
	this.grüner_Kreis.depth = 0;
	this.grüner_Kreis.isAttachedToCamera = 0
	this.grüner_Kreis.isAttachedToMask = 0
	this.grüner_Kreis.layerDepth = 0
	this.grüner_Kreis.layerIndex = 2
	this.grüner_Kreis.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.grüner_Kreis).wait(1));

	// roter_Kreis_obj_
	this.roter_Kreis = new lib.Szene_1_roter_Kreis();
	this.roter_Kreis.name = "roter_Kreis";
	this.roter_Kreis.parent = this;
	this.roter_Kreis.setTransform(253.6,243.6,1,1,0,0,0,253.6,243.6);
	this.roter_Kreis.depth = 0;
	this.roter_Kreis.isAttachedToCamera = 0
	this.roter_Kreis.isAttachedToMask = 0
	this.roter_Kreis.layerDepth = 0
	this.roter_Kreis.layerIndex = 3
	this.roter_Kreis.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.roter_Kreis).wait(1));

	// schwarzer_background_obj_
	this.schwarzer_background = new lib.Szene_1_schwarzer_background();
	this.schwarzer_background.name = "schwarzer_background";
	this.schwarzer_background.parent = this;
	this.schwarzer_background.setTransform(361.8,356.2,1,1,0,0,0,361.8,356.2);
	this.schwarzer_background.depth = 0;
	this.schwarzer_background.isAttachedToCamera = 0
	this.schwarzer_background.isAttachedToMask = 0
	this.schwarzer_background.layerDepth = 0
	this.schwarzer_background.layerIndex = 4
	this.schwarzer_background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.schwarzer_background).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(359,639,362.79999999999995,642);
// library properties:
lib.properties = {
	id: '46D94BA142326949BD283CE5252A4E72',
	width: 720,
	height: 1280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/2018_12_15_hexa_slider_mit_HTML_v2_atlas_.png", id:"2018_12_15_hexa_slider_mit_HTML_v2_atlas_"},
		{src:"images/2018_12_15_hexa_slider_mit_HTML_v2_atlas_2.png", id:"2018_12_15_hexa_slider_mit_HTML_v2_atlas_2"},
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
an.compositions['46D94BA142326949BD283CE5252A4E72'] = {
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


// Virtual camera API : 

AdobeAn.VirtualCamera = new function() {
	var _camera = new Object();
	function VirtualCamera(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined )
	{
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VirtualCamera.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VirtualCamera.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VirtualCamera.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VirtualCamera.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VirtualCamera.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VirtualCamera.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VirtualCamera.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VirtualCamera.prototype.resetZoom = function() {
	this.setZoom(100);
};

VirtualCamera.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VirtualCamera.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VirtualCamera.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VirtualCamera.prototype.resetRotation = function() {
this.setRotation(0);
};

VirtualCamera.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VirtualCamera.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VirtualCamera.prototype.getZDepth = function() {
	return this.camera.depth;
}
VirtualCamera.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VirtualCamera.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VirtualCamera.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
if(this.camera.pinToObject != undefined) {
this.camera.pinToObject.pinOffsetX = offsetX;
this.camera.pinToObject.pinOffsetY = offsetY;
this.camera.pinToObject.pinOffsetZ = offsetZ;
}
};

VirtualCamera.prototype.unpinCamera = function() {
this.camera.pinToObject = undefined;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VirtualCamera(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
VirtualCamera.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};
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