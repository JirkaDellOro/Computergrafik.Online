(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"speicherbedarf_neu_atlas_", frames: [[199,252,304,73],[199,494,280,44],[199,327,304,73],[199,448,280,44],[199,402,280,44],[0,540,280,44],[0,126,417,124],[0,0,417,124],[0,252,197,124],[0,378,197,124]]}
];


// symbols:



(lib._16bit = function() {
	this.initialize(ss["speicherbedarf_neu_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1bit = function() {
	this.initialize(ss["speicherbedarf_neu_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._24bit = function() {
	this.initialize(ss["speicherbedarf_neu_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._2bit = function() {
	this.initialize(ss["speicherbedarf_neu_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._4bit = function() {
	this.initialize(ss["speicherbedarf_neu_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._8bit = function() {
	this.initialize(ss["speicherbedarf_neu_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_13 = function() {
	this.initialize(ss["speicherbedarf_neu_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_14 = function() {
	this.initialize(ss["speicherbedarf_neu_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_15 = function() {
	this.initialize(ss["speicherbedarf_neu_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_16 = function() {
	this.initialize(ss["speicherbedarf_neu_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.genderRobotCG_quer_v13_16bit = function() {
	this.initialize(img.genderRobotCG_quer_v13_16bit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,2840);


(lib.genderRobotCG_quer_v13_1bit = function() {
	this.initialize(img.genderRobotCG_quer_v13_1bit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,2840);


(lib.genderRobotCG_quer_v13_24bit = function() {
	this.initialize(img.genderRobotCG_quer_v13_24bit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,2840);


(lib.genderRobotCG_quer_v13_2bit = function() {
	this.initialize(img.genderRobotCG_quer_v13_2bit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,2840);


(lib.genderRobotCG_quer_v13_4bit = function() {
	this.initialize(img.genderRobotCG_quer_v13_4bit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,2840);


(lib.genderRobotCG_quer_v13_8bit = function() {
	this.initialize(img.genderRobotCG_quer_v13_8bit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,2840);// helper functions:

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


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
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



(lib.Szene_1_Output = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Output
	this.output = new cjs.Text("", "34px 'Oswald'");
	this.output.name = "output";
	this.output.lineHeight = 60;
	this.output.lineWidth = 123;
	this.output.parent = this;
	this.output.setTransform(280.65,1108.3);

	this.instance = new lib.CachedTexturedBitmap_14();
	this.instance.parent = this;
	this.instance.setTransform(406,1104.6,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69,1104.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.output}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Output, null, null);


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



(lib._24bit_farbtiefe_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib._24bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.9252,0.5794);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._24bit_farbtiefe_Ebene_1, null, null);


(lib._24_Bit_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.genderRobotCG_quer_v13_24bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.12,0.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._24_Bit_Ebene_1, null, null);


(lib._16bit_farbtiefe_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib._16bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.9252,0.5795);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._16bit_farbtiefe_Ebene_1, null, null);


(lib._16_Bit_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.genderRobotCG_quer_v13_16bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.12,0.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._16_Bit_Ebene_1, null, null);


(lib._8bit_farbtiefe_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib._8bit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._8bit_farbtiefe_Ebene_1, null, null);


(lib._8_Bit_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.genderRobotCG_quer_v13_8bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.12,0.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._8_Bit_Ebene_1, null, null);


(lib._4bit_farbtiefe_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib._4bit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._4bit_farbtiefe_Ebene_1, null, null);


(lib._4_Bit_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.genderRobotCG_quer_v13_4bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.12,0.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._4_Bit_Ebene_1, null, null);


(lib._2bit_farbtiefe_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib._2bit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2bit_farbtiefe_Ebene_1, null, null);


(lib._2_Bit_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.genderRobotCG_quer_v13_2bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.12,0.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2_Bit_Ebene_1, null, null);


(lib._1bit_farbtiefe_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib._1bit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._1bit_farbtiefe_Ebene_1, null, null);


(lib._1_Bit_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.genderRobotCG_quer_v13_1bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.12,0.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._1_Bit_Ebene_1, null, null);


(lib.Szene_1_Textinput = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Textinput
	this.width = new lib.an_TextInput({'id': 'width', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.width.setTransform(585,1052.95,1.61,1.61,0,0,0,50,11);

	this.height = new lib.an_TextInput({'id': 'height', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.height.setTransform(247.95,1052.95,1.61,1.61,0,0,0,50,11);

	this.instance = new lib.CachedTexturedBitmap_16();
	this.instance.parent = this;
	this.instance.setTransform(69,1017.85,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(406,1017.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.height},{t:this.width}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Textinput, null, null);


(lib.Szene_1_Radiobtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Radiobtn
	this.bit24_radio = new lib.an_RadioButton({'id': 'bit24_radio', 'label':'Radio', 'value':'5', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.bit24_radio.setTransform(501.5,955.3,1.906,1.906,0,0,0,50.1,11);

	this.bit16_radio = new lib.an_RadioButton({'id': 'bit16_radio', 'label':'Radio', 'value':'4', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.bit16_radio.setTransform(501.5,848.95,1.906,1.906,0,0,0,50.1,11);

	this.bit8_radio = new lib.an_RadioButton({'id': 'bit8_radio', 'label':'Radio', 'value':'3', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.bit8_radio.setTransform(501.5,742.7,1.906,1.906,0,0,0,50.1,11);

	this.bit4_radio = new lib.an_RadioButton({'id': 'bit4_radio', 'label':'Radio', 'value':'2', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.bit4_radio.setTransform(501.5,636.45,1.906,1.906,0,0,0,50.1,11);

	this.bit2_radio = new lib.an_RadioButton({'id': 'bit2_radio', 'label':'Radio', 'value':'1', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.bit2_radio.setTransform(501.5,530.2,1.906,1.906,0,0,0,50.1,11);

	this.bit1_radio = new lib.an_RadioButton({'id': 'bit1_radio', 'label':'Radio', 'value':'0', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.bit1_radio.setTransform(501.5,423.95,1.906,1.906,0,0,0,50.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bit1_radio},{t:this.bit2_radio},{t:this.bit4_radio},{t:this.bit8_radio},{t:this.bit16_radio},{t:this.bit24_radio}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Radiobtn, null, null);


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


(lib._24Bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._24_Bit_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(359.9,170.4,1,1,0,0,0,359.9,170.4);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._24Bit, new cjs.Rectangle(0,0,720,340.8), null);


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


(lib._16Bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._16_Bit_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(359.9,170.4,1,1,0,0,0,359.9,170.4);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._16Bit, new cjs.Rectangle(0,0,720,340.8), null);


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


(lib._8Bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._8_Bit_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(359.9,170.4,1,1,0,0,0,359.9,170.4);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._8Bit, new cjs.Rectangle(0,0,720,340.8), null);


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


(lib._4Bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._4_Bit_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(359.9,170.4,1,1,0,0,0,359.9,170.4);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._4Bit, new cjs.Rectangle(0,0,720,340.8), null);


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


(lib._2Bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._2_Bit_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(359.9,170.4,1,1,0,0,0,359.9,170.4);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._2Bit, new cjs.Rectangle(0,0,720,340.8), null);


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


(lib._1Bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._1_Bit_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(359.9,170.4,1,1,0,0,0,359.9,170.4);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._1Bit, new cjs.Rectangle(0,0,720,340.8), null);


(lib.Szene_1_Farbtiefen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Farbtiefen
	this.instance = new lib._24bitfarbtiefe();
	this.instance.parent = this;
	this.instance.setTransform(209.6,955.2,1,1,0,0,0,140.6,21.2);

	this.instance_1 = new lib._16bitfarbtiefe();
	this.instance_1.parent = this;
	this.instance_1.setTransform(209.5,849.2,1,1,0,0,0,140.5,21.2);

	this.instance_2 = new lib._8bitfarbtiefe();
	this.instance_2.parent = this;
	this.instance_2.setTransform(210,743,1,1,0,0,0,140,22);

	this.instance_3 = new lib._4bitfarbtiefe();
	this.instance_3.parent = this;
	this.instance_3.setTransform(210,637,1,1,0,0,0,140,22);

	this.instance_4 = new lib._2bitfarbtiefe();
	this.instance_4.parent = this;
	this.instance_4.setTransform(210,531,1,1,0,0,0,140,22);

	this.instance_5 = new lib._1bitfarbtiefe();
	this.instance_5.parent = this;
	this.instance_5.setTransform(210,425,1,1,0,0,0,140,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Farbtiefen, null, null);


(lib.Szene_1_Bilder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bilder
	this.bit_img_0 = new lib._1Bit();
	this.bit_img_0.name = "bit_img_0";
	this.bit_img_0.parent = this;
	this.bit_img_0.setTransform(359.9,170.4,1,1,0,0,0,359.9,170.4);

	this.bit_img_1 = new lib._2Bit();
	this.bit_img_1.name = "bit_img_1";
	this.bit_img_1.parent = this;
	this.bit_img_1.setTransform(359.95,170.4,1,1,0,0,0,359.9,170.4);

	this.bit_img_2 = new lib._4Bit();
	this.bit_img_2.name = "bit_img_2";
	this.bit_img_2.parent = this;
	this.bit_img_2.setTransform(359.95,171.25,1,1,0,0,0,359.9,170.4);

	this.bit_img_3 = new lib._8Bit();
	this.bit_img_3.name = "bit_img_3";
	this.bit_img_3.parent = this;
	this.bit_img_3.setTransform(359.9,170.4,1,1,0,0,0,359.9,170.4);

	this.bit_img_4 = new lib._16Bit();
	this.bit_img_4.name = "bit_img_4";
	this.bit_img_4.parent = this;
	this.bit_img_4.setTransform(359.95,171.25,1,1,0,0,0,359.9,170.4);

	this.bit_img_5 = new lib._24Bit();
	this.bit_img_5.name = "bit_img_5";
	this.bit_img_5.parent = this;
	this.bit_img_5.setTransform(359.95,171.25,1,1,0,0,0,359.9,170.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bit_img_5},{t:this.bit_img_4},{t:this.bit_img_3},{t:this.bit_img_2},{t:this.bit_img_1},{t:this.bit_img_0}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Bilder, null, null);


// stage content:
(lib.speicherbedarf_neu = function(mode,startPosition,loop) {
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
		this.output = this.Output.output;
		this.height = this.Textinput.height;
		this.width = this.Textinput.width;
		this.bit1_radio = this.Radiobtn.bit1_radio;
		this.bit2_radio = this.Radiobtn.bit2_radio;
		this.bit4_radio = this.Radiobtn.bit4_radio;
		this.bit8_radio = this.Radiobtn.bit8_radio;
		this.bit16_radio = this.Radiobtn.bit16_radio;
		this.bit24_radio = this.Radiobtn.bit24_radio;
		this.bit_img_5 = this.Bilder.bit_img_5;
		this.bit_img_4 = this.Bilder.bit_img_4;
		this.bit_img_3 = this.Bilder.bit_img_3;
		this.bit_img_2 = this.Bilder.bit_img_2;
		this.bit_img_1 = this.Bilder.bit_img_1;
		this.bit_img_0 = this.Bilder.bit_img_0;
		var elem = [this.bit_img_0, this.bit_img_1, this.bit_img_2, this.bit_img_3, this.bit_img_4, this.bit_img_5];
			
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
			for (var i = 0; i <= 5; i++)
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
		
		if(!this.width_change_cbk || !this.height_change_cbk) {
			function width_change(evt) {
				console.log(evt.target.value);
				var height = document.getElementById("height").value;
				var width = document.getElementById("width").value;
				var result = height*width;
				console.log(result);
			    this.output.text = result;
			}
			$("#dom_overlay_container").on("change", "#width", width_change.bind(this));
			$("#dom_overlay_container").on("change", "#height", width_change.bind(this));
			
			this.width_change_cbk = true;
			this.heigth_change_cbk = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Output_obj_
	this.Output = new lib.Szene_1_Output();
	this.Output.name = "Output";
	this.Output.parent = this;
	this.Output.setTransform(341.8,1136.4,1,1,0,0,0,341.8,1136.4);
	this.Output.depth = 0;
	this.Output.isAttachedToCamera = 0
	this.Output.isAttachedToMask = 0
	this.Output.layerDepth = 0
	this.Output.layerIndex = 0
	this.Output.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Output).wait(1));

	// Textinput_obj_
	this.Textinput = new lib.Szene_1_Textinput();
	this.Textinput.name = "Textinput";
	this.Textinput.parent = this;
	this.Textinput.setTransform(367.7,1048.8,1,1,0,0,0,367.7,1048.8);
	this.Textinput.depth = 0;
	this.Textinput.isAttachedToCamera = 0
	this.Textinput.isAttachedToMask = 0
	this.Textinput.layerDepth = 0
	this.Textinput.layerIndex = 1
	this.Textinput.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Textinput).wait(1));

	// Radiobtn_obj_
	this.Radiobtn = new lib.Szene_1_Radiobtn();
	this.Radiobtn.name = "Radiobtn";
	this.Radiobtn.parent = this;
	this.Radiobtn.setTransform(501.3,689.6,1,1,0,0,0,501.3,689.6);
	this.Radiobtn.depth = 0;
	this.Radiobtn.isAttachedToCamera = 0
	this.Radiobtn.isAttachedToMask = 0
	this.Radiobtn.layerDepth = 0
	this.Radiobtn.layerIndex = 2
	this.Radiobtn.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Radiobtn).wait(1));

	// Farbtiefen_obj_
	this.Farbtiefen = new lib.Szene_1_Farbtiefen();
	this.Farbtiefen.name = "Farbtiefen";
	this.Farbtiefen.parent = this;
	this.Farbtiefen.setTransform(209.5,689.6,1,1,0,0,0,209.5,689.6);
	this.Farbtiefen.depth = 0;
	this.Farbtiefen.isAttachedToCamera = 0
	this.Farbtiefen.isAttachedToMask = 0
	this.Farbtiefen.layerDepth = 0
	this.Farbtiefen.layerIndex = 3
	this.Farbtiefen.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Farbtiefen).wait(1));

	// Bilder_obj_
	this.Bilder = new lib.Szene_1_Bilder();
	this.Bilder.name = "Bilder";
	this.Bilder.parent = this;
	this.Bilder.setTransform(360,170.8,1,1,0,0,0,360,170.8);
	this.Bilder.depth = 0;
	this.Bilder.isAttachedToCamera = 0
	this.Bilder.isAttachedToMask = 0
	this.Bilder.layerDepth = 0
	this.Bilder.layerIndex = 4
	this.Bilder.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Bilder).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(360,640,360,528.2);
// library properties:
lib.properties = {
	id: 'C9C350A174742E4C96AE1B1D50D89F02',
	width: 720,
	height: 1280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/genderRobotCG_quer_v13_16bit.jpg", id:"genderRobotCG_quer_v13_16bit"},
		{src:"images/genderRobotCG_quer_v13_1bit.png", id:"genderRobotCG_quer_v13_1bit"},
		{src:"images/genderRobotCG_quer_v13_24bit.jpg", id:"genderRobotCG_quer_v13_24bit"},
		{src:"images/genderRobotCG_quer_v13_2bit.jpg", id:"genderRobotCG_quer_v13_2bit"},
		{src:"images/genderRobotCG_quer_v13_4bit.jpg", id:"genderRobotCG_quer_v13_4bit"},
		{src:"images/genderRobotCG_quer_v13_8bit.jpg", id:"genderRobotCG_quer_v13_8bit"},
		{src:"images/speicherbedarf_neu_atlas_.png", id:"speicherbedarf_neu_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"},
		{src:"components/ui/src/radiobutton.js", id:"an.RadioButton"}
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