(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Farbtiefe_Graustufen_atlas_", frames: [[0,0,1920,1080]]},
		{name:"Farbtiefe_Graustufen_atlas_2", frames: [[0,0,1920,1080]]},
		{name:"Farbtiefe_Graustufen_atlas_3", frames: [[0,0,1920,1080]]},
		{name:"Farbtiefe_Graustufen_atlas_4", frames: [[564,1082,280,44],[846,1082,280,44],[0,1082,280,44],[282,1082,280,44],[0,0,1920,1080]]}
];


// symbols:



(lib._1bit = function() {
	this.initialize(ss["Farbtiefe_Graustufen_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2bit = function() {
	this.initialize(ss["Farbtiefe_Graustufen_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._4bit = function() {
	this.initialize(ss["Farbtiefe_Graustufen_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._8bit = function() {
	this.initialize(ss["Farbtiefe_Graustufen_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.genderRobotCG_quer_1Bit = function() {
	this.initialize(ss["Farbtiefe_Graustufen_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.genderRobotCG_quer_2Bit = function() {
	this.initialize(ss["Farbtiefe_Graustufen_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.genderRobotCG_quer_4Bit = function() {
	this.initialize(ss["Farbtiefe_Graustufen_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.genderRobotCG_quer_8Bit = function() {
	this.initialize(ss["Farbtiefe_Graustufen_atlas_3"]);
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



(lib._8bit_schema = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib._8bit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,280,44);


(lib._8bit_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.genderRobotCG_quer_8Bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,720,405.1);


(lib._4bit_schema = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib._4bit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,280,44);


(lib._4bit_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.genderRobotCG_quer_4Bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,720,405);


(lib._2bit_schema = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib._2bit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,280,44);


(lib._2bit_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.genderRobotCG_quer_2Bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,720,405);


(lib._1bit_schema = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib._1bit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,280,44);


(lib._1bit_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.genderRobotCG_quer_1Bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,720,405);


(lib.Szene_1_Radiobuttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Radiobuttons
	this.radio_btn_2bit = new lib.an_RadioButton({'id': 'radio_btn_2bit', 'label':'2 Bit', 'value':'1', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.radio_btn_2bit.setTransform(460.25,614.85,1.4923,1.4923,0,0,0,50.1,11);

	this.radio_btn_4bit = new lib.an_RadioButton({'id': 'radio_btn_4bit', 'label':'4 Bit', 'value':'2', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.radio_btn_4bit.setTransform(460.25,727.65,1.4923,1.4923,0,0,0,50.1,11);

	this.radio_btn_8bit = new lib.an_RadioButton({'id': 'radio_btn_8bit', 'label':'8 Bit', 'value':'3', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.radio_btn_8bit.setTransform(460.25,848.55,1.4923,1.4923,0,0,0,50.1,11);

	this.radio_btn_1bit = new lib.an_RadioButton({'id': 'radio_btn_1bit', 'label':'1 Bit', 'value':'0', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.radio_btn_1bit.setTransform(460.25,503.7,1.4923,1.4923,0,0,0,50.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.radio_btn_1bit},{t:this.radio_btn_8bit},{t:this.radio_btn_4bit},{t:this.radio_btn_2bit}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Radiobuttons, null, null);


(lib.Szene_1_Farbtiefen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Farbtiefen
	this.instance = new lib._8bit_schema("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(190,848.1,1,1,0,0,0,140,22);

	this.instance_1 = new lib._4bit_schema("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(190,730.35,1,1,0,0,0,140,22);

	this.instance_2 = new lib._2bit_schema("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(190,614.85,1,1,0,0,0,140,22);

	this.instance_3 = new lib._1bit_schema("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(190,498.15,1,1,0,0,0,140,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Farbtiefen, null, null);


(lib.Szene_1_Bilder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bilder
	this.img_bit_0 = new lib._1bit_1();
	this.img_bit_0.name = "img_bit_0";
	this.img_bit_0.parent = this;
	this.img_bit_0.setTransform(360,202.55,1,1,0,0,0,360,202.5);

	this.img_bit_1 = new lib._2bit_1();
	this.img_bit_1.name = "img_bit_1";
	this.img_bit_1.parent = this;
	this.img_bit_1.setTransform(360,202.55,1,1,0,0,0,360,202.5);

	this.img_bit_2 = new lib._4bit_1();
	this.img_bit_2.name = "img_bit_2";
	this.img_bit_2.parent = this;
	this.img_bit_2.setTransform(360,202.55,1,1,0,0,0,360,202.5);

	this.img_bit_3 = new lib._8bit_1();
	this.img_bit_3.name = "img_bit_3";
	this.img_bit_3.parent = this;
	this.img_bit_3.setTransform(360,202.5,1,1,0,0,0,360,202.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.img_bit_3},{t:this.img_bit_2},{t:this.img_bit_1},{t:this.img_bit_0}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Bilder, null, null);


// stage content:
(lib.Farbtiefe_Graustufen = function(mode,startPosition,loop) {
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
		this.radio_btn_1bit = this.Radiobuttons.radio_btn_1bit;
		this.radio_btn_8bit = this.Radiobuttons.radio_btn_8bit;
		this.radio_btn_4bit = this.Radiobuttons.radio_btn_4bit;
		this.radio_btn_2bit = this.Radiobuttons.radio_btn_2bit;
		this.img_bit_3 = this.Bilder.img_bit_3;
		this.img_bit_2 = this.Bilder.img_bit_2;
		this.img_bit_1 = this.Bilder.img_bit_1;
		this.img_bit_0 = this.Bilder.img_bit_0;
		var elem = [this.img_bit_0, this.img_bit_1, this.img_bit_2, this.img_bit_3];
		
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

	// Radiobuttons_obj_
	this.Radiobuttons = new lib.Szene_1_Radiobuttons();
	this.Radiobuttons.name = "Radiobuttons";
	this.Radiobuttons.parent = this;
	this.Radiobuttons.setTransform(460.1,676.1,1,1,0,0,0,460.1,676.1);
	this.Radiobuttons.depth = 0;
	this.Radiobuttons.isAttachedToCamera = 0
	this.Radiobuttons.isAttachedToMask = 0
	this.Radiobuttons.layerDepth = 0
	this.Radiobuttons.layerIndex = 0
	this.Radiobuttons.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Radiobuttons).wait(1));

	// Farbtiefen_obj_
	this.Farbtiefen = new lib.Szene_1_Farbtiefen();
	this.Farbtiefen.name = "Farbtiefen";
	this.Farbtiefen.parent = this;
	this.Farbtiefen.setTransform(190,673.1,1,1,0,0,0,190,673.1);
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
p.nominalBounds = new cjs.Rectangle(360,640,360,230.10000000000002);
// library properties:
lib.properties = {
	id: 'E170D18109494A478DDE61B1DE24B264',
	width: 720,
	height: 1280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Farbtiefe_Graustufen_atlas_.png?1543263494479", id:"Farbtiefe_Graustufen_atlas_"},
		{src:"images/Farbtiefe_Graustufen_atlas_2.png?1543263494479", id:"Farbtiefe_Graustufen_atlas_2"},
		{src:"images/Farbtiefe_Graustufen_atlas_3.png?1543263494479", id:"Farbtiefe_Graustufen_atlas_3"},
		{src:"images/Farbtiefe_Graustufen_atlas_4.png?1543263494480", id:"Farbtiefe_Graustufen_atlas_4"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1543263494502", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1543263494502", id:"sdk/anwidget.js"},
		{src:"components/ui/src/radiobutton.js?1543263494502", id:"an.RadioButton"}
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