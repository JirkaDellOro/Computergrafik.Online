(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
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


(lib.rect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Egm3ATMMAAAgmXMBNvAAAMAAAAmXg");
	this.shape.setTransform(248.8,122.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rect, new cjs.Rectangle(0,0,497.6,245.6), null);


// stage content:
(lib.sliderui = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		$('body').append('<div class="sliderContainer">')
		$('.sliderContainer').append('<div class="slider-ui" id="slider"></div>');
		$('.sliderContainer').append('<div class="sliderToggle" id="sliderToggle"></div>');
		
		
		$('body').css({
				'position': 'fixed',
				'overscroll-behavior-y': 'contain'
		});
		
		$('.sliderContainer').css({
			'position': 'relative',
			'margin-left': '50px'
		});
		
		$('.slider-ui').css({
			'position': 'absolute',
			'width': '270px',
			'height': '5px',
			'top': '10px',
			'background-color': '#B2B2B2'
		});
		
		$('.sliderToggle').css({
			'position': 'absolute',
			'width': '25px',
			'height': '25px',
			'border-radius': '50%',
			'left': '0px',
			'background-color': '#00CBFF'
		});
		
		
		
		sliderToggle.addEventListener("mousedown", startDrag);
		sliderToggle.addEventListener("mouseup", stopDrag);
		
		function startDrag(e) {
			// determine event object
			console.log("sliderToggle");
			if (!e) {
				var e = window.event;
			}
			if(e.preventDefault) e.preventDefault();
			// IE uses srcElement, others use target
			targ = e.target ? e.target : e.srcElement;
		
			if (targ.className != 'sliderToggle') {return};
			// calculate event X, Y coordinates
			offsetX = e.clientX;
			//offsetY = e.clientY;
			
		
			// assign default values for top and left properties
			if(!targ.style.left) { targ.style.left='0px'};
			if (!targ.style.top) { targ.style.top='0px'};
		
			// calculate integer values for top and left 
			// properties
			coordX = parseInt(targ.style.left);
			//coordY = parseInt(targ.style.top);
			drag = true;
			
			console.log(coordX);
		
			// move div element
			sliderToggle.onmousemove=dragDiv;
			return false;
		
		}
		function dragDiv(e) {
			if (!drag) {return};
			if (!e) { var e= window.event};
			 var targ=e.target?e.target:e.srcElement;
			
			// Calculate posX and posY
			posX=coordX+e.clientX-offsetX;
			//posY=coordY+e.clientY-offsetY;
			
			// move div element not over Container
			if( ("0" <= posX && posX <= "270"))
			{
				//console.log(posX);
				targ.style.left=posX + 'px';
				
				// Starting test function
				moveObject(posX);
			}
			return false;
		}
		function stopDrag() {
			drag=false;
		}
		
		
		/*Drag Testpicture over Background picture - ÍMobile*/
		
		var dom = {
		    container: document.getElementById("slider"),
		    drag: document.getElementById("sliderToggle"),
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
		
		sliderToggle.addEventListener('touchstart', handleTouchStart, false);
		sliderToggle.addEventListener('touchmove', handleTouchMove, false);
		sliderToggle.addEventListener('touchend', handleTouchEnd, false);
		sliderToggle.addEventListener('touchcancel', handleTouchCancel, false);
		
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
		    
			if( ("0" < posX && posX < "270"))
			{
				dom.drag.style.left = posX + "px";
				moveObject(posX);
			}
		}
		
		
		
		// Test function
		
		var moveObjectElement = this.rectMove
		
		function moveObject(posX)
		{
			console.log(moveObjectElement);
			moveObjectElement.x = posX;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// rectMove
	this.rectMove = new lib.rect();
	this.rectMove.name = "rectMove";
	this.rectMove.parent = this;
	this.rectMove.setTransform(95.6,212.4,0.1616,0.5087,0,0,0,248.8,122.8);

	this.timeline.addTween(cjs.Tween.get(this.rectMove).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(535.4,510,-399.59999999999997,-235.10000000000002);
// library properties:
lib.properties = {
	id: '566019D5866C490E8B41A4649C244AD4',
	width: 960,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;