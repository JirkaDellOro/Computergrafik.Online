(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
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



(lib.Szene_1_Actions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Actions
	this.customCSS = new lib.an_CSS({'id': 'customCSS', 'href':'assets/0509_I_Druck_mobile.css'});

	this.customCSS.setTransform(828.9,361.3,1,1,0,0,0,50,11);

	this.componentsCSS = new lib.an_CSS({'id': 'componentsCSS', 'href':'assets/componentsCss.css'});

	this.componentsCSS.setTransform(828.9,279.95,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.componentsCSS},{t:this.customCSS}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Actions, null, null);


// stage content:
(lib._0509_I_Druck_mobile = function(mode,startPosition,loop) {
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
		this.componentsCSS = this.Actions.componentsCSS;
		this.customCSS = this.Actions.customCSS;
		//HTML
		$('#animation_container').append('<div class="imageContainer" id="imageContainer"></div>');
		$('#imageContainer').prepend('<img class="original" id="img" src="./images/RoboterSW.png"/>');
		//RADIOBUTTONS
		$('#animation_container').append('<div class="radioContainer">')
		$('.radioContainer').append('<label class="container">Original<input type="radio" id="original_radio" class="radioBtn" name="radio" value="1"  checked><span class="radioCheckmark"></span></label></br>');
		$('.radioContainer').append('<label class="container">Amplitudenmoduliert gerastert<input type="radio" id="am_radio" class="radioBtn" name="radio" value="2"><span class="radioCheckmark"></span></label></br>');
		$('.radioContainer').append('<label class="container">Frequenzmoduliert gerastert<input type="radio" id="fm_radio" class="radioBtn" name="radio" value="3"><span class="radioCheckmark"></span></label></br>');
		//SLIDER
		$('#animation_container').append('<div class="sliderContainer1">')
		$('.sliderContainer1').append('<input type="range" class="slider" id="sliderEnlarge" value="0" min="0" max="10" >');
		$('.sliderContainer1').append('<span id="sliderEnlarge_value">Vergrößerung</span>');
		$('#animation_container').append('<div class="sliderContainer2">')
		$('.sliderContainer2').append('<input type="range" class="slider" id="sliderResolution" value="0" min="0" max="4" >');
		$('.sliderContainer2').append('<span id="sliderResolution_value">Größe der Dots</span>');
		$('.sliderContainer2').css('visibility', 'hidden');
		//IMGS
		var imgsAM = ["RobotAM_dotSize5.png", "RobotAM_dotSize10.png", "RobotAM_dotSize20.png", "RobotAM_dotSize40.png", "RobotAM_dotSize80.png"];
		var imgsFM = ["RobotFM_PPI80.png", "RobotFM_PPI40.png", "RobotFM_PPI20.png", "RobotFM_PPI10.png", "RobotFM_PPI5.png"];
		
		
		$('input:radio[name="radio"]').change(function () {
			$("#sliderResolution").val(0);
			var firstImg = document.getElementById("img");
			if ($(this).val() == '1') {
				$('#img').attr('src', './images/RoboterSW.png');
				$('.sliderContainer2').css('visibility', 'hidden');
			}
			if ($(this).val() == '2') {
				$('#img').attr('src', './images/AM/RobotAM_dotSize5.png');
				$('.sliderContainer2').css('visibility', 'visible');
			}
			if ($(this).val() == '3') {
				$('#img').attr('src', './images/FM/RobotFM_PPI80.png');
				$('.sliderContainer2').css('visibility', 'visible');		
			}
		
		});
		
		$(document).on('input', '#sliderEnlarge', function () {
			//$('#sliderEnlarge_value').html($(this).val());
			sliderEnlarge($(this).val());
		});
		$(document).on('input', '#sliderResolution', function () {
			//$('#sliderResolution_value').html($(this).val());
			sliderResolution($(this).val());
		});
		
		function sliderEnlarge(val) {
			if (val != 0) {
				var imageScale = 'scale(' + 1 + "." + val + ')';
				console.log(imageScale);
				if (val < 5)
					$('#img').css("transform", imageScale);
				else if (10 <= val)
					$('#img').css("transform", "scale(2.0)");
			}
		}
		
		function sliderResolution(val) {
			if ($("#am_radio:checked").val() == "2") {
				var firstImg = document.getElementById("img");
				console.log(imgsAM);
				var currentImg = imgsAM[val];
				$('#img').attr('src', './images/AM/' + currentImg);
			} else if ($("#fm_radio:checked").val() == "3") {
				var firstImg = document.getElementById("img");
				console.log(imgsFM);
				var currentImg = imgsFM[val];
				$('#img').attr('src', './images/FM/' + currentImg);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions_obj_
	this.Actions = new lib.Szene_1_Actions();
	this.Actions.name = "Actions";
	this.Actions.parent = this;
	this.Actions.setTransform(828.9,320.6,1,1,0,0,0,828.9,320.6);
	this.Actions.depth = 0;
	this.Actions.isAttachedToCamera = 0
	this.Actions.isAttachedToMask = 0
	this.Actions.layerDepth = 0
	this.Actions.layerIndex = 0
	this.Actions.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Actions).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1258.4,908.5,-379.0000000000001,-535.7);
// library properties:
lib.properties = {
	id: '6AF29F20C261A7418088949A9F56F400',
	width: 960,
	height: 1280,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
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
an.compositions['6AF29F20C261A7418088949A9F56F400'] = {
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