(function (cjs, an) {
var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"2.3_Farbsehen_atlas_", frames: [[0,0,3375,5779],[0,5781,512,512]]}
];


// symbols:



(lib.roboter_transparent = function() {
	this.spriteSheet = ss["2.3_Farbsehen_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sun = function() {
	this.spriteSheet = ss["2.3_Farbsehen_atlas_"];
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
	this.shape.setTransform(131.8,130.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.redLineTwo, new cjs.Rectangle(-5,-5,273.7,271.9), null);


(lib.PaperNew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A+mheMA9NAAAIAAC9Mg9NAAAg");
	this.shape.setTransform(195.9,9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A+mBfIAAi9MA9MAAAIAAC9g");
	this.shape_1.setTransform(195.9,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PaperNew, new cjs.Rectangle(-1,-1.3,393.7,21.1), null);


(lib.greenlinetwo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(10,1,1).p("A0lUdMApLgo5");
	this.shape.setTransform(131.8,130.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greenlinetwo, new cjs.Rectangle(-5,-5,273.7,271.9), null);


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



(lib.BlueLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(10,1,1).p("A0lUdMApLgo5");
	this.shape.setTransform(131.8,130.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BlueLine, new cjs.Rectangle(-5,-5,273.7,271.9), null);


(lib.AugeTwo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BD4FB").s("#000000").ss(1,1,1).rr(-10.25,-22.65,20.5,45.3,1.3);
	this.shape.setTransform(10.3,22.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.AugeTwo, new cjs.Rectangle(-1,-1,22.5,47.3), null);


(lib.AugeOne = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BD4FB").s("#000000").ss(1,1,1).rr(-10.15,-22.15,20.3,44.3,1.3);
	this.shape.setTransform(9.9,22.1,1.024,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.AugeOne, new cjs.Rectangle(-1.4,-1,22.8,46.3), null);


// stage content:
(lib._23_Farbsehen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		
		/* Dieser Code entstand in Zusammenarbeit mit Benedikt Grether */
		
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
		var yellowToggle = false;
		
		/*
		cyan = this.checkboxCyan;
		console.log(cyan);
		
		magenta = this.checkboxMagenta;
		console.log(magenta);
		
		gelb = this.checkboxGelb;
		*/
		
		$('body').append('<div class="checkboxContainer">')
		$('.checkboxContainer').append('<label class="checkContainer">Cyan<input id="cyan" type="checkbox" name="checkbox" value="cyan"><span class="checkmark"></span></label>');
		$('.checkboxContainer').append('<label class="checkContainer">Magenta<input id="magenta" type="checkbox" name="checkbox" value="magenta"><span class="checkmark"></span></label>');
		$('.checkboxContainer').append('<label class="checkContainer">Gelb<input id="gelb" type="checkbox" name="checkbox" value="gelb"><span class="checkmark"></span></label>');
		
		
		//this.addEventListener("click", clickButton);
		//console.log($("#dom_overlay_container"));
		//$("#dom_overlay_container")[0].addEventListener("click", clickButton);
		
		/*
		function clickButton(_event) {
			console.group("Click");
			console.log("target: ")
			console.log(_event.target);
			console.log("currentTarget: ")
			var ct = _event.currentTarget;
			console.log(ct);
			console.log(_event.target.id);
			console.groupEnd();
			//changeVisibility(_event.target.id);
		}
		*/
		
		$('#cyan').on('click', function(){
			checkCyan();
		});
		
		$('#magenta').on('click', function(){
			checkMagenta();
		});
		
		$('#gelb').on('click', function(){
			checkYellow();
		});
		
		/*
			
			if($('#checkboxColor').val() == 'cyan')
			{
				console.log($('input').val());
				checkCyan();
			}
			else if($('#checkboxColor').val() == 'magenta')
			{
				console.log($('input').val());
				checkMagenta();
			}
			else if ($('#checkboxColor').val() == 'gelb')
			{
				console.log($('input').val());
				checkYellow();
			}
		});
		*/
		
		function checkCyan() {
			if (cyanToggle == false && magentaToggle == false && yellowToggle == false){
				cyanToggle = true;
				showCyan();
			}
			else if(cyanToggle == false && magentaToggle == true && yellowToggle == false){
				cyanToggle = true;
				showMagentaCyan();
			}
			else if(cyanToggle == false && magentaToggle == true && yellowToggle == true){
				cyanToggle = true;
				showMagentaCyanYellow();
			}
			else if(cyanToggle == false && magentaToggle == false && yellowToggle == true){
				cyanToggle = true;
				showCyanYellow();
			}
			else if(cyanToggle == true && magentaToggle == false && yellowToggle == true) {
				cyanToggle = false;
				showYellow();
			}
			else if(cyanToggle == true && magentaToggle == true && yellowToggle == false){
				cyanToggle = false;
				showMagenta();
			}
			else if(cyanToggle == true && magentaToggle == true && yellowToggle == true){
				cyanToggle = false;
				showMagentaYellow();
			}
			else if(cyanToggle == true && magentaToggle == false && yellowToggle == false){
				showNone();
			}
		}
		
		function checkMagenta(){
			if(magentaToggle == false && cyanToggle == false && yellowToggle == false)
			{
				magentaToggle = true;
				showMagenta();
			}
			else if(magentaToggle == false && cyanToggle == true && yellowToggle == false){
				magentaToggle = true;
				showMagentaCyan();
			}
			else if(magentaToggle == false && cyanToggle == true && yellowToggle == true){
				magentaToggle = true;
				showMagentaCyanYellow();
			}
			else if(magentaToggle == false && cyanToggle == false && yellowToggle == true){
				magentaToggle = true;
				showMagentaYellow();
			}
			else if(magentaToggle == true && cyanToggle == false && yellowToggle == false){
				showNone();
			}	
			else if (magentaToggle == true && cyanToggle == false && yellowToggle == true){
				magentaToggle = false;		
				showYellow();
			}
			else if (magentaToggle == true && cyanToggle == true && yellowToggle == false){
				magentaToggle = false;		
				showCyan();
			}
			else if (magentaToggle == true && cyanToggle == true && yellowToggle == true){
				magentaToggle = false;		
				showCyanYellow();
			}
		
		}
		
		
		function checkYellow(){
			if(yellowToggle == false && cyanToggle == false && magentaToggle == false)
			{
				yellowToggle = true;
				showYellow();
				console.log("test");
			}
			else if(yellowToggle == false && cyanToggle == false && magentaToggle == true){
				yellowToggle = true;
				showMagentaYellow();
			}
			else if(yellowToggle == false && cyanToggle == true && magentaToggle == true){
				yellowToggle = true;
				showMagentaCyanYellow();
			}
			
			else if(yellowToggle == false && cyanToggle == true && magentaToggle == false){
				yellowToggle = true;
				showCyanYellow();
			}
			else if(yellowToggle == true && cyanToggle == false && magentaToggle == false){
				showNone();
			}
			else if(yellowToggle == true && cyanToggle == true && magentaToggle == false){
				yellowToggle = false;
				showCyan();
			}
			else if(yellowToggle == true && cyanToggle == false && magentaToggle == true){
				yellowToggle = false;
				showMagenta();
			}
			else if(yellowToggle == true && cyanToggle == true && magentaToggle == true){
				yellowToggle = false;
				showMagentaCyan();
			}
		}
		

		function showCyan(){
			paper.visible = true;
			redLine.visible = false;
			blueLine.visible = true;
			greenLine.visible = true;
			ElementPaper._fill.style = "#00FFFF";
			augeLeft.visible = true;
			augeLeft.shape.graphics._fill.style = "#00FFFF";
			augeRight.visible = true;
			augeRight.shape.graphics._fill.style = "#00FFFF";
		}
		
		function showMagenta(){
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
		}
		
		function showYellow()
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
		}
		
		function showMagentaCyan()
		{
			redLine.visible = false;
			blueLine.visible = true;
			greenLine.visible = false;
			ElementPaper._fill.style = "#0000FF";
			augeLeft.visible = true;
			augeLeft.shape.graphics._fill.style = "#0000FF";
			augeRight.visible = true;
			augeRight.shape.graphics._fill.style = "#0000FF";
		}
		
		function showMagentaCyanYellow(){
			redLine.visible = false;
			blueLine.visible = false;
			greenLine.visible = false;
			ElementPaper._fill.style = "#000000";
			augeLeft.visible = true;
			augeLeft.shape.graphics._fill.style = "#000000";
			augeRight.visible = true;
			augeRight.shape.graphics._fill.style = "#000000";
		}
		
		function showMagentaYellow(){
			redLine.visible = true;
			blueLine.visible = false;
			greenLine.visible = false;
			ElementPaper._fill.style = "#FF0000";
			augeLeft.visible = true;
			augeLeft.shape.graphics._fill.style = "#FF0000";
			augeRight.visible = true;
			augeRight.shape.graphics._fill.style = "#FF0000";
		}
		
		function showCyanYellow(){
			redLine.visible = true;
			blueLine.visible = true;
			greenLine.visible = false;
			ElementPaper._fill.style = "#00FF00";
			augeLeft.visible = true;
			augeLeft.shape.graphics._fill.style = "#00FF00";
			augeRight.visible = true;
			augeRight.shape.graphics._fill.style = "#00FF00";
		}
		function showNone(){
			cyanToggle = false;
			magentaToggle = false;
			yellowToggle = false;
			redLine.visible = true;
			blueLine.visible = true;
			greenLine.visible = true;
			paper.visible = false;
			augeLeft.visible = false;
			augeRight.visible = false;
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

	// script
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/componentsCss_Desk.css'});

	this.instance.setTransform(885,668,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// AugeTwo
	this.augeTwo = new lib.AugeTwo();
	this.augeTwo.name = "augeTwo";
	this.augeTwo.parent = this;
	this.augeTwo.setTransform(812.2,159.1,1.038,1,0,0,0,10.3,22.6);

	this.timeline.addTween(cjs.Tween.get(this.augeTwo).wait(1));

	// AugeOne
	this.augeOne = new lib.AugeOne();
	this.augeOne.name = "augeOne";
	this.augeOne.parent = this;
	this.augeOne.setTransform(739.4,159.1,1.022,1.023,0,0,0,10.2,22.2);

	this.timeline.addTween(cjs.Tween.get(this.augeOne).wait(1));

	// Druckfarbe
	this.paper = new lib.PaperNew();
	this.paper.name = "paper";
	this.paper.parent = this;
	this.paper.setTransform(475.1,427.4,1,1,0,0,0,195.8,23.4);

	this.timeline.addTween(cjs.Tween.get(this.paper).wait(1));

	// weißes Papier
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A+misMA9NAAAIAAFZMg9NAAAg");
	this.shape.setTransform(475.2,425.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A+mCtIAAlZMA9NAAAIAAFZg");
	this.shape_1.setTransform(475.2,425.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgzoAjkMAAAhHHMBnRAAAMAAABHHg");
	mask.setTransform(398.7,237.7);

	// Rot 2
	this.redlinetwo = new lib.redLineTwo();
	this.redlinetwo.name = "redlinetwo";
	this.redlinetwo.parent = this;
	this.redlinetwo.setTransform(628.3,272.6,1,1,0,0,0,131.8,130.9);

	var maskedShapeInstanceList = [this.redlinetwo];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.redlinetwo).wait(1));

	// Grün 2
	this.greenlinetwo = new lib.greenlinetwo();
	this.greenlinetwo.name = "greenlinetwo";
	this.greenlinetwo.parent = this;
	this.greenlinetwo.setTransform(614.7,272.3,1,1,0,0,0,131.8,130.9);

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
	this.instance_1 = new lib.sun();
	this.instance_1.parent = this;
	this.instance_1.setTransform(108,26,0.297,0.297);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Mask 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyjVcMAAAgq3MAlHAAAMAAAAq3g");
	mask_1.setTransform(780.9,157.8);

	// Roboter
	this.instance_2 = new lib.roboter_transparent();
	this.instance_2.parent = this;
	this.instance_2.setTransform(602,30,0.104,0.104);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Rechteck
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai+AvIDtjtICQCQIjtDtg");
	this.shape_2.setTransform(209.9,141.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Rot
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(10,1,1).p("A4F31MAwMAvr");
	this.shape_3.setTransform(371.1,285);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Grün
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00FF00").ss(10,1,1).p("A1K07MAqVAp3");
	this.shape_4.setTransform(345.4,273.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Blau
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0000FF").ss(10,1,1).p("A0k0bMApIAo3");
	this.shape_5.setTransform(334,276.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Ebene_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5F5F5").s().p("EhK3A4QMAAAhwfMCVvAAAMAAABwfg");
	this.shape_6.setTransform(480.9,361.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(481.7,361.7,958.4,720);
// library properties:
lib.properties = {
	id: 'C7EB6231166847CE953FCD5B6E22CB47',
	width: 960,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/2.3_Farbsehen_atlas_.png?1551350191151", id:"2.3_Farbsehen_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1551350191272", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1551350191272", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js?1551350191272", id:"an.CSS"}
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