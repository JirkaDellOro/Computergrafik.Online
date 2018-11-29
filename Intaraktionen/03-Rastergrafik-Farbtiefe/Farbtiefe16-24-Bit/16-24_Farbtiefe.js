(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"16_24_Farbtiefe_atlas_", frames: [[0,0,1920,1080]]},
		{name:"16_24_Farbtiefe_atlas_2", frames: [[1320,1082,304,73],[1320,1157,304,73],[0,1082,1318,368],[0,0,1920,1080]]}
];


// symbols:



(lib._16bit = function() {
	this.initialize(ss["16_24_Farbtiefe_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._24bit = function() {
	this.initialize(ss["16_24_Farbtiefe_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["16_24_Farbtiefe_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.genderRobotCG_quer_24Bit = function() {
	this.initialize(ss["16_24_Farbtiefe_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.genderRobotCG_quer_816Bit = function() {
	this.initialize(ss["16_24_Farbtiefe_atlas_"]);
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


(lib.Szene_1_Farbtiefen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Farbtiefen
	this.instance = new lib._24bit();
	this.instance.parent = this;
	this.instance.setTransform(15,666);

	this.instance_1 = new lib._16bit();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15,509);

	this.instance_2 = new lib.CachedTexturedBitmap_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(15.05,588.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Farbtiefen, null, null);


(lib.an_RadioButton = function(options) {
	this._element = new $.an.RadioButton(options);
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
	this.instance = new lib.genderRobotCG_quer_24Bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._24_Bit_Ebene_1, null, null);


(lib._16_Bit_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.genderRobotCG_quer_816Bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._16_Bit_Ebene_1, null, null);


(lib.Szene_1_Radio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Radio
	this.radio_btn_24bit = new lib.an_RadioButton({'id': 'radio_btn_24bit', 'label':'24 Bit', 'value':'1', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.radio_btn_24bit.setTransform(446.65,702.65,2.218,2.218,0,0,0,50,11.1);

	this.radio_btn_16bit = new lib.an_RadioButton({'id': 'radio_btn_16bit', 'label':'16 Bit', 'value':'0', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.radio_btn_16bit.setTransform(446.65,546.15,2.218,2.218,0,0,0,50,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.radio_btn_16bit},{t:this.radio_btn_24bit}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Radio, null, null);


(lib._24Bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._24_Bit_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(360,202.5,1,1,0,0,0,360,202.5);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._24Bit, new cjs.Rectangle(0,0,720,405), null);


(lib._16Bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._16_Bit_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(360,202.5,1,1,0,0,0,360,202.5);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._16Bit, new cjs.Rectangle(0,0,720,405), null);


(lib.Szene_1_Bilder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bilder
	this.img_bit_0 = new lib._16Bit();
	this.img_bit_0.name = "img_bit_0";
	this.img_bit_0.parent = this;
	this.img_bit_0.setTransform(360,202.5,1,1,0,0,0,360,202.5);

	this.img_bit_1 = new lib._24Bit();
	this.img_bit_1.name = "img_bit_1";
	this.img_bit_1.parent = this;
	this.img_bit_1.setTransform(360,202.5,1,1,0,0,0,360,202.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.img_bit_1},{t:this.img_bit_0}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Bilder, null, null);


// stage content:
(lib._1624_Farbtiefe = function(mode,startPosition,loop) {
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
		this.radio_btn_16bit = this.Radio.radio_btn_16bit;
		this.radio_btn_24bit = this.Radio.radio_btn_24bit;
		this.img_bit_1 = this.Bilder.img_bit_1;
		this.img_bit_0 = this.Bilder.img_bit_0;
		var elem = [this.img_bit_0, this.img_bit_1];
		
		console.log($("#dom_overlay_container"));
		$("#dom_overlay_container")[0].addEventListener("click", handleClick);
		
		function handleClick(_event) {
			if(_event.target.value != undefined){
				myFunction(_event.target.value);
			}else{
				console.log("error");
			}
		}
		
		function myFunction(value)
		{
			console.log("test " + value);
			for (var i = 0; i <= 3; i++)
			{
				console.log(i);
				if(value == i)
				{
					console.log("test : "+ i);
					elem[i].alpha = 1;
				}
				else
				{
					elem[i].alpha = 0;	
				}
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Radio_obj_
	this.Radio = new lib.Szene_1_Radio();
	this.Radio.name = "Radio";
	this.Radio.parent = this;
	this.Radio.setTransform(446.7,624.2,1,1,0,0,0,446.7,624.2);
	this.Radio.depth = 0;
	this.Radio.isAttachedToCamera = 0
	this.Radio.isAttachedToMask = 0
	this.Radio.layerDepth = 0
	this.Radio.layerIndex = 0
	this.Radio.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Radio).wait(1));

	// Farbtiefen_obj_
	this.Farbtiefen = new lib.Szene_1_Farbtiefen();
	this.Farbtiefen.name = "Farbtiefen";
	this.Farbtiefen.parent = this;
	this.Farbtiefen.setTransform(344.5,641,1,1,0,0,0,344.5,641);
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
	this.Bilder.setTransform(360,202.5,1,1,0,0,0,360,202.5);
	this.Bilder.depth = 0;
	this.Bilder.isAttachedToCamera = 0
	this.Bilder.isAttachedToMask = 0
	this.Bilder.layerDepth = 0
	this.Bilder.layerIndex = 2
	this.Bilder.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Bilder).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(360,640,360,133);
// library properties:
lib.properties = {
	id: 'F711CC29999C4644A59A71BB63AFA6E5',
	width: 720,
	height: 1280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/16_24_Farbtiefe_atlas_.png?1543271083624", id:"16_24_Farbtiefe_atlas_"},
		{src:"images/16_24_Farbtiefe_atlas_2.png?1543271083625", id:"16_24_Farbtiefe_atlas_2"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1543271083650", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1543271083650", id:"sdk/anwidget.js"},
		{src:"components/ui/src/radiobutton.js?1543271083650", id:"an.RadioButton"}
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