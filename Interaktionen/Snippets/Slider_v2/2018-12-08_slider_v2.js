(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.slider_v3 = function(mode,startPosition,loop) {
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
			'background-color': '#00CBFF',
			'cursor': 'pointer'
		});
		
		var circle = document.getElementById("sliderToggle");
		
		sliderToggle.addEventListener("mousedown", drag);
		
		function drag(e) {
			
			coordX = parseInt(circle.style.left);
			offsetX = e.clientX;
			posX = coordX + e.clientX - offsetX;
		
			document.addEventListener("mousemove", move);
			document.addEventListener("mouseup", drop);
		}
		
		function drop() {
			document.removeEventListener('mouseup', drop);
			document.removeEventListener('mousemove', move);
		}
		
		function move(e) {
			posX = coordX + e.clientX - offsetX;
			if (("0" <= posX && posX <= "270")) {
				circle.style.left = posX + 'px';
			}
		}
		
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// output
	this.output = new cjs.Text("", "34px 'Oswald'");
	this.output.name = "output";
	this.output.lineHeight = 60;
	this.output.lineWidth = 272;
	this.output.parent = this;
	this.output.setTransform(220.35,122.65);

	this.timeline.addTween(cjs.Tween.get(this.output).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(698.4,480.7,-204.09999999999997,-202.8);
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