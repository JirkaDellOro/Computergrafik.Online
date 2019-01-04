(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"RGvsVG_Hochkant2_atlas_", frames: [[0,0,1469,2027]]},
		{name:"RGvsVG_Hochkant2_atlas_2", frames: [[0,0,1480,259],[0,261,569,456],[571,261,569,456]]}
];


// symbols:



(lib.CachedTexturedBitmap_51 = function() {
	this.initialize(ss["RGvsVG_Hochkant2_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_52 = function() {
	this.initialize(ss["RGvsVG_Hochkant2_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_53 = function() {
	this.initialize(ss["RGvsVG_Hochkant2_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_54 = function() {
	this.initialize(ss["RGvsVG_Hochkant2_atlas_2"]);
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


(lib.Test3_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Test3_Ebene_1, null, null);


(lib.Test2_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Test2_Ebene_1, null, null);


(lib.Szene_1_Text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.text = new cjs.Text("Vektorgrafik", "29px 'Oswald'");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 136;
	this.text.parent = this;
	this.text.setTransform(199.7,379.3,1.59,1.59);

	this.text_1 = new cjs.Text("Rastergrafik", "29px 'Oswald'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 51;
	this.text_1.lineWidth = 136;
	this.text_1.parent = this;
	this.text_1.setTransform(199.7,54.1,1.59,1.59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Text, null, null);


(lib.Szene_1_RahmenPng = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// RahmenPng
	this.instance = new lib.CachedTexturedBitmap_53();
	this.instance.parent = this;
	this.instance.setTransform(377.1,455.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_RahmenPng, null, null);


(lib.Szene_1_Rahmenjpg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rahmenjpg
	this.instance = new lib.CachedTexturedBitmap_54();
	this.instance.parent = this;
	this.instance.setTransform(377.1,123.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Rahmenjpg, null, null);


(lib.Szene_1_Maske_Rastergrafik = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Maske_Rastergrafik
	this.instance = new lib.CachedTexturedBitmap_52();
	this.instance.parent = this;
	this.instance.setTransform(2.1,-272.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Maske_Rastergrafik, null, null);


(lib.Szene_1_INteraktionsbereich = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// INteraktionsbereich
	this.instance = new lib.CachedTexturedBitmap_51();
	this.instance.parent = this;
	this.instance.setTransform(-3.45,730.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_INteraktionsbereich, null, null);


(lib.Szene_1_Ebene_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_7
	this.instance = new lib.CachedTexturedBitmap_53();
	this.instance.parent = this;
	this.instance.setTransform(377.1,455.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Ebene_7, null, null);


(lib.pngimage_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.pngimage_Ebene_1, null, null);


(lib.jpgimage2_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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

	this.myCss.setTransform(172.85,769.95,1.59,1.59,0,0,0,50.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.myCss).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_script, null, null);


(lib.Szene_1_pngtest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pngtest
	this.pngtest = new lib.Test3();
	this.pngtest.name = "pngtest";
	this.pngtest.parent = this;
	this.pngtest.setTransform(519.25,578.65,1.59,1.59,0,0,0,0.1,60.4);

	this.timeline.addTween(cjs.Tween.get(this.pngtest).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_pngtest, null, null);


(lib.Szene_1_jpgtest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// jpgtest
	this.jpgtest = new lib.Test2();
	this.jpgtest.name = "jpgtest";
	this.jpgtest.parent = this;
	this.jpgtest.setTransform(521.35,244.95,1.59,1.59,0,0,0,0,58.6);

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
	this.pngimage.setTransform(200.9,577.4,1.59,1.59);

	this.timeline.addTween(cjs.Tween.get(this.pngimage).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_pngimage, null, null);


(lib.Szene_1_jpgimage2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// jpgimage2
	this.jpgimage2 = new lib.jpgimage2();
	this.jpgimage2.name = "jpgimage2";
	this.jpgimage2.parent = this;
	this.jpgimage2.setTransform(199.65,244.55,1.59,1.59);

	this.timeline.addTween(cjs.Tween.get(this.jpgimage2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_jpgimage2, null, null);


// stage content:
(lib.RGvsVG_Hochkant2 = function(mode,startPosition,loop) {
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
		 'margin-top': '-500px',
		 'margin-left': '150px'
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
	this.script.setTransform(172.7,769.8,1,1,0,0,0,172.7,769.8);
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
	this.pngimage.setTransform(200.9,577.5,1,1,0,0,0,200.9,577.5);
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
	this.jpgimage2.setTransform(199.7,244.6,1,1,0,0,0,199.7,244.6);
	this.jpgimage2.depth = 0;
	this.jpgimage2.isAttachedToCamera = 0
	this.jpgimage2.isAttachedToMask = 0
	this.jpgimage2.layerDepth = 0
	this.jpgimage2.layerIndex = 2
	this.jpgimage2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.jpgimage2).wait(1));

	// Text_obj_
	this.Text = new lib.Szene_1_Text();
	this.Text.name = "Text";
	this.Text.parent = this;
	this.Text.setTransform(199.8,256,1,1,0,0,0,199.8,256);
	this.Text.depth = 0;
	this.Text.isAttachedToCamera = 0
	this.Text.isAttachedToMask = 0
	this.Text.layerDepth = 0
	this.Text.layerIndex = 3
	this.Text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Text).wait(1));

	// Ebene_7_obj_
	this.Ebene_7 = new lib.Szene_1_Ebene_7();
	this.Ebene_7.name = "Ebene_7";
	this.Ebene_7.parent = this;
	this.Ebene_7.setTransform(519.4,569.4,1,1,0,0,0,519.4,569.4);
	this.Ebene_7.depth = 0;
	this.Ebene_7.isAttachedToCamera = 0
	this.Ebene_7.isAttachedToMask = 0
	this.Ebene_7.layerDepth = 0
	this.Ebene_7.layerIndex = 4
	this.Ebene_7.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_7).wait(1));

	// INteraktionsbereich_obj_
	this.INteraktionsbereich = new lib.Szene_1_INteraktionsbereich();
	this.INteraktionsbereich.name = "INteraktionsbereich";
	this.INteraktionsbereich.parent = this;
	this.INteraktionsbereich.setTransform(366.6,795.7,1,1,0,0,0,366.6,795.7);
	this.INteraktionsbereich.depth = 0;
	this.INteraktionsbereich.isAttachedToCamera = 0
	this.INteraktionsbereich.isAttachedToMask = 0
	this.INteraktionsbereich.layerDepth = 0
	this.INteraktionsbereich.layerIndex = 5
	this.INteraktionsbereich.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.INteraktionsbereich).wait(1));

	// Maske_Rastergrafik_obj_
	this.Maske_Rastergrafik = new lib.Szene_1_Maske_Rastergrafik();
	this.Maske_Rastergrafik.name = "Maske_Rastergrafik";
	this.Maske_Rastergrafik.parent = this;
	this.Maske_Rastergrafik.setTransform(369.4,234.1,1,1,0,0,0,369.4,234.1);
	this.Maske_Rastergrafik.depth = 0;
	this.Maske_Rastergrafik.isAttachedToCamera = 0
	this.Maske_Rastergrafik.isAttachedToMask = 0
	this.Maske_Rastergrafik.layerDepth = 0
	this.Maske_Rastergrafik.layerIndex = 6
	this.Maske_Rastergrafik.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Maske_Rastergrafik).wait(1));

	// RahmenPng_obj_
	this.RahmenPng = new lib.Szene_1_RahmenPng();
	this.RahmenPng.name = "RahmenPng";
	this.RahmenPng.parent = this;
	this.RahmenPng.setTransform(519.4,569.4,1,1,0,0,0,519.4,569.4);
	this.RahmenPng.depth = 0;
	this.RahmenPng.isAttachedToCamera = 0
	this.RahmenPng.isAttachedToMask = 0
	this.RahmenPng.layerDepth = 0
	this.RahmenPng.layerIndex = 7
	this.RahmenPng.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.RahmenPng).wait(1));

	// pngtest_obj_
	this.pngtest = new lib.Szene_1_pngtest();
	this.pngtest.name = "pngtest";
	this.pngtest.parent = this;
	this.pngtest.setTransform(519.1,578.6,1,1,0,0,0,519.1,578.6);
	this.pngtest.depth = 0;
	this.pngtest.isAttachedToCamera = 0
	this.pngtest.isAttachedToMask = 0
	this.pngtest.layerDepth = 0
	this.pngtest.layerIndex = 8
	this.pngtest.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.pngtest).wait(1));

	// Rahmenjpg_obj_
	this.Rahmenjpg = new lib.Szene_1_Rahmenjpg();
	this.Rahmenjpg.name = "Rahmenjpg";
	this.Rahmenjpg.parent = this;
	this.Rahmenjpg.setTransform(519.4,237.8,1,1,0,0,0,519.4,237.8);
	this.Rahmenjpg.depth = 0;
	this.Rahmenjpg.isAttachedToCamera = 0
	this.Rahmenjpg.isAttachedToMask = 0
	this.Rahmenjpg.layerDepth = 0
	this.Rahmenjpg.layerIndex = 9
	this.Rahmenjpg.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Rahmenjpg).wait(1));

	// jpgtest_obj_
	this.jpgtest = new lib.Szene_1_jpgtest();
	this.jpgtest.name = "jpgtest";
	this.jpgtest.parent = this;
	this.jpgtest.setTransform(521.4,245.1,1,1,0,0,0,521.4,245.1);
	this.jpgtest.depth = 0;
	this.jpgtest.isAttachedToCamera = 0
	this.jpgtest.isAttachedToMask = 0
	this.jpgtest.layerDepth = 0
	this.jpgtest.layerIndex = 10
	this.jpgtest.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.jpgtest).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(356.6,367.3,380,493.2);
// library properties:
lib.properties = {
	id: '45F3E0EF0A91B94D8F3B02AF92F46D86',
	width: 720,
	height: 1280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/RGvsVG_Hochkant2_atlas_.png?1546633313037", id:"RGvsVG_Hochkant2_atlas_"},
		{src:"images/RGvsVG_Hochkant2_atlas_2.png?1546633313037", id:"RGvsVG_Hochkant2_atlas_2"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1546633313049", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1546633313049", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js?1546633313049", id:"an.CSS"}
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
an.compositions['45F3E0EF0A91B94D8F3B02AF92F46D86'] = {
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