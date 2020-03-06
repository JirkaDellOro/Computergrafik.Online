(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Unterschied_Zu_Rastergrafiken_Int_D_atlas_", frames: [[0,0,1959,1467],[229,1469,47,47],[0,1469,227,230]]}
];


// symbols:



(lib.CachedTexturedBitmap_9 = function() {
	this.initialize(ss["Unterschied_Zu_Rastergrafiken_Int_D_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CSSKopie = function() {
	this.initialize(ss["Unterschied_Zu_Rastergrafiken_Int_D_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Logoklein = function() {
	this.initialize(ss["Unterschied_Zu_Rastergrafiken_Int_D_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Roboter_LogopngKopie = function() {
	this.initialize(img.Roboter_LogopngKopie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2332,2416);


(lib.Roboter_LogoGroß = function() {
	this.initialize(img.Roboter_LogoGroß);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2332,2416);// helper functions:

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


(lib.Test3_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.Roboter_LogoGroß();
	this.instance.parent = this;
	this.instance.setTransform(-58.25,0,0.05,0.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Test3_Ebene_1, null, null);


(lib.Test2_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.Logoklein();
	this.instance.parent = this;
	this.instance.setTransform(-57.85,0,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Test2_Ebene_1, null, null);


(lib.Szene_1_Maske = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Maske
	this.text = new cjs.Text("Vektorgrafik", "29px 'Oswald'");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 136;
	this.text.parent = this;
	this.text.setTransform(734.7,54.1,1.59,1.59);

	this.text_1 = new cjs.Text("Rastergrafik", "29px 'Oswald'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 51;
	this.text_1.lineWidth = 136;
	this.text_1.parent = this;
	this.text_1.setTransform(234.7,54.1,1.59,1.59);

	this.instance = new lib.CachedTexturedBitmap_9();
	this.instance.parent = this;
	this.instance.setTransform(-12.2,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Maske, null, null);


(lib.pngimage_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.Roboter_LogopngKopie();
	this.instance.parent = this;
	this.instance.setTransform(-57.1,-59.15,0.049,0.049);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pngimage_Ebene_1, null, null);


(lib.jpgimage2_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.Logoklein();
	this.instance.parent = this;
	this.instance.setTransform(-57.85,-58.65,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.jpgimage2_Ebene_1, null, null);


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



(lib.Test3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Test3_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(0,60.4,1,1,0,0,0,0,60.4);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Test3, new cjs.Rectangle(-58.2,0,116.5,120.8), null);


(lib.Test2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Test2_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(0,58.6,1,1,0,0,0,0,58.6);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Test2, new cjs.Rectangle(-57.8,0,115.69999999999999,117.3), null);


(lib.Szene_1_script = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// script
	this.myCss = new lib.an_CSS({'id': 'myCss', 'href':'assets/sliderCss.css'});

	this.myCss.setTransform(488,433.65,1.59,1.59,0,0,0,50.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.myCss).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_script, null, null);


(lib.Szene_1_pngtest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pngtest
	this.pngtest = new lib.Test3();
	this.pngtest.name = "pngtest";
	this.pngtest.parent = this;
	this.pngtest.setTransform(734.75,506.95,1.59,1.59,0,0,0,0.1,60.4);

	this.timeline.addTween(cjs.Tween.get(this.pngtest).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_pngtest, null, null);


(lib.Szene_1_jpgtest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// jpgtest
	this.jpgtest = new lib.Test2();
	this.jpgtest.name = "jpgtest";
	this.jpgtest.parent = this;
	this.jpgtest.setTransform(236.8,504.8,1.59,1.59,0,0,0,0,58.6);

	this.timeline.addTween(cjs.Tween.get(this.jpgtest).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_jpgtest, null, null);


(lib.pngimage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.pngimage_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.pngimage, new cjs.Rectangle(-57.1,-59.1,114.2,118.30000000000001), null);


(lib.jpgimage2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.jpgimage2_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.jpgimage2, new cjs.Rectangle(-57.8,-58.6,115.69999999999999,117.30000000000001), null);


(lib.Szene_1_pngimage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pngimage
	this.pngimage = new lib.pngimage();
	this.pngimage.name = "pngimage";
	this.pngimage.parent = this;
	this.pngimage.setTransform(734.7,245.3,1.59,1.59);

	this.timeline.addTween(cjs.Tween.get(this.pngimage).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_pngimage, null, null);


(lib.Szene_1_jpgimage2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// jpgimage2
	this.jpgimage2 = new lib.jpgimage2();
	this.jpgimage2.name = "jpgimage2";
	this.jpgimage2.parent = this;
	this.jpgimage2.setTransform(234.65,244.55,1.59,1.59);

	this.timeline.addTween(cjs.Tween.get(this.jpgimage2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_jpgimage2, null, null);


// stage content:
(lib.Unterschied_Zu_Rastergrafiken_Int_D = function(mode,startPosition,loop) {
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
		if(this.pngimage.parent == undefined || this.pngimage.parent == this)
		this.pngimage = this.pngimage.pngimage;
		if(this.jpgimage2.parent == undefined || this.jpgimage2.parent == this)
		this.jpgimage2 = this.jpgimage2.jpgimage2;
		if(this.pngtest.parent == undefined || this.pngtest.parent == this)
		this.pngtest = this.pngtest.pngtest;
		if(this.jpgtest.parent == undefined || this.jpgtest.parent == this)
		this.jpgtest = this.jpgtest.jpgtest;
		$('body').append('<div class="sliderContainer">')
		$('.sliderContainer').append('<input type="range" class="slider" id="slider" value="1" min="1" max="3">');
		$('.sliderContainer').append('<span id="slider_value">1</span>');
		$('.sliderContainer').css({
		 'position': 'absolute',
		 'margin-top': '-25px',
		 'margin-left': '90px'
		});
		
		$(document).on('input', '#slider', function() {
		    $('#slider_value').html( $(this).val() );
			changePictureSize($(this).val())
		});
		
		var jpgtest = this.jpgtest;
		var pngtest = this.pngtest;
		var scaleX1 = jpgtest.scaleX;
		var scaleY1 = jpgtest.scaleY;
		var scaleX2 = pngtest.scaleX;
		var scaleY2 = pngtest.scaleY;
		var positionY1 = jpgtest.y;
		var positionY2 = pngtest.y;
		
		console.log(imageRoboter);
		
		function changePictureSize(val)
		{
			console.log(jpgtest.scaleX);
			if(val != 1)
			{
				
				jpgtest.scaleX = scaleX1 * val
				jpgtest.scaleY = scaleY1 * val;
				jpgtest.y = positionY1+val*35;
				pngtest.scaleX = scaleX2 * val;
				pngtest.scaleY = scaleY2 * val;
				pngtest.y = positionY2+val*35;
			
			}
			else
			{
				jpgtest.scaleX = 1;
				jpgtest.scaleY = 1;
				pngtest.scaleX = 1;
				pngtest.scaleY = 1;
				jpgtest.y = positionY1;
				pngtest.y = positionY2;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// script_obj_
	this.script = new lib.Szene_1_script();
	this.script.name = "script";
	this.script.parent = this;
	this.script.setTransform(487.9,433.4,1,1,0,0,0,487.9,433.4);
	this.script.depth = 0;
	this.script.isAttachedToCamera = 0
	this.script.isAttachedToMask = 0
	this.script.layerDepth = 0
	this.script.layerIndex = 0
	this.script.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.script).wait(1));

	// pngimage_obj_
	this.pngimage = new lib.Szene_1_pngimage();
	this.pngimage.name = "pngimage";
	this.pngimage.parent = this;
	this.pngimage.setTransform(734.7,245.3,1,1,0,0,0,734.7,245.3);
	this.pngimage.depth = 0;
	this.pngimage.isAttachedToCamera = 0
	this.pngimage.isAttachedToMask = 0
	this.pngimage.layerDepth = 0
	this.pngimage.layerIndex = 1
	this.pngimage.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.pngimage).wait(1));

	// jpgimage2_obj_
	this.jpgimage2 = new lib.Szene_1_jpgimage2();
	this.jpgimage2.name = "jpgimage2";
	this.jpgimage2.parent = this;
	this.jpgimage2.setTransform(234.7,244.6,1,1,0,0,0,234.7,244.6);
	this.jpgimage2.depth = 0;
	this.jpgimage2.isAttachedToCamera = 0
	this.jpgimage2.isAttachedToMask = 0
	this.jpgimage2.layerDepth = 0
	this.jpgimage2.layerIndex = 2
	this.jpgimage2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.jpgimage2).wait(1));

	// Maske_obj_
	this.Maske = new lib.Szene_1_Maske();
	this.Maske.name = "Maske";
	this.Maske.parent = this;
	this.Maske.setTransform(477.6,365.3,1,1,0,0,0,477.6,365.3);
	this.Maske.depth = 0;
	this.Maske.isAttachedToCamera = 0
	this.Maske.isAttachedToMask = 0
	this.Maske.layerDepth = 0
	this.Maske.layerIndex = 3
	this.Maske.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Maske).wait(1));

	// pngtest_obj_
	this.pngtest = new lib.Szene_1_pngtest();
	this.pngtest.name = "pngtest";
	this.pngtest.parent = this;
	this.pngtest.setTransform(734.6,506.9,1,1,0,0,0,734.6,506.9);
	this.pngtest.depth = 0;
	this.pngtest.isAttachedToCamera = 0
	this.pngtest.isAttachedToMask = 0
	this.pngtest.layerDepth = 0
	this.pngtest.layerIndex = 4
	this.pngtest.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.pngtest).wait(1));

	// jpgtest_obj_
	this.jpgtest = new lib.Szene_1_jpgtest();
	this.jpgtest.name = "jpgtest";
	this.jpgtest.parent = this;
	this.jpgtest.setTransform(236.8,504.9,1,1,0,0,0,236.8,504.9);
	this.jpgtest.depth = 0;
	this.jpgtest.isAttachedToCamera = 0
	this.jpgtest.isAttachedToMask = 0
	this.jpgtest.layerDepth = 0
	this.jpgtest.layerIndex = 5
	this.jpgtest.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.jpgtest).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(467.8,358.5,499.49999999999994,373.5);
// library properties:
lib.properties = {
	id: '9F9BE0033F75E348ADB00E4ADFDDCDCB',
	width: 960,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Roboter_LogopngKopie.png?1548105316067", id:"Roboter_LogopngKopie"},
		{src:"images/Roboter_LogoGroß.jpg?1548105316067", id:"Roboter_LogoGroß"},
		{src:"images/Unterschied_Zu_Rastergrafiken_Int_D_atlas_.png?1548105315920", id:"Unterschied_Zu_Rastergrafiken_Int_D_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1548105316067", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1548105316067", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js?1548105316067", id:"an.CSS"}
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
an.compositions['9F9BE0033F75E348ADB00E4ADFDDCDCB'] = {
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