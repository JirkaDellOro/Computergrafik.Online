(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Move_rotate_scale_atlas_", frames: [[521,0,204,204],[521,206,204,204],[521,412,204,204],[0,0,519,497]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["Move_rotate_scale_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["Move_rotate_scale_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["Move_rotate_scale_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["Move_rotate_scale_atlas_"]);
	this.gotoAndStop(3);
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


(lib.Poly_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Poly_Ebene_1, null, null);


(lib.Btn_Scale_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.text = new cjs.Text("Scale", "normal 400 35px 'Oswald'", "#999999");
	this.text.textAlign = "center";
	this.text.lineHeight = 57;
	this.text.lineWidth = 85;
	this.text.parent = this;
	this.text.setTransform(51.35,16.7);
	if(!lib.properties.webfonts['Oswald']) {
		lib.webFontTxtInst['Oswald'] = lib.webFontTxtInst['Oswald'] || [];
		lib.webFontTxtInst['Oswald'].push(this.text);
	}

	this.instance = new lib.CachedTexturedBitmap_3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Btn_Scale_Ebene_1, null, null);


(lib.Btn_Rotate_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.text = new cjs.Text("Rotate", "normal 400 35px 'Oswald'", "#999999");
	this.text.textAlign = "center";
	this.text.lineHeight = 57;
	this.text.lineWidth = 85;
	this.text.parent = this;
	this.text.setTransform(51.35,16.7);
	if(!lib.properties.webfonts['Oswald']) {
		lib.webFontTxtInst['Oswald'] = lib.webFontTxtInst['Oswald'] || [];
		lib.webFontTxtInst['Oswald'].push(this.text);
	}

	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Btn_Rotate_Ebene_1, null, null);


(lib.Btn_Move_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.text = new cjs.Text("Move", "normal 400 40px 'Oswald'", "#999999");
	this.text.textAlign = "center";
	this.text.lineHeight = 65;
	this.text.lineWidth = 77;
	this.text.parent = this;
	this.text.setTransform(51.25,9.55);
	if(!lib.properties.webfonts['Oswald']) {
		lib.webFontTxtInst['Oswald'] = lib.webFontTxtInst['Oswald'] || [];
		lib.webFontTxtInst['Oswald'].push(this.text);
	}

	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Btn_Move_Ebene_1, null, null);


(lib.Poly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Poly_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(129.8,124.3,1,1,0,0,0,129.8,124.3);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Poly, new cjs.Rectangle(0,0,259.5,248.5), null);


(lib.Btn_Scale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Btn_Scale_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(51,51,1,1,0,0,0,51,51);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Btn_Scale, new cjs.Rectangle(0,0,102,102), null);


(lib.Btn_Rotate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Btn_Rotate_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(51,51,1,1,0,0,0,51,51);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Btn_Rotate, new cjs.Rectangle(0,0,102,102), null);


(lib.Btn_Move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Btn_Move_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(51,51,1,1,0,0,0,51,51);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Btn_Move, new cjs.Rectangle(0,0,102,102), null);


(lib.Szene_1_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.btn_scale = new lib.Btn_Scale();
	this.btn_scale.name = "btn_scale";
	this.btn_scale.parent = this;
	this.btn_scale.setTransform(742.35,187.7,1,1,0,0,0,51,51);
	new cjs.ButtonHelper(this.btn_scale, 0, 1, 1);

	this.btn_rotate = new lib.Btn_Rotate();
	this.btn_rotate.name = "btn_rotate";
	this.btn_rotate.parent = this;
	this.btn_rotate.setTransform(511.15,187.7,1,1,0,0,0,51,51);
	new cjs.ButtonHelper(this.btn_rotate, 0, 1, 1);

	this.poly = new lib.Poly();
	this.poly.name = "poly";
	this.poly.parent = this;
	this.poly.setTransform(474.7,545.4,1,1,0,0,0,129.8,124.3);

	this.btn_move = new lib.Btn_Move();
	this.btn_move.name = "btn_move";
	this.btn_move.parent = this;
	this.btn_move.setTransform(290.25,187.7,1,1,0,0,0,51,51);
	new cjs.ButtonHelper(this.btn_move, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_move},{t:this.poly},{t:this.btn_rotate},{t:this.btn_scale}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Ebene_1, null, null);


// stage content:
(lib.Move_rotate_scale = function(mode,startPosition,loop) {
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
		this.btn_move = this.Ebene_1.btn_move;
		this.poly = this.Ebene_1.poly;
		this.btn_rotate = this.Ebene_1.btn_rotate;
		this.btn_scale = this.Ebene_1.btn_scale;
		this.addEventListener("click", handleClick);
		handleClick.bind(this);
		function handleClick(_event) {
			console.group("Click");
			console.log("currentTarget: ")
			var ct = _event.currentTarget;
			console.log(ct);
			console.groupEnd();
			if (_event.target.name == "btn_move")
				if (ct.poly)
					ct.poly.x += 10;
		
			if (_event.target.name == "btn_rotate")
				if (ct.poly)
					ct.poly.rotation += 2.5;
		
			if (_event.target.name == "btn_scale")
				if (ct.poly) {
					ct.poly.scaleX += 0.2;
					ct.poly.scaleY += 0.2;
				}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Szene_1_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(516.3,403.2,1,1,0,0,0,516.3,403.2);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(719.3,496.7,74.10000000000002,172.90000000000003);
// library properties:
lib.properties = {
	id: '815F08A1D4B98A4BAC2646B2B9D93A57',
	width: 960,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Move_rotate_scale_atlas_.png?1547127076085", id:"Move_rotate_scale_atlas_"}
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
an.compositions['815F08A1D4B98A4BAC2646B2B9D93A57'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;