(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"0505_Auflösung_eines_Monitors_atlas_", frames: [[0,0,1921,1081]]},
		{name:"0505_Auflösung_eines_Monitors_atlas_2", frames: [[0,0,1759,1025],[0,1027,1678,943]]},
		{name:"0505_Auflösung_eines_Monitors_atlas_3", frames: [[1680,662,220,660],[884,945,666,90],[0,0,1678,943],[662,945,220,660],[0,945,660,660],[1680,0,220,660]]}
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
	this.initialize(ss["0505_Auflösung_eines_Monitors_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["0505_Auflösung_eines_Monitors_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["0505_Auflösung_eines_Monitors_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["0505_Auflösung_eines_Monitors_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["0505_Auflösung_eines_Monitors_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(ss["0505_Auflösung_eines_Monitors_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_7 = function() {
	this.initialize(ss["0505_Auflösung_eines_Monitors_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_8 = function() {
	this.initialize(ss["0505_Auflösung_eines_Monitors_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.v_1_0_1_Roboter_1920x1080 = function() {
	this.initialize(ss["0505_Auflösung_eines_Monitors_atlas_"]);
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


(lib.Zoll_line_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_8();
	this.instance.parent = this;
	this.instance.setTransform(-1.65,-1.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Zoll_line_Ebene_1, null, null);


(lib.SDP_Rechnung_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.text = new cjs.Text("√(1920 Pixel^2 + 1080 Pixel^2) ≈ 2203 Pixel", "normal 400 40px 'Oswald'");
	this.text.textAlign = "center";
	this.text.lineHeight = 65;
	this.text.lineWidth = 891;
	this.text.parent = this;
	this.text.setTransform(447.35,2);
	if(!lib.properties.webfonts['Oswald']) {
		lib.webFontTxtInst['Oswald'] = lib.webFontTxtInst['Oswald'] || [];
		lib.webFontTxtInst['Oswald'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.SDP_Rechnung_Ebene_1, null, null);


(lib.RDot_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_7();
	this.instance.parent = this;
	this.instance.setTransform(0,1.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.RDot_Ebene_1, null, null);


(lib.PPI_rechnung_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.text = new cjs.Text("2203 Pixel / 24 Zoll = 91,79 Pixels per Inch", "normal 400 40px 'Oswald'");
	this.text.textAlign = "center";
	this.text.lineHeight = 65;
	this.text.lineWidth = 891;
	this.text.parent = this;
	this.text.setTransform(447.35,2);
	if(!lib.properties.webfonts['Oswald']) {
		lib.webFontTxtInst['Oswald'] = lib.webFontTxtInst['Oswald'] || [];
		lib.webFontTxtInst['Oswald'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.PPI_rechnung_Ebene_1, null, null);


(lib.Pixel_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_6();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pixel_Ebene_1, null, null);


(lib.Monitor_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.v_1_0_1_Roboter_1920x1080();
	this.instance.parent = this;
	this.instance.setTransform(19.75,20.3,0.4355,0.4355);

	this.instance_1 = new lib.CachedTexturedBitmap_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Monitor_Ebene_1, null, null);


(lib.GDot_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.GDot_Ebene_1, null, null);


(lib.DotPitch_distance_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.DotPitch_distance_Ebene_1, null, null);


(lib.DotPitch_text_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.text = new cjs.Text("Dot-Pitch", "normal 400 40px 'Oswald'");
	this.text.textAlign = "center";
	this.text.lineHeight = 65;
	this.text.lineWidth = 170;
	this.text.parent = this;
	this.text.setTransform(86.9,2);
	if(!lib.properties.webfonts['Oswald']) {
		lib.webFontTxtInst['Oswald'] = lib.webFontTxtInst['Oswald'] || [];
		lib.webFontTxtInst['Oswald'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.DotPitch_text_Ebene_1, null, null);


(lib.BDot_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BDot_Ebene_1, null, null);


(lib._1929Pixel_text_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.text = new cjs.Text("1920 Pixel", "normal 400 40px 'Oswald'");
	this.text.textAlign = "center";
	this.text.lineHeight = 65;
	this.text.lineWidth = 190;
	this.text.parent = this;
	this.text.setTransform(97.1,2);
	if(!lib.properties.webfonts['Oswald']) {
		lib.webFontTxtInst['Oswald'] = lib.webFontTxtInst['Oswald'] || [];
		lib.webFontTxtInst['Oswald'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib._1929Pixel_text_Ebene_1, null, null);


(lib._1920_1080_Pixel_text_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.text = new cjs.Text("1920 x 1080 Pixel", "normal 400 40px 'Oswald'");
	this.text.textAlign = "center";
	this.text.lineHeight = 65;
	this.text.lineWidth = 288;
	this.text.parent = this;
	this.text.setTransform(146.2,2);
	if(!lib.properties.webfonts['Oswald']) {
		lib.webFontTxtInst['Oswald'] = lib.webFontTxtInst['Oswald'] || [];
		lib.webFontTxtInst['Oswald'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib._1920_1080_Pixel_text_Ebene_1, null, null);


(lib._1080Pixel_text_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.text = new cjs.Text("1080 Pixel", "normal 400 40px 'Oswald'");
	this.text.textAlign = "center";
	this.text.lineHeight = 65;
	this.text.lineWidth = 195;
	this.text.parent = this;
	this.text.setTransform(99.6,2);
	if(!lib.properties.webfonts['Oswald']) {
		lib.webFontTxtInst['Oswald'] = lib.webFontTxtInst['Oswald'] || [];
		lib.webFontTxtInst['Oswald'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib._1080Pixel_text_Ebene_1, null, null);


(lib._24_zoll_text_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.text = new cjs.Text("24 Zoll", "normal 400 40px 'Oswald'");
	this.text.textAlign = "center";
	this.text.lineHeight = 65;
	this.text.lineWidth = 140;
	this.text.parent = this;
	this.text.setTransform(72.15,2);
	if(!lib.properties.webfonts['Oswald']) {
		lib.webFontTxtInst['Oswald'] = lib.webFontTxtInst['Oswald'] || [];
		lib.webFontTxtInst['Oswald'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib._24_zoll_text_Ebene_1, null, null);


(lib.Zoll_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Zoll_line_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(417.9,234.1,1,1,0,0,0,417.9,234.1);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Zoll_line, new cjs.Rectangle(-1.6,-1.6,839,471.5), null);


(lib.SDP_Rechnung = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.SDP_Rechnung_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(447.4,37.6,1,1,0,0,0,447.4,37.6);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.SDP_Rechnung, new cjs.Rectangle(0,0,894.8,75.2), null);


(lib.RDot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.RDot_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(55,166.1,1,1,0,0,0,55,166.1);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.RDot, new cjs.Rectangle(0,1.1,110,330), null);


(lib.PPI_rechnung = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.PPI_rechnung_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(447.4,37.6,1,1,0,0,0,447.4,37.6);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.PPI_rechnung, new cjs.Rectangle(0,0,894.8,75.2), null);


(lib.Pixel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Pixel_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(165,165,1,1,0,0,0,165,165);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pixel, new cjs.Rectangle(0,0,330,330), null);


(lib.Monitor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Monitor_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(439.8,256.3,1,1,0,0,0,439.8,256.3);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Monitor, new cjs.Rectangle(0,0,879.5,512.5), null);


(lib.GDot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.GDot_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(55,165,1,1,0,0,0,55,165);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.GDot, new cjs.Rectangle(0,0,110,330), null);


(lib.Dreieck_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.Zoll_line();
	this.instance.parent = this;
	this.instance.setTransform(417.8,234.1,1,1,0,0,0,417.8,234.1);

	this.instance_1 = new lib.CachedTexturedBitmap_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.65,-1.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Dreieck_Ebene_1, null, null);


(lib.Dreieck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Dreieck_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(417.9,234.1,1,1,0,0,0,417.9,234.1);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Dreieck, new cjs.Rectangle(-1.6,-1.6,839,471.5), null);


(lib.DotPitch_distance = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.DotPitch_distance_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(165.5,21.5,1,1,0,0,0,165.5,21.5);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.DotPitch_distance, new cjs.Rectangle(-1,-1,333,45), null);


(lib.DotPitch_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.DotPitch_text_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(86.9,36.8,1,1,0,0,0,86.9,36.8);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.DotPitch_text, new cjs.Rectangle(0,0,173.8,73.6), null);


(lib.BDot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.BDot_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(55,165,1,1,0,0,0,55,165);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.BDot, new cjs.Rectangle(0,0,110,330), null);


(lib._1929Pixel_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._1929Pixel_text_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(97.1,35.5,1,1,0,0,0,97.1,35.5);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._1929Pixel_text, new cjs.Rectangle(0,0,194.2,71), null);


(lib._1920_1080_Pixel_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._1920_1080_Pixel_text_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(146.2,34.6,1,1,0,0,0,146.2,34.6);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._1920_1080_Pixel_text, new cjs.Rectangle(0,0,292.4,69.3), null);


(lib._1080Pixel_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._1080Pixel_text_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(99.6,37.6,1,1,0,0,0,99.6,37.6);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._1080Pixel_text, new cjs.Rectangle(0,0,199.3,75.3), null);


(lib._24_zoll_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib._24_zoll_text_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(72.2,34.8,1,1,0,0,0,72.2,34.8);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._24_zoll_text, new cjs.Rectangle(0,0,144.4,69.6), null);


(lib.Szene_1_Zoll_Text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Zoll_Text
	this.instance = new lib._24_zoll_text();
	this.instance.parent = this;
	this.instance.setTransform(285.4,347.5,1,1,0,0,0,72.2,34.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1433).to({_off:false},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).wait(667).to({alpha:0.9167},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.0833},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Szene_1_SDP_Text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SDP_Text
	this.instance = new lib.SDP_Rechnung();
	this.instance.parent = this;
	this.instance.setTransform(475.65,41.15,1,1,0,0,0,447.4,37.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.PPI_rechnung();
	this.instance_1.parent = this;
	this.instance_1.setTransform(475.65,41.15,1,1,0,0,0,447.4,37.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1808).to({_off:false},0).wait(1).to({alpha:0.0909},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:1},0).wait(40).to({alpha:0.9286},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.7857},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.6429},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.3571},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.2143},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.0714},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(253));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1908).to({_off:false},0).wait(1).to({alpha:0.0909},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:1},0).wait(194).to({alpha:0.9167},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.0833},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Szene_1_RDot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// RDot
	this.instance = new lib.RDot();
	this.instance.parent = this;
	this.instance.setTransform(369.65,358.55,1,1,0,0,0,55,165);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(202).to({_off:false},0).wait(1).to({regY:166.1,y:359.65,alpha:0.0526},0).wait(1).to({alpha:0.1053},0).wait(1).to({alpha:0.1579},0).wait(1).to({alpha:0.2105},0).wait(1).to({alpha:0.2632},0).wait(1).to({alpha:0.3158},0).wait(1).to({alpha:0.3684},0).wait(1).to({alpha:0.4211},0).wait(1).to({alpha:0.4737},0).wait(1).to({alpha:0.5263},0).wait(1).to({alpha:0.5789},0).wait(1).to({alpha:0.6316},0).wait(1).to({alpha:0.6842},0).wait(1).to({alpha:0.7368},0).wait(1).to({alpha:0.7895},0).wait(1).to({alpha:0.8421},0).wait(1).to({alpha:0.8947},0).wait(1).to({alpha:0.9474},0).wait(1).to({alpha:1},0).wait(1).to({regY:165,y:358.55},0).to({_off:true},196).wait(98));

}).prototype = p = new cjs.MovieClip();


(lib.Szene_1_Pixel_Hoehe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Pixel_Hoehe
	this.instance = new lib._1080Pixel_text();
	this.instance.parent = this;
	this.instance.setTransform(787.6,392,1,1,0,0,0,99.6,37.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1472).to({_off:false},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).wait(628).to({alpha:0.9167},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.0833},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Szene_1_Pixel_Breite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Pixel_Breite
	this.instance = new lib._1920_1080_Pixel_text();
	this.instance.parent = this;
	this.instance.setTransform(480,638.45,1,1,0,0,0,146.2,34.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib._1929Pixel_text();
	this.instance_1.parent = this;
	this.instance_1.setTransform(480,638.6,1,1,0,0,0,97.1,35.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(829).to({_off:false},0).wait(1).to({alpha:0.0833},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.9167},0).wait(1).to({alpha:1},0).wait(598).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(677));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1472).to({_off:false},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).wait(628).to({alpha:0.9167},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.0833},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Szene_1_Pixel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Pixel
	this.instance = new lib.Pixel();
	this.instance.parent = this;
	this.instance.setTransform(479.95,359.95,1,1,0,0,0,165.3,165.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).wait(1).to({regX:165,regY:165,x:479.65,y:359.65,alpha:0.0625},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.1875},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3125},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.4375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5625},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.6875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8125},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.9375},0).wait(1).to({alpha:1},0).wait(1).to({regX:165.3,regY:165.3,x:479.95,y:359.95},0).wait(144).to({_off:true},216).wait(94));

}).prototype = p = new cjs.MovieClip();


(lib.Szene_1_Monitor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Monitor
	this.instance = new lib.Monitor();
	this.instance.parent = this;
	this.instance.setTransform(482.15,337.8,1,1,0,0,0,439.9,256.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(762).to({_off:false},0).wait(1).to({regX:439.8,regY:256.3,x:482.05,y:338,alpha:0.0625},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.1875},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3125},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.4375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5625},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.6875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8125},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.9375},0).wait(1).to({alpha:1},0).wait(1).to({regX:439.9,regY:256.1,x:482.15,y:337.8},0).wait(1334).to({regX:439.8,regY:256.3,x:482.05,y:338,alpha:0.9167},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.0833},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Szene_1_GDot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// GDot
	this.instance = new lib.GDot();
	this.instance.parent = this;
	this.instance.setTransform(478.65,358.65,1,1,0,0,0,54,164);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(234).to({_off:false},0).wait(1).to({regX:55,regY:165,x:479.65,y:359.65,alpha:0.0588},0).wait(1).to({alpha:0.1176},0).wait(1).to({alpha:0.1765},0).wait(1).to({alpha:0.2353},0).wait(1).to({alpha:0.2941},0).wait(1).to({alpha:0.3529},0).wait(1).to({alpha:0.4118},0).wait(1).to({alpha:0.4706},0).wait(1).to({alpha:0.5294},0).wait(1).to({alpha:0.5882},0).wait(1).to({alpha:0.6471},0).wait(1).to({alpha:0.7059},0).wait(1).to({alpha:0.7647},0).wait(1).to({alpha:0.8235},0).wait(1).to({alpha:0.8824},0).wait(1).to({alpha:0.9412},0).wait(1).to({alpha:1},0).wait(1).to({regX:54,regY:164,x:478.65,y:358.65},0).to({_off:true},166).wait(1708));

}).prototype = p = new cjs.MovieClip();


(lib.Szene_1_Dreieck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Dreieck
	this.instance = new lib.Dreieck();
	this.instance.parent = this;
	this.instance.setTransform(480.35,336.7,1,1,0,0,180,417.8,234.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1433).to({_off:false},0).wait(1).to({regX:417.9,x:480.25,alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).wait(1).to({regX:417.8,x:480.35},0).wait(666).to({regX:417.9,x:480.25,alpha:0.9167},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.0833},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Szene_1_DotPitch_Text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// DotPitch_Text
	this.instance = new lib.DotPitch_text();
	this.instance.parent = this;
	this.instance.setTransform(312.95,106.35,1,1,0,0,0,86.9,36.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(547).to({_off:false},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(147).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(1416));

}).prototype = p = new cjs.MovieClip();


(lib.Szene_1_DotPitch_Distance = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// DotPitch_Distance
	this.instance = new lib.DotPitch_distance();
	this.instance.parent = this;
	this.instance.setTransform(314.5,164.55,1,1,0,0,0,165.5,21.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(522).to({_off:false},0).wait(1).to({regY:21.5,y:164.65,alpha:0.1429},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:1},0).wait(1).to({regY:21.4,y:164.55},0).wait(172).to({regY:21.5,y:164.65,alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(1416));

}).prototype = p = new cjs.MovieClip();


(lib.RGBDot_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.BDot();
	this.instance.parent = this;
	this.instance.setTransform(274,164,1,1,0,0,0,54,164);

	this.instance_1 = new lib.GDot();
	this.instance_1.parent = this;
	this.instance_1.setTransform(164,164,1,1,0,0,0,54,164);

	this.instance_2 = new lib.RDot();
	this.instance_2.parent = this;
	this.instance_2.setTransform(55,163.9,1,1,0,0,0,55,165);

	this.instance_3 = new lib.Pixel();
	this.instance_3.parent = this;
	this.instance_3.setTransform(165.3,165.3,1,1,0,0,0,165.3,165.3);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 0, 0)];
	this.instance_3.cache(-2,-2,334,334);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.RGBDot_Ebene_1, null, null);


(lib.RGBDot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.RGBDot_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(165,165,1,1,0,0,0,165,165);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.RGBDot, new cjs.Rectangle(0,0,330,330), null);


(lib.Szene_1_DotPitch_RGB_rechts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// DotPitch_RGB_rechts
	this.instance = new lib.RGBDot();
	this.instance.parent = this;
	this.instance.setTransform(695,360,1,1,0,0,0,165,165);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(475).to({_off:false},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:1},0).wait(22).to({x:687.7},0).wait(1).to({x:680.4},0).wait(1).to({x:673.15},0).wait(1).to({x:665.85},0).wait(1).to({x:658.55},0).wait(1).to({x:651.25},0).wait(1).to({x:644},0).wait(190).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(1416));

}).prototype = p = new cjs.MovieClip();


(lib.Szene_1_DotPitch_RGB_links = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// DotPitch_RGB_links
	this.instance = new lib.RGBDot();
	this.instance.parent = this;
	this.instance.setTransform(265,360,1,1,0,0,0,165,165);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(475).to({_off:false},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:1},0).wait(22).to({x:272},0).wait(1).to({x:279},0).wait(1).to({x:285.95},0).wait(1).to({x:293},0).wait(1).to({x:300},0).wait(1).to({x:306.95},0).wait(1).to({x:314},0).wait(190).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.Szene_1_BDot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BDot
	this.instance = new lib.BDot();
	this.instance.parent = this;
	this.instance.setTransform(588.65,358.65,1,1,0,0,0,54,164);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,-2,114,334);

	this.instance_1 = new lib.RGBDot();
	this.instance_1.parent = this;
	this.instance_1.setTransform(479.65,359.65,1,1,0,0,0,165,165);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(273).to({_off:false},0).wait(1).to({regX:55,regY:165,x:589.65,y:359.65},0).wait(16).to({regX:54,regY:164,x:588.65,y:358.65},0).to({_off:true},128).wait(1708));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(418).to({_off:false},0).wait(1).to({alpha:0.9286},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.7857},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.6429},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.3571},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.2143},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.0714},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(1693));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib._0505_Auflösung_eines_Monitors = function(mode,startPosition,loop) {
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
	this.frame_1 = function() {
		playSound("Kapitel5_05_Aufloesung_eines_Monitorswav");
	}
	this.frame_2125 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2124).call(this.frame_2125).wait(1));

	// Dreieck_obj_
	this.Dreieck = new lib.Szene_1_Dreieck();
	this.Dreieck.name = "Dreieck";
	this.Dreieck.parent = this;
	this.Dreieck.depth = 0;
	this.Dreieck.isAttachedToCamera = 0
	this.Dreieck.isAttachedToMask = 0
	this.Dreieck.layerDepth = 0
	this.Dreieck.layerIndex = 0
	this.Dreieck.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Dreieck).wait(1434).to({regX:480.3,regY:336.7,x:480.3,y:336.7},0).wait(13).to({regX:0,regY:0,x:0,y:0},0).wait(666).to({regX:480.3,regY:336.7,x:480.3,y:336.7},0).wait(12).to({regX:0,regY:0,x:0,y:0},0).wait(1));

	// SDP_Text_obj_
	this.SDP_Text = new lib.Szene_1_SDP_Text();
	this.SDP_Text.name = "SDP_Text";
	this.SDP_Text.parent = this;
	this.SDP_Text.depth = 0;
	this.SDP_Text.isAttachedToCamera = 0
	this.SDP_Text.isAttachedToMask = 0
	this.SDP_Text.layerDepth = 0
	this.SDP_Text.layerIndex = 1
	this.SDP_Text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.SDP_Text).wait(1809).to({regX:475.6,regY:41.1,x:475.6,y:41.1},0).wait(11).to({regX:0,regY:0,x:0,y:0},0).wait(39).to({regX:475.6,regY:41.1,x:475.6,y:41.1},0).wait(14).to({regX:0,regY:0,x:0,y:0},0).wait(36).to({regX:475.6,regY:41.1,x:475.6,y:41.1},0).wait(11).to({regX:0,regY:0,x:0,y:0},0).wait(193).to({regX:475.6,regY:41.1,x:475.6,y:41.1},0).wait(12).to({regX:0,regY:0,x:0,y:0},0).wait(1));

	// Zoll_Text_obj_
	this.Zoll_Text = new lib.Szene_1_Zoll_Text();
	this.Zoll_Text.name = "Zoll_Text";
	this.Zoll_Text.parent = this;
	this.Zoll_Text.depth = 0;
	this.Zoll_Text.isAttachedToCamera = 0
	this.Zoll_Text.isAttachedToMask = 0
	this.Zoll_Text.layerDepth = 0
	this.Zoll_Text.layerIndex = 2
	this.Zoll_Text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Zoll_Text).wait(1434).to({regX:285.4,regY:347.5,x:285.4,y:347.5},0).wait(13).to({regX:0,regY:0,x:0,y:0},0).wait(666).to({regX:285.4,regY:347.5,x:285.4,y:347.5},0).wait(12).to({regX:0,regY:0,x:0,y:0},0).wait(1));

	// Pixel_Hoehe_obj_
	this.Pixel_Hoehe = new lib.Szene_1_Pixel_Hoehe();
	this.Pixel_Hoehe.name = "Pixel_Hoehe";
	this.Pixel_Hoehe.parent = this;
	this.Pixel_Hoehe.depth = 0;
	this.Pixel_Hoehe.isAttachedToCamera = 0
	this.Pixel_Hoehe.isAttachedToMask = 0
	this.Pixel_Hoehe.layerDepth = 0
	this.Pixel_Hoehe.layerIndex = 3
	this.Pixel_Hoehe.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Pixel_Hoehe).wait(1473).to({regX:787.6,regY:392.1,x:787.6,y:392.1},0).wait(13).to({regX:0,regY:0,x:0,y:0},0).wait(627).to({regX:787.6,regY:392.1,x:787.6,y:392.1},0).wait(12).to({regX:0,regY:0,x:0,y:0},0).wait(1));

	// Pixel_Breite_obj_
	this.Pixel_Breite = new lib.Szene_1_Pixel_Breite();
	this.Pixel_Breite.name = "Pixel_Breite";
	this.Pixel_Breite.parent = this;
	this.Pixel_Breite.depth = 0;
	this.Pixel_Breite.isAttachedToCamera = 0
	this.Pixel_Breite.isAttachedToMask = 0
	this.Pixel_Breite.layerDepth = 0
	this.Pixel_Breite.layerIndex = 4
	this.Pixel_Breite.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Pixel_Breite).wait(830).to({regX:480,regY:638.6,x:480,y:638.6},0).wait(12).to({regX:0,regY:0,x:0,y:0},0).wait(597).to({regX:480,regY:638.6,x:480,y:638.6},0).wait(10).to({regX:0,regY:0,x:0,y:0},0).wait(24).to({regX:480,regY:638.6,x:480,y:638.6},0).wait(13).to({regX:0,regY:0,x:0,y:0},0).wait(627).to({regX:480,regY:638.6,x:480,y:638.6},0).wait(12).to({regX:0,regY:0,x:0,y:0},0).wait(1));

	// Monitor_obj_
	this.Monitor = new lib.Szene_1_Monitor();
	this.Monitor.name = "Monitor";
	this.Monitor.parent = this;
	this.Monitor.depth = 0;
	this.Monitor.isAttachedToCamera = 0
	this.Monitor.isAttachedToMask = 0
	this.Monitor.layerDepth = 0
	this.Monitor.layerIndex = 5
	this.Monitor.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Monitor).wait(763).to({regX:482,regY:338,x:482,y:338},0).wait(16).to({regX:0,regY:0,x:0,y:0},0).wait(1334).to({regX:482,regY:338,x:482,y:338},0).wait(12).to({regX:0,regY:0,x:0,y:0},0).wait(1));

	// DotPitch_Text_obj_
	this.DotPitch_Text = new lib.Szene_1_DotPitch_Text();
	this.DotPitch_Text.name = "DotPitch_Text";
	this.DotPitch_Text.parent = this;
	this.DotPitch_Text.depth = 0;
	this.DotPitch_Text.isAttachedToCamera = 0
	this.DotPitch_Text.isAttachedToMask = 0
	this.DotPitch_Text.layerDepth = 0
	this.DotPitch_Text.layerIndex = 6
	this.DotPitch_Text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.DotPitch_Text).wait(548).to({regX:313,regY:106.3,x:313,y:106.3},0).wait(8).to({regX:0,regY:0,x:0,y:0},0).wait(146).to({regX:313,regY:106.3,x:313,y:106.3},0).wait(8).to({regX:0,regY:0,x:0,y:0},0).wait(1416));

	// DotPitch_Distance_obj_
	this.DotPitch_Distance = new lib.Szene_1_DotPitch_Distance();
	this.DotPitch_Distance.name = "DotPitch_Distance";
	this.DotPitch_Distance.parent = this;
	this.DotPitch_Distance.depth = 0;
	this.DotPitch_Distance.isAttachedToCamera = 0
	this.DotPitch_Distance.isAttachedToMask = 0
	this.DotPitch_Distance.layerDepth = 0
	this.DotPitch_Distance.layerIndex = 7
	this.DotPitch_Distance.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.DotPitch_Distance).wait(523).to({regX:314.5,regY:164.7,x:314.5,y:164.7},0).wait(7).to({regX:0,regY:0,x:0,y:0},0).wait(172).to({regX:314.5,regY:164.7,x:314.5,y:164.7},0).wait(8).to({regX:0,regY:0,x:0,y:0},0).wait(1416));

	// DotPitch_RGB_rechts_obj_
	this.DotPitch_RGB_rechts = new lib.Szene_1_DotPitch_RGB_rechts();
	this.DotPitch_RGB_rechts.name = "DotPitch_RGB_rechts";
	this.DotPitch_RGB_rechts.parent = this;
	this.DotPitch_RGB_rechts.depth = 0;
	this.DotPitch_RGB_rechts.isAttachedToCamera = 0
	this.DotPitch_RGB_rechts.isAttachedToMask = 0
	this.DotPitch_RGB_rechts.layerDepth = 0
	this.DotPitch_RGB_rechts.layerIndex = 8
	this.DotPitch_RGB_rechts.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.DotPitch_RGB_rechts).wait(476).to({regX:669.5,regY:360,x:669.5,y:360},0).wait(9).to({regX:0,regY:0,x:0,y:0},0).wait(21).to({regX:669.5,regY:360,x:669.5,y:360},0).wait(7).to({regX:0,regY:0,x:0,y:0},0).wait(189).to({regX:669.5,regY:360,x:669.5,y:360},0).wait(8).to({regX:0,regY:0,x:0,y:0},0).wait(1416));

	// DotPitch_RGB_links_obj_
	this.DotPitch_RGB_links = new lib.Szene_1_DotPitch_RGB_links();
	this.DotPitch_RGB_links.name = "DotPitch_RGB_links";
	this.DotPitch_RGB_links.parent = this;
	this.DotPitch_RGB_links.depth = 0;
	this.DotPitch_RGB_links.isAttachedToCamera = 0
	this.DotPitch_RGB_links.isAttachedToMask = 0
	this.DotPitch_RGB_links.layerDepth = 0
	this.DotPitch_RGB_links.layerIndex = 9
	this.DotPitch_RGB_links.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.DotPitch_RGB_links).wait(476).to({regX:289.5,regY:360,x:289.5,y:360},0).wait(9).to({regX:0,regY:0,x:0,y:0},0).wait(21).to({regX:289.5,regY:360,x:289.5,y:360},0).wait(7).to({regX:0,regY:0,x:0,y:0},0).wait(189).to({regX:289.5,regY:360,x:289.5,y:360},0).wait(8).to({regX:0,regY:0,x:0,y:0},0).to({_off:true},2).wait(1414));

	// BDot_obj_
	this.BDot = new lib.Szene_1_BDot();
	this.BDot.name = "BDot";
	this.BDot.parent = this;
	this.BDot.depth = 0;
	this.BDot.isAttachedToCamera = 0
	this.BDot.isAttachedToMask = 0
	this.BDot.layerDepth = 0
	this.BDot.layerIndex = 10
	this.BDot.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.BDot).wait(274).to({regX:479.7,regY:359.6,x:479.7,y:359.6},0).wait(16).to({regX:0,regY:0,x:0,y:0},0).wait(129).to({regX:479.7,regY:359.6,x:479.7,y:359.6},0).wait(14).to({regX:0,regY:0,x:0,y:0},0).wait(1693));

	// GDot_obj_
	this.GDot = new lib.Szene_1_GDot();
	this.GDot.name = "GDot";
	this.GDot.parent = this;
	this.GDot.depth = 0;
	this.GDot.isAttachedToCamera = 0
	this.GDot.isAttachedToMask = 0
	this.GDot.layerDepth = 0
	this.GDot.layerIndex = 11
	this.GDot.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.GDot).wait(235).to({regX:479.7,regY:359.6,x:479.7,y:359.6},0).wait(17).to({regX:0,regY:0,x:0,y:0},0).wait(1874));

	// RDot_obj_
	this.RDot = new lib.Szene_1_RDot();
	this.RDot.name = "RDot";
	this.RDot.parent = this;
	this.RDot.depth = 0;
	this.RDot.isAttachedToCamera = 0
	this.RDot.isAttachedToMask = 0
	this.RDot.layerDepth = 0
	this.RDot.layerIndex = 12
	this.RDot.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.RDot).wait(203).to({regX:369.7,regY:359.7,x:369.7,y:359.7},0).wait(19).to({regX:0,regY:0,x:0,y:0},0).wait(196).to({_off:true},98).wait(1610));

	// Pixel_obj_
	this.Pixel = new lib.Szene_1_Pixel();
	this.Pixel.name = "Pixel";
	this.Pixel.parent = this;
	this.Pixel.depth = 0;
	this.Pixel.isAttachedToCamera = 0
	this.Pixel.isAttachedToMask = 0
	this.Pixel.layerDepth = 0
	this.Pixel.layerIndex = 13
	this.Pixel.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Pixel).wait(42).to({regX:479.7,regY:359.6,x:479.7,y:359.6},0).wait(16).to({regX:0,regY:0,x:0,y:0},0).wait(361).to({regX:479.7,regY:359.6,x:479.7,y:359.6},0).wait(14).to({regX:0,regY:0,x:0,y:0},0).to({_off:true},79).wait(1614));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,923,674.1);
// library properties:
lib.properties = {
	id: '403B141861F82D479149955A4C4BAF1F',
	width: 960,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/0505_Auflösung_eines_Monitors_atlas_.png?1547315972024", id:"0505_Auflösung_eines_Monitors_atlas_"},
		{src:"images/0505_Auflösung_eines_Monitors_atlas_2.png?1547315972024", id:"0505_Auflösung_eines_Monitors_atlas_2"},
		{src:"images/0505_Auflösung_eines_Monitors_atlas_3.png?1547315972024", id:"0505_Auflösung_eines_Monitors_atlas_3"},
		{src:"sounds/Kapitel5_05_Aufloesung_eines_Monitorswav.mp3?1547315972238", id:"Kapitel5_05_Aufloesung_eines_Monitorswav"}
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
an.compositions['403B141861F82D479149955A4C4BAF1F'] = {
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