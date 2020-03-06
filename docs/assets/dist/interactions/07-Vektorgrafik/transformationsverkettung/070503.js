(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"070503_atlas_", frames: [[0,802,270,269],[272,802,280,10],[0,0,832,800],[834,0,10,279],[834,281,10,279],[554,802,280,10]]}
];


// symbols:



(lib.CachedTexturedBitmap_24 = function() {
	this.initialize(ss["070503_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_25 = function() {
	this.initialize(ss["070503_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_26 = function() {
	this.initialize(ss["070503_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_27 = function() {
	this.initialize(ss["070503_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_28 = function() {
	this.initialize(ss["070503_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_30 = function() {
	this.initialize(ss["070503_atlas_"]);
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


(lib.top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_30();
	this.instance.parent = this;
	this.instance.setTransform(-69.85,-2.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.top, new cjs.Rectangle(-69.8,-2.5,140,5), null);


(lib.right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_28();
	this.instance.parent = this;
	this.instance.setTransform(-2.5,-69.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.right, new cjs.Rectangle(-2.5,-69.8,5,139.5), null);


(lib.left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_27();
	this.instance.parent = this;
	this.instance.setTransform(-2.5,-69.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.left, new cjs.Rectangle(-2.5,-69.8,5,139.5), null);


(lib.koordinatensythem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.text = new cjs.Text("X", "69px 'Times New Roman'");
	this.text.lineHeight = 78;
	this.text.lineWidth = 69;
	this.text.parent = this;
	this.text.setTransform(209.85,118.3,1.2274,1.2274);

	this.text_1 = new cjs.Text("Y", "69px 'Times New Roman'");
	this.text_1.lineHeight = 78;
	this.text_1.lineWidth = 69;
	this.text_1.parent = this;
	this.text_1.setTransform(-294.95,-262.45,1.2274,1.2274);

	this.instance = new lib.CachedTexturedBitmap_26();
	this.instance.parent = this;
	this.instance.setTransform(-231.2,-193.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.koordinatensythem, new cjs.Rectangle(-297.4,-264.9,594.9,529.8), null);


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



(lib.bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_25();
	this.instance.parent = this;
	this.instance.setTransform(-69.85,-2.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bottom, new cjs.Rectangle(-69.8,-2.5,140,5), null);


(lib.blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_24();
	this.instance.parent = this;
	this.instance.setTransform(-67.35,-67.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blue, new cjs.Rectangle(-67.3,-67.3,135,134.5), null);


(lib.square = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.top = new lib.top();
	this.top.name = "top";
	this.top.parent = this;
	this.top.setTransform(0,-67.35);

	this.bottom = new lib.bottom();
	this.bottom.name = "bottom";
	this.bottom.parent = this;
	this.bottom.setTransform(0,67.35);

	this.right = new lib.right();
	this.right.name = "right";
	this.right.parent = this;
	this.right.setTransform(67.4,0);

	this.left = new lib.left();
	this.left.name = "left";
	this.left.parent = this;
	this.left.setTransform(-67.35,0);

	this.blue = new lib.blue();
	this.blue.name = "blue";
	this.blue.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blue},{t:this.left},{t:this.right},{t:this.bottom},{t:this.top}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.square, new cjs.Rectangle(-69.8,-69.8,140,139.7), null);


// stage content:
(lib._070503 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop;
		
		
		let square=this.square;
		console.log(square);
		let body = document.querySelector('body');
		let wrapper = document.createElement("div");
		wrapper.className = "controls-wrapper";
		wrapper.style.cssText = "display: flex; justify-content: space-evenly; max-Width: 550px; margin:auto";
		//wrapper.innerText="test";
		body.appendChild(wrapper);
		
		let shapeContainer = document.createElement("div");
		wrapper.appendChild(shapeContainer);
		let text3 = document.createElement("p");
		text3.innerText="Form";
		
		let inputScale = div = document.createElement("input");
		inputScale.className = "selectTrans";
		inputScale.type="checkbox";
		inputScale.name="scale";
		inputScale.id="checkScale";
		
		let labelScale = div = document.createElement("label");
		
		let inputScher = div = document.createElement("input");
		inputScher.className = "selectScher";
		inputScher.type="checkbox";
		inputScher.name="scherung";
		inputScher.id="checkScher";
		
		let labelScher= div = document.createElement("label");
		
		let inputRot = div = document.createElement("input");
		inputRot.className = "selectTrans";
		inputRot.type="checkbox";
		inputRot.name="rot";
		inputRot.id="checkRot";
		
		let labelRot = div = document.createElement("label");
		
		shapeContainer.appendChild(text3);
		
		shapeContainer.appendChild(labelScale);
		labelScale.appendChild(inputScale);
		var myvariable = document.createTextNode('Skalierung');
		labelScale.appendChild(myvariable);
		
		shapeContainer.appendChild(labelScher);
		labelScher.appendChild(inputScher);
		var myvariable = document.createTextNode('Scherung');
		labelScher.appendChild(myvariable);
		
		shapeContainer.appendChild(labelRot);
		labelRot.appendChild(inputRot);
		var myvariable = document.createTextNode('Rotation');
		labelRot.appendChild(myvariable);
		
		shapeContainer.style.cssText = "display: flex; flex-direction: column; width: 100px";
		
		
		let exContainer = document.createElement("div");
		wrapper.appendChild(exContainer);
		let text2 = document.createElement("p");
		text2.innerText="Durchführung";
		
		let inputExScale = div = document.createElement("input");
		inputExScale.className = "execution";
		inputExScale.value=1;
		inputExScale.min=1;
		inputExScale.max=1.5;
		inputExScale.step=0.01;
		inputExScale.type = "range";
		
		let inputExScher = div = document.createElement("input");
		inputExScher.className = "execution";
		inputExScher.value=1;
		inputExScher.min=1;
		inputExScher.max=10;
		inputExScher.step=0.5;
		inputExScher.type = "range";
		
		let inputExRot = div = document.createElement("input");
		inputExRot.className = "execution";
		inputExRot.value=0;
		inputExRot.min=0;
		inputExRot.max=360;
		inputExRot.step=1;
		inputExRot.type = "range";
		
		exContainer.appendChild(text2);
		exContainer.appendChild(inputExScale);
		exContainer.appendChild(inputExScher);
		exContainer.appendChild(inputExRot);
		exContainer.style.cssText = "display: flex; flex-direction: column; width: 200px";
		
		inputExScale.addEventListener("input",changeScale);
		inputExScher.addEventListener("input",changeScher);
		inputExRot.addEventListener("input",changeRot);
		
		shapeContainer.addEventListener("input",test);
		
		let orderScale=0;
		let orderScher=0;
		let orderRot=0;
		
		let newGreen;
		let newRed;
		let newBlue;
		
		let bounds=square.left.getBounds()
		let boundsTop=square.top.getBounds()
		
		function changeScale() {
			
			let curentHeight=bounds.height*inputExScale.value;
			
			square.left.scaleY=inputExScale.value;
			square.left.y=-bounds.y-curentHeight/2;
			
			square.right.scaleY=inputExScale.value;
			square.right.y=-bounds.y-curentHeight/2;
			
			square.blue.scaleY=inputExScale.value;
			square.blue.y=-bounds.y-curentHeight/2;
		
			square.top.y=-bounds.y+boundsTop.height/4-curentHeight;
		}
		
		function changeScher() {
			
			let curentHeight=inputExScher.value;
			
			console.log(square.tilt);
		
		}
		
		function changeRot() {
			let deg=inputExRot.value;
			
			square.rotation=deg;
		}
		
		function test(e) {
		
		    let type = e.path[0].getAttribute("name");
		
		    switch (type) {
		
		        case "scale":
		            if (!inputScale.checked) {
		                if (orderScher > orderScale) {
		                    orderScher--;
		                }
		                if (orderRot > orderScale) {
		                    orderRot--;
		                }
		                orderScale = 0;
		            } else {
		                for (let i = 1; i < 4; i++) {
		                    if (orderRot != i && orderScher != i) {
		                        orderScale = i;
								break;
		                    }
		                }
		            }
		            break;
		
		        case "scherung":
		            if (!inputScher.checked) {
		                if (orderScale > orderScher) {
		                    orderScale--;
		                }
		                if (orderRot > orderScher) {
		                    orderRot--;
		                }
		                orderScher = 0;
		            } else {
		                for (let i = 1; i < 4; i++) {
		                    if (orderRot != i && orderScale != i) {
		                        orderScher = i;
								break;
		                    }
		                }
		            }
		            break;
		
		        case "rot":
		            if (!inputRot.checked) {
		                if (orderScale > orderRot) {
		                    orderScale--;
		                }
		                if (orderScher > orderRot) {
		                    orderScher--;
		                }
		                orderRot = 0;
		            } else {
		                for (let i = 1; i < 4; i++) {
		                    if (orderScher != i && orderScale != i) {
		                        orderRot = i;
								break;
		                    }
		                }
		            }
		            break;
		    }
		    console.log(orderScale, orderScher, orderRot);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// JS
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/main.css'});

	this.instance.setTransform(68.05,603.9,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Viereck
	this.square = new lib.square();
	this.square.name = "square";
	this.square.parent = this;
	this.square.setTransform(271,417);

	this.timeline.addTween(cjs.Tween.get(this.square).wait(1));

	// koordnatensysthem
	this.koordinates = new lib.koordinatensythem();
	this.koordinates.name = "koordinates";
	this.koordinates.parent = this;
	this.koordinates.setTransform(350,350);

	this.timeline.addTween(cjs.Tween.get(this.koordinates).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(367.6,435.1,279.9,180.29999999999995);
// library properties:
lib.properties = {
	id: 'DD1164FAC07BD749A432009464DB96BA',
	width: 700,
	height: 700,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/070503_atlas_.png", id:"070503_atlas_"},
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
an.compositions['DD1164FAC07BD749A432009464DB96BA'] = {
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
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