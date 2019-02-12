(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"0501_Einleitung_atlas_", frames: [[0,0,1802,902],[1899,832,92,60],[1972,1046,74,74],[1972,894,74,74],[1954,184,70,227],[0,904,497,604],[1421,1176,460,5],[1037,904,318,318],[1700,904,270,270],[1988,115,54,54],[1868,894,56,6],[1804,0,182,182],[1972,970,74,74],[1804,534,55,244],[1804,842,62,60],[2026,171,19,59],[1993,827,49,32],[2041,0,7,31],[1804,780,93,60],[1804,359,148,173],[499,904,536,358],[1357,904,341,215],[1918,623,92,92],[1918,717,51,113],[1988,0,51,113],[1804,184,148,173],[1971,717,74,74],[1954,413,70,208],[1861,534,55,244],[1357,1121,62,60],[2026,232,19,59],[1971,793,52,32],[2041,33,7,31]]}
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
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_10 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_11 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_12 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_13 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_14 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_15 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_16 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_17 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_18 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_19 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_20 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_21 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_22 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_23 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_24 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_25 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_26 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_27 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_28 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_29 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_30 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_31 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_32 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_33 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_7 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_8 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_9 = function() {
	this.initialize(ss["0501_Einleitung_atlas_"]);
	this.gotoAndStop(32);
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


(lib.Symbol_2_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_33();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_2_Ebene_1, null, null);


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.shadow, new cjs.Rectangle(0,0,0,0), null);


(lib.Rechnung_klein_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.text = new cjs.Text("20 x 10 Pixel = 200 Pixel", "normal 400 44px 'Oswald'");
	this.text.textAlign = "center";
	this.text.lineHeight = 72;
	this.text.lineWidth = 425;
	this.text.parent = this;
	this.text.setTransform(214.4,2);
	if(!lib.properties.webfonts['Oswald']) {
		lib.webFontTxtInst['Oswald'] = lib.webFontTxtInst['Oswald'] || [];
		lib.webFontTxtInst['Oswald'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Rechnung_klein_Ebene_1, null, null);


(lib.Rechnung_gross_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.text = new cjs.Text("10 x 5 Pixel = 50 Pixel", "normal 400 44px 'Oswald'");
	this.text.textAlign = "center";
	this.text.lineHeight = 72;
	this.text.lineWidth = 425;
	this.text.parent = this;
	this.text.setTransform(214.4,2);
	if(!lib.properties.webfonts['Oswald']) {
		lib.webFontTxtInst['Oswald'] = lib.webFontTxtInst['Oswald'] || [];
		lib.webFontTxtInst['Oswald'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Rechnung_gross_Ebene_1, null, null);


(lib.Pixel_klein_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_3();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pixel_klein_Ebene_1, null, null);


(lib.Pixel_gross_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pixel_gross_Ebene_1, null, null);


(lib.Pixel_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.text = new cjs.Text("Pixel", "normal 400 44px 'Oswald'");
	this.text.textAlign = "center";
	this.text.lineHeight = 72;
	this.text.lineWidth = 108;
	this.text.parent = this;
	this.text.setTransform(56,2);
	if(!lib.properties.webfonts['Oswald']) {
		lib.webFontTxtInst['Oswald'] = lib.webFontTxtInst['Oswald'] || [];
		lib.webFontTxtInst['Oswald'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pixel_Ebene_1, null, null);


(lib.Picture_text_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.text = new cjs.Text("Picture", "normal 400 44px 'Oswald'");
	this.text.textAlign = "center";
	this.text.lineHeight = 72;
	this.text.lineWidth = 182;
	this.text.parent = this;
	this.text.setTransform(92.75,2);
	if(!lib.properties.webfonts['Oswald']) {
		lib.webFontTxtInst['Oswald'] = lib.webFontTxtInst['Oswald'] || [];
		lib.webFontTxtInst['Oswald'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Picture_text_Ebene_1, null, null);


(lib.head_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_32();
	this.instance.parent = this;
	this.instance.setTransform(122.45,0,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(166.6,138.05,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(71.9,138.05,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_29();
	this.instance_3.parent = this;
	this.instance_3.setTransform(48.8,116.85,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_28();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,86,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_27();
	this.instance_5.parent = this;
	this.instance_5.setTransform(122.45,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.head_Ebene_1, null, null);


(lib.handRight_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_26();
	this.instance.parent = this;
	this.instance.setTransform(-23.15,-28.35,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.6,1.55,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8.7,1.35,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.9,-1.5,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_22();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-22.8,-1.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.handRight_Ebene_1, null, null);


(lib.forearmRight_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_21();
	this.instance.parent = this;
	this.instance.setTransform(-13.85,-60.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.forearmRight_Ebene_1, null, null);


(lib.Element_text_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.text = new cjs.Text("Element", "normal 400 44px 'Oswald'");
	this.text.textAlign = "center";
	this.text.lineHeight = 72;
	this.text.lineWidth = 183;
	this.text.parent = this;
	this.text.setTransform(93.4,2);
	if(!lib.properties.webfonts['Oswald']) {
		lib.webFontTxtInst['Oswald'] = lib.webFontTxtInst['Oswald'] || [];
		lib.webFontTxtInst['Oswald'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Element_text_Ebene_1, null, null);


(lib.elbowRight_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_20();
	this.instance.parent = this;
	this.instance.setTransform(-18.4,-18.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.elbowRight_Ebene_1, null, null);


(lib.body_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_19();
	this.instance.parent = this;
	this.instance.setTransform(190.05,35.45,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(190.55,22.45,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(54.45,67.35,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(42.45,55.35,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(9.3,89.95,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_14();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.body_Ebene_1, null, null);


(lib.Bild_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(-0.45,-0.45,0.4989,0.4989);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bild_Ebene_1, null, null);


(lib.armRight_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_13();
	this.instance.parent = this;
	this.instance.setTransform(-17.5,-56.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.armRight_Ebene_1, null, null);


(lib.armLeft_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_12();
	this.instance.parent = this;
	this.instance.setTransform(4.15,0,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.1,102.8,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,224.1,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(26.05,253.25,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(3.8,252.95,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(35.8,250.65,0.5,0.5);

	this.instance_6 = new lib.CachedTexturedBitmap_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(14.1,250.6,0.5,0.5);

	this.instance_7 = new lib.CachedTexturedBitmap_5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(6.8,121,0.5,0.5);

	this.instance_8 = new lib.CachedTexturedBitmap_4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(4.3,17.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.armLeft_Ebene_1, null, null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Symbol_2_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(18.5,18.5,1,1,0,0,0,18.5,18.5);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,37,37), null);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.head_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(134,132.5,1,1,0,0,0,134,132.5);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.head, new cjs.Rectangle(0,0,268,265), null);


(lib.handRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.handRight_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(0.1,0,1,1,0,0,0,0.1,0);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.handRight, new cjs.Rectangle(-23.1,-28.3,46.5,56.7), null);


(lib.forearmRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.forearmRight_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(-0.1,0.1,1,1,0,0,0,-0.1,0.1);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.forearmRight, new cjs.Rectangle(-13.8,-60.9,27.5,122), null);


(lib.elbowRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.elbowRight_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(0.1,0.1,1,1,0,0,0,0.1,0.1);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.elbowRight, new cjs.Rectangle(-18.4,-18.4,37,37), null);


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.body_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(124.3,151,1,1,0,0,0,124.3,151);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.body, new cjs.Rectangle(0,0,248.5,302), null);


(lib.armRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.armRight_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.armRight, new cjs.Rectangle(-17.5,-56.7,35,113.5), null);


(lib.armLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.armLeft_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(23,140.3,1,1,0,0,0,23,140.3);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.armLeft, new cjs.Rectangle(0,0,46,280.6), null);


(lib.Robot_Symbol_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol_2
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(122.6,-118.05,1,1,0,0,0,18.4,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Robot_Symbol_2, null, null);


(lib.Robot_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.instance = new lib.shadow();
	this.instance.parent = this;
	this.instance.setTransform(1,210.1,1,1,0,0,0,227.7,169.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Robot_shadow, null, null);


(lib.Robot_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head
	this.instance = new lib.head();
	this.instance.parent = this;
	this.instance.setTransform(-0.25,-274.1,1,1,0,0,0,133.9,132.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Robot_head, null, null);


(lib.Robot_handRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handRight
	this.instance = new lib.handRight();
	this.instance.parent = this;
	this.instance.setTransform(127.35,120.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Robot_handRight, null, null);


(lib.Robot_forearmRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// forearmRight
	this.instance = new lib.forearmRight();
	this.instance.parent = this;
	this.instance.setTransform(122.9,44.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Robot_forearmRight, null, null);


(lib.Robot_elbowRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// elbowRight
	this.instance = new lib.elbowRight();
	this.instance.parent = this;
	this.instance.setTransform(122.65,-14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Robot_elbowRight, null, null);


(lib.Robot_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.body();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-0.25,1,1,0,0,0,124.2,151.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Robot_body, null, null);


(lib.Robot_armRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// armRight
	this.instance = new lib.armRight();
	this.instance.parent = this;
	this.instance.setTransform(123.55,-63.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Robot_armRight, null, null);


(lib.Robot_armLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// armLeft
	this.instance = new lib.armLeft();
	this.instance.parent = this;
	this.instance.setTransform(-123.8,3.75,1,1,0,0,0,23.1,140.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Robot_armLeft, null, null);


(lib.Rechnung_klein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Rechnung_klein_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(214.4,58.1,1,1,0,0,0,214.4,58.1);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Rechnung_klein, new cjs.Rectangle(0,0,428.8,116.4), null);


(lib.Rechnung_gross = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Rechnung_gross_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(214.4,58.1,1,1,0,0,0,214.4,58.1);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Rechnung_gross, new cjs.Rectangle(0,0,428.8,116.4), null);


(lib.Pixel_klein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Pixel_klein_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(22.5,22.5,1,1,0,0,0,22.5,22.5);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pixel_klein, new cjs.Rectangle(-0.5,-0.5,46,46), null);


(lib.Pixel_gross = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Pixel_gross_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(45,45,1,1,0,0,0,45,45);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pixel_gross, new cjs.Rectangle(-0.5,-0.5,91,91), null);


(lib.Pixel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Pixel_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(56,37.6,1,1,0,0,0,56,37.6);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pixel, new cjs.Rectangle(0,0,112,75.3), null);


(lib.Picture_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Picture_text_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(92.8,42.1,1,1,0,0,0,92.8,42.1);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Picture_text, new cjs.Rectangle(0,0,185.5,84.2), null);


(lib.Element_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Element_text_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(93.4,38.1,1,1,0,0,0,93.4,38.1);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Element_text, new cjs.Rectangle(0,0,186.8,76.2), null);


(lib.breite_hoehe_klein_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.Pixel_klein();
	this.instance.parent = this;
	this.instance.setTransform(877.6,22.5,1,1,90,0,0,22.5,22.5);

	this.instance_1 = new lib.Pixel_klein();
	this.instance_1.parent = this;
	this.instance_1.setTransform(607.65,22.5,1,1,90,0,0,22.5,22.5);

	this.instance_2 = new lib.Pixel_klein();
	this.instance_2.parent = this;
	this.instance_2.setTransform(517.65,22.5,1,1,90,0,0,22.5,22.5);

	this.instance_3 = new lib.Pixel_klein();
	this.instance_3.parent = this;
	this.instance_3.setTransform(472.65,22.5,1,1,90,0,0,22.5,22.5);

	this.instance_4 = new lib.Pixel_klein();
	this.instance_4.parent = this;
	this.instance_4.setTransform(562.65,22.5,1,1,90,0,0,22.5,22.5);

	this.instance_5 = new lib.Pixel_klein();
	this.instance_5.parent = this;
	this.instance_5.setTransform(697.65,22.5,1,1,90,0,0,22.5,22.5);

	this.instance_6 = new lib.Pixel_klein();
	this.instance_6.parent = this;
	this.instance_6.setTransform(652.65,22.5,1,1,90,0,0,22.5,22.5);

	this.instance_7 = new lib.Pixel_klein();
	this.instance_7.parent = this;
	this.instance_7.setTransform(787.65,22.5,1,1,90,0,0,22.5,22.5);

	this.instance_8 = new lib.Pixel_klein();
	this.instance_8.parent = this;
	this.instance_8.setTransform(742.65,22.5,1,1,90,0,0,22.5,22.5);

	this.instance_9 = new lib.Pixel_klein();
	this.instance_9.parent = this;
	this.instance_9.setTransform(832.65,22.5,1,1,90,0,0,22.5,22.5);

	this.instance_10 = new lib.Pixel_klein();
	this.instance_10.parent = this;
	this.instance_10.setTransform(202.7,22.5,1,1,90,0,0,22.5,22.5);

	this.instance_11 = new lib.Pixel_klein();
	this.instance_11.parent = this;
	this.instance_11.setTransform(112.7,22.5,1,1,90,0,0,22.5,22.5);

	this.instance_12 = new lib.Pixel_klein();
	this.instance_12.parent = this;
	this.instance_12.setTransform(67.5,22.5,1,1,90,0,0,22.5,22.5);

	this.instance_13 = new lib.Pixel_klein();
	this.instance_13.parent = this;
	this.instance_13.setTransform(157.7,22.5,1,1,90,0,0,22.5,22.5);

	this.instance_14 = new lib.Pixel_klein();
	this.instance_14.parent = this;
	this.instance_14.setTransform(292.7,22.5,1,1,90,0,0,22.5,22.5);

	this.instance_15 = new lib.Pixel_klein();
	this.instance_15.parent = this;
	this.instance_15.setTransform(247.5,22.5,1,1,90,0,0,22.5,22.5);

	this.instance_16 = new lib.Pixel_klein();
	this.instance_16.parent = this;
	this.instance_16.setTransform(382.7,22.5,1,1,90,0,0,22.5,22.5);

	this.instance_17 = new lib.Pixel_klein();
	this.instance_17.parent = this;
	this.instance_17.setTransform(337.85,22.5,1,1,90,0,0,22.5,22.5);

	this.instance_18 = new lib.Pixel_klein();
	this.instance_18.parent = this;
	this.instance_18.setTransform(427.5,22.5,1,1,90,0,0,22.5,22.5);

	this.instance_19 = new lib.Pixel_klein();
	this.instance_19.parent = this;
	this.instance_19.setTransform(22.5,292.5,1,1,0,0,0,22.5,22.5);

	this.instance_20 = new lib.Pixel_klein();
	this.instance_20.parent = this;
	this.instance_20.setTransform(22.5,382.5,1,1,0,0,0,22.5,22.5);

	this.instance_21 = new lib.Pixel_klein();
	this.instance_21.parent = this;
	this.instance_21.setTransform(22.5,427.5,1,1,0,0,0,22.5,22.5);

	this.instance_22 = new lib.Pixel_klein();
	this.instance_22.parent = this;
	this.instance_22.setTransform(22.5,337.5,1,1,0,0,0,22.5,22.5);

	this.instance_23 = new lib.Pixel_klein();
	this.instance_23.parent = this;
	this.instance_23.setTransform(22.5,202.5,1,1,0,0,0,22.5,22.5);

	this.instance_24 = new lib.Pixel_klein();
	this.instance_24.parent = this;
	this.instance_24.setTransform(22.5,247.5,1,1,0,0,0,22.5,22.5);

	this.instance_25 = new lib.Pixel_klein();
	this.instance_25.parent = this;
	this.instance_25.setTransform(22.5,112.5,1,1,0,0,0,22.5,22.5);

	this.instance_26 = new lib.Pixel_klein();
	this.instance_26.parent = this;
	this.instance_26.setTransform(22.5,157.5,1,1,0,0,0,22.5,22.5);

	this.instance_27 = new lib.Pixel_klein();
	this.instance_27.parent = this;
	this.instance_27.setTransform(22.5,67.5,1,1,0,0,0,22.5,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.breite_hoehe_klein_Ebene_1, null, null);


(lib.breite_hoehe_klein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.breite_hoehe_klein_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(450.1,225,1,1,0,0,0,450.1,225);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.breite_hoehe_klein, new cjs.Rectangle(-0.5,-0.5,901.1,451), null);


(lib.breite_hoehe_gross_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.Pixel_gross();
	this.instance.parent = this;
	this.instance.setTransform(584.95,45,1,1,90,0,0,45,45);

	this.instance_1 = new lib.Pixel_gross();
	this.instance_1.parent = this;
	this.instance_1.setTransform(674.95,45,1,1,90,0,0,45,45);

	this.instance_2 = new lib.Pixel_gross();
	this.instance_2.parent = this;
	this.instance_2.setTransform(764.95,45,1,1,90,0,0,45,45);

	this.instance_3 = new lib.Pixel_gross();
	this.instance_3.parent = this;
	this.instance_3.setTransform(854.9,45,1,1,90,0,0,45,45);

	this.instance_4 = new lib.Pixel_gross();
	this.instance_4.parent = this;
	this.instance_4.setTransform(135,45,1,1,90,0,0,45,45);

	this.instance_5 = new lib.Pixel_gross();
	this.instance_5.parent = this;
	this.instance_5.setTransform(225,45,1,1,90,0,0,45,45);

	this.instance_6 = new lib.Pixel_gross();
	this.instance_6.parent = this;
	this.instance_6.setTransform(315,45,1,1,90,0,0,45,45);

	this.instance_7 = new lib.Pixel_gross();
	this.instance_7.parent = this;
	this.instance_7.setTransform(404.95,45,1,1,90,0,0,45,45);

	this.instance_8 = new lib.Pixel_gross();
	this.instance_8.parent = this;
	this.instance_8.setTransform(494.95,45,1,1,90,0,0,45,45);

	this.instance_9 = new lib.Pixel_gross();
	this.instance_9.parent = this;
	this.instance_9.setTransform(45,404.95,1,1,0,0,0,45,45);

	this.instance_10 = new lib.Pixel_gross();
	this.instance_10.parent = this;
	this.instance_10.setTransform(45,314.95,1,1,0,0,0,45,45);

	this.instance_11 = new lib.Pixel_gross();
	this.instance_11.parent = this;
	this.instance_11.setTransform(45,224.95,1,1,0,0,0,45,45);

	this.instance_12 = new lib.Pixel_gross();
	this.instance_12.parent = this;
	this.instance_12.setTransform(45,135,1,1,0,0,0,45,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.breite_hoehe_gross_Ebene_1, null, null);


(lib.breite_hoehe_gross = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.breite_hoehe_gross_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(449.9,225,1,1,0,0,0,449.9,225);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.breite_hoehe_gross, new cjs.Rectangle(-0.5,-0.5,900.9,451), null);


(lib.Bild = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Bild_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(449.1,224.6,1,1,0,0,0,449.1,224.6);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bild, new cjs.Rectangle(-0.4,-0.4,899,450), null);


(lib.Szene_1_Text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text2
	this.instance = new lib.Element_text();
	this.instance.parent = this;
	this.instance.setTransform(562.7,509.8,1,1,0,0,0,93.4,38.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(331).to({_off:false},0).wait(1).to({alpha:0.0556},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.2778},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.3889},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.6111},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7222},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:0.9444},0).wait(1).to({alpha:1},0).wait(48).to({alpha:0.9375},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.8125},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.6875},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4375},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.3125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1875},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.0625},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.Szene_1_Text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text1
	this.instance = new lib.Pixel();
	this.instance.parent = this;
	this.instance.setTransform(424,435.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Picture_text();
	this.instance_1.parent = this;
	this.instance_1.setTransform(409,462.3,1,1,0,0,0,92.8,42.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Rechnung_gross();
	this.instance_2.parent = this;
	this.instance_2.setTransform(480,620.4,1,1,0,0,0,214.4,58.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Rechnung_klein();
	this.instance_3.parent = this;
	this.instance_3.setTransform(480,620.4,1,1,0,0,0,214.4,58.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(195).to({_off:false},0).wait(1).to({regX:56,regY:37.6,x:480,y:473,alpha:0.1111},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:1},0).wait(1).to({regX:0,regY:0,x:424,y:435.4},0).wait(80).to({regX:56,regY:37.6,x:480,y:473,alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(659));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(309).to({_off:false},0).wait(1).to({alpha:0.0833},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.9167},0).wait(1).to({alpha:1},0).wait(71).to({alpha:0.9375},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.8125},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.6875},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4375},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.3125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1875},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.0625},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(546));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(675).to({_off:false},0).wait(1).to({regY:58.2,y:620.5,alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(1).to({regY:58.1,y:620.4},0).wait(91).to({regY:58.2,y:620.5,alpha:0.9286},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.7857},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.6429},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.3571},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.2143},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.0714},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(165));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(867).to({_off:false},0).wait(1).to({regY:58.2,y:620.5,alpha:0.0385},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0.1154},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.1923},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.2692},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3462},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4231},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.5769},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6538},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7308},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8077},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.8846},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.9615},0).wait(1).to({alpha:1},0).wait(1).to({regY:58.1,y:620.4},0).wait(33).to({regY:58.2,y:620.5,alpha:0.963},0).wait(1).to({alpha:0.9259},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:0.8519},0).wait(1).to({alpha:0.8148},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.7407},0).wait(1).to({alpha:0.7037},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6296},0).wait(1).to({alpha:0.5926},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.5185},0).wait(1).to({alpha:0.4815},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.4074},0).wait(1).to({alpha:0.3704},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2963},0).wait(1).to({alpha:0.2593},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.1852},0).wait(1).to({alpha:0.1481},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0741},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Szene_1_Pixel_klein2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Pixel_klein2
	this.instance = new lib.breite_hoehe_klein();
	this.instance.parent = this;
	this.instance.setTransform(481.1,327.9,1,1,0,0,0,450.1,225);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(841).to({_off:false},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:1},0).wait(77).to({alpha:0.963},0).wait(1).to({alpha:0.9259},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:0.8519},0).wait(1).to({alpha:0.8148},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.7407},0).wait(1).to({alpha:0.7037},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6296},0).wait(1).to({alpha:0.5926},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.5185},0).wait(1).to({alpha:0.4815},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.4074},0).wait(1).to({alpha:0.3704},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2963},0).wait(1).to({alpha:0.2593},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.1852},0).wait(1).to({alpha:0.1481},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0741},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Szene_1_Pixel_klein1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Pixel_klein1
	this.instance = new lib.Pixel_klein();
	this.instance.parent = this;
	this.instance.setTransform(53.5,125.4,1,1,0,0,0,22.5,22.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(796).to({_off:false},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(123).to({alpha:0.963},0).wait(1).to({alpha:0.9259},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:0.8519},0).wait(1).to({alpha:0.8148},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.7407},0).wait(1).to({alpha:0.7037},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6296},0).wait(1).to({alpha:0.5926},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.5185},0).wait(1).to({alpha:0.4815},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.4074},0).wait(1).to({alpha:0.3704},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2963},0).wait(1).to({alpha:0.2593},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.1852},0).wait(1).to({alpha:0.1481},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0741},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Szene_1_Pixel_groß2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Pixel_groß2
	this.instance = new lib.breite_hoehe_gross();
	this.instance.parent = this;
	this.instance.setTransform(481.1,328,1,1,0,0,0,449.9,225);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(644).to({_off:false},0).wait(1).to({regX:450,x:481.2,alpha:0.0417},0).wait(1).to({alpha:0.0833},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.2083},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2917},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.4583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5417},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7083},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.7917},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.9167},0).wait(1).to({alpha:0.9583},0).wait(1).to({alpha:1},0).wait(1).to({regX:449.9,x:481.1},0).wait(258).to({regX:450,x:481.2,alpha:0.963},0).wait(1).to({alpha:0.9259},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:0.8519},0).wait(1).to({alpha:0.8148},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.7407},0).wait(1).to({alpha:0.7037},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6296},0).wait(1).to({alpha:0.5926},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.5185},0).wait(1).to({alpha:0.4815},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.4074},0).wait(1).to({alpha:0.3704},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2963},0).wait(1).to({alpha:0.2593},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.1852},0).wait(1).to({alpha:0.1481},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0741},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Szene_1_Pixel_groß1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Pixel_groß1
	this.instance = new lib.Pixel_gross();
	this.instance.parent = this;
	this.instance.setTransform(480,360,1,1,0,0,0,45,45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(195).to({_off:false},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:1},0).wait(321).to({x:472.2,y:355.9},0).wait(1).to({x:464.45,y:351.8},0).wait(1).to({x:456.65,y:347.75},0).wait(1).to({x:448.9,y:343.65},0).wait(1).to({x:441.15,y:339.6},0).wait(1).to({x:433.35,y:335.5},0).wait(1).to({x:425.6,y:331.45},0).wait(1).to({x:417.8,y:327.35},0).wait(1).to({x:410.05,y:323.25},0).wait(1).to({x:402.3,y:319.2},0).wait(1).to({x:394.5,y:315.1},0).wait(1).to({x:386.75,y:311.05},0).wait(1).to({x:379,y:306.95},0).wait(1).to({x:371.2,y:302.9},0).wait(1).to({x:363.45,y:298.8},0).wait(1).to({x:355.65,y:294.75},0).wait(1).to({x:347.9,y:290.65},0).wait(1).to({x:340.15,y:286.55},0).wait(1).to({x:332.35,y:282.5},0).wait(1).to({x:324.6,y:278.4},0).wait(1).to({x:316.8,y:274.35},0).wait(1).to({x:309.05,y:270.25},0).wait(1).to({x:301.3,y:266.2},0).wait(1).to({x:293.5,y:262.1},0).wait(1).to({x:285.75,y:258.05},0).wait(1).to({x:278,y:253.95},0).wait(1).to({x:270.2,y:249.85},0).wait(1).to({x:262.45,y:245.8},0).wait(1).to({x:254.65,y:241.7},0).wait(1).to({x:246.9,y:237.65},0).wait(1).to({x:239.15,y:233.55},0).wait(1).to({x:231.35,y:229.5},0).wait(1).to({x:223.6,y:225.4},0).wait(1).to({x:215.8,y:221.35},0).wait(1).to({x:208.05,y:217.25},0).wait(1).to({x:200.3,y:213.15},0).wait(1).to({x:192.5,y:209.1},0).wait(1).to({x:184.75,y:205},0).wait(1).to({x:177,y:200.95},0).wait(1).to({x:169.2,y:196.85},0).wait(1).to({x:161.45,y:192.8},0).wait(1).to({x:153.65,y:188.7},0).wait(1).to({x:145.9,y:184.65},0).wait(1).to({x:138.15,y:180.55},0).wait(1).to({x:130.35,y:176.45},0).wait(1).to({x:122.6,y:172.4},0).wait(1).to({x:114.8,y:168.3},0).wait(1).to({x:107.05,y:164.25},0).wait(1).to({x:99.3,y:160.15},0).wait(1).to({x:91.5,y:156.1},0).wait(1).to({x:83.75,y:152},0).wait(1).to({x:76,y:147.95},0).wait(351).to({alpha:0.963},0).wait(1).to({alpha:0.9259},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:0.8519},0).wait(1).to({alpha:0.8148},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.7407},0).wait(1).to({alpha:0.7037},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6296},0).wait(1).to({alpha:0.5926},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.5185},0).wait(1).to({alpha:0.4815},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.4074},0).wait(1).to({alpha:0.3704},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2963},0).wait(1).to({alpha:0.2593},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.1852},0).wait(1).to({alpha:0.1481},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0741},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Szene_1_Bild = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bild
	this.instance = new lib.Bild();
	this.instance.parent = this;
	this.instance.setTransform(480,327.45,1,1,0,0,0,449,224.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(472).to({_off:false},0).wait(1).to({alpha:0.0833},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.9167},0).wait(1).to({alpha:1},0).wait(1).to({regY:224.6,scaleX:1.0022,scaleY:1.0022,x:481,y:328},0).wait(441).to({regX:450.7,x:481.05},0).wait(1).to({regX:449,regY:224.5,x:479.3,y:327.85,alpha:0.963},0).wait(1).to({alpha:0.9259},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:0.8519},0).wait(1).to({alpha:0.8148},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.7407},0).wait(1).to({alpha:0.7037},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6296},0).wait(1).to({alpha:0.5926},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.5185},0).wait(1).to({alpha:0.4815},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.4074},0).wait(1).to({alpha:0.3704},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2963},0).wait(1).to({alpha:0.2593},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.1852},0).wait(1).to({alpha:0.1481},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0741},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Robot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow_obj_
	this.shadow = new lib.Robot_shadow();
	this.shadow.name = "shadow";
	this.shadow.parent = this;
	this.shadow.setTransform(-112.9,125.5,1,1,0,0,0,-112.9,125.5);
	this.shadow.depth = 0;
	this.shadow.isAttachedToCamera = 0
	this.shadow.isAttachedToMask = 0
	this.shadow.layerDepth = 0
	this.shadow.layerIndex = 0
	this.shadow.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.shadow).wait(1));

	// head_obj_
	this.head = new lib.Robot_head();
	this.head.name = "head";
	this.head.parent = this;
	this.head.setTransform(-0.1,-274,1,1,0,0,0,-0.1,-274);
	this.head.depth = 0;
	this.head.isAttachedToCamera = 0
	this.head.isAttachedToMask = 0
	this.head.layerDepth = 0
	this.head.layerIndex = 1
	this.head.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.head).wait(1));

	// Symbol_2_obj_
	this.Symbol_2 = new lib.Robot_Symbol_2();
	this.Symbol_2.name = "Symbol_2";
	this.Symbol_2.parent = this;
	this.Symbol_2.setTransform(122.7,-118,1,1,0,0,0,122.7,-118);
	this.Symbol_2.depth = 0;
	this.Symbol_2.isAttachedToCamera = 0
	this.Symbol_2.isAttachedToMask = 0
	this.Symbol_2.layerDepth = 0
	this.Symbol_2.layerIndex = 2
	this.Symbol_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Symbol_2).wait(1));

	// elbowRight_obj_
	this.elbowRight = new lib.Robot_elbowRight();
	this.elbowRight.name = "elbowRight";
	this.elbowRight.parent = this;
	this.elbowRight.setTransform(122.8,-14.5,1,1,0,0,0,122.8,-14.5);
	this.elbowRight.depth = 0;
	this.elbowRight.isAttachedToCamera = 0
	this.elbowRight.isAttachedToMask = 0
	this.elbowRight.layerDepth = 0
	this.elbowRight.layerIndex = 3
	this.elbowRight.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.elbowRight).wait(1));

	// handRight_obj_
	this.handRight = new lib.Robot_handRight();
	this.handRight.name = "handRight";
	this.handRight.parent = this;
	this.handRight.setTransform(127.5,120.9,1,1,0,0,0,127.5,120.9);
	this.handRight.depth = 0;
	this.handRight.isAttachedToCamera = 0
	this.handRight.isAttachedToMask = 0
	this.handRight.layerDepth = 0
	this.handRight.layerIndex = 4
	this.handRight.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.handRight).wait(1));

	// armRight_obj_
	this.armRight = new lib.Robot_armRight();
	this.armRight.name = "armRight";
	this.armRight.parent = this;
	this.armRight.setTransform(123.5,-63.6,1,1,0,0,0,123.5,-63.6);
	this.armRight.depth = 0;
	this.armRight.isAttachedToCamera = 0
	this.armRight.isAttachedToMask = 0
	this.armRight.layerDepth = 0
	this.armRight.layerIndex = 5
	this.armRight.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.armRight).wait(1));

	// forearmRight_obj_
	this.forearmRight = new lib.Robot_forearmRight();
	this.forearmRight.name = "forearmRight";
	this.forearmRight.parent = this;
	this.forearmRight.setTransform(122.8,44.9,1,1,0,0,0,122.8,44.9);
	this.forearmRight.depth = 0;
	this.forearmRight.isAttachedToCamera = 0
	this.forearmRight.isAttachedToMask = 0
	this.forearmRight.layerDepth = 0
	this.forearmRight.layerIndex = 6
	this.forearmRight.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.forearmRight).wait(1));

	// armLeft_obj_
	this.armLeft = new lib.Robot_armLeft();
	this.armLeft.name = "armLeft";
	this.armLeft.parent = this;
	this.armLeft.setTransform(-123.9,3.9,1,1,0,0,0,-123.9,3.9);
	this.armLeft.depth = 0;
	this.armLeft.isAttachedToCamera = 0
	this.armLeft.isAttachedToMask = 0
	this.armLeft.layerDepth = 0
	this.armLeft.layerIndex = 7
	this.armLeft.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.armLeft).wait(1));

	// body_obj_
	this.body = new lib.Robot_body();
	this.body.name = "body";
	this.body.parent = this;
	this.body.setTransform(-0.1,-0.4,1,1,0,0,0,-0.1,-0.4);
	this.body.depth = 0;
	this.body.isAttachedToCamera = 0
	this.body.isAttachedToMask = 0
	this.body.layerDepth = 0
	this.body.layerIndex = 8
	this.body.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.body).wait(1));

}).prototype = getMCSymbolPrototype(lib.Robot, new cjs.Rectangle(-146.9,-406.5,297.6,557.2), null);


(lib.Robot_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.Robot();
	this.instance.parent = this;
	this.instance.setTransform(227.7,392.8,1,1,0,0,0,1,-13.7);

	this.instance_1 = new lib.Robot();
	this.instance_1.parent = this;
	this.instance_1.setTransform(227.7,392.8,1,1,0,0,0,1,-13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Robot_Ebene_1, null, null);


(lib.Robot_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Robot_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(188.7,308.3,1,1,0,0,0,188.7,308.3);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Robot_1, new cjs.Rectangle(0,0,377.4,557.2), null);


(lib.Szene_1_Roboter_fade_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Roboter_fade_in
	this.instance = new lib.Robot_1();
	this.instance.parent = this;
	this.instance.setTransform(483.75,390,1,1,0,0,0,188.6,308.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:228.6,regY:278.6,scaleX:1.0898,scaleY:1.0898,x:523.7,y:348.85},0).wait(1).to({scaleX:1.1795,scaleY:1.1795,x:523.75,y:337.45},0).wait(1).to({scaleX:1.2693,scaleY:1.2693,y:326.05},0).wait(1).to({scaleX:1.3591,scaleY:1.3591,y:314.7},0).wait(1).to({scaleX:1.4488,scaleY:1.4488,y:303.25},0).wait(1).to({scaleX:1.5386,scaleY:1.5386,y:291.85},0).wait(1).to({scaleX:1.6284,scaleY:1.6283,y:280.4},0).wait(1).to({scaleX:1.7181,scaleY:1.7181,y:269},0).wait(1).to({scaleX:1.8079,scaleY:1.8079,x:523.8,y:257.55},0).wait(1).to({scaleX:1.8976,scaleY:1.8976,x:523.75,y:246.2},0).wait(1).to({scaleX:1.9874,scaleY:1.9874,y:234.75},0).wait(1).to({scaleX:2.0772,scaleY:2.0772,x:523.8,y:223.35},0).wait(1).to({scaleX:2.1669,scaleY:2.1669,y:211.9},0).wait(1).to({scaleX:2.2567,scaleY:2.2567,y:200.5},0).wait(1).to({scaleX:2.3465,scaleY:2.3465,x:523.85,y:189.1},0).wait(1).to({scaleX:2.4362,scaleY:2.4362,y:177.7},0).wait(1).to({scaleX:2.526,scaleY:2.526,y:166.3},0).wait(1).to({scaleX:2.6158,scaleY:2.6157,y:154.85},0).wait(1).to({scaleX:2.7055,scaleY:2.7055,x:523.9,y:143.45},0).wait(1).to({scaleX:2.7953,scaleY:2.7953,x:523.85,y:132},0).wait(1).to({scaleX:2.8851,scaleY:2.885,y:120.6},0).wait(1).to({scaleX:2.9748,scaleY:2.9748,x:523.9,y:109.2},0).wait(1).to({scaleX:3.0646,scaleY:3.0646,x:523.85,y:97.8},0).wait(1).to({scaleX:3.1543,scaleY:3.1543,x:523.9,y:86.35},0).wait(1).to({scaleX:3.2441,scaleY:3.2441,y:74.95},0).wait(1).to({scaleX:3.3339,scaleY:3.3338,y:63.5},0).wait(1).to({scaleX:3.4236,scaleY:3.4236,y:52.1},0).wait(1).to({scaleX:3.5134,scaleY:3.5134,y:40.65},0).wait(1).to({scaleX:3.6032,scaleY:3.6031,x:523.95,y:29.3},0).wait(1).to({scaleX:3.6929,scaleY:3.6929,x:523.9,y:17.9},0).wait(1).to({scaleX:3.7827,scaleY:3.7827,y:6.45},0).wait(1).to({scaleX:3.8725,scaleY:3.8724,x:523.95,y:-4.95},0).wait(1).to({scaleX:3.9622,scaleY:3.9622,x:523.9,y:-16.4},0).wait(1).to({scaleX:4.052,scaleY:4.052,x:523.95,y:-27.8},0).wait(1).to({scaleX:4.1418,scaleY:4.1417,y:-39.2},0).wait(1).to({scaleX:4.2315,scaleY:4.2315,x:523.9,y:-50.6},0).wait(1).to({scaleX:4.3213,scaleY:4.3212,x:523.95,y:-62.05},0).wait(1).to({scaleX:4.411,scaleY:4.411,y:-73.45},0).wait(1).to({scaleX:4.5008,scaleY:4.5008,x:524,y:-84.9},0).wait(1).to({scaleX:4.5906,scaleY:4.5905,x:523.95,y:-96.3},0).wait(1).to({scaleX:4.6803,scaleY:4.6803,y:-107.7},0).wait(1).to({scaleX:4.7701,scaleY:4.7701,x:524,y:-119.1},0).wait(1).to({scaleX:4.8599,scaleY:4.8598,x:523.95,y:-130.55},0).wait(1).to({scaleX:4.9496,scaleY:4.9496,x:524,y:-141.95},0).wait(1).to({scaleX:5.0394,scaleY:5.0394,y:-153.35},0).wait(1).to({scaleX:5.1292,scaleY:5.1291,x:523.95,y:-164.8},0).wait(1).to({scaleX:5.2189,scaleY:5.2189,x:524,y:-176.15},0).wait(1).to({scaleX:5.3087,scaleY:5.3086,y:-187.6},0).wait(1).to({scaleX:5.3985,scaleY:5.3984,y:-199},0).wait(1).to({scaleX:5.4882,scaleY:5.4882,y:-210.45},0).wait(1).to({scaleX:5.578,scaleY:5.5779,y:-221.85},0).wait(1).to({scaleX:5.6678,scaleY:5.6677,x:524.05,y:-233.3},0).wait(1).to({scaleX:5.7575,scaleY:5.7575,x:524,y:-244.65},0).wait(1).to({scaleX:5.8473,scaleY:5.8472,x:524.05,y:-256.1},0).wait(1).to({scaleX:5.937,scaleY:5.937,y:-267.5},0).wait(1).to({scaleX:6.0268,scaleY:6.0268,y:-278.95},0).wait(1).to({scaleX:6.1166,scaleY:6.1165,y:-290.35},0).wait(1).to({scaleX:6.2063,scaleY:6.2063,y:-301.8},0).wait(1).to({scaleX:6.2961,scaleY:6.296,y:-313.15},0).wait(1).to({scaleX:6.3859,scaleY:6.3858,y:-324.55},0).wait(1).to({scaleX:6.4756,scaleY:6.4756,x:524.1,y:-336},0).wait(1).to({scaleX:6.5654,scaleY:6.5653,x:524.05,y:-347.4},0).wait(1).to({scaleX:6.6552,scaleY:6.6551,y:-358.85},0).wait(1).to({scaleX:6.7449,scaleY:6.7449,x:524.1,y:-370.25},0).wait(1).to({scaleX:6.8347,scaleY:6.8346,y:-381.7},0).wait(1).to({scaleX:6.9245,scaleY:6.9244,y:-393.05},0).wait(1).to({scaleX:7.0142,scaleY:7.0142,y:-404.5},0).wait(1).to({scaleX:7.104,scaleY:7.1039,y:-415.9},0).wait(1).to({scaleX:7.1937,scaleY:7.1937,y:-427.35},0).wait(1).to({scaleX:7.2835,scaleY:7.2834,y:-438.75},0).wait(1).to({scaleX:7.3733,scaleY:7.3732,x:524.15,y:-450.2},0).wait(1).to({scaleX:7.463,scaleY:7.463,x:524.1,y:-461.55},0).wait(1).to({scaleX:7.5528,scaleY:7.5527,y:-473},0).wait(1).to({scaleX:7.6426,scaleY:7.6425,x:524.15,y:-484.4},0).wait(1).to({scaleX:7.7323,scaleY:7.7323,x:524.1,y:-495.8},0).wait(1).to({scaleX:7.8221,scaleY:7.822,x:524.15,y:-507.25},0).wait(1).to({scaleX:7.9119,scaleY:7.9118,y:-518.65},0).wait(1).to({scaleX:8.0016,scaleY:8.0015,y:-530.05},0).wait(1).to({scaleX:8.0914,scaleY:8.0913,y:-541.45},0).wait(1).to({scaleX:8.1812,scaleY:8.1811,y:-552.9},0).wait(1).to({scaleX:8.2709,scaleY:8.2708,x:524.2,y:-564.3},0).to({_off:true},1).wait(905));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib._0501_Einleitung = function(mode,startPosition,loop) {
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
	this.frame_2 = function() {
		playSound("Kapitel5_01_EinleitungwavKopie");
	}
	this.frame_986 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(984).call(this.frame_986).wait(1));

	// Bild_obj_
	this.Bild = new lib.Szene_1_Bild();
	this.Bild.name = "Bild";
	this.Bild.parent = this;
	this.Bild.depth = 0;
	this.Bild.isAttachedToCamera = 0
	this.Bild.isAttachedToMask = 0
	this.Bild.layerDepth = 0
	this.Bild.layerIndex = 0
	this.Bild.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Bild).wait(473).to({regX:480.2,regY:327.9,x:480.2,y:327.9},0).wait(12).to({regX:0,regY:0,x:0,y:0},0).wait(442).to({regX:480.2,regY:327.9,x:480.2,y:327.9},0).wait(26).to({_off:true},1).wait(33));

	// Pixel_klein1_obj_
	this.Pixel_klein1 = new lib.Szene_1_Pixel_klein1();
	this.Pixel_klein1.name = "Pixel_klein1";
	this.Pixel_klein1.parent = this;
	this.Pixel_klein1.depth = 0;
	this.Pixel_klein1.isAttachedToCamera = 0
	this.Pixel_klein1.isAttachedToMask = 0
	this.Pixel_klein1.layerDepth = 0
	this.Pixel_klein1.layerIndex = 1
	this.Pixel_klein1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Pixel_klein1).wait(797).to({regX:53.5,regY:125.4,x:53.5,y:125.4},0).wait(8).to({regX:0,regY:0,x:0,y:0},0).wait(122).to({regX:53.5,regY:125.4,x:53.5,y:125.4},0).wait(26).to({_off:true},1).wait(33));

	// Pixel_klein2_obj_
	this.Pixel_klein2 = new lib.Szene_1_Pixel_klein2();
	this.Pixel_klein2.name = "Pixel_klein2";
	this.Pixel_klein2.parent = this;
	this.Pixel_klein2.depth = 0;
	this.Pixel_klein2.isAttachedToCamera = 0
	this.Pixel_klein2.isAttachedToMask = 0
	this.Pixel_klein2.layerDepth = 0
	this.Pixel_klein2.layerIndex = 2
	this.Pixel_klein2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Pixel_klein2).wait(842).to({regX:481.1,regY:327.9,x:481.1,y:327.9},0).wait(9).to({regX:0,regY:0,x:0,y:0},0).wait(76).to({regX:481.1,regY:327.9,x:481.1,y:327.9},0).wait(26).to({_off:true},1).wait(33));

	// Pixel_groß1_obj_
	this.Pixel_groß1 = new lib.Szene_1_Pixel_groß1();
	this.Pixel_groß1.name = "Pixel_groß1";
	this.Pixel_groß1.parent = this;
	this.Pixel_groß1.depth = 0;
	this.Pixel_groß1.isAttachedToCamera = 0
	this.Pixel_groß1.isAttachedToMask = 0
	this.Pixel_groß1.layerDepth = 0
	this.Pixel_groß1.layerIndex = 3
	this.Pixel_groß1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Pixel_groß1).wait(196).to({regX:278,regY:254,x:278,y:254},0).wait(9).to({regX:0,regY:0,x:0,y:0},0).wait(320).to({regX:278,regY:254,x:278,y:254},0).wait(52).to({regX:0,regY:0,x:0,y:0},0).wait(350).to({regX:278,regY:254,x:278,y:254},0).wait(26).to({_off:true},1).wait(33));

	// Pixel_groß2_obj_
	this.Pixel_groß2 = new lib.Szene_1_Pixel_groß2();
	this.Pixel_groß2.name = "Pixel_groß2";
	this.Pixel_groß2.parent = this;
	this.Pixel_groß2.depth = 0;
	this.Pixel_groß2.isAttachedToCamera = 0
	this.Pixel_groß2.isAttachedToMask = 0
	this.Pixel_groß2.layerDepth = 0
	this.Pixel_groß2.layerIndex = 4
	this.Pixel_groß2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Pixel_groß2).wait(645).to({regX:481.2,regY:328,x:481.2,y:328},0).wait(24).to({regX:0,regY:0,x:0,y:0},0).wait(258).to({regX:481.2,regY:328,x:481.2,y:328},0).wait(26).to({_off:true},1).wait(33));

	// Text1_obj_
	this.Text1 = new lib.Szene_1_Text1();
	this.Text1.name = "Text1";
	this.Text1.parent = this;
	this.Text1.depth = 0;
	this.Text1.isAttachedToCamera = 0
	this.Text1.isAttachedToMask = 0
	this.Text1.layerDepth = 0
	this.Text1.layerIndex = 5
	this.Text1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Text1).wait(196).to({regX:480,regY:549.4,x:480,y:549.4},0).wait(9).to({regX:0,regY:0,x:0,y:0},0).wait(80).to({regX:480,regY:549.4,x:480,y:549.4},0).wait(10).to({regX:0,regY:0,x:0,y:0},0).wait(15).to({regX:480,regY:549.4,x:480,y:549.4},0).wait(12).to({regX:0,regY:0,x:0,y:0},0).wait(70).to({regX:480,regY:549.4,x:480,y:549.4},0).wait(16).to({regX:0,regY:0,x:0,y:0},0).wait(268).to({regX:480,regY:549.4,x:480,y:549.4},0).wait(8).to({regX:0,regY:0,x:0,y:0},0).wait(91).to({regX:480,regY:549.4,x:480,y:549.4},0).wait(14).to({regX:0,regY:0,x:0,y:0},0).wait(79).to({regX:480,regY:549.4,x:480,y:549.4},0).wait(26).to({regX:0,regY:0,x:0,y:0},0).wait(33).to({regX:480,regY:549.4,x:480,y:549.4},0).wait(26).to({_off:true},1).wait(33));

	// Text2_obj_
	this.Text2 = new lib.Szene_1_Text2();
	this.Text2.name = "Text2";
	this.Text2.parent = this;
	this.Text2.depth = 0;
	this.Text2.isAttachedToCamera = 0
	this.Text2.isAttachedToMask = 0
	this.Text2.layerDepth = 0
	this.Text2.layerIndex = 6
	this.Text2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Text2).wait(332).to({regX:562.7,regY:509.8,x:562.7,y:509.8},0).wait(18).to({regX:0,regY:0,x:0,y:0},0).wait(47).to({regX:562.7,regY:509.8,x:562.7,y:509.8},0).wait(16).to({regX:0,regY:0,x:0,y:0},0).to({_off:true},2).wait(572));

	// Roboter_fade_in_obj_
	this.Roboter_fade_in = new lib.Szene_1_Roboter_fade_in();
	this.Roboter_fade_in.name = "Roboter_fade_in";
	this.Roboter_fade_in.parent = this;
	this.Roboter_fade_in.setTransform(483.9,389.9,1,1,0,0,0,483.9,389.9);
	this.Roboter_fade_in.depth = 0;
	this.Roboter_fade_in.isAttachedToCamera = 0
	this.Roboter_fade_in.isAttachedToMask = 0
	this.Roboter_fade_in.layerDepth = 0
	this.Roboter_fade_in.layerIndex = 7
	this.Roboter_fade_in.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Roboter_fade_in).wait(1).to({regX:524.1,regY:-564.5,x:524.1,y:-564.5},0).wait(81).to({regX:483.9,regY:389.9,x:483.9,y:389.9},0).wait(905));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226.5,-2508.5,1981.4,4248.1);
// library properties:
lib.properties = {
	id: '3B2BA9B0F0F5E7498E197D92DA16C658',
	width: 960,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/0501_Einleitung_atlas_.png?1547565644098", id:"0501_Einleitung_atlas_"},
		{src:"sounds/Kapitel5_01_EinleitungwavKopie.mp3?1547565644376", id:"Kapitel5_01_EinleitungwavKopie"}
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
an.compositions['3B2BA9B0F0F5E7498E197D92DA16C658'] = {
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