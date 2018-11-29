(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.HFU_Main_Campus_1BIt = function() {
	this.initialize(img.HFU_Main_Campus_1BIt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,2840);


(lib.HFU_Main_Campus_16BIt = function() {
	this.initialize(img.HFU_Main_Campus_16BIt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,2840);


(lib.HFU_Main_Campus_2BIt = function() {
	this.initialize(img.HFU_Main_Campus_2BIt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,2840);


(lib.HFU_Main_Campus_24BIt = function() {
	this.initialize(img.HFU_Main_Campus_24BIt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,2840);


(lib.HFU_Main_Campus_4BIt = function() {
	this.initialize(img.HFU_Main_Campus_4BIt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,2840);


(lib.HFU_Main_Campus_8BIt = function() {
	this.initialize(img.HFU_Main_Campus_8BIt);
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



(lib._24_bit_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.HFU_Main_Campus_24BIt();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.1696,0.1696);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._24_bit_Ebene_1, null, null);


(lib._16_bit_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.HFU_Main_Campus_16BIt();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.1696,0.1696);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._16_bit_Ebene_1, null, null);


(lib._8_bit_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.HFU_Main_Campus_8BIt();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.1696,0.1696);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._8_bit_Ebene_1, null, null);


(lib._4_bit_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.HFU_Main_Campus_4BIt();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.1696,0.1696);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._4_bit_Ebene_1, null, null);


(lib._2_bit_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.HFU_Main_Campus_2BIt();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.1696,0.1696);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2_bit_Ebene_1, null, null);


(lib._1_bit_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.HFU_Main_Campus_1BIt();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.1696,0.1697);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._1_bit_Ebene_1, null, null);


(lib.Szene_1_Radiobuttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Radiobuttons
	this.info = new cjs.Text("", "34px 'Times New Roman'", "#0043D4");
	this.info.name = "info";
	this.info.lineHeight = 40;
	this.info.lineWidth = 447;
	this.info.parent = this;
	this.info.setTransform(57.05,1133.15);

	this.height = new lib.an_TextInput({'id': 'height', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.height.setTransform(410,1094.9,1,1,0,0,0,50,11);

	this.width = new lib.an_TextInput({'id': 'width', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.width.setTransform(72.05,1094.9,1,1,0,0,0,50,11);

	this.bit24_radio = new lib.an_RadioButton({'id': 'bit24_radio', 'label':'24 Bit', 'value':'5', 'name':'bit', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.bit24_radio.setTransform(176.3,976.85,3.0055,3.0055,0,0,0,49.9,11.2);

	this.bit16_radio = new lib.an_RadioButton({'id': 'bit16_radio', 'label':'16 Bit', 'value':'4', 'name':'bit', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.bit16_radio.setTransform(170.95,908.45,2.892,2.8921,0,0,0,50,11.1);

	this.bit8_radio = new lib.an_RadioButton({'id': 'bit8_radio', 'label':'8 Bit', 'value':'3', 'name':'bit', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.bit8_radio.setTransform(185.95,840.6,3.198,3.198,0,0,0,49.9,11.1);

	this.bit4_radio = new lib.an_RadioButton({'id': 'bit4_radio', 'label':'4 Bit', 'value':'2', 'name':'bit', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.bit4_radio.setTransform(180.85,772.7,3.0842,3.0842,0,0,0,50.1,11.1);

	this.bit2_radio = new lib.an_RadioButton({'id': 'bit2_radio', 'label':'2 Bit', 'value':'1', 'name':'bit', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.bit2_radio.setTransform(185,704.5,3.1667,3.1667,0,0,0,50.1,11);

	this.bit1_radio = new lib.an_RadioButton({'id': 'bit1_radio', 'label':'1 Bit', 'value':'0', 'name':'bit', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.bit1_radio.setTransform(186.05,637.2,3.2,3.2,0,0,0,49.9,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bit1_radio},{t:this.bit2_radio},{t:this.bit4_radio},{t:this.bit8_radio},{t:this.bit16_radio},{t:this.bit24_radio},{t:this.width},{t:this.height},{t:this.info}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Radiobuttons, null, null);


(lib._24_bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._24_bit_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(508.9,240.9,1,1,0,0,0,508.9,240.9);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._24_bit, new cjs.Rectangle(0,0,1017.9,481.8), null);


(lib._16_bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._16_bit_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(508.9,240.9,1,1,0,0,0,508.9,240.9);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._16_bit, new cjs.Rectangle(0,0,1017.9,481.8), null);


(lib._8_bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._8_bit_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(508.9,240.9,1,1,0,0,0,508.9,240.9);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._8_bit, new cjs.Rectangle(0,0,1017.9,481.8), null);


(lib._4_bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._4_bit_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(508.9,240.9,1,1,0,0,0,508.9,240.9);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._4_bit, new cjs.Rectangle(0,0,1017.9,481.8), null);


(lib._2_bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._2_bit_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(508.9,240.9,1,1,0,0,0,508.9,240.9);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._2_bit, new cjs.Rectangle(0,0,1017.9,481.8), null);


(lib._1_bit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._1_bit_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(508.9,240.9,1,1,0,0,0,508.9,240.9);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._1_bit, new cjs.Rectangle(0,0,1017.9,481.9), null);


(lib.Szene_1_Bilder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bilder
	this.bit_img_0 = new lib._1_bit();
	this.bit_img_0.name = "bit_img_0";
	this.bit_img_0.parent = this;
	this.bit_img_0.setTransform(539.15,347.1,1,1,0,0,0,508.9,240.9);

	this.bit_img_1 = new lib._2_bit();
	this.bit_img_1.name = "bit_img_1";
	this.bit_img_1.parent = this;
	this.bit_img_1.setTransform(539.15,347.45,1,1,0,0,0,508.9,240.9);

	this.bit_img_2 = new lib._4_bit();
	this.bit_img_2.name = "bit_img_2";
	this.bit_img_2.parent = this;
	this.bit_img_2.setTransform(539.15,347.45,1,1,0,0,0,508.9,240.9);

	this.bit_img_3 = new lib._8_bit();
	this.bit_img_3.name = "bit_img_3";
	this.bit_img_3.parent = this;
	this.bit_img_3.setTransform(539.15,347.5,1,1,0,0,0,508.9,240.9);

	this.bit_img_4 = new lib._16_bit();
	this.bit_img_4.name = "bit_img_4";
	this.bit_img_4.parent = this;
	this.bit_img_4.setTransform(539.15,347.5,1,1,0,0,0,508.9,240.9);

	this.bit_img_5 = new lib._24_bit();
	this.bit_img_5.name = "bit_img_5";
	this.bit_img_5.parent = this;
	this.bit_img_5.setTransform(539.15,347.5,1,1,0,0,0,508.9,240.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bit_img_5},{t:this.bit_img_4},{t:this.bit_img_3},{t:this.bit_img_2},{t:this.bit_img_1},{t:this.bit_img_0}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Bilder, null, null);


// stage content:
(lib.speicherbedarf = function(mode,startPosition,loop) {
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
		this.bit1_radio = this.Radiobuttons.bit1_radio;
		this.bit2_radio = this.Radiobuttons.bit2_radio;
		this.bit4_radio = this.Radiobuttons.bit4_radio;
		this.bit8_radio = this.Radiobuttons.bit8_radio;
		this.bit16_radio = this.Radiobuttons.bit16_radio;
		this.bit24_radio = this.Radiobuttons.bit24_radio;
		this.width = this.Radiobuttons.width;
		this.height = this.Radiobuttons.height;
		this.info = this.Radiobuttons.info;
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
			    this.info.text = result;
			}
			$("#dom_overlay_container").on("change", "#width", width_change.bind(this));
			$("#dom_overlay_container").on("change", "#height", width_change.bind(this));
			
			this.width_change_cbk = true;
			this.heigth_change_cbk = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Radiobuttons_obj_
	this.Radiobuttons = new lib.Szene_1_Radiobuttons();
	this.Radiobuttons.name = "Radiobuttons";
	this.Radiobuttons.parent = this;
	this.Radiobuttons.setTransform(263.8,896.8,1,1,0,0,0,263.8,896.8);
	this.Radiobuttons.depth = 0;
	this.Radiobuttons.isAttachedToCamera = 0
	this.Radiobuttons.isAttachedToMask = 0
	this.Radiobuttons.layerDepth = 0
	this.Radiobuttons.layerIndex = 0
	this.Radiobuttons.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Radiobuttons).wait(1));

	// Bilder_obj_
	this.Bilder = new lib.Szene_1_Bilder();
	this.Bilder.name = "Bilder";
	this.Bilder.parent = this;
	this.Bilder.setTransform(539.2,347.3,1,1,0,0,0,539.2,347.3);
	this.Bilder.depth = 0;
	this.Bilder.isAttachedToCamera = 0
	this.Bilder.isAttachedToMask = 0
	this.Bilder.layerDepth = 0
	this.Bilder.layerIndex = 1
	this.Bilder.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Bilder).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(561.6,1066.2,486.6,127.70000000000005);
// library properties:
lib.properties = {
	id: '9FE748469813F44E8530D44CACB7B7A4',
	width: 1080,
	height: 1920,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/HFU_Main_Campus_1BIt.png?1543241577479", id:"HFU_Main_Campus_1BIt"},
		{src:"images/HFU_Main_Campus_16BIt.jpg?1543241577479", id:"HFU_Main_Campus_16BIt"},
		{src:"images/HFU_Main_Campus_2BIt.png?1543241577479", id:"HFU_Main_Campus_2BIt"},
		{src:"images/HFU_Main_Campus_24BIt.jpg?1543241577479", id:"HFU_Main_Campus_24BIt"},
		{src:"images/HFU_Main_Campus_4BIt.jpg?1543241577479", id:"HFU_Main_Campus_4BIt"},
		{src:"images/HFU_Main_Campus_8BIt.jpg?1543241577479", id:"HFU_Main_Campus_8BIt"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1543241577479", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1543241577479", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1543241577479", id:"an.TextInput"},
		{src:"components/ui/src/radiobutton.js?1543241577479", id:"an.RadioButton"}
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
an.compositions['9FE748469813F44E8530D44CACB7B7A4'] = {
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