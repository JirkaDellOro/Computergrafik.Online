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


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
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



(lib.backgroundNumber = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AmyPeQjIAAAAjIIAA4rQAAiKBfgrQApgSA5gBIN0AAQBIACAtAcQBLAvAAB7IAAYrQAADIjIAAg");
	this.shape.setTransform(63.525,98.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.backgroundNumber, new cjs.Rectangle(0,0,127.1,198), null);


(lib.backgroundNumber_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AmyPeQjIAAAAjIIAA4rQAAiKBfgrQApgSA5gBIN0AAQBIACAtAcQBLAvAAB7IAAYrQAADIjIAAg");
	this.shape_1.setTransform(63.525,98.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.backgroundNumber_1, new cjs.Rectangle(0,0,127.1,198), null);


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



(lib.hexa16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16));

	// numbers
	this.text = new cjs.Text("0", "150px 'Digital-7'", "#81D0FC");
	this.text.textAlign = "center";
	this.text.lineHeight = 138;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.95,33.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#81D0FC").s().p("AjZHrQg2gOgPg2IBtgpIFwAAIApBtgAkeApIAbgcIBSBSIAAEEIhtApgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAivl9IhtgoQAOg4A2gNIGXAAIgpBtg");
	this.shape.setTransform(53.95,93.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAjZHrQg2gOgPg2IBtgpIFHAAIApBtgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAivl9IhtgoQAOg4A2gNIGXAAIgpBtg");
	this.shape_1.setTransform(53.95,93.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAkegoIAAmLIBtApIAAEsIhSBSg");
	this.shape_2.setTransform(53.95,93.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAjZHrQg2gOgPg2IBtgpIFHAAIApBtgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gAkegoIAAliIBtApIAAEDIhSBSgAivl9IhtgoQAOg4A2gNIHAAAIgpBtg");
	this.shape_3.setTransform(53.95,93.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAjZHrQg2gOgPg2IBtgpIFHAAIApBtgAkeApIAbgcIBSBSIAAEEIhtApgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gAkegoIAAliIBtApIAAEDIhSBSgAivl9IhtgoQAOg4A2gNIHAAAIgpBtg");
	this.shape_4.setTransform(53.95,93.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAkegoIAAliIBtApIAAEDIhSBSgAivl9IhtgoQAOg4A2gNIGXAAIgpBtg");
	this.shape_5.setTransform(53.95,93.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAjZHrQg2gOgPg2IBtgpIFHAAIApBtgAkeApIAbgcIBSBSIAAEEIhtApgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAkegoIAAliIBtApIAAEDIhSBSgAivl9IhtgoQAOg4A2gNIGXAAIgpBtg");
	this.shape_6.setTransform(53.95,93.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAjZHrQg2gOgPg2IBtgpIFHAAIApBtgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAkegoIAAliIBtApIAAEDIhSBSgAivl9IhtgoQAOg4A2gNIGXAAIgpBtg");
	this.shape_7.setTransform(53.95,93.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAkeGnIAAl+IAbgcIBSBSIAAEfIgoBtQg2gOgPg2gAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAkegoIAAliIBtApIAAEDIhSBSgAivl9IhtgoQAOg4A2gNIGXAAIgpBtg");
	this.shape_8.setTransform(53.95,93.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#81D0FC").s().p("AkeHrIAAhEIBtgpIFFAAIA3A3Ig3A2gACxF+IAAkfIBThSIAbAcIAAE6IhFBEgAkeApIAbgcIBSBSIAAEEIhtApgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gACxheIAAkfIApgoIBFBEIAAE5IgbAcgAkegoIAAliIBtApIAAEDIhSBSgAixl9IhtgoIAAhFIG0AAIA3A3Ig3A2g");
	this.shape_9.setTransform(53.95,93.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#81D0FC").s().p("Ai+HrQg2gOgOg2IBtgpIFvAAIApBtgAkCApIAbgcIBSBSIAAEEIhtApgAkCgoIAAliIBtApIAAEDIhSBSgAiUl9IhtgoQAOg4A2gNIHAAAIgpBtg");
	this.shape_10.setTransform(53.975,93.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#81D0FC").s().p("AkeHrIAAhEIBtgpIFFAAIA3A3Ig3A2gACxF+IAAkfIBThSIAbAcIAAE6IhFBEgAkeApIAbgcIBSBSIAAEEIhtApgACxheIAAkfIApgoIBFBEIAAE5IgbAcgAkegoIAAliIBtApIAAEDIhSBSgAixl9IhtgoIAAhFIG0AAIA3A3Ig3A2g");
	this.shape_11.setTransform(53.95,93.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#81D0FC").s().p("Ai+HrQg2gOgOg2IBtgpIFvAAIApBtgAkCApIAbgcIBSBSIAAEEIhtApgAiVA3Ig2g2IA2g3IFhAAIA3A3Ig3A2gAkCgoIAAliIBtApIAAEDIhSBSgAiUl9IhtgoQAOg4A2gNIHAAAIgpBtg");
	this.shape_12.setTransform(53.975,93.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#81D0FC").s().p("AkCGnIAAl+IAbgcIBSBSIAAEfIgpBtQg2gOgOg2gAiVA3Ig2g2IA2g3IFhAAIA3A3Ig3A2gAkCgoIAAliIBtApIAAEDIhSBSgAiUl9IhtgoQAOg4A2gNIHAAAIgpBtg");
	this.shape_13.setTransform(53.975,93.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{text:"0"}}]}).to({state:[{t:this.text,p:{text:"1"}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

	// number_id
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhggsIAegfIAYAXQgGgWADgPQAEgOAKgKIAFgEIAgAhQgLAGgIAIQgHAHgCAJQgCAJADAOIB2B3IgeAeg");
	this.shape_14.setTransform(82.25,-67.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_15.setTransform(73.2727,-56.4189);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AA2CMQgjgHghghIhNhOQglgkgJgjQgJgjAegeQAbgbAcABQAdAAAbAaIAEADIgeAeQgSgRgOgDQgOgCgOAOQgaAaAwAxIAjAiQgDgMAFgMQAFgNALgLQAagbAcAFQAdAGAgAgQAhAhAHAiQAHAigeAeQgWAWgbAAIgNgBgAgBABQgIAIgCALQgDAMADAKIAhAjQAUATASAFQASAGANgNQAPgPgGgRQgGgSgTgTQgRgRgMgIQgLgJgMgBIgCAAQgLAAgLALg");
	this.shape_16.setTransform(57.0633,-46.8642);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhSg7IgNAVIgSAbIgXgWQAagsgEgcIAXgYIDkDlIgeAeg");
	this.shape_17.setTransform(44.2,-34.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(16));

	// background
	this.instance = new lib.backgroundNumber();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,343.5);


(lib.hexa1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(33));

	// numbers
	this.text = new cjs.Text("0", "150px 'Digital-7'", "#81D0FC");
	this.text.textAlign = "center";
	this.text.lineHeight = 138;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.95,33.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#81D0FC").s().p("AjZHrQg2gOgPg2IBtgpIFwAAIApBtgAkeApIAbgcIBSBSIAAEEIhtApgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAivl9IhtgoQAOg4A2gNIGXAAIgpBtg");
	this.shape.setTransform(53.95,93.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAjZHrQg2gOgPg2IBtgpIFHAAIApBtgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAivl9IhtgoQAOg4A2gNIGXAAIgpBtg");
	this.shape_1.setTransform(53.95,93.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAkegoIAAmLIBtApIAAEsIhSBSg");
	this.shape_2.setTransform(53.95,93.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAjZHrQg2gOgPg2IBtgpIFHAAIApBtgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gAkegoIAAliIBtApIAAEDIhSBSgAivl9IhtgoQAOg4A2gNIHAAAIgpBtg");
	this.shape_3.setTransform(53.95,93.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAjZHrQg2gOgPg2IBtgpIFHAAIApBtgAkeApIAbgcIBSBSIAAEEIhtApgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gAkegoIAAliIBtApIAAEDIhSBSgAivl9IhtgoQAOg4A2gNIHAAAIgpBtg");
	this.shape_4.setTransform(53.95,93.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAkegoIAAliIBtApIAAEDIhSBSgAivl9IhtgoQAOg4A2gNIGXAAIgpBtg");
	this.shape_5.setTransform(53.95,93.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAjZHrQg2gOgPg2IBtgpIFHAAIApBtgAkeApIAbgcIBSBSIAAEEIhtApgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAkegoIAAliIBtApIAAEDIhSBSgAivl9IhtgoQAOg4A2gNIGXAAIgpBtg");
	this.shape_6.setTransform(53.95,93.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAjZHrQg2gOgPg2IBtgpIFHAAIApBtgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAkegoIAAliIBtApIAAEDIhSBSgAivl9IhtgoQAOg4A2gNIGXAAIgpBtg");
	this.shape_7.setTransform(53.95,93.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAkeGnIAAl+IAbgcIBSBSIAAEfIgoBtQg2gOgPg2gAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAkegoIAAliIBtApIAAEDIhSBSgAivl9IhtgoQAOg4A2gNIGXAAIgpBtg");
	this.shape_8.setTransform(53.95,93.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#81D0FC").s().p("AkeHrIAAhEIBtgpIFFAAIA3A3Ig3A2gACxF+IAAkfIBThSIAbAcIAAE6IhFBEgAkeApIAbgcIBSBSIAAEEIhtApgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gACxheIAAkfIApgoIBFBEIAAE5IgbAcgAkegoIAAliIBtApIAAEDIhSBSgAixl9IhtgoIAAhFIG0AAIA3A3Ig3A2g");
	this.shape_9.setTransform(53.95,93.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#81D0FC").s().p("Ai+HrQg2gOgOg2IBtgpIFvAAIApBtgAkCApIAbgcIBSBSIAAEEIhtApgAkCgoIAAliIBtApIAAEDIhSBSgAiUl9IhtgoQAOg4A2gNIHAAAIgpBtg");
	this.shape_10.setTransform(53.975,93.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#81D0FC").s().p("AkeHrIAAhEIBtgpIFFAAIA3A3Ig3A2gACxF+IAAkfIBThSIAbAcIAAE6IhFBEgAkeApIAbgcIBSBSIAAEEIhtApgACxheIAAkfIApgoIBFBEIAAE5IgbAcgAkegoIAAliIBtApIAAEDIhSBSgAixl9IhtgoIAAhFIG0AAIA3A3Ig3A2g");
	this.shape_11.setTransform(53.95,93.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#81D0FC").s().p("Ai+HrQg2gOgOg2IBtgpIFvAAIApBtgAkCApIAbgcIBSBSIAAEEIhtApgAiVA3Ig2g2IA2g3IFhAAIA3A3Ig3A2gAkCgoIAAliIBtApIAAEDIhSBSgAiUl9IhtgoQAOg4A2gNIHAAAIgpBtg");
	this.shape_12.setTransform(53.975,93.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#81D0FC").s().p("AkCGnIAAl+IAbgcIBSBSIAAEfIgpBtQg2gOgOg2gAiVA3Ig2g2IA2g3IFhAAIA3A3Ig3A2gAkCgoIAAliIBtApIAAEDIhSBSgAiUl9IhtgoQAOg4A2gNIHAAAIgpBtg");
	this.shape_13.setTransform(53.975,93.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAjZHrQg2gOgPg2IBtgpIFHAAIApBtgAkeApIAbgcIBSBSIAAEEIhtApgACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAkegoIAAliIBtApIAAEDIhSBSgAivl9IhtgoQAOg4A2gNIGXAAIgpBtg");
	this.shape_14.setTransform(53.95,93.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{text:"0"}}]}).to({state:[{t:this.text,p:{text:"1"}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.text,p:{text:"0"}}]},1).to({state:[{t:this.text,p:{text:"1"}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

	// number_id
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhggsIAegfIAYAXQgGgWAEgPQACgOAKgKIAGgEIAgAhQgLAGgIAIQgHAHgDAJQgBAJACAOIB3B3IgfAeg");
	this.shape_15.setTransform(68.05,-53.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_16.setTransform(59.0227,-42.1689);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhSg7IgNAVIgSAbIgXgWQAagsgEgcIAXgYIDkDlIgeAeg");
	this.shape_17.setTransform(44.2,-34.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).to({state:[]},16).to({state:[]},1).wait(16));

	// background
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_18.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(3).to({_off:true},1).wait(29));

	// Layer_2
	this.instance = new lib.backgroundNumber();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,343.5);


(lib.binary128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// numbers
	this.text = new cjs.Text("0", "150px 'Digital-7'", "#81D0FC");
	this.text.textAlign = "center";
	this.text.lineHeight = 138;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.95,33.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"1"},0).wait(1));

	// number_id
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhggsIAfgfIAWAXQgEgWACgPQADgOALgKIAFgEIAgAhQgLAGgIAIQgHAHgCAJQgCAJADAOIB2B3IgeAeg");
	this.shape.setTransform(95.65,-80.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_1.setTransform(86.6727,-69.8189);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA4COQgfgEgfggQgWgWgGgVQgGgUAGgWQgqAJgjgiQgcgcgCgcQgCgdAbgbQAbgbAdACQAcACAcAcQASATAFASQAGATgEAVQAXgFAUAGQAUAFAWAWQAgAfAEAfQAEAegeAeQgaAbgbAAIgHgBgAAIAIQgNAPAFASQAEASASASQAUAUASAGQARAFAPgQQAQgPgFgRQgGgSgUgUQgSgSgSgEIgJgCQgNAAgLAKgAhdhdQgMAMADAPQAEAQAPAPQARARAQAFQARAGANgNQAWgYglgmQgQgQgPgEIgGgBQgLAAgKAKg");
	this.shape_2.setTransform(70.4225,-59.9584);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAYCIIggiUIgCgOQgGgagGgPQgGgPgPgOQgQgRgPgDQgOgDgMAMQgbAbAqAqIAIAHIgfAfIgIgIQgggggEgfQgEgeAegeQAbgbAdACQAeABAcAcQANAOAIAOQAHAOADANIAJAkIAbCFIBJhJIAZAaIhsBsg");
	this.shape_3.setTransform(57.8261,-44.9039);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhSg7IgNAVIgSAbIgXgWQAagsgEgcIAXgYIDkDlIgeAeg");
	this.shape_4.setTransform(44.2,-34.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// background
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_5.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(2));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,343.5);


(lib.binary64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// numbers
	this.text = new cjs.Text("0", "150px 'Digital-7'", "#81D0FC");
	this.text.textAlign = "center";
	this.text.lineHeight = 138;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.95,33.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"1"},0).wait(1));

	// number_id
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhggsIAfgfIAWAXQgEgWACgPQADgOALgKIAFgEIAhAhQgMAGgIAIQgHAHgCAJQgDAJAEAOIB2B3IgeAeg");
	this.shape.setTransform(84.75,-70.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_1.setTransform(75.7227,-58.8689);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag3BkIhMjDIAjgjICMCMIAagZIAbAZIgaAaIA9A+IgcAcIg+g9IhBBCgAgVBMIAlgmIhohng");
	this.shape_2.setTransform(61.675,-51.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA2CMQgjgHghghIhNhOQglgkgJgjQgJgjAegeQAbgbAcABQAdAAAbAaIAEADIgeAeQgSgRgOgDQgOgCgOAOQgaAaAwAxIAjAiQgDgMAFgMQAFgNALgLQAagbAcAFQAdAGAgAgQAhAhAHAiQAHAigeAeQgWAWgbAAIgNgBgAgBABQgIAIgCALQgDAMADAKIAhAjQAUATASAFQASAGANgNQAPgPgGgRQgGgSgTgTQgRgRgMgIQgLgJgMgBIgCAAQgLAAgLALg");
	this.shape_3.setTransform(45.9133,-35.7142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// background
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_4.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,343.5);


(lib.binary32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// numbers
	this.text = new cjs.Text("0", "150px 'Digital-7'", "#81D0FC");
	this.text.textAlign = "center";
	this.text.lineHeight = 138;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.95,33.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"1"},0).wait(1));

	// number_id
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhggsIAfgfIAWAXQgEgWACgPQADgOALgKIAFgEIAhAhQgMAGgIAIQgHAHgCAJQgDAJAEAOIB2B3IgeAeg");
	this.shape.setTransform(83.85,-69.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_1.setTransform(74.8727,-58.0189);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAYCIIggiUIgCgOQgGgagGgPQgGgPgPgOQgQgRgPgDQgOgDgMAMQgbAbAqAqIAIAHIgfAfIgIgIQgggggEgfQgEgeAegeQAbgbAdACQAeABAcAcQANAOAIAOQAHAOADANIAJAkIAbCFIBJhJIAZAaIhsBsg");
	this.shape_2.setTransform(60.1261,-47.2039);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA8CPQgdgBgcgcIgHgIIAdgeIAFAFQASARAPAEQAPAEAPgOQAPgPgGgRQgFgQgVgVQgTgTgSgEQgSgDgRAOIgEAEIgdgdIAEgEQAPgRgBgPQgBgPgSgSQgRgRgOgDQgOgDgPAPQgPAOAEAPQAEAPASATIAEAEIgeAdIgHgGQgcgcgCgeQAAgdAbgcQAcgcAeACQAeABAbAcQAUAUADAVQAFAWgLAUQAUgLAYAGQAXAGAXAXQAgAfAEAgQAEAfgdAdQgbAagdAAIgCAAg");
	this.shape_3.setTransform(45.2988,-35.0271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// background
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_4.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,343.5);


(lib.binary16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// numbers
	this.text = new cjs.Text("0", "150px 'Digital-7'", "#81D0FC");
	this.text.textAlign = "center";
	this.text.lineHeight = 138;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.95,33.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"1"},0).wait(1));

	// number_id
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhggsIAegfIAYAXQgGgWADgPQAEgOAKgKIAFgEIAgAhQgLAGgIAIQgHAHgCAJQgCAJADAOIB2B3IgeAeg");
	this.shape.setTransform(82.25,-67.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_1.setTransform(73.2727,-56.4189);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA2CMQgjgHghghIhNhOQglgkgJgjQgJgjAegeQAbgbAcABQAdAAAbAaIAEADIgeAeQgSgRgOgDQgOgCgOAOQgaAaAwAxIAjAiQgDgMAFgMQAFgNALgLQAagbAcAFQAdAGAgAgQAhAhAHAiQAHAigeAeQgWAWgbAAIgNgBgAgBABQgIAIgCALQgDAMADAKIAhAjQAUATASAFQASAGANgNQAPgPgGgRQgGgSgTgTQgRgRgMgIQgLgJgMgBIgCAAQgLAAgLALg");
	this.shape_2.setTransform(57.0633,-46.8642);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhSg7IgNAVIgSAbIgXgWQAagsgEgcIAXgYIDkDlIgeAeg");
	this.shape_3.setTransform(44.2,-34.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// background
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_4.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,343.5);


(lib.binary8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// numbers
	this.text = new cjs.Text("0", "150px 'Digital-7'", "#81D0FC");
	this.text.textAlign = "center";
	this.text.lineHeight = 138;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.95,33.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"1"},0).wait(1));

	// number_id
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhggsIAegfIAYAXQgGgWADgPQAEgOAKgKIAFgEIAgAhQgLAGgIAIQgHAHgCAJQgCAJADAOIB2B3IgeAeg");
	this.shape.setTransform(71,-56.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_1.setTransform(61.9727,-45.1189);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA4COQgfgEgfggQgWgWgGgVQgGgUAGgWQgqAJgjgiQgcgcgCgcQgCgdAbgbQAbgbAdACQAcACAcAcQASATAFASQAGATgEAVQAXgFAUAGQAUAFAWAWQAgAfAEAfQAEAegeAeQgaAbgbAAIgHgBgAAIAIQgNAPAFASQAEASASASQAUAUASAGQARAFAPgQQAQgPgFgRQgGgSgUgUQgSgSgSgEIgJgCQgNAAgLAKgAhdhdQgMAMADAPQAEAQAPAPQARARAQAFQARAGANgNQAWgYglgmQgQgQgPgEIgGgBQgLAAgKAKg");
	this.shape_2.setTransform(45.7225,-35.2584);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// background
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_3.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(2));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,343.5);


(lib.binary4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// numbers
	this.text = new cjs.Text("0", "150px 'Digital-7'", "#81D0FC");
	this.text.textAlign = "center";
	this.text.lineHeight = 138;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.95,33.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"1"},0).wait(1));

	// number_id
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhggsIAfgfIAXAXQgGgWADgPQAEgOAKgKIAFgEIAgAhQgLAGgIAIQgHAHgCAJQgCAJADAOIB2B3IgeAeg");
	this.shape.setTransform(70.55,-55.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_1.setTransform(61.5227,-44.6689);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag3BkIhMjDIAjgjICMCMIAagZIAbAZIgaAaIA9A+IgcAcIg+g9IhBBCgAgVBMIAlgmIhohng");
	this.shape_2.setTransform(47.475,-37.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// background
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_3.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(2));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,343.5);


(lib.binary2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// numbers
	this.text = new cjs.Text("0", "150px 'Digital-7'", "#81D0FC");
	this.text.textAlign = "center";
	this.text.lineHeight = 138;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.95,33.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"1"},0).wait(1));

	// number_id
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhggsIAegfIAYAXQgGgWAEgPQACgOAKgKIAGgEIAgAhQgLAGgIAIQgHAHgDAJQgBAJACAOIB3B3IgfAeg");
	this.shape.setTransform(70.4,-55.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_1.setTransform(61.3727,-44.5189);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAYCIIggiUIgCgOQgGgagGgPQgGgPgPgOQgQgRgPgDQgOgDgMAMQgbAbAqAqIAIAHIgfAfIgIgIQgggggEgfQgEgeAegeQAbgbAdACQAeABAcAcQANAOAIAOQAHAOADANIAJAkIAbCFIBJhJIAZAaIhsBsg");
	this.shape_2.setTransform(46.6761,-33.7539);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// background
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_3.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(2));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,343.5);


(lib.binary1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// numbers
	this.text = new cjs.Text("0", "150px 'Digital-7'", "#81D0FC");
	this.text.textAlign = "center";
	this.text.lineHeight = 138;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.95,33.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAjZHrQg2gOgPg2IBtgpIFHAAIApBtgAkeApIAbgcIBSBSIAAEEIhtApgACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAkegoIAAliIBtApIAAEDIhSBSgAivl9IhtgoQAOg4A2gNIGXAAIgpBtg");
	this.shape.setTransform(53.95,93.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#81D0FC").s().p("Ag1F+IAAkfIBRhSIAaAcIAAF+QgNA2g2AOgAg1heIAAkfIAohtQA2ANANA4IAAF9IgaAcg");
	this.shape_1.setTransform(53.95,93.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{text:"0"}}]}).to({state:[{t:this.text,p:{text:"1"}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// number_id
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhggsIAegfIAYAXQgGgWAEgPQACgOAKgKIAGgEIAgAhQgLAGgIAIQgHAHgDAJQgBAJACAOIB3B3IgfAeg");
	this.shape_2.setTransform(68.05,-53.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_3.setTransform(59.0227,-42.1689);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhSg7IgNAVIgSAbIgXgWQAagsgEgcIAXgYIDkDlIgeAeg");
	this.shape_4.setTransform(44.2,-34.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[]},2).wait(2));

	// background
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_5.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(4));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,343.5);


(lib._100er = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// numbers
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAjZHrQg2gOgPg2IBtgpIFHAAIApBtgAkeApIAbgcIBSBSIAAEEIhtApgACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAkegoIAAliIBtApIAAEDIhSBSgAivl9IhtgoQAOg4A2gNIGXAAIgpBtg");
	this.shape.setTransform(53.95,93.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#81D0FC").s().p("Ag1F+IAAkfIBRhSIAaAcIAAF+QgNA2g2AOgAg1heIAAkfIAohtQA2ANANA4IAAF9IgaAcg");
	this.shape_1.setTransform(53.95,93.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#81D0FC").s().p("AjZHrQg2gOgPg2IBtgpIFwAAIApBtgAkeApIAbgcIBSBSIAAEEIhtApgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAivl9IhtgoQAOg4A2gNIGXAAIgpBtg");
	this.shape_2.setTransform(53.95,93.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAjZHrQg2gOgPg2IBtgpIFHAAIApBtgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAivl9IhtgoQAOg4A2gNIGXAAIgpBtg");
	this.shape_3.setTransform(53.95,93.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAkegoIAAmLIBtApIAAEsIhSBSg");
	this.shape_4.setTransform(53.95,93.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAjZHrQg2gOgPg2IBtgpIFHAAIApBtgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gAkegoIAAliIBtApIAAEDIhSBSgAivl9IhtgoQAOg4A2gNIHAAAIgpBtg");
	this.shape_5.setTransform(53.95,93.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAjZHrQg2gOgPg2IBtgpIFHAAIApBtgAkeApIAbgcIBSBSIAAEEIhtApgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gAkegoIAAliIBtApIAAEDIhSBSgAivl9IhtgoQAOg4A2gNIHAAAIgpBtg");
	this.shape_6.setTransform(53.95,93.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAkegoIAAliIBtApIAAEDIhSBSgAivl9IhtgoQAOg4A2gNIGXAAIgpBtg");
	this.shape_7.setTransform(53.95,93.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAjZHrQg2gOgPg2IBtgpIFHAAIApBtgAkeApIAbgcIBSBSIAAEEIhtApgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAkegoIAAliIBtApIAAEDIhSBSgAivl9IhtgoQAOg4A2gNIGXAAIgpBtg");
	this.shape_8.setTransform(53.95,93.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#81D0FC").s().p("ACxF+IAAkfIBThSIAbAcIAAF+QgOA2g3AOgAjZHrQg2gOgPg2IBtgpIFHAAIApBtgAixA3Ig2g2IA2g3IFiAAIA3A3Ig3A2gACxheIAAkfIAphtQA3ANAOA4IAAF9IgbAcgAkegoIAAliIBtApIAAEDIhSBSgAivl9IhtgoQAOg4A2gNIGXAAIgpBtg");
	this.shape_9.setTransform(53.95,93.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// number_id
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhggsIAfgfIAWAXQgEgWACgPQAEgOAJgKIAGgEIAhAhQgMAGgIAIQgHAHgDAJQgCAJAEAOIB2B3IgfAeg");
	this.shape_10.setTransform(97.25,-82.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_11.setTransform(88.2227,-71.3689);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AA4CNQgggEgegfIhjhjQgfgegEggQgEggAcgcQAdgdAgAEQAgAEAeAfIBjBjQAfAeAEAhQAEAggcAcQgZAZgcAAIgIgBgAhbhbQgPAPAGARQAGARATAUIBiBiQArAqAagaQAagagqgrIhihiQgUgTgRgGIgJgCQgMAAgLALg");
	this.shape_12.setTransform(71.675,-61.3742);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AA4CNQgggEgegfIhjhjQgfgegEggQgEggAcgcQAdgdAgAEQAgAEAeAfIBjBjQAfAeAEAhQAEAggcAcQgZAZgcAAIgIgBgAhbhbQgPAPAGARQAGARATAUIBiBiQArAqAagaQAagagqgrIhihiQgUgTgRgGIgJgCQgMAAgLALg");
	this.shape_13.setTransform(57.075,-46.7742);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhSg7IgNAVIgSAbIgXgWQAagsgEgcIAXgYIDkDlIgeAeg");
	this.shape_14.setTransform(44.2,-34.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(10));

	// background
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_15.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(10));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,343.5);


(lib._10er = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// numbers
	this.text = new cjs.Text("0", "150px 'Digital-7'", "#81D0FC");
	this.text.textAlign = "center";
	this.text.lineHeight = 138;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.95,33.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"1"},0).wait(1).to({text:"2"},0).wait(1).to({text:"3"},0).wait(1).to({text:"4"},0).wait(1).to({text:"5"},0).wait(1).to({text:"6"},0).wait(1).to({text:"7"},0).wait(1).to({text:"8"},0).wait(1).to({text:"9"},0).wait(1));

	// number_id
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhggsIAegfIAXAXQgEgWADgPQACgOAKgKIAGgEIAhAhQgMAGgIAIQgHAHgDAJQgCAJADAOIB3B3IgfAeg");
	this.shape.setTransform(82.65,-67.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_1.setTransform(73.6227,-56.7689);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA4CNQgggEgegfIhjhjQgfgegEggQgEggAcgcQAdgdAgAEQAgAEAeAfIBjBjQAfAeAEAhQAEAggcAcQgZAZgcAAIgIgBgAhbhbQgPAPAGARQAGARATAUIBiBiQArAqAagaQAagagqgrIhihiQgUgTgRgGIgJgCQgMAAgLALg");
	this.shape_2.setTransform(57.075,-46.7742);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhSg7IgNAVIgSAbIgXgWQAagsgEgcIAXgYIDkDlIgeAeg");
	this.shape_3.setTransform(44.2,-34.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// background
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_4.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(10));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,343.5);


(lib._1er = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// numbers
	this.text = new cjs.Text("0", "150px 'Digital-7'", "#81D0FC");
	this.text.textAlign = "center";
	this.text.lineHeight = 138;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.95,33.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"1"},0).wait(1).to({text:"2"},0).wait(1).to({text:"3"},0).wait(1).to({text:"4"},0).wait(1).to({text:"5"},0).wait(1).to({text:"6"},0).wait(1).to({text:"7"},0).wait(1).to({text:"8"},0).wait(1).to({text:"9"},0).wait(1));

	// number_id
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhggsIAegfIAYAXQgGgWAEgPQACgOAKgKIAGgEIAgAhQgLAGgIAIQgHAHgDAJQgBAJACAOIB3B3IgfAeg");
	this.shape.setTransform(68.05,-53.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_1.setTransform(59.0227,-42.1689);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhSg7IgNAVIgSAbIgXgWQAagsgEgcIAXgYIDkDlIgeAeg");
	this.shape_2.setTransform(44.2,-34.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// background
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_3.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(10));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,343.5);


// stage content:
(lib.v0102zahlensystem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var valueDez100 = this.valueDez100;
			valueDez10 = this.valueDez10;
			valueDez1 = this.valueDez1;
			valueBin1 = this.valueBin1;
			valueBin2 = this.valueBin2;
			valueBin4 = this.valueBin4;
			valueBin8 = this.valueBin8;
			valueBin16 = this.valueBin16;
			valueBin32 = this.valueBin32;
			valueBin64 = this.valueBin64;
			valueBin128 = this.valueBin128;
			valueHex1 = this.valueHex1;
			valueHex16 = this.valueHex16;
			
		var input;
			hundreds = 0,
			tens = 0,
			ones = 0,
			resHundreds = 0,
			res = 0;
		
		
		var stringHash = {
			0: "0",
			1: "1",
		    2: "2",
		    3: "3",
		    4: "4",
		    5: "5",
		    6: "6",
		    7: "7",
		    8: "8",
		    9: "9",
		    a: "10",
			b: "11",
			c: "12",
			d: "13",
			e: "14",
			f: "15",
		};
		
		$('body').append('<div class="sliderContainer">')
		$('.sliderContainer').append('<input type="range" class="slider" id="slider" value="0" min="0" max="255">');
		$('.sliderContainer').append('<span id="slider_value">0</span>');
		
		
		$(document).on('input', '#slider', function() {
		    input = $('#slider_value').html( $(this).val() );
			calculateDez($(this).val());
			binarFunction($(this).val());
			setHexa();
		});
		
		
		function calculateDez(inputValue){
			
			resInput = inputValue.split("");
			if(resInput.length == 3)
			{
				setHundreds(resInput[0]);
				setTens(resInput[1]);
				setOnes(resInput[2]);
			}
			else if(resInput.length == 2)
			{
				setHundreds(0);
				setTens(resInput[0]);
				setOnes(resInput[1]);
			}
			else if(resInput.length == 1)
			{
				console.log("test");
				setHundreds(0);
				setTens(0);
				setOnes(resInput[0]);
			}
		}
		
		function binarFunction(getValue){
			
			binarValue = getValue;
			var resetValue = [0, 0, 0, 0, 0, 0, 0, 0];
			var inputValue = [];
			while (binarValue > 0)
			{
				inputValue.push(binarValue % 2);
				var divisionValue = Math.floor(binarValue / 2);
				binarValue = divisionValue;
			}
			
			for(var j = 0; j<resetValue.length; j++)
			{
					setBinar(j, resetValue[j]);
			}
			
			for(var i = 0; i < inputValue.length; i++)
			{
				setBinar(i, inputValue[i])
			}
		}
		
		
		//function setHundreds(inputHundreds)
		function setHundreds(getHundreds)
		{
			valueDez100.gotoAndStop(getHundreds);
		}
		
		function setTens(getTens)
		{
			valueDez10.gotoAndStop(getTens);
		}
		
		function setOnes(getOnes)
		{
			valueDez1.gotoAndStop(getOnes);
		}
		
		
		// function setBinar
		function setBinar(getValueBin, getValue)
		{
			if(getValueBin == 0 )
				valueBin1.gotoAndStop(getValue);
			else if(getValueBin == 1)
				valueBin2.gotoAndStop(getValue);
			else if(getValueBin == 2)
				valueBin4.gotoAndStop(getValue);
			else if(getValueBin == 3)
				valueBin8.gotoAndStop(getValue);
			else if(getValueBin == 4)
				valueBin16.gotoAndStop(getValue);
			else if(getValueBin == 5)
				valueBin32.gotoAndStop(getValue);
			else if(getValueBin == 6)
				valueBin64.gotoAndStop(getValue);
			else if(getValueBin == 7)
				valueBin128.gotoAndStop(getValue);
		}
		
		function setHexa()
		{
			var myNumber = Number(document.getElementById("slider").value).toString(16);
			resHexa = myNumber.split("");
			if(resHexa.length == 1)
			{
				valueHex1.gotoAndStop(stringHash[resHexa[0]]);
				valueHex16.gotoAndStop(0);
			}
			if(resHexa.length == 2)
			{
				valueHex1.gotoAndStop(stringHash[resHexa[1]]);
				valueHex16.gotoAndStop(stringHash[resHexa[0]]);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// binaryOne
	this.valueBin1 = new lib.binary1();
	this.valueBin1.name = "valueBin1";
	this.valueBin1.parent = this;
	this.valueBin1.setTransform(308.7,236.55,0.2248,0.2248,0,0,0,71.2,18.9);

	this.timeline.addTween(cjs.Tween.get(this.valueBin1).wait(1));

	// binaryTwo
	this.valueBin2 = new lib.binary2();
	this.valueBin2.name = "valueBin2";
	this.valueBin2.parent = this;
	this.valueBin2.setTransform(273.55,239.55,0.2248,0.2248,0,0,0,66.7,32);

	this.timeline.addTween(cjs.Tween.get(this.valueBin2).wait(1));

	// binaryFour
	this.valueBin4 = new lib.binary4();
	this.valueBin4.name = "valueBin4";
	this.valueBin4.parent = this;
	this.valueBin4.setTransform(239.5,239.55,0.2248,0.2248,0,0,0,66.7,32);

	this.timeline.addTween(cjs.Tween.get(this.valueBin4).wait(1));

	// binaryEight
	this.valueBin8 = new lib.binary8();
	this.valueBin8.name = "valueBin8";
	this.valueBin8.parent = this;
	this.valueBin8.setTransform(205.45,239.55,0.2248,0.2248,0,0,0,66.5,32.2);

	this.timeline.addTween(cjs.Tween.get(this.valueBin8).wait(1));

	// binarySixteen
	this.valueBin16 = new lib.binary16();
	this.valueBin16.name = "valueBin16";
	this.valueBin16.parent = this;
	this.valueBin16.setTransform(171.4,239.55,0.2248,0.2248,0,0,0,66.5,32.2);

	this.timeline.addTween(cjs.Tween.get(this.valueBin16).wait(1));

	// binaryThirtyThree
	this.valueBin32 = new lib.binary32();
	this.valueBin32.name = "valueBin32";
	this.valueBin32.parent = this;
	this.valueBin32.setTransform(137.4,239.55,0.2248,0.2248,0,0,0,66.7,32.2);

	this.timeline.addTween(cjs.Tween.get(this.valueBin32).wait(1));

	// binarySixteenfour
	this.valueBin64 = new lib.binary64();
	this.valueBin64.name = "valueBin64";
	this.valueBin64.parent = this;
	this.valueBin64.setTransform(103.35,239.55,0.2248,0.2248,0,0,0,66.7,32.2);

	this.timeline.addTween(cjs.Tween.get(this.valueBin64).wait(1));

	// binaryHndretTwentyEight
	this.valueBin128 = new lib.binary128();
	this.valueBin128.name = "valueBin128";
	this.valueBin128.parent = this;
	this.valueBin128.setTransform(69.35,239.55,0.2248,0.2248,0,0,0,66.7,32.2);

	this.timeline.addTween(cjs.Tween.get(this.valueBin128).wait(1));

	// 100er
	this.valueDez100 = new lib._100er();
	this.valueDez100.name = "valueDez100";
	this.valueDez100.parent = this;
	this.valueDez100.setTransform(150.8,97.35,0.2924,0.2926,0,0,0,70.5,35.4);

	this.timeline.addTween(cjs.Tween.get(this.valueDez100).wait(1));

	// 10er
	this.valueDez10 = new lib._10er();
	this.valueDez10.name = "valueDez10";
	this.valueDez10.parent = this;
	this.valueDez10.setTransform(195.2,97.35,0.2924,0.2926,0,0,0,69.8,35.4);

	this.timeline.addTween(cjs.Tween.get(this.valueDez10).wait(1));

	// 1er
	this.valueDez1 = new lib._1er();
	this.valueDez1.name = "valueDez1";
	this.valueDez1.parent = this;
	this.valueDez1.setTransform(241.3,93.35,0.2924,0.2926,0,0,0,74.9,21.7);

	this.timeline.addTween(cjs.Tween.get(this.valueDez1).wait(1));

	// hexa1
	this.valueHex1 = new lib.hexa1();
	this.valueHex1.name = "valueHex1";
	this.valueHex1.parent = this;
	this.valueHex1.setTransform(209.9,397.05,0.2926,0.2926,0,0,0,66.7,32.1);

	this.timeline.addTween(cjs.Tween.get(this.valueHex1).wait(1));

	// hexa16
	this.valueHex16 = new lib.hexa16();
	this.valueHex16.name = "valueHex16";
	this.valueHex16.parent = this;
	this.valueHex16.setTransform(165.05,397.05,0.2926,0.2926,0,0,0,66.8,32.1);

	this.timeline.addTween(cjs.Tween.get(this.valueHex16).wait(1));

	// TextInput
	this.input_value = new lib.an_TextInput({'id': 'input_value', 'value':'', 'disabled':false, 'visible':false, 'class':'ui-textinput'});

	this.input_value.setTransform(81.9,284.35,1.0141,1.0141,0,0,0,50.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.input_value).wait(1));

	// Hexadezimal- system
	this.text = new cjs.Text("Hexadezimalsystem", "50px 'Oswald'");
	this.text.textAlign = "center";
	this.text.lineHeight = 76;
	this.text.lineWidth = 716;
	this.text.parent = this;
	this.text.setTransform(190.5891,313.15,0.4686,0.4686);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Binär
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/sliderCss.css'});

	this.instance.setTransform(317.15,514.25,0.4686,0.4686,0,0,0,50.1,11.1);

	this.text_1 = new cjs.Text("Binärsystem", "50px 'Oswald'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 76;
	this.text_1.lineWidth = 714;
	this.text_1.parent = this;
	this.text_1.setTransform(192.0666,160.85,0.4686,0.4686);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.instance}]}).wait(1));

	// Dezimalsystem
	this.text_2 = new cjs.Text("Dezimalsystem", "50px 'Oswald'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 76;
	this.text_2.lineWidth = 716;
	this.text_2.parent = this;
	this.text_2.setTransform(191.5741,0.95,0.4686,0.4686);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#81D0FC").s().p("EgdeAkuMAAAhJbMA69AAAMAAABJbg");
	this.shape.setTransform(188.675,235);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(187.5,235,189.89999999999998,284.6);
// library properties:
lib.properties = {
	id: '566019D5866C490E8B41A4649C244AD4',
	width: 375,
	height: 470,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"},
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