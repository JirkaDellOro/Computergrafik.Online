(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"RGvsVG_atlas_", frames: [[0,0,1354,280],[1356,232,47,47],[1356,0,227,230]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["RGvsVG_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(img.CachedTexturedBitmap_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1450,2294);


(lib.CSSKopie = function() {
	this.initialize(ss["RGvsVG_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Logoklein = function() {
	this.initialize(ss["RGvsVG_atlas_"]);
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


(lib.Szene_1_Text_Vektorgrafik = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text_Vektorgrafik
	this.text = new cjs.Text("Vektorgrafik", "29px 'Oswald'");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 136;
	this.text.parent = this;
	this.text.setTransform(212.2,369.25,1.59,1.59);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Text_Vektorgrafik, null, null);


(lib.Szene_1_Text_Rastergrafik = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text_Rastergrafik
	this.text = new cjs.Text("Rastergrafik", "29px 'Oswald'");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 136;
	this.text.parent = this;
	this.text.setTransform(212.2,69.15,1.59,1.59);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Text_Rastergrafik, null, null);


(lib.Szene_1_Maske = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Maske
	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(6.25,9.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Maske, null, null);


(lib.Szene_1_Kasten = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Kasten
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(1.65,744.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Kasten, null, null);


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

	this.myCss.setTransform(283.4,813.45,1.59,1.59,0,0,0,50.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.myCss).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_script, null, null);


(lib.Szene_1_pngtest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pngtest
	this.pngtest = new lib.Test3();
	this.pngtest.name = "pngtest";
	this.pngtest.parent = this;
	this.pngtest.setTransform(534.1,552.25,1.56,1.56,0,0,0,0.1,60.6);

	this.timeline.addTween(cjs.Tween.get(this.pngtest).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_pngtest, null, null);


(lib.Szene_1_jpgtest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// jpgtest
	this.jpgtest = new lib.Test2();
	this.jpgtest.name = "jpgtest";
	this.jpgtest.parent = this;
	this.jpgtest.setTransform(531.2,242.8,1.59,1.59,0,0,0,0,58.6);

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
	this.pngimage.setTransform(210.95,244.15,1.59,1.59);

	this.timeline.addTween(cjs.Tween.get(this.pngimage).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_pngimage, null, null);


(lib.Szene_1_jpgimage2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// jpgimage2
	this.jpgimage2 = new lib.jpgimage2();
	this.jpgimage2.name = "jpgimage2";
	this.jpgimage2.parent = this;
	this.jpgimage2.setTransform(208.05,543.1,1.59,1.59);

	this.timeline.addTween(cjs.Tween.get(this.jpgimage2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_jpgimage2, null, null);


// stage content:
(lib.RGvsVG = function(mode,startPosition,loop) {
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
		 'margin-top': '-475px',
		 'margin-left': '100px'
		});
		//$('slidercontainer').append('<div class="audiofile">')
		//$$('.audiofile').append('<audio id="intro" src="./sounds/070202.wav" type="audio/wav" autoplay></audio>');
		
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
				jpgtest.scaleX = scaleX1;
				jpgtest.scaleY = scaleY1;
				pngtest.scaleX = scaleX2;
				pngtest.scaleY = scaleY2;
				jpgtest.y = positionY1;
				pngtest.y = positionY2;
			}
		}
		playSound("_070202wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// script_obj_
	this.script = new lib.Szene_1_script();
	this.script.name = "script";
	this.script.parent = this;
	this.script.setTransform(283.3,813.3,1,1,0,0,0,283.3,813.3);
	this.script.depth = 0;
	this.script.isAttachedToCamera = 0
	this.script.isAttachedToMask = 0
	this.script.layerDepth = 0
	this.script.layerIndex = 0
	this.script.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.script).wait(1));

	// Text_Vektorgrafik_obj_
	this.Text_Vektorgrafik = new lib.Szene_1_Text_Vektorgrafik();
	this.Text_Vektorgrafik.name = "Text_Vektorgrafik";
	this.Text_Vektorgrafik.parent = this;
	this.Text_Vektorgrafik.setTransform(212.3,408.5,1,1,0,0,0,212.3,408.5);
	this.Text_Vektorgrafik.depth = 0;
	this.Text_Vektorgrafik.isAttachedToCamera = 0
	this.Text_Vektorgrafik.isAttachedToMask = 0
	this.Text_Vektorgrafik.layerDepth = 0
	this.Text_Vektorgrafik.layerIndex = 1
	this.Text_Vektorgrafik.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Text_Vektorgrafik).wait(1));

	// Text_Rastergrafik_obj_
	this.Text_Rastergrafik = new lib.Szene_1_Text_Rastergrafik();
	this.Text_Rastergrafik.name = "Text_Rastergrafik";
	this.Text_Rastergrafik.parent = this;
	this.Text_Rastergrafik.setTransform(212.3,108.4,1,1,0,0,0,212.3,108.4);
	this.Text_Rastergrafik.depth = 0;
	this.Text_Rastergrafik.isAttachedToCamera = 0
	this.Text_Rastergrafik.isAttachedToMask = 0
	this.Text_Rastergrafik.layerDepth = 0
	this.Text_Rastergrafik.layerIndex = 2
	this.Text_Rastergrafik.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Text_Rastergrafik).wait(1));

	// pngimage_obj_
	this.pngimage = new lib.Szene_1_pngimage();
	this.pngimage.name = "pngimage";
	this.pngimage.parent = this;
	this.pngimage.setTransform(211,244.2,1,1,0,0,0,211,244.2);
	this.pngimage.depth = 0;
	this.pngimage.isAttachedToCamera = 0
	this.pngimage.isAttachedToMask = 0
	this.pngimage.layerDepth = 0
	this.pngimage.layerIndex = 3
	this.pngimage.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.pngimage).wait(1));

	// jpgimage2_obj_
	this.jpgimage2 = new lib.Szene_1_jpgimage2();
	this.jpgimage2.name = "jpgimage2";
	this.jpgimage2.parent = this;
	this.jpgimage2.setTransform(208.1,543.1,1,1,0,0,0,208.1,543.1);
	this.jpgimage2.depth = 0;
	this.jpgimage2.isAttachedToCamera = 0
	this.jpgimage2.isAttachedToMask = 0
	this.jpgimage2.layerDepth = 0
	this.jpgimage2.layerIndex = 4
	this.jpgimage2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.jpgimage2).wait(1));

	// Kasten_obj_
	this.Kasten = new lib.Szene_1_Kasten();
	this.Kasten.name = "Kasten";
	this.Kasten.parent = this;
	this.Kasten.setTransform(340.2,814.9,1,1,0,0,0,340.2,814.9);
	this.Kasten.depth = 0;
	this.Kasten.isAttachedToCamera = 0
	this.Kasten.isAttachedToMask = 0
	this.Kasten.layerDepth = 0
	this.Kasten.layerIndex = 5
	this.Kasten.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Kasten).wait(1));

	// Maske_obj_
	this.Maske = new lib.Szene_1_Maske();
	this.Maske.name = "Maske";
	this.Maske.parent = this;
	this.Maske.setTransform(368.8,582.9,1,1,0,0,0,368.8,582.9);
	this.Maske.depth = 0;
	this.Maske.isAttachedToCamera = 0
	this.Maske.isAttachedToMask = 0
	this.Maske.layerDepth = 0
	this.Maske.layerIndex = 6
	this.Maske.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Maske).wait(1));

	// pngtest_obj_
	this.pngtest = new lib.Szene_1_pngtest();
	this.pngtest.name = "pngtest";
	this.pngtest.parent = this;
	this.pngtest.setTransform(534,551.9,1,1,0,0,0,534,551.9);
	this.pngtest.depth = 0;
	this.pngtest.isAttachedToCamera = 0
	this.pngtest.isAttachedToMask = 0
	this.pngtest.layerDepth = 0
	this.pngtest.layerIndex = 7
	this.pngtest.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.pngtest).wait(1));

	// jpgtest_obj_
	this.jpgtest = new lib.Szene_1_jpgtest();
	this.jpgtest.name = "jpgtest";
	this.jpgtest.parent = this;
	this.jpgtest.setTransform(531.2,242.9,1,1,0,0,0,531.2,242.9);
	this.jpgtest.depth = 0;
	this.jpgtest.isAttachedToCamera = 0
	this.jpgtest.isAttachedToMask = 0
	this.jpgtest.layerDepth = 0
	this.jpgtest.layerIndex = 8
	this.jpgtest.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.jpgtest).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(361.7,649.4,369.59999999999997,507.0000000000001);
// library properties:
lib.properties = {
	id: '45F3E0EF0A91B94D8F3B02AF92F46D86',
	width: 720,
	height: 1280,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedTexturedBitmap_2.png?1547475631924", id:"CachedTexturedBitmap_2"},
		{src:"images/Roboter_LogopngKopie.png?1547475631924", id:"Roboter_LogopngKopie"},
		{src:"images/Roboter_LogoGroß.jpg?1547475631924", id:"Roboter_LogoGroß"},
		{src:"images/RGvsVG_atlas_.png?1547475631533", id:"RGvsVG_atlas_"},
		{src:"sounds/_070202wav.mp3?1547475631924", id:"_070202wav"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1547475631924", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1547475631924", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js?1547475631924", id:"an.CSS"}
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