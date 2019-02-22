(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"2018_12_09_Speicherbedarf_mit_Slider_atlas_", frames: [[0,327,304,73],[0,448,280,44],[0,252,304,73],[0,402,280,44],[0,494,280,44],[0,540,280,44],[0,0,417,124],[0,126,417,124]]}
];


// symbols:



(lib._16bit = function() {
	this.initialize(ss["2018_12_09_Speicherbedarf_mit_Slider_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1bit = function() {
	this.initialize(ss["2018_12_09_Speicherbedarf_mit_Slider_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._24bit = function() {
	this.initialize(ss["2018_12_09_Speicherbedarf_mit_Slider_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._2bit = function() {
	this.initialize(ss["2018_12_09_Speicherbedarf_mit_Slider_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._4bit = function() {
	this.initialize(ss["2018_12_09_Speicherbedarf_mit_Slider_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._8bit = function() {
	this.initialize(ss["2018_12_09_Speicherbedarf_mit_Slider_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_40 = function() {
	this.initialize(ss["2018_12_09_Speicherbedarf_mit_Slider_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_41 = function() {
	this.initialize(ss["2018_12_09_Speicherbedarf_mit_Slider_atlas_"]);
	this.gotoAndStop(7);
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


(lib.Szene_1_Output = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Output
	this.output = new cjs.Text("29.88", "34px 'Oswald'");
	this.output.name = "output";
	this.output.lineHeight = 60;
	this.output.lineWidth = 89;
	this.output.parent = this;
	this.output.setTransform(750.9,660.15);

	this.instance = new lib.CachedTexturedBitmap_41();
	this.instance.parent = this;
	this.instance.setTransform(841.85,639.25,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(524.95,639.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.output}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Output, null, null);


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



(lib._24bit_farbtiefe_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib._24bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.9252,0.5794);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._24bit_farbtiefe_Ebene_1, null, null);


(lib._16bit_farbtiefe_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib._16bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.9252,0.5795);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._16bit_farbtiefe_Ebene_1, null, null);


(lib._8bit_farbtiefe_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib._8bit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._8bit_farbtiefe_Ebene_1, null, null);


(lib._4bit_farbtiefe_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib._4bit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._4bit_farbtiefe_Ebene_1, null, null);


(lib._2bit_farbtiefe_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib._2bit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2bit_farbtiefe_Ebene_1, null, null);


(lib._1bit_farbtiefe_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib._1bit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._1bit_farbtiefe_Ebene_1, null, null);


(lib.Szene_1_Textinput = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Textinput
	this.myCss = new lib.an_CSS({'id': 'myCss', 'href':'assets/componentsCss.css'});

	this.myCss.setTransform(1005.35,658.15,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.myCss).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Textinput, null, null);


(lib.Szene_1_Actions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Actions
	this.customCSS = new lib.an_CSS({'id': 'customCSS', 'href':'assets/customCss.css'});

	this.customCSS.setTransform(980.1,590,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.customCSS).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Actions, null, null);


(lib._24bitfarbtiefe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._24bit_farbtiefe_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(140.6,21.2,1,1,0,0,0,140.6,21.2);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._24bitfarbtiefe, new cjs.Rectangle(0,0,281.3,42.3), null);


(lib._16bitfarbtiefe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._16bit_farbtiefe_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(140.5,21.2,1,1,0,0,0,140.5,21.2);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._16bitfarbtiefe, new cjs.Rectangle(0,0,281.3,42.3), null);


(lib._8bitfarbtiefe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._8bit_farbtiefe_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(140,22,1,1,0,0,0,140,22);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._8bitfarbtiefe, new cjs.Rectangle(0,0,280,44), null);


(lib._4bitfarbtiefe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._4bit_farbtiefe_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(140,22,1,1,0,0,0,140,22);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._4bitfarbtiefe, new cjs.Rectangle(0,0,280,44), null);


(lib._2bitfarbtiefe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._2bit_farbtiefe_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(140,22,1,1,0,0,0,140,22);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._2bitfarbtiefe, new cjs.Rectangle(0,0,280,44), null);


(lib._1bitfarbtiefe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._1bit_farbtiefe_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(140,22,1,1,0,0,0,140,22);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._1bitfarbtiefe, new cjs.Rectangle(0,0,280,44), null);


(lib.Szene_1_Farbtiefen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Farbtiefen
	this.instance = new lib._24bitfarbtiefe();
	this.instance.parent = this;
	this.instance.setTransform(665.55,582.85,1,1,0,0,0,140.6,21.2);

	this.instance_1 = new lib._16bitfarbtiefe();
	this.instance_1.parent = this;
	this.instance_1.setTransform(665.45,476.85,1,1,0,0,0,140.5,21.2);

	this.instance_2 = new lib._8bitfarbtiefe();
	this.instance_2.parent = this;
	this.instance_2.setTransform(665.95,370.65,1,1,0,0,0,140,22);

	this.instance_3 = new lib._4bitfarbtiefe();
	this.instance_3.parent = this;
	this.instance_3.setTransform(665.95,264.65,1,1,0,0,0,140,22);

	this.instance_4 = new lib._2bitfarbtiefe();
	this.instance_4.parent = this;
	this.instance_4.setTransform(665.95,158.65,1,1,0,0,0,140,22);

	this.instance_5 = new lib._1bitfarbtiefe();
	this.instance_5.parent = this;
	this.instance_5.setTransform(665.95,52.65,1,1,0,0,0,140,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Farbtiefen, null, null);


// stage content:
(lib._20181209_SpeicherbedarfmitSlider = function(mode,startPosition,loop) {
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
		this.output = this.Output.output;
		this.myCss = this.Textinput.myCss;
		$('body').append('<div class="buttonContainer">')
		$('.buttonContainer').append('<label class="container"><span class="text">1 Bit</span><input type="radio" id="bit1_radio" class="radioBtn" name="radio" value="1"  checked><span class="radioCheckmark"></span></label></br></br>');
		$('.buttonContainer').append('<label class="container"><span class="text">2 Bit</span><input type="radio" id="bit2_radio" class="radioBtn" name="radio" value="2"><span class="radioCheckmark"></span></label></br></br>');
		$('.buttonContainer').append('<label class="container"><span class="text">4 Bit</span><input type="radio" id="bit4_radio" class="radioBtn" name="radio" value="4"><span class="radioCheckmark"></span></label></br></br>');
		$('.buttonContainer').append('<label class="container"><span class="text">8 Bit</span><input type="radio" id="bit8_radio" class="radioBtn" name="radio" value="8"><span class="radioCheckmark"></span></label></br></br>');
		$('.buttonContainer').append('<label class="container"><span class="text">16 Bit</span><input type="radio" id="bit16_radio" class="radioBtn" name="radio" value="16"><span class="radioCheckmark"></span></label></br></br>');
		$('.buttonContainer').append('<label class="container"><span class="text">24 Bit</span><input type="radio" id="bit24_radio" class="radioBtn" name="radio" value="24"><span class="radioCheckmark"></span></label>');
		
		$('body').append('<div class="test" id="img_bit_0"></div>');
		$('#img_bit_0').prepend('<img class="test" id="img" src="./images/roboter_farbiges-display_1-bit.png" style="position: absolute; top: 0px; left: 0px; width: 454px; height: 454px;"/>');
		
		$('body').append('<div class="sliderContainer">')
		$('.sliderContainer').append('<span class="text">Höhe/Breite: </span><input type="range" class="slider" id="slider" value="100" step="10" min="0" max="100">');
		$('.sliderContainer').append('<span id="slider_value">100</span>%');
		
		var output = this.output;
		
		$('input:radio[name="radio"]').change(function () {
			var firstImg = document.getElementById("img");
			for (var i = 1; i <= 24; i++) {
				if ($(this).val() == i) {
					var src = './images/roboter_farbiges-display_' + i + '-bit.png';
					$('#img').attr('src', src);
				}
			}
			Result();
		});
		
		$(document).on('input', '#slider', Result);
		
		function Result () {
			var sliderValue = document.getElementById("slider").value;
			
			$('#slider_value').html(sliderValue);
			var height = 454;
			var width = 454;
		
			height = height / 100 * sliderValue;
			width = width / 100 * sliderValue;
		
			document.getElementById("img").style.height = height + "px";
			document.getElementById("img").style.width = width + "px";
		
			var valueRadioBtn = $('input[name=radio]:checked').val();
		
			var finalStorage = (((height * width * valueRadioBtn) / 8) / 1024);
			var finalStorageFixed = finalStorage.toFixed(2);
			output.text = finalStorageFixed;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions_obj_
	this.Actions = new lib.Szene_1_Actions();
	this.Actions.name = "Actions";
	this.Actions.parent = this;
	this.Actions.setTransform(980.1,590,1,1,0,0,0,980.1,590);
	this.Actions.depth = 0;
	this.Actions.isAttachedToCamera = 0
	this.Actions.isAttachedToMask = 0
	this.Actions.layerDepth = 0
	this.Actions.layerIndex = 0
	this.Actions.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Actions).wait(1));

	// Output_obj_
	this.Output = new lib.Szene_1_Output();
	this.Output.name = "Output";
	this.Output.parent = this;
	this.Output.setTransform(787.6,679.6,1,1,0,0,0,787.6,679.6);
	this.Output.depth = 0;
	this.Output.isAttachedToCamera = 0
	this.Output.isAttachedToMask = 0
	this.Output.layerDepth = 0
	this.Output.layerIndex = 1
	this.Output.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Output).wait(1));

	// Textinput_obj_
	this.Textinput = new lib.Szene_1_Textinput();
	this.Textinput.name = "Textinput";
	this.Textinput.parent = this;
	this.Textinput.setTransform(1005.4,658.1,1,1,0,0,0,1005.4,658.1);
	this.Textinput.depth = 0;
	this.Textinput.isAttachedToCamera = 0
	this.Textinput.isAttachedToMask = 0
	this.Textinput.layerDepth = 0
	this.Textinput.layerIndex = 2
	this.Textinput.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Textinput).wait(1));

	// Farbtiefen_obj_
	this.Farbtiefen = new lib.Szene_1_Farbtiefen();
	this.Farbtiefen.name = "Farbtiefen";
	this.Farbtiefen.parent = this;
	this.Farbtiefen.setTransform(665.5,317.3,1,1,0,0,0,665.5,317.3);
	this.Farbtiefen.depth = 0;
	this.Farbtiefen.isAttachedToCamera = 0
	this.Farbtiefen.isAttachedToMask = 0
	this.Farbtiefen.layerDepth = 0
	this.Farbtiefen.layerIndex = 3
	this.Farbtiefen.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Farbtiefen).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1005,390.7,50.90000000000009,329.3);
// library properties:
lib.properties = {
	id: 'C9C350A174742E4C96AE1B1D50D89F02',
	width: 960,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/2018_12_09_Speicherbedarf_mit_Slider_atlas_.png", id:"2018_12_09_Speicherbedarf_mit_Slider_atlas_"},
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