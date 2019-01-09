(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"2.3_Farbsehen_atlas_", frames: [[0,0,3375,5779],[0,5781,512,512]]}
];


// symbols:



(lib.roboter_transparent = function() {
	this.initialize(ss["2.3_Farbsehen_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sun = function() {
	this.initialize(ss["2.3_Farbsehen_atlas_"]);
	this.gotoAndStop(1);
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


(lib.redLineTwo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(10,1,1).p("A0lUdMApLgo5");
	this.shape.setTransform(131.825,130.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.redLineTwo, new cjs.Rectangle(-5,-5,273.7,271.9), null);


(lib.PaperNew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A+mheMA9NAAAIAAC9Mg9NAAAg");
	this.shape.setTransform(195.85,9.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A+mBfIAAi9MA9MAAAIAAC9g");
	this.shape_1.setTransform(195.85,9.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PaperNew, new cjs.Rectangle(-1,-1.3,393.7,21.1), null);


(lib.greenlinetwo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(10,1,1).p("A0lUdMApLgo5");
	this.shape.setTransform(131.825,130.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greenlinetwo, new cjs.Rectangle(-5,-5,273.7,271.9), null);


(lib.an_Checkbox = function(options) {
	this._element = new $.an.Checkbox(options);
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



(lib.BlueLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(10,1,1).p("A0lUdMApLgo5");
	this.shape.setTransform(131.825,130.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BlueLine, new cjs.Rectangle(-5,-5,273.7,271.9), null);


(lib.AugeTwo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BD4FB").s("#000000").ss(1,1,1).rr(-10.25,-22.65,20.5,45.3,1.3);
	this.shape.setTransform(10.25,22.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.AugeTwo, new cjs.Rectangle(-1,-1,22.5,47.3), null);


(lib.AugeOne = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BD4FB").s("#000000").ss(1,1,1).rr(-10.15,-22.15,20.3,44.3,1.3);
	this.shape.setTransform(9.9206,22.125,1.0235,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.AugeOne, new cjs.Rectangle(-1.4,-1,22.7,46.3), null);


// stage content:
(lib._23_Farbsehen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		
		redLine = this.redlinetwo;
		greenLine = this.greenlinetwo;
		blueLine = this.bluelinetwo;
		paper = this.paper;
		paper.visible = false;
		ElementPaper = this.paper.shape_1.graphics;
		augeLeft = this.augeOne;
		augeLeft.visible = false;
		augeRight = this.augeTwo;
		augeRight.visible = false;
		var cyanToggle = false;
		var magentaToggle = false;
		
		
		cyan = this.checkboxCyan;
		console.log(cyan);
		
		this.addEventListener("click", clickButton);
		console.log($("#dom_overlay_container"));
		$("#dom_overlay_container")[0].addEventListener("click", clickButton);
		
		function clickButton(_event) {
			console.group("Click");
			console.log("target: ")
			console.log(_event.target);
			console.log("currentTarget: ")
			var ct = _event.currentTarget;
			console.log(ct);
			console.groupEnd();
			changeVisibility(_event.target.id);
		}
		
		function changeVisibility(targetId){
			console.log("Test");
			console.log(targetId);
			switch (targetId){
				case "cyan":
					visibleCyan();
					
				break;
				case "magenta":
					visibleMagenta();
				break;
				case "gelb":
					visibleGelb();
				break;
				
				case "cyan | magenta":
					alert("test");
				break;
			}
			/*
			if(targetId == "cyan" && cyanToggle == false)
			{
				redLine.visible = false;
				blueLine.visible = true;
				greenLine.visible = true;
				paper.visible = true;
				ElementPaper._fill.style = "#00FFFF";
				augeLeft.visible = true;
				augeLeft.shape.graphics._fill.style = "#00FFFF";
				augeRight.visible = true;
				augeRight.shape.graphics._fill.style = "#00FFFF";
				cyanToggle = true;
			}
			else if(targetId == "magenta" && cyanToggle == false)
			{
				greenLine.visible = false;
				blueLine.visible = true;
				redLine.visible = true;
				paper.visible = true;
				console.log(paper);
				ElementPaper._fill.style = "#FF00FF";
				augeLeft.visible = true;
				augeLeft.shape.graphics._fill.style = "#FF00FF";
				augeRight.visible = true;
				augeRight.shape.graphics._fill.style = "#FF00FF";
				console.log("Test3");
				console.log(greenLine);
			}
			
			else if(targetId == "gelb")
			{
				blueLine.visible = false;
				redLine.visible = true;
				greenLine.visible = true;
				paper.visible = true;
				console.log(paper);
				ElementPaper._fill.style = "#FFFF00";
				augeLeft.visible = true;
				augeLeft.shape.graphics._fill.style = "#FFFF00";
				augeRight.visible = true;
				augeRight.shape.graphics._fill.style = "#FFFF00";
				console.log("Test4");
				console.log(blueLine);
			}
			else if(targetId =="magenta" && cyanToggle == true)
			{
				blueLine.visible = true;
				redLine.visible = false;
				greenLine.visible = false;
				ElementPaper._fill.style = "#0000FF";
			}*/
		}
		
		function visibleCyan(){
				redLine.visible = false;
				blueLine.visible = true;
				greenLine.visible = true;
				paper.visible = true;
				ElementPaper._fill.style = "#00FFFF";
				augeLeft.visible = true;
				augeLeft.shape.graphics._fill.style = "#00FFFF";
				augeRight.visible = true;
				augeRight.shape.graphics._fill.style = "#00FFFF";
		}
		
		function visibleMagenta(){
				greenLine.visible = false;
				blueLine.visible = true;
				redLine.visible = true;
				paper.visible = true;
				console.log(paper);
				ElementPaper._fill.style = "#FF00FF";
				augeLeft.visible = true;
				augeLeft.shape.graphics._fill.style = "#FF00FF";
				augeRight.visible = true;
				augeRight.shape.graphics._fill.style = "#FF00FF";
				console.log("Test3");
				console.log(greenLine);
		}
		
		function visibleGelb(){
				blueLine.visible = false;
				redLine.visible = true;
				greenLine.visible = true;
				paper.visible = true;
				console.log(paper);
				ElementPaper._fill.style = "#FFFF00";
				augeLeft.visible = true;
				augeLeft.shape.graphics._fill.style = "#FFFF00";
				augeRight.visible = true;
				augeRight.shape.graphics._fill.style = "#FFFF00";
				console.log("Test4");
				console.log(blueLine);
		}
		/*
		this.addEventListener("click", clickButton);
		console.log($("#dom_overlay_container"));
		$("#dom_overlay_container")[0].addEventListener("click", clickButton);
		
		function clickButton(_event) {
			console.group("Click");
			console.log("target: ")
			console.log(_event.target);
			console.log("currentTarget: ")
			var ct = _event.currentTarget;
			console.log(ct);
			console.groupEnd();
		}
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// CheckBox1
	this.gelb = new lib.an_Checkbox({'id': 'gelb', 'label':'Gelb', 'value':'gelb', 'disabled':false, 'visible':true, 'class':'ui-checkbox'});

	this.gelb.setTransform(732.45,597,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.gelb).wait(1));

	// CheckBox2
	this.magenta = new lib.an_Checkbox({'id': 'magenta', 'label':'Magenta', 'value':'magenta', 'disabled':false, 'visible':true, 'class':'ui-checkbox'});

	this.magenta.setTransform(732.45,552,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.magenta).wait(1));

	// CheckBox3
	this.cyan = new lib.an_Checkbox({'id': 'cyan', 'label':'Cyan', 'value':'cyan', 'disabled':false, 'visible':true, 'class':'ui-checkbox'});

	this.cyan.setTransform(732.45,510.45,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.cyan).wait(1));

	// Button 3
	this.gelb_1 = new lib.an_Button({'id': 'gelb_1', 'label':'Yellow', 'disabled':false, 'visible':true, 'class':'ui-button'});

	this.gelb_1.setTransform(478.05,648.3,2.06,2.0457,0,0,0,50,11.1);

	this.timeline.addTween(cjs.Tween.get(this.gelb_1).wait(1));

	// Button 2
	this.magenta_1 = new lib.an_Button({'id': 'magenta_1', 'label':'Magenta', 'disabled':false, 'visible':true, 'class':'ui-button'});

	this.magenta_1.setTransform(478.2,585.7,2.0598,2.0454,0,0,0,50.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.magenta_1).wait(1));

	// Button 1
	this.cyan_1 = new lib.an_Button({'id': 'cyan_1', 'label':'Cyan', 'disabled':false, 'visible':true, 'class':'ui-button'});

	this.cyan_1.setTransform(478.2,522,2.06,2.0465,0,0,0,50.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.cyan_1).wait(1));

	// AugeTwo
	this.augeTwo = new lib.AugeTwo();
	this.augeTwo.name = "augeTwo";
	this.augeTwo.parent = this;
	this.augeTwo.setTransform(812.2,159.05,1.0377,1,0,0,0,10.3,22.6);

	this.timeline.addTween(cjs.Tween.get(this.augeTwo).wait(1));

	// AugeOne
	this.augeOne = new lib.AugeOne();
	this.augeOne.name = "augeOne";
	this.augeOne.parent = this;
	this.augeOne.setTransform(739.4,159.05,1.0222,1.0226,0,0,0,10.2,22.2);

	this.timeline.addTween(cjs.Tween.get(this.augeOne).wait(1));

	// Druckfarbe
	this.paper = new lib.PaperNew();
	this.paper.name = "paper";
	this.paper.parent = this;
	this.paper.setTransform(475.1,427.35,1,1,0,0,0,195.8,23.4);

	this.timeline.addTween(cjs.Tween.get(this.paper).wait(1));

	// weißes Papier
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A+misMA9NAAAIAAFZMg9NAAAg");
	this.shape.setTransform(475.175,425.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A+mCtIAAlZMA9NAAAIAAFZg");
	this.shape_1.setTransform(475.175,425.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EguUAkWMAAAhHGMBnSAAAMAAABHGg");
	mask.setTransform(364.5949,232.623);

	// Rot 2
	this.redlinetwo = new lib.redLineTwo();
	this.redlinetwo.name = "redlinetwo";
	this.redlinetwo.parent = this;
	this.redlinetwo.setTransform(628.25,272.55,1,1,0,0,0,131.8,130.9);

	var maskedShapeInstanceList = [this.redlinetwo];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.redlinetwo).wait(1));

	// Grün 2
	this.greenlinetwo = new lib.greenlinetwo();
	this.greenlinetwo.name = "greenlinetwo";
	this.greenlinetwo.parent = this;
	this.greenlinetwo.setTransform(614.7,272.25,1,1,0,0,0,131.8,130.9);

	var maskedShapeInstanceList = [this.greenlinetwo];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.greenlinetwo).wait(1));

	// Blau 2
	this.bluelinetwo = new lib.BlueLine();
	this.bluelinetwo.name = "bluelinetwo";
	this.bluelinetwo.parent = this;
	this.bluelinetwo.setTransform(600.2,272.5,1,1,0,0,0,131.8,130.9);

	var maskedShapeInstanceList = [this.bluelinetwo];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.bluelinetwo).wait(1));

	// Sonne
	this.instance = new lib.sun();
	this.instance.parent = this;
	this.instance.setTransform(108,26,0.2969,0.2969);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Mask 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EAhKAXDMAAAgq3MAlJAAAMAAAAq3g");
	mask_1.setTransform(449.85,147.475);

	// Roboter
	this.instance_1 = new lib.roboter_transparent();
	this.instance_1.parent = this;
	this.instance_1.setTransform(602,30,0.1045,0.1045);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Rechteck
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai+AvIDtjtICQCQIjtDtg");
	this.shape_2.setTransform(209.85,141.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Rot
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(10,1,1).p("A4F31MAwMAvr");
	this.shape_3.setTransform(371.05,285.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Grün
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00FF00").ss(10,1,1).p("A1K07MAqVAp3");
	this.shape_4.setTransform(345.4,273.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Blau
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0000FF").ss(10,1,1).p("A0k0bMApIAo3");
	this.shape_5.setTransform(333.95,276.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(588,386,311.70000000000005,285.70000000000005);
// library properties:
lib.properties = {
	id: 'C7EB6231166847CE953FCD5B6E22CB47',
	width: 960,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/2.3_Farbsehen_atlas_.png", id:"2.3_Farbsehen_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/checkbox.js", id:"an.Checkbox"},
		{src:"components/ui/src/button.js", id:"an.Button"}
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
an.compositions['C7EB6231166847CE953FCD5B6E22CB47'] = {
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