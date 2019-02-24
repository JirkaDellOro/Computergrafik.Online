(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"6.4 _I_ Farbtiefenreduktion _mobil__atlas_", frames: [[0,632,926,630],[928,632,926,630],[0,1264,926,630],[928,0,926,630],[928,1264,926,630],[0,0,926,630]]}
];


// symbols:



(lib.leaves_16_Bit = function() {
	this.spriteSheet = ss["6.4 _I_ Farbtiefenreduktion _mobil__atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.leaves_24_Bit = function() {
	this.spriteSheet = ss["6.4 _I_ Farbtiefenreduktion _mobil__atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.leaves_2_Bit = function() {
	this.spriteSheet = ss["6.4 _I_ Farbtiefenreduktion _mobil__atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.leaves_32_Bit = function() {
	this.spriteSheet = ss["6.4 _I_ Farbtiefenreduktion _mobil__atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.leaves_4_Bit = function() {
	this.spriteSheet = ss["6.4 _I_ Farbtiefenreduktion _mobil__atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.leaves_8_Bit = function() {
	this.spriteSheet = ss["6.4 _I_ Farbtiefenreduktion _mobil__atlas_"];
	this.gotoAndStop(5);
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


(lib.img_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.leaves_32_Bit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img_32, new cjs.Rectangle(0,0,926,630), null);


(lib.img_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.leaves_24_Bit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img_24, new cjs.Rectangle(0,0,926,630), null);


(lib.img_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.leaves_16_Bit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img_16, new cjs.Rectangle(0,0,926,630), null);


(lib.img_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.leaves_8_Bit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img_8, new cjs.Rectangle(0,0,926,630), null);


(lib.img_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.leaves_4_Bit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img_4, new cjs.Rectangle(0,0,926,630), null);


(lib.img_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.leaves_2_Bit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.778,0.77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img_2, new cjs.Rectangle(0,0,720,485), null);


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



// stage content:
(lib._64IFarbtiefenreduktionmobil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//HTML-Einbindung
		$('body').append('<div class="radioContainer">')
		$('.radioContainer').append('<label class="container">2 Bit<input type="radio" id="bit1_radio" class="radioBtn" name="radio" value="0"  checked><span class="radioCheckmark"></span></label></br></br>');
		$('.radioContainer').append('<label class="container">4 Bit<input type="radio" id="bit2_radio" class="radioBtn" name="radio" value="1"><span class="radioCheckmark"></span></label></br></br>');
		$('.radioContainer').append('<label class="container">8 Bit<input type="radio" id="bit3_radio" class="radioBtn" name="radio" value="2"><span class="radioCheckmark"></span></label></br></br>');
		$('.radioContainer').append('<label class="container">16 Bit<input type="radio" id="bit3_radio" class="radioBtn" name="radio" value="3"><span class="radioCheckmark"></span></label></br></br>');
		$('.radioContainer').append('<label class="container">24 Bit<input type="radio" id="bit3_radio" class="radioBtn" name="radio" value="4"><span class="radioCheckmark"></span></label></br></br>');
		$('.radioContainer').append('<label class="container">32 Bit<input type="radio" id="bit3_radio" class="radioBtn" name="radio" value="5"><span class="radioCheckmark"></span></label></br></br>');
		
		//extra CSS: muss nicht übernommen werden - nicht notwendig
		$('body').css({
			'overscroll-behavior-y': 'contain'
		});
		
		$('.radioContainer').css({
			'position': 'absolute',
			'margin-top': '-700px',
			'margin-left': '50px'
		
		});
		
		
		/*click="handleClick"*/
		$('div').append('<div class="shemeContainer">')
		
		var elem = [this.img_2, this.img_4, this.img_8, this.img_16, this.img_24, this.img_32];
		
		
		$('body').css({
			'overscroll-behavior-y': 'contain'
		});
		
		$('.buttonContainer').css({
			'position':'absolute',
			'margin-top':'500px',
			'margin-left': '400px'
		});
		$('.shemeContainer').css({
			'position':'absolute',
			'margin-top':'500px',
			'margin-left': '100px'
		});
		
		
		$( ".radioBtn" ).change(function() {
			var radioValue = $("input[name='radio']:checked").val();
			myFunction(radioValue);
			console.log(radioValue);
		});
		
		function myFunction(value) {
			console.log("test " + value);
			for (var i = 0; i <= 5; i++) {
				console.log(i);
				if (value == i) {
					console.log("test : " + i);
					elem[i].alpha = 1;
				} else {
					elem[i].alpha = 0;
				}
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// CSS
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/componentsCss.css'});

	this.instance.setTransform(621.9,930.1,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Script
	this.img_32 = new lib.img_32();
	this.img_32.name = "img_32";
	this.img_32.parent = this;
	this.img_32.setTransform(360,242.5,0.778,0.77,0,0,0,463,315);
	this.img_32.alpha = 0;

	this.img_24 = new lib.img_24();
	this.img_24.name = "img_24";
	this.img_24.parent = this;
	this.img_24.setTransform(360,242.5,0.778,0.77,0,0,0,463,315);
	this.img_24.alpha = 0;

	this.img_16 = new lib.img_16();
	this.img_16.name = "img_16";
	this.img_16.parent = this;
	this.img_16.setTransform(360,242.5,0.778,0.77,0,0,0,463,315);
	this.img_16.alpha = 0;

	this.img_8 = new lib.img_8();
	this.img_8.name = "img_8";
	this.img_8.parent = this;
	this.img_8.setTransform(360,242.5,0.778,0.77,0,0,0,463,315);
	this.img_8.alpha = 0;

	this.img_4 = new lib.img_4();
	this.img_4.name = "img_4";
	this.img_4.parent = this;
	this.img_4.setTransform(360,242.5,0.778,0.77,0,0,0,463,315);
	this.img_4.alpha = 0;

	this.img_2 = new lib.img_2();
	this.img_2.name = "img_2";
	this.img_2.parent = this;
	this.img_2.setTransform(360,242.5,1,1,0,0,0,360,242.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.img_2},{t:this.img_4},{t:this.img_8},{t:this.img_16},{t:this.img_24},{t:this.img_32}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(360,640,720,941.6);
// library properties:
lib.properties = {
	id: '1E0B8C7063454745A9DAC646966E8024',
	width: 720,
	height: 1280,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/6.4 _I_ Farbtiefenreduktion _mobil__atlas_.png?1551003818171", id:"6.4 _I_ Farbtiefenreduktion _mobil__atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1551003818179", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1551003818179", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js?1551003818179", id:"an.CSS"}
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
an.compositions['1E0B8C7063454745A9DAC646966E8024'] = {
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