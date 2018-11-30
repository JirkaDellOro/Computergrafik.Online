(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"mixcolormode_atlas_", frames: [[0,0,1920,1080]]}
];


// symbols:



(lib._1 = function() {
	this.initialize(ss["mixcolormode_atlas_"]);
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


(lib.roboterImage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.677,0.677);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.roboterImage, new cjs.Rectangle(0,0,1299.9,731.2), null);


(lib.an_Button = function(options) {
	this._element = new $.an.Button(options);
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
(lib.mixcolormode = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* Image append to Dom overlay with jquery
		*/
		$('body').append('<div class="testImage" id="testImage"></div>');
		$('#testImage').prepend('<img class="test" id="theImg" src="./images/testImage.png" />');
		
		//image = document.getElementById("testImage");
		
		$('body').css({
				'position': 'fixed',
				'overscroll-behavior-y': 'contain'
		});
		
		
		$('.test').css({
			'position': 'absolute',
			'top': '250px',
			'left': '300px',
			'width': '300px',
			'height': 'auto',
			'cursor': 'move'
		});
			
		
		
		this.addEventListener("click", handleClick);
		console.log($("#dom_overlay_container"));
		$("#dom_overlay_container")[0].addEventListener("click", handleClick);
		
		function handleClick(_event) {
			changeMixMode(_event.target.id);
		}
		
		function changeMixMode(targetId){
			var mixMode = targetId;
			if (mixMode == "softlight")
					mixMode = "soft-light";
			console.log(mixMode);
			theImg.style.mixBlendMode = mixMode;	
		}
		
		
		
		/*Drag Testpicture over Background picture*/
		testImage.addEventListener("mousedown", startDrag);
		testImage.addEventListener("mouseup", stopDrag);
		
		function startDrag(e) {
			// determine event object
			if (!e) {
				var e = window.event;
				console.log("!e = " + e);
			}
			if(e.preventDefault) e.preventDefault();
			console.log(e);
			// IE uses srcElement, others use target
			targ = e.target ? e.target : e.srcElement;
		
			if (targ.className != 'test') {return};
			// calculate event X, Y coordinates
			offsetX = e.clientX;
			offsetY = e.clientY;
			
		
			// assign default values for top and left properties
			if(!targ.style.left) { targ.style.left='0px'};
			if (!targ.style.top) { targ.style.top='0px'};
		
			// calculate integer values for top and left 
			// properties
			coordX = parseInt(targ.style.left);
			coordY = parseInt(targ.style.top);
			drag = true;
		
			// move div element
			testImage.onmousemove=dragDiv;
			return false;
		
		}
		function dragDiv(e) {
			if (!drag) {return};
			if (!e) { var e= window.event};
			 var targ=e.target?e.target:e.srcElement;
			
			// Calculate posX and posY
			posX=coordX+e.clientX-offsetX;
			posY=coordY+e.clientY-offsetY;
			
			// move div element not over Container
			if( ("0" < posX && posX < "650") && ("0" < posY && posY < "500") )
			{
				targ.style.left=posX + 'px';
				targ.style.top=posY + 'px';
			}
			return false;
		}
		function stopDrag() {
			drag=false;
		}
		
		
		/*Drag Testpicture over Background picture - ÍMobile*/
		
		var dom = {
		    container: document.getElementById("testImage"),
		    drag: document.getElementById("theImg"),
		}
		
		
		var container = {
		    x: dom.container.getBoundingClientRect().left,
		    y: dom.container.getBoundingClientRect().top,
		    w: dom.container.getBoundingClientRect().width,
		    h: dom.container.getBoundingClientRect().height
		}
		
		var drag = {
		    w: dom.drag.offsetWidth,
		    h: dom.drag.offsetHeight
		}
		
		target = null;
		
		testImage.addEventListener('touchstart', handleTouchStart, false);
		testImage.addEventListener('touchmove', handleTouchMove, false);
		testImage.addEventListener('touchend', handleTouchEnd, false);
		testImage.addEventListener('touchcancel', handleTouchCancel, false);
		
		function handleTouchStart(e) {
		    if (e.touches.length == 1) {
		        var touch = e.touches[0];
		        target = touch.target;
		    }
		}
		function handleTouchMove(e) {
		    if (e.touches.length == 1) {
		        if(target ===  dom.drag) {
		            moveDrag(e);
		        }
		    }
		}
		function handleTouchEnd(e) {
		    if (e.touches.length == 0) { // User just took last finger off screen
		        target = null;
		    }
		}
		function handleTouchCancel(e) {
		    return;
		}
		
		function moveDrag(e) {
		    var touch = e.touches[0];
		
		//here is where the movement position is determained
		    var posX = touch.pageX - container.x - drag.w / 2;
			var posY = touch.pageY - container.x - drag.h / 2;
		    
			if( ("0" < posX && posX < "650") && ("0" < posY && posY < "500") )
			{
				dom.drag.style.left = posX + "px";
				dom.drag.style.top = posY + "px";
			}
		}
		
		
		/* Google Chrome iOs Scroll Refresh behavior */ 
		function preventPullToRefresh(element) {
			var prevent = false;
		
		    document.querySelector(element).addEventListener('touchstart', function(e){
		      if (e.touches.length !== 1) { return; }
		
		      var scrollY = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
		      prevent = (scrollY === 0);
		    });
		
		    document.querySelector(element).addEventListener('touchmove', function(e){
		      if (prevent) {
		        prevent = false;
		        e.preventDefault();
		      }
		    });
		  }
		
		preventPullToRefresh('#testImage') // pass #id or html tag into the method
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// buttonMultiply
	this.softlight = new lib.an_Button({'id': 'softlight', 'label':'Weiches Licht', 'disabled':false, 'visible':true, 'class':'ui-button'});

	this.softlight.setTransform(187.95,959.25,2.8293,2.8293,0,0,0,50,11);

	this.multiply = new lib.an_Button({'id': 'multiply', 'label':'Multiplizieren', 'disabled':false, 'visible':true, 'class':'ui-button'});

	this.multiply.setTransform(187.95,888.3,2.8293,2.8293,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.multiply},{t:this.softlight}]}).wait(1));

	// buttonNormal
	this.normal = new lib.an_Button({'id': 'normal', 'label':'Normal', 'disabled':false, 'visible':true, 'class':'ui-button'});

	this.normal.setTransform(46.5,783.1,2.8293,2.8293);

	this.timeline.addTween(cjs.Tween.get(this.normal).wait(1));

	// backgroundImage
	this.backgroundImage = new lib.roboterImage();
	this.backgroundImage.name = "backgroundImage";
	this.backgroundImage.parent = this;
	this.backgroundImage.setTransform(503.95,365.6,1,1,0,0,0,649.9,365.6);

	this.timeline.addTween(cjs.Tween.get(this.backgroundImage).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#81D0FC").s().p("EhMDA5BMAAAhyBMCYHAAAMAAAByBg");
	this.shape.setTransform(480.825,360.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(334.1,636.1,819.8000000000001,355.69999999999993);
// library properties:
lib.properties = {
	id: '566019D5866C490E8B41A4649C244AD4',
	width: 960,
	height: 1280,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/mixcolormode_atlas_.png?1543592659324", id:"mixcolormode_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1543592659328", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1543592659328", id:"sdk/anwidget.js"},
		{src:"components/ui/src/button.js?1543592659328", id:"an.Button"}
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
an.compositions['566019D5866C490E8B41A4649C244AD4'] = {
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