(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"070102_Aufbau_Von_Vektoren_Int_M_atlas_", frames: [[0,0,832,800],[1598,0,448,374],[834,764,762,762],[1598,376,450,363],[1598,741,450,363],[0,802,762,762],[1598,1471,70,441],[1598,1106,450,363],[834,0,762,762],[764,802,47,47]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["070102_Aufbau_Von_Vektoren_Int_M_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["070102_Aufbau_Von_Vektoren_Int_M_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["070102_Aufbau_Von_Vektoren_Int_M_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["070102_Aufbau_Von_Vektoren_Int_M_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["070102_Aufbau_Von_Vektoren_Int_M_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(ss["070102_Aufbau_Von_Vektoren_Int_M_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_7 = function() {
	this.initialize(ss["070102_Aufbau_Von_Vektoren_Int_M_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_8 = function() {
	this.initialize(ss["070102_Aufbau_Von_Vektoren_Int_M_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_9 = function() {
	this.initialize(ss["070102_Aufbau_Von_Vektoren_Int_M_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CSSKopie = function() {
	this.initialize(ss["070102_Aufbau_Von_Vektoren_Int_M_atlas_"]);
	this.gotoAndStop(9);
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


(lib.Szene_1_Koordinatensystem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Koordinatensystem
	this.text = new cjs.Text("X", "69px 'Oswald'");
	this.text.lineHeight = 119;
	this.text.lineWidth = 69;
	this.text.parent = this;
	this.text.setTransform(576.2,500.25,1.2274,1.2274);

	this.text_1 = new cjs.Text("Y", "69px 'Oswald'");
	this.text_1.lineHeight = 119;
	this.text_1.lineWidth = 69;
	this.text_1.parent = this;
	this.text_1.setTransform(71.4,119.5,1.2274,1.2274);

	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(135.15,188.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Koordinatensystem, null, null);


(lib.Szene_1_Black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Black
	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(247.4,250.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Black, null, null);


(lib.roter_Kreis_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_9();
	this.instance.parent = this;
	this.instance.setTransform(-0.45,-0.45,0.1917,0.1917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.roter_Kreis_Ebene_1, null, null);


(lib.red_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_8();
	this.instance.parent = this;
	this.instance.setTransform(-112.6,-90.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.red_Ebene_1, null, null);


(lib.line_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_7();
	this.instance.parent = this;
	this.instance.setTransform(-28.3,-177.75,0.8065,0.8065);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.line_Ebene_1, null, null);


(lib.grüner_Kreis_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_6();
	this.instance.parent = this;
	this.instance.setTransform(-0.45,-0.45,0.1917,0.1917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.grüner_Kreis_Ebene_1, null, null);


(lib.green_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_5();
	this.instance.parent = this;
	this.instance.setTransform(-112.6,-90.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.green_Ebene_1, null, null);


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



(lib.blue_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_4();
	this.instance.parent = this;
	this.instance.setTransform(-112.6,-90.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blue_Ebene_1, null, null);


(lib.blauer_Kreis_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_3();
	this.instance.parent = this;
	this.instance.setTransform(-0.45,-0.45,0.1917,0.1917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blauer_Kreis_Ebene_1, null, null);


(lib.Szene_1_script = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// script
	this.myCss = new lib.an_CSS({'id': 'myCss', 'href':'assets/componentsCss.css'});

	this.myCss.setTransform(604.1,729.25,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.myCss).wait(1));

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


(lib.red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.red_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(-0.1,0.1,1,1,0,0,0,-0.1,0.1);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.red, new cjs.Rectangle(-112.6,-90.7,225,181.5), null);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.line_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(-0.1,0.1,1,1,0,0,0,-0.1,0.1);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.line, new cjs.Rectangle(-28.3,-177.7,56.5,355.6), null);


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


(lib.green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.green_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(-0.1,0.1,1,1,0,0,0,-0.1,0.1);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.green, new cjs.Rectangle(-112.6,-90.7,225,181.5), null);


(lib.blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.blue_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(-0.1,0.1,1,1,0,0,0,-0.1,0.1);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.blue, new cjs.Rectangle(-112.6,-90.7,225,181.5), null);


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
	this.r_circle.setTransform(-436.4,359.4,2.6088,2.6088,0,0,0,72.5,72.5);
	this.r_circle.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.r_circle).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_roter_Kreis, null, null);


(lib.Szene_1_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// red
	this.red = new lib.red();
	this.red.name = "red";
	this.red.parent = this;
	this.red.setTransform(360,346.35);
	this.red.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.red).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_red, null, null);


(lib.Szene_1_line1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line1
	this.line1 = new lib.line();
	this.line1.name = "line1";
	this.line1.parent = this;
	this.line1.setTransform(360,437.1,0.23,0.62,89.9929,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.line1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_line1, null, null);


(lib.Szene_1_grüner_Kreis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// grüner_Kreis
	this.g_circle = new lib.grüner_Kreis();
	this.g_circle.name = "g_circle";
	this.g_circle.parent = this;
	this.g_circle.setTransform(-458.7,806.55,2.6088,2.6088,0,0,0,72.5,72.5);
	this.g_circle.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.g_circle).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_grüner_Kreis, null, null);


(lib.Szene_1_green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// green
	this.green = new lib.green();
	this.green.name = "green";
	this.green.parent = this;
	this.green.setTransform(362.05,344.05);
	this.green.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.green).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_green, null, null);


(lib.Szene_1_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blue
	this.blue = new lib.blue();
	this.blue.name = "blue";
	this.blue.parent = this;
	this.blue.setTransform(360.05,345.85);
	this.blue.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.blue).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_blue, null, null);


(lib.Szene_1_blauer_Kreis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blauer_Kreis
	this.b_circle = new lib.blauer_Kreis();
	this.b_circle.name = "b_circle";
	this.b_circle.parent = this;
	this.b_circle.setTransform(-458.7,547.3,2.6088,2.6088,0,0,0,72.5,72.5);
	this.b_circle.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.b_circle).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_blauer_Kreis, null, null);


(lib.line3_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.line();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.line3_Ebene_1, null, null);


(lib.line3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.line3_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(-0.1,0.1,1,1,0,0,0,-0.1,0.1);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.line3, new cjs.Rectangle(-28.3,-177.7,56.5,355.6), null);


(lib.line2_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.line();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.line2_Ebene_1, null, null);


(lib.line2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.line2_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(-0.1,0.1,1,1,0,0,0,-0.1,0.1);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.line2, new cjs.Rectangle(-28.3,-177.7,56.5,355.6), null);


(lib.Szene_1_line3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line3
	this.line3 = new lib.line3();
	this.line3.name = "line3";
	this.line3.parent = this;
	this.line3.setTransform(412.6,346.6,0.23,0.6,-31.9997,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.line3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_line3, null, null);


(lib.Szene_1_line2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line2
	this.line2 = new lib.line2();
	this.line2.name = "line2";
	this.line2.parent = this;
	this.line2.setTransform(305.8,346.85,0.23,0.6,31.9997,0,0,0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.line2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_line2, null, null);


// stage content:
(lib._070102_Aufbau_Von_Vektoren_Int_M = function(mode,startPosition,loop) {
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
		this.g_circle = this.grüner_Kreis.g_circle;
		if(this.line3.parent == undefined || this.line3.parent == this)
		this.line3 = this.line3.line3;
		if(this.line2.parent == undefined || this.line2.parent == this)
		this.line2 = this.line2.line2;
		if(this.line1.parent == undefined || this.line1.parent == this)
		this.line1 = this.line1.line1;
		this.myCss = this.script.myCss;
		this.b_circle = this.blauer_Kreis.b_circle;
		if(this.red.parent == undefined || this.red.parent == this)
		this.red = this.red.red;
		if(this.blue.parent == undefined || this.blue.parent == this)
		this.blue = this.blue.blue;
		if(this.green.parent == undefined || this.green.parent == this)
		this.green = this.green.green;
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
		
		$('.sliderContainer').append('<span class="text">Linienstärke: </span><input type="range" class="slider" id="slider" value="1" min="1" max="3">');
		$('.sliderContainer').append('<span id="slider_value">1</span>');
		
		$('body').append('<div class="audioFile">')
		$('.audioFile').append('<audio id="hexAudio" src ="./sounds/hexAudioInteraktion.wav" type="audio/wav"  autoplay></audio>');
		
		$('.body').css({
			'overscroll-behavior-y': 'contain',
			'overscroll-behavior-x': 'contain',
			'font-size':'30px'
		});
		
		$('.text').css({
			'font-size':'30px'
		});
		
		$('.sliderContainer').css({
			'position': 'absolute',
			'margin-top': '-285px',
			'margin-left': '160px'
		});
		
		$('.hexContainer').css({
			'position': 'absolute',
			'margin-top': '-500px',
			'margin-left': '308px'
		});
		
		$('#hex_char').css({
			'font-size': '50px'
		});
		
		$('#hex_r_color').css({
			'color': 'red',
			'font-size': '50px'
		});
		$('#hex_g_color').css({
			'color': 'green',
			'font-size': '50px'
		});
		$('#hex_b_color').css({
			'color': 'blue',
			'font-size': '50px'
		});
		
		
		
		window.onload = function() {
		    document.getElementById("hexAudio").play();
		}
		
		var r_id = this.red;
		var g_id = this.green;
		var b_id = this.blue;
		var line1 = this.line1;
		var line2 = this.line2;
		var line3 = this.line3;
		var scaleXL1 = line1.scaleX;
		var scaleXL2 = line2.scaleX;
		var scaleXL3 = line3.scaleX;
		
		
		var hex_output = this.hex_output;
		function changePictureSize(val)
		{
			
			if(val != 1)
			{
				
				line1.scaleX = scaleXL1 * val
				line2.scaleX = scaleXL2 * val
				line3.scaleX = scaleXL3 * val
			
			}
			else
			{
				line1.scaleX = scaleXL1;
				line2.scaleX = scaleXL2;
				line3.scaleX = scaleXL3;
				
			}
		}
		
		$(document).on('input', '#slider', function() {
		    $('#slider_value').html( $(this).val() );
			changePictureSize($(this).val())
		});
		
		
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

	// grüner_Kreis_obj_
	this.grüner_Kreis = new lib.Szene_1_grüner_Kreis();
	this.grüner_Kreis.name = "grüner_Kreis";
	this.grüner_Kreis.parent = this;
	this.grüner_Kreis.setTransform(-458.5,806.8,1,1,0,0,0,-458.5,806.8);
	this.grüner_Kreis.depth = 0;
	this.grüner_Kreis.isAttachedToCamera = 0
	this.grüner_Kreis.isAttachedToMask = 0
	this.grüner_Kreis.layerDepth = 0
	this.grüner_Kreis.layerIndex = 0
	this.grüner_Kreis.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.grüner_Kreis).wait(1));

	// line3_obj_
	this.line3 = new lib.Szene_1_line3();
	this.line3.name = "line3";
	this.line3.parent = this;
	this.line3.setTransform(412.6,346.6,1,1,0,0,0,412.6,346.6);
	this.line3.depth = 0;
	this.line3.isAttachedToCamera = 0
	this.line3.isAttachedToMask = 0
	this.line3.layerDepth = 0
	this.line3.layerIndex = 1
	this.line3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.line3).wait(1));

	// line2_obj_
	this.line2 = new lib.Szene_1_line2();
	this.line2.name = "line2";
	this.line2.parent = this;
	this.line2.setTransform(305.7,346.8,1,1,0,0,0,305.7,346.8);
	this.line2.depth = 0;
	this.line2.isAttachedToCamera = 0
	this.line2.isAttachedToMask = 0
	this.line2.layerDepth = 0
	this.line2.layerIndex = 2
	this.line2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.line2).wait(1));

	// line1_obj_
	this.line1 = new lib.Szene_1_line1();
	this.line1.name = "line1";
	this.line1.parent = this;
	this.line1.setTransform(359.9,437.1,1,1,0,0,0,359.9,437.1);
	this.line1.depth = 0;
	this.line1.isAttachedToCamera = 0
	this.line1.isAttachedToMask = 0
	this.line1.layerDepth = 0
	this.line1.layerIndex = 3
	this.line1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.line1).wait(1));

	// Koordinatensystem_obj_
	this.Koordinatensystem = new lib.Szene_1_Koordinatensystem();
	this.Koordinatensystem.name = "Koordinatensystem";
	this.Koordinatensystem.parent = this;
	this.Koordinatensystem.setTransform(366.4,381.9,1,1,0,0,0,366.4,381.9);
	this.Koordinatensystem.depth = 0;
	this.Koordinatensystem.isAttachedToCamera = 0
	this.Koordinatensystem.isAttachedToMask = 0
	this.Koordinatensystem.layerDepth = 0
	this.Koordinatensystem.layerIndex = 4
	this.Koordinatensystem.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Koordinatensystem).wait(1));

	// script_obj_
	this.script = new lib.Szene_1_script();
	this.script.name = "script";
	this.script.parent = this;
	this.script.setTransform(604.1,729.3,1,1,0,0,0,604.1,729.3);
	this.script.depth = 0;
	this.script.isAttachedToCamera = 0
	this.script.isAttachedToMask = 0
	this.script.layerDepth = 0
	this.script.layerIndex = 5
	this.script.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.script).wait(1));

	// blauer_Kreis_obj_
	this.blauer_Kreis = new lib.Szene_1_blauer_Kreis();
	this.blauer_Kreis.name = "blauer_Kreis";
	this.blauer_Kreis.parent = this;
	this.blauer_Kreis.setTransform(-458.5,547.5,1,1,0,0,0,-458.5,547.5);
	this.blauer_Kreis.depth = 0;
	this.blauer_Kreis.isAttachedToCamera = 0
	this.blauer_Kreis.isAttachedToMask = 0
	this.blauer_Kreis.layerDepth = 0
	this.blauer_Kreis.layerIndex = 6
	this.blauer_Kreis.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.blauer_Kreis).wait(1));

	// red_obj_
	this.red = new lib.Szene_1_red();
	this.red.name = "red";
	this.red.parent = this;
	this.red.setTransform(359.9,346.4,1,1,0,0,0,359.9,346.4);
	this.red.depth = 0;
	this.red.isAttachedToCamera = 0
	this.red.isAttachedToMask = 0
	this.red.layerDepth = 0
	this.red.layerIndex = 7
	this.red.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.red).wait(1));

	// blue_obj_
	this.blue = new lib.Szene_1_blue();
	this.blue.name = "blue";
	this.blue.parent = this;
	this.blue.setTransform(359.9,345.9,1,1,0,0,0,359.9,345.9);
	this.blue.depth = 0;
	this.blue.isAttachedToCamera = 0
	this.blue.isAttachedToMask = 0
	this.blue.layerDepth = 0
	this.blue.layerIndex = 8
	this.blue.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.blue).wait(1));

	// green_obj_
	this.green = new lib.Szene_1_green();
	this.green.name = "green";
	this.green.parent = this;
	this.green.setTransform(361.9,344.1,1,1,0,0,0,361.9,344.1);
	this.green.depth = 0;
	this.green.isAttachedToCamera = 0
	this.green.isAttachedToMask = 0
	this.green.layerDepth = 0
	this.green.layerIndex = 9
	this.green.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.green).wait(1));

	// roter_Kreis_obj_
	this.roter_Kreis = new lib.Szene_1_roter_Kreis();
	this.roter_Kreis.name = "roter_Kreis";
	this.roter_Kreis.parent = this;
	this.roter_Kreis.setTransform(-436.2,359.6,1,1,0,0,0,-436.2,359.6);
	this.roter_Kreis.depth = 0;
	this.roter_Kreis.isAttachedToCamera = 0
	this.roter_Kreis.isAttachedToMask = 0
	this.roter_Kreis.layerDepth = 0
	this.roter_Kreis.layerIndex = 10
	this.roter_Kreis.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.roter_Kreis).wait(1));

	// Black_obj_
	this.Black = new lib.Szene_1_Black();
	this.Black.name = "Black";
	this.Black.parent = this;
	this.Black.setTransform(359.4,343.9,1,1,0,0,0,359.4,343.9);
	this.Black.depth = 0;
	this.Black.isAttachedToCamera = 0
	this.Black.isAttachedToMask = 0
	this.Black.layerDepth = 0
	this.Black.layerIndex = 11
	this.Black.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Black).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289,757.1,952.8,240.19999999999993);
// library properties:
lib.properties = {
	id: '9C291EFAD4A3F945A4BDAA02D92B446F',
	width: 720,
	height: 1280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/070102_Aufbau_Von_Vektoren_Int_M_atlas_.png", id:"070102_Aufbau_Von_Vektoren_Int_M_atlas_"},
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
an.compositions['9C291EFAD4A3F945A4BDAA02D92B446F'] = {
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