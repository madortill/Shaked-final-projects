(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Path_11_1 = function() {
	this.initialize(img.Path_11_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,29);


(lib.Path_14_5 = function() {
	this.initialize(img.Path_14_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,12);


(lib.Path_23 = function() {
	this.initialize(img.Path_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,34);


(lib.Path_44 = function() {
	this.initialize(img.Path_44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,37);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnLL/IAA39IOXAAIAAX9g");
	mask.setTransform(87.4,101.925);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00C7D0").s().p("AggAhQgOgNAAgUQAAgSAOgOQAOgNASAAQATAAAOANQAOAOAAASQAAAUgOANQgOANgTAAQgSAAgOgNg");
	this.shape.setTransform(116.45,151.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004782").s().p("Am8F9ICjr5ILWAAIAAL5g");
	this.shape_1.setTransform(52.825,158.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00C7D0").s().p("Ai3C4QhMhMAAhsQAAhrBMhMQBMhMBrAAQBsAABMBMQBMBMAABrQAABshMBMQhMBMhsAAQhrAAhMhMg");
	this.shape_2.setTransform(97.325,106.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0060B7").s().p("AmHGIQiiiiAAjmQAAjkCiiiQCiijDlAAQDlAACjCjQCiCiAADkQAADmiiCiQijCijlAAQjlAAiiiig");
	this.shape_3.setTransform(55.425,55.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(41.4,25.3,82,153.29999999999998), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AicCmIAAlMIE5AAIAAFMg");
	mask.setTransform(15.675,16.65);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00C7D0").s().p("AhABBQgbgbAAgmQAAglAbgbQAbgbAlAAQAmAAAbAbQAbAbAAAlQAAAmgbAbQgbAbgmAAQglAAgbgbg");
	this.shape.setTransform(14.775,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004782").s().p("AigCiQhDhEAAheQAAheBDhCQBDhDBdAAQBeAABDBDQBDBCAABeQAABehDBEQhDBCheAAQhdAAhDhCg");
	this.shape_1.setTransform(24.875,39.45);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(2.1,7,29.299999999999997,26.299999999999997), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg6lAF1IAArpMB1LAAAIAALpg");
	mask.setTransform(789.95,39.1);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#001F65").p("Egh8gF7MBD5AL3");
	this.shape.setTransform(1360.675,38.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#001F65").p("A/Ol7MA+dAL3");
	this.shape_1.setTransform(1315,38.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#001F65").p("A8gl7MA5CAL3");
	this.shape_2.setTransform(1269.35,38.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#001F65").p("A5zl7MAznAL3");
	this.shape_3.setTransform(1223.65,38.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#001F65").p("A3Fl7MAuLAL3");
	this.shape_4.setTransform(1177.975,38.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#001F65").p("A0Yl7MAoxAL3");
	this.shape_5.setTransform(1132.275,38.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#001F65").p("Axql7MAjVAL3");
	this.shape_6.setTransform(1086.6,38.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#001F65").p("Au8l7Id5L3");
	this.shape_7.setTransform(1040.925,38.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#001F65").p("AsPl7IYfL3");
	this.shape_8.setTransform(995.25,38.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#001F65").p("Aphl7ITDL3");
	this.shape_9.setTransform(949.575,38.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#001F65").p("Amzl7INnL3");
	this.shape_10.setTransform(903.9,38.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#001F65").p("AkGl7IINL3");
	this.shape_11.setTransform(858.2,38.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#001F65").p("AhYl7ICxL3");
	this.shape_12.setTransform(812.525,38.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#001F65").p("ABZl7IixL3");
	this.shape_13.setTransform(765.475,38.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#001F65").p("AEHl7IoNL3");
	this.shape_14.setTransform(719.8,38.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#001F65").p("AG1l7ItpL3");
	this.shape_15.setTransform(674.125,38.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#001F65").p("AJil7IzDL3");
	this.shape_16.setTransform(628.425,38.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#001F65").p("AMQl7I4fL3");
	this.shape_17.setTransform(582.75,38.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#001F65").p("AO9l7I95L3");
	this.shape_18.setTransform(537.075,38.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#001F65").p("ARrl7MgjVAL3");
	this.shape_19.setTransform(491.425,38.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#001F65").p("AUZl7MgoxAL3");
	this.shape_20.setTransform(445.75,38.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#001F65").p("AXGl7MguLAL3");
	this.shape_21.setTransform(400.05,38.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#001F65").p("AZ0l7MgznAL3");
	this.shape_22.setTransform(354.375,38.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#001F65").p("Achl7Mg5BAL3");
	this.shape_23.setTransform(308.675,38.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#001F65").p("AfPl7Mg+dAL3");
	this.shape_24.setTransform(263.025,38.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#001F65").p("EAh9gF7MhD5AL3");
	this.shape_25.setTransform(217.35,38.45);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(415,1.8,750,74.60000000000001), null);


(lib.Rectangle_26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_26, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle_25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_25, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle_24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("Ai9ANIAAgZIF7AAIAAAZg");
	this.shape.setTransform(18.975,1.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_24, new cjs.Rectangle(0,0,38,2.5), null);


(lib.Rectangle_23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_23, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle_22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("Ai9AMIAAgXIF7AAIAAAXg");
	this.shape.setTransform(18.975,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_22, new cjs.Rectangle(0,0,38,2.5), null);


(lib.Rectangle_21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgnAQIAAgfIBPAAIAAAfg");
	this.shape.setTransform(4.025,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_21, new cjs.Rectangle(0,0,8.1,3.2), null);


(lib.Rectangle_20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgrAMIAAgXIBXAAIAAAXg");
	this.shape.setTransform(4.35,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_20, new cjs.Rectangle(0,0,8.7,2.5), null);


(lib.Rectangle_19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgrAMIAAgXIBXAAIAAAXg");
	this.shape.setTransform(4.35,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_19, new cjs.Rectangle(0,0,8.7,2.5), null);


(lib.Rectangle_18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgrAMIAAgXIBXAAIAAAXg");
	this.shape.setTransform(4.35,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_18, new cjs.Rectangle(0,0,8.7,2.5), null);


(lib.Rectangle_17_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgrAMIAAgXIBXAAIAAAXg");
	this.shape.setTransform(4.35,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_17_0, new cjs.Rectangle(0,0,8.7,2.5), null);


(lib.Rectangle_17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_17, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_16, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgnAQIAAgfIBPAAIAAAfg");
	this.shape.setTransform(4,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_15, new cjs.Rectangle(0,0,8,3.2), null);


(lib.Rectangle_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_14, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_13, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle_12_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgrANIAAgZIBXAAIAAAZg");
	this.shape.setTransform(4.35,1.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_12_2, new cjs.Rectangle(0,0,8.7,2.5), null);


(lib.Rectangle_12_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgrAMIAAgXIBXAAIAAAXg");
	this.shape.setTransform(4.35,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_12_1, new cjs.Rectangle(0,0,8.7,2.5), null);


(lib.Rectangle_12_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgrAMIAAgXIBXAAIAAAXg");
	this.shape.setTransform(4.35,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_12_0, new cjs.Rectangle(0,0,8.7,2.5), null);


(lib.Rectangle_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgrAMIAAgXIBXAAIAAAXg");
	this.shape.setTransform(4.35,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_12, new cjs.Rectangle(0,0,8.7,2.5), null);


(lib.Rectangle_11_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgrANIAAgZIBXAAIAAAZg");
	this.shape.setTransform(4.35,1.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_11_2, new cjs.Rectangle(0,0,8.7,2.5), null);


(lib.Rectangle_11_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgrAMIAAgXIBXAAIAAAXg");
	this.shape.setTransform(4.35,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_11_1, new cjs.Rectangle(0,0,8.7,2.5), null);


(lib.Rectangle_11_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgrAMIAAgXIBXAAIAAAXg");
	this.shape.setTransform(4.35,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_11_0, new cjs.Rectangle(0,0,8.7,2.5), null);


(lib.Rectangle_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgrAMIAAgXIBXAAIAAAXg");
	this.shape.setTransform(4.35,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_11, new cjs.Rectangle(0,0,8.7,2.5), null);


(lib.Rectangle_10_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al7A3IAAhuIL2AAIAABug");
	this.shape.setTransform(37.95,5.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_10_5, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_10_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al6A3IAAhtIL1AAIAABtg");
	this.shape.setTransform(37.925,5.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_10_4, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_10_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgqANIAAgZIBVAAIAAAZg");
	this.shape.setTransform(4.325,1.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_10_3, new cjs.Rectangle(0,0,8.7,2.5), null);


(lib.Rectangle_10_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al6A3IAAhuIL1AAIAABug");
	this.shape.setTransform(37.925,5.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_10_2, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_10_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgrAMIAAgXIBXAAIAAAXg");
	this.shape.setTransform(4.35,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_10_1, new cjs.Rectangle(0,0,8.7,2.5), null);


(lib.Rectangle_10_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgrAMIAAgXIBXAAIAAAXg");
	this.shape.setTransform(4.35,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_10_0, new cjs.Rectangle(0,0,8.7,2.5), null);


(lib.Rectangle_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgrAMIAAgXIBXAAIAAAXg");
	this.shape.setTransform(4.35,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_10, new cjs.Rectangle(0,0,8.7,2.5), null);


(lib.Rectangle_9_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgqANIAAgZIBVAAIAAAZg");
	this.shape.setTransform(4.325,1.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_9_2, new cjs.Rectangle(0,0,8.7,2.5), null);


(lib.Rectangle_9_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgqAMIAAgXIBVAAIAAAXg");
	this.shape.setTransform(4.325,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_9_1, new cjs.Rectangle(0,0,8.7,2.5), null);


(lib.Rectangle_9_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgrAMIAAgXIBXAAIAAAXg");
	this.shape.setTransform(4.35,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_9_0, new cjs.Rectangle(0,0,8.7,2.5), null);


(lib.Rectangle_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgrAMIAAgXIBXAAIAAAXg");
	this.shape.setTransform(4.35,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_9, new cjs.Rectangle(0,0,8.7,2.5), null);


(lib.Rectangle_8_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al6A3IAAhuIL1AAIAABug");
	this.shape.setTransform(37.925,5.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_8_5, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_8_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al7A3IAAhtIL2AAIAABtg");
	this.shape.setTransform(37.95,5.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_8_4, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_8_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al6A3IAAhuIL1AAIAABug");
	this.shape.setTransform(37.925,5.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_8_3, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_8_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al6A3IAAhtIL1AAIAABtg");
	this.shape.setTransform(37.925,5.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_8_2, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_8_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al7A3IAAhtIL2AAIAABtg");
	this.shape.setTransform(37.95,5.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_8_1, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_8_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al7A3IAAhtIL2AAIAABtg");
	this.shape.setTransform(37.95,5.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_8_0, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al7A3IAAhuIL2AAIAABug");
	this.shape.setTransform(37.95,5.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_8, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_7_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al6A3IAAhuIL1AAIAABug");
	this.shape.setTransform(37.925,5.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_7_6, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_7_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al6A3IAAhtIL1AAIAABtg");
	this.shape.setTransform(37.925,5.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_7_5, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_7_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al6A3IAAhtIL1AAIAABtg");
	this.shape.setTransform(37.925,5.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_7_4, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_7_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al6A3IAAhuIL1AAIAABug");
	this.shape.setTransform(37.925,5.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_7_3, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_7_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al6A3IAAhuIL1AAIAABug");
	this.shape.setTransform(37.925,5.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_7_2, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al7A3IAAhuIL2AAIAABug");
	this.shape.setTransform(37.95,5.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_7_1, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_7_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al7A3IAAhuIL2AAIAABug");
	this.shape.setTransform(37.95,5.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_7_0, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al7A3IAAhtIL2AAIAABtg");
	this.shape.setTransform(37.95,5.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_7, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al6A3IAAhuIL1AAIAABug");
	this.shape.setTransform(37.925,5.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_6_1, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_6_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al7A3IAAhuIL2AAIAABug");
	this.shape.setTransform(37.95,5.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_6_0, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgnAQIAAgfIBPAAIAAAfg");
	this.shape.setTransform(4,1.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_6, new cjs.Rectangle(0,0,8,3.3), null);


(lib.Rectangle_5_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AjUALIAAgVIGpAAIAAAVg");
	this.shape.setTransform(21.275,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_5_0, new cjs.Rectangle(0,0,42.6,2.2), null);


(lib.Rectangle_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_5, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al6A3IAAhuIL1AAIAABug");
	this.shape.setTransform(37.925,5.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_4_1, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_4_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#191019"],[0,1],0,0,0,0,0,28.3).s().p("Al7A3IAAhuIL2AAIAABug");
	this.shape.setTransform(37.95,5.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_4_0, new cjs.Rectangle(0,0,75.9,11.1), null);


(lib.Rectangle_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgnAQIAAgfIBPAAIAAAfg");
	this.shape.setTransform(4,1.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_4, new cjs.Rectangle(0,0,8,3.3), null);


(lib.Rectangle_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AjUALIAAgVIGpAAIAAAVg");
	this.shape.setTransform(21.3,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_3_1, new cjs.Rectangle(0,0,42.6,2.2), null);


(lib.Rectangle_3_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AjUALIAAgVIGpAAIAAAVg");
	this.shape.setTransform(21.275,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_3_0, new cjs.Rectangle(0,0,42.6,2.2), null);


(lib.Rectangle_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_3, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgnAQIAAgfIBPAAIAAAfg");
	this.shape.setTransform(4.025,1.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_2_1, new cjs.Rectangle(0,0,8.1,3.3), null);


(lib.Rectangle_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("Ah4ALIAAgVIDxAAIAAAVg");
	this.shape.setTransform(12.075,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_2_0, new cjs.Rectangle(0,0,24.2,2.2), null);


(lib.Rectangle_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_2, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle_1_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AjUALIAAgVIGpAAIAAAVg");
	this.shape.setTransform(21.3,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1_15, new cjs.Rectangle(0,0,42.6,2.2), null);


(lib.Rectangle_1_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1_14, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle_1_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1_13, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle_1_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1_12, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle_1_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgnAQIAAgfIBPAAIAAAfg");
	this.shape.setTransform(4.025,1.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1_11, new cjs.Rectangle(0,0,8.1,3.3), null);


(lib.Rectangle_1_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1_10, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle_1_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1_9, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle_1_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgnAQIAAgfIBPAAIAAAfg");
	this.shape.setTransform(4,1.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1_8, new cjs.Rectangle(0,0,8,3.3), null);


(lib.Rectangle_1_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1_7, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle_1_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1_6, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle_1_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgnAQIAAgfIBPAAIAAAfg");
	this.shape.setTransform(4,1.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1_5, new cjs.Rectangle(0,0,8,3.3), null);


(lib.Rectangle_1_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1_4, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgnAQIAAgfIBPAAIAAAfg");
	this.shape.setTransform(4,1.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1_3, new cjs.Rectangle(0,0,8,3.3), null);


(lib.Rectangle_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1_2, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1_1, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1_0, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgnAQIAAgfIBPAAIAAAfg");
	this.shape.setTransform(4,1.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1, new cjs.Rectangle(0,0,8,3.3), null);


(lib.Rectangle_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AghAWIAAgrIBDAAIAAArg");
	this.shape.setTransform(3.375,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_0, new cjs.Rectangle(0,0,6.8,4.3), null);


(lib.Rectangle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgnAQIAAgfIBPAAIAAAfg");
	this.shape.setTransform(4,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle, new cjs.Rectangle(0,0,8,3.2), null);


(lib.Path_51 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#A15135"],[0,1],0,67.3,0,-67.3).s().p("AzSKCIAs0bMAlqgAHIAOVBg");
	this.shape.setTransform(123.45,67.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_51, new cjs.Rectangle(0,0,246.9,134.6), null);


(lib.Path_50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7F4556","#612C73"],[0,1],-3.1,0,3.1,0).s().p("AgeA8IAHhfIAQgZIAmAAIgQB5g");
	this.shape.setTransform(3.125,6.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_50, new cjs.Rectangle(0,0,6.3,12.2), null);


(lib.Path_49 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7F4556","#612C73"],[0,1],-4.2,0,4.3,0).s().p("AgqBIIAIhtIAXgjIA1AAIgTCQg");
	this.shape.setTransform(4.25,7.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_49, new cjs.Rectangle(0,0,8.5,14.5), null);


(lib.Path_48 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E3C4EA","#7F4556"],[0,1],0,15.1,0,-15).s().p("Ak8CWIABkaIAZgSIJfASIgHEag");
	this.shape.setTransform(31.7,15.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_48, new cjs.Rectangle(0,0,63.4,30.1), null);


(lib.Path_47 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A45A2C","#000000"],[0,1],-17.7,0,17.8,0).s().p("AixAbQB+gFBvgaQA5gOAfgOIAdAAQg9AliIASQhEAJg4ABg");
	this.shape.setTransform(17.75,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_47, new cjs.Rectangle(0,0,35.5,6.6), null);


(lib.Path_46 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A45A2C","#000000"],[0,1],-17.7,0,17.8,0).s().p("AixAbQCDgDBugcQA3gOAdgOIAdAAQg9AliIASQhEAJg4ABg");
	this.shape.setTransform(17.75,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_46, new cjs.Rectangle(0,0,35.5,6.6), null);


(lib.Path_45 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#3D2C35"],[0,1],0,20.1,0,-20).s().p("AhLDJIgNiBIgbgEIAAAgIimAAIgZksIIyAFQAPACAIAMQAEAGAAAFIAYFzg");
	this.shape.setTransform(30.725,20.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_45, new cjs.Rectangle(0,0,61.5,40.2), null);


(lib.Path_43 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_44();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_43, new cjs.Rectangle(0,0,30,37), null);


(lib.Path_42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","#3DCAE5","#000000"],[0.643,0.706,0.871],0,0,0,0,0,6.2).s().p("AgqA7QgTgYAAgjQAAgiATgZQASgZAYAAQAaAAASAZQASAZAAAiQAAAjgSAYQgSAagaAAQgYAAgSgag");
	this.shape.setTransform(6.175,8.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_42, new cjs.Rectangle(0,0,12.4,16.9), null);


(lib.Path_41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.5).s().p("AgBAGQgFgEADgEQACgGADADQAEACgCAGQgBAEgDAAIgBgBg");
	this.shape.setTransform(0.4611,0.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_41, new cjs.Rectangle(0,0,1,1.4), null);


(lib.Path_40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.6).s().p("AgBAGQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQgCgFAEgCQADgDACAHQACAEgEADIgCABIgBgBg");
	this.shape.setTransform(0.4647,0.6653);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_40, new cjs.Rectangle(0,0,1,1.4), null);


(lib.Path_39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.6).s().p("AgBAGQgEgCACgGIACgDQABgBAAAAQAAAAAAAAQABAAAAAAQABABAAAAQAEADgCAFQgBAEgCAAIgCgBg");
	this.shape.setTransform(0.4776,0.6918);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_39, new cjs.Rectangle(0,0,1,1.4), null);


(lib.Path_38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.4).s().p("AgEACQgBgGAEgBQADgDACAGQACAFgFADIgBABQgCAAgCgFg");
	this.shape.setTransform(0.4686,0.6632);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_38, new cjs.Rectangle(0,0,1,1.4), null);


(lib.Path_37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.5).s().p("AgBAGQgEgDACgFIACgEQABAAAAAAQAAAAAAAAQAAAAABAAQAAABABAAQAEACgCAFQgBAFgDAAIgBgBg");
	this.shape.setTransform(0.4833,0.7024);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_37, new cjs.Rectangle(0,0,1,1.4), null);


(lib.Path_36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.6).s().p("AgEACQgBgGAEgBQADgDACAHQACAEgFADIgBABQgCAAgCgFg");
	this.shape.setTransform(0.4588,0.6653);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_36, new cjs.Rectangle(0,0,1,1.4), null);


(lib.Path_35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.6).s().p("AgBAGQgEgDACgFQACgGADADQAEADgCAFQgBAEgCAAIgCgBg");
	this.shape.setTransform(0.4776,0.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_35, new cjs.Rectangle(0,0,1,1.4), null);


(lib.Path_34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.5).s().p("AgBAGQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQgCgFAEgCQADgDACAHQACAFgEACIgCABIgBgBg");
	this.shape.setTransform(0.4853,0.6653);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_34, new cjs.Rectangle(0,0,1,1.4), null);


(lib.Path_33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.6).s().p("AgDAFQgCgFACgEQADgEAEAEQACAEgCAFQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape.setTransform(0.45,0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_33, new cjs.Rectangle(0,0,1,1.4), null);


(lib.Path_32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.7).s().p("AgEAAQAAgGAEAAQAFAAAAAGQAAAHgFAAQgEAAAAgHg");
	this.shape.setTransform(0.475,0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_32, new cjs.Rectangle(0,0,1,1.4), null);


(lib.Path_31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.5).s().p("AgDAEQgCgEACgEQADgFAEAFQACAEgCAEQgBABAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAgBgBgBg");
	this.shape.setTransform(0.45,0.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_31, new cjs.Rectangle(0,-0.1,0.9,1.5), null);


(lib.Path_30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQABgGADAAQAEAAAAAGQAAAHgEAAQgDAAgBgHg");
	this.shape.setTransform(0.45,0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_30, new cjs.Rectangle(0,0,0.9,1.4), null);


(lib.Path_29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.5).s().p("AgCAFQgEgFAEgEQACgEADAEQAEAEgEAFQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape.setTransform(0.475,0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_29, new cjs.Rectangle(0,0,1,1.4), null);


(lib.Path_28_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgrB7IgEjOIj9AAIAADOIgwAAIAAj1IK5AAIAAD1g");
	this.shape.setTransform(34.875,12.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_28_1, new cjs.Rectangle(0,0,69.8,24.6), null);


(lib.Path_28_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgsB7IgDjOIj9AAIAADOIgwAAIAAj1IK5AAIAAD1g");
	this.shape.setTransform(34.875,12.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_28_0, new cjs.Rectangle(0,0,69.8,24.6), null);


(lib.Path_28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgsB7IgDjOIj9AAIAADOIgwAAIAAj1IK5AAIAAD1g");
	this.shape.setTransform(34.875,12.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_28, new cjs.Rectangle(0,0,69.8,24.6), null);


(lib.Path_27_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A13053").s().p("ABNgIQA4gJAYgHIgDAVIk2AcQCHgQBigRg");
	this.shape.setTransform(19.675,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_27_0, new cjs.Rectangle(4,0,31.4,5), null);


(lib.Path_27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.7).s().p("AgEAAQABgGADAAQAEAAAAAGQAAAHgEAAQgDAAgBgHg");
	this.shape.setTransform(0.45,0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_27, new cjs.Rectangle(0,0,0.9,1.4), null);


(lib.Path_26_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A13053").s().p("AgLAAIiNgLIgZgLIFiAEIh1Apg");
	this.shape.setTransform(17.75,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_26_0, new cjs.Rectangle(0,0,35.5,4.6), null);


(lib.Path_26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.6).s().p("AgCAFQgEgFAEgEQACgEADAEQAEAEgEAFQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape.setTransform(0.475,0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_26, new cjs.Rectangle(0,0,1,1.4), null);


(lib.Path_25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgGAEAAQAFAAAAAGQAAAHgFAAQgEAAAAgHg");
	this.shape.setTransform(0.475,0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25, new cjs.Rectangle(0,0,1,1.4), null);


(lib.Path_24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#3D2C35"],[0,1],0,-15.3,0,15.4).s().p("AklCaIAYkVQABgGAEgFQAHgMAPgDIIYgEIgZDPIg1AAIAIgtIiUAQIgNCBg");
	this.shape.setTransform(29.4,15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24, new cjs.Rectangle(0,0,58.8,30.8), null);


(lib.Path_22_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape.setTransform(2.025,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22_3, new cjs.Rectangle(0,0,4.1,2), null);


(lib.Path_22_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape.setTransform(2,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22_2, new cjs.Rectangle(0,0,4,2), null);


(lib.Path_22_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAJIAAgSIAnAAIAAASg");
	this.shape.setTransform(2.025,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22_1, new cjs.Rectangle(0,0,4.1,1.9), null);


(lib.Path_22_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgsB7IgDjOIj9AAIAADOIgwAAIAAj1IK5AAIAAD1g");
	this.shape.setTransform(34.875,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22_0, new cjs.Rectangle(0,0,69.8,24.6), null);


(lib.Path_22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgsB7IgDjOIj9AAIAADOIgwAAIAAj1IK5AAIAAD1g");
	this.shape.setTransform(34.875,12.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22, new cjs.Rectangle(0,0,69.8,24.6), null);


(lib.Path_21_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape.setTransform(2.025,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21_2, new cjs.Rectangle(0,0,4.1,2), null);


(lib.Path_21_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape.setTransform(2,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21_1, new cjs.Rectangle(0,0,4,2), null);


(lib.Path_21_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgrB7IgEjOIj9AAIAADOIgwAAIAAj1IK5AAIAAD1g");
	this.shape.setTransform(34.875,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21_0, new cjs.Rectangle(0,0,69.8,24.6), null);


(lib.Path_21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape.setTransform(2.025,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(0,0,4.1,2), null);


(lib.Path_20_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgrB7IgEjOIj9AAIAADOIgwAAIAAj1IK5AAIAAD1g");
	this.shape.setTransform(34.875,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20_3, new cjs.Rectangle(0,0,69.8,24.6), null);


(lib.Path_20_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgrB7IgEjOIj9AAIAADOIgwAAIAAj1IK5AAIAAD1g");
	this.shape.setTransform(34.875,12.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20_2, new cjs.Rectangle(0,0,69.8,24.6), null);


(lib.Path_20_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgsB7IgDjOIj9AAIAADOIgwAAIAAj1IK5AAIAAD1g");
	this.shape.setTransform(34.875,12.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20_1, new cjs.Rectangle(0,0,69.8,24.6), null);


(lib.Path_20_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgsB7IgDjOIj9AAIAADOIgwAAIAAj1IK5AAIAAD1g");
	this.shape.setTransform(34.875,12.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20_0, new cjs.Rectangle(0,0,69.8,24.6), null);


(lib.Path_20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgsB7IgDjOIj9AAIAADOIgwAAIAAj1IK5AAIAAD1g");
	this.shape.setTransform(34.875,12.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0,0,69.8,24.6), null);


(lib.Path_19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_23();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,0,20,34), null);


(lib.Path_18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#B8AE59","#716B37","#605B2F","#2C2A16","#0C0C06","#000000"],[0,0.569,0.62,0.796,0.929,1],0,0,0,0,0,54.4).s().p("Al/ApQiggRAAgYQAAgXCggQQCegRDhgBQDiABCfARQCfAQAAAXQAAAYifARQigAQjhABQjggBifgQg");
	this.shape.setTransform(54.375,5.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18, new cjs.Rectangle(0,0,108.8,11.5), null);


(lib.Path_17_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape.setTransform(2.025,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17_0, new cjs.Rectangle(0,0,4.1,2), null);


(lib.Path_17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape.setTransform(2,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,4,2), null);


(lib.Path_16_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape.setTransform(2.025,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_1, new cjs.Rectangle(0,0,4.1,2), null);


(lib.Path_16_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape.setTransform(2.025,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_0, new cjs.Rectangle(0,0,4.1,2), null);


(lib.Path_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape.setTransform(2,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,4,2), null);


(lib.Path_15_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape.setTransform(2.025,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_4, new cjs.Rectangle(0,0,4.1,2), null);


(lib.Path_15_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape.setTransform(2.025,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_3, new cjs.Rectangle(0,0,4.1,2), null);


(lib.Path_15_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape.setTransform(2.025,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_2, new cjs.Rectangle(0,0,4.1,2), null);


(lib.Path_15_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape.setTransform(2,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_1, new cjs.Rectangle(0,0,4,2), null);


(lib.Path_15_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape.setTransform(2,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_0, new cjs.Rectangle(0,0,4,2), null);


(lib.Path_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape.setTransform(2,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,4,2), null);


(lib.Path_14_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#7C7077"],[0,1],0,10.1,0,-10).s().p("AgDgiQAMgmAKgbQAPgCAEAgQAEAigKA3QgFAhgHAMQgHAMgMgDQgJgCgQAOQgIAHgGAIQAKg6AZhNg");
	this.shape.setTransform(3.9198,10.0441);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_6, new cjs.Rectangle(0,0,7.9,20.1), null);


(lib.Path_14_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_14_5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_4, new cjs.Rectangle(0,0,13,12), null);


(lib.Path_14_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape.setTransform(2.025,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_3, new cjs.Rectangle(0,0,4.1,2), null);


(lib.Path_14_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape.setTransform(2.025,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_2, new cjs.Rectangle(0,0,4.1,2), null);


(lib.Path_14_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape.setTransform(2,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_1, new cjs.Rectangle(0,0,4,2), null);


(lib.Path_14_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape.setTransform(2,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_0, new cjs.Rectangle(0,0,4,2), null);


(lib.Path_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape.setTransform(2,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,4,2), null);


(lib.Path_13_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#7C7077"],[0,1],0,11.3,0,-11.3).s().p("AghAiQAhhZAtg5IAGADQAGAFACAOQADARgUBOQgUBQgMAMQgJAJgLgEQgRgGgEABQgRABgKAPQAIghARgug");
	this.shape.setTransform(5.9389,11.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_0, new cjs.Rectangle(0,0,11.9,22.7), null);


(lib.Path_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#A29AAB"],[0,1],0,35,0,-34.9).s().p("EA2HAFeIgMpkIuBAAIgPJkIh+AAIgMpkItPAAIgNJkIiAAAIgMpkItBAAIAXJkIikAAIgMpkIs/AAIAXJkIikAAIgMpkItUAAIAXJkIikAAIgMpkItUAAIAXJkIikAAIgMpkItVAAIAYJkIhsAAIgYqnMBupgAUIAAK7g");
	this.shape.setTransform(354.075,34.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,708.2,70), null);


(lib.Path_12_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A15750","#FFFFFF"],[0,0.996],0.1,6,0.1,-6).s().p("Ai1A6IAYh1IAAAhQACAhAIABQAJACAUgSQATgTAOgZIgeBXQAlABAugBQBagCAugLQAtgMAXggQAHgLADgJQgQA9gXApg");
	this.shape.setTransform(18.225,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_0, new cjs.Rectangle(0,0,36.5,12), null);


(lib.Path_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AlDBYIAAivIGPAAIAAAtID4AAIAAAqIitAAIAABYg");
	this.shape.setTransform(32.35,8.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,64.7,17.6), null);


(lib.Path_11_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A15750","#FFFFFF"],[0,0.996],0,5.3,0,-5.3).s().p("Ai1ARQgJgoAKgaQgCAKAEAMQAHAZAZALQAbANCDgdQB7gbAegSIAVA+IlkArQgHgPgEgVg");
	this.shape.setTransform(18.6118,5.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_2, new cjs.Rectangle(0,0,37.3,10.7), null);


(lib.Path_11_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_11_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_0, new cjs.Rectangle(0,0,14,29), null);


(lib.Path_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#612C73"],[0,1],0,108.3,0,-108.2).s().p("Eg3JAQzMgBBghtMBwVAA/MgAjAg2g");
	this.shape.setTransform(359.525,108.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,719.1,216.5), null);


(lib.Path_10_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#7C7077"],[0,1],0.1,6.1,0.1,-6.1).s().p("AgbAwIAJgXQALghAHgTQAPgjALACQAJABgOAPQgVAWgFASQgDAJgFAjQgEATgGACIgCAAQgGAAAEgNg");
	this.shape.setTransform(2.941,6.1019);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_1, new cjs.Rectangle(0,0,5.9,12.2), null);


(lib.Path_10_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#590050","#6F4F7C"],[0,1],0,9.5,0,-9.5).s().p("Aj3heIHvAAIgKC9g");
	this.shape.setTransform(24.75,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_0, new cjs.Rectangle(0,0,49.5,19), null);


(lib.Path_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0976BD","#612C73"],[1,1],-500,0,500,0).s().p("Eg3uAJLI2ZsAIAAmVMCcPAAAIAAGVI2iMAg");
	this.shape.setTransform(500,58.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,1000,117.4), null);


(lib.Path_9_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#7C7077"],[0,1],0,5.1,0,-5).s().p("AgOAyQgHgDAGgWIANgnQACgLABgOQABgHAFgDQAGgDADAHQADAGAAAGQAAACgHADQgIADgEALQgCAHgDAiQgCAYgGAAIgBgBg");
	this.shape.setTransform(1.9151,5.0203);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_2, new cjs.Rectangle(0,0,3.8,10.1), null);


(lib.Path_9_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AlDBYIAAivIGOAAIAAAtID5AAIAAAqIitAAIAABYg");
	this.shape.setTransform(32.35,8.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_1, new cjs.Rectangle(0,0,64.7,17.6), null);


(lib.Path_9_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AhAAuIAAhbICBAAIAABbg");
	this.shape.setTransform(6.5,4.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_0, new cjs.Rectangle(0,0,13,9.3), null);


(lib.Path_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7F4556","#A43DBA"],[0,1],-499,0,499,0).s().p("EhN9gCVMCb7AAAIlGDrMiQqABAg");
	this.shape.setTransform(499,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,998,30), null);


(lib.Path_8_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#7C7077"],[0,1],0,6.4,0,-6.4).s().p("AgzA8QgMgJgFgiQgFgdgLgaIgKgXQC7gFACAGQABAFgDAJQgEAMgNAbQgNAYgLAHQgGADgUADQgNABgPANQgUAPgFACQgHADgGAAQgGAAgFgEg");
	this.shape.setTransform(9.525,6.4122);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_0, new cjs.Rectangle(0,0,19.1,12.9), null);


(lib.Path_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#000000"],[0,1],0,0,0,0,0,269.4).s().p("Eg7ggAqMB3BAAAIg2AnMh0UAAug");
	this.shape.setTransform(380.875,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,761.8,8.6), null);


(lib.Path_7_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7C7077","#000000"],[0,1],-15.7,0,15.8,0).s().p("AgOATQgsgDgogKQgfgHgRACQgIACgDADQAEgPAagKQAKgDAaANQAaAKAlAHQAwAJArgGIA1gJQAIgCANAAQAQABAEAHQADAGgHAEQgCABgUgCQgbgDggAEQgXADgaAAIglgCg");
	this.shape.setTransform(15.7724,2.043);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_3, new cjs.Rectangle(0,0,31.6,4.1), null);


(lib.Path_7_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#540068","#90939A"],[0,1],0,15,0,-15).s().p("Ah1CWIgEkeIDjgNIAQEYQgBAEgFAGQgLAJgSAAg");
	this.shape.setTransform(12.225,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_2, new cjs.Rectangle(0,0,24.5,30), null);


(lib.Path_7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AlDBYIAAivIGPAAIAAAtID4AAIAAAqIitAAIAABYg");
	this.shape.setTransform(32.35,8.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_1, new cjs.Rectangle(0,0,64.7,17.6), null);


(lib.Path_7_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AhjBrIAAjVIDHAAIAADVg");
	this.shape.setTransform(10,10.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_0, new cjs.Rectangle(0,0,20,21.4), null);


(lib.Path_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#000000"],[0,1],0,0,0,0,0,279.8).s().p("Eg90gAJMB7pgAjIhmBJMh43AAQg");
	this.shape.setTransform(395.725,4.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,791.5,8.9), null);


(lib.Path_6_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AhAAuIAAhbICBAAIAABbg");
	this.shape.setTransform(6.5,4.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_5, new cjs.Rectangle(0,0,13,9.3), null);


(lib.Path_6_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AhAAuIAAhbICBAAIAABbg");
	this.shape.setTransform(6.475,4.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_4, new cjs.Rectangle(0,0,13,9.3), null);


(lib.Path_6_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AjRhqIGjAAIAADOImjAHg");
	this.shape.setTransform(21,10.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_3, new cjs.Rectangle(0,0,42,21.3), null);


(lib.Path_6_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AjRhqIGjAAIAADPImjAGg");
	this.shape.setTransform(21,10.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_2, new cjs.Rectangle(0,0,42,21.4), null);


(lib.Path_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AjRhqIGjAAIAADPImjAGg");
	this.shape.setTransform(21,10.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(0,0,42,21.4), null);


(lib.Path_6_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AjRhqIGjAAIAADOImjAHg");
	this.shape.setTransform(20.975,10.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_0, new cjs.Rectangle(0,0,42,21.3), null);


(lib.Path_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7F4556","#A43DBA"],[0,1],-412.2,0,412.1,0).s().p("EhAZgAZMCAzgA4Ii0CBMh7qAAig");
	this.shape.setTransform(412.15,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,824.3,16.4), null);


(lib.Path_5_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A13053").s().p("AAeAXQgOgagQgLQgPgLgTgBQgJgBgGACIgDgWIBpAAIgNBfQgDgMgHgNg");
	this.shape.setTransform(5.325,4.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_4, new cjs.Rectangle(0,0,10.7,9.6), null);


(lib.Path_5_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#7A4A52"],[0,1],0,10.7,0,-10.6).s().p("AhjBrIAAjVIDHAAIAADVg");
	this.shape.setTransform(10,10.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_3, new cjs.Rectangle(0,0,20,21.3), null);


(lib.Path_5_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#7A4A52"],[0,1],0,10.7,0,-10.6).s().p("AhjBrIAAjVIDHAAIAADVg");
	this.shape.setTransform(10,10.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_2, new cjs.Rectangle(0,0,20,21.4), null);


(lib.Path_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#7A4A52"],[0,1],0,10.7,0,-10.6).s().p("AhjBrIAAjVIDHAAIAADVg");
	this.shape.setTransform(10,10.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0,0,20,21.4), null);


(lib.Path_5_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#7A4A52"],[0,1],0,10.7,0,-10.6).s().p("AhjBrIAAjVIDHAAIAADVg");
	this.shape.setTransform(10,10.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_0, new cjs.Rectangle(0,0,20,21.3), null);


(lib.Path_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7F4556","#A43DBA"],[0,1],-386.8,0,386.8,0).s().p("Eg7qAAZIgxgiMB43gAPIhGAxg");
	this.shape.setTransform(386.8,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,773.6,5), null);


(lib.Path_4_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B282A2").s().p("AgEgFQgMgCgLAAIgBgFIA5AAIgDAZQgFgNgZgFg");
	this.shape.setTransform(2.9,1.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_15, new cjs.Rectangle(0,0,5.8,2.7), null);


(lib.Path_4_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#3D2C35"],[0,1],0,-10.6,0,10.6).s().p("AjIBqIAQi/QABgDACgEQAFgIALgCIFugDIgRCPIhyAAIAAgXIgTACIgJBZg");
	this.shape.setTransform(20.125,10.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_14, new cjs.Rectangle(0,0,40.3,21.3), null);


(lib.Path_4_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,1.6).s().p("AgFAUQgFgFgDgIQgCgHADgIQACgIAGgDQAFgDAGADQAFAFACAIQACAHgCAIQgDAIgFADIgGABQgCAAgDgBg");
	this.shape.setTransform(1.5,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_13, new cjs.Rectangle(0,0,3,4.3), null);


(lib.Path_4_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,2.1).s().p("AgFATQgGgDgCgJQgCgHADgIQACgIAGgDQAEgDAGAEQAGAEACAIQACAHgDAIQgCAIgGADIgFABQgCAAgDgCg");
	this.shape.setTransform(1.4544,2.1049);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_12, new cjs.Rectangle(0,0,3,4.3), null);


(lib.Path_4_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,2).s().p("AgGATQgFgDgCgIQgCgIADgIQACgIAGgDQAFgDAFAEQAGAEACAIQACAHgCAIQgDAIgGADIgFABQgCAAgEgCg");
	this.shape.setTransform(1.5,2.1451);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_11, new cjs.Rectangle(0,0,3,4.3), null);


(lib.Path_4_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,1.5).s().p("AgFATQgGgDgCgIQgCgIACgIQADgIAGgDQAEgDAGAEQAGADACAJQACAHgDAIQgCAIgGADIgFABQgCAAgDgCg");
	this.shape.setTransform(1.5124,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_10, new cjs.Rectangle(0,0,3,4.3), null);


(lib.Path_4_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,1.6).s().p("AgFATQgGgDgCgIQgCgIACgIQADgIAGgDQAFgDAFAEQAGAEACAIQACAHgDAIQgCAIgGADIgFABQgCAAgDgCg");
	this.shape.setTransform(1.4569,2.1451);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_9, new cjs.Rectangle(0,0,3,4.3), null);


(lib.Path_4_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,2).s().p("AgFATQgGgEgCgHQgCgIACgHQADgJAGgDQAEgDAGAEQAGADACAJQACAIgDAHQgCAIgGADIgFABQgCAAgDgCg");
	this.shape.setTransform(1.5124,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_8, new cjs.Rectangle(0,0,3,4.3), null);


(lib.Path_4_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,2).s().p("AgGAUQgFgEgCgJQgCgHADgIQACgIAGgDQAFgDAFADQAGAFACAIQACAHgCAIQgDAIgGADIgFABQgDAAgDgBg");
	this.shape.setTransform(1.5,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_7, new cjs.Rectangle(0,0,3,4.3), null);


(lib.Path_4_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,1.6).s().p("AgFATQgGgDgCgJQgCgHADgIQACgIAGgDQAEgDAGAEQAFADADAJQACAHgDAIQgCAIgGADQgCABgDAAQgCAAgDgCg");
	this.shape.setTransform(1.4544,2.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_6, new cjs.Rectangle(0,0,3,4.3), null);


(lib.Path_4_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,1.8).s().p("AgKAPQgEgGAAgJQAAgIAEgGQAEgGAGAAQAGAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgGAAQgGAAgEgGg");
	this.shape.setTransform(1.5,2.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_5, new cjs.Rectangle(0,0,3,4.3), null);


(lib.Path_4_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,1.5).s().p("AgKAPQgEgGAAgJQAAgIAEgGQAEgGAGAAQAGAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgGAAQgGAAgEgGg");
	this.shape.setTransform(1.5,2.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_4, new cjs.Rectangle(0,0,3,4.3), null);


(lib.Path_4_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,1.8).s().p("AgJAPQgFgGAAgJQAAgIAFgGQAEgGAFAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgFAAgEgGg");
	this.shape.setTransform(1.475,2.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_3, new cjs.Rectangle(0,0,3,4.3), null);


(lib.Path_4_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,2.1).s().p("AgKAPQgEgGAAgJQAAgIAEgGQAEgGAGAAQAGAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgGAAQgGAAgEgGg");
	this.shape.setTransform(1.5,2.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_2, new cjs.Rectangle(0,0,3,4.3), null);


(lib.Path_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,1.8).s().p("AgKAPQgEgGAAgJQAAgIAEgGQAFgGAFAAQAGAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgGAAQgFAAgFgGg");
	this.shape.setTransform(1.475,2.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,3,4.3), null);


(lib.Path_4_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,1.5).s().p("AgJAPQgFgGAAgJQAAgIAFgGQAEgGAFAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgFAAgEgGg");
	this.shape.setTransform(1.475,2.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_0, new cjs.Rectangle(0,0,3,4.3), null);


(lib.Path_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7F4556","#A43DBA"],[0,1],0,26,0,-26).s().p("EhOHAAyIW1k1MBuIAAAIXSEJIAADqI4hnBMhrWAAPI4YHGg");
	this.shape.setTransform(500,26);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,1000,52), null);


(lib.Path_3_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#7C7077"],[0,1],0,4.3,0,-4.2).s().p("Ah5AiQAHgVAmgTQAlgUAngGQAugHAjgCQAogCABAHQACAIgHAMQgHAMgHgGQgHgGglAAQgfAAgNADIgiAaQghAagZABIgnACQgIAAADgIg");
	this.shape.setTransform(12.2813,4.2765);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_15, new cjs.Rectangle(0,0.1,24.6,8.4), null);


(lib.Path_3_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,0.9).s().p("AgDAMQgDgCgBgFQgBgFABgEQABgFAEgCQADgCADACQADADABAFQABADgBAFQgBAFgEACIgDABIgDgBg");
	this.shape.setTransform(0.9,1.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_14, new cjs.Rectangle(0,0,1.8,2.5), null);


(lib.Path_3_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,1.2).s().p("AgDALQgDgCgBgFQgCgEACgEQABgFAEgCQACgCAEACQADADABAFQADALgIAEIgDABIgDgCg");
	this.shape.setTransform(0.8766,1.2694);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_13, new cjs.Rectangle(0,0,1.8,2.6), null);


(lib.Path_3_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,1.2).s().p("AgDALQgDgCgBgFQgBgEABgFQABgFAEgBQACgCAEACQADADABAEQABAEgBAFQgBAFgEACIgDABIgDgCg");
	this.shape.setTransform(0.9,1.3123);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_12, new cjs.Rectangle(0,0.1,1.8,2.5), null);


(lib.Path_3_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,0.9).s().p("AgDALQgDgCgBgFQgCgEACgEQABgFAEgCQACgCADACQAEACABAFQADAMgIAEIgDABIgDgCg");
	this.shape.setTransform(0.8766,1.2623);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_11, new cjs.Rectangle(0,0,1.8,2.6), null);


(lib.Path_3_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,0.9).s().p("AgDALQgDgBgBgGQgCgEACgFQABgEAEgCQACgBAEACQADACABAEQACAFgCAEQgCAFgDACIgDABIgDgCg");
	this.shape.setTransform(0.8696,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_10, new cjs.Rectangle(0,0.1,1.8,2.5), null);


(lib.Path_3_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,1.2).s().p("AgDALQgDgCgBgFQgCgEACgEQABgFAEgCQACgCADACQAEADABAFQADAKgIAFIgDABIgDgCg");
	this.shape.setTransform(0.9173,1.2694);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_9, new cjs.Rectangle(0,0,1.8,2.6), null);


(lib.Path_3_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,1.2).s().p("AgDALQgHgFADgLQACgEADgCQACgCAEACQADADABAEQACAEgCAFQgBAFgEACIgDABIgDgCg");
	this.shape.setTransform(0.8818,1.2623);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_8, new cjs.Rectangle(0,0,1.8,2.6), null);


(lib.Path_3_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,0.9).s().p("AgDALQgDgCgBgFQgCgEACgEQABgFAEgCQACgCADADQAEACABAFQADALgIAEIgDABIgDgCg");
	this.shape.setTransform(0.8766,1.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_7, new cjs.Rectangle(0,0,1.8,2.6), null);


(lib.Path_3_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,1).s().p("AgFAJQgDgEAAgFQAAgEADgEQACgEADAAQAEAAACAEQADAEAAAEQAAAFgDAEQgCAEgEAAQgDAAgCgEg");
	this.shape.setTransform(0.875,1.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_6, new cjs.Rectangle(0,0,1.8,2.6), null);


(lib.Path_3_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,1.8).s().p("AgKAPQgEgGAAgJQAAgIAEgGQAFgGAFgBQAGABAEAGQAFAGAAAIQAAAJgFAGQgEAGgGABQgFgBgFgGg");
	this.shape.setTransform(1.5,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_5, new cjs.Rectangle(0,0,3,4.3), null);


(lib.Path_3_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,0.9).s().p("AgFAJQgDgEAAgFQAAgEADgEQADgEACAAQAEAAACAEQADAEAAAEQAAAFgDAEQgDAEgDAAQgCAAgDgEg");
	this.shape.setTransform(0.9,1.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_4, new cjs.Rectangle(0,0,1.8,2.6), null);


(lib.Path_3_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,1).s().p("AgFAJQgDgEAAgFQAAgEADgEQACgEADAAQAEAAACAEQADAEAAAEQAAAFgDAEQgCAEgEAAQgDAAgCgEg");
	this.shape.setTransform(0.875,1.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_3, new cjs.Rectangle(0,0,1.8,2.6), null);


(lib.Path_3_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,1.3).s().p("AgFAJQgDgEAAgFQAAgEADgEQADgDACgBQAEABACADQADAEAAAEQAAAFgDAEQgCADgEABQgCgBgDgDg");
	this.shape.setTransform(0.9,1.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_2, new cjs.Rectangle(0,0,1.8,2.5), null);


(lib.Path_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,1).s().p("AgFAJQgDgEAAgFQAAgEADgEQACgEADAAQAEAAACAEQADAEAAAEQAAAFgDAEQgCAEgEAAQgDAAgCgEg");
	this.shape.setTransform(0.875,1.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0.1,1.8,2.5), null);


(lib.Path_3_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,0.9).s().p("AgFAJQgDgEAAgFQAAgEADgEQADgEACAAQAEAAACAEQADAEAAAEQAAAFgDAEQgCAEgEAAQgCAAgDgEg");
	this.shape.setTransform(0.875,1.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_0, new cjs.Rectangle(0,0,1.8,2.6), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7F4556","#A43DBA"],[0,1],0,25.4,0,-25.3).s().p("EhOHADYIYYnGMBrWgAPIYhHBIAAAgI4enbMhrZAAQI4YHlg");
	this.shape.setTransform(500,25.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,1000,50.8), null);


(lib.Path_2_19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7C7077","#000000"],[0,1],-2.5,0,2.5,0).s().p("AgXACQANgIAiACQAAAAABABQAAAAAAAAQAAAAAAABQAAAAgBABQgCABgGACQgIADgSAAIgEAAQgNAAAEgDg");
	this.shape.setTransform(2.504,0.5271);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_19, new cjs.Rectangle(0,0,5,1.1), null);


(lib.Path_2_18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#77566A").s().p("Ag3gPIB3AAIgBAIIhhAHIgeAPg");
	this.shape.setTransform(6.45,1.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_18, new cjs.Rectangle(0,0,12.9,3.1), null);


(lib.Path_2_17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#3D02E5"],[0,1],-8.9,0,8.9,0).s().p("AhYkLICaAAIAXB7IgFFBIgyBYIh6ADg");
	this.shape.setTransform(8.925,26.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_17, new cjs.Rectangle(0,0,17.9,53.7), null);


(lib.Path_2_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.7).s().p("AgCAJQgGgEADgIQABgDADgCQABgBADACQAFAEgCAHQgBAEgDABIgCAAIgCAAg");
	this.shape.setTransform(0.6523,0.9304);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_16, new cjs.Rectangle(0,0,1.4,1.9), null);


(lib.Path_2_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.9).s().p("AgFADQgBgDABgDQABgEADgBQAFgDACAJQACAHgGAEIgCABQgDAAgCgHg");
	this.shape.setTransform(0.675,0.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_15, new cjs.Rectangle(0,0,1.4,1.9), null);


(lib.Path_2_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.9).s().p("AgCAJQgCgCgBgEQgBgDABgDQABgDACgCQACgBACACQAGADgCAIQgCAGgEAAIgCgBg");
	this.shape.setTransform(0.6618,0.9461);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_14, new cjs.Rectangle(0,0,1.3,1.9), null);


(lib.Path_2_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.7).s().p("AgCAIQgCgBgBgEQgDgHAHgEQABgBADABQACACABAEQACAHgGAEIgCAAIgCgBg");
	this.shape.setTransform(0.6653,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_13, new cjs.Rectangle(0,0,1.4,1.9), null);


(lib.Path_2_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.7).s().p("AgCAJQgCgCgBgEQgBgDABgDQABgDADgCQABgBADACQAFAEgCAHQgCAGgDAAIgDgBg");
	this.shape.setTransform(0.6641,0.9461);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_12, new cjs.Rectangle(0,0,1.4,1.9), null);


(lib.Path_2_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.9).s().p("AgCAJQgCgCgBgEQgBgDABgDQABgEADgBQABgBADABQACACABAEQACAHgGAEIgCABIgCgBg");
	this.shape.setTransform(0.675,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_11, new cjs.Rectangle(0,0,1.4,1.9), null);


(lib.Path_2_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.9).s().p("AgCAJQgFgEACgIQABgDADgCQACgBACACQAGADgDAIQgCAGgDAAIgDgBg");
	this.shape.setTransform(0.6477,0.9461);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_10, new cjs.Rectangle(0,0,1.3,1.9), null);


(lib.Path_2_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.7).s().p("AgCAJQgCgCgBgEQgDgHAHgEQAFgDACAJQACAIgGADIgCABIgCgBg");
	this.shape.setTransform(0.6653,0.9135);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_9, new cjs.Rectangle(0,0,1.4,1.9), null);


(lib.Path_2_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.8).s().p("AgDAGQgGgGAGgGQACgDABAAQADAAACADQAEAGgEAGQgCAEgDAAQgBAAgCgEg");
	this.shape.setTransform(0.625,0.9625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_8, new cjs.Rectangle(-0.1,0,1.4000000000000001,1.9), null);


(lib.Path_2_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.8).s().p("AgEAHQgEgHAEgGQACgCACgBQACABACACQADADAAADQAAAEgDADQgCACgCAAQgCAAgCgCg");
	this.shape.setTransform(0.6625,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_7, new cjs.Rectangle(0,0,1.4,1.9), null);


(lib.Path_2_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.7).s().p("AgGAAQABgIAFAAQAHAAgBAIQABAJgHAAQgFAAgBgJg");
	this.shape.setTransform(0.65,0.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_6, new cjs.Rectangle(0,0,1.3,1.9), null);


(lib.Path_2_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.8).s().p("AgEAHQgEgHAEgGQACgCACAAQADAAACACQAEAGgEAHQgCACgDAAQgCAAgCgCg");
	this.shape.setTransform(0.675,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_5, new cjs.Rectangle(0,0.1,1.4,1.7999999999999998), null);


(lib.Path_2_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.9).s().p("AgGAAQAAgDACgDQACgCACgBQACABACACQACADAAADQABAJgHAAQgFAAgBgJg");
	this.shape.setTransform(0.65,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_4, new cjs.Rectangle(0,0,1.3,1.9), null);


(lib.Path_2_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.8).s().p("AgEAHQgEgHAEgGQACgCACAAQADAAACACQAEAGgEAHQgCACgDAAQgCAAgCgCg");
	this.shape.setTransform(0.675,0.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_3, new cjs.Rectangle(0,0,1.4,1.9), null);


(lib.Path_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.7).s().p("AgGAAQAAgJAGAAQADABACACQACADAAADQAAAJgHAAQgGAAAAgJg");
	this.shape.setTransform(0.675,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,1.4,1.9), null);


(lib.Path_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#069FDA","#612C73"],[0,1],0,157.7,0,-157.8).s().p("EhOHgYpIVILPIAPgNMBwWAA/IWisBMAAAAwnQjMxIpjp+QjAjJjRiCQhBgpg8gdIgugVIhEdoIgmABIAXwOQg4g1h/hOQj8iclbiCQxUmh5eAAQ5egBx/G7QloCKkNCmQiFBTg/A3IAdPHIhr9tQhBAnhnBTQjOCni5DeQpSLHisPrg");
	this.shape.setTransform(500,157.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,1000,315.5), null);


(lib.Path_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7F4556","#612C73"],[0,1],0,2.4,0,-2.3).s().p("Eg37AAYIBwgjMBsOgAMIB5Avg");
	this.shape.setTransform(358,2.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,716,4.8), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7F4556","#FFFFFF"],[0,1],0,30.7,0,-30.6).s().p("AgREzIAOplIAHAAIAOJlg");
	this.shape.setTransform(1.8,30.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,3.6,61.4), null);


(lib.Path_1_46 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7F4556","#612C73"],[0,1],-3,0,3.1,0).s().p("AgPAzIgPhlIAmAAIARAYIAGBNg");
	this.shape.setTransform(3.05,5.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_46, new cjs.Rectangle(0,0,6.1,10.3), null);


(lib.Path_1_45 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7F4556","#612C73"],[0,1],-4.2,0,4.3,0).s().p("AgWBIIgUiQIA1AAIAYAiIAIBug");
	this.shape.setTransform(4.275,7.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_45, new cjs.Rectangle(0,0,8.6,14.5), null);


(lib.Path_1_44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#3D2C35"],[0,1],0,15.5,0,-15.4).s().p("AgdCbIgMiCIgcgDIAAAhIilAAIgajRIHWAFQAQADAHALQAEAGAAAFIAYEXg");
	this.shape.setTransform(26.125,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_44, new cjs.Rectangle(0,0,52.3,31), null);


(lib.Path_1_43 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#77566A").s().p("Ag3gPIB3AAIgBAIIhhAHIgeAPg");
	this.shape.setTransform(6.45,1.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_43, new cjs.Rectangle(0,0,12.9,3.1), null);


(lib.Path_1_42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,8.7).s().p("AgcCTQgagcgKg/QgKg+AMg9QAMg9AbgXQAagYAaAdQAbAcAJA/QAKA+gMA9QgMA9gbAXQgMALgMAAQgOAAgOgQg");
	this.shape.setTransform(6.975,16.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_42, new cjs.Rectangle(0,0,14,32.5), null);


(lib.Path_1_41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.6).s().p("AgCAIQgCgBgBgEQgBgDABgCQADgIAEADQAGAEgDAHQgBAFgDAAIgDgBg");
	this.shape.setTransform(0.6141,0.8274);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_41, new cjs.Rectangle(0,0,1.3,1.7), null);


(lib.Path_1_40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.8).s().p("AgCAIQgCgCgBgDQgBgHAFgDQAEgDADAIQACAHgGADIgCABIgCgBg");
	this.shape.setTransform(0.6344,0.8563);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_40, new cjs.Rectangle(0,0,1.3,1.7), null);


(lib.Path_1_39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.8).s().p("AgBAIQgGgEADgGQACgIAFADQAFADgCAIQgCAFgDAAIgCgBg");
	this.shape.setTransform(0.5895,0.8274);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_39, new cjs.Rectangle(0,0,1.2,1.7), null);


(lib.Path_1_38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.6).s().p("AgFADQgCgIAGgCQAAAAABgBQAAAAAAAAQABAAAAABQABAAAAAAQADABAAAEQADAHgGADIgCABQgDAAgCgGg");
	this.shape.setTransform(0.6207,0.8709);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_38, new cjs.Rectangle(0,0,1.3,1.8), null);


(lib.Path_1_37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.6).s().p("AgCAIQgFgEADgGQABgEACgBQABAAAAAAQAAgBAAAAQABAAAAABQABAAAAAAQAGAEgDAHQAAADgDABIgCABIgCgBg");
	this.shape.setTransform(0.6111,0.8325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_37, new cjs.Rectangle(0,0,1.3,1.7), null);


(lib.Path_1_36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.8).s().p("AgCAIQgCgCgBgDQgBgHAFgDQAAAAABgBQAAAAAAAAQABABAAAAQABAAAAAAQADABAAAEQADAHgGADIgCABIgCgBg");
	this.shape.setTransform(0.6301,0.8675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_36, new cjs.Rectangle(0,0,1.3,1.7), null);


(lib.Path_1_35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.8).s().p("AgCAIQgCgBgBgEQgBgDABgCQADgIAEADQAFADgCAIQgBAFgDAAIgDgBg");
	this.shape.setTransform(0.6036,0.8274);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_35, new cjs.Rectangle(0,0,1.2,1.7), null);


(lib.Path_1_34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.6).s().p("AgCAIQgCgCgBgDQgCgHAGgDQAEgDADAIQACAHgGADIgCABIgCgBg");
	this.shape.setTransform(0.6233,0.8652);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_34, new cjs.Rectangle(0,0,1.3,1.8), null);


(lib.Path_1_33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.7).s().p("AgDAGQgEgGAEgFQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAEAFgEAGQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgBgCg");
	this.shape.setTransform(0.6,0.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_33, new cjs.Rectangle(0,0.1,1.2,1.5999999999999999), null);


(lib.Path_1_32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,1).s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAJgHAAQgGAAAAgJg");
	this.shape.setTransform(0.675,0.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_32, new cjs.Rectangle(0,0,1.4,1.9), null);


(lib.Path_1_31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.7).s().p("AgDAGQgEgGAEgFQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAgBQADABACACQADAFgDAGQgCACgDABQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape.setTransform(0.6,0.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_31, new cjs.Rectangle(0,0,1.2,1.7), null);


(lib.Path_1_30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgHAFgBQABABAAAAQABAAAAAAQABAAAAABQABAAAAABQACACAAADQAAAJgGAAQgFAAAAgJg");
	this.shape.setTransform(0.6,0.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_30, new cjs.Rectangle(0,0,1.2,1.7), null);


(lib.Path_1_29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.7).s().p("AgDAGQgFgGAFgFQADgGAEAGQAFAFgFAGQgCADgCAAQgBAAgCgDg");
	this.shape.setTransform(0.575,0.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_29, new cjs.Rectangle(-0.1,0,1.3,1.8), null);


(lib.Path_1_28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.9).s().p("AgFAAQAAgHAFgBQAGABAAAHQAAAJgGAAQgFAAAAgJg");
	this.shape.setTransform(0.6,0.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_28, new cjs.Rectangle(0,0,1.2,1.7), null);


(lib.Path_1_27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.7).s().p("AgDAGQgFgGAFgFQADgGAEAGQAFAFgFAGQgCADgCAAQgBAAgCgDg");
	this.shape.setTransform(0.625,0.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_27, new cjs.Rectangle(0,0,1.3,1.8), null);


(lib.Path_1_26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgHAFgBQABABAAAAQABAAAAAAQABAAAAABQABAAAAABQACACAAADQAAAJgGAAQgFAAAAgJg");
	this.shape.setTransform(0.6,0.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_26, new cjs.Rectangle(0,0,1.2,1.7), null);


(lib.Path_1_25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#77566A").s().p("AAtACIhogGIgBgJIB3AAIACAbg");
	this.shape.setTransform(6.1,1.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_25, new cjs.Rectangle(0,0,12.2,2.7), null);


(lib.Path_1_24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#70A4D8","#612C73"],[1,1],0,36.5,0,-36.5).s().p("EhOHAFtIAAm3IVXkiIxiEiQCkAmEoAzQJPBoKNBGUAguADdAeWgDUInzh8QXEgpZ3g5QM8gdITgVItwjNIOHCiIAAHig");
	this.shape.setTransform(500,36.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_24, new cjs.Rectangle(0,0,1000,73.1), null);


(lib.Path_1_23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#A29AAB"],[0,1],0,68.7,0,-68.7).s().p("A2CHbIgFwsIPghaIP0gDIM7BKIgKG7Is0IcIgBmKIveLGg");
	this.shape.setTransform(141.625,68.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_23, new cjs.Rectangle(0,0,283.3,137.4), null);


(lib.Path_1_22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_22, new cjs.Rectangle(0,0,28,4.8), null);


(lib.Path_1_21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_21, new cjs.Rectangle(0,0,28,4.8), null);


(lib.Path_1_20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_20, new cjs.Rectangle(0,0,28,4.8), null);


(lib.Path_1_19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_19, new cjs.Rectangle(0,0,28,4.8), null);


(lib.Path_1_18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_18, new cjs.Rectangle(0,0,28,4.8), null);


(lib.Path_1_17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_17, new cjs.Rectangle(0,0,28,4.8), null);


(lib.Path_1_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_16, new cjs.Rectangle(0,0,28,4.8), null);


(lib.Path_1_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_15, new cjs.Rectangle(0,0,28,4.8), null);


(lib.Path_1_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14.025,2.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_14, new cjs.Rectangle(0,0,28.1,4.9), null);


(lib.Path_1_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14.025,2.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_13, new cjs.Rectangle(0,0,28.1,4.9), null);


(lib.Path_1_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_12, new cjs.Rectangle(0,0,28.1,4.8), null);


(lib.Path_1_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14.025,2.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_11, new cjs.Rectangle(0,0,28.1,4.9), null);


(lib.Path_1_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_10, new cjs.Rectangle(0,0,28.1,4.8), null);


(lib.Path_1_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_9, new cjs.Rectangle(0,0,28.1,4.8), null);


(lib.Path_1_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14.025,2.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_8, new cjs.Rectangle(0,0,28.1,4.9), null);


(lib.Path_1_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_7, new cjs.Rectangle(0,0,28.1,4.8), null);


(lib.Path_1_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_6, new cjs.Rectangle(0,0,28,4.8), null);


(lib.Path_1_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_5, new cjs.Rectangle(0,0,28,4.8), null);


(lib.Path_1_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_4, new cjs.Rectangle(0,0,28,4.8), null);


(lib.Path_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14,2.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,28,4.9), null);


(lib.Path_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,28,4.8), null);


(lib.Path_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663366").s().p("AiLAYIAAgvIEXAAIAAAvg");
	this.shape.setTransform(14,2.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,28,4.9), null);


(lib.Path_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D2C35","#000000"],[0,1],0,0,0,0,0,327.5).s().p("EhDjACPIkxjcMCQpgBBImLEdg");
	this.shape.setTransform(462.925,14.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,925.9,28.6), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7F4556","#FFFFFF"],[0,1],0,29.9,0,-29.8).s().p("AlVErIKipVIAJAAIqBJVg");
	this.shape.setTransform(34.175,29.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,68.4,59.8), null);


(lib.Path_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7F4556","#A43DBA"],[0,1],-233.1,0,233.1,0).s().p("EgkagBDMBI1AAAIAAA2MhF6ABRg");
	this.shape.setTransform(233.1,6.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,466.2,13.5), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7F4556","#FFFFFF"],[0,1],0,31.5,0,-31.4).s().p("AF/E7Isbp1IAGAAIMzJ1g");
	this.shape.setTransform(41.325,31.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,82.7,63), null);


(lib.Ellipse_33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#B86F00","#A96600","#613A00","#2C1B00","#0C0700","#000000"],[0,0.067,0.4,0.678,0.886,1],0,0,0,0,0,123.3).s().p("AtnFSQiqhChdhWQhhhZgBhhQABhgBhhZQBdhWCqhCQFqiMH9AAQH+AAFqCMQCqBCBdBWQBhBZABBgQgBBhhhBZQhdBWiqBCQlqCMn+AAQn9AAlqiMg");
	this.shape.setTransform(123.25,47.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_33, new cjs.Rectangle(0,0,246.5,95.6), null);


(lib.Ellipse_32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","#3D00E5","#000000"],[0.416,0.706,1],0,0,0,0,0,6.8).s().p("AgvBCQgUgbAAgnQAAglAUgbQAUgcAbAAQAcAAAUAcQATAbABAlQgBAmgTAcQgUAbgcAAQgbAAgUgbg");
	this.shape.setTransform(6.75,9.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_32, new cjs.Rectangle(0,0,13.5,18.5), null);


(lib.Ellipse_31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFE5","#000000"],[0,1],0,0,0,0,0,0.9).s().p("AgFAAQAAgIAFAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQACADAAACQAAAEgCACQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgFAAAAgJg");
	this.shape.setTransform(0.6,0.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_31, new cjs.Rectangle(0,0,1.2,1.8), null);


(lib.Ellipse_30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,1).s().p("AgFAJQgDgEAAgFQAAgEADgEQACgEADAAQAEAAACAEQADAEAAAEQAAAFgDAEQgCAEgEAAQgDAAgCgEg");
	this.shape.setTransform(0.925,1.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_30, new cjs.Rectangle(0.1,0,1.7,2.6), null);


(lib.Ellipse_29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#B86F00","#A96600","#613A00","#2C1B00","#0C0700","#000000"],[0,0.067,0.4,0.678,0.886,1],0,0,0,0,0,73.1).s().p("AoEBuQjWguAAhAQAAg/DWgtQDXguEtAAQEvAADWAuQDWAtAAA/QAABAjWAuQjWAtkvAAQktAAjXgtg");
	this.shape.setTransform(73.1,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_29, new cjs.Rectangle(0,0,146.2,31), null);


(lib.Ellipse_28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#B8AE59","#716B37","#605B2F","#2C2A16","#0C0C06","#000000"],[0,0.525,0.584,0.776,0.922,1],0,0,0,0,0,91.7).s().p("AqIBFQkMgdAAgoQAAgnEMgcQENgdF7AAQF8AAEMAdQENAcAAAnQAAAokNAdQkMAcl8AAQl7AAkNgcg");
	this.shape.setTransform(91.7,9.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_28, new cjs.Rectangle(0,0,183.4,19.4), null);


(lib.Ellipse_27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9A0920","#600614","#2C0309","#0C0103","#000000"],[0,0.314,0.627,0.867,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_27, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#2C1ABD","#2717A9","#170D61","#0A062D","#03020C","#000000"],[0,0.086,0.412,0.686,0.886,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_26, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9A0920","#600614","#2C0309","#0C0103","#000000"],[0,0.314,0.627,0.867,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_25, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#005981","#004260","#001F2C","#00080C","#000000"],[0,0.208,0.573,0.847,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_24, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#005981","#004260","#001F2C","#00080C","#000000"],[0,0.208,0.573,0.847,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_23, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#005981","#004260","#001F2C","#00080C","#000000"],[0,0.208,0.573,0.847,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_22, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#005981","#004260","#001F2C","#00080C","#000000"],[0,0.208,0.573,0.847,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_21, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#005981","#004260","#001F2C","#00080C","#000000"],[0,0.208,0.573,0.847,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_20, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#005981","#004260","#001F2C","#00080C","#000000"],[0,0.208,0.573,0.847,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_19, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#005981","#004260","#001F2C","#00080C","#000000"],[0,0.208,0.573,0.847,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_18, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#005981","#004260","#001F2C","#00080C","#000000"],[0,0.208,0.573,0.847,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_17, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#005981","#004260","#001F2C","#00080C","#000000"],[0,0.208,0.573,0.847,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_16, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#005981","#004260","#001F2C","#00080C","#000000"],[0,0.208,0.573,0.847,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_15, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#005981","#004260","#001F2C","#00080C","#000000"],[0,0.208,0.573,0.847,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_14, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#005981","#004260","#001F2C","#00080C","#000000"],[0,0.208,0.573,0.847,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_13, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#005981","#004260","#001F2C","#00080C","#000000"],[0,0.208,0.573,0.847,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_12, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00934F","#006034","#002C18","#000C07","#000000"],[0,0.286,0.616,0.863,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_11, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#C25900","#A94D00","#612C00","#2D1400","#0C0600","#000000"],[0,0.106,0.424,0.69,0.89,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_10, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#005981","#004260","#001F2C","#00080C","#000000"],[0,0.208,0.573,0.847,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_9, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#005981","#004260","#001F2C","#00080C","#000000"],[0,0.208,0.573,0.847,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_8, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#005981","#004260","#001F2C","#00080C","#000000"],[0,0.208,0.573,0.847,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_7, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#005981","#004260","#001F2C","#00080C","#000000"],[0,0.208,0.573,0.847,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_6, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#005981","#004260","#001F2C","#00080C","#000000"],[0,0.208,0.573,0.847,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_5, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#C25900","#A94D00","#612C00","#2D1400","#0C0600","#000000"],[0,0.106,0.424,0.69,0.89,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_4, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_3_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#2C1ABD","#2717A9","#170D61","#0A062D","#03020C","#000000"],[0,0.086,0.412,0.686,0.886,1],0,0,0,0,0,54.1).s().p("Al+CUQieg9AAhXQAAhWCeg+QCfg9DfAAQDgAACfA9QCeA+AABWQAABXieA9QifA+jgAAQjfAAifg+g");
	this.shape.setTransform(54.125,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_3_0, new cjs.Rectangle(0,0,108.3,42), null);


(lib.Ellipse_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#903B00","#602700","#2C1200","#0C0500","#000000"],[0,0.275,0.608,0.863,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_3, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#2561D4","#1D4DA9","#112C61","#08142D","#02060C","#000000"],[0,0.169,0.467,0.714,0.898,1],0,0,0,0,0,91.2).s().p("AliNIQijhFh/h+Qh+h+hFikQhIipAAi6QAAi4BIiqQBFijB+h/QB/h+CjhFQCqhIC4AAQC6AACpBIQCkBFB+B+QB+B/BFCjQBICqAAC4QAAC6hICpQhFCkh+B+Qh+B+ikBFQipBIi6AAQi4AAiqhIg");
	this.shape.setTransform(91.175,91.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_2_2, new cjs.Rectangle(0,0,182.4,182.4), null);


(lib.Ellipse_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,2.1).s().p("AgJAPQgFgGAAgJQAAgIAFgGQAEgGAFAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgFAAgEgGg");
	this.shape.setTransform(1.475,2.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_2_1, new cjs.Rectangle(0,0,3,4.3), null);


(lib.Ellipse_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#903B00","#602700","#2C1200","#0C0500","#000000"],[0,0.275,0.608,0.863,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_2_0, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#2C1ABD","#2717A9","#170D61","#0A062D","#03020C","#000000"],[0,0.086,0.412,0.686,0.886,1],0,0,0,0,0,80.8).s().p("Ao6DdQjthbAAiCQAAiBDthcQDshcFOAAQFPAADsBcQDtBcAACBQAACCjtBbQjsBdlPAAQlOAAjshdg");
	this.shape.setTransform(80.825,31.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_2, new cjs.Rectangle(0,0,161.7,62.7), null);


(lib.Ellipse_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#2561D4","#1D4DA9","#112C61","#08142D","#02060C","#000000"],[0,0.169,0.467,0.714,0.898,1],0,0,0,0,0,66.1).s().p("AnSHUQjCjCAAkSQAAkRDCjBQDBjCERAAQESAADCDCQDBDBAAERQAAESjBDCQjCDBkSAAQkRAAjBjBg");
	this.shape.setTransform(66.1,66.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_1_3, new cjs.Rectangle(0,0,132.2,132.2), null);


(lib.Ellipse_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3D02E5","#000000"],[0,1],0,0,0,0,0,1.3).s().p("AgFAJQgDgEAAgFQAAgEADgEQADgEACAAQAEAAACAEQADAEAAAEQAAAFgDAEQgCAEgEAAQgCAAgDgEg");
	this.shape.setTransform(0.875,1.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_1_2, new cjs.Rectangle(0,0,1.8,2.6), null);


(lib.Ellipse_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#B86F00","#A96600","#613A00","#2C1B00","#0C0700","#000000"],[0,0.067,0.4,0.678,0.886,1],0,0,0,0,0,123.3).s().p("AtnC5QlphNAAhsQAAhrFphNQFqhMH9AAQH+AAFqBMQFpBNAABrQAABslpBNQlqBMn+AAQn9AAlqhMg");
	this.shape.setTransform(123.25,26.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_1_1, new cjs.Rectangle(0,0,246.5,52.3), null);


(lib.Ellipse_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9A0920","#600614","#2C0309","#0C0103","#000000"],[0,0.314,0.627,0.867,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_1_0, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#2C1ABD","#2717A9","#170D61","#0A062D","#03020C","#000000"],[0,0.086,0.412,0.686,0.886,1],0,0,0,0,0,54.1).s().p("Al+CUQieg9AAhXQAAhWCeg+QCfg9DfAAQDgAACfA9QCeA+AABWQAABXieA9QifA+jgAAQjfAAifg+g");
	this.shape.setTransform(54.125,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_1, new cjs.Rectangle(0,0,108.3,42), null);


(lib.Ellipse_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9A0920","#600614","#2C0309","#0C0103","#000000"],[0,0.314,0.627,0.867,1],0,0,0,0,0,8.5).s().p("Ag7CUQgZg9AAhXQAAhWAZg9QAZg+AiAAQAjAAAZA+QAZA9AABWQAABXgZA9QgZA+gjAAQgiAAgZg+g");
	this.shape.setTransform(8.5,20.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_0, new cjs.Rectangle(0,0,17,42), null);


(lib.Ellipse = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#2C1ABD","#2717A9","#170D61","#0A062D","#03020C","#000000"],[0,0.086,0.412,0.686,0.886,1],0,0,0,0,0,20).s().p("AiNB4Qg6gyAAhGQAAhFA6gyQA7gxBSAAQBTAAA6AxQA7AyAABFQAABGg7AyQg6AxhTAAQhSAAg7gxg");
	this.shape.setTransform(20.025,16.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse, new cjs.Rectangle(0,0,40.1,33.9), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiWAqQAjgQA2gUQBsgmBngPIgNA4QgTAIgrAJQhSARhuAFg");
	mask.setTransform(15.05,11.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#402743").s().p("AgCAGQgDgBACgGQADgGADABQADACgCAFQgCAGgCAAIgCgBg");
	this.shape.setTransform(13.4157,10.4582);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F2642").s().p("AgDALQgGgDADgKQACgEADgCQADgDACABQAHADgFAKQgBAEgDADIgEABIgBAAg");
	this.shape_1.setTransform(13.4276,10.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3E2541").s().p("AgFAPQgEgBgBgGQAAgFACgGQACgGAFgDQADgEAEACQAEABABAGQABAFgDAFQgCAGgEAEQgDADgDAAIgCgBg");
	this.shape_2.setTransform(13.4,10.465);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D2441").s().p("AgHAUQgFgDgBgGQgBgIADgHQAEgHAFgFQAFgEAFABQAFADABAGQABAIgDAGQgEAJgFAEQgDADgEAAIgDAAg");
	this.shape_3.setTransform(13.415,10.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C2340").s().p("AgJAYQgFgDgCgIQgBgJAEgJQADgKAHgFQAGgFAGACQAGACACAJQABAIgEAJQgEAKgHAGQgEAEgEAAIgEgBg");
	this.shape_4.setTransform(13.425,10.4605);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3B223F").s().p("AgKAcQgHgCgCgLQgCgKAFgKQAFgMAIgGQAHgHAHADQAHADACAKQABAKgEAKQgFAMgIAGQgEAFgGAAIgEgBg");
	this.shape_5.setTransform(13.4152,10.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3A213E").s().p("AgMAgQgIgDgCgLQgCgMAGgNQAFgNAJgHQAJgIAIADQAIAEACALQACAMgGAMQgFAOgJAHQgGAFgGAAIgFgBg");
	this.shape_6.setTransform(13.425,10.4521);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#39203E").s().p("AgOAlQgJgEgCgNQgCgOAGgNQAGgQALgIQAJgIAJADQAKADACAOQACANgGAPQgGAPgLAIQgGAGgHAAIgGgBg");
	this.shape_7.setTransform(13.4132,10.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#381F3D").s().p("AgPApQgKgEgDgPQgCgOAGgQQAHgSAMgJQALgJAKAEQAKAEADAPQACAOgHARQgGARgMAJQgIAGgHAAIgGgBg");
	this.shape_8.setTransform(13.4232,10.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#371E3C").s().p("AgRAuQgLgFgDgRQgDgPAIgTQAHgTAOgKQAMgKALAFQAMAEACARQADAQgIASQgHATgOAKQgHAHgJAAIgHgBg");
	this.shape_9.setTransform(13.4,10.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#361D3B").s().p("AgTAyQgMgFgDgSQgDgSAIgUQAJgUAOgLQANgMANAFQAMAFADASQADASgIAUQgIAUgPALQgJAIgJAAIgIgBg");
	this.shape_10.setTransform(13.4111,10.4646);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#351B3A").s().p("AgUA2QgOgFgDgUQgDgUAJgVQAIgWAQgMQAPgMANAFQAOAFADAUQADATgJAWQgJAWgPAMQgKAJgKAAQgEAAgEgCg");
	this.shape_11.setTransform(13.4151,10.4605);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#341A3A").s().p("AgWA6QgPgFgDgWQgDgUAJgYQAKgYARgNQAPgNAPAFQAOAHAEAUQADAWgJAXQgKAYgRANQgLAJgKAAQgFAAgEgCg");
	this.shape_12.setTransform(13.425,10.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#331939").s().p("AgYA/QgPgGgEgXQgEgXALgZQAKgaASgOQARgOAQAHQAPAGAEAWQADAXgKAZQgKAagSAOQgLAKgLAAQgGAAgFgCg");
	this.shape_13.setTransform(13.4016,10.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#321838").s().p("AgaBDQgQgHgEgYQgEgYALgbQAMgcASgPQATgPAQAHQARAHAEAYQAEAYgLAbQgLAcgUAPQgMAKgMAAQgFAAgGgCg");
	this.shape_14.setTransform(13.4,10.4631);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#311737").s().p("AgbBHQgSgHgEgaQgEgaALgcQAMgdAVgQQAUgQARAGQASAHAEAaQAEAagMAdQgLAdgVAQQgNAMgNAAQgGAAgFgDg");
	this.shape_15.setTransform(13.4234,10.4626);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#301637").s().p("AgdBLQgTgHgEgbQgFgcANgeQAMgfAWgRQAVgRATAHQATAIAEAbQAFAcgNAeQgNAfgVARQgPAMgOAAQgGAAgFgDg");
	this.shape_16.setTransform(13.425,10.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2F1536").s().p("AgfBQQgUgIgEgdQgFgdANggQANghAYgSQAWgSAUAIQATAIAFAdQAFAdgNAgQgNAhgYASQgPAMgOAAQgHAAgGgCg");
	this.shape_17.setTransform(13.425,10.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2E1435").s().p("AggBUQgVgIgFgfQgFgeAOgiQAOgjAYgTQAXgSAVAIQAVAIAFAeQAFAfgOAiQgOAjgYATQgQANgPAAQgHAAgGgDg");
	this.shape_18.setTransform(13.425,10.4856);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2D1334").s().p("AgiBYQgWgIgFggQgFghAOgjQAOglAagTQAZgUAWAJQAWAIAFAgQAFAggOAkQgPAlgZATQgRAOgRAAQgHAAgGgDg");
	this.shape_19.setTransform(13.425,10.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C1234").s().p("AgkBdQgXgJgFgiQgGghAPgmQAQgmAbgVQAagVAXAJQAXAJAFAiQAGAhgQAmQgPAmgbAVQgSAPgRAAQgHAAgHgDg");
	this.shape_20.setTransform(13.4232,10.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B1133").s().p("AgmBhQgYgKgFgjQgGgjAQgnQAQgoAcgWQAbgWAYAKQAYAJAGAjQAGAkgQAnQgQAogcAWQgTAPgRAAQgIAAgIgDg");
	this.shape_21.setTransform(13.4135,10.4607);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2A1032").s().p("AgnBlQgZgJgGglQgGglAQgpQARgqAegXQAcgWAZAJQAZAKAGAlQAGAlgRApQgQAqgeAXQgTAPgSAAQgJAAgHgDg");
	this.shape_22.setTransform(13.4233,10.4628);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2A1032").s().p("AiWAwIAAhfIEsAAIAABfg");
	this.shape_23.setTransform(15.05,11.525);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,6.7,30.1,9.7), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AiTAsIghgGQAcgOA2gSQBrgiCEgQIAnACIgDAbQgnAQg9APQhrAdhgAAIgVgBg");
	mask_1.setTransform(18.05,12.3675);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#402743").s().p("AgCAIQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgDABgCQADgIAEACQAEACgDAHQgCAGgCAAIgCAAg");
	this.shape_4.setTransform(16.1038,11.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3F2642").s().p("AgEANQgDgBgBgFQgBgEADgFQACgFADgDQADgDADABQADABABAFQABAFgCAEQgFAKgEAAIgDAAg");
	this.shape_5.setTransform(16.0907,11.3823);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3E2541").s().p("AgGASQgEgCgCgGQAAgHACgGQADgHAFgEQAEgFAFACQAFACABAGQABAHgDAGQgEAIgEAEQgDACgDAAIgDAAg");
	this.shape_6.setTransform(16.1,11.3776);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3D2441").s().p("AgIAXQgFgDgCgIQgBgIADgIQAEgKAHgFQAGgFAFACQAGADABAIQACAIgEAIQgEAKgHAFQgDADgEAAIgEAAg");
	this.shape_7.setTransform(16.098,11.3881);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C2340").s().p("AgKAcQgHgDgCgKQgBgKAEgLQAFgLAIgGQAHgHAHADQAHADACAKQABAKgEALQgFALgIAHQgEAEgFAAIgFgBg");
	this.shape_8.setTransform(16.075,11.3776);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3B223F").s().p("AgMAhQgIgDgCgMQgCgMAFgNQAGgNAJgIQAJgHAIADQAJADABAMQACAMgFANQgFANgKAIQgGAFgGAAIgFgBg");
	this.shape_9.setTransform(16.0876,11.3872);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3A213E").s().p("AgOAmQgJgEgCgOQgDgNAGgPQAHgQALgIQAKgJAJAEQAKADACAOQACAOgGAPQgGAPgLAJQgHAGgHAAIgGgBg");
	this.shape_10.setTransform(16.098,11.413);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#39203E").s().p("AgQArQgLgEgCgQQgDgPAHgRQAHgSANgKQALgJALAEQALAEACAQQADAPgHARQgHASgNAKQgIAGgHAAIgHgBg");
	this.shape_11.setTransform(16.075,11.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#381F3D").s().p("AgSAwQgMgFgDgRQgDgRAIgTQAIgUAOgLQANgLAMAFQAMAFADARQADARgIATQgIAUgOALQgJAIgIAAIgIgCg");
	this.shape_12.setTransform(16.075,11.3772);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#371E3C").s().p("AgUA1QgNgFgDgTQgDgUAIgVQAJgWAQgLQAOgMANAFQANAFAEATQADAUgJAVQgJAWgPAMQgKAIgKAAQgEAAgEgCg");
	this.shape_13.setTransform(16.0984,11.3772);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#361D3B").s().p("AgWA6QgOgFgEgWQgDgVAJgXQAKgYARgNQAQgNAOAGQAPAFADAWQADAVgJAXQgKAYgRANQgKAJgLAAQgFAAgEgCg");
	this.shape_14.setTransform(16.0889,11.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#351B3A").s().p("AgYA/QgPgGgEgXQgEgWAKgaQALgaASgOQASgPAPAHQAQAGAEAXQADAXgKAZQgKAagTAOQgMAKgLAAQgFAAgFgCg");
	this.shape_15.setTransform(16.0984,11.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#341A3A").s().p("AgaBEQgRgGgEgZQgEgZALgbQAMgcATgQQATgPARAHQARAHAEAYQAEAZgLAbQgMAcgTAQQgNAKgMAAQgGAAgFgCg");
	this.shape_16.setTransform(16.0983,11.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#331939").s().p("AgcBJQgSgHgEgaQgFgbAMgdQAMgfAWgQQAUgQASAHQASAHAFAaQAEAbgMAdQgMAfgVAQQgOALgNAAQgGAAgGgCg");
	this.shape_17.setTransform(16.0886,11.3879);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#321838").s().p("AgeBPQgTgIgFgdQgFgcANgfQANghAXgRQAWgSATAIQAUAHAEAdQAFAcgNAgQgNAggXASQgPAMgOAAQgGAAgGgCg");
	this.shape_18.setTransform(16.0884,11.3894);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#311737").s().p("AggBUQgUgIgFgfQgFgeANgiQAOgiAYgTQAYgSAUAIQAVAIAFAeQAFAegOAiQgOAigYATQgQANgPAAQgHAAgGgCg");
	this.shape_19.setTransform(16.0982,11.3978);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#301637").s().p("AgiBZQgWgJgFggQgFggAOgkQAPglAagTQAYgUAWAIQAWAJAFAgQAFAggOAkQgOAkgaAUQgRAOgQAAQgHAAgHgCg");
	this.shape_20.setTransform(16.075,11.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2F1536").s().p("AgkBeQgXgKgGghQgFgiAPgmQAQgnAbgVQAagVAXAJQAXAKAGAhQAFAigPAmQgPAngbAVQgTAOgRAAQgHAAgHgCg");
	this.shape_21.setTransform(16.0768,11.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2E1435").s().p("AgmBjQgZgKgFgkQgGgjAQgoQAQgpAdgWQAbgWAZAJQAYAKAGAkQAGAjgQAoQgRApgcAWQgTAQgSAAQgIAAgHgDg");
	this.shape_22.setTransform(16.1135,11.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2D1334").s().p("AgoBmQgagKgGglQgGgmARgqQARgrAegXIAAAuIA3AAIAAg7QAaAKAGAmQAGAlgRAqQgRArgeAXQgUAQgTAAQgIAAgIgDg");
	this.shape_23.setTransform(16.0866,11.5265);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2C1234").s().p("AgqBrQgbgKgGgoQgHgnASgsQASgsAggaIAAAzIA5AAIAAhAQAbAKAHAoQAGAngSAsQgSAtgfAZQgVAQgUAAQgJAAgIgDg");
	this.shape_24.setTransform(16.0904,11.5454);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B1133").s().p("AgsBwQgcgLgHgpQgGgqASguQATgvAhgZIAAA2IA8AAIAAhFQAcALAHAqQAGApgSAuQgTAvghAaQgWASgUAAQgJAAgJgEg");
	this.shape_25.setTransform(16.1,11.5537);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2A1032").s().p("AguBuQgdgMgHgrQgHgrATgwQAUgxAigbIAAA7IBkAAIAAgTQAGAsgTAvQgTAxgjAbQgXASgWAAQgJAAgJgDg");
	this.shape_26.setTransform(16.0904,12.299);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2A1032").s().p("Ai0AvIAAhdIFoAAIAABdg");
	this.shape_27.setTransform(18.05,12.625);

	var maskedShapeInstanceList = [this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,7.9,36.1,8.999999999999998), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AkWHYIANg1QAhh7AlifQAujLADgtQgPglAHg5QAOhyBshkIBQgbQBggbBKACIAYAbQAaArAMBNQgRB6ggCgQg+FAhFDCg");
	mask_1.setTransform(29.9,48.8681);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#402743").s().p("AgIAYQgGgCgCgJQgCgJAEgJQAEgKAHgFQAGgGAHACQAFADACAJQACAJgFAJQgDAKgIAFQgDAEgFAAIgDgBg");
	this.shape_2.setTransform(26.85,38.5019);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3F2642").s().p("AgPAoQgKgEgCgOQgCgPAGgQQAGgQAMgJQALgJAKAEQAKAEACAOQACAPgGAPQgGARgNAJQgGAGgIAAIgGgBg");
	this.shape_3.setTransform(26.85,38.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3E2541").s().p("AgVA4QgOgFgDgUQgEgVAKgWQAJgXAQgNQAPgNAOAGQAOAGADAUQAEAUgJAXQgKAXgQAMQgKAJgKAAQgFAAgEgCg");
	this.shape_4.setTransform(26.8269,38.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3D2441").s().p("AgbBIQgSgHgEgaQgFgaAMgdQAMgeAVgQQAUgQASAHQARAHAFAaQAEAagMAdQgMAegVAQQgOALgMAAQgGAAgFgCg");
	this.shape_5.setTransform(26.8402,38.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C2340").s().p("AgiBYQgWgJgFgfQgFggAPgjQAOglAZgUQAZgUAWAJQAWAJAFAfQAFAggOAkQgPAlgaATQgRAOgQAAQgGAAgHgDg");
	this.shape_6.setTransform(26.85,38.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3B223F").s().p("AgoBoQgagKgGglQgGgmARgqQARgsAegXQAdgXAaAKQAaAKAGAmQAGAlgRArQgRAqgeAYQgUAQgTAAQgIAAgIgDg");
	this.shape_7.setTransform(26.85,38.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3A213E").s().p("AguB4QgegMgHgrQgHgrAUgyQATgxAjgbQAigaAeALQAdAMAHArQAHAsgTAwQgUAygjAbQgXASgWAAQgJAAgJgDg");
	this.shape_8.setTransform(26.8402,38.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#39203E").s().p("Ag1CIQghgNgIgyQgIgxAWg3QAWg4AogfQAmgeAiANQAhANAIAxQAIAygWA3QgWA4gnAeQgbAWgZAAQgLAAgKgEg");
	this.shape_9.setTransform(26.8267,38.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#381F3D").s().p("Ag7CYQglgPgKg3QgJg3Aag+QAZg/ArgiQAsgiAlAPQAmAPAJA3QAIA3gYA+QgZA+gtAiQgdAYgcAAQgMAAgLgEg");
	this.shape_10.setTransform(26.85,38.5122);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#371E3C").s().p("AhCCoQgogQgKg+QgLg8AchEQAbhGAxglQAwgmApARQAqAQAKA8QAJA9gbBFQgbBFgxAmQghAageAAQgOAAgNgFg");
	this.shape_11.setTransform(26.85,38.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#361D3B").s().p("AhHC4QgugTgKhCQgMhCAfhMQAdhLA2gqQA0goAuASQAtARAKBDQALBCgeBLQgdBNg2AoQgkAdghAAQgPAAgNgFg");
	this.shape_12.setTransform(26.85,38.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#351B3A").s().p("AhODHQgxgTgMhIQgLhJAghRQAhhTA6gsQA4gtAyATQAxAUAMBIQAMBIghBSQghBTg6AsQgnAfgkAAQgQAAgPgGg");
	this.shape_13.setTransform(26.85,38.5023);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#341A3A").s().p("AhVDXQg1gUgMhPQgNhOAkhYQAjhZA+gxQA+gvA1AUQA2AWAMBNQANBPgkBYQgiBZhAAwQgqAignAAQgRAAgRgHg");
	this.shape_14.setTransform(26.85,38.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#331939").s().p("AhaDnQg6gWgNhUQgOhUAmhfQAmhgBDgzQBCg0A6AWQA5AXANBUQAOBUgmBeQgmBghDA0QguAkgqAAQgSAAgRgHg");
	this.shape_15.setTransform(26.8365,38.5023);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#321838").s().p("AhhD4Qg9gZgOhaQgPhZAohlQAphnBIg3QBHg3A9AYQA9AYAOBZQAPBagpBmQgoBmhIA3QgxAngtAAQgUAAgSgHg");
	this.shape_16.setTransform(26.85,38.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#311737").s().p("AhnEHQhBgagQhfQgPhfArhsQArhtBNg7QBLg7BBAaQBBAZAPBgQAQBfgrBsQgrBthMA7Qg1ApgwAAQgUAAgUgIg");
	this.shape_17.setTransform(26.85,38.5121);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#301637").s().p("AhuEXQhFgbgQhlQgQhlAthzQAuh0BRg+QBQg+BFAbQBFAbARBmQAQBlguByQgtB0hSA+Qg3ArgyAAQgXAAgVgIg");
	this.shape_18.setTransform(26.8597,38.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2F1536").s().p("Ah0EnQhJgdgRhqQgShrAxh5QAwh6BWhDQBVhCBJAdQBIAdASBrQARBqgwB6QgxB6hVBCQg7Aug1AAQgYAAgWgJg");
	this.shape_19.setTransform(26.85,38.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2E1435").s().p("Ah6E3QhNgfgShwQgThxAziAQA0iABahGQBZhGBNAfQBNAeASBxQASBwgzCAQgyCBhbBGQg+Awg4AAQgZAAgXgJg");
	this.shape_20.setTransform(26.85,38.5023);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2D1334").s().p("AiBFHQhQgggUh2QgSh3A1iGQA2iIBfhJQBehJBQAgQBRAgATB2QAUB2g2CHQg2CHhfBKQhBAzg7AAQgaAAgZgKg");
	this.shape_21.setTransform(26.85,38.5023);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2C1234").s().p("AiGFXQhWgigUh8QgTh8A3iNQA5iOBjhNQBjhNBVAiQBUAiAVB8QATB8g3CNQg5COhjBNQhEA1g+AAQgcAAgZgKg");
	this.shape_22.setTransform(26.85,38.5023);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B1133").s().p("AiNFnQhZgkgUiBQgWiCA7iUQA6iVBphQQBnhQBZAjQBZAjAVCCQAVCCg7CTQg7CVhoBQQhIA4hBAAQgcAAgbgKg");
	this.shape_23.setTransform(26.85,38.5227);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2A1032").s().p("AiUF2QhcgkgWiIQgWiHA9ibQA+ibBthUQBrhTBdAkQBdAlAWCHQAWCIg9CaQg+CchtBTQhLA7hDAAQgeAAgdgMg");
	this.shape_24.setTransform(26.85,38.5106);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2A1032").s().p("AkWHZIAAuxIIuAAIAAOxg");
	this.shape_25.setTransform(29.9,48.725);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(2,1.7,55.9,94.39999999999999), null);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D0029").s().p("AiQB0IAOgcIgYAWIgZAZQAKgMAPgOIA1gxIgBgBIAAAAQgBgCgEgCQgDgCgDgBIgOgEIgegGIAtAHIAHADQAFADABACIABABIBDg6IgBAAIAAAAQgCgFgEgCIgJgFIgrgIIgWgDIAWACIAWACQANABAJADIAKAFQAGADACAGIA9gxQgJgGgSgEQgWgDgHgCIgdgIQgRgEgMgBQAMAAARAEIAeAHIAdAFQATADAKAGIAAAAIA0glIgEAAIgFgBIgDgBIgPgHQgSgMgJgFQgOgHgPgFQgMgEgOgBQAPABALADQAOAEAQAHIAcAQIAOAHQAJADAFgCQAAgBABAAQAAAAAAAAQABABAAAAQAAAAAAABQAigYAlgXIAQgJIgEANIgHADIgzAgIgFAOQgCAKABANIADAYIACAXQAAAQgGAdQgHAggCAOQABgLAHgjQAFgcAAgRQgFgfgBgPQgBgQACgIIACgKIguAfQAAALgHAaQgHAZgBAMIgJAlQgHAYgBAOQABgOAGgYIAIglQABgMAGgZQAFgXABgLIgQALIgeAVIgOAKIgEAdQgEATgDALIgLAeQgFAMgBALQABgLAEgNIAKgdQADgLACgRIAFgbIhAAzIAAABQABAKgEAQIgQAwIgGAPIgBADIABgDIAMgoQAEgJADgPQADgQgBgIIgBABQgfAagZAWIgDACQgDALgJAUIgMAgQAAgOAJgUg");
	this.shape.setTransform(37.3967,-87.888,0.7356,0.8036);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008BCB").s().p("AhvDKQgpgCgqgGIghgHQACg4AZhIQAyiPB0hKQBzhLAtA3QAWAcgBArIAqAZQAqAhgDAkQgEAsgWAgQgeArhQA1QhCArhwAAIgZAAgAg7CMQgBAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAABQgBABABAAQAAABAAAAQAAAAABABQABAAAAABQABAAAAAAQABAAAAgBQABAAAAgBQADgDgBgFQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAAAIgBAAgAiDB/QgFAHAAAEQAAAFAFgBQAFAAAEgGIAHgJQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIgBgDQgCgDgCAAQgFAAgGAKgAjEBwQgEACAAAEQgBAFAFABQAFABADgDIADgFQADgGgHgCIgBAAQgDAAgDADgAiMBUQAAAAAAABQgBAAAAABQAAAAAAABQABAAAAABIACADQABABAAAAQABABAAAAQABAAAAAAQABgBABAAQAAgBABAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgCgEIgCgBIgDABgAgDBRIgBADQAAAGAFAAQAFABABgGIAAgDQABgBAAAAQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQgFAAAAAGgAB6BKQgCAFAFAEQAFAEAEgEQADgDgCgEQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAgBAAIgBAAQgEAAgCAEgAgtA5IAAAEQABABAAABQAAABABAAQAAAAABAAQABAAAAgBQADgBACgDQABgEgCgDQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgHABABAGgAiKAvQgCACACADQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAIAHAAIAGgBIAFAAQABAAABAAQABgBAAAAQAAAAABgBQAAgBAAgBQgBgEgKgBQgMAAgCACgABGALQgFADgBAGIgBAHIgCAGQgEAHABAEQAAAGAGAAQAGABAEgFQAJgLABgOIgBgDQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAgBgBIgEAAQgDAAgDABgAhVAUIgBADQABABAAAAQAAABABAAQAAAAAAAAQABAAAAAAIAAAAIABACQABAAAAABQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABgBQAAAAgBgBQAAgBAAAAIgFgEQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAAAgAB+gKQgDABgBADIAAAAQgGAKAIAJQAAAAABABQAAAAABAAQABABAAAAQABAAAAAAQADAAACgCQADgDgBgEQABgGgCgFIgCgDIAAgBIgBAAIAAAAIgDgBIgCAAgAgngLQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIACADQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAgBgBAAIgBgEQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgBAAgAhmgqQgEABgBAFQAAABAAABQAAAAABABQAAAAABAAQAAAAABAAIATgDQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIgBgDQgDgDgGgBIgBAAQgFAAgEADgACJg/QgGADABAGQAAAGAGABQABABABAAQAAAAABgBQAAAAAAAAQABgBAAgBQADgGgEgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgCAAgAAGg8QAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABIABABQABAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIgCgBIgBAAIgDABgAgdhaQgIAAAAAFQAAAHAPgCQAFgBAAgDQACgFgFgBIgEAAIgFAAgABFhmQAFACAHgDQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgBgDQgKgFgJgDQgJgDgDAEQgDAEAFAFQAFAFAJgCg");
	this.shape_1.setTransform(38.0202,-89.6613,0.7356,0.8036);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D0029").s().p("ADVEwQgFglABgTIhKhwQgFAMgDAcIgBArIACArIgBArQABgOgCgdIgDgrIgBgsQABgaAGgRIACgCIhChfIgOgUIgHAwQgDAcgBAUIACA1QABAfgIAVQAHgUgBggIgEg1QAAgVADgfIAFg0IhLhiQgGATgCAoQgDA0gDAMQgDATgCAuQgCAqgFAXQAFgXAAgqQABguADgTQADgSABgvQACgtAFgTIg9hJIAAARQgDARgIAWIgQAlQgLAXgEAOQgKAdgEAwQgGA5gEAWQAEgWAEg6QAEgyAJgbIAOgmIAPgkQAIgVACgRQABgNgCgNIhEhNQgRgRgVgUQgqgngXgLIAIgSIAtAnQAwApANAPQA/BJAeAmQABgBAAAAQABAAAAAAQABAAABAAQAAAAABABIAAAAQAGAGARgBQAMgBAPgDIA0gNQAcgFAaACQAVAAAgAHQgggGgVAAQgaAAgcAGIgaAHIgZAHQgRAEgKABIgHAAIgHAAIgIgCIBCBVIABAAQASgGAiAEIAzAHIAzADQAaACAUAEQgTgDgbgBIgzgBIgzgGQgggDgQAGIBNBsQAHgHAKgEIAUgCQAMAAAZAEIAlAHQATAFAMACIgggFIglgGQgYgDgMABQgJAAgJADQgJADgEAGIgCACIBSB/IABgBQAFgFAIgBIANgBIAaACIAyAIIgzgFIgZAAIgMACQgHACgCADIgBAAIgCABIBABpIAdA4QgJgTgVgkIgegvIAGAZIAFAcQAEAjgFAYg");
	this.shape_2.setTransform(67.1228,-58.4749,0.7356,0.8036);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00C7D0").s().p("AB5FpQjYg3hfhxQhph8gdhUQgVg/AQhLQAMg8BUgiQAqgRAngFIAPgnQAWgsAfgWQBjhFCZCyQCaCyANECQAHCBgYBeQhZgFhsgcgACoDmQgCACgBADQgEADADADQACADAEAQQADALAJADQAJAEACgJQACgEgCgGIgDgKQgHgWgIAAQgDAAgEADgAEdD7QgDAEABAFQgBAFADAEQAEAGAIAAQAJAAACgHQABgHgFgGQgFgGgHgBIgBAAQgEAAgCADgAA8DuQgFAHAEAHQACAFAFgCQAFgBgCgFQgCgDACgDQACgFgEgCIgDgBQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABgADaC1IgGAFQgDADACAEQADAFAEgEIAFgEQAEgDgCgEQgBgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgDABgADGB0QgCAFAFACIAKACIAIAEQAJAEADAAQAEAAADgEQADgDgCgFQgCgEgHgDIgMgCIgKgBQgIAAgCAFgAgLBmQgDACgBAEIgBAGQgBAEACADQACAEAEABQAEABAEgDQADgCAAgEIACgGQABgJgIgDIgCAAQgDAAgDACgABIBSQgEAEAAAGQABAGAEAEQAAAAABABQAAAAABAAQAAAAABAAQABABAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAgBQACgDAAgEQABgEgBgEQgCgEgEgBIgCAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAgBABgACYA1QgDADACAFQADAEAEgDIACgCQAEABACgDQABgCgBgDQgBgDgDgBIAAAAQgEAAgGAEgAjYAhQgDABgDADQgEAGAEAGQAEAIALgEQAJgEgBgJQgBgIgJgBIgBAAQgEAAgCACgAhkgrQgKACABAKQgCACAAADQgFAYAJAUQAEAKAKACQAKACAEgKQACgFgBgFIgCgJQgBgEABgGIACgLQABgKgGgIQgGgHgKAAIgBAAgABkgVIgFAFQgDAEAEADQAEAEADgEIAEgFQAEgEgEgDIgDgBQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAgADAgwQAAAAgBABQAAAAgBABQAAAAAAABQAAABAAAAQAAABAAABQABAAAAABQAAAAABABQAAAAABAAQALAHATAIQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAgBQABgJgIgDQgFgIgJgCIgFAAQgGAAgGADgAizhfQgHAIgBAMQgFAGAEAGQADAEAFAAQAEACAEgDQAIgFADgIQAEgJgCgIIAAgCQgBgEgEgDQgEgDgFACIAAAAIgBAAIgBAAQgDACgBADgAAwh/IgCABQgFABACAFQABAEAFgBIACAAQAFgCgCgFQgBgDgDAAIgCAAgABpiYQAAAGAHADQAXAKAEgKQADgIgOgDQgEgDgKgCQgJAAAAAHgAihjAQgBABAAAAQgBAAAAABQgBAAAAABQAAAAgBABQgIAHABALQABAFAFAAQAKAAADgKQAEgJgIgHIgDgBIgBAAgAACjdQAMgFgEgJQgEgHgPAAQgPAAgUAFQAAAAgBAAQAAABgBAAQAAAAgBABQAAABAAAAQgBADACACQAKAHAKAAIAFgBQALAIAMgGg");
	this.shape_3.setTransform(67.1227,-56.4769,0.7356,0.8036);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D0029").s().p("AjTFiIAGg2IgZAyQgRAjgJAWQAFgPAUgrIA3hvIgDgBIAAAAQgDgDgHAAIgMgBIgZACIgyAIIAYgFIAZgGQAOgDAMgBIANgBQAJABAEAFIABABIBHiHIgCAAQgFgHgJgCQgJgCgJABQgMAAgYAFIgkAJQgbAHgJABQAJgCAagIIAkgLQAYgFANgCQALgBAIACQAMACAGAIIBFhyQgRgFggAGQghAIgRACIgzAFQgeADgVAFQAVgFAdgFIAzgHQARgDAhgIQAjgHASAEIAAABIAHgLIA0hQIgHACIgOABQgNAAgOgCQgjgIgSgCQgcgDgaACQgcADgZAIQAdgKAYgCQAdgEAZADQATACAjAFQAMACAOABQAQgCAGgFIABAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAABQAog7Asg7QA3hKA4g2QAcgbARgMIgHAfQgmAdg1A8IguA4QgfApgeAqQgCANADAMQADARAJAUIASAkQANAWAFANQAKAXAJA1QAKA7AFASQgIgZgIgzQgKgygLgZQgGgNgMgWIgTgkQgKgUgEgSIgCgRQghAtgWAgQAIAVAFAsQAFAuAEARQAFATAFAuQAEAqAGAWQgHgWgFgqQgGgvgFgRQgFgRgGgvQgFgmgIgUIgRAcIgiA0IgQAYIAKAzQAGAgABAUIABA1QABAeAJAWQgJgUgDggIgCg1QgCgTgGgcIgLgvIgMAUIg6BlIACABIAAABQAHAPAEAbIADAsIAAArIADArIgEgrIgDgrIgEgrQgEgagHgNIgCACIg7BwIgDAEQACAUgCAkIgBA7QgIgZACgig");
	this.shape_4.setTransform(25.3794,-45.2752,0.7356,0.8036);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00B4B7").s().p("AlDC7QgJkCCKi+QCKi/BoA9QA0AeAZBFIAZACQAfAEAbAJQBWAaASA7QAWBJgQBBQgVBWhfCFQhVB4jSBJQhCAXhHAQIg5AKQgghbgEiBgAkSEEQgHACgEAGQgFAHACAGQADAIAIgCQAIgBAEgGQACgFgBgEQAAgFgCgDQgCgDgEAAIgCAAgAimDrQgDAFgDAMQgDARABAEQADAIAJgEQAJgEACgMQACgQACgDQACgDgEgDQgBgDgCgCQgDgCgDAAQgEAAgEAGgAgyDlQgFADADAEQACACgBAEQgCAFAFABQAFABACgFQACgIgEgGQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgDABgAjUC9QgCADAEAEIAGAEQADADAEgFQACgEgEgDIgGgEIgDgBQgBAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABgAjUB2IgLADQgHADgCAFQgBAFADADQADAEAFgBQADAAAIgFIARgIQAGgCgDgFQgCgFgHAAQgFAAgHADgAAIBYQgEABgCAEQgCADABAEIACAGQABAEAEACQAEACADgCQAEgBACgDQACgEgBgEIgBgGQgBgEgEgCIgFgBIgDABgAhJBKQgEACgCAEQgBAEACAEQAAADACAEQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAQAEgFAAgGQAAgGgFgEIgDgBIgBAAgAicA/QAEADADgFQACgEgEgDQgHgEgDABQgDAAgBAEQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAQACAEAEgBgADPABQgIACgBAJQgBAJALADQAJADAFgJQADgGgFgGQgDgDgDAAQgCgCgDAAIgCAAgABMg3QgFAIACAKIADALQABAGAAAFIgCAKQAAAFACADQAEAKALgDQAJgDADgJQAIgWgHgXQgBgDgCgCQAAgLgKAAQgKAAgGAIgAhwgYQgDAEADADIAFAFQAEADADgEQADgDgDgEIgFgEIgDgCQgBAAAAAAQgBAAAAAAQgBABAAAAQgBABAAAAgAjYgtQgJADgFAIQgHAEACAJQAAAAAAABQABAAAAABQAAAAABAAQAAAAABABQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAPgGAOgKQACgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgFgCgFAAIgHABgACYh9QgFADAAAFIABABQgCAJAEAJQAEAIAIAEQAEACAFgCQAFgBACgEQAEgGgGgGQgCgLgHgIIgFgEIgBAAIAAgBIgBAAIgCAAQgDAAgDACgAhEiCQgCAFAFAAIADABQAFABABgFQABgFgFgBIgCAAIgCgBQgDAAgBAFgAiCigQgJABgFAEQgOAEAEAJQADAFAKgCQAHgCAHgEQAHgEgBgFQgBgHgFAAIgDABgACIjXQgHAHAFAJQAEAJAKgBQAFAAAAgFQABgKgJgHQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBgBAAIgBAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBABgAgOj+QgQABgDAIQgEAJAMAEQAOAFAKgJIAFABQAKgCAJgHQACgCgBgDQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAgBAAQgMgCgKAAIgMAAg");
	this.shape_5.setTransform(24.5241,-39.6129,0.7356,0.8036);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#252B8D").s().p("Ak9JuIhkzbINDAAIhkTbg");
	this.shape_6.setTransform(22.5721,90.7766,0.7356,0.8037);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D0029").s().p("ABWIAQAGgbgBgkQgBgZgFgqQgKhhgFgnQgKhMgMg8QgYiFgNhFQgXh3gbhQQgWhFg5h6IgTgmIAEAHIAQAfIAsBdQAaA3AOApQAkBlAlCkIAgCFQATBSALA2QAEAVAHAuQAHAtAFAXQAIAwADAYQAEAogFAhg");
	this.shape_7.setTransform(9.5762,4.3537,0.7355,0.8036);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#323C6D").s().p("AAAACQgngFgagHIBCAIQAlAFAcAIg");
	this.shape_8.setTransform(-5.8549,-39.1026,0.7355,0.8036);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#323C6D").s().p("AB4AEQhpgWiGAcQCBglBuAfg");
	this.shape_9.setTransform(-8.0062,-34.7083,0.7355,0.8036);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#323C6D").s().p("AB1gEQgLgBgcABIhNAJQgUAEg4gHQgxgEgbAKQARgIAUgBQAPAAArADQAkADAVgEIA5gGQAjgEAYADQAXAEAMAKQgNgKgWgCg");
	this.shape_10.setTransform(-7.9511,-30.058,0.7355,0.8036);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#323C6D").s().p("AhNAFQA0gCAZgEQA5gIAVgBQAtgEAiAGQgjgDgsADQgTACg7AHQgaAFgzACQg3ABgXADQAagFA0gCg");
	this.shape_11.setTransform(-7.0685,-24.6788,0.7355,0.8036);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#323C6D").s().p("Ai3AVQBVADBjgNQBMgLBrgWQivAtiJAAQgcAAgbgCg");
	this.shape_12.setTransform(-7.7856,-20.0594,0.7355,0.8036);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#323C6D").s().p("AjIAKQAWAEAcgCIAygIQATgEAgABQAmAAALgBQAhgBBDgKQA9gGAoALQgpgJg8AHQhCAJgiADQgKABgngBQggAAgTADIgyAGIgPABQgTAAgQgEg");
	this.shape_13.setTransform(-6.4801,-15.4373,0.7355,0.8036);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#323C6D").s().p("AjWAUQAVAEAhgJQAcgHA3ABQA3ABAagHIBRgOQAwgIAigCIAcAAQAMACAIAEQgIgEgMgBIgbABQgjADgvAIIhSAPQgYAGgsgBQg2gBgOABIgqAIQgMACgLAAQgKAAgHgCg");
	this.shape_14.setTransform(-6.9214,-11.5754,0.7355,0.8036);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#323C6D").s().p("AiBAQQA2gPAXgBQBdgQAjgEQBKgJA6AAQg4ABhLALIiAATQgWADg4ANQgwAMgeABQAdgCAxgNg");
	this.shape_15.setTransform(-5.5975,-7.5228,0.7355,0.8036);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#323C6D").s().p("AjyANQAkAJA3gJQBQgNALAAQA8gCA9gBIAegBIBMgLQAugGAeAJQgegIguAHIhMAMIiXAEIhbAMQgZADgVAAQgZAAgUgFg");
	this.shape_16.setTransform(-6.0388,-2.4798,0.7355,0.8036);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#323C6D").s().p("AjuAhQAhAEA3gUQA9gVAbgCQCZgTCVgIQiZANiVASQgZABg/AUQgrAPgeAAIgPgBg");
	this.shape_17.setTransform(-5.4872,3.3479,0.7355,0.8036);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#323C6D").s().p("AkEASQBvAWCVgoQBDgNBAAAIBCgCQAlgCAagKQgaALglADIhCACQhAABhDAOQheAYhLAAQgxAAgqgKg");
	this.shape_18.setTransform(-6.8846,7.9258,0.7355,0.8036);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#323C6D").s().p("Ah6AYQAZgCAlgHIA8gLIA/gHQAmgFAXgGIA+gMQAjgFAbAGQgbgFgjAFIg9ANQgfAIg+AHQg9AJgeAHQgoAHg2ACIheABIB9gFg");
	this.shape_19.setTransform(-4.0714,12.5793,0.7355,0.8036);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#323C6D").s().p("AjlARQAogKAKgCQAPgCBXgEQAjgDBDgJQA7gGAqADIBFADIAigBQATgCANgHQgLAHgVADQgWACgdAAIg0gCQgogDg9AHIhlAKIhEAEQgXAAgtAKQgcAHgUACQAOgCARgFg");
	this.shape_20.setTransform(-3.9794,19.9288,0.7355,0.8036);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#323C6D").s().p("AAAgGQC+ACBCgHQhOALiygDQilgChaARQBegVChADg");
	this.shape_21.setTransform(-2.7659,24.8003,0.7355,0.8036);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#323C6D").s().p("AkKATQArABA5gIQAhgFBCgKQBBgKBmgCICngDQgsAEhaACQhbACgqADQgiAChjAOQhFAKgvAAIgRAAg");
	this.shape_22.setTransform(-3.6117,29.7991,0.7355,0.8036);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#323C6D").s().p("AiOAMQg1gGggAHQAWgGAjABQA+AGAYABQAwACAkgFQAogDBLgLQBOgNAjgDIiOAXQhUAOg5AAIgGAAQgYAAg5gHg");
	this.shape_23.setTransform(0.9851,34.2268,0.7355,0.8036);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#323C6D").s().p("AgFAAQgEgiAJgaQgFAZAEAjIAIA9QgJgngDgWg");
	this.shape_24.setTransform(-1.3971,-43.7834,0.7355,0.8036);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#323C6D").s().p("AgCgCQAcgvAdgQQgZARgeAwQgfAygXAQQASgPAig1g");
	this.shape_25.setTransform(3.8719,-41.7946,0.7355,0.8036);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#323C6D").s().p("AgwAfIAughQAwgqAqgbQgsAigsAlIguAhQgbAUgOATQAMgUAbgVg");
	this.shape_26.setTransform(7.8619,-38.8013,0.7355,0.8036);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#323C6D").s().p("AAFAFQA/gtAegpQgdAtg9AsQhHAwgiAaQANgMBZhBg");
	this.shape_27.setTransform(10.2339,-36.3504,0.7355,0.8036);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#323C6D").s().p("AhJAZQAVgNAdgOIAxgZQARgJAggVQAdgQAYgDQgQACgTALIgxAdQgeASgSAJIhEAjQgkAWgTAbQAMgXAqgdg");
	this.shape_28.setTransform(13.9297,-31.8505,0.7355,0.8036);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#323C6D").s().p("AiFBSIAUgMQAVgMAmgTIA8geQAbgQAtgiIBHg4IhFA6QgoAgghAUIg7AdIg8AdIgUAMQgLAHgEAIQAEgIAKgIg");
	this.shape_29.setTransform(17.0923,-29.0582,0.7355,0.8036);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#323C6D").s().p("AicBJQATgHAEgEIARgTQAKgNAIgGQAQgMAcgNIAtgXQAfgQAOgGQAbgLAXgCQApgGAJgDQAZgGANgPQgNAQgZAHQgMAEgmAGQgWACgaALQgRAHgcAQIguAWQgcANgQAMQgIAFgKAMIgRATQgEAFgTAGQgPAFgDALQACgLAPgGg");
	this.shape_30.setTransform(20.5032,-23.0013,0.7355,0.8036);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#323C6D").s().p("AhmAmQBKgeAcgJQA8gUCSg2Qh/A0hOAZQgUAHhSAgQg/AZgpAKQAngMBAgag");
	this.shape_31.setTransform(23.583,-18.5516,0.7355,0.8036);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#323C6D").s().p("AiaAzIA3gFQBAgMBbgkICXg9Ih+A2QhJAeg1AQQgaAKg3ADQg2AEgaAKQAUgKAggDg");
	this.shape_32.setTransform(24.7782,-14.5338,0.7355,0.8036);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#323C6D").s().p("AhyAfQAmgKBOgOQBzgYBrg8QhjA8h6AcQhOANgnAJQhEAQgpAdQAogfBFgQg");
	this.shape_33.setTransform(27.4076,-9.6723,0.7355,0.8036);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#323C6D").s().p("Ai4AtQAUgGApgKIA9gSQAkgLAagDQA0gIBFgVIB4gpQhlAmgSAGQg9AUg9AJQgZAEgkAKIg9ASQgpAJgUAGQgkAKgVARQAVgSAjgLg");
	this.shape_34.setTransform(29.706,-4.7103,0.7355,0.8036);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#323C6D").s().p("Ah7AmQBvgeAMgGIB2gyQBIgeAxgNQgxAOhHAgIh2AyQgOAHhtAcQhMATgoAhQAngjBMgTg");
	this.shape_35.setTransform(30.4598,-0.6122,0.7355,0.8036);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#323C6D").s().p("Aj+BdQA/AOBMgZQAjgLBeguQAYgMBdgZQBLgVAjgiQAMgNACgSQgBASgMAOQgfAgg9ATQhGARghAMQheAvgzASQg4AUgxAAQgbAAgYgGg");
	this.shape_36.setTransform(31.9492,2.181,0.7355,0.8036);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#323C6D").s().p("AkHBmQAGAAAHgCIAQgIQASgJAdgSIAtgdQBEgiBBgTQANgFB9gfQBUgVAzgbQgcAQgmAOQgkANhDAQQhJASgeAKQhEAVhAAgIguAcQgdARgSAJIgRAHQgGACgFAAIgCAAg");
	this.shape_37.setTransform(34.6429,10.1081,0.7355,0.8036);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#323C6D").s().p("Ai8A+IA4gkQANgHAwgUQAjgNA8gRIBfgdQAWgIArgGQAugGAUgGQgYAIgqAFQgXADgpANIhAAUQhVAYgpAOQgsASgQAJIg5AkQghAUgdADQAcgEAhgVg");
	this.shape_38.setTransform(34.4131,16.7848,0.7355,0.8036);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#323C6D").s().p("AjbA+QAzgXATgGQBLgSBIgVQCygpB0goQhmAmi/AvQhRAWhCAPQgSAGg1AXQgsATgcAFQAcgGAsgUg");
	this.shape_39.setTransform(37.6309,20.8428,0.7355,0.8036);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#323C6D").s().p("AjdAfQA1gVBKgIQAZgCBqgFQCngJBUg1Qg5AnhSAPQgwAIhlAFQhkAEgxAJQhRAPg5AoQAfgXAjgOg");
	this.shape_40.setTransform(38.0354,27.3717,0.7355,0.8036);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0D0029").s().p("AgCATQgSgDgOgGQgSgHgNgMQAQgIATgBQAPgCASACQARADAQAGQASAJAMALQgQAHgTACIgMAAIgVgBg");
	this.shape_41.setTransform(-5.8381,-39.1529,0.7355,0.8036);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0D0029").s().p("Ah3ARQAVgQAlgKQAggJAdAAQAfgCAeAHQAlAJAWAPIixAJQgjAAgbgDg");
	this.shape_42.setTransform(-7.9896,-35.2537,0.7355,0.8036);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0D0029").s().p("AglAWIgogHIgkgIQgUgDgSADQAOgMAXgFQAQgEAZAAIAmABIAIAAIAbgDQAygGAbABQAZACAQAEQALAEAIAEQAKAHAFAHQgOgGgWACQgQAAgVAFIhMANQgQACgNAAIgLgBg");
	this.shape_43.setTransform(-7.9344,-29.9446,0.7355,0.8036);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0D0029").s().p("AhMAXIhPgJQAagOA0gGIBLgLQAsgGAjAAQAvABAhAQQgvAGgfAGQg7AMgRACIgnAEIgSAAIgWgBg");
	this.shape_44.setTransform(-7.0517,-24.7613,0.7355,0.8036);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0D0029").s().p("AhaAdQg1gCgogNQAfgGA9gIIBbgMIBagLQA+gGAgAAQgkATg0APQguANguAGQgkAGgnAAIgTgBg");
	this.shape_45.setTransform(-7.7689,-19.5228,0.7355,0.8036);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0D0029").s().p("AiVAYQgcgBgXgLQAWAAAbgHIAygLQAggHAVAAIAwgBIAwgFQAegDAVAAQAdgBAXADQAfAFATALQgpAAg6AKQhFAOggADIgZABIgagCQgOgBgiACIgtABIgGAAg");
	this.shape_46.setTransform(-6.4633,-15.5588,0.7355,0.8036);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0D0029").s().p("AhsAaIgagBIgaACIgdAAQgRgBgLgFQAQAAAlgNIAbgIIAHgBIBNgEIAagCQANgCANgDQBMgNAhgDQAdgCAbABQAUACAJACIAOAFQAJAFACAEQgEgCgJgBIgNAAIgaAEIg2ALQhQATgbAFQgNADgPABIgdABIg4gEg");
	this.shape_47.setTransform(-6.7024,-11.6399,0.7355,0.8036);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0D0029").s().p("AjPAhQAUgFAegMIAygRIAagHIAagGIA0gJQA3gJAxgCQA9gDAuAKQglAJhDANIjMAgQgaAFgbADIgVABQgTAAgOgDg");
	this.shape_48.setTransform(-5.5807,-7.7142,0.7355,0.8036);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0D0029").s().p("Ai0AaQgmgCgYgLQAYACAkgIIB5gXICYgEIAcgBIAfgDIAfgBQATAAANACQASAEAMAHQgYgDgkAIIg6AOQgSAEgPACIiXAGIg7AEQggADgYAAIgGAAg");
	this.shape_49.setTransform(-6.022,-2.434,0.7355,0.8036);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0D0029").s().p("AjuAhQAQAAAOgEIAbgKIA3gYQAPgGAQgFIBcgOQBCgGA2gCQBGgBA1AHQg0ANhEALQgyAIhGAHIhYAJIgcAGQgyANgKACQgQACgQAAQgRgBgNgFg");
	this.shape_50.setTransform(-5.4703,3.3238,0.7355,0.8036);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0D0029").s().p("AkEAMQBBACBBgJQAfgFAggGIBAgPQAhgIAggCIAjgCIAhAAIBCAEQAkACAcgFQgNAIgRAGQgNAFgUADQgWAEgsADIhBAGQgdAEghAIIhAAOQgnAGgcAAIgJAAQhFAAg3gXg");
	this.shape_51.setTransform(-6.8679,8.3885,0.7355,0.8036);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0D0029").s().p("Aj3AbQAqgJBSgKQAigFAagFIA+gMQAUgEAqgEIA8gIQAtgGASgBQARAAAQACQASACANAGQgNAAgSACIgeAHIg7ARIg3ANIiBAVQgdAEgkABIgFAAQg3AAhCgLg");
	this.shape_52.setTransform(-4.0544,12.7679,0.7355,0.8036);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0D0029").s().p("AkOAcQAPgCASgGIAggMQAVgIANgCIAjgGIBEgHIBCgIQAtgFAXgBIAkAAIAjADIBDAIIAiACIAIAAIARgCIAIgCQgLAKgVAEQgMADgXADQgcACgpAAIghABIgQABIiYAQIhEABIhCAFQgRADgSABIgIAAQgPAAgMgCg");
	this.shape_53.setTransform(-4.6429,19.7109,0.7355,0.8036);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0D0029").s().p("AAAATIh/gDQg/AAhBACQA1gWBKgIQA8gHBEABICAAFICAAHQg0AQhMAGQgnADg7AAIgeAAg");
	this.shape_54.setTransform(-2.7489,24.3802,0.7355,0.8036);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0D0029").s().p("AjHAcQgnAAgcgGQAjgFBfgUIBDgOQAggGAjgCQA6gFBNAEQBQAEA2AGQg0ANhSAGIjFAPIhCAHQgkAEgZAAIgIgBg");
	this.shape_55.setTransform(-3.5947,29.5671,0.7355,0.8036);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0D0029").s().p("AhVAaQgPgBgPgDIg3gLQgigGgXABQAKgFASgEIAdgEIA6AAIA5AAQAYgBAfgDIBwgMQBGgGAuADQg0ASg7AOQhAAPgzAFIg5ACIgegCg");
	this.shape_56.setTransform(1.0024,34.8403,0.7355,0.8036);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0D0029").s().p("AgKAhQgHgQgBgPQgCgOAEgSQACgJAEgHQAGgKAGgEIALAeQAEAPACAOQABAOgBAPQgDAUgGANQgMgLgIgRg");
	this.shape_57.setTransform(-1.6057,-43.7804,0.7355,0.8036);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0D0029").s().p("AglAZQALgYAJgMQAMgUARgPQAIgHAMgGIALgFIAMgBIgUAmIgUAjQgOAWgNANQgWAUgVADg");
	this.shape_58.setTransform(3.8709,-41.7915,0.7355,0.8036);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0D0029").s().p("AhLAsQAGgKANgOQAHgHAkgdIAWgRQALgJANgHQAcgQAbgGQgLASgZAcIgfAcIgLALQgSAOgeAQIgYANIgZAPQACgNAKgPg");
	this.shape_59.setTransform(7.8796,-38.7982,0.7355,0.8036);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0D0029").s().p("Ag2AfQATgRAfgWIAygkIA0glQgHAdgZAeQgWAYgbAUQgWARggARQgiARgaAJQANgWAegdg");
	this.shape_60.setTransform(10.2517,-36.3473,0.7355,0.8036);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0D0029").s().p("AhtAqQAMgNARgOQAcgVAmgTIBBghQATgIASgGQAZgHAPADQgSAJgOAMIgdAXQgQANgPAKIgiARIhCAgIggAQQgTAKgMAMQACgRAQgTg");
	this.shape_61.setTransform(13.9478,-31.8854,0.7355,0.8036);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0D0029").s().p("AiPBXIAIgJIARgQQAPgKAXgPIBWgvIA/grQAygfAegNQgbAjgiAhQgPAPgTAOIgnAbQgPAJgZALQgTAJgWAHIg/AYIgKAFQgFACgDAEQAAgEAEgHg");
	this.shape_62.setTransform(17.1106,-29.0549,0.7355,0.8036);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0D0029").s().p("AiqBPQADgEAIgEIALgGIAHgHIAOgUIAIgMIALgKQAPgOAegPIAsgYQAbgPAUgGQALgFAPgEQANgCAPgBIAxgEQAcgCARgPQgJAYgeALQgNAGgmAKIgsAPIhZAsQgfANgMAIIgSANQgOAOgGAEQgGAFgIACIgOADIgLADQgEACgEAGQABgHAEgGg");
	this.shape_63.setTransform(20.6595,-23.1888,0.7355,0.8036);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0D0029").s().p("AhrAZQA8gcAqgOQA0gSAzgPQBCgTAqgGQgrAcg2AZQgxAWg2ASQhDAYgjALQhAAUgtADg");
	this.shape_64.setTransform(23.6017,-18.5482,0.7355,0.8036);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0D0029").s().p("Ai1AyIAbgIIA1gKIAZgGIBLgaQA6gUAsgPQBBgWApgGQgqAcg1AcQgwAYg0ATQgfALgVAGQgNADgPADQgNACgQABQgTABglgCQgjgBgSAEQAIgHARgHg");
	this.shape_65.setTransform(24.7969,-14.5303,0.7355,0.8036);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0D0029").s().p("AiuApQAagOAfgJQAbgJBZgSIBwgeQAlgLBMgbQgqAmg8AcQgbAMgeAKIg7AQQgWAFgkAGIg6AJQgjAFgWAGQggAIgYAMQARgVAggQg");
	this.shape_66.setTransform(27.4264,-9.6687,0.7355,0.8036);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0D0029").s().p("AjXA0QAOgIAPgHQARgGArgPIA7gUQAjgLAcgFIA8gLIA9gOIA9gPQAkgIAbgFQg/Akg0AVQgbALgiAIQgQAEgPADIggAGQgVAEgmAKIg9APIg+AKQgqAIgSALQAIgMARgKg");
	this.shape_67.setTransform(29.725,-4.7066,0.7355,0.8036);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0D0029").s().p("Ai7AxQAYgNAlgNQAZgIAlgKIA7gSIB2guQAcgKAigKIAvgKIARgCQgOAFgsAXIg5AeQhFAigwAUIg+AUIg/ANQgiAHgbAHQgjAJgYAPQARgYAigTg");
	this.shape_68.setTransform(30.4789,-0.6084,0.7355,0.8036);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0D0029").s().p("Aj+BZQAnACAegHQAcgFAmgOQAqgRBTgqIAigOQANgFAXgFIBEgRQAsgMAVgJQARgHALgLIAGgGIAFgGQAEgGADgKQACATgMAQQgJAOgRANQgYARgqARQgPAGg1APIgfALIggAOIhAAeQglAPgfAIQgkAKglAAQgngBgggNg");
	this.shape_69.setTransform(31.9842,2.5055,0.7355,0.8036);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0D0029").s().p("AkJBlQAGAAAKgFIAPgJIAdgVIAdgVQAPgMAPgKIAJgEIA5gbQAegOAmgMQAogNBkgUQBTgQA3gTQgyAnhRAZIhFAUIhCATQglALgdAMIg+AYIgEACIgeAQIghARQgZALgJACQgLAFgGABIgKAAQgFABgEgCg");
	this.shape_70.setTransform(34.506,10.1595,0.7355,0.8036);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0D0029").s().p("Aj5BXQAOgEAQgLQAIgFASgOIA1gpIA+gfQAegNAigKIBAgSIBBgQIAhgGIAjgDQAwAAATgCQgVANgrAMIk0BpIg7AdQgTAIgOAEIgRADIgJABIgJgBg");
	this.shape_71.setTransform(34.4324,16.8091,0.7355,0.8036);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0D0029").s().p("AkjBYQAZgLApgaQAqgaAcgLICTgsICVggQBigTA1gGQg8AkhQAdQgfAMgrALIglAKIgkAJIhJAUQgYAGgOACIglAGQgLACg8ATQgsANgcAAIgFAAg");
	this.shape_72.setTransform(37.6504,20.8527,0.7355,0.8036);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0D0029").s().p("AjiAUQAhgSAogKQA5gPBfgFIBJgDIBJgEQBPgHBAgZQgZAbgmATQgiARgnAJQg8APhcAEIhJADQgrACgdADQhPAIg/AcQAZgcAkgUg");
	this.shape_73.setTransform(38.0549,27.3761,0.7355,0.8036);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#008BCB").s().p("AjUJNQAlj4BAkSQCAomCIiMQgrCaiIISQBxkqBCgxQg9DTjlKOQBAiPBKiVQCXkoA9gkQg8CriREKQhHCFg8Bjg");
	this.shape_74.setTransform(50.1012,0.2621,0.7356,0.8037);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0D0029").s().p("AiGMsQBKs6DDsfQh3IbhIJMQgiEcgPDYg");
	this.shape_75.setTransform(36.2658,-14.9581,0.7356,0.8036);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#0D0029").ss(2,1,1).p("ABXhDIitCH");
	this.shape_76.setTransform(158.7097,64.8579,0.7356,0.8037);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#0D0029").ss(2,1,1).p("AhWhDICtCH");
	this.shape_77.setTransform(209.3176,64.8579,0.7356,0.8037);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#0D0029").ss(2.2,1,1).p("AGUAAIsnAA");
	this.shape_78.setTransform(183.6642,59.6541,0.7356,0.8037);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00C7D0").s().p("AivJCIEhyDIA+AAIkhSDg");
	this.shape_79.setTransform(145.8738,96.101,0.7356,0.8037);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0F236A").s().p("AHYHYQhhhJjGAAQj4AAhog+Qh0hGgljGIgkjPQgWh7gThHQgyjJhJgLQByAFA5DbQAiCAAvEyQAmC8CzAsQA/AQBdABQA1ABBfgCQCDgBBGAuQBFAsAOBeQgIglgxgkg");
	this.shape_80.setTransform(110.4476,45.9775,0.7356,0.8036);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#001781").ss(1.8,1,1).p("Aj5h5IHzDz");
	this.shape_81.setTransform(121.6668,109.1799,0.7355,0.8036);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#001781").ss(1.8,1,1).p("AD6h5InzDz");
	this.shape_82.setTransform(112.583,109.1799,0.7355,0.8036);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#001781").ss(3.5,1,1).p("AC1lUIlpKq");
	this.shape_83.setTransform(96.5299,114.2223,0.7355,0.8036);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#001781").ss(3.5,1,1).p("Ai0lUIFpKq");
	this.shape_84.setTransform(137.6635,114.2462,0.7356,0.8036);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#252B8D").s().p("AFaIFQjhAEiFAAQi7AAhRh4Qg9hagpj6Qgei4g9jlIg3jAQByAFA5DbQAiCAAvEyQAmC8CzAsQA/AQBdABQA1ABBfgCQCDgBBGAuQBFAsAOBeQgWgbihgBg");
	this.shape_85.setTransform(110.4476,45.9775,0.7356,0.8036);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00C7D0").s().p("AByJCIkhyDIA+AAIEhSDg");
	this.shape_86.setTransform(222.1535,96.101,0.7356,0.8037);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#252B8D").s().p("AqkAjIAAhFIVJAAIAABFg");
	this.shape_87.setTransform(181.2368,47.1368,0.7356,0.8037);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#434040").s().p("Ak0BMIAJgYIIRiAIBPCag");
	this.shape_88.setTransform(175.297,38.1557,0.7356,0.8037);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#130031").s().p("Aj8AZIAAgxIH5AAIAAAxg");
	this.shape_89.setTransform(180.4918,42.8031,0.7356,0.8036);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0D0029").s().p("AnnEhIBnpBINoAAIhnJBg");
	this.shape_90.setTransform(185.4568,-3.6671,0.7356,0.8036);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00C7D0").s().p("AoTE6IBxpzIO2AAIhxJzg");
	this.shape_91.setTransform(185.4568,-3.647,0.7356,0.8036);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#004782").s().p("AoJFKIgUgfICGpVIOhgfIAUAfIhxJ0g");
	this.shape_92.setTransform(186.2108,-2.4013,0.7356,0.8036);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#434040").s().p("Ah0E7IBxp1IB5AAIhyJ1g");
	this.shape_93.setTransform(183.8931,15.4832,0.7355,0.8036);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#434040").s().p("AhqFKIgVgfICFpVIBlgfIAVAfIhxJ0g");
	this.shape_94.setTransform(184.6654,16.7287,0.7355,0.8036);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#252B8D").ss(3).p("ACdCnIk5AAIAAlNIE5AAg");
	this.shape_95.setTransform(201.0423,-87.1783,0.7356,0.8037);

	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(207.3,-75.55,0.7356,0.8037,0,0,0,24.4,31.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#008BCB").s().p("AicCmIAAlMIE5AAIAAFMg");
	this.shape_96.setTransform(201.0423,-87.1783,0.7356,0.8037);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#252B8D").ss(3).p("AHML/IuXAAIAA39IOXAAg");
	this.shape_97.setTransform(140.5592,-76.63,0.7356,0.8037);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(125.45,-79.6,0.7356,0.8037,0,0,0,67.2,98.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#008BCB").s().p("AnLL/IAA39IOXAAIAAX9g");
	this.shape_98.setTransform(140.5592,-76.63,0.7356,0.8037);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#21113B").ss(0.9).p("AGOAAIsbAA");
	this.shape_99.setTransform(-213.2011,11.6221,0.7356,0.8036);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#21113B").ss(0.9).p("AGOAAIsbAA");
	this.shape_100.setTransform(-213.2011,22.7524,0.7356,0.8036);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#21113B").ss(0.9).p("AGOAAIsbAA");
	this.shape_101.setTransform(-213.2011,33.8426,0.7356,0.8036);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#21113B").ss(0.9).p("AGOAAIsbAA");
	this.shape_102.setTransform(-213.2011,44.9729,0.7356,0.8036);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#21113B").ss(0.9).p("AGOAAIsbAA");
	this.shape_103.setTransform(-213.2011,56.1033,0.7356,0.8036);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#21113B").ss(0.9).p("AGOAAIsbAA");
	this.shape_104.setTransform(-213.2011,67.2336,0.7356,0.8036);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#21113B").ss(0.9).p("AGNAAIsZAA");
	this.shape_105.setTransform(-212.7046,78.163,0.7356,0.8036);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#252B8D").s().p("AgnAoQgRgRAAgXQAAgWARgRQARgQAWAAQAYAAAQAQQARARAAAWQAAAXgRARQgQAQgYAAQgWAAgRgQg");
	this.shape_106.setTransform(-230.726,155.8544,0.7356,0.8036);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#252B8D").s().p("AgnAoQgQgRAAgXQAAgWAQgRQARgQAWAAQAYAAAQAQQAQARAAAWQAAAYgQAQQgQAQgYAAQgWAAgRgQg");
	this.shape_107.setTransform(-167.7984,155.8544,0.7356,0.8036);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#252B8D").s().p("AgnAoQgQgRgBgXQABgWAQgRQAQgQAXAAQAXAAARAQQAQARABAWQgBAYgQAQQgRAQgXAAQgXAAgQgQg");
	this.shape_108.setTransform(-181.1856,155.8544,0.7356,0.8036);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#252B8D").s().p("AgnAoQgRgQAAgYQAAgWARgRQARgQAWAAQAYAAAQAQQAQARABAWQgBAXgQARQgQAQgYAAQgWAAgRgQg");
	this.shape_109.setTransform(-217.8904,155.8544,0.7356,0.8036);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#252B8D").ss(2.6).p("Aj5BaQAAhFAygxQAxgxBGAAICiAAQBFAAAxAxQAyAxAABF");
	this.shape_110.setTransform(-196.89,147.0848,0.7356,0.8036);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#252B8D").ss(2.6).p("AmsBaQAAhFAxgxQAxgxBGAAIIJAAQBGAAAxAxQAxAxAABF");
	this.shape_111.setTransform(-196.89,147.0848,0.7356,0.8036);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#0D0029").s().p("AgjInQhKAAg1g0Qg0g1AAhKIAAuaQAaAAASASQASATAAAaIAANIQAAA4AoAnQAoAoA3AAICpAAQAaAAATASQASATAAAag");
	this.shape_112.setTransform(-168.0603,44.8136,0.7355,0.8036);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#004782").s().p("AmxInQhLAAg0g0Qg1g1AAhKIAAuaIMdAAQAaAAASASQASATAAAaIAANIQAAA4AoAnQAnAoA4AAICpAAQAbAAASASQATATAAAag");
	this.shape_113.setTransform(-197.3897,44.8136,0.7355,0.8036);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#21113B").s().p("AjRAXIAAgtIGjAAIAAAtg");
	this.shape_114.setTransform(-196.3383,90.6596,0.7356,0.8036);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#252B8D").s().p("Ag4CpIAAlRIBxAAIAAFRg");
	this.shape_115.setTransform(-196.3751,127.1647,0.7356,0.8036);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#E2DFCF").s().p("AggDcIAAm3IBBAAIAAG3g");
	this.shape_116.setTransform(-196.3751,109.6052,0.7356,0.8036);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#72183D").ss(0.7).p("ABuAAIjbAA");
	this.shape_117.setTransform(-211.3806,35.6508,0.7356,0.8036);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#56ACDE").s().p("Ai8hFIAXgXQAfgZAhgOQBrguBjBWQBeBQgLBWQgFArgZAeg");
	this.shape_118.setTransform(-78.6606,-46.513,0.7356,0.8036);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#002A85").s().p("AgZgDIANgTIAmAbIgLASg");
	this.shape_119.setTransform(-64.6353,-35.6115,0.7356,0.8036);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#0D0029").s().p("AgWAOIAegnIAPAMIgbAng");
	this.shape_120.setTransform(-62.7229,-33.8636,0.7356,0.8036);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#0D0029").p("AD3CNInKlHIgfApIHcFP");
	this.shape_121.setTransform(-46.5412,-20.9495,0.7355,0.8036);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#002A85").s().p("Aj0iTIAfgoIHKFGIgNAxg");
	this.shape_122.setTransform(-46.3845,-20.8384,0.7355,0.8036);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00C7D0").s().p("AidAWIAAgrIE7AAIAAArg");
	this.shape_123.setTransform(-51.6526,101.8301,0.7356,0.8036);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAAADIAAgF");
	this.shape_124.setTransform(-213.0198,28.8426,0.7355,0.8036);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgBAGQABgGACgF");
	this.shape_125.setTransform(-210.6294,25.1662,0.7355,0.8036);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgBAEIADgH");
	this.shape_126.setTransform(-210.6294,28.3203,0.7355,0.8036);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCAEIAFgH");
	this.shape_127.setTransform(-209.9122,28.5412,0.7355,0.8036);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAAACIABgD");
	this.shape_128.setTransform(-209.5996,30.3493,0.7355,0.8036);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgBADQABgDABgD");
	this.shape_129.setTransform(-210.4271,30.0881,0.7355,0.8036);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAAAFQAAgFABgE");
	this.shape_130.setTransform(-211.5856,29.7064,0.7355,0.8036);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AACADQgCgDgBgD");
	this.shape_131.setTransform(-212.9095,29.8069,0.7355,0.8036);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AABABIgBgB");
	this.shape_132.setTransform(-215.1161,27.7377,0.7355,0.8036);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAEABIgHgB");
	this.shape_133.setTransform(-214.8587,29.8471,0.7355,0.8036);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AADACIgFgD");
	this.shape_134.setTransform(-214.6748,28.9631,0.7355,0.8036);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AADADIgFgF");
	this.shape_135.setTransform(-213.7186,28.1997,0.7355,0.8036);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AADAEIgFgH");
	this.shape_136.setTransform(-213.2589,27.1149,0.7355,0.8036);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AADAGIgFgL");
	this.shape_137.setTransform(-212.6521,26.1104,0.7355,0.8036);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAAAEIAAgH");
	this.shape_138.setTransform(-211.5672,25.4676,0.7355,0.8036);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAAAFQAAgDABgG");
	this.shape_139.setTransform(-210.8868,27.135,0.7355,0.8036);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAAAEQABgEAAgD");
	this.shape_140.setTransform(-211.9717,28.1395,0.7355,0.8036);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAAABQAAAAABgB");
	this.shape_141.setTransform(-208.5147,30.1886,0.7355,0.8036);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCACQADgBACgB");
	this.shape_142.setTransform(-208.6802,28.9631,0.7355,0.8036);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgBABIADgB");
	this.shape_143.setTransform(-208.7905,24.5234,0.7355,0.8036);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAAABIACgB");
	this.shape_144.setTransform(-207.8895,25.7087,0.7355,0.8036);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCABIAFgB");
	this.shape_145.setTransform(-207.7424,27.356,0.7355,0.8036);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgFABQAFABAGgC");
	this.shape_146.setTransform(-208.6618,28.1484,0.7355,0.8036);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCABIAGgB");
	this.shape_147.setTransform(-209.1031,26.8136,0.7355,0.8036);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgBACIADgD");
	this.shape_148.setTransform(-209.3789,25.6082,0.7355,0.8036);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgBABIADgB");
	this.shape_149.setTransform(-209.7467,24.4028,0.7355,0.8036);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgBACIADgD");
	this.shape_150.setTransform(-207.8711,21.6305,0.7355,0.8036);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCADIAFgF");
	this.shape_151.setTransform(-207.6688,24.0211,0.7355,0.8036);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgBABQACAAABgB");
	this.shape_152.setTransform(-207.0988,22.3537,0.7355,0.8036);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCACIAFgD");
	this.shape_153.setTransform(-208.2756,22.8359,0.7355,0.8036);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCADIAFgF");
	this.shape_154.setTransform(-208.2573,17.2309,0.7355,0.8036);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCADIAFgF");
	this.shape_155.setTransform(-206.8046,18.818,0.7355,0.8036);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgBADIADgF");
	this.shape_156.setTransform(-207.7608,18.5167,0.7355,0.8036);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCADIAFgF");
	this.shape_157.setTransform(-207.4849,20.0836,0.7355,0.8036);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCAEIAFgH");
	this.shape_158.setTransform(-209.0296,21.9921,0.7355,0.8036);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAAADIABgF");
	this.shape_159.setTransform(-209.4893,20.7667,0.7355,0.8036);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAAADIABgF");
	this.shape_160.setTransform(-210.4087,19.943,0.7355,0.8036);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgBAGQABgGACgF");
	this.shape_161.setTransform(-210.2984,22.1729,0.7355,0.8036);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAAADIAAgF");
	this.shape_162.setTransform(-211.0155,21.8917,0.7355,0.8036);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAAABIAAgB");
	this.shape_163.setTransform(-211.5672,24.0011,0.7355,0.8036);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AACAFQgCgEgBgF");
	this.shape_164.setTransform(-212.6521,24.4229,0.7355,0.8036);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AACACQgCgBgBgC");
	this.shape_165.setTransform(-214.73,26.5725,0.7355,0.8036);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAEADIgHgF");
	this.shape_166.setTransform(-214.8771,25.327,0.7355,0.8036);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAEADQgEgCgDgD");
	this.shape_167.setTransform(-215.2448,21.9519,0.7355,0.8036);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AACADIgDgF");
	this.shape_168.setTransform(-213.5899,24.222,0.7355,0.8036);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AABACIgBgD");
	this.shape_169.setTransform(-213.7002,22.0725,0.7355,0.8036);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AADAEIgFgG");
	this.shape_170.setTransform(-214.3622,23.7399,0.7355,0.8036);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAAAEQAAgDAAgE");
	this.shape_171.setTransform(-211.9717,22.193,0.7355,0.8036);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AACADQgDgCABgD");
	this.shape_172.setTransform(-212.6728,22.6752,0.7355,0.8036);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAAAGIAAgL");
	this.shape_173.setTransform(-211.6039,20.0234,0.7355,0.8036);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AABAEQgBgEgBgD");
	this.shape_174.setTransform(-212.7072,20.2444,0.7355,0.8036);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAEADQgEgCgCgD");
	this.shape_175.setTransform(-214.1415,21.0479,0.7355,0.8036);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AADAEIgFgH");
	this.shape_176.setTransform(-214.4357,19.3403,0.7355,0.8036);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AABABIgBgB");
	this.shape_177.setTransform(-213.5347,17.1908,0.7355,0.8036);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AABAEIgBgH");
	this.shape_178.setTransform(-212.3579,16.4073,0.7355,0.8036);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AABADIgCgG");
	this.shape_179.setTransform(-212.8911,18.1551,0.7355,0.8036);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAAADIAAgF");
	this.shape_180.setTransform(-210.9603,16.0055,0.7355,0.8036);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAAAEIAAgH");
	this.shape_181.setTransform(-210.9971,18.4564,0.7355,0.8036);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAAAEQAAgEAAgD");
	this.shape_182.setTransform(-211.7143,17.472,0.7355,0.8036);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCAEQACgDADgE");
	this.shape_183.setTransform(-208.6986,16.9296,0.7355,0.8036);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCAFQACgFADgE");
	this.shape_184.setTransform(-209.7283,17.2109,0.7355,0.8036);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgEADIAJgF");
	this.shape_185.setTransform(-208.5515,19.4609,0.7355,0.8036);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgDADIAHgF");
	this.shape_186.setTransform(-209.4157,18.9787,0.7355,0.8036);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgDAAIAHAA");
	this.shape_187.setTransform(-207.2459,30.8113,0.7355,0.8036);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgDAAIAHAB");
	this.shape_188.setTransform(-206.6575,29.9475,0.7355,0.8036);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgFAAIAMAA");
	this.shape_189.setTransform(-206.7862,28.8024,0.7355,0.8036);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCAAIAFAA");
	this.shape_190.setTransform(-205.4622,24.6037,0.7355,0.8036);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCAAIAFAB");
	this.shape_191.setTransform(-206.069,25.6685,0.7355,0.8036);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCAAIAFAB");
	this.shape_192.setTransform(-206.3265,27.6372,0.7355,0.8036);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCAAIAGAB");
	this.shape_193.setTransform(-206.9701,26.0703,0.7355,0.8036);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgBAAIADAA");
	this.shape_194.setTransform(-204.5796,21.7511,0.7355,0.8036);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgDAAIAGAA");
	this.shape_195.setTransform(-206.3816,23.76,0.7355,0.8036);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCAAIAGAA");
	this.shape_196.setTransform(-205.2416,22.6551,0.7355,0.8036);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCAAIAFAA");
	this.shape_197.setTransform(-204.5428,20.5457,0.7355,0.8036);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgFAAIALAB");
	this.shape_198.setTransform(-206.2713,21.4497,0.7355,0.8036);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgBABIADgB");
	this.shape_199.setTransform(-205.6093,16.2667,0.7355,0.8036);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgBACQABgBABgC");
	this.shape_200.setTransform(-206.9333,15.0814,0.7355,0.8036);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCABQAEABABgC");
	this.shape_201.setTransform(-205.8484,19.51,0.7355,0.8036);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCABQADAAACgB");
	this.shape_202.setTransform(-205.7013,18.356,0.7355,0.8036);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgBACIADgD");
	this.shape_203.setTransform(-206.069,17.3314,0.7355,0.8036);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCADIAFgF");
	this.shape_204.setTransform(-206.7862,16.4073,0.7355,0.8036);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCAEQACgEADgD");
	this.shape_205.setTransform(-207.7056,15.664,0.7355,0.8036);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCAFQACgEADgF");
	this.shape_206.setTransform(-208.7537,14.9609,0.7355,0.8036);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAAAGIAAgK");
	this.shape_207.setTransform(-209.949,14.78,0.7355,0.8036);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AABAEIgBgH");
	this.shape_208.setTransform(-211.5488,14.2577,0.7355,0.8036);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AACAEQgCgEgBgD");
	this.shape_209.setTransform(-212.6889,14.76,0.7355,0.8036);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AADAEQgDgDgCgE");
	this.shape_210.setTransform(-213.3141,15.1617,0.7355,0.8036);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAEAAIgHAA");
	this.shape_211.setTransform(-215.8517,30.0881,0.7355,0.8036);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAEAAIgHAC");
	this.shape_212.setTransform(-215.8884,29.0435,0.7355,0.8036);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAFAAQgFAAgEAB");
	this.shape_213.setTransform(-215.9988,27.7779,0.7355,0.8036);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAFAAIgJAB");
	this.shape_214.setTransform(-216.3481,26.2912,0.7355,0.8036);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAEAAIgGAA");
	this.shape_215.setTransform(-216.6424,25.347,0.7355,0.8036);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AADAAIgFAA");
	this.shape_216.setTransform(-216.0171,20.9676,0.7355,0.8036);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAEABIgHgB");
	this.shape_217.setTransform(-215.9988,22.635,0.7355,0.8036);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAEAAQgEABgDgB");
	this.shape_218.setTransform(-216.4585,23.7359,0.7355,0.8036);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AACAAIgCAA");
	this.shape_219.setTransform(-216.7159,22.1327,0.7355,0.8036);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAEACQgEAAgCgD");
	this.shape_220.setTransform(-217.0837,17.2912,0.7355,0.8036);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAEADIgHgF");
	this.shape_221.setTransform(-216.3114,19.1193,0.7355,0.8036);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAEACIgGgD");
	this.shape_222.setTransform(-214.8035,15.5033,0.7355,0.8036);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AADACIgGgD");
	this.shape_223.setTransform(-215.3919,16.4073,0.7355,0.8036);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AADABQgCAAgDgB");
	this.shape_224.setTransform(-215.4839,17.6729,0.7355,0.8036);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgDgBIAHAD");
	this.shape_225.setTransform(-205.2232,30.8113,0.7355,0.8036);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgEgBQAGACADAB");
	this.shape_226.setTransform(-205.0209,29.8671,0.7355,0.8036);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCAAIAFAC");
	this.shape_227.setTransform(-204.7819,28.8426,0.7355,0.8036);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgEgBQAGABADAC");
	this.shape_228.setTransform(-204.6164,27.9185,0.7355,0.8036);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgGAAIANAC");
	this.shape_229.setTransform(-204.506,26.8337,0.7355,0.8036);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgDAAIAIAC");
	this.shape_230.setTransform(-204.3957,25.4274,0.7355,0.8036);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgEAAQAEABAFAA");
	this.shape_231.setTransform(-204.3221,24.3667,0.7355,0.8036);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgDAAQADACAEgB");
	this.shape_232.setTransform(-203.7153,23.0884,0.7355,0.8036);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgDgCIAHAF");
	this.shape_233.setTransform(-203.5498,21.51,0.7355,0.8036);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgEgCQAGgBADAG");
	this.shape_234.setTransform(-203.7153,20.1787,0.7355,0.8036);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgEAAQAEgCAFAE");
	this.shape_235.setTransform(-203.936,18.3811,0.7355,0.8036);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgFAAIAMAA");
	this.shape_236.setTransform(-204.3221,17.0702,0.7355,0.8036);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgEAAQAFABAEgB");
	this.shape_237.setTransform(-204.7451,15.7805,0.7355,0.8036);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgEABQAFACAEgE");
	this.shape_238.setTransform(-205.4071,14.8353,0.7355,0.8036);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCACQACAAAEgD");
	this.shape_239.setTransform(-206.2345,14.1171,0.7355,0.8036);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCAEQAFgCAAgF");
	this.shape_240.setTransform(-207.5401,13.414,0.7355,0.8036);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgCAEQAEgCABgF");
	this.shape_241.setTransform(-208.6986,13.1528,0.7355,0.8036);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AgBAHIADgN");
	this.shape_242.setTransform(-209.7835,12.51,0.7355,0.8036);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAAAGQABgFgBgF");
	this.shape_243.setTransform(-210.9741,12.3693,0.7355,0.8036);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AABAGIgBgL");
	this.shape_244.setTransform(-211.751,12.51,0.7355,0.8036);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AACAGIgDgL");
	this.shape_245.setTransform(-212.7072,12.6506,0.7355,0.8036);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AADAIIgFgP");
	this.shape_246.setTransform(-213.4796,12.8716,0.7355,0.8036);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AADAHQgBgHgEgG");
	this.shape_247.setTransform(-214.3806,13.4742,0.7355,0.8036);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AACAEQgBgEgCgE");
	this.shape_248.setTransform(-215.1897,13.9363,0.7355,0.8036);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAEAFQgDgGgDgD");
	this.shape_249.setTransform(-216.2746,14.5591,0.7355,0.8036);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAEAFQgDgFgEgE");
	this.shape_250.setTransform(-216.863,15.0412,0.7355,0.8036);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAFAEIgJgH");
	this.shape_251.setTransform(-217.5066,16.4676,0.7355,0.8036);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAEADIgHgF");
	this.shape_252.setTransform(-217.6905,17.7332,0.7355,0.8036);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAHAFIgNgJ");
	this.shape_253.setTransform(-218.0766,18.6372,0.7355,0.8036);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAKAEQgJgCgKgF");
	this.shape_254.setTransform(-218.1318,20.4452,0.7355,0.8036);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAIADIgPgF");
	this.shape_255.setTransform(-218.1686,22.0725,0.7355,0.8036);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAFABIgJgB");
	this.shape_256.setTransform(-218.2973,23.4988,0.7355,0.8036);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAFAAIgKAA");
	this.shape_257.setTransform(-218.1502,24.7845,0.7355,0.8036);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAIAAIgPAA");
	this.shape_258.setTransform(-217.8928,25.9899,0.7355,0.8036);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAGAAIgMAA");
	this.shape_259.setTransform(-217.6721,27.3962,0.7355,0.8036);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#E2DFCF").ss(0.3,1,1).p("AAGAAQgGABgFAA");
	this.shape_260.setTransform(-217.3043,28.6417,0.7355,0.8036);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#E2DFCF").s().p("AgQAKIAAgSIAhAAIAAASg");
	this.shape_261.setTransform(-115.8373,43.8694,0.7355,0.8036);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#E2DFCF").s().p("AgQAKIAAgSIAhAAIAAASg");
	this.shape_262.setTransform(-119.3311,43.8694,0.7355,0.8036);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#E2DFCF").s().p("AgQAKIAAgSIAhAAIAAASg");
	this.shape_263.setTransform(-122.7881,43.8694,0.7355,0.8036);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#E2DFCF").s().p("AgQAKIAAgSIAhAAIAAASg");
	this.shape_264.setTransform(-126.2451,43.8694,0.7355,0.8036);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#E2DFCF").s().p("AgQAKIAAgSIAhAAIAAASg");
	this.shape_265.setTransform(-129.7022,43.8694,0.7355,0.8036);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#E2DFCF").s().p("AgQAKIAAgSIAhAAIAAASg");
	this.shape_266.setTransform(-133.1959,43.8694,0.7355,0.8036);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#E2DFCF").s().p("AgQAKIAAgSIAhAAIAAASg");
	this.shape_267.setTransform(-136.653,43.8694,0.7355,0.8036);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#E2DFCF").s().p("AgQAKIAAgSIAhAAIAAASg");
	this.shape_268.setTransform(-140.11,43.8694,0.7355,0.8036);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#E2DFCF").s().p("AgQAKIAAgSIAhAAIAAASg");
	this.shape_269.setTransform(-143.5854,43.8694,0.7355,0.8036);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#E2DFCF").s().p("AgQAKIAAgSIAhAAIAAASg");
	this.shape_270.setTransform(-147.0608,43.8694,0.7355,0.8036);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#E2DFCF").s().p("AgQAKIAAgSIAhAAIAAASg");
	this.shape_271.setTransform(-150.5178,43.8694,0.7355,0.8036);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#E2DFCF").s().p("AgQAKIAAgSIAhAAIAAASg");
	this.shape_272.setTransform(-153.9748,43.8694,0.7355,0.8036);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#E2DFCF").s().p("AgQAKIAAgSIAhAAIAAASg");
	this.shape_273.setTransform(-157.4502,43.8694,0.7355,0.8036);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#E2DFCF").s().p("AlNALIAAgVIKbAAIAAAVg");
	this.shape_274.setTransform(-136.7081,44.7132,0.7355,0.8036);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#0D0029").s().p("Ak0AMIAAgBQgBgJAIgGQAGgHAKAAII7AAQAKAAAHAHQAGAGABAJIAAABg");
	this.shape_275.setTransform(-85.5622,44.6314,0.7356,0.8036);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#252B8D").s().p("A0HAcIAAg4MAoQAAAIAAA4g");
	this.shape_276.setTransform(-134.183,47.9062,0.7356,0.8036);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#0D0029").p("Ah0FvIC1rYIAzAkIiuK2");
	this.shape_277.setTransform(-36.8654,16.5447,0.7355,0.8036);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#002A85").s().p("AhzFrIC0rYIAzAkIitK2g");
	this.shape_278.setTransform(-36.8961,16.8292,0.7355,0.8036);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#A12B59").s().p("AhVBhIgXh9IgOACIgJhGIEHAPIgGAzIgPACIggB9g");
	this.shape_279.setTransform(-211.4542,37.9612,0.7356,0.8036);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#3E5E66").s().p("AACh8QAICPgOBqQAEjGACgzg");
	this.shape_280.setTransform(-210.8437,22.5906,0.7355,0.8036);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#3E5E66").s().p("AgQgBQAGg/Acg1QgsByAWB5QgSg6AGg9g");
	this.shape_281.setTransform(-214.1638,22.1888,0.7355,0.8036);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#3E5E66").s().p("AgKh1QAVA4AAA9QAAA+gVA4QAdh4gdhzg");
	this.shape_282.setTransform(-207.6731,22.1888,0.7355,0.8036);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#53747D").s().p("AgUB4IgwgGQgXg5gEg5QgHh0BggGQBhgGAFBsQADBHgdBHQgPABgTAAQgaAAgegDg");
	this.shape_283.setTransform(-210.9465,22.3051,0.7356,0.8036);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#00C7D0").s().p("ABSI7IjXx1IA0AAIDXR1g");
	this.shape_284.setTransform(-41.4467,95.6622,0.7356,0.8036);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#00C7D0").s().p("AiFI7IDWx1IA1AAIjXR1g");
	this.shape_285.setTransform(-62.5758,95.6622,0.7356,0.8036);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#0D0029").s().p("ApVEsIAApXISrAAIAAJXg");
	this.shape_286.setTransform(-137.3827,-8.7099,0.7356,0.8036);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("Ap8GGQgJAAgGgGQgHgGAAgIIAArjQAAgIAHgGQAGgGAJAAIT6AAQAIAAAHAGQAFAGABAIIAALjQgBAIgFAGQgHAGgIAAg");
	this.shape_287.setTransform(-137.3827,-5.5154,0.7356,0.8036);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#DCDCDC").s().p("AhhCLIAAkVIDDAAIAAEVg");
	this.shape_288.setTransform(-137.3827,34.2444,0.7356,0.8036);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#00C7D0").s().p("AidAWIAAgrIE7AAIAAArg");
	this.shape_289.setTransform(-215.5365,101.8301,0.7356,0.8036);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#00C7D0").s().p("ABRI7IjWx1IA0AAIDXR1g");
	this.shape_290.setTransform(-205.3122,95.6622,0.7356,0.8036);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#00C7D0").s().p("AiFI7IDWx1IA1AAIjXR1g");
	this.shape_291.setTransform(-226.4413,95.6622,0.7356,0.8036);

	this.instance_2 = new lib.ClipGroup();
	this.instance_2.setTransform(-0.75,170.3,0.7356,0.8037,0,0,0,788.7,39);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#434040").s().p("Eg6lAF1IAArpMB1LAAAIAALpg");
	this.shape_292.setTransform(-0.1573,170.7629,0.7356,0.8037);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#0D0029").s().p("Eg6lAF1IAArpMB1LAAAIAALpg");
	this.shape_293.setTransform(-0.1573,170.7629,0.7356,0.8037);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#005AA2").s().p("AnKYDIhkzcIFMAAQAAgXgFgwIgDgUQgoANgqAKQhBAQgyAEIg7ACIgdgBQgQgCgOgDIg4gLQghgGgXABQALgFARgFQANgCAQgBQAPgBAsABIA3gBQAZAAAfgEQAlgDBMgIQA5gFAdAAIgFgzQgwAKhKAHIjHAPIhCAHQgoAEgcAAQgpgBgbgGQAlgGBegUQArgKAXgEQAogGAcgCQA6gFBNAEQA9ADA+AGIgGgwQgvAMg/AFQgxAEhQgBIh/gCQg7gChFADQA1gXBJgIQA9gHBFABICAAFIBuAGIgKg9IgPAFIgjAFQgbADgqAAIghABIgQABIiZAQIhEABIghABIghAEQgWAEgNAAQgWABgNgDQAPgCASgGIAggMQAUgIAOgDIAjgGIBEgHIBDgIQAngFAdgBIBHADIBDAIIAiACIAPAAIgRhfIgLABIh4AgIiaAaQgdAFgjABQg5AAhGgLQAqgJBSgKQAigFAagGIA+gNQAVgDAqgEIA8gIQApgGAXgBQAVAAALABIAKACIgKgzQgKAHgPAFQgOAFgTADQgXAEgsADIg/AHQgbAEgkAIIhBAOQgmAGgeAAQhJABg7gYQBFADA9gKQAggFAfgHIA/gPQAkgIAggCIAhgCIBjAFQAjABAZgFIgLg8QgqAKg/ALQgyAIhGAIIhZAJIgcAGQgvANgNACQgVADgLgBQgSgBgMgFQAPAAAOgEIAcgKIA3gZIAfgLIBbgOQBEgGA2gCQA6gBAxAFIgKgyQgQAAgWAGIg7APQgSAEgOABIiZAGIg7AFQglADgZAAQgngCgWgMQAYACAjgHIA7gOIAfgGQAPgDAQgCIA+gDIA9AAIAeAAQAPAAAOgCIA+gEQASAAANADIAHABIgKgyQgfAIgdAFIgXAEIgFgSIgLACQhHAPggAFIhnAOIg0AHQgfACgXgEQAigJBBgaIAagHIBOgPQA4gJAxgCIAIAAIgEgPIgHACQhPATgdAFQgOADgOABIgeABIhFgFIgnACIgdAAQgRgBgLgFQAMAAAPgEIAagJIAbgIIAPgDIBGgDIAZgCIAagFQBMgNAigDIAHAAIgDgPIgHABQhDAOghADIgbABIgZgCQgPgBghACQghACgSgBQgdgBgWgLQAVAAAcgHIAxgMQAhgHAUAAIAwgBIAxgFQAfgDAUAAIAGAAIgEgcIgWAHQguANgvAGQgtAHgxgCQg2gCgogNIBcgPIBbgMIBcgLIAagDIgCglIgZAFIhNANIgoAEQgXABgRgBIhPgJQAagOA0gHIBMgMQAtgGAiABIAcACIABgpIgCABIglAFIhLANQgbADgPgCIgngHIglgIQgUgDgSADQAOgNAXgFQARgEAYAAIAmABIAIAAIAbgDQAzgGAbABQAaACAPAEIABAAIADgjIgCgFIgNgaIgBABIAAgCIgKgTIALASIAQgmQAJgTAJgOQAgh9BKhnQB+itBjAjQA5AUAiBPIAKgPQA6hOA7g3QhKAjh0gHIhngOQACg4AZhIQAziPBzhLQBphFAvApQAbAXACAyIAYgOIAXhTIgdBwQBDAngEAuQgCAbgHASQgJAYgVAYQAlAhAIAJIALAOQAchRA3gZQBggsCMCiQCaCzANECQAHCBgYBeQhFgEhZgTQi0gnhqhOQgxC4g1DNIAFgMQACATgMAQIgBACIgUBQIADAAQAyiAAqhTQAwhfAggXQgaBZhJDbIAAAAIghBjIAQgCQgLAHgIADIgVA9IA9gLQBqjDAxgdQgiBhg4B1IAAAAIgBABQgbA5ggA+QAfgIAfgLQgaAbglATIgRAHQgvBag0BbIBiAAIhkTcgACuCPIg1CYIAIAAQAqhaAihEgAglCdIgNCKIBUAAIAaiOIhhAEgAhLChQhBAGg5AVIAFAfQAJAzACASIABAHIBmAAIAOiHgAg9BjIgRADQgNACg7ASQghAKgXADIADAQIAEAbQASgQAZgOQAhgSAogLIAZgFIABgQgAjPB+QASgJAcgSQArgbAbgKIAogNIAEgeIg2AVIg8AdQgUAJgMADIgSAEIgDAAgAgfBdIgBAQQApgHA6gDIADAAIAHghgADYAZIgBAAIgYBFIAlgDIAuhZQgXAKgjANgAhngmIgEACIgDABIgfAQIghARIghANIgSAFIgEAAIANA/QANgGAfgXQAigcATgNQAFgFAKgEIAIgEIA4gZIAEgjgAgVAKIgEAfIByghIAHgigAjmAMIASgKIA5gqQAQgMAOgJIAhgSQANgHAUgIIAdgMIACgQQg2AZgpALQgmAJgjAAQgegBgbgIgAAUhUIggALIgEAjIB6giIAJgnIhfAbgAhZiyIg+ANQggAGgeAIQgeAJgVALIAKAoQAdABAbgFQAegGAkgOQAXgJAggPIA4gcIAFgigABIilIgfALIgtAVIgCASIAPgFQApgNBJgPIAJgkQgUAHgoAMgAgJkDIgQADIgPACQgXAFglAJIg+APIg+ALQgmAHgRAJIAOA/QARgTAcgPQAYgOAkgMQAdgKAhgJIBYgeIACgQgABbj9Qg8AfgaALIgEAiIAagMIAkgKIBNgTIAShGgAkYjIQAIgJANgIQANgJAQgGQARgHArgPIA8gVQAigLAdgFIAugIIACgaIg2ASIgPADQgXAFgkAFIg6AJQghAGgYAGQgbAGgVAKIAEACIgHAAgABTkfQgcAMgiAIIgJADIgBAMIBEgbQAdgKAhgKIAVgFIAHgYQgpAXgtASgAk0k8IAOA5IABAAQARgRAbgPQAZgNAggKQAegJBWgSIBUgWIAHgsIgNAHQgwAZg0ATQgjAMgSAFIgcAGQgLACgSABIgwgBgAAvlXIgZALIgEAdIA3gMIBjgYQA9jeBBiGQgPgOgKgMQgggmgfgqQgDAwgbA8QgeBBg+BYQgHALgMANIAKgCIgSALIgPAQIgIAwQAfgJAcgEQgeAUghASIgHAxIAJgCQAsgOBFgYQgnAkg/AegAhGmXIBageIAGgkQgmAjg6AfgAmEm8QgGABgEAFQgEAFgBAFIAXADQADgFgCgEQABgFgCgDQgCgDgEAAIgCABgAkKnGIgJAIIgNANIAAABQADAIAJgEQAHgDACgJIADgPgAilncQgEADADAEQACADgBAEQgCAEAFABQAFACABgFQADgHgFgHQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAgBAAIgDABgAlHoDIAAABIAGgEIgCAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBABgAhpppQgKAEADAJIABAFQABAEAEACQAEACAEgBQAEgBACgEQACgEgBgEIgCgFQgBgEgEgCIgEgCIgDABgAi8p2QgEACgBAEQgCADACAEQABAFACACQABABAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQAEgEAAgGQgBgGgEgEQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAIgCABgAm/qaIAOAdIAFgkQgKAFgJACgAJ5qsQgDACAAADQgEADADADQACADAEAQQADALAIADQAKAEACgJQABgDgEgRQgIgWgIAAQgDAAgDADgALtqXQgCAEABAFQgBADADAGQAEAGAIAAQAJABABgIQACgHgFgGQgFgGgHgBIgBAAQgFAAgCADgAkQqDIACACQAEACACgEQADgFgEgCQgGgEgEAAIgEAEIAAAAQgBADACACQACADADgBgAINqkQgEAHADAHQACAFAEgCQAFgBgCgFQgBgEACgCQACgFgEgCIgDgBQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAABgABcq/QgHABgBAJQAAAKAJACQAEABAEgBQAFgBACgEQADgHgFgGQgCgDgEAAQgCgCgDAAIgDABgAglr4QgFAIABAKIADALQACAGgBAFQgCAOACAFQAFAJAKgDQAKgDADgJQAIgXgIgXQAAgCgCgCQAAgLgKAAQgKAAgGAIgAjcrNQADACADgEQADgDgEgDIgBgBgAKqrdIgFAFQgEADACAEQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAIAGgEQAFgDgEgEIgDgCIgBgBIgDABgAlLruQgJACgEAIQgHAEABAJQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABgBQAAAAABAAQAPgHAOgKQAAAAABgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQgFgDgEAAIgIACgAKXseQgDAFAGACIAJACIAJAEIALAEQAFAAADgDQADgEgCgFQgCgEgHgDIgMgCIgKgCQgIAAgCAGgAHFssQgEACgBAEIgBAGQgBAJAJADQAEABAEgDQAEgCAAgEIABgGQACgJgKgDIgCAAQgCAAgDACgAAls+QgEADAAAFIAAABQgBAJAEAIQAEAJAIAEQAEACAEgCQAGgBACgEQAEgHgGgFQgCgKgHgJQgDgEgCAAIgBgBIgBAAIAAAAIgCgBQgEAAgDADgAIZtAQgEAEAAAGQAAAGAEAEQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAgBQACgDAAgEQACgEgCgEQgBgEgFgBIgBAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABgAi3tEQgBAFAFABIACAAQAFABABgFQACgEgFgBIgDgBIgBAAQgEAAgBAEgAj1tiQgIABgGAFQgNAEAEAIQAFAKAWgMQAGgFAAgFQgBgGgGAAIgDAAgAJptdQgEADADAFQADAEAEgDIACgCQAEABABgDQACgCgBgDQAAgBgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIAAAAQgEAAgGAEgAD4txQgEABgCADQgFAGAEAGQAFAIAKgEQAKgEgCgIQgBgIgIgCIgBAAQgEAAgCACgAFsu9QgFAAgCAEQgDADABAEQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABQgGAWAKAXQAEAKAKACQAKACAEgKQABgFAAgFIgDgJQgBgFACgGIACgLQABgKgHgIQgFgGgJAAIgCAAgAAWuZQgHAIAFAJQAEAJAKgBQAFAAAAgFQABgLgKgHQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgCgBQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAgAI1uoIgFAFQgDAEAEADQADAEAEgEIAEgFQAEgEgEgDIgEgCQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAgAiBu/IgKACQgHACgBAEQgEAJAMAFQANAEALgIIAFAAQAKAAAJgIQACgCgBgDQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgMgCgMAAIgMABgAKRvDQgBAAAAAAQgBABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQABAAAAAAQABABAAAAQARAJANAGQAHACABgGQABgJgIgDQgFgIgJgCIgGAAQgGAAgFADgABLwpIg4BEQA6AFAuAUIAEgWQgCgfAJgrQAFgXAOgRIALguQgmAdgzA8gAEcvyQgHAKAAAKQgGAGAFAGQACAEAGAAQAEACAEgDQAIgFADgIQAEgJgDgIIAAgCQAAgFgEgCQgFgDgEACIgBAAIgBAAIAAAAgAIBwSIgDABQgFABACAFQACAEAEgBIADAAQAFgCgCgEQgBgEgDAAIgCAAgAI6wrQgBAGAHADQAHAEAIABQAKABACgGQAEgIgOgDQgGgEgJgBQgIAAAAAHgAEuxTQgCABgBADQgJAHACALQABAFAEAAQAKAAAEgJQADgKgHgHIgDgBIgCAAgACvyaIgMA7QAbgcAxgSQAggMAggFIgMgOQgTgUgXgVQgcAcguAfgAHTxwQAMgFgFgJQgDgHgQAAQgQAAgTAFQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAgBABQAAADACACQAKAHAJAAIAGgBQAMAIAMgGgAAJyjQgBAAgBAAQAAABgBAAQAAAAAAABQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAABAAAAQgBABAAAAQAAAAABABQAAAAABABQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAgBQADgDgBgFQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgBAAgAg+ywQgFAIAAADQAAAFAFAAQAGgBADgGIAHgJQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIAAgDQgCgDgDAAQgFAAgGAKgAh/y/QgEACAAAEQgBAFAFABQAFABADgDQADgCAAgDQADgGgGgBIgCgBQgDAAgDADgAhHzbQAAAAAAABQgBAAAAABQAAAAABABQAAAAAAABIACAEQABAAABABQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAgBgBAAIgCgEIgCgBIgDABgABBzeIgBADQAAAGAGAAQAGABAAgGIABgDQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgGAAAAAGgADBznIgCAHIADAEQAFAEAEgEQAEgDgCgEQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBgBAAQAAAAgBAAIgBAAQAAAAgBAAQAAAAgBABQgBAAAAAAQgBABAAAAgAAXz2IAAAEQABABAAABQAAAAABABQAAAAABAAQABAAAAgBQAEgBABgDQABgEgCgDQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQgHABABAGgAhE0AQgCACABADQAAAAAAABQABAAAAAAQABABAAAAQABAAAAABIAHAAIAGgBIAGAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAgBQgBgEgKgBQgMAAgBACgACL0kQgFADgBAGIgCANQgFAIABADQAAAGAGAAQAGABAEgFQAJgLABgOIgBgDQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgEgBQgDAAgDACgAgQ0bIgBADQABABAAAAQAAAAABABQAAAAAAAAQABAAAAABIABABQABAAAAABQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAIgFgEgADD06QgDABgBADIAAAAQgGALAIAJQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAQAEAAABgCIABAAIABgFIAAgCQABgGgCgGIgCgDIAAgBIgBAAIgDgBIgCAAgAAd07QgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAABIACADQABABAAAAQAAABABAAQAAAAABAAQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBgBAAIgBgEQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAgBAAIgBABgAgg1aQgGABAAAFQAAABAAAAQAAABAAAAQABABABAAQAAAAABAAIAUgDIACgCIgBgDQgDgDgGgBIgBAAQgFAAgDADgADO1vQgGADABAGQAAAGAGABQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQADgGgEgGQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgCgBIgBAAgABL1sQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAABIABABQABAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgCgBIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABgBAAgAAf2FQABAHAOgCQAFgBABgDQABgFgFgBIgJAAQgIAAAAAFgADd2ZIALAGIAFgPgACK2WQAFACAHgDQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIgBgDQgKgGgJgCQgJgDgDAEQgDAEAFAFQAGAFAIgCgAnOq6QgLgKgGgPQgHgQgCgPQgBgRADgQQADgJAEgHQAGgKAGgEIALAeQAFAPABAOQACAPgCAPQgCAUgHANg");
	this.shape_294.setTransform(39.4613,22.7826,0.7356,0.8036);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#005AA2").s().p("AgBATQgTgDgOgGQgSgIgNgLQAQgIAUgBQAOgCASACQARADAQAGQATAJALALQgPAHgUACIgOAAQgKAAgIgBg");
	this.shape_295.setTransform(0.6828,-33.4347,0.7356,0.8036);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#005AA2").s().p("Ah3ARQAVgQAlgKQAfgJAeAAQAcgCAiAHQAlAJAUAPIh2AIIg7ABQghAAgcgDg");
	this.shape_296.setTransform(-1.4503,-29.5353,0.7356,0.8036);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#1E120D").s().p("Eg6lAnEMAAAhOHMB1LAAAMAAABOHg");
	this.shape_297.setTransform(-0.1402,0.0277,0.7356,0.8037);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.instance_2},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.instance_1},{t:this.shape_97},{t:this.shape_96},{t:this.instance},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-581.2,-200.9,1161.5,401.9);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EhOHAfQMAAAg+fMCcPAAAMAAAA+fg");
	mask_1.setTransform(500.25,204.65);

	// Layer_3
	this.instance = new lib.Path_51();
	this.instance.setTransform(499.85,120.7,1,1,0,0,0,123.5,67.3);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "screen";

	this.instance_1 = new lib.Ellipse_33();
	this.instance_1.setTransform(495.3,59.1,1,1,0,0,0,123.2,47.8);
	this.instance_1.compositeOperation = "screen";

	this.instance_2 = new lib.Path_50();
	this.instance_2.setTransform(586.65,77.65,1,1,0,0,0,3.1,6);
	this.instance_2.alpha = 0.8008;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Path_1_46();
	this.instance_3.setTransform(423.25,76.75,1,1,0,0,0,3.1,5.1);
	this.instance_3.alpha = 0.8008;
	this.instance_3.compositeOperation = "multiply";

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#674267").s().p("AgUgcIAOgPIAbBSIgKAGg");
	this.shape_26.setTransform(474.075,92.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#674267").s().p("AgVAqIAihTIAJATIghBAg");
	this.shape_27.setTransform(538.55,92.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#B9B6DE","#9679A9"],[0,1],0,0,0,0,0,23.7).s().p("AkvAqIgchTIKXAAIgiBTg");
	this.shape_28.setTransform(506.575,92.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AsYAVIgngkIZ/gFIglApg");
	this.shape_29.setTransform(504.95,99.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#FFC7CB","#FFEAB8"],[0,1],0,2.7,0,-2.6).s().p("AsiAaIg/gvIbDgEIgyA0g");
	this.shape_30.setTransform(505.1,99.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#746189","#765685"],[0,1],0,0,0,0,0,62.9).s().p("AsgAgIhZg2IbygIIhFA+g");
	this.shape_31.setTransform(504.7,99.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#9995CF","#83619A"],[0,1],0,0,0,0,0,64.2).s().p("AuJglIcTAHIgQA8I7yAIg");
	this.shape_32.setTransform(504.675,93.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#674267").s().p("AgNBdIAMigIAPgZIgPC5g");
	this.shape_33.setTransform(584.475,80.975);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#9995CF","#83619A"],[0,1],0,9.4,0,-9.3).s().p("AgbBdIAQi5IAnAAIgaC5g");
	this.shape_34.setTransform(587.025,80.975);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#674267").s().p("AADBaIgQizIAQAYIALCbIgLAAg");
	this.shape_35.setTransform(425.425,80.65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#9995CF","#83619A"],[0,1],0,9,0,-9).s().p("AgCBaIgZizIAmAAIARCzg");
	this.shape_36.setTransform(422.925,80.65);

	this.instance_4 = new lib.Path_49();
	this.instance_4.setTransform(614.7,25,1,1,0,0,0,4.2,7.2);
	this.instance_4.alpha = 0.8008;
	this.instance_4.compositeOperation = "multiply";

	this.instance_5 = new lib.Path_1_45();
	this.instance_5.setTransform(386.45,25,1,1,0,0,0,4.2,7.2);
	this.instance_5.alpha = 0.8008;
	this.instance_5.compositeOperation = "multiply";

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#384BA0").s().p("AgdgoIAUgVIAnBzIgOAIg");
	this.shape_37.setTransform(457.525,46.95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#384BA0").s().p("AgdA6IAvhzIAMAaIgtBZg");
	this.shape_38.setTransform(547.5,46.575);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#384BA0").s().p("AmnA6IgohzIOfAAIgwBzg");
	this.shape_39.setTransform(502.875,46.575);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#384BA0").s().p("AxRAdIg3gzMAkRgAGIgzA5g");
	this.shape_40.setTransform(500.575,56.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#384BA0").s().p("AxgAkIhYhBMAlxgAHIhGBJg");
	this.shape_41.setTransform(500.825,57);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#384BA0").s().p("AxdAsIh7hMMAmygALIhhBXg");
	this.shape_42.setTransform(500.25,56.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#384BA0").s().p("Azwg1MAnhAAKIgXBVMgmyAALg");
	this.shape_43.setTransform(500.25,48.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#384BA0").s().p("AgSCBIAQjgIAVgiIgVEDg");
	this.shape_44.setTransform(611.6,30.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#384BA0").s().p("AgmCCIAXkDIA2AAIgjEDg");
	this.shape_45.setTransform(615.125,30.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#384BA0").s().p("AgTh9IAXAiIAQDYIgQABg");
	this.shape_46.setTransform(389.6,30.375);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#384BA0").s().p("AgDB9Igjj6IA1AAIAYD7g");
	this.shape_47.setTransform(386.125,30.375);

	this.instance_6 = new lib.Ellipse_1_3();
	this.instance_6.setTransform(790.9,264.15,1,1,0,0,0,66.1,66.1);
	this.instance_6.compositeOperation = "screen";

	this.instance_7 = new lib.Ellipse_2_2();
	this.instance_7.setTransform(668.3,274.05,1,1,0,0,0,91.2,91.2);
	this.instance_7.compositeOperation = "screen";

	this.instance_8 = new lib.Path_48();
	this.instance_8.setTransform(879.55,389.65,1,1,0,0,0,31.7,15.1);
	this.instance_8.alpha = 0.3984;
	this.instance_8.compositeOperation = "multiply";

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#584A68").s().p("AiXAvQBSgnB2giQA8gRArgJIgFATQhdARhfAkIhOAhg");
	this.shape_48.setTransform(858.025,301.375);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#584A68").s().p("AizAmQBWgrB9gYQA/gMAtgCIApABQhyAOh2AmIhgAjg");
	this.shape_49.setTransform(897.5,302.25);

	this.instance_9 = new lib.ClipGroup_2();
	this.instance_9.setTransform(857.95,300.85,1,1,0,0,0,15.1,10.5);

	this.instance_10 = new lib.ClipGroup_1_1();
	this.instance_10.setTransform(897.55,301.7,1,1,0,0,0,18.1,11.8);

	this.instance_11 = new lib.Path_47();
	this.instance_11.setTransform(897.25,303.4,1,1,0,0,0,17.8,3.3);
	this.instance_11.compositeOperation = "screen";

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#431633","#391339"],[0,1],0,5.8,0,-5.8).s().p("AijAUQAGgIAHgEQCWgIBkgdQAzgPAVgNQALAigQAmQgHATgKANQhHAJiGACIh4AAQgBgVANgRg");
	this.shape_50.setTransform(897.7955,305.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#B38393","#98454A"],[0,1],-19.3,0,19.3,0).s().p("AjAA6QAAgIADgMQAIgXAUgNIBzgIQCDgPBPgkIAdAAQAAANgOAPQgbAehHAKQhGAIhZAVIhMASg");
	this.shape_51.setTransform(895.6509,305.9);

	this.instance_12 = new lib.Path_2_19();
	this.instance_12.setTransform(893.8,242.25,1,1,0,0,0,2.5,0.5);
	this.instance_12.alpha = 0.5;
	this.instance_12.compositeOperation = "screen";

	this.instance_13 = new lib.Path_3_15();
	this.instance_13.setTransform(899.5,242.2,1,1,0,0,0,12.2,4.2);
	this.instance_13.alpha = 0.5;
	this.instance_13.compositeOperation = "screen";

	this.instance_14 = new lib.Path_4_15();
	this.instance_14.setTransform(879.35,356.9,1,1,0,0,0,2.9,1.3);
	this.instance_14.alpha = 0.9414;
	this.instance_14.compositeOperation = "multiply";

	this.instance_15 = new lib.Path_5_4();
	this.instance_15.setTransform(879.55,346.6,1,1,0,0,0,5.3,4.8);
	this.instance_15.alpha = 0.9414;
	this.instance_15.compositeOperation = "multiply";

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#020315").s().p("AggAUIgWgoIBtACIgPAng");
	this.shape_52.setTransform(879.125,371.45);

	this.instance_16 = new lib.Path_7_3();
	this.instance_16.setTransform(852.75,326.8,1,1,0,0,0,15.8,2);
	this.instance_16.alpha = 0.5;
	this.instance_16.compositeOperation = "screen";

	this.instance_17 = new lib.Path_8_0();
	this.instance_17.setTransform(893.15,278.25,1,1,0,0,0,9.5,6.4);
	this.instance_17.alpha = 0.1992;
	this.instance_17.compositeOperation = "screen";

	this.instance_18 = new lib.Path_9_2();
	this.instance_18.setTransform(879.1,282.45,1,1,0,0,0,1.9,5);
	this.instance_18.alpha = 0.5;
	this.instance_18.compositeOperation = "screen";

	this.instance_19 = new lib.Path_10_1();
	this.instance_19.setTransform(905.15,284.85,1,1,0,0,0,2.9,6.1);
	this.instance_19.alpha = 0.5;
	this.instance_19.compositeOperation = "screen";

	this.instance_20 = new lib.Path_11_2();
	this.instance_20.setTransform(896.9,266.25,1,1,0,0,0,18.6,5.3);
	this.instance_20.alpha = 0.5;
	this.instance_20.compositeOperation = "multiply";

	this.instance_21 = new lib.Path_12_0();
	this.instance_21.setTransform(885.25,318.85,1,1,0,0,0,18.2,6);
	this.instance_21.alpha = 0.5;
	this.instance_21.compositeOperation = "multiply";

	this.instance_22 = new lib.Path_13_0();
	this.instance_22.setTransform(907.1,279.6,1,1,0,0,0,6,11.3);
	this.instance_22.alpha = 0.5;
	this.instance_22.compositeOperation = "screen";

	this.instance_23 = new lib.Path_14_6();
	this.instance_23.setTransform(878.25,283.9,1,1,0,0,0,3.9,10.1);
	this.instance_23.alpha = 0.5;
	this.instance_23.compositeOperation = "screen";

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#C5AEBD","#DBEAE3"],[0,1],-9.9,0,10,0).s().p("AhgEgQgPjLBUjJQAbg/Agg3QAQgcAMgPIAogKQgbCYhFDiQghBygdBTg");
	this.shape_53.setTransform(905.5869,296.05);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#C5AEBD","#DBEAE3"],[0,1],-8.6,0,8.7,0).s().p("AhWEKQAKhFA4jtIA1jfIAjgCQAvB0hGDaQgiBugrBXg");
	this.shape_54.setTransform(875.757,298);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#434260").s().p("ABAgeIAhALIiIAwIg5ACg");
	this.shape_55.setTransform(864.85,369.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#020315").s().p("AhqAvIAJglICgg9IAhALQAHALAEAUIiUA9g");
	this.shape_56.setTransform(864.95,371.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#C5AEBD","#DBEAE3"],[0,1],0,17.6,0,-17.6).s().p("AhvgNQAIgnAOgpIANggQAzgYBNgQQAngIAdgDQhRBVgTCIQgKBEAHAzIhlAMQg0hAAZh9g");
	this.shape_57.setTransform(898.2827,252.75);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#434260").s().p("AhWgMQALgLAagDICIAwIglAFg");
	this.shape_58.setTransform(894.025,368.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#82597C","#8B84B4","#AAA5C8"],[0,0.514,0.961],0,29.8,0,-29.7).s().p("AhLEWIgkACQABg+AShmQAmjLBdjIIAogKIAhACIgpDTQgyDugyCQg");
	this.shape_59.setTransform(907.65,297.05);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#020315").s().p("AAoA0IiRg9IAKgSQARgTAkgFICIAxIAHAQQAHAVgDARg");
	this.shape_60.setTransform(893.32,371.375);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#020315").s().p("AhXgLIgEgNQAwAIBIgEQAlgBAagDQgJAbgXAOIgVAHIhTABQgggTgLgRg");
	this.shape_61.setTransform(880.125,367.825);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#434260").s().p("AgkANIg3gGIA+gUIABAMQAYAEAOgEIACgMIBQAUQgsAHgwAAIgkgBg");
	this.shape_62.setTransform(880.125,364.5721);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.rf(["#36223B","#22032D"],[0.024,0.996],-1.3,-0.4,0,-1.3,-0.4,4.3).s().p("AgoBFIgMiJIBpAAIgTCJg");
	this.shape_63.setTransform(879.575,348.7);

	this.instance_24 = new lib.Path_26_0();
	this.instance_24.setTransform(880.25,339.5,1,1,0,0,0,17.8,2.3);
	this.instance_24.alpha = 0.9414;
	this.instance_24.compositeOperation = "multiply";

	this.instance_25 = new lib.Path_27_0();
	this.instance_25.setTransform(899.5,268.7,1,1,0,0,0,19.7,2.5);
	this.instance_25.alpha = 0.9414;
	this.instance_25.compositeOperation = "multiply";

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#020315").s().p("AhxAHIjsgUIFMANQCZAHB7gCQA9gBAegCQhsAMiIAAQhmAAh1gHg");
	this.shape_64.setTransform(872.875,336.6286);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#020315").s().p("Aj5HoQAAgNABgPQADgeAKgMIEHgHQAOgBA0jEQA0jEAmjBQgcg2AAh0QABh2AfgZQAKAAASAmQAWAuAMA/IgwEaQg+FAhGDCIAAAAIgWANQhAAViyAAIg3gBg");
	this.shape_65.setTransform(896.9188,283.7723);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4B4A60").s().p("AkngFIJPACQggADgyABQhkAFhbgDQgqADg+AAIgJAAQh0AAhZgLg");
	this.shape_66.setTransform(870.45,325.1759);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#B37981","#98454A"],[0.008,1],-17.5,0,17.5,0).s().p("AijANIgLgrIFdASIgHArg");
	this.shape_67.setTransform(854.275,333.925);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.rf(["#402743","#2A1032"],[0.024,0.996],17.1,-1.4,0,17.1,-1.4,17.3).s().p("AAQAoIldgPQgEgNADgOQAGgeAkgIIE9AKQB+ABBwgGIAAAAIAkgCIAMAKQAOAOALAZQgCAFgUAGQhDASi3AAIgwgBg");
	this.shape_68.setTransform(870.1607,328.6139);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#431633","#391339"],[0,1],-25.3,0,25.4,0).s().p("Aj9ANIAAgfICPACQCxgCC7gXIgVBKQhNAIhiABIgZAAQi0AAhqgdg");
	this.shape_69.setTransform(884.6,333.4562);

	this.instance_26 = new lib.ClipGroup_0_1();
	this.instance_26.setTransform(892.8,281.2,1,1,0,0,0,28.9,48);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#431633","#391339"],[0,1],0,40.2,0,-40.2).s().p("AhrGSQAmiAAqikQBVlIAYi3IAaANIglEMQgxE1g7DVg");
	this.shape_70.setTransform(913.575,289.825);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.rf(["#402743","#2A1032"],[0.024,0.996],-10.4,-0.1,0,-10.4,-0.1,12.5).s().p("AhJAXIhngtIFhAFIh1Aog");
	this.shape_71.setTransform(880.2,339.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.rf(["#EED9C2","#897BB2"],[0.012,1],-0.9,-0.5,0,-0.9,-0.5,4.7).s().p("AgUBcIgSi3IBNAAIgXC3g");
	this.shape_72.setTransform(879.475,356.075);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#020315").s().p("AgaAbQgLgLAAgQQAAgPALgLQALgLAPAAQAQAAALALQALAMAAAOQAAAQgLALQgMALgPAAQgPAAgLgLg");
	this.shape_73.setTransform(859.275,375.375);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#020315").s().p("AgaAbQgLgLAAgQQAAgOALgMQALgLAPAAQAQAAALALQALAMAAAOQAAAQgLALQgMALgPAAQgPAAgLgLg");
	this.shape_74.setTransform(879.475,374.525);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#020315").s().p("AgaAbQgLgLAAgQQAAgOALgMQAMgLAOAAQAQAAALALQALALAAAPQAAAQgLALQgLALgQAAQgOAAgMgLg");
	this.shape_75.setTransform(899.425,375.375);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#434260").s().p("Ah9AcIDbg8IAMADQAOADAGAGIjbA1g");
	this.shape_76.setTransform(861.475,368.775);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#020315").s().p("AiNA2QgCgOAGgSIAGgPIDag8QAfAEAPAPQAIAIABAHIjiBJg");
	this.shape_77.setTransform(862.1132,370.925);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#020315").s().p("AgWAXQgKgJAAgOQAAgNAKgJQAJgKANAAQAOAAAJAKQAKAJAAANQAAAOgKAJQgJAKgOAAQgNAAgJgKg");
	this.shape_78.setTransform(851.775,375.325);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#434260").s().p("Ah6gUQAKgKAWgCIDVA9IggAEg");
	this.shape_79.setTransform(897.975,368.725);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#020315").s().p("ABSA3IjdhKIAJgPQAPgQAfgEIDWA9IAGAPQAGASgDAPg");
	this.shape_80.setTransform(897.3391,370.875);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#020315").s().p("AgWAXQgKgJAAgOQAAgNAKgJQAJgKANAAQAOAAAJAKQAKAJAAANQAAAOgKAJQgJAKgOAAQgNAAgJgKg");
	this.shape_81.setTransform(907.425,375.325);

	this.instance_27 = new lib.Path_46();
	this.instance_27.setTransform(860.65,303.4,1,1,0,0,0,17.8,3.3);
	this.instance_27.compositeOperation = "screen";

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#431633","#391339"],[0,1],0,5.8,0,-5.8).s().p("AijAUQAGgIAHgEQCVgIBlgdQAzgPAVgNQALAigQAmQgHATgKANQhHAJiGACIh4AAQgBgVANgRg");
	this.shape_82.setTransform(861.1955,305.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#B38393","#98454A"],[0,1],-19.3,0,19.3,0).s().p("AjAA6QAAgIAEgMQAIgXATgNIB0gIQCCgPBPgkIAdAAQAAANgOAPQgbAehHAKQhGAIhYAVIhMASg");
	this.shape_83.setTransform(859.025,305.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#FF9D31","#FFCC1B"],[0,1],0,3.4,0,-3.3).s().p("AgqAYIATg5IBCAPIgnA0g");
	this.shape_84.setTransform(682.475,251.225);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#B3B300","#9FA400"],[0,1],0,4,0,-4).s().p("AgrgOIAzgZIAkA4IgsAXg");
	this.shape_85.setTransform(611.525,241.825);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#B3B300","#9FA400"],[0,1],0,1.9,0,-1.8).s().p("AgfASIAEgjIA7AAIgJAjg");
	this.shape_86.setTransform(738.425,267.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#FF9D31","#FFCC1B"],[0,1],0,1.6,0,-1.6).s().p("AgbgPIA5AAIgEAeIg3ABg");
	this.shape_87.setTransform(706.5,278.625);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#FF9D31","#FFCC1B"],[0,1],0,3.7,0,-3.7).s().p("AgbAlIgHhJIA4AAIANBJg");
	this.shape_88.setTransform(701.075,262.45);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#281742","#322D45"],[0.004,1],0,1.4,0,-1.3).s().p("AkfAOIAAgbII/AAIAAAbg");
	this.shape_89.setTransform(695.725,296.225);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgEAaIgDg0IALAAIAEA0g");
	this.shape_90.setTransform(688.9,286.35);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgDAYIgEgvIAMAAIADAvg");
	this.shape_91.setTransform(686.6,286.625);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgEAUIgDgnIAMAAIADAng");
	this.shape_92.setTransform(684.275,287);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgEAPIgCgdIALAAIACAdg");
	this.shape_93.setTransform(681.975,287.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgEARIgCghIALAAIACAhg");
	this.shape_94.setTransform(679.6,287.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgEATIgCglIALAAIACAlg");
	this.shape_95.setTransform(677.25,287.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgEAYIgDgvIAMAAIADAvg");
	this.shape_96.setTransform(674.875,286.625);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgEAaIgDg0IALAAIAEA0g");
	this.shape_97.setTransform(672.5,286.35);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgDAYIgEgvIAMAAIADAvg");
	this.shape_98.setTransform(670.2,286.625);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgEAUIgCgnIALAAIACAng");
	this.shape_99.setTransform(667.9,287);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgEAUIgCgnIALAAIACAng");
	this.shape_100.setTransform(665.55,287);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgFANIgBgZIAMAAIABAZg");
	this.shape_101.setTransform(663.25,287.675);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgEAaIgDg0IALAAIAEA0g");
	this.shape_102.setTransform(660.825,286.35);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgFANIgBgaIALAAIACAag");
	this.shape_103.setTransform(658.55,287.65);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgEAUIgCgnIALAAIADAng");
	this.shape_104.setTransform(656.3,287);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFDB").s().p("AjBACIAAgDIGDAAIAAADg");
	this.shape_105.setTransform(672.825,289);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFDB").s().p("AgNAIIgBgQIAbABIACAPg");
	this.shape_106.setTransform(689.825,264.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFDB").s().p("AhlAIIgBgQIDMACIABAPg");
	this.shape_107.setTransform(674.25,264.175);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFDB").s().p("Ag/AIIgBgQICAABIABAQg");
	this.shape_108.setTransform(654.7,264.05);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFDB").s().p("AgUAJIgBgQIAqAAIABAQg");
	this.shape_109.setTransform(655.25,274.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFDB").s().p("AgUAIIgBgQIAqAAIABAQg");
	this.shape_110.setTransform(685.975,270.25);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFDB").s().p("AgUAJIgBgRIArABIAAAQg");
	this.shape_111.setTransform(655,270.075);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFDB").s().p("AgUAIIgBgQIAqABIABAQg");
	this.shape_112.setTransform(670.725,277.175);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B0CCDB").s().p("AgVAIIAAgQIAqAAIABARg");
	this.shape_113.setTransform(659.35,270.125);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#B0CCDB").s().p("AgUAIIgBgPIAqAAIABAPg");
	this.shape_114.setTransform(681.125,277.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B0CCDB").s().p("AgUAJIgBgQIAqAAIABAQg");
	this.shape_115.setTransform(674.5,268.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#B0CCDB").s().p("AgUAIIgBgQIAqAAIABAQg");
	this.shape_116.setTransform(673.625,278.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B0CCDB").s().p("AgUAIIgBgPIAqAAIABAPg");
	this.shape_117.setTransform(655.1,271.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B0CCDB").s().p("AgUAIIgBgQIAqABIABAQg");
	this.shape_118.setTransform(670.525,273.125);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFDB").s().p("AgUAIIgBgQIAqABIABAQg");
	this.shape_119.setTransform(670.225,268.475);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFDB").s().p("AgUAIIgBgPIAqAAIABAPg");
	this.shape_120.setTransform(691.225,274.05);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFDB").s().p("AgUAJIgBgQIAqAAIABAQg");
	this.shape_121.setTransform(681.725,271.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFDB").s().p("AgUAJIgBgRIAqAAIABARg");
	this.shape_122.setTransform(661.925,277.15);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFDB").s().p("AgUAIIgBgPIAqAAIABAPg");
	this.shape_123.setTransform(676.775,277.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFDB").s().p("AgUAJIgBgRIAqAAIABARg");
	this.shape_124.setTransform(681.875,274);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFDB").s().p("AgUAIIgBgQIAqABIABAQg");
	this.shape_125.setTransform(681.525,268.525);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFDB").s().p("AgUAIIgBgQIAqAAIABAQg");
	this.shape_126.setTransform(650.825,273.05);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFDB").s().p("AgUAIIgBgQIAqAAIABAQg");
	this.shape_127.setTransform(651.075,278);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFDB").s().p("AgUAJIgBgRIAqAAIABARg");
	this.shape_128.setTransform(666.175,273.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFDB").s().p("AgUAJIgBgQIAqAAIABAQg");
	this.shape_129.setTransform(659.25,268.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFDB").s().p("AgUAIIgBgQIAqAAIABAQg");
	this.shape_130.setTransform(650.575,268.35);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFDB").s().p("AAAAVIgCgpIACAAIADApg");
	this.shape_131.setTransform(686.975,264.325);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFDB").s().p("AgBgUIABgBIACAqIgCABg");
	this.shape_132.setTransform(662.35,264.15);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFDB").s().p("AjjAAIAAgCIHHACIAAADg");
	this.shape_133.setTransform(670.125,266.325);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFDB").s().p("AjgBfIgKi9IHJAEIAMC5gAjeBcIHGAAIgMizInDgEg");
	this.shape_134.setTransform(670.45,271.25);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgWAEIgBgIIAtAAIACAIg");
	this.shape_135.setTransform(697.6,291.45);

	this.instance_28 = new lib.Path_1_44();
	this.instance_28.setTransform(677.1,268.25,1,1,0,0,0,26.1,15.5);
	this.instance_28.alpha = 0.5;
	this.instance_28.compositeOperation = "screen";

	this.instance_29 = new lib.Path_2_18();
	this.instance_29.setTransform(666.5,294.35,1,1,0,0,0,6.5,1.6);
	this.instance_29.alpha = 0.5;
	this.instance_29.compositeOperation = "multiply";

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.rf(["#777992","#957290"],[0,1],-30.1,-0.6,0,-30.1,-0.6,23.3).s().p("Ak9AIIAUgFIJJAAQAYgDAGgHQgCAEgGADQgMAIgVAAg");
	this.shape_136.setTransform(671.4125,291.9625);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#6BEDF7","#4095FF"],[0.004,1],0,18.2,0,-18.1).s().p("AkKC2QgKAAgIgHQgHgHgBgKIgVk4QgBgLAIgIQAIgIAMAAIIjAJQAKABAHAGQAIAGABAKIAbEuQABALgIAJQgIAJgLAAg");
	this.shape_137.setTransform(670.2604,272.2735);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#321F56","#484161"],[0.004,1],0,20.1,0,-20).s().p("AkcDJQgLAAgIgIQgIgHgBgMIgXlXQgBgMAJgKQAIgIANgBIJKALQAKAAAIAHQAIAHABAKIAdFOQACANgJAJQgIAKgNAAg");
	this.shape_138.setTransform(670.1349,272.25);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.rf(["#A6A8CA","#957290"],[0,1],-3.8,-13.7,0,-3.8,-13.7,13.1).s().p("AAJDLQgHgCgFgFQgNgJgBgPIgWlIIADgXQALgWAiAAIAfGUg");
	this.shape_139.setTransform(638.725,272.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.rf(["#A6A8CA","#957290"],[0,1],-32.1,-13.3,0,-32.1,-13.3,27.7).s().p("AkgDGQgLAAgIgIQgIgHgBgLIgVlDQgBgMANgRQANgRAMAAII6AKQAKABAIAHQAIAHABAKIApFIQACANgJAJQgIAKgNAAg");
	this.shape_140.setTransform(668.5155,272.525);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#E0AEBD","#DBEAE3"],[0.224,1],0,4.4,0,-4.3).s().p("Ag4AsIAQhXIBhAAIgTBXg");
	this.shape_141.setTransform(668.425,291.475);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#957290","#918CBD"],[0,1],0,4.4,0,-4.3).s().p("AgVAsIAVhXIAWAAIgRBXg");
	this.shape_142.setTransform(662.175,291.475);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#E0AEBD","#DBEAE3"],[0.224,1],-9.8,0,9.9,0).s().p("AhiAIIAAgPIC7AAIAKAPg");
	this.shape_143.setTransform(672.075,296.675);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#918CBD","#957290"],[0,1],-4.5,0,4.5,0).s().p("AgsAIIAAgPIBVAAIAEAPg");
	this.shape_144.setTransform(658.125,296.675);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#6BEDF7","#4095FF"],[0.004,1],0,8.3,0,-8.3).s().p("AhjBQIAOigIC5gCIgUClg");
	this.shape_145.setTransform(745.225,283.95);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AhsBjIASjCIDHgDIgWDGg");
	this.shape_146.setTransform(745.25,282.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgqAEIABgHIBUAAIgBAIg");
	this.shape_147.setTransform(716.075,289.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("Ag8AEIAAgIIB5ABIAAAIg");
	this.shape_148.setTransform(723.65,288.025);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AhBAEIAAgIICDABIgBAIg");
	this.shape_149.setTransform(718.7,286.375);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgLAEIAAgIIAXAAIAAAIg");
	this.shape_150.setTransform(722.3,289.65);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgGAEIABgIIAMAAIgBAIg");
	this.shape_151.setTransform(715.375,291.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgGAFIAAgIIANAAIgBAIg");
	this.shape_152.setTransform(712.4,291.05);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgGAEIABgHIAMAAIgBAHg");
	this.shape_153.setTransform(724.925,289.675);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgNAEIABgIIAZAAIAAAIg");
	this.shape_154.setTransform(713.55,287.95);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgpAEIAAgIIBTAAIAAAIg");
	this.shape_155.setTransform(716.5,283.35);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("Ag8AEIABgHIB4AAIgBAIg");
	this.shape_156.setTransform(724.075,281.75);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AhCAEIABgIICEAAIgBAIg");
	this.shape_157.setTransform(719.1,280.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgMAEIABgIIAYABIgBAHg");
	this.shape_158.setTransform(722.725,283.35);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgwAFIABgIIBgAAIAAAIg");
	this.shape_159.setTransform(717.45,278.45);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgaAEIAAgIIA1AAIAAAIg");
	this.shape_160.setTransform(730.475,276.85);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AhBAEIAAgIICEAAIgBAIg");
	this.shape_161.setTransform(719.35,276.85);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AhOAFIABgIICbAAIgBAIg");
	this.shape_162.setTransform(720.65,275.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgZAEIABgHIAyAAIgBAHg");
	this.shape_163.setTransform(715.45,273.575);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgUAEIAAgIIApAAIAAAIg");
	this.shape_164.setTransform(725.35,278.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgGAEIABgHIAMAAIgBAHg");
	this.shape_165.setTransform(715.825,284.825);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgGAEIABgIIAMABIgBAHg");
	this.shape_166.setTransform(712.825,284.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgGAEIABgHIAMAAIAAAIg");
	this.shape_167.setTransform(725.35,283.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgMAEIABgHIAZAAIgBAHg");
	this.shape_168.setTransform(730.7,275.225);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgNAEIABgHIAZAAIgBAHg");
	this.shape_169.setTransform(714,281.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#918CBD","#957290"],[0,1],25.5,0,-25.4,0).s().p("Aj+ALIALgVIHyAAIAAAVg");
	this.shape_170.setTransform(714.325,296.25);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#E0AEBD","#DBEAE3"],[0.224,1],10.2,0,-10.1,0).s().p("AhigKIDIAGIgCAOIjJABg");
	this.shape_171.setTransform(749.675,296.25);

	this.instance_30 = new lib.Path_4_14();
	this.instance_30.setTransform(727.3,279.4,1,1,0,0,0,20.1,10.6);
	this.instance_30.compositeOperation = "screen";

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.rf(["#777992","#957290"],[0,1],24.2,-0.5,0,24.2,-0.5,18.8).s().p("AjlAEQgPAAgIgFIgDgCQAGADAMABIHpAAIAEADg");
	this.shape_172.setTransform(733.075,295.875);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#6BEDF7","#4095FF"],[0.004,1],0,13,0,-13).s().p("AjwCCQgIAAgGgGQgFgGABgIIASjYQABgHAFgFQAGgEAGAAIHPgHQAIAAAGAGQAFAFAAAJIgPDeQAAAHgFAFQgGAFgHAAg");
	this.shape_173.setTransform(734.2444,282.675);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#281742","#322D45"],[0.004,1],0,-13.7,0,13.8).s().p("Aj+CKQgJAAgGgHQgFgGABgJIATjkQABgHAGgFQAFgFAHAAIHqgHQAIgBAHAHQAGAGgBAIIgQDsQAAAIgGAFQgFAFgIAAg");
	this.shape_174.setTransform(734.3495,282.1982);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["#E0AEBD","#DBEAE3"],[0.224,1],2.7,0,-2.6,0).s().p("AgZCLIAVkVQATAAAIAOQAEAIAAAHIgRDjQgBALgJAGIgKAEg");
	this.shape_175.setTransform(759.7,282.375);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("Ag3AGIgBgLIBwAAIAAALg");
	this.shape_176.setTransform(589.25,285.975);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AhPAGIgBgLIChAAIAAALg");
	this.shape_177.setTransform(599.05,283.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AhXAGIAAgLICvAAIAAALg");
	this.shape_178.setTransform(592.225,281.625);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgPAGIAAgLIAfAAIAAALg");
	this.shape_179.setTransform(597.5,285.975);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgsAGIAAgLIBZAAIAAALg");
	this.shape_180.setTransform(593.05,248.175);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgHAGIgBgLIAQAAIABALg");
	this.shape_181.setTransform(586.8,248.175);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgIAGIAAgLIAQAAIABALg");
	this.shape_182.setTransform(582.8,248.175);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AggAGIgBgLIBCAAIABALg");
	this.shape_183.setTransform(585.625,255.15);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgpAGIgBgLIBUAAIABALg");
	this.shape_184.setTransform(591.275,252.975);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgQAGIgBgLIAiAAIABALg");
	this.shape_185.setTransform(583.925,252.975);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AhXAGIgBgLICwAAIABALg");
	this.shape_186.setTransform(590.9,250.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgsAGIAAgLIBYAAIABALg");
	this.shape_187.setTransform(593.45,257.575);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgIAGIAAgLIARAAIAAALg");
	this.shape_188.setTransform(587.2,257.575);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgHAGIgBgLIARAAIAAALg");
	this.shape_189.setTransform(588.55,287.975);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgIAGIAAgLIAQAAIABALg");
	this.shape_190.setTransform(583.25,257.575);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgIAGIAAgLIARAAIAAALg");
	this.shape_191.setTransform(584.6,287.975);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgIAGIAAgLIAQAAIABALg");
	this.shape_192.setTransform(601,285.975);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgQAGIgBgLIAiAAIABALg");
	this.shape_193.setTransform(585.675,283.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("Ag3AGIgBgLIBwAAIABALg");
	this.shape_194.setTransform(588.875,277.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AhPAGIgBgLIChAAIAAALg");
	this.shape_195.setTransform(598.7,275.425);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AhXAGIAAgLICvAAIAAALg");
	this.shape_196.setTransform(591.875,273.25);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgPAGIAAgLIAfAAIAAALg");
	this.shape_197.setTransform(597.15,277.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("Ag/AGIgBgLICAAAIABALg");
	this.shape_198.setTransform(589.425,271.075);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgjAGIAAgLIBGAAIABALg");
	this.shape_199.setTransform(606.5,268.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AhXAGIAAgLICvAAIAAALg");
	this.shape_200.setTransform(591.675,268.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AhmAGIgBgLIDPAAIAAALg");
	this.shape_201.setTransform(593.15,266.725);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AggAGIgBgLIBCAAIABALg");
	this.shape_202.setTransform(586.025,264.55);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgpAGIgBgLIBUAAIABALg");
	this.shape_203.setTransform(591.675,262.375);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgbAGIAAgLIA3AAIAAALg");
	this.shape_204.setTransform(599.9,271.075);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgIAGIAAgLIAQAAIABALg");
	this.shape_205.setTransform(588.2,279.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgHAGIgBgLIARAAIAAALg");
	this.shape_206.setTransform(584.2,279.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgIAGIAAgLIAQAAIABALg");
	this.shape_207.setTransform(600.65,277.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgQAGIgBgLIAiAAIABALg");
	this.shape_208.setTransform(606.575,266.725);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgQAGIgBgLIAiAAIABALg");
	this.shape_209.setTransform(585.275,275.425);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgQAGIgBgLIAiAAIABALg");
	this.shape_210.setTransform(584.325,262.375);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AhXAGIAAgLICvAAIAAALg");
	this.shape_211.setTransform(591.3,260.2);

	this.instance_31 = new lib.Path_45();
	this.instance_31.setTransform(620.9,264.15,1,1,0,0,0,30.7,20.1);
	this.instance_31.alpha = 0.5;
	this.instance_31.compositeOperation = "screen";

	this.instance_32 = new lib.Path_1_43();
	this.instance_32.setTransform(605.65,294.9,1,1,0,0,0,6.5,1.6);
	this.instance_32.alpha = 0.5;
	this.instance_32.compositeOperation = "multiply";

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.rf(["#777992","#957290"],[0,1],-34.5,-0.6,0,-34.5,-0.6,26.7).s().p("AlsAJIAUgFIKmgBQAagDAFgHQgDAEgGADQgMAJgVAAg");
	this.shape_212.setTransform(615.2125,292.45);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.lf(["#6BEDF7","#4095FF"],[0.004,1],0,22.8,0,-22.7).s().p("Ak4DkQgKAAgIgHQgHgHgBgKIgVmUQgBgLAIgIQAIgIAMAAIJ/AJQAKABAIAGQAHAGABAKIAbGKQACAMgIAJQgIAIgMAAg");
	this.shape_213.setTransform(614.0354,268.1985);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.lf(["#321F56","#484161"],[0.004,1],0,24.7,0,-24.6).s().p("AlLD3QgLAAgIgIQgIgHgBgMIgXmzQAAgNAIgJQAJgJAMAAIKnALQAKAAAIAHQAIAHABAKIAdGqQACANgJAJQgIAKgNAAg");
	this.shape_214.setTransform(613.9099,268.175);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.rf(["#A6A8CA","#957290"],[0,1],-3.8,-16.8,0,-3.8,-16.8,16).s().p("AAJD5QgHgCgFgEQgNgJgBgQIgWmkIADgXQALgXAiAAIAfHxg");
	this.shape_215.setTransform(577.875,268.425);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.rf(["#A6A8CA","#957290"],[0,1],-36.4,-16.5,0,-36.4,-16.5,32.1).s().p("AlOD0QgLAAgIgHQgIgIgBgLIgVmfQgBgMANgRQANgRAMAAIKWAKQALABAHAGQAIAIABAJIApGmQACAMgIAJQgIAKgNAAg");
	this.shape_216.setTransform(612.2905,268.45);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.lf(["#E0AEBD","#DBEAE3"],[0.224,1],0,4.4,0,-4.3).s().p("Ag4AsIAQhXIBhAAIgTBXg");
	this.shape_217.setTransform(607.575,292.025);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.lf(["#957290","#918CBD"],[0,1],0,4.4,0,-4.3).s().p("AgVAsIAVhXIAWAAIgRBXg");
	this.shape_218.setTransform(601.325,292.025);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.lf(["#E0AEBD","#DBEAE3"],[0.224,1],-10.9,0,10.9,0).s().p("AhsAIIAAgPIDKAAIAPAPg");
	this.shape_219.setTransform(612.275,297.225);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.lf(["#918CBD","#957290"],[0,1],-4.5,0,4.5,0).s().p("AgsAIIAAgPIBVAAIAEAPg");
	this.shape_220.setTransform(597.275,297.225);

	this.instance_33 = new lib.Path_43();
	this.instance_33.setTransform(627.85,338.6,1,1,0,0,0,15,18.5);

	this.instance_34 = new lib.Path_1_42();
	this.instance_34.setTransform(637.45,343.45,1,1,0,0,0,7,16.2);
	this.instance_34.alpha = 0.5;
	this.instance_34.compositeOperation = "screen";

	this.instance_35 = new lib.Path_2_17();
	this.instance_35.setTransform(633.5,345.5,1,1,0,0,0,8.9,26.8);
	this.instance_35.alpha = 0.5;
	this.instance_35.compositeOperation = "screen";

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgBimIAEgFIAAFNIgFAKg");
	this.shape_221.setTransform(640.325,349.775);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgDjnIAHAAIgEHOIgDABg");
	this.shape_222.setTransform(637.875,341.9);

	this.instance_36 = new lib.Path_42();
	this.instance_36.setTransform(620.6,336.45,1,1,0,0,0,6.2,8.4);
	this.instance_36.alpha = 0.5;
	this.instance_36.compositeOperation = "screen";

	this.instance_37 = new lib.Ellipse_32();
	this.instance_37.setTransform(620.65,336.45,1,1,0,0,0,6.8,9.2);
	this.instance_37.alpha = 0.5;
	this.instance_37.compositeOperation = "screen";

	this.instance_38 = new lib.Path_41();
	this.instance_38.setTransform(656.5,349.55,1,1,0,0,0,0.5,0.7);
	this.instance_38.alpha = 0.5;
	this.instance_38.compositeOperation = "screen";

	this.instance_39 = new lib.Path_1_41();
	this.instance_39.setTransform(656.45,349.45,1,1,0,0,0,0.6,0.8);
	this.instance_39.alpha = 0.5;
	this.instance_39.compositeOperation = "screen";

	this.instance_40 = new lib.Path_2_16();
	this.instance_40.setTransform(656.5,349.45,1,1,0,0,0,0.7,0.9);
	this.instance_40.alpha = 0.5;
	this.instance_40.compositeOperation = "screen";

	this.instance_41 = new lib.Path_3_14();
	this.instance_41.setTransform(656.35,349.45,1,1,0,0,0,0.8,1.2);
	this.instance_41.alpha = 0.5;
	this.instance_41.compositeOperation = "screen";

	this.instance_42 = new lib.Path_4_13();
	this.instance_42.setTransform(656.45,349.45,1,1,0,0,0,1.5,2.1);
	this.instance_42.alpha = 0.5;
	this.instance_42.compositeOperation = "screen";

	this.instance_43 = new lib.Path_40();
	this.instance_43.setTransform(659.75,354.15,1,1,0,0,0,0.5,0.7);
	this.instance_43.alpha = 0.5;
	this.instance_43.compositeOperation = "screen";

	this.instance_44 = new lib.Path_1_40();
	this.instance_44.setTransform(659.7,354.05,1,1,0,0,0,0.6,0.8);
	this.instance_44.alpha = 0.5;
	this.instance_44.compositeOperation = "screen";

	this.instance_45 = new lib.Path_2_15();
	this.instance_45.setTransform(659.75,354.1,1,1,0,0,0,0.7,0.9);
	this.instance_45.alpha = 0.5;
	this.instance_45.compositeOperation = "screen";

	this.instance_46 = new lib.Path_3_13();
	this.instance_46.setTransform(659.65,354.05,1,1,0,0,0,0.8,1.2);
	this.instance_46.alpha = 0.5;
	this.instance_46.compositeOperation = "screen";

	this.instance_47 = new lib.Path_4_12();
	this.instance_47.setTransform(659.65,354.1,1,1,0,0,0,1.4,2.1);
	this.instance_47.alpha = 0.5;
	this.instance_47.compositeOperation = "screen";

	this.instance_48 = new lib.Path_39();
	this.instance_48.setTransform(659.75,360.7,1,1,0,0,0,0.5,0.7);
	this.instance_48.alpha = 0.5;
	this.instance_48.compositeOperation = "screen";

	this.instance_49 = new lib.Path_1_39();
	this.instance_49.setTransform(659.75,360.65,1,1,0,0,0,0.6,0.8);
	this.instance_49.alpha = 0.5;
	this.instance_49.compositeOperation = "screen";

	this.instance_50 = new lib.Path_2_14();
	this.instance_50.setTransform(659.8,360.75,1,1,0,0,0,0.7,1);
	this.instance_50.alpha = 0.5;
	this.instance_50.compositeOperation = "screen";

	this.instance_51 = new lib.Path_3_12();
	this.instance_51.setTransform(659.65,360.7,1,1,0,0,0,0.8,1.3);
	this.instance_51.alpha = 0.5;
	this.instance_51.compositeOperation = "screen";

	this.instance_52 = new lib.Path_4_11();
	this.instance_52.setTransform(659.75,360.65,1,1,0,0,0,1.5,2.1);
	this.instance_52.alpha = 0.5;
	this.instance_52.compositeOperation = "screen";

	this.instance_53 = new lib.Path_38();
	this.instance_53.setTransform(656.55,365.4,1,1,0,0,0,0.5,0.7);
	this.instance_53.alpha = 0.5;
	this.instance_53.compositeOperation = "screen";

	this.instance_54 = new lib.Path_1_38();
	this.instance_54.setTransform(656.5,365.3,1,1,0,0,0,0.6,0.8);
	this.instance_54.alpha = 0.5;
	this.instance_54.compositeOperation = "screen";

	this.instance_55 = new lib.Path_2_13();
	this.instance_55.setTransform(656.55,365.4,1,1,0,0,0,0.7,1);
	this.instance_55.alpha = 0.5;
	this.instance_55.compositeOperation = "screen";

	this.instance_56 = new lib.Path_3_11();
	this.instance_56.setTransform(656.45,365.3,1,1,0,0,0,0.8,1.2);
	this.instance_56.alpha = 0.5;
	this.instance_56.compositeOperation = "screen";

	this.instance_57 = new lib.Path_4_10();
	this.instance_57.setTransform(656.5,365.35,1,1,0,0,0,1.5,2.1);
	this.instance_57.alpha = 0.5;
	this.instance_57.compositeOperation = "screen";

	this.instance_58 = new lib.Path_37();
	this.instance_58.setTransform(651.95,365.4,1,1,0,0,0,0.5,0.7);
	this.instance_58.alpha = 0.5;
	this.instance_58.compositeOperation = "screen";

	this.instance_59 = new lib.Path_1_37();
	this.instance_59.setTransform(651.9,365.35,1,1,0,0,0,0.6,0.8);
	this.instance_59.alpha = 0.5;
	this.instance_59.compositeOperation = "screen";

	this.instance_60 = new lib.Path_2_12();
	this.instance_60.setTransform(651.95,365.45,1,1,0,0,0,0.7,1);
	this.instance_60.alpha = 0.5;
	this.instance_60.compositeOperation = "screen";

	this.instance_61 = new lib.Path_3_10();
	this.instance_61.setTransform(651.85,365.4,1,1,0,0,0,0.8,1.3);
	this.instance_61.alpha = 0.5;
	this.instance_61.compositeOperation = "screen";

	this.instance_62 = new lib.Path_4_9();
	this.instance_62.setTransform(651.85,365.35,1,1,0,0,0,1.4,2.1);
	this.instance_62.alpha = 0.5;
	this.instance_62.compositeOperation = "screen";

	this.instance_63 = new lib.Path_36();
	this.instance_63.setTransform(648.7,360.8,1,1,0,0,0,0.5,0.7);
	this.instance_63.alpha = 0.5;
	this.instance_63.compositeOperation = "screen";

	this.instance_64 = new lib.Path_1_36();
	this.instance_64.setTransform(648.65,360.7,1,1,0,0,0,0.6,0.8);
	this.instance_64.alpha = 0.5;
	this.instance_64.compositeOperation = "screen";

	this.instance_65 = new lib.Path_2_11();
	this.instance_65.setTransform(648.7,360.8,1,1,0,0,0,0.7,1);
	this.instance_65.alpha = 0.5;
	this.instance_65.compositeOperation = "screen";

	this.instance_66 = new lib.Path_3_9();
	this.instance_66.setTransform(648.65,360.7,1,1,0,0,0,0.9,1.2);
	this.instance_66.alpha = 0.5;
	this.instance_66.compositeOperation = "screen";

	this.instance_67 = new lib.Path_4_8();
	this.instance_67.setTransform(648.65,360.75,1,1,0,0,0,1.5,2.1);
	this.instance_67.alpha = 0.5;
	this.instance_67.compositeOperation = "screen";

	this.instance_68 = new lib.Path_35();
	this.instance_68.setTransform(648.65,354.25,1,1,0,0,0,0.5,0.7);
	this.instance_68.alpha = 0.5;
	this.instance_68.compositeOperation = "screen";

	this.instance_69 = new lib.Path_1_35();
	this.instance_69.setTransform(648.65,354.15,1,1,0,0,0,0.6,0.8);
	this.instance_69.alpha = 0.5;
	this.instance_69.compositeOperation = "screen";

	this.instance_70 = new lib.Path_2_10();
	this.instance_70.setTransform(648.6,354.25,1,1,0,0,0,0.6,1);
	this.instance_70.alpha = 0.5;
	this.instance_70.compositeOperation = "screen";

	this.instance_71 = new lib.Path_3_8();
	this.instance_71.setTransform(648.55,354.15,1,1,0,0,0,0.8,1.2);
	this.instance_71.alpha = 0.5;
	this.instance_71.compositeOperation = "screen";

	this.instance_72 = new lib.Path_4_7();
	this.instance_72.setTransform(648.65,354.15,1,1,0,0,0,1.5,2.1);
	this.instance_72.alpha = 0.5;
	this.instance_72.compositeOperation = "screen";

	this.instance_73 = new lib.Path_34();
	this.instance_73.setTransform(651.9,349.55,1,1,0,0,0,0.5,0.7);
	this.instance_73.alpha = 0.5;
	this.instance_73.compositeOperation = "screen";

	this.instance_74 = new lib.Path_1_34();
	this.instance_74.setTransform(651.85,349.45,1,1,0,0,0,0.6,0.8);
	this.instance_74.alpha = 0.5;
	this.instance_74.compositeOperation = "screen";

	this.instance_75 = new lib.Path_2_9();
	this.instance_75.setTransform(651.9,349.5,1,1,0,0,0,0.7,0.9);
	this.instance_75.alpha = 0.5;
	this.instance_75.compositeOperation = "screen";

	this.instance_76 = new lib.Path_3_7();
	this.instance_76.setTransform(651.8,349.45,1,1,0,0,0,0.8,1.2);
	this.instance_76.alpha = 0.5;
	this.instance_76.compositeOperation = "screen";

	this.instance_77 = new lib.Path_4_6();
	this.instance_77.setTransform(651.8,349.5,1,1,0,0,0,1.4,2.1);
	this.instance_77.alpha = 0.5;
	this.instance_77.compositeOperation = "screen";

	this.instance_78 = new lib.Path_33();
	this.instance_78.setTransform(658.3,351.15,1,1,0,0,0,0.5,0.7);
	this.instance_78.alpha = 0.5;
	this.instance_78.compositeOperation = "screen";

	this.instance_79 = new lib.Path_1_33();
	this.instance_79.setTransform(658.25,351.05,1,1,0,0,0,0.6,0.8);
	this.instance_79.alpha = 0.5;
	this.instance_79.compositeOperation = "screen";

	this.instance_80 = new lib.Path_2_8();
	this.instance_80.setTransform(658.2,351.2,1,1,0,0,0,0.6,1);
	this.instance_80.alpha = 0.5;
	this.instance_80.compositeOperation = "screen";

	this.instance_81 = new lib.Path_3_6();
	this.instance_81.setTransform(658.15,351.05,1,1,0,0,0,0.8,1.2);
	this.instance_81.alpha = 0.5;
	this.instance_81.compositeOperation = "screen";

	this.instance_82 = new lib.Path_4_5();
	this.instance_82.setTransform(658.25,351.1,1,1,0,0,0,1.5,2.1);
	this.instance_82.alpha = 0.5;
	this.instance_82.compositeOperation = "screen";

	this.instance_83 = new lib.Path_32();
	this.instance_83.setTransform(660.2,357.1,1,1,0,0,0,0.5,0.7);
	this.instance_83.alpha = 0.5;
	this.instance_83.compositeOperation = "screen";

	this.instance_84 = new lib.Ellipse_31();
	this.instance_84.setTransform(660.2,357,1,1,0,0,0,0.6,0.8);
	this.instance_84.alpha = 0.5;
	this.instance_84.compositeOperation = "screen";

	this.instance_85 = new lib.Path_1_32();
	this.instance_85.setTransform(660.2,357.05,1,1,0,0,0,0.7,0.9);
	this.instance_85.alpha = 0.5;
	this.instance_85.compositeOperation = "screen";

	this.instance_86 = new lib.Ellipse_1_2();
	this.instance_86.setTransform(660.1,357,1,1,0,0,0,0.8,1.2);
	this.instance_86.alpha = 0.5;
	this.instance_86.compositeOperation = "screen";

	this.instance_87 = new lib.Ellipse_2_1();
	this.instance_87.setTransform(660.1,357.05,1,1,0,0,0,1.4,2.1);
	this.instance_87.alpha = 0.5;
	this.instance_87.compositeOperation = "screen";

	this.instance_88 = new lib.Path_31();
	this.instance_88.setTransform(658.55,363.2,1,1,0,0,0,0.4,0.6);
	this.instance_88.alpha = 0.5;
	this.instance_88.compositeOperation = "screen";

	this.instance_89 = new lib.Path_1_31();
	this.instance_89.setTransform(658.6,363.2,1,1,0,0,0,0.6,0.8);
	this.instance_89.alpha = 0.5;
	this.instance_89.compositeOperation = "screen";

	this.instance_90 = new lib.Path_2_7();
	this.instance_90.setTransform(658.65,363.3,1,1,0,0,0,0.7,1);
	this.instance_90.alpha = 0.5;
	this.instance_90.compositeOperation = "screen";

	this.instance_91 = new lib.Ellipse_30();
	this.instance_91.setTransform(658.6,363.2,1,1,0,0,0,0.9,1.2);
	this.instance_91.alpha = 0.5;
	this.instance_91.compositeOperation = "screen";

	this.instance_92 = new lib.Path_3_5();
	this.instance_92.setTransform(658.6,363.2,1,1,0,0,0,1.5,2.1);
	this.instance_92.alpha = 0.5;
	this.instance_92.compositeOperation = "screen";

	this.instance_93 = new lib.Path_30();
	this.instance_93.setTransform(654.5,366.05,1,1,0,0,0,0.5,0.7);
	this.instance_93.alpha = 0.5;
	this.instance_93.compositeOperation = "screen";

	this.instance_94 = new lib.Path_1_30();
	this.instance_94.setTransform(654.45,365.95,1,1,0,0,0,0.6,0.8);
	this.instance_94.alpha = 0.5;
	this.instance_94.compositeOperation = "screen";

	this.instance_95 = new lib.Path_2_6();
	this.instance_95.setTransform(654.5,366,1,1,0,0,0,0.7,0.9);
	this.instance_95.alpha = 0.5;
	this.instance_95.compositeOperation = "screen";

	this.instance_96 = new lib.Path_3_4();
	this.instance_96.setTransform(654.45,365.95,1,1,0,0,0,0.9,1.2);
	this.instance_96.alpha = 0.5;
	this.instance_96.compositeOperation = "screen";

	this.instance_97 = new lib.Path_4_4();
	this.instance_97.setTransform(654.45,366,1,1,0,0,0,1.5,2.1);
	this.instance_97.alpha = 0.5;
	this.instance_97.compositeOperation = "screen";

	this.instance_98 = new lib.Path_29();
	this.instance_98.setTransform(650.15,363.8,1,1,0,0,0,0.5,0.7);
	this.instance_98.alpha = 0.5;
	this.instance_98.compositeOperation = "screen";

	this.instance_99 = new lib.Path_1_29();
	this.instance_99.setTransform(650.15,363.7,1,1,0,0,0,0.6,0.8);
	this.instance_99.alpha = 0.5;
	this.instance_99.compositeOperation = "screen";

	this.instance_100 = new lib.Path_2_5();
	this.instance_100.setTransform(650.15,363.8,1,1,0,0,0,0.7,1);
	this.instance_100.alpha = 0.5;
	this.instance_100.compositeOperation = "screen";

	this.instance_101 = new lib.Path_3_3();
	this.instance_101.setTransform(650.05,363.7,1,1,0,0,0,0.8,1.2);
	this.instance_101.alpha = 0.5;
	this.instance_101.compositeOperation = "screen";

	this.instance_102 = new lib.Path_4_3();
	this.instance_102.setTransform(650.05,363.75,1,1,0,0,0,1.4,2.1);
	this.instance_102.alpha = 0.5;
	this.instance_102.compositeOperation = "screen";

	this.instance_103 = new lib.Path_27();
	this.instance_103.setTransform(648.25,357.85,1,1,0,0,0,0.5,0.7);
	this.instance_103.alpha = 0.5;
	this.instance_103.compositeOperation = "screen";

	this.instance_104 = new lib.Path_1_28();
	this.instance_104.setTransform(648.2,357.75,1,1,0,0,0,0.6,0.8);
	this.instance_104.alpha = 0.5;
	this.instance_104.compositeOperation = "screen";

	this.instance_105 = new lib.Path_2_4();
	this.instance_105.setTransform(648.25,357.85,1,1,0,0,0,0.7,1);
	this.instance_105.alpha = 0.5;
	this.instance_105.compositeOperation = "screen";

	this.instance_106 = new lib.Path_3_2();
	this.instance_106.setTransform(648.2,357.75,1,1,0,0,0,0.9,1.2);
	this.instance_106.alpha = 0.5;
	this.instance_106.compositeOperation = "screen";

	this.instance_107 = new lib.Path_4_2();
	this.instance_107.setTransform(648.2,357.8,1,1,0,0,0,1.5,2.1);
	this.instance_107.alpha = 0.5;
	this.instance_107.compositeOperation = "screen";

	this.instance_108 = new lib.Path_26();
	this.instance_108.setTransform(649.8,351.65,1,1,0,0,0,0.5,0.7);
	this.instance_108.alpha = 0.5;
	this.instance_108.compositeOperation = "screen";

	this.instance_109 = new lib.Path_1_27();
	this.instance_109.setTransform(649.75,351.6,1,1,0,0,0,0.6,0.8);
	this.instance_109.alpha = 0.5;
	this.instance_109.compositeOperation = "screen";

	this.instance_110 = new lib.Path_2_3();
	this.instance_110.setTransform(649.8,351.6,1,1,0,0,0,0.7,0.9);
	this.instance_110.alpha = 0.5;
	this.instance_110.compositeOperation = "screen";

	this.instance_111 = new lib.Path_3_1();
	this.instance_111.setTransform(649.7,351.65,1,1,0,0,0,0.8,1.3);
	this.instance_111.alpha = 0.5;
	this.instance_111.compositeOperation = "screen";

	this.instance_112 = new lib.Path_4_1();
	this.instance_112.setTransform(649.7,351.6,1,1,0,0,0,1.4,2.1);
	this.instance_112.alpha = 0.5;
	this.instance_112.compositeOperation = "screen";

	this.instance_113 = new lib.Path_25();
	this.instance_113.setTransform(653.95,348.9,1,1,0,0,0,0.5,0.7);
	this.instance_113.alpha = 0.5;
	this.instance_113.compositeOperation = "screen";

	this.instance_114 = new lib.Path_1_26();
	this.instance_114.setTransform(653.95,348.8,1,1,0,0,0,0.6,0.8);
	this.instance_114.alpha = 0.5;
	this.instance_114.compositeOperation = "screen";

	this.instance_115 = new lib.Path_2_2();
	this.instance_115.setTransform(653.95,348.9,1,1,0,0,0,0.7,1);
	this.instance_115.alpha = 0.5;
	this.instance_115.compositeOperation = "screen";

	this.instance_116 = new lib.Path_3_0();
	this.instance_116.setTransform(653.85,348.8,1,1,0,0,0,0.8,1.2);
	this.instance_116.alpha = 0.5;
	this.instance_116.compositeOperation = "screen";

	this.instance_117 = new lib.Path_4_0();
	this.instance_117.setTransform(653.85,348.85,1,1,0,0,0,1.4,2.1);
	this.instance_117.alpha = 0.5;
	this.instance_117.compositeOperation = "screen";

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["#281742","#322D45"],[0.004,1],-10.5,0,10.5,0).s().p("AhoAIIAAgPIDRAAIAAAPg");
	this.shape_223.setTransform(623.775,348.975);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#11132D").s().p("AhYBPIgDidIC3AAIgBCdg");
	this.shape_224.setTransform(622.525,357.725);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.lf(["#321F56","#484161"],[0.004,1],0,7.6,0,-7.5).s().p("AgSBLIgXh2IgXAAIgUgfIBcAAIBMCVg");
	this.shape_225.setTransform(650.9,320.45);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#11132D").s().p("Ai1AOIAAgSIFjgLIAIAfg");
	this.shape_226.setTransform(627.225,314.475);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["#281742","#322D45"],[0.004,1],0,26.7,0,-26.7).s().p("AgfEKIgIm4IA8hcIATAAIhDBdIAJG4g");
	this.shape_227.setTransform(615.625,345.425);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#0C0C1F").s().p("AiPEKIgHm4IA9hcIDeAAIASB0IAAFPIgxBRg");
	this.shape_228.setTransform(626.775,345.35);

	this.instance_118 = new lib.Path_11_0();
	this.instance_118.setTransform(654.15,356.15,1,1,0,0,0,7,14.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#11132D").s().p("AhEChIgGlAICWgBIgFFBg");
	this.shape_229.setTransform(653.65,357.525);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#11132D").s().p("AhagBIC1ABIAAACIi1AAg");
	this.shape_230.setTransform(653.7,339.5);

	this.instance_119 = new lib.Path_14_4();
	this.instance_119.setTransform(653.2,322.05,1,1,0,0,0,6.5,6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#11132D").s().p("Agfg7IAiAAIAdB3g");
	this.shape_231.setTransform(656.175,322.025);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#11132D").s().p("AisEtIgFpZIFTAHIAQCAIAAHSg");
	this.shape_232.setTransform(626.775,345.375);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.lf(["#281742","#322D45"],[0.004,1],0,29.7,0,-29.7).s().p("AhfEpIgEpSICjABIAkB8IgJHVg");
	this.shape_233.setTransform(653,345.75);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#11132D").s().p("AigAMIAHgTIE6gGIAAAbg");
	this.shape_234.setTransform(650.875,296.225);

	this.instance_120 = new lib.Path_7_2();
	this.instance_120.setTransform(633.55,278.95,1,1,0,0,0,12.2,15);
	this.instance_120.alpha = 0.5;
	this.instance_120.compositeOperation = "multiply";

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgwAFIAAgKIBhABIAAAKg");
	this.shape_235.setTransform(759.875,271.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AhGAEIABgJICMABIgBAKg");
	this.shape_236.setTransform(768.65,269.575);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AhMAFIABgJICYABIgBAIg");
	this.shape_237.setTransform(762.9,267.65);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgOAFIABgJIAbAAIgBAJg");
	this.shape_238.setTransform(767.1,271.425);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPAAIgBAJg");
	this.shape_239.setTransform(759.1,273.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgHAFIABgJIAOAAIgBAJg");
	this.shape_240.setTransform(755.625,273.075);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgHAFIABgJIAOAAIgBAJg");
	this.shape_241.setTransform(770.125,271.475);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgPAFIABgJIAeAAIgBAJg");
	this.shape_242.setTransform(756.975,269.475);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgwAFIAAgJIBhAAIAAAJg");
	this.shape_243.setTransform(760.375,264.125);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AhFAEIAAgJICLABIAAAKg");
	this.shape_244.setTransform(769.15,262.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AhMAFIAAgJICZAAIgBAJg");
	this.shape_245.setTransform(763.4,260.375);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgNAFIAAgJIAbAAIAAAJg");
	this.shape_246.setTransform(767.6,264.175);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("Ag4AFIABgJIBwAAIgBAJg");
	this.shape_247.setTransform(761.5,258.475);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgfAFIABgJIA9AAIAAAJg");
	this.shape_248.setTransform(776.55,256.625);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AhMAFIABgJICYAAIgBAJg");
	this.shape_249.setTransform(763.65,256.625);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AhaAFIABgJIC0AAIgBAJg");
	this.shape_250.setTransform(765.175,254.725);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgdAFIABgJIA6AAIgBAJg");
	this.shape_251.setTransform(759.15,252.85);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgYAFIAAgJIAxAAIgBAJg");
	this.shape_252.setTransform(770.6,258.525);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgHAFIABgJIAOAAIgBAJg");
	this.shape_253.setTransform(759.575,265.875);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgHAFIABgJIAOAAIgBAJg");
	this.shape_254.setTransform(756.125,265.85);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgHAFIABgJIAOAAIgBAJg");
	this.shape_255.setTransform(770.625,264.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgOAFIAAgJIAdAAIAAAJg");
	this.shape_256.setTransform(776.8,254.75);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgOAFIAAgJIAdAAIAAAJg");
	this.shape_257.setTransform(757.45,262.25);

	this.instance_121 = new lib.Path_24();
	this.instance_121.setTransform(777.9,261.6,1,1,0,0,0,29.4,15.4);
	this.instance_121.compositeOperation = "screen";

	this.instance_122 = new lib.Path_1_25();
	this.instance_122.setTransform(790.9,287.4,1,1,0,0,0,6.1,1.4);
	this.instance_122.alpha = 0.5;
	this.instance_122.compositeOperation = "multiply";

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.rf(["#777992","#957290"],[0,1],36.3,-0.8,0,36.3,-0.8,28.2).s().p("AlZAGQgVAAgMgHIgDgEQAHAFASABILPABIATAEg");
	this.shape_258.setTransform(787.2125,285.3875);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.lf(["#6BEDF7","#4095FF"],[0.004,1],0,18.1,0,-18).s().p("AlhC1QgMAAgIgIQgIgKACgKIAbkuQABgJAHgGQAIgHAJABIKpgKQAMAAAIAIQAIAJgBALIgVE1QgBAKgIAHQgHAHgKAAg");
	this.shape_259.setTransform(788.1437,265.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.lf(["#281742","#322D45"],[0.004,1],0,-19.9,0,20).s().p("Al1DIQgNAAgIgKQgJgJACgNIAdlMQABgKAIgHQAIgHAKAAILPgLQANABAIAIQAJAJgBANIgXFVQAAALgJAIQgIAIgLAAg");
	this.shape_260.setTransform(788.294,265.6);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.lf(["#E0AEBD","#DBEAE3"],[0.224,1],4,0,-4,0).s().p("AgoDKIAgmTQAiAAAKAYQAGAKgCAMIgWFGQgBAPgNAJIgMAHg");
	this.shape_261.setTransform(826.3517,265.85);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.rf(["#A6A8CA","#957290"],[0,1],38.4,-13.3,0,38.4,-13.3,32.1).s().p("Al4DFQgMAAgIgKQgJgJACgMIAplHQABgLAIgHQAHgHALAAIK/gKQAMAAANARQANAQgBANIgWFBQAAALgIAHQgIAIgLAAg");
	this.shape_262.setTransform(789.8925,265.8743);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.lf(["#918CBD","#957290"],[0,1],0,-7.7,0,7.7).s().p("AgkBNIgUiZIBhAAIAQCZg");
	this.shape_263.setTransform(789.95,288.05);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.lf(["#E0AEBD","#DBEAE3"],[0.224,1],0,-7.7,0,7.7).s().p("AgEBNIgQiZIAUAAIAWCZg");
	this.shape_264.setTransform(796.2,288.05);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.lf(["#918CBD","#957290"],[0,1],9.8,0,-9.8,0).s().p("AhhAIIAJgPIC6AAIAAAPg");
	this.shape_265.setTransform(786.35,296.575);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.lf(["#E0AEBD","#DBEAE3"],[0.224,1],4.5,0,-4.5,0).s().p("AgsAIIAEgPIBVAAIAAAPg");
	this.shape_266.setTransform(800.25,296.575);

	this.instance_123 = new lib.Path_19();
	this.instance_123.setTransform(586.75,322.25,1,1,0,0,0,10,17);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.lf(["#8B849F","#82597C"],[0,1],0,2.7,0,-2.7).s().p("AgkAbIAcg1IAtAAIglA1g");
	this.shape_267.setTransform(566.75,372.775);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.lf(["#DBEAE3","#C5AEBD"],[0,1],0,2.6,0,-2.5).s().p("AgBAWIglguIAzAAIAaAxg");
	this.shape_268.setTransform(819.375,373.425);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.lf(["#DBEAE3","#C5AEBD"],[0,1],0,35.2,0,-35.2).s().p("AgcFgIACq/IA3AAIgWK/g");
	this.shape_269.setTransform(787.175,340.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.lf(["#8B849F","#82597C"],[0,1],0,35.4,0,-35.3).s().p("ABGEvIiEAAIgoAtIiaACIAVq/IHsACIg6K9IhnAEg");
	this.shape_270.setTransform(813.6,340.575);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.lf(["#8B849F","#82597C"],[0,1],0,35.2,0,-35.2).s().p("AgVlfIA1AAIgQK+IguABg");
	this.shape_271.setTransform(605.6,340.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.lf(["#DBEAE3","#C5AEBD"],[0,1],0,35.2,0,-35.1).s().p("ABwFgIgPgzIizgDIgcA2IiNAAIgoq9IJHgCIgJK/g");
	this.shape_272.setTransform(574.175,340.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.lf(["#DBEAE3","#C5AEBD"],[0,1],-49,0,49.1,0).s().p("AnpgnIPUAAIgFBOIvPABg");
	this.shape_273.setTransform(741.5,301.375);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.lf(["#8B849F","#82597C"],[0,1],-118.4,0,118.5,0).s().p("AyfAmIAAhNMAk/AAAIgJBPg");
	this.shape_274.setTransform(721.875,301.425);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.lf(["#DBEAE3","#C5AEBD"],[0,1],-29.7,0,29.7,0).s().p("AkognIJRAAIAABNIpHACg");
	this.shape_275.setTransform(573.75,301.425);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#11132D").s().p("AorC/QhQgYgogzIAFgEQBABTCpALQCOAJCJgpIA2gQQCggwBIgYQCEgqAwgYQBagsBthqQAfgfCIgzIACAFQgiANgmARQhKAhgTASQhwBshYArQgwAZiFAqQhJAXigAxIg1APQhwAih7AAQheAAhGgWg");
	this.shape_276.setTransform(730.125,325.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#11132D").s().p("ApcC3QgxgOgqgSIgigPIAGgLIA2AXQBDAaBMARQDwA2Dog3QDog3Emi5QCTheBnhUIAIAJQhoBViUBeQknC6jqA4Qh0Abh7AAQigAAiagug");
	this.shape_277.setTransform(731.275,322.325);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#11132D").s().p("AnYAgIiQgCIAAgGIEpADQEwACA1gFQAlgFAZgIQgIgDgCgFQgJgRARgLQAJgHALgBQANgBAHAHQAHAHgEAJQgEAMgVAJQAnAKBaACQBTABAmgFQAPgCAJgFQAGgDAIgHQAJgHAIgEQAMgFAVgCQAkgDBBAMQAiAGAcAHIgBAFQgbgHghgFQhDgMgjADQgTABgMAGQgGADgKAHQgIAHgGADQgLAFgQADQgjAFhWgCQhigCgmgLQgbALgsAEQgnAFi7AAIkcgCgABlgVQgMAKAGAMQADAEAJADQAZgJAEgMQACgFgFgFQgEgEgIAAQgLAAgJAGg");
	this.shape_278.setTransform(758.825,294.6118);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#11132D").s().p("AgaggIgjk+IAFgBIAjE3QAqE/ApBGIgFADQgqhHgpk5g");
	this.shape_279.setTransform(621.575,326.525);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#11132D").s().p("AgGg2IAokWIAGABIgoEWQgnEkAIBdIgGABQgJheAoklg");
	this.shape_280.setTransform(651.6915,325.225);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#11132D").s().p("AqTGBIABgGQBbAREugLQEYgKAzgNQgHgCgTACQgTABgHgBQgNgBgCgIQgEgJAIgLQAMgOAYgLQAbgMAUAEQALACAFALQADAGACAOQACAUAGAIQAJANAaACQBzAHCTgHQDEgJALgjQALglANlZIALlYIAGABQgRKbgSA8QgNAojSAJQiSAGhrgHQgcgCgLgPQgGgJgDgWQgBgOgDgFQgEgIgIgBQgTgEgZALQgWAKgLAOQgHAJACAFQAEAHAhgCIAVAAQAJAAAEAFIABACIgBACQgFAIi2ALQi9ALihAAQiPAAg1gKg");
	this.shape_281.setTransform(688.225,334.875);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#11132D").s().p("AgcG4QhCgBg7gDQg7gEgMgCQgJgCgEgGIhZADQh+AIh7gEQjxgJgog9Qgqg/g/kFQg3jogEhCIAFgBQADAoA4DwQBBEYAnA8QAnA6D1AJQB7AEB3gIIBXgDIgBgCQAAgNATgPQATgPAYgHQATgFASAMQALAIATAVIAMANQDNgCAkANQAKADgCAFIAAABIDbgGQC+gGB2gHQB3gHAKgGQAPgJBHklQA6jvBBktIAGABQi1M8gfASQgSALjtAKQjKAIjfAEQgbADgxAAgAhdGjQALALALACIAZACQApABCKgCIAKgCIgDgBQgegMiZAAIgyABgAjlGmIAHACQATAEB2AFQgIgFgIgJIiAADgAiwFyQgXAGgSAPQgRANAAAKIAAACIB/gDIgIgJQgQgSgIgGQgOgLgOAAQgFAAgEABg");
	this.shape_282.setTransform(690.725,330.925);

	this.instance_124 = new lib.Path_10_0();
	this.instance_124.setTransform(717.2,314.7,1,1,0,0,0,24.8,9.5);
	this.instance_124.alpha = 0.5;
	this.instance_124.compositeOperation = "multiply";

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.lf(["#8B849F","#82597C"],[0,1],-4.2,0,4.3,0).s().p("AgHAZIgjgvIAsgCIApAxg");
	this.shape_283.setTransform(721.65,371.125);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.lf(["#AAA5C8","#8B84B4","#82597C"],[0.039,0.486,1],0,34.2,0,-34.2).s().p("AgUFWIgHqrIA3AAIgHKrg");
	this.shape_284.setTransform(689.55,339.425);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.lf(["#8B849F","#82597C"],[0,1],0,34.2,0,-34.2).s().p("ABtFWIgpgyIh8AFIg3AtIicAAIAAqqIIXgBIggKrg");
	this.shape_285.setTransform(715.05,339.425);

	this.instance_125 = new lib.Path_1_24();
	this.instance_125.setTransform(500.25,368.1,1,1,0,0,0,500,36.5);
	this.instance_125.alpha = 0.5;
	this.instance_125.compositeOperation = "multiply";

	this.instance_126 = new lib.Path_18();
	this.instance_126.setTransform(495.75,344.9,1,1,0,0,0,54.4,5.8);
	this.instance_126.compositeOperation = "screen";

	this.instance_127 = new lib.Ellipse_29();
	this.instance_127.setTransform(495.75,348.7,1,1,0,0,0,73.1,15.5);
	this.instance_127.compositeOperation = "screen";

	this.instance_128 = new lib.Ellipse_28();
	this.instance_128.setTransform(497.15,373.9,1,1,0,0,0,91.7,9.7);
	this.instance_128.compositeOperation = "screen";

	this.instance_129 = new lib.Ellipse_1_1();
	this.instance_129.setTransform(497.1,380.35,1,1,0,0,0,123.2,26.1);
	this.instance_129.compositeOperation = "screen";

	this.instance_130 = new lib.Ellipse_3_0();
	this.instance_130.setTransform(781.85,289.15,1,1,0,0,0,54.1,21);
	this.instance_130.compositeOperation = "screen";

	this.instance_131 = new lib.Ellipse_0();
	this.instance_131.setTransform(484.75,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_131.compositeOperation = "screen";

	this.instance_132 = new lib.Ellipse_1_0();
	this.instance_132.setTransform(472.5,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_132.compositeOperation = "screen";

	this.instance_133 = new lib.Ellipse_2_0();
	this.instance_133.setTransform(171.35,360.05,1,1,0,0,0,8.5,20.9);
	this.instance_133.alpha = 0.5;
	this.instance_133.compositeOperation = "screen";

	this.instance_134 = new lib.Ellipse_3();
	this.instance_134.setTransform(166.85,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_134.alpha = 0.5;
	this.instance_134.compositeOperation = "screen";

	this.instance_135 = new lib.Ellipse_4();
	this.instance_135.setTransform(368.15,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_135.compositeOperation = "screen";

	this.instance_136 = new lib.Ellipse_5();
	this.instance_136.setTransform(361.1,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_136.compositeOperation = "screen";

	this.instance_137 = new lib.Ellipse_6();
	this.instance_137.setTransform(821.7,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_137.compositeOperation = "screen";

	this.instance_138 = new lib.Ellipse_7();
	this.instance_138.setTransform(797.3,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_138.compositeOperation = "screen";

	this.instance_139 = new lib.Ellipse_8();
	this.instance_139.setTransform(786.4,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_139.compositeOperation = "screen";

	this.instance_140 = new lib.Ellipse_9();
	this.instance_140.setTransform(775.5,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_140.compositeOperation = "screen";

	this.instance_141 = new lib.Ellipse_10();
	this.instance_141.setTransform(730.2,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_141.compositeOperation = "screen";

	this.instance_142 = new lib.Ellipse_11();
	this.instance_142.setTransform(672.75,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_142.compositeOperation = "screen";

	this.instance_143 = new lib.Ellipse_12();
	this.instance_143.setTransform(614.05,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_143.compositeOperation = "screen";

	this.instance_144 = new lib.Ellipse_13();
	this.instance_144.setTransform(596.25,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_144.compositeOperation = "screen";

	this.instance_145 = new lib.Ellipse_14();
	this.instance_145.setTransform(588.2,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_145.compositeOperation = "screen";

	this.instance_146 = new lib.Ellipse_15();
	this.instance_146.setTransform(580.1,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_146.compositeOperation = "screen";

	this.instance_147 = new lib.Ellipse_16();
	this.instance_147.setTransform(572.05,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_147.compositeOperation = "screen";

	this.instance_148 = new lib.Ellipse_17();
	this.instance_148.setTransform(571.65,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_148.compositeOperation = "screen";

	this.instance_149 = new lib.Ellipse_18();
	this.instance_149.setTransform(563.15,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_149.compositeOperation = "screen";

	this.instance_150 = new lib.Ellipse_19();
	this.instance_150.setTransform(721.6,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_150.compositeOperation = "screen";

	this.instance_151 = new lib.Ellipse_20();
	this.instance_151.setTransform(764.6,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_151.compositeOperation = "screen";

	this.instance_152 = new lib.Ellipse_21();
	this.instance_152.setTransform(320.75,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_152.compositeOperation = "screen";

	this.instance_153 = new lib.Ellipse_22();
	this.instance_153.setTransform(309.85,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_153.compositeOperation = "screen";

	this.instance_154 = new lib.Ellipse_23();
	this.instance_154.setTransform(298.95,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_154.compositeOperation = "screen";

	this.instance_155 = new lib.Ellipse_24();
	this.instance_155.setTransform(288.05,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_155.compositeOperation = "screen";

	this.instance_156 = new lib.Ellipse_25();
	this.instance_156.setTransform(277.15,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_156.compositeOperation = "screen";

	this.instance_157 = new lib.Ellipse_26();
	this.instance_157.setTransform(224.75,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_157.compositeOperation = "screen";

	this.instance_158 = new lib.Ellipse_27();
	this.instance_158.setTransform(266.3,355.55,1,1,0,0,0,8.5,20.9);
	this.instance_158.compositeOperation = "screen";

	this.instance_159 = new lib.Path_13();
	this.instance_159.setTransform(497.2,369.7,1,1,0,0,0,354.1,35);
	this.instance_159.alpha = 0.5;
	this.instance_159.compositeOperation = "screen";

	this.instance_160 = new lib.Path_2_1();
	this.instance_160.setTransform(500.25,202.95,1,1,0,0,0,500,157.8);
	this.instance_160.alpha = 0.8008;
	this.instance_160.compositeOperation = "multiply";

	this.instance_161 = new lib.Path_11();
	this.instance_161.setTransform(496.5,223.9,1,1,0,0,0,359.5,108.2);
	this.instance_161.alpha = 0.8008;
	this.instance_161.compositeOperation = "multiply";

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.rf(["#F9F9FB","#C2BED7"],[0.039,1],0,0,0,0,0,17).s().p("AjlgEIHNAAIAJAGInhADg");
	this.shape_286.setTransform(596.825,326.75);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.lf(["#3B2F5A","#190C43"],[0,1],0,1,0,-1).s().p("AjmAKIAAgTIHNAAIAAATg");
	this.shape_287.setTransform(596.9,327.25);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.rf(["#F9F9FB","#C2BED7"],[0.039,1],0,0,0,0,0,17).s().p("AjlgEIHNAAIAJAHInhACg");
	this.shape_288.setTransform(596.825,323.35);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.rf(["#F9F9FB","#C2BED7"],[0.039,1],0,0,0,0,0,17).s().p("AjlgEIHNAAIAJAHInhACg");
	this.shape_289.setTransform(596.825,320);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.lf(["#3B2F5A","#190C43"],[0,1],0,1,0,-1).s().p("AjmAKIAAgTIHNAAIAAATg");
	this.shape_290.setTransform(596.9,323.85);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.lf(["#3B2F5A","#190C43"],[0,1],0,1,0,-1).s().p("AjmAKIAAgTIHNAAIAAATg");
	this.shape_291.setTransform(596.9,320.5);

	this.instance_162 = new lib.Ellipse();
	this.instance_162.setTransform(422.85,222.35,1,1,0,0,0,20,16.9);
	this.instance_162.compositeOperation = "screen";

	this.instance_163 = new lib.Ellipse_1();
	this.instance_163.setTransform(280.35,266.75,1,1,0,0,0,54.1,21);
	this.instance_163.compositeOperation = "screen";

	this.instance_164 = new lib.Ellipse_2();
	this.instance_164.setTransform(506.7,215.1,1,1,0,0,0,80.8,31.4);
	this.instance_164.compositeOperation = "screen";

	this.instance_165 = new lib.Path_1_23();
	this.instance_165.setTransform(495.15,212.95,1,1,0,0,0,141.6,68.7);
	this.instance_165.alpha = 0.5;
	this.instance_165.compositeOperation = "screen";

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.rf(["#F9F9FB","#C2BED7"],[0.039,1],0,0,0,0,0,17).s().p("AjlgEIHNAAIAIAGInfADg");
	this.shape_292.setTransform(799.45,326.75);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.lf(["#3B2F5A","#190C43"],[0,1],0,1,0,-1).s().p("AjmAKIAAgTIHNAAIAAATg");
	this.shape_293.setTransform(799.55,327.25);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.rf(["#F9F9FB","#C2BED7"],[0.039,1],0,0,0,0,0,17).s().p("AjlgEIHNAAIAIAHInfACg");
	this.shape_294.setTransform(799.45,323.35);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.rf(["#F9F9FB","#C2BED7"],[0.039,1],0,0,0,0,0,17).s().p("AjlgEIHNAAIAIAHInfACg");
	this.shape_295.setTransform(799.45,320);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.lf(["#3B2F5A","#190C43"],[0,1],0,1,0,-1).s().p("AjmAKIAAgTIHNAAIAAATg");
	this.shape_296.setTransform(799.55,323.85);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.lf(["#3B2F5A","#190C43"],[0,1],0,1,0,-1).s().p("AjmAKIAAgTIHNAAIAAATg");
	this.shape_297.setTransform(799.55,320.5);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.rf(["#F9F9FB","#C2BED7"],[0.039,1],0,0,0,0,0,17).s().p("AjlgEIHNAAIAJAGInhADg");
	this.shape_298.setTransform(698.125,326.75);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.lf(["#3B2F5A","#190C43"],[0,1],0,1,0,-1).s().p("AjmAKIAAgTIHNAAIAAATg");
	this.shape_299.setTransform(698.225,327.25);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.rf(["#F9F9FB","#C2BED7"],[0.039,1],0,0,0,0,0,17).s().p("AjlgEIHNAAIAJAHInhACg");
	this.shape_300.setTransform(698.125,323.35);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.rf(["#F9F9FB","#C2BED7"],[0.039,1],0,0,0,0,0,17).s().p("AjlgEIHNAAIAJAHInhACg");
	this.shape_301.setTransform(698.125,320);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.lf(["#3B2F5A","#190C43"],[0,1],0,1,0,-1).s().p("AjmAKIAAgTIHNAAIAAATg");
	this.shape_302.setTransform(698.225,323.85);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.lf(["#3B2F5A","#190C43"],[0,1],0,1,0,-1).s().p("AjmAKIAAgTIHNAAIAAATg");
	this.shape_303.setTransform(698.225,320.5);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.rf(["#F9F9FB","#C2BED7"],[0.039,1],0,0,0,0,0,17).s().p("AjlgEIHNAAIAJAGInhADg");
	this.shape_304.setTransform(495.5,326.75);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.lf(["#3B2F5A","#190C43"],[0,1],0,1,0,-1).s().p("AjmAKIAAgTIHNAAIAAATg");
	this.shape_305.setTransform(495.6,327.25);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.rf(["#F9F9FB","#C2BED7"],[0.039,1],0,0,0,0,0,17).s().p("AjlgEIHNAAIAJAHInhACg");
	this.shape_306.setTransform(495.5,323.35);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.rf(["#F9F9FB","#C2BED7"],[0.039,1],0,0,0,0,0,17).s().p("AjlgEIHNAAIAJAHInhACg");
	this.shape_307.setTransform(495.5,320);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.lf(["#3B2F5A","#190C43"],[0,1],0,1,0,-1).s().p("AjmAKIAAgTIHNAAIAAATg");
	this.shape_308.setTransform(495.6,323.85);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.lf(["#3B2F5A","#190C43"],[0,1],0,1,0,-1).s().p("AjmAKIAAgTIHNAAIAAATg");
	this.shape_309.setTransform(495.6,320.5);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.rf(["#F9F9FB","#C2BED7"],[0.039,1],0,0,0,0,0,17).s().p("AjlgEIHNAAIAJAGInhADg");
	this.shape_310.setTransform(394.175,326.75);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.lf(["#3B2F5A","#190C43"],[0,1],0,1,0,-1).s().p("AjmAKIAAgTIHNAAIAAATg");
	this.shape_311.setTransform(394.25,327.25);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.rf(["#F9F9FB","#C2BED7"],[0.039,1],0,0,0,0,0,17).s().p("AjlgEIHNAAIAJAHInhACg");
	this.shape_312.setTransform(394.175,323.35);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.rf(["#F9F9FB","#C2BED7"],[0.039,1],0,0,0,0,0,17).s().p("AjlgEIHNAAIAJAHInhACg");
	this.shape_313.setTransform(394.175,320);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.lf(["#3B2F5A","#190C43"],[0,1],0,1,0,-1).s().p("AjmAKIAAgTIHNAAIAAATg");
	this.shape_314.setTransform(394.25,323.85);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.lf(["#3B2F5A","#190C43"],[0,1],0,1,0,-1).s().p("AjmAKIAAgTIHNAAIAAATg");
	this.shape_315.setTransform(394.25,320.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.rf(["#F9F9FB","#C2BED7"],[0.039,1],0,0,0,0,0,17).s().p("AjlgEIHNAAIAIAGInfADg");
	this.shape_316.setTransform(292.85,326.75);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.lf(["#3B2F5A","#190C43"],[0,1],0,1,0,-1).s().p("AjmAKIAAgTIHNAAIAAATg");
	this.shape_317.setTransform(292.95,327.25);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.rf(["#F9F9FB","#C2BED7"],[0.039,1],0,0,0,0,0,17).s().p("AjlgEIHNAAIAIAHInfACg");
	this.shape_318.setTransform(292.85,323.35);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.rf(["#F9F9FB","#C2BED7"],[0.039,1],0,0,0,0,0,17).s().p("AjlgEIHNAAIAIAHInfACg");
	this.shape_319.setTransform(292.85,320);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.lf(["#3B2F5A","#190C43"],[0,1],0,1,0,-1).s().p("AjmAKIAAgTIHNAAIAAATg");
	this.shape_320.setTransform(292.95,323.85);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.lf(["#3B2F5A","#190C43"],[0,1],0,1,0,-1).s().p("AjmAKIAAgTIHNAAIAAATg");
	this.shape_321.setTransform(292.95,320.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.rf(["#F9F9FB","#C2BED7"],[0.039,1],0,0,0,0,0,17).s().p("AjlgEIHNAAIAJAGInhADg");
	this.shape_322.setTransform(191.55,326.75);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.lf(["#3B2F5A","#190C43"],[0,1],0,1,0,-1).s().p("AjmAKIAAgTIHNAAIAAATg");
	this.shape_323.setTransform(191.65,327.25);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.rf(["#F9F9FB","#C2BED7"],[0.039,1],0,0,0,0,0,17).s().p("AjlgEIHNAAIAJAHInhACg");
	this.shape_324.setTransform(191.55,323.35);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.rf(["#F9F9FB","#C2BED7"],[0.039,1],0,0,0,0,0,17).s().p("AjlgEIHNAAIAJAHInhACg");
	this.shape_325.setTransform(191.55,320);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.lf(["#3B2F5A","#190C43"],[0,1],0,1,0,-1).s().p("AjmAKIAAgTIHNAAIAAATg");
	this.shape_326.setTransform(191.65,323.85);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.lf(["#3B2F5A","#190C43"],[0,1],0,1,0,-1).s().p("AjmAKIAAgTIHNAAIAAATg");
	this.shape_327.setTransform(191.65,320.5);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#604573").s().p("Eg3UAACIAAgEMBupAABIAAAEg");
	this.shape_328.setTransform(497.175,316.7);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.lf(["#221445","#190C43"],[0,1],0,1.1,0,-1).s().p("AgyALIgLgVIB7AAIgFAVg");
	this.shape_329.setTransform(751.95,331.5);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.lf(["#221445","#190C43"],[0,1],0,1.1,0,-1).s().p("AgyALIgLgVIB7AAIgFAVg");
	this.shape_330.setTransform(834.025,331.35);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.lf(["#221445","#190C43"],[0,1],0,1.1,0,-1).s().p("AgyALIgLgVIB7AAIgFAVg");
	this.shape_331.setTransform(655.075,331.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.lf(["#221445","#190C43"],[0,1],0,1.1,0,-1).s().p("AgzALIgKgVIB7AAIgFAVg");
	this.shape_332.setTransform(737.15,331.45);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.lf(["#221445","#190C43"],[0,1],0,1.1,0,-1).s().p("AgyALIgLgVIB7AAIgFAVg");
	this.shape_333.setTransform(553.675,332.225);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.lf(["#221445","#190C43"],[0,1],0,1.1,0,-1).s().p("AgyALIgLgVIB7AAIgFAVg");
	this.shape_334.setTransform(635.775,332.05);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.lf(["#221445","#190C43"],[0,1],0,1.1,0,-1).s().p("AgzALIgKgVIB7AAIgFAVg");
	this.shape_335.setTransform(455.6,332.225);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.lf(["#221445","#190C43"],[0,1],0,1.1,0,-1).s().p("AgzALIgKgVIB7AAIgFAVg");
	this.shape_336.setTransform(537.7,332.05);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.lf(["#221445","#190C43"],[0,1],0,1.1,0,-1).s().p("AgyALIgLgVIB7AAIgFAVg");
	this.shape_337.setTransform(357.525,332.225);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.lf(["#221445","#190C43"],[0,1],0,1.1,0,-1).s().p("AgyALIgLgVIB7AAIgFAVg");
	this.shape_338.setTransform(439.625,332.05);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.lf(["#221445","#190C43"],[0,1],0,1.1,0,-1).s().p("AgyALIgLgVIB7AAIgFAVg");
	this.shape_339.setTransform(340.5,332.225);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.lf(["#221445","#190C43"],[0,1],0,1.1,0,-1).s().p("AgyALIgLgVIB7AAIgFAVg");
	this.shape_340.setTransform(255.975,332.55);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.lf(["#221445","#190C43"],[0,1],0,1.2,0,-1.1).s().p("Ag0AMIgLgVICAgCIgKAXg");
	this.shape_341.setTransform(239.15,332.45);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.lf(["#221445","#190C43"],[0,1],0,1.1,0,-1).s().p("AgyALIgLgVIB7AAIgFAVg");
	this.shape_342.setTransform(152.525,332.55);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#F9FF00").s().p("AgEAUIAAgnIAKAAIAAAng");
	this.shape_343.setTransform(464.65,133.55);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#00FFFF").s().p("AgFAUIAAgnIAKAAIAAAng");
	this.shape_344.setTransform(462.35,133.55);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#00FFFF").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_345.setTransform(460.225,133.55);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAIIAAgOIEXAAIAAAOg");
	this.shape_346.setTransform(495.35,135.2);

	this.instance_166 = new lib.Path_1_22();
	this.instance_166.setTransform(495.35,133.55,1,1,0,0,0,14,2.4);
	this.instance_166.alpha = 0.3008;
	this.instance_166.compositeOperation = "multiply";

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#00FFFF").s().p("AgsAKIAAgTIBZAAIAAATg");
	this.shape_347.setTransform(524.8,137.175);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#F9FF00").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAJgHgBQgGABAAgJg");
	this.shape_348.setTransform(527.525,133.55);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#475788").s().p("AgHAAQABgIAGAAQADAAADADQACADAAACQAAAJgIgBQgGABgBgJg");
	this.shape_349.setTransform(521.95,133.55);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#475788").s().p("AgGAAQAAgHAGAAQAHAAAAAHQAAAJgHAAQgGAAAAgJg");
	this.shape_350.setTransform(527.525,129.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#475788").s().p("AgHAAQABgHAGAAQAIAAAAAHQAAADgCADQgDADgDAAQgGAAgBgJg");
	this.shape_351.setTransform(521.95,129.8);

	this.instance_167 = new lib.Rectangle_4_1();
	this.instance_167.setTransform(496.15,133.5,1,1,0,0,0,37.9,5.5);
	this.instance_167.compositeOperation = "screen";

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#F9FF00").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_352.setTransform(469.425,162.9);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#F9FF00").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_353.setTransform(467.025,162.9);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#F9FF00").s().p("AgEAUIAAgnIAKAAIAAAng");
	this.shape_354.setTransform(464.65,162.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#00FFFF").s().p("AgFAUIAAgnIAKAAIAAAng");
	this.shape_355.setTransform(462.35,162.9);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#00FFFF").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_356.setTransform(460.225,162.9);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAIIAAgOIEXAAIAAAOg");
	this.shape_357.setTransform(495.35,164.55);

	this.instance_168 = new lib.Path_1_21();
	this.instance_168.setTransform(495.35,162.9,1,1,0,0,0,14,2.4);
	this.instance_168.alpha = 0.3008;
	this.instance_168.compositeOperation = "multiply";

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#285AB8").s().p("AgsAKIAAgTIBZAAIAAATg");
	this.shape_358.setTransform(524.8,166.525);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#F9FF00").s().p("AgGAAQAAgIAGABQAHgBAAAIQAAAJgHgBQgGABAAgJg");
	this.shape_359.setTransform(527.525,162.9);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#475788").s().p("AgHAAQABgIAGABQAIgBAAAIQAAADgCADQgDACgDAAQgGABgBgJg");
	this.shape_360.setTransform(521.95,162.9);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#475788").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAJgHAAQgGAAAAgJg");
	this.shape_361.setTransform(527.525,159.125);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#475788").s().p("AgHAAQABgIAGAAQADAAADADQACADAAACQAAAEgCACQgDADgDAAQgGAAgBgJg");
	this.shape_362.setTransform(521.95,159.125);

	this.instance_169 = new lib.Rectangle_6_1();
	this.instance_169.setTransform(496.15,162.85,1,1,0,0,0,37.9,5.5);
	this.instance_169.compositeOperation = "screen";

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#F9FF00").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_363.setTransform(474.175,237.95);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#F9FF00").s().p("AgFAUIAAgnIAKAAIAAAng");
	this.shape_364.setTransform(471.8,237.95);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#F9FF00").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_365.setTransform(469.425,237.95);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#F9FF00").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_366.setTransform(467.025,237.95);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#F9FF00").s().p("AgEAUIAAgnIAKAAIAAAng");
	this.shape_367.setTransform(464.65,237.95);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#00FFFF").s().p("AgFAUIAAgnIAKAAIAAAng");
	this.shape_368.setTransform(462.35,237.95);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#00FFFF").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_369.setTransform(460.225,237.95);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAIIAAgOIEXAAIAAAOg");
	this.shape_370.setTransform(495.35,239.6);

	this.instance_170 = new lib.Path_1_20();
	this.instance_170.setTransform(495.35,237.95,1,1,0,0,0,14,2.4);
	this.instance_170.alpha = 0.3008;
	this.instance_170.compositeOperation = "multiply";

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#455BFF").s().p("AgsAKIAAgTIBZAAIAAATg");
	this.shape_371.setTransform(524.8,241.575);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#F90000").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAJgHAAQgGAAAAgJg");
	this.shape_372.setTransform(527.525,234.175);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AgHAAQABgIAGAAQADAAADADQACADAAACQAAAEgCACQgDADgDAAQgGAAgBgJg");
	this.shape_373.setTransform(521.95,234.175);

	this.instance_171 = new lib.Rectangle_8_5();
	this.instance_171.setTransform(496.15,237.9,1,1,0,0,0,37.9,5.5);
	this.instance_171.compositeOperation = "screen";

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#F9FF00").s().p("AgFATIAAglIAKAAIAAAlg");
	this.shape_374.setTransform(471.8,253.95);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_375.setTransform(469.425,253.95);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_376.setTransform(467.025,253.95);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#F9FF00").s().p("AgEATIAAglIAKAAIAAAlg");
	this.shape_377.setTransform(464.65,253.95);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#00FFFF").s().p("AgFATIAAglIAKAAIAAAlg");
	this.shape_378.setTransform(462.35,253.95);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#00FFFF").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_379.setTransform(460.225,253.95);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAIIAAgOIEXAAIAAAOg");
	this.shape_380.setTransform(495.35,255.35);

	this.instance_172 = new lib.Path_1_19();
	this.instance_172.setTransform(495.35,253.7,1,1,0,0,0,14,2.4);
	this.instance_172.alpha = 0.3008;
	this.instance_172.compositeOperation = "multiply";

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#455BFF").s().p("AgsAKIAAgTIBZAAIAAATg");
	this.shape_381.setTransform(524.8,256.925);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAIgHAAQgGAAAAgIg");
	this.shape_382.setTransform(527.525,250.9);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("AgHAAQABgIAGAAQADAAADADQACADAAACQAAAIgIAAQgGAAgBgIg");
	this.shape_383.setTransform(521.95,250.9);

	this.instance_173 = new lib.Rectangle_7_6();
	this.instance_173.setTransform(496.15,253.65,1,1,0,0,0,37.9,5.5);
	this.instance_173.compositeOperation = "screen";

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#00FFFF").s().p("AgEAGQgCgCgBgEQABgHAGAAQAIAAAAAHQAAAEgCACQgDACgDABQgCgBgCgCg");
	this.shape_384.setTransform(521.05,184.8);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#475788").s().p("AgEAGQgCgCAAgEQgBgHAHAAQAIAAgBAHQAAAEgCACQgCACgDABQgCgBgCgCg");
	this.shape_385.setTransform(525.15,184.8);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#475788").s().p("AgEAGQgDgCAAgEQAAgHAHAAQAHAAAAAHQAAAEgBACQgDACgDABQgCgBgCgCg");
	this.shape_386.setTransform(528.55,184.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#475788").s().p("AgEAGQgCgDgBgDQABgIAGAAQAIAAAAAIQAAADgCADQgDADgDgBQgCABgCgDg");
	this.shape_387.setTransform(521.05,190.05);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#F90068").s().p("AgEAGQgCgDAAgDQgBgIAHAAQAIAAgBAIQAAADgCADQgCADgDgBQgCABgCgDg");
	this.shape_388.setTransform(525.15,190.05);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#004CFF").s().p("AgEAGQgDgDAAgDQAAgIAHAAQAHAAAAAIQAAADgBADQgDADgDgBQgCABgCgDg");
	this.shape_389.setTransform(528.55,190.05);

	this.instance_174 = new lib.Path_6_5();
	this.instance_174.setTransform(525.15,187.4,1,1,0,0,0,6.5,4.6);
	this.instance_174.alpha = 0.5;
	this.instance_174.compositeOperation = "multiply";

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#004CFF").s().p("Ai7ALIAAgVIF3AAIAAAVg");
	this.shape_390.setTransform(490.2,188.275);

	this.instance_175 = new lib.Rectangle_1_15();
	this.instance_175.setTransform(492.7,188.3,1,1,0,0,0,21.3,1.1);
	this.instance_175.alpha = 0.5;
	this.instance_175.compositeOperation = "multiply";

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#F90068").s().p("Ah8ALIAAgVID5AAIAAAVg");
	this.shape_391.setTransform(483.9,185.575);

	this.instance_176 = new lib.Rectangle_3_1();
	this.instance_176.setTransform(492.7,185.6,1,1,0,0,0,21.3,1.1);
	this.instance_176.alpha = 0.5;
	this.instance_176.compositeOperation = "multiply";

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AgdAJIAAgQIA7AAIAAAQg");
	this.shape_392.setTransform(525.15,174.7);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#009DFF").s().p("AgdAIIAAgPIA7AAIAAAPg");
	this.shape_393.setTransform(496.425,176.4);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#285AB8").s().p("AgdAIIAAgPIA7AAIAAAPg");
	this.shape_394.setTransform(489.1,176.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#00FFFF").s().p("AgdAIIAAgPIA7AAIAAAPg");
	this.shape_395.setTransform(481.75,176.4);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#00FFFF").s().p("AgdAIIAAgPIA7AAIAAAPg");
	this.shape_396.setTransform(474.425,176.4);

	this.instance_177 = new lib.Path_7_1();
	this.instance_177.setTransform(501.8,180.5,1,1,0,0,0,32.4,8.8);
	this.instance_177.alpha = 0.5;
	this.instance_177.compositeOperation = "multiply";

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgHAAgIQAAgHAGgHQAFgGAHAAQAIAAAGAGQAFAHAAAHQAAAIgFAHQgGAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgDgEAAQgDAAgDADg");
	this.shape_397.setTransform(466.45,188.35);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgNAPQgFgHAAgIQAAgHAFgHQAGgGAHAAQAIAAAFAGQAGAHAAAHQAAAIgGAHQgFAGgIAAQgHAAgGgGgAgGgIQgDAEgBAEQABAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgDgEAAQgDAAgDADg");
	this.shape_398.setTransform(460.9,188.35);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgHAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAAIQAAAIgFAHQgGAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADADADABQAEgBADgDQADgEAAgFQAAgEgDgEQgDgDgEgBQgDABgDADg");
	this.shape_399.setTransform(466.45,182.8);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#00FFFF").s().p("AgJAMQgFgFABgHQgBgGAFgFQAEgFAFAAQAGAAAEAFQAFAFAAAGQAAAHgFAFQgEAFgGAAQgFAAgEgFg");
	this.shape_400.setTransform(466.45,182.8);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgNAPQgFgHAAgIQAAgIAFgGQAGgGAHAAQAIAAAFAGQAGAGAAAIQAAAIgGAHQgFAGgIAAQgHAAgGgGgAgGgIQgDAEgBAEQABAFADAEQADADADABQAEgBADgDQADgEAAgFQAAgEgDgEQgDgDgEgBQgDABgDADg");
	this.shape_401.setTransform(460.9,182.8);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#00FFFF").s().p("AgJAMQgEgFgBgHQABgGAEgFQAEgFAFAAQAGAAAFAFQADAFAAAGQAAAHgDAFQgFAFgGAAQgFAAgEgFg");
	this.shape_402.setTransform(460.9,182.8);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAAIQAAAJgFAGQgGAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgDgEAAQgDAAgDADg");
	this.shape_403.setTransform(466.45,177.225);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFFF00").s().p("AgJAMQgFgFABgHQgBgGAFgFQAEgFAFAAQAGAAAEAFQAFAFAAAGQAAAHgFAFQgEAFgGAAQgFAAgEgFg");
	this.shape_404.setTransform(466.45,177.25);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgNAPQgFgGAAgJQAAgIAFgGQAGgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgGgGgAgGgIQgDAEgBAEQABAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgDgEAAQgDAAgDADg");
	this.shape_405.setTransform(460.9,177.225);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.rf(["#675D9D","#644381"],[0,1],0,0,0,0,0,28.3).s().p("Al6BvIAAjdIL1AAIAADdg");
	this.shape_406.setTransform(496.175,182.775);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgFgDgDQgDgEgEAAQgDAAgDAEg");
	this.shape_407.setTransform(510.825,296.425);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAAIQAAAJgFAGQgGAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEABgFQgBgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_408.setTransform(505.25,296.425);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADADADAAQAEAAADgDQADgEAAgFQAAgFgDgDQgDgEgEAAQgDAAgDAEg");
	this.shape_409.setTransform(510.825,290.875);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#00FFFF").s().p("AgJAMQgFgFAAgHQAAgGAFgFQAEgFAFAAQAGAAAEAFQAFAFAAAGQgBAHgEAFQgEAFgGAAQgFAAgEgFg");
	this.shape_410.setTransform(510.8,290.85);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAAIQAAAJgFAGQgGAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADADADAAQAEAAADgDQADgEABgFQgBgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_411.setTransform(505.25,290.875);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#00FFFF").s().p("AgJAMQgFgFABgHQgBgGAFgFQAEgFAFAAQAGAAAFAFQAEAFAAAGQAAAHgEAFQgFAFgGAAQgFAAgEgFg");
	this.shape_412.setTransform(505.25,290.85);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADADADABQAEgBADgDQADgEAAgFQAAgEgDgEQgDgDgEgBQgDABgDADg");
	this.shape_413.setTransform(510.825,285.3);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAAIQAAAJgFAGQgGAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADADADABQAEgBADgDQADgEABgFQgBgEgDgEQgDgDgEgBQgDABgDADg");
	this.shape_414.setTransform(505.25,285.3);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#00FFFF").s().p("AgJAMQgFgFABgHQgBgGAFgFQAEgFAFAAQAGAAAFAFQAEAFAAAGQAAAHgEAFQgFAFgGAAQgFAAgEgFg");
	this.shape_415.setTransform(505.25,285.3);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FFFFFF").s().p("AgGAAQgBgDADgCQACgCACgBQADABACACQACACAAADQABAIgIAAQgGAAAAgIg");
	this.shape_416.setTransform(483.4,294.9);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#F90000").s().p("AgGAAQAAgDACgCQACgCACgBQADABACACQACACAAADQABAIgIAAQgHAAABgIg");
	this.shape_417.setTransform(479.7,294.9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFFFFF").s().p("AgGAAQAAgDACgCQACgCACgBQADABACACQACACAAADQAAAIgHAAQgHAAABgIg");
	this.shape_418.setTransform(476,294.9);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("AgEAGQgDgCABgEQgBgCADgDQACgDACAAQADAAACADQACADAAACQAAAEgCACQgCADgDAAQgCAAgCgDg");
	this.shape_419.setTransform(483.4,291.825);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#F90000").s().p("AgEAGQgCgCAAgEQAAgCACgDQACgDACAAQADAAACADQACADAAACQAAAEgCACQgCADgDAAQgCAAgCgDg");
	this.shape_420.setTransform(479.7,291.825);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("AgEAGQgCgCAAgEQAAgCACgDQACgDACAAQADAAACADQACADAAACQAAAEgCACQgCADgDAAQgCAAgCgDg");
	this.shape_421.setTransform(476,291.825);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFFFFF").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAIgHAAQgGAAAAgIg");
	this.shape_422.setTransform(528.275,294.35);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#F90000").s().p("AgEAGQgCgCgBgEQABgIAGAAQAIAAAAAIQAAAEgDACQgCACgDAAQgCAAgCgCg");
	this.shape_423.setTransform(524.55,294.35);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_424.setTransform(493.675,286.425);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_425.setTransform(493.675,293.5);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FFFFFF").s().p("AgEAGQgDgCABgEQAAgIAGAAQAIAAAAAIQgBAEgCACQgCACgDAAQgCAAgCgCg");
	this.shape_426.setTransform(520.85,294.35);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,3.8).s().p("AgzAQIAAgfIBnAAIAAAfg");
	this.shape_427.setTransform(524.55,294.35);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_428.setTransform(525.325,302.425);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_429.setTransform(515.625,302.425);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_430.setTransform(505.975,302.425);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_431.setTransform(496.325,302.425);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_432.setTransform(496.325,293.5);

	this.instance_178 = new lib.Rectangle_26();
	this.instance_178.setTransform(496.35,291.8,1,1,0,0,0,3.4,2.1);
	this.instance_178.alpha = 0.5;
	this.instance_178.compositeOperation = "multiply";

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_433.setTransform(496.325,286.425);

	this.instance_179 = new lib.Rectangle_1_14();
	this.instance_179.setTransform(496.35,284.7,1,1,0,0,0,3.4,2.1);
	this.instance_179.alpha = 0.5;
	this.instance_179.compositeOperation = "multiply";

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#F9FF00").s().p("AgNAuIAAhbIAbAAIAABbg");
	this.shape_434.setTransform(528.35,286.275);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#00FCFF").s().p("AgNAuIAAhbIAbAAIAABbg");
	this.shape_435.setTransform(520.85,286.275);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#00FCFF").s().p("AgNAuIAAhbIAbAAIAABbg");
	this.shape_436.setTransform(524.55,286.275);

	this.instance_180 = new lib.Path_21_2();
	this.instance_180.setTransform(487.5,294.95,1,1,0,0,0,2,1);
	this.instance_180.alpha = 0.5;
	this.instance_180.compositeOperation = "multiply";

	this.instance_181 = new lib.Path_22_3();
	this.instance_181.setTransform(487.5,291.85,1,1,0,0,0,2,1);
	this.instance_181.alpha = 0.5;
	this.instance_181.compositeOperation = "multiply";

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFFFAE").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_437.setTransform(471.425,294.925);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFAE").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_438.setTransform(471.425,291.825);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#F90068").s().p("AgpAKIAAgTIBTAAIAAATg");
	this.shape_439.setTransform(485.225,302.425);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#F90068").s().p("AgpAKIAAgTIBTAAIAAATg");
	this.shape_440.setTransform(473.575,302.425);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#00FC98").s().p("AhpAKIAAgTIDTAAIAAATg");
	this.shape_441.setTransform(480,285.925);

	this.instance_182 = new lib.Path_28_1();
	this.instance_182.setTransform(496.7,291.05,1,1,0,0,0,34.9,12.2);
	this.instance_182.alpha = 0.5;
	this.instance_182.compositeOperation = "multiply";

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.rf(["#675D9D","#644381"],[0,1],0,0,0,0,0,28.3).s().p("Al6CaIAAkzIL1AAIAAEzg");
	this.shape_442.setTransform(496.175,291.825);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgDAAgGQAAgEgDgEQgDgDgEAAQgDAAgDADg");
	this.shape_443.setTransform(510.825,218.375);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAAIQAAAJgFAGQgGAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEABgFQgBgEgDgEQgDgDgEAAQgDAAgDADg");
	this.shape_444.setTransform(505.25,218.375);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgDAAgGQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_445.setTransform(510.825,212.825);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAAIQAAAJgFAGQgGAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEABgFQgBgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_446.setTransform(505.25,212.825);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_447.setTransform(510.825,207.275);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAAIQAAAJgFAGQgGAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEABgFQgBgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_448.setTransform(505.25,207.275);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AgGAAQAAgHAGAAQAHAAAAAHQAAAJgHAAQgGAAAAgJg");
	this.shape_449.setTransform(528.275,216.3);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#F90000").s().p("AgHAAQABgCACgDQACgDACABQADgBACADQADADAAACQAAAJgIAAQgGAAgBgJg");
	this.shape_450.setTransform(524.55,216.3);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_451.setTransform(493.675,208.4);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_452.setTransform(493.675,215.475);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFFFFF").s().p("AgGAAQgBgCADgDQACgDACABQADgBACADQACADABACQAAAJgIAAQgGAAAAgJg");
	this.shape_453.setTransform(520.85,216.3);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,3.8).s().p("AgzAPIAAgdIBnAAIAAAdg");
	this.shape_454.setTransform(524.55,216.325);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_455.setTransform(525.325,224.4);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_456.setTransform(515.625,224.4);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_457.setTransform(505.975,224.4);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_458.setTransform(496.325,224.4);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_459.setTransform(496.325,215.475);

	this.instance_183 = new lib.Rectangle_25();
	this.instance_183.setTransform(496.35,213.75,1,1,0,0,0,3.4,2.1);
	this.instance_183.alpha = 0.5;
	this.instance_183.compositeOperation = "multiply";

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_460.setTransform(496.325,208.4);

	this.instance_184 = new lib.Rectangle_1_13();
	this.instance_184.setTransform(496.35,206.7,1,1,0,0,0,3.4,2.1);
	this.instance_184.alpha = 0.5;
	this.instance_184.compositeOperation = "multiply";

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#F9FF00").s().p("AgTAuIAAhbIAnAAIAABbg");
	this.shape_461.setTransform(527.75,208.25);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#00FCFF").s().p("AgTAuIAAhbIAnAAIAABbg");
	this.shape_462.setTransform(521.75,208.25);

	this.instance_185 = new lib.Path_14_3();
	this.instance_185.setTransform(487.5,216.9,1,1,0,0,0,2,1);
	this.instance_185.alpha = 0.5;
	this.instance_185.compositeOperation = "multiply";

	this.instance_186 = new lib.Path_15_4();
	this.instance_186.setTransform(487.5,213.85,1,1,0,0,0,2,1);
	this.instance_186.alpha = 0.5;
	this.instance_186.compositeOperation = "multiply";

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFFFAE").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_463.setTransform(471.425,216.875);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FFFFAE").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_464.setTransform(471.425,213.825);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#00FC98").s().p("AhpAKIAAgTIDTAAIAAATg");
	this.shape_465.setTransform(480,224.425);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#00FC98").s().p("AhpAKIAAgTIDTAAIAAATg");
	this.shape_466.setTransform(480,207.925);

	this.instance_187 = new lib.Path_20_3();
	this.instance_187.setTransform(496.7,213.1,1,1,0,0,0,34.9,12.3);
	this.instance_187.alpha = 0.5;
	this.instance_187.compositeOperation = "multiply";

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.rf(["#675D9D","#644381"],[0,1],0,0,0,0,0,28.3).s().p("Al6CZIAAkyIL1AAIAAEyg");
	this.shape_467.setTransform(496.175,213.8);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#F9FF00").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_468.setTransform(265.025,133.55);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#00FFFF").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_469.setTransform(262.725,133.55);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#00FFFF").s().p("AgFAUIAAgnIALAAIAAAng");
	this.shape_470.setTransform(260.6,133.55);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAIIAAgOIEXAAIAAAOg");
	this.shape_471.setTransform(295.7,135.2);

	this.instance_188 = new lib.Path_1_18();
	this.instance_188.setTransform(295.7,133.55,1,1,0,0,0,14,2.4);
	this.instance_188.alpha = 0.3008;
	this.instance_188.compositeOperation = "multiply";

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#00FFFF").s().p("AgsAKIAAgTIBZAAIAAATg");
	this.shape_472.setTransform(325.175,137.175);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#F9FF00").s().p("AgHAAQABgCACgDQACgDACAAQADAAACADQADADAAACQAAAJgIgBQgGABgBgJg");
	this.shape_473.setTransform(327.9,133.55);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#475788").s().p("AgGAAQgBgCADgDQACgDACAAQADAAACADQACADAAACQABAJgIgBQgGABAAgJg");
	this.shape_474.setTransform(322.3,133.55);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#475788").s().p("AgEAGQgCgDgBgDQABgHAGAAQAIAAAAAHQAAADgDADQgCADgDAAQgCAAgCgDg");
	this.shape_475.setTransform(327.9,129.8);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#475788").s().p("AgEAGQgDgDABgDQAAgHAGAAQAIAAgBAHQAAADgCADQgCADgDAAQgCAAgCgDg");
	this.shape_476.setTransform(322.3,129.8);

	this.instance_189 = new lib.Rectangle_4_0();
	this.instance_189.setTransform(296.6,133.5,1,1,0,0,0,38,5.5);
	this.instance_189.compositeOperation = "screen";

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#F9FF00").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_477.setTransform(269.775,162.9);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#F9FF00").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_478.setTransform(267.375,162.9);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#F9FF00").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_479.setTransform(265.025,162.9);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#00FFFF").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_480.setTransform(262.725,162.9);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#00FFFF").s().p("AgFAUIAAgnIALAAIAAAng");
	this.shape_481.setTransform(260.6,162.9);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAIIAAgOIEXAAIAAAOg");
	this.shape_482.setTransform(295.7,164.55);

	this.instance_190 = new lib.Path_1_17();
	this.instance_190.setTransform(295.7,162.9,1,1,0,0,0,14,2.4);
	this.instance_190.alpha = 0.3008;
	this.instance_190.compositeOperation = "multiply";

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#285AB8").s().p("AgsAKIAAgTIBZAAIAAATg");
	this.shape_483.setTransform(325.175,166.525);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#F9FF00").s().p("AgEAGQgCgDgBgDQABgIAGABQAIgBAAAIQAAADgDADQgCACgDAAQgCAAgCgCg");
	this.shape_484.setTransform(327.9,162.9);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#475788").s().p("AgEAGQgDgDABgDQAAgIAGABQAIgBgBAIQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_485.setTransform(322.3,162.9);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#475788").s().p("AgEAGQgCgCgBgEQABgCACgDQACgDACAAQADAAACADQADADAAACQAAAEgDACQgCADgDAAQgCAAgCgDg");
	this.shape_486.setTransform(327.9,159.125);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#475788").s().p("AgEAGQgDgCABgEQgBgCADgDQACgDACAAQADAAACADQACADAAACQAAAEgCACQgCADgDAAQgCAAgCgDg");
	this.shape_487.setTransform(322.3,159.125);

	this.instance_191 = new lib.Rectangle_6_0();
	this.instance_191.setTransform(296.6,162.85,1,1,0,0,0,38,5.5);
	this.instance_191.compositeOperation = "screen";

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#F90000").s().p("AgFATIAAgmIAKAAIAAAmg");
	this.shape_488.setTransform(279.75,177.55);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#F90000").s().p("AgFATIAAgmIALAAIAAAmg");
	this.shape_489.setTransform(277.15,177.55);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#F9FF00").s().p("AgEATIAAgmIAJAAIAAAmg");
	this.shape_490.setTransform(274.525,177.55);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#F9FF00").s().p("AgEATIAAgmIAJAAIAAAmg");
	this.shape_491.setTransform(272.175,177.55);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#F9FF00").s().p("AgEATIAAgmIAJAAIAAAmg");
	this.shape_492.setTransform(269.775,177.55);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#F9FF00").s().p("AgEATIAAgmIAJAAIAAAmg");
	this.shape_493.setTransform(267.375,177.55);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#F9FF00").s().p("AgEATIAAgmIAJAAIAAAmg");
	this.shape_494.setTransform(265.025,177.55);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#00FFFF").s().p("AgEATIAAgmIAJAAIAAAmg");
	this.shape_495.setTransform(262.725,177.55);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#00FFFF").s().p("AgFATIAAgmIALAAIAAAmg");
	this.shape_496.setTransform(260.6,177.55);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAHIAAgNIEXAAIAAANg");
	this.shape_497.setTransform(295.7,179.2);

	this.instance_192 = new lib.Path_1_16();
	this.instance_192.setTransform(295.7,177.55,1,1,0,0,0,14,2.4);
	this.instance_192.alpha = 0.3008;
	this.instance_192.compositeOperation = "multiply";

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#285AB8").s().p("AgsAKIAAgTIBZAAIAAATg");
	this.shape_498.setTransform(325.175,181.175);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#F9FF00").s().p("AgHAAQABgCACgDQACgDACAAQADAAACADQADADAAACQAAAIgIAAQgGAAgBgIg");
	this.shape_499.setTransform(327.9,177.55);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FFFFFF").s().p("AgGAAQgBgCADgDQACgDACAAQADAAACADQACADAAACQABAIgIAAQgGAAAAgIg");
	this.shape_500.setTransform(322.3,177.55);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#475788").s().p("AgEAGQgCgDgBgDQABgIAGABQAIgBAAAIQAAADgDADQgCADgDAAQgCAAgCgDg");
	this.shape_501.setTransform(327.9,173.8);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#475788").s().p("AgEAGQgDgDABgDQAAgIAGABQAIgBgBAIQAAADgCADQgCADgDAAQgCAAgCgDg");
	this.shape_502.setTransform(322.3,173.8);

	this.instance_193 = new lib.Rectangle_10_5();
	this.instance_193.setTransform(296.6,177.5,1,1,0,0,0,38,5.5);
	this.instance_193.compositeOperation = "screen";

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#F9FF00").s().p("AgEAUIAAgmIAJAAIAAAmg");
	this.shape_503.setTransform(274.525,235.55);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#F9FF00").s().p("AgEAUIAAgmIAJAAIAAAmg");
	this.shape_504.setTransform(272.175,235.55);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#F9FF00").s().p("AgEAUIAAgmIAJAAIAAAmg");
	this.shape_505.setTransform(269.775,235.55);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#F9FF00").s().p("AgEAUIAAgmIAJAAIAAAmg");
	this.shape_506.setTransform(267.375,235.55);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#F9FF00").s().p("AgEAUIAAgmIAJAAIAAAmg");
	this.shape_507.setTransform(265.025,235.55);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#00FFFF").s().p("AgEAUIAAgmIAJAAIAAAmg");
	this.shape_508.setTransform(262.725,235.55);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#00FFFF").s().p("AgFAUIAAgmIALAAIAAAmg");
	this.shape_509.setTransform(260.6,235.55);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAIIAAgPIEXAAIAAAPg");
	this.shape_510.setTransform(295.7,237.2);

	this.instance_194 = new lib.Path_1_15();
	this.instance_194.setTransform(295.7,235.55,1,1,0,0,0,14,2.4);
	this.instance_194.alpha = 0.3008;
	this.instance_194.compositeOperation = "multiply";

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.lf(["#FFC7CB","#FFEAB8"],[0,1],-4.5,0,4.5,0).s().p("AgsAKIAAgTIBZAAIAAATg");
	this.shape_511.setTransform(325.175,239.175);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#F9FF00").s().p("AgEAGQgCgCgBgEQABgCACgDQACgDACAAQADAAACADQADADAAACQAAAEgDACQgCADgDAAQgCAAgCgDg");
	this.shape_512.setTransform(327.9,235.525);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FFFFFF").s().p("AgEAGQgDgCABgEQgBgCADgDQACgDACAAQADAAACADQACADAAACQAAAEgCACQgCADgDAAQgCAAgCgDg");
	this.shape_513.setTransform(322.3,235.525);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#F90000").s().p("AgEAGQgCgDgBgDQABgDACgCQACgDACAAQADAAACADQADACAAADQAAADgDADQgCADgDAAQgCAAgCgDg");
	this.shape_514.setTransform(327.9,231.775);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FFFFFF").s().p("AgEAGQgDgDABgDQgBgDADgCQACgDACAAQADAAACADQACACAAADQAAADgCADQgCADgDAAQgCAAgCgDg");
	this.shape_515.setTransform(322.3,231.775);

	this.instance_195 = new lib.Rectangle_8_4();
	this.instance_195.setTransform(296.6,235.5,1,1,0,0,0,38,5.5);
	this.instance_195.compositeOperation = "screen";

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#00FFFF").s().p("AgGAAQAAgIAGABQAHgBAAAIQAAAJgHgBQgGABAAgJg");
	this.shape_516.setTransform(321.425,216.45);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#475788").s().p("AgGAAQAAgIAGABQAHgBAAAIQAAAJgHgBQgGABAAgJg");
	this.shape_517.setTransform(325.525,216.45);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#475788").s().p("AgGAAQAAgIAGABQAHgBAAAIQAAAJgHgBQgGABAAgJg");
	this.shape_518.setTransform(328.925,216.45);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#475788").s().p("AgGAAQAAgHAGAAQAHAAAAAHQAAAJgHAAQgGAAAAgJg");
	this.shape_519.setTransform(321.425,221.7);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#F90068").s().p("AgGAAQAAgHAGAAQAHAAAAAHQAAAJgHAAQgGAAAAgJg");
	this.shape_520.setTransform(325.525,221.7);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#004CFF").s().p("AgGAAQAAgHAGAAQAHAAAAAHQAAAJgHAAQgGAAAAgJg");
	this.shape_521.setTransform(328.925,221.7);

	this.instance_196 = new lib.Path_6_4();
	this.instance_196.setTransform(325.55,219.05,1,1,0,0,0,6.5,4.6);
	this.instance_196.alpha = 0.5;
	this.instance_196.compositeOperation = "multiply";

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FFFFFF").s().p("AgWAGIAAgLIAtAAIAAALg");
	this.shape_522.setTransform(279.425,215.05);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#00FC98").s().p("AgWAGIAAgLIAsAAIAAALg");
	this.shape_523.setTransform(274.05,215.05);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#F90000").s().p("AgHAAQABgDACgCQACgCACgBQADABADACQACACAAADQAAAJgIAAQgGAAgBgJg");
	this.shape_524.setTransform(285.7,215.05);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#F9FF00").s().p("AgGAAQAAgHAGgBQAHABAAAHQAAAJgHAAQgGAAAAgJg");
	this.shape_525.setTransform(283.275,215.05);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#004CFF").s().p("Ai7ALIAAgVIF3AAIAAAVg");
	this.shape_526.setTransform(290.575,219.925);

	this.instance_197 = new lib.Rectangle_3_0();
	this.instance_197.setTransform(293,219.95,1,1,0,0,0,21.2,1.1);
	this.instance_197.alpha = 0.5;
	this.instance_197.compositeOperation = "multiply";

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#F90068").s().p("Ah8ALIAAgVID5AAIAAAVg");
	this.shape_527.setTransform(284.3,217.225);

	this.instance_198 = new lib.Rectangle_5_0();
	this.instance_198.setTransform(293,217.25,1,1,0,0,0,21.2,1.1);
	this.instance_198.alpha = 0.5;
	this.instance_198.compositeOperation = "multiply";

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#FFFFFF").s().p("AgdAIIAAgQIA7AAIAAAQg");
	this.shape_528.setTransform(325.525,206.35);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#009DFF").s().p("AgdAIIAAgQIA7AAIAAAQg");
	this.shape_529.setTransform(296.775,208.05);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#285AB8").s().p("AgdAIIAAgQIA7AAIAAAQg");
	this.shape_530.setTransform(289.45,208.05);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#00FFFF").s().p("AgdAIIAAgQIA7AAIAAAQg");
	this.shape_531.setTransform(282.125,208.05);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#00FFFF").s().p("AgdAIIAAgQIA7AAIAAAQg");
	this.shape_532.setTransform(274.8,208.05);

	this.instance_199 = new lib.Path_9_1();
	this.instance_199.setTransform(302.2,212.15,1,1,0,0,0,32.4,8.8);
	this.instance_199.alpha = 0.5;
	this.instance_199.compositeOperation = "multiply";

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADADADAAQAEAAADgDQADgEAAgFQAAgFgDgDQgDgEgEAAQgDAAgDAEg");
	this.shape_533.setTransform(266.825,220.025);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAAIQAAAJgFAGQgGAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADADADAAQAEAAADgDQADgEAAgFQAAgFgDgDQgDgEgEAAQgDAAgDAEg");
	this.shape_534.setTransform(261.25,220.025);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgHAAgIQAAgHAGgHQAFgGAHAAQAIAAAFAGQAGAHAAAHQAAAIgGAHQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgDAAgGQAAgFgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_535.setTransform(266.825,214.45);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#00FFFF").s().p("AgJAMQgFgFAAgHQAAgGAFgFQAEgFAFAAQAGAAAEAFQAFAFAAAGQAAAHgFAFQgEAFgGAAQgFAAgEgFg");
	this.shape_536.setTransform(266.825,214.45);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgHAAgIQAAgHAGgHQAFgGAHAAQAIAAAGAGQAFAHAAAHQAAAIgFAHQgGAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgDAAgGQAAgFgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_537.setTransform(261.25,214.45);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#00FFFF").s().p("AgJAMQgFgFABgHQgBgGAFgFQAEgFAFAAQAGAAAEAFQAFAFAAAGQAAAHgFAFQgEAFgGAAQgFAAgEgFg");
	this.shape_538.setTransform(261.25,214.45);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgHAAgIQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAIgGAHQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADADADAAQAEAAADgDQADgDAAgGQAAgEgDgEQgDgDgEgBQgDABgDADg");
	this.shape_539.setTransform(266.825,208.9);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FFFF00").s().p("AgJAMQgFgFAAgHQAAgGAFgFQAEgFAFAAQAGAAAEAFQAFAFAAAGQAAAHgFAFQgEAFgGAAQgFAAgEgFg");
	this.shape_540.setTransform(266.825,208.9);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgHAAgIQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAAIQAAAIgFAHQgGAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADADADAAQAEAAADgDQADgDAAgGQAAgEgDgEQgDgDgEgBQgDABgDADg");
	this.shape_541.setTransform(261.25,208.9);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.rf(["#675D9D","#644381"],[0,1],0,0,0,0,0,28.3).s().p("Al7BvIAAjdIL3AAIAADdg");
	this.shape_542.setTransform(296.55,214.45);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDADAAAFQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_543.setTransform(311.175,297.025);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgFgDgDQgDgEgEAAQgDAAgDAEg");
	this.shape_544.setTransform(305.625,297.025);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDADAAAFQAAAFADAEQADADADAAQAEAAADgDQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_545.setTransform(311.175,291.475);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#00FFFF").s().p("AgJAMQgFgFAAgHQAAgGAFgFQAEgFAFAAQAGAAAFAFQAEAFAAAGQAAAHgEAFQgFAFgGAAQgFAAgEgFg");
	this.shape_546.setTransform(311.175,291.45);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADADADAAQAEAAADgDQADgEAAgFQAAgFgDgDQgDgEgEAAQgDAAgDAEg");
	this.shape_547.setTransform(305.625,291.475);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#00FFFF").s().p("AgJAMQgFgFAAgHQAAgGAFgFQAEgFAFAAQAGAAAEAFQAFAFAAAGQAAAHgFAFQgEAFgGAAQgFAAgEgFg");
	this.shape_548.setTransform(305.625,291.45);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgHAAgIQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAIgGAHQgFAGgIAAQgHAAgFgGgAgGgIQgDADAAAFQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEABQgDgBgDAEg");
	this.shape_549.setTransform(311.175,285.9);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgHAAgIQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAIgGAHQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgFgDgDQgDgEgEABQgDgBgDAEg");
	this.shape_550.setTransform(305.625,285.9);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#00FFFF").s().p("AgJAMQgFgFAAgHQAAgGAFgFQAEgFAFAAQAGAAAEAFQAFAFAAAGQAAAHgFAFQgEAFgGAAQgFAAgEgFg");
	this.shape_551.setTransform(305.625,285.9);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FFFFFF").s().p("AgGAAQAAgHAGAAQAHAAAAAHQAAAJgHAAQgGAAAAgJg");
	this.shape_552.setTransform(283.775,295.5);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#F90000").s().p("AgHAAQAAgCADgDQACgDACABQADgBADADQABADAAACQAAAJgHAAQgHAAAAgJg");
	this.shape_553.setTransform(280.05,295.5);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#FFFFFF").s().p("AgHAAQABgCACgDQACgDACABQADgBADADQACADAAACQgBAJgHAAQgHAAAAgJg");
	this.shape_554.setTransform(276.35,295.5);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FFFFFF").s().p("AgGAAQAAgHAGAAQAHAAAAAHQAAAJgHAAQgGAAAAgJg");
	this.shape_555.setTransform(283.775,292.45);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#F90000").s().p("AgEAGQgDgCAAgEQAAgHAHAAQAHAAAAAHQAAAEgBACQgDACgDABQgCgBgCgCg");
	this.shape_556.setTransform(280.05,292.45);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FFFFFF").s().p("AgEAGQgCgCgBgEQAAgHAHAAQAHAAABAHQAAAEgCACQgDACgDABQgCgBgCgCg");
	this.shape_557.setTransform(276.35,292.45);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FFFFFF").s().p("AgGAAQAAgHAGAAQAHAAAAAHQAAAJgHAAQgGAAAAgJg");
	this.shape_558.setTransform(328.625,294.95);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#F90000").s().p("AgGAAQAAgHAGAAQAHAAAAAHQAAAJgHAAQgGAAAAgJg");
	this.shape_559.setTransform(324.925,294.95);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#FFFFFF").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_560.setTransform(294.05,287.025);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FFFFFF").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_561.setTransform(294.05,294.1);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#FFFFFF").s().p("AgGAAQAAgHAGAAQAHAAAAAHQAAAJgHAAQgGAAAAgJg");
	this.shape_562.setTransform(321.225,294.95);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,3.8).s().p("AgzAPIAAgeIBnAAIAAAeg");
	this.shape_563.setTransform(324.925,294.95);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_564.setTransform(325.675,303.025);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_565.setTransform(316.025,303.025);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_566.setTransform(306.325,303.025);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_567.setTransform(296.675,303.025);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_568.setTransform(296.675,294.1);

	this.instance_200 = new lib.Rectangle_23();
	this.instance_200.setTransform(296.7,292.4,1,1,0,0,0,3.4,2.1);
	this.instance_200.alpha = 0.5;
	this.instance_200.compositeOperation = "multiply";

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_569.setTransform(296.675,287.025);

	this.instance_201 = new lib.Rectangle_1_12();
	this.instance_201.setTransform(296.7,285.3,1,1,0,0,0,3.4,2.1);
	this.instance_201.alpha = 0.5;
	this.instance_201.compositeOperation = "multiply";

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#F9FF00").s().p("AgNAuIAAhbIAbAAIAABbg");
	this.shape_570.setTransform(328.725,286.875);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#00FCFF").s().p("AgNAuIAAhbIAbAAIAABbg");
	this.shape_571.setTransform(321.225,286.875);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#00FCFF").s().p("AgNAuIAAhbIAbAAIAABbg");
	this.shape_572.setTransform(324.925,286.875);

	this.instance_202 = new lib.Path_21_1();
	this.instance_202.setTransform(287.9,295.55,1,1,0,0,0,2,1);
	this.instance_202.alpha = 0.5;
	this.instance_202.compositeOperation = "multiply";

	this.instance_203 = new lib.Path_22_2();
	this.instance_203.setTransform(287.9,292.45,1,1,0,0,0,2,1);
	this.instance_203.alpha = 0.5;
	this.instance_203.compositeOperation = "multiply";

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FFFFAE").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_573.setTransform(271.8,295.525);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FFFFAE").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_574.setTransform(271.8,292.425);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#F90068").s().p("AgpAKIAAgTIBTAAIAAATg");
	this.shape_575.setTransform(285.575,303.025);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#F90068").s().p("AgoAKIAAgTIBSAAIAAATg");
	this.shape_576.setTransform(273.95,303.025);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#00FC98").s().p("AhpAKIAAgTIDTAAIAAATg");
	this.shape_577.setTransform(280.375,286.525);

	this.instance_204 = new lib.Path_28_0();
	this.instance_204.setTransform(297.1,291.65,1,1,0,0,0,34.9,12.2);
	this.instance_204.alpha = 0.5;
	this.instance_204.compositeOperation = "multiply";

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.rf(["#675D9D","#644381"],[0,1],0,0,0,0,0,28.3).s().p("Al7CaIAAkzIL3AAIAAEzg");
	this.shape_578.setTransform(296.55,292.425);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#00FFFF").s().p("AhjAKIAAgTIDHAAIAAATg");
	this.shape_579.setTransform(319.7,269.05);

	this.instance_205 = new lib.Rectangle_21();
	this.instance_205.setTransform(324.1,257.75,1,1,0,0,0,4,1.6);
	this.instance_205.alpha = 0.5;
	this.instance_205.compositeOperation = "multiply";

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#F90068").s().p("AgGAAQgBgDADgCQACgDACAAQADAAACADQACACAAADQABAJgIgBQgGABAAgJg");
	this.shape_580.setTransform(316.45,257.75);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#F90068").s().p("AgGAAQgBgDADgCQACgDACAAQADAAACADQACACAAADQABAJgIgBQgGABAAgJg");
	this.shape_581.setTransform(312.85,257.75);

	this.instance_206 = new lib.Rectangle_1_11();
	this.instance_206.setTransform(324.1,263.35,1,1,0,0,0,4,1.6);
	this.instance_206.alpha = 0.5;
	this.instance_206.compositeOperation = "multiply";

	this.instance_207 = new lib.Rectangle_2_1();
	this.instance_207.setTransform(324.1,252.05,1,1,0,0,0,4,1.6);
	this.instance_207.alpha = 0.5;
	this.instance_207.compositeOperation = "multiply";

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#F9FF00").s().p("AgEAGQgDgCABgEQgBgCADgDQACgDACAAQADAAACADQACADAAACQAAAEgCACQgCADgDAAQgCAAgCgDg");
	this.shape_582.setTransform(316.45,263.375);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#00FFFF").s().p("AgGAAQgBgCADgDQACgCACAAQADAAACACQACADAAACQABAJgIAAQgGAAAAgJg");
	this.shape_583.setTransform(316.45,252.1);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FFFFFF").s().p("AgEAGQgDgCABgEQgBgCADgDQACgDACAAQADAAACADQACADAAACQAAAEgCACQgCADgDAAQgCAAgCgDg");
	this.shape_584.setTransform(312.85,263.375);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#00FFFF").s().p("AgGAAQgBgCADgDQACgCACAAQADAAACACQACADAAACQABAJgIAAQgGAAAAgJg");
	this.shape_585.setTransform(312.85,252.1);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FFFFFF").s().p("AgTAIIAAgPIAnAAIAAAPg");
	this.shape_586.setTransform(300.05,261.75);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FFFFFF").s().p("AgTAIIAAgPIAmAAIAAAPg");
	this.shape_587.setTransform(294.55,261.75);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#F90068").s().p("AgSAIIAAgPIAlAAIAAAPg");
	this.shape_588.setTransform(289.025,261.75);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FFFFFF").s().p("AgTAIIAAgPIAnAAIAAAPg");
	this.shape_589.setTransform(283.5,261.75);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#F90068").s().p("AgTAIIAAgPIAnAAIAAAPg");
	this.shape_590.setTransform(278,261.75);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FFFFFF").s().p("AgSAIIAAgPIAlAAIAAAPg");
	this.shape_591.setTransform(272.475,261.75);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#F90068").s().p("AgTAIIAAgPIAnAAIAAAPg");
	this.shape_592.setTransform(266.95,261.75);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#00FFFF").s().p("AgTATIAAglIAnAAIAAAlg");
	this.shape_593.setTransform(300.05,266.15);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#F90068").s().p("AgTATIAAglIAmAAIAAAlg");
	this.shape_594.setTransform(294.55,266.15);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#00FFFF").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_595.setTransform(289.025,266.15);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#00FFFF").s().p("AgTATIAAglIAnAAIAAAlg");
	this.shape_596.setTransform(283.5,266.15);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#00FFFF").s().p("AgTATIAAglIAnAAIAAAlg");
	this.shape_597.setTransform(278,266.15);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#00FFFF").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_598.setTransform(272.475,266.15);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#00FFFF").s().p("AgTATIAAglIAnAAIAAAlg");
	this.shape_599.setTransform(266.95,266.15);

	this.instance_208 = new lib.Path_7_0();
	this.instance_208.setTransform(319.7,259.4,1,1,0,0,0,10,10.7);
	this.instance_208.alpha = 0.5;
	this.instance_208.compositeOperation = "multiply";

	this.instance_209 = new lib.Rectangle_17_0();
	this.instance_209.setTransform(297.7,257,1,1,0,0,0,4.4,1.2);
	this.instance_209.alpha = 0.5;
	this.instance_209.compositeOperation = "multiply";

	this.instance_210 = new lib.Rectangle_18();
	this.instance_210.setTransform(287.95,257,1,1,0,0,0,4.4,1.2);
	this.instance_210.alpha = 0.5;
	this.instance_210.compositeOperation = "multiply";

	this.instance_211 = new lib.Rectangle_19();
	this.instance_211.setTransform(278.2,257,1,1,0,0,0,4.4,1.2);
	this.instance_211.alpha = 0.5;
	this.instance_211.compositeOperation = "multiply";

	this.instance_212 = new lib.Rectangle_20();
	this.instance_212.setTransform(268.45,257,1,1,0,0,0,4.4,1.2);
	this.instance_212.alpha = 0.5;
	this.instance_212.compositeOperation = "multiply";

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#00FC98").s().p("AhlAMIAAgXIDLAAIAAAXg");
	this.shape_600.setTransform(274.25,247.975);

	this.instance_213 = new lib.Rectangle_22();
	this.instance_213.setTransform(282.95,247.95,1,1,0,0,0,18.9,1.2);
	this.instance_213.alpha = 0.5;
	this.instance_213.compositeOperation = "multiply";

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#F9FF00").s().p("AhlANIAAgYIDLAAIAAAYg");
	this.shape_601.setTransform(274.25,251.7);

	this.instance_214 = new lib.Rectangle_24();
	this.instance_214.setTransform(282.95,251.65,1,1,0,0,0,18.9,1.2);
	this.instance_214.alpha = 0.5;
	this.instance_214.compositeOperation = "multiply";

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.rf(["#675D9D","#644381"],[0,1],0,0,0,0,0,28.3).s().p("Al7CaIAAkzIL3AAIAAEzg");
	this.shape_602.setTransform(296.55,259.075);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#F90000").s().p("AgEAGQgDgDAAgDQAAgCADgCQACgDACAAQADAAADADQABACAAACQAAADgBADQgDABgDAAQgCAAgCgBg");
	this.shape_603.setTransform(431.8,304);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#475788").s().p("AgEAGQgDgDABgDQgBgCADgCQACgDACAAQADAAACADQACACABACQgBADgCADQgCABgDAAQgCAAgCgBg");
	this.shape_604.setTransform(427.7,304);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#00FFFF").s().p("AgEAGQgDgDAAgDQAAgCADgCQACgDACAAQADAAADADQABACABACQgBADgBADQgDABgDAAQgCAAgCgBg");
	this.shape_605.setTransform(423.6,304);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#F90000").s().p("AgEAGQgDgDABgDQgBgCADgCQACgDACAAQADAAACADQACACAAACQAAADgCADQgCABgDAAQgCAAgCgBg");
	this.shape_606.setTransform(419.5,304);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FFFFFF").s().p("AgEAGQgCgDgBgDQABgCACgCQACgDACAAQADAAACADQADACAAACQAAADgDADQgCABgDAAQgCAAgCgBg");
	this.shape_607.setTransform(361.65,304);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#F90000").s().p("AgEAGQgDgDAAgDQAAgCADgCQACgDACAAQADAAADADQABACAAACQAAADgBADQgDABgDAAQgCAAgCgBg");
	this.shape_608.setTransform(431.8,202.3);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#475788").s().p("AgEAGQgDgDABgDQgBgCADgCQACgDACAAQADAAACADQACACABACQgBADgCADQgCABgDAAQgCAAgCgBg");
	this.shape_609.setTransform(427.7,202.3);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#475788").s().p("AgEAGQgDgDAAgDQAAgCADgCQACgDACAAQADAAADADQABACABACQgBADgBADQgDABgDAAQgCAAgCgBg");
	this.shape_610.setTransform(423.6,202.3);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#F90000").s().p("AgEAGQgDgDABgDQgBgCADgCQACgDACAAQADAAACADQACACAAACQAAADgCADQgCABgDAAQgCAAgCgBg");
	this.shape_611.setTransform(419.5,202.3);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#475788").s().p("AgEAGQgCgDgBgDQABgCACgCQACgDACAAQADAAADADQACACAAACQAAADgCADQgDABgDAAQgCAAgCgBg");
	this.shape_612.setTransform(415.4,202.3);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#475788").s().p("AgEAGQgCgDAAgDQAAgCACgCQACgDACAAQADAAACADQACACAAACQAAADgCADQgCABgDAAQgCAAgCgBg");
	this.shape_613.setTransform(411.3,202.3);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#475788").s().p("AgEAGQgCgDgBgDQABgCACgCQACgDACAAQADAAADADQACACAAACQAAADgCADQgDABgDAAQgCAAgCgBg");
	this.shape_614.setTransform(407.2,202.3);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#475788").s().p("AgEAGQgCgDAAgDQAAgCACgCQACgDACAAQAHAAAAAHQAAAHgHAAQgCAAgCgBg");
	this.shape_615.setTransform(403.075,202.3);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#FFFFFF").s().p("AgEAGQgCgDAAgDQAAgCACgCQACgDACAAQAHAAAAAHQAAAHgHAAQgCAAgCgBg");
	this.shape_616.setTransform(398.975,202.3);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#FFFFFF").s().p("AgEAGQgCgDgBgDQABgCACgCQACgDACAAQADAAACADQADACAAACQAAADgDADQgCABgDAAQgCAAgCgBg");
	this.shape_617.setTransform(361.65,202.3);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#F90000").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_618.setTransform(378.675,289.2);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#F90000").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_619.setTransform(376.075,289.2);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_620.setTransform(373.475,289.2);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_621.setTransform(371.075,289.2);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#F9FF00").s().p("AgEATIAAglIAKAAIAAAlg");
	this.shape_622.setTransform(368.7,289.2);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_623.setTransform(366.325,289.2);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_624.setTransform(363.925,289.2);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#00FFFF").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_625.setTransform(361.625,289.2);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#00FFFF").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_626.setTransform(359.525,289.2);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAIIAAgPIEXAAIAAAPg");
	this.shape_627.setTransform(394.625,290.85);

	this.instance_215 = new lib.Path_1_14();
	this.instance_215.setTransform(394.6,289.15,1,1,0,0,0,14,2.4);
	this.instance_215.alpha = 0.3008;
	this.instance_215.compositeOperation = "multiply";

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#00FFFF").s().p("AgsAKIAAgTIBZAAIAAATg");
	this.shape_628.setTransform(424.1,292.825);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#F9FF00").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAJgHAAQgGAAAAgJg");
	this.shape_629.setTransform(426.825,289.175);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#FFFFFF").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAJgHAAQgGAAAAgJg");
	this.shape_630.setTransform(421.225,289.175);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#F90000").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAJgHAAQgGAAAAgJg");
	this.shape_631.setTransform(426.825,285.425);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#FFFFFF").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAJgHAAQgGAAAAgJg");
	this.shape_632.setTransform(421.225,285.425);

	this.instance_216 = new lib.Rectangle_10_4();
	this.instance_216.setTransform(395.45,289.15,1,1,0,0,0,37.9,5.5);
	this.instance_216.compositeOperation = "screen";

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#F9FF00").s().p("AgEAUIAAgmIAKAAIAAAmg");
	this.shape_633.setTransform(370.15,185.15);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#F9FF00").s().p("AgEAUIAAgmIAJAAIAAAmg");
	this.shape_634.setTransform(368.025,185.15);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#F9FF00").s().p("AgFAUIAAgmIALAAIAAAmg");
	this.shape_635.setTransform(365.9,185.15);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#F9FF00").s().p("AgEAUIAAgmIAJAAIAAAmg");
	this.shape_636.setTransform(363.775,185.15);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#00FFFF").s().p("AgFAUIAAgmIAKAAIAAAmg");
	this.shape_637.setTransform(361.65,185.15);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#00FFFF").s().p("AgEAUIAAgmIAJAAIAAAmg");
	this.shape_638.setTransform(359.525,185.15);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAIIAAgPIEXAAIAAAPg");
	this.shape_639.setTransform(394.625,186.6);

	this.instance_217 = new lib.Path_1_13();
	this.instance_217.setTransform(394.6,184.9,1,1,0,0,0,14,2.4);
	this.instance_217.alpha = 0.3008;
	this.instance_217.compositeOperation = "multiply";

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#455BFF").s().p("AgsAKIAAgSIBZAAIAAASg");
	this.shape_640.setTransform(424.1,188.3);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#FFFFFF").s().p("AgGAAQAAgIAGABQAHgBAAAIQAAAJgHAAQgGAAAAgJg");
	this.shape_641.setTransform(426.825,181.9);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#F90000").s().p("AgGAAQAAgIAGABQAHgBAAAIQAAAJgHAAQgGAAAAgJg");
	this.shape_642.setTransform(421.225,181.9);

	this.instance_218 = new lib.Rectangle_7_5();
	this.instance_218.setTransform(395.45,185.15,1,1,0,0,0,37.9,5.5);
	this.instance_218.compositeOperation = "screen";

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAAIQAAAJgFAGQgGAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADADADABQAEgBAEgDQACgEAAgFQAAgEgCgEQgEgDgEgBQgDABgDADg");
	this.shape_643.setTransform(410.1,232.1);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgNAPQgFgGAAgJQAAgIAFgGQAGgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgGgGgAgGgIQgEAEAAAEQAAAFAEAEQADADADABQAEgBADgDQADgEAAgFQAAgEgDgEQgDgDgEgBQgDABgDADg");
	this.shape_644.setTransform(404.55,232.1);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAAIQAAAJgFAGQgGAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAAEgEQACgEAAgFQAAgEgCgEQgEgDgEAAQgDAAgDADg");
	this.shape_645.setTransform(410.1,226.525);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgNAPQgFgGAAgJQAAgIAFgGQAGgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgGgGgAgGgIQgEAEAAAEQAAAFAEAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgDgEAAQgDAAgDADg");
	this.shape_646.setTransform(404.55,226.525);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAAIQAAAJgFAGQgGAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAAEgEQACgEAAgFQAAgEgCgEQgEgEgEAAQgDAAgDAEg");
	this.shape_647.setTransform(410.1,220.975);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgNAPQgFgGAAgJQAAgIAFgGQAGgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgGgGgAgGgIQgEAEAAAEQAAAFAEAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_648.setTransform(404.55,220.975);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#FFFFFF").s().p("AgEAGQgCgDgBgDQABgDACgCQACgDACAAQADAAADADQACACAAADQAAADgCADQgDADgDAAQgCAAgCgDg");
	this.shape_649.setTransform(427.55,230.025);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#F90000").s().p("AgEAGQgCgDgBgDQABgDACgCQACgDACAAQADAAADADQACACAAADQAAADgCADQgDADgDAAQgCAAgCgDg");
	this.shape_650.setTransform(423.85,230.025);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_651.setTransform(392.975,222.125);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAg");
	this.shape_652.setTransform(392.975,229.175);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#FFFFFF").s().p("AgEAGQgCgDgBgDQABgDACgCQACgDACAAQADAAACADQADACAAADQAAADgDADQgCADgDAAQgCAAgCgDg");
	this.shape_653.setTransform(420.15,230.025);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,3.8).s().p("AgzAPIAAgdIBnAAIAAAdg");
	this.shape_654.setTransform(423.85,230.025);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_655.setTransform(424.6,238.1);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#FFFFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_656.setTransform(414.925,238.1);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#FFFFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_657.setTransform(405.275,238.1);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_658.setTransform(395.625,238.1);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_659.setTransform(395.625,229.175);

	this.instance_219 = new lib.Rectangle_17();
	this.instance_219.setTransform(395.65,227.45,1,1,0,0,0,3.4,2.1);
	this.instance_219.alpha = 0.5;
	this.instance_219.compositeOperation = "multiply";

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_660.setTransform(395.625,222.1);

	this.instance_220 = new lib.Rectangle_1_10();
	this.instance_220.setTransform(395.65,220.4,1,1,0,0,0,3.4,2.1);
	this.instance_220.alpha = 0.5;
	this.instance_220.compositeOperation = "multiply";

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#00FCFF").s().p("Ag1AuIAAhbIBrAAIAABbg");
	this.shape_661.setTransform(423.675,221.95);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#F9FF00").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_662.setTransform(378.9,230.575);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#F9FF00").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_663.setTransform(378.9,227.525);

	this.instance_221 = new lib.Path_15_3();
	this.instance_221.setTransform(386.8,230.6,1,1,0,0,0,2,1);
	this.instance_221.alpha = 0.5;
	this.instance_221.compositeOperation = "multiply";

	this.instance_222 = new lib.Path_16_1();
	this.instance_222.setTransform(386.8,227.55,1,1,0,0,0,2,1);
	this.instance_222.alpha = 0.5;
	this.instance_222.compositeOperation = "multiply";

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#FFFFAE").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_664.setTransform(370.7,230.575);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#FFFFAE").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_665.setTransform(370.7,227.525);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#00FC98").s().p("AglAKIAAgTIBLAAIAAATg");
	this.shape_666.setTransform(372.475,238.125);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#00FC98").s().p("AhpAKIAAgTIDTAAIAAATg");
	this.shape_667.setTransform(379.3,221.625);

	this.instance_223 = new lib.Path_21_0();
	this.instance_223.setTransform(396,226.8,1,1,0,0,0,34.9,12.3);
	this.instance_223.alpha = 0.5;
	this.instance_223.compositeOperation = "multiply";

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.rf(["#675D9D","#644381"],[0,1],0,0,0,0,0,28.3).s().p("Al6CZIAAkyIL1AAIAAEyg");
	this.shape_668.setTransform(395.475,227.5);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAAIQAAAJgFAGQgGAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAAEgEQACgEAAgFQAAgEgCgEQgEgEgEAAQgDAAgDAEg");
	this.shape_669.setTransform(410.1,268.275);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#FFFFFF").s().p("AgJAMQgFgFABgHQgBgGAFgFQAEgFAFAAQAGAAAEAFQAFAFAAAGQAAAHgFAFQgEAFgGAAQgFAAgEgFg");
	this.shape_670.setTransform(410.1,268.275);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgNAPQgFgGAAgJQAAgIAFgGQAGgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgGgGgAgGgIQgEAEAAAEQAAAFAEAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_671.setTransform(404.55,268.275);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#FFFFFF").s().p("AgJAMQgEgFAAgHQAAgGAEgFQAEgFAFAAQAGAAAFAFQADAFAAAGQAAAHgDAFQgFAFgGAAQgFAAgEgFg");
	this.shape_672.setTransform(404.55,268.275);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAAIQAAAJgFAGQgGAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAAEgEQACgEAAgFQAAgEgCgEQgEgEgEAAQgDAAgDAEg");
	this.shape_673.setTransform(410.1,262.725);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgNAPQgFgGAAgJQAAgIAFgGQAGgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgGgGgAgGgIQgEAEAAAEQAAAFAEAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_674.setTransform(404.55,262.725);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAGAGQAFAGAAAIQAAAJgFAGQgGAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAAEgEQACgEAAgFQAAgEgCgEQgEgEgEAAQgDAAgDAEg");
	this.shape_675.setTransform(410.1,257.175);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#FFFFFF").s().p("AgJAMQgFgFABgHQgBgGAFgFQAEgFAFAAQAGAAAEAFQAFAFAAAGQAAAHgFAFQgEAFgGAAQgFAAgEgFg");
	this.shape_676.setTransform(410.1,257.15);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgNAPQgFgGAAgJQAAgIAFgGQAGgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgGgGgAgGgIQgEAEAAAEQAAAFAEAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_677.setTransform(404.55,257.175);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#FFFFFF").s().p("AgHAAQABgCACgDQACgDACAAQADAAADADQACADAAACQgBAIgHAAQgHAAAAgIg");
	this.shape_678.setTransform(427.55,266.2);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#F90000").s().p("AgHAAQABgCACgDQACgDACAAQADAAADADQACADAAACQAAAIgIAAQgGAAgBgIg");
	this.shape_679.setTransform(423.85,266.2);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_680.setTransform(392.975,258.275);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAg");
	this.shape_681.setTransform(392.975,265.375);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#FFFFFF").s().p("AgHAAQABgCACgDQACgDACAAQADAAACADQADADAAACQAAAIgIAAQgGAAgBgIg");
	this.shape_682.setTransform(420.15,266.2);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,3.8).s().p("AgzAQIAAgeIBnAAIAAAeg");
	this.shape_683.setTransform(423.85,266.2);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_684.setTransform(424.6,274.3);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_685.setTransform(414.925,274.3);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_686.setTransform(405.275,274.3);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_687.setTransform(395.625,274.3);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_688.setTransform(395.625,265.35);

	this.instance_224 = new lib.Rectangle_16();
	this.instance_224.setTransform(395.65,263.65,1,1,0,0,0,3.4,2.1);
	this.instance_224.alpha = 0.5;
	this.instance_224.compositeOperation = "multiply";

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_689.setTransform(395.625,258.3);

	this.instance_225 = new lib.Rectangle_1_9();
	this.instance_225.setTransform(395.65,256.6,1,1,0,0,0,3.4,2.1);
	this.instance_225.alpha = 0.5;
	this.instance_225.compositeOperation = "multiply";

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#F9FF00").s().p("AgTAuIAAhbIAnAAIAABbg");
	this.shape_690.setTransform(427.05,258.125);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#F90000").s().p("AgTAuIAAhbIAnAAIAABbg");
	this.shape_691.setTransform(421.05,258.125);

	this.instance_226 = new lib.Path_14_2();
	this.instance_226.setTransform(386.8,266.8,1,1,0,0,0,2,1);
	this.instance_226.alpha = 0.5;
	this.instance_226.compositeOperation = "multiply";

	this.instance_227 = new lib.Path_15_2();
	this.instance_227.setTransform(386.8,263.7,1,1,0,0,0,2,1);
	this.instance_227.alpha = 0.5;
	this.instance_227.compositeOperation = "multiply";

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#FFFFAE").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_692.setTransform(370.7,266.775);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#FFFFAE").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_693.setTransform(370.7,263.675);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#00FC98").s().p("AhpAKIAAgTIDTAAIAAATg");
	this.shape_694.setTransform(379.3,274.275);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#00FC98").s().p("AhpAKIAAgTIDTAAIAAATg");
	this.shape_695.setTransform(379.3,257.825);

	this.instance_228 = new lib.Path_20_2();
	this.instance_228.setTransform(396,262.9,1,1,0,0,0,34.9,12.2);
	this.instance_228.alpha = 0.5;
	this.instance_228.compositeOperation = "multiply";

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.rf(["#675D9D","#644381"],[0,1],0,0,0,0,0,28.3).s().p("Al6CaIAAkzIL1AAIAAEzg");
	this.shape_696.setTransform(395.475,263.7);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#00FFFF").s().p("AhjAKIAAgTIDHAAIAAATg");
	this.shape_697.setTransform(418.65,153.55);

	this.instance_229 = new lib.Rectangle_15();
	this.instance_229.setTransform(423.05,147.9,1,1,0,0,0,4,1.6);
	this.instance_229.alpha = 0.5;
	this.instance_229.compositeOperation = "multiply";

	this.instance_230 = new lib.Rectangle_1_8();
	this.instance_230.setTransform(423.05,136.6,1,1,0,0,0,4,1.6);
	this.instance_230.alpha = 0.5;
	this.instance_230.compositeOperation = "multiply";

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#F9FF00").s().p("AgGAAQAAgCACgDQACgDACABQAIAAgBAHQABAJgIAAQgHAAABgJg");
	this.shape_698.setTransform(415.35,147.9);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#00FFFF").s().p("AgEAGQgCgCAAgEQAAgCACgDQACgDACAAQAIAAgBAIQABAJgIAAQgCAAgCgDg");
	this.shape_699.setTransform(415.35,136.625);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#FFFFFF").s().p("AgGAAQAAgHAGAAQAHAAAAAHQAAAJgHAAQgGAAAAgJg");
	this.shape_700.setTransform(411.775,147.9);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#00FFFF").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAJgHAAQgGAAAAgJg");
	this.shape_701.setTransform(411.775,136.625);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#00FFFF").s().p("AgSAXIAAgtIAlAAIAAAtg");
	this.shape_702.setTransform(398.975,150.225);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#00FFFF").s().p("AgSAXIAAgtIAlAAIAAAtg");
	this.shape_703.setTransform(393.475,150.225);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#00FFFF").s().p("AgSAXIAAgtIAlAAIAAAtg");
	this.shape_704.setTransform(387.95,150.225);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#00FFFF").s().p("AgSAXIAAgtIAlAAIAAAtg");
	this.shape_705.setTransform(382.425,150.225);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#00FFFF").s().p("AgTAXIAAgtIAmAAIAAAtg");
	this.shape_706.setTransform(376.9,150.225);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#00FFFF").s().p("AgTAXIAAgtIAmAAIAAAtg");
	this.shape_707.setTransform(371.4,150.225);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#00FFFF").s().p("AgSAXIAAgtIAlAAIAAAtg");
	this.shape_708.setTransform(365.875,150.225);

	this.instance_231 = new lib.Path_5_3();
	this.instance_231.setTransform(418.65,143.95,1,1,0,0,0,10,10.7);
	this.instance_231.alpha = 0.5;
	this.instance_231.compositeOperation = "screen";

	this.instance_232 = new lib.Rectangle_9_2();
	this.instance_232.setTransform(396.55,141.5,1,1,0,0,0,4.3,1.2);
	this.instance_232.alpha = 0.5;
	this.instance_232.compositeOperation = "multiply";

	this.instance_233 = new lib.Rectangle_10_3();
	this.instance_233.setTransform(386.8,141.5,1,1,0,0,0,4.3,1.2);
	this.instance_233.alpha = 0.5;
	this.instance_233.compositeOperation = "multiply";

	this.instance_234 = new lib.Rectangle_11_2();
	this.instance_234.setTransform(377.1,141.5,1,1,0,0,0,4.4,1.2);
	this.instance_234.alpha = 0.5;
	this.instance_234.compositeOperation = "multiply";

	this.instance_235 = new lib.Rectangle_12_2();
	this.instance_235.setTransform(367.35,141.5,1,1,0,0,0,4.4,1.2);
	this.instance_235.alpha = 0.5;
	this.instance_235.compositeOperation = "multiply";

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.lf(["#FFC7CB","#FFEAB8"],[0,1],-18.9,0,19,0).s().p("Ai9AMIAAgXIF7AAIAAAXg");
	this.shape_709.setTransform(381.925,136.225);

	this.instance_236 = new lib.Path_6_3();
	this.instance_236.setTransform(382.1,143.95,1,1,0,0,0,21,10.7);
	this.instance_236.alpha = 0.5;
	this.instance_236.compositeOperation = "multiply";

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.rf(["#675D9D","#644381"],[0,1],0,0,0,0,0,28.3).s().p("Al6CZIAAkxIL1AAIAAExg");
	this.shape_710.setTransform(395.475,143.6);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#F90000").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_711.setTransform(577.375,200.35);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#F90000").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_712.setTransform(574.775,200.35);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#F9FF00").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_713.setTransform(572.175,200.35);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#F9FF00").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_714.setTransform(569.775,200.35);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#F9FF00").s().p("AgFAUIAAgnIALAAIAAAng");
	this.shape_715.setTransform(567.4,200.35);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#F9FF00").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_716.setTransform(565.025,200.35);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#F9FF00").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_717.setTransform(562.625,200.35);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#00FFFF").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_718.setTransform(560.325,200.35);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#00FFFF").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_719.setTransform(558.225,200.35);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAIIAAgPIEXAAIAAAPg");
	this.shape_720.setTransform(593.325,202);

	this.instance_237 = new lib.Path_1_12();
	this.instance_237.setTransform(593.3,200.35,1,1,0,0,0,14,2.4);
	this.instance_237.alpha = 0.3008;
	this.instance_237.compositeOperation = "multiply";

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#285AB8").s().p("AgsAKIAAgTIBZAAIAAATg");
	this.shape_721.setTransform(622.8,203.975);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#F9FF00").s().p("AgGAAQAAgCACgDQACgCACAAQADAAACACQACADAAACQABAJgIAAQgHAAABgJg");
	this.shape_722.setTransform(625.5,200.35);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#FFFFFF").s().p("AgGAAQAAgIAGABQAHgBAAAIQAAAJgHAAQgGAAAAgJg");
	this.shape_723.setTransform(619.925,200.35);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#475788").s().p("AgEAGQgCgCAAgEQgBgHAHAAQAIAAgBAHQAAAEgCACQgCACgDABQgCgBgCgCg");
	this.shape_724.setTransform(625.5,196.6);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#475788").s().p("AgGAAQAAgHAGAAQAHAAAAAHQAAAJgHAAQgGAAAAgJg");
	this.shape_725.setTransform(619.925,196.6);

	this.instance_238 = new lib.Rectangle_10_2();
	this.instance_238.setTransform(594.15,200.3,1,1,0,0,0,37.9,5.5);
	this.instance_238.compositeOperation = "screen";

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_726.setTransform(569.775,258.25);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#F9FF00").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_727.setTransform(567.4,258.25);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_728.setTransform(565.025,258.25);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_729.setTransform(562.625,258.25);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#00FFFF").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_730.setTransform(560.325,258.25);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#00FFFF").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_731.setTransform(558.225,258.25);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAIIAAgPIEXAAIAAAPg");
	this.shape_732.setTransform(593.325,259.7);

	this.instance_239 = new lib.Path_1_11();
	this.instance_239.setTransform(593.3,258,1,1,0,0,0,14,2.4);
	this.instance_239.alpha = 0.3008;
	this.instance_239.compositeOperation = "multiply";

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#455BFF").s().p("AgsAKIAAgTIBZAAIAAATg");
	this.shape_733.setTransform(622.8,261.275);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#FFFFFF").s().p("AgEAGQgCgCAAgEQAAgCACgDQACgDACAAQADAAACADQACADAAACQAAAEgCACQgCADgDAAQgCAAgCgDg");
	this.shape_734.setTransform(625.5,255.225);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#FFFFFF").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAJgHAAQgGAAAAgJg");
	this.shape_735.setTransform(619.925,255.225);

	this.instance_240 = new lib.Rectangle_7_4();
	this.instance_240.setTransform(594.15,258,1,1,0,0,0,37.9,5.5);
	this.instance_240.compositeOperation = "screen";

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#F9FF00").s().p("AgEAUIAAgmIAJAAIAAAmg");
	this.shape_736.setTransform(569.775,146.45);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#F9FF00").s().p("AgFAUIAAgmIALAAIAAAmg");
	this.shape_737.setTransform(567.4,146.45);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#F9FF00").s().p("AgEAUIAAgmIAJAAIAAAmg");
	this.shape_738.setTransform(565.025,146.45);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#F9FF00").s().p("AgEAUIAAgmIAJAAIAAAmg");
	this.shape_739.setTransform(562.625,146.45);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#00FFFF").s().p("AgEAUIAAgmIAJAAIAAAmg");
	this.shape_740.setTransform(560.325,146.45);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#00FFFF").s().p("AgEAUIAAgmIAJAAIAAAmg");
	this.shape_741.setTransform(558.225,146.45);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAHIAAgOIEXAAIAAAOg");
	this.shape_742.setTransform(593.325,147.85);

	this.instance_241 = new lib.Path_1_10();
	this.instance_241.setTransform(593.3,146.2,1,1,0,0,0,14,2.4);
	this.instance_241.alpha = 0.3008;
	this.instance_241.compositeOperation = "multiply";

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#455BFF").s().p("AgsAKIAAgTIBZAAIAAATg");
	this.shape_743.setTransform(622.8,149.425);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#FFFFFF").s().p("AgGAAQAAgCACgDQACgDACABQADgBACADQACADAAACQABAJgIAAQgHAAABgJg");
	this.shape_744.setTransform(625.5,143.4);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#FFFFFF").s().p("AgGAAQAAgHAGAAQAHAAAAAHQAAAJgHAAQgGAAAAgJg");
	this.shape_745.setTransform(619.925,143.4);

	this.instance_242 = new lib.Rectangle_7_3();
	this.instance_242.setTransform(594.15,146.15,1,1,0,0,0,37.9,5.5);
	this.instance_242.compositeOperation = "screen";

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgNAPQgFgGAAgJQAAgIAFgGQAGgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgGgGgAgHgIQgCAEAAAEQAAAFACAEQAEAEADAAQAEAAAEgEQACgEAAgFQAAgEgCgEQgEgEgEAAQgDAAgEAEg");
	this.shape_746.setTransform(608.8,180.125);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAGADADQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_747.setTransform(603.225,180.125);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgNAPQgFgGAAgJQAAgIAFgGQAGgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgGgGgAgHgIQgCAEAAAEQAAAFACAEQAEAEADAAQAEAAAEgEQACgEAAgFQAAgEgCgEQgEgEgEAAQgDAAgEAEg");
	this.shape_748.setTransform(608.8,174.575);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#00FFFF").s().p("AgJAMQgFgFAAgHQAAgGAFgFQAEgFAFAAQAGAAAEAFQAEAFABAGQgBAHgEAFQgEAFgGAAQgFAAgEgFg");
	this.shape_749.setTransform(608.8,174.575);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_750.setTransform(603.225,174.575);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#00FFFF").s().p("AgJAMQgFgFABgHQgBgGAFgFQAEgFAFAAQAGAAAEAFQAFAFAAAGQAAAHgFAFQgEAFgGAAQgFAAgEgFg");
	this.shape_751.setTransform(603.25,174.575);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgNAPQgFgGAAgJQAAgIAFgGQAGgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgGgGgAgHgIQgCAEAAAEQAAAFACAEQAEAEADAAQAEAAAEgEQACgEAAgFQAAgEgCgEQgEgEgEAAQgDAAgEAEg");
	this.shape_752.setTransform(608.8,169.025);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDADAAAFQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_753.setTransform(603.225,169.025);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#00FFFF").s().p("AgJAMQgFgFABgHQgBgGAFgFQAEgFAFAAQAGAAAEAFQAFAFAAAGQAAAHgFAFQgEAFgGAAQgFAAgEgFg");
	this.shape_754.setTransform(603.25,169.025);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#FFFFFF").s().p("AgEAGQgCgDAAgDQAAgDACgCQACgDACAAQADAAACADQACACAAADQAAADgCADQgCADgDAAQgCAAgCgDg");
	this.shape_755.setTransform(581.4,178.625);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#F90000").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAJgHAAQgGAAAAgJg");
	this.shape_756.setTransform(577.675,178.625);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#FFFFFF").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAJgHAAQgGAAAAgJg");
	this.shape_757.setTransform(573.975,178.625);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#FFFFFF").s().p("AgEAGQgCgCAAgEQgBgIAHAAQAIAAgBAIQAAAEgCACQgCACgDAAQgCAAgCgCg");
	this.shape_758.setTransform(581.4,175.55);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#F90000").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAIgHAAQgGAAAAgIg");
	this.shape_759.setTransform(577.675,175.55);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#FFFFFF").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAIgHAAQgGAAAAgIg");
	this.shape_760.setTransform(573.975,175.55);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#FFFFFF").s().p("AgHAAQABgCACgDQACgDACABQADgBACADQADADAAACQAAAJgIAAQgGAAgBgJg");
	this.shape_761.setTransform(626.25,178.05);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#F90000").s().p("AgGAAQgBgCADgDQACgDACABQADgBACADQACADABACQAAAJgIAAQgGAAAAgJg");
	this.shape_762.setTransform(622.55,178.05);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_763.setTransform(591.675,170.15);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_764.setTransform(591.675,177.225);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#FFFFFF").s().p("AgGAAQgBgCADgDQACgDACABQADgBACADQACADAAACQABAJgIAAQgGAAAAgJg");
	this.shape_765.setTransform(618.85,178.05);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,3.8).s().p("AgzAQIAAgfIBnAAIAAAfg");
	this.shape_766.setTransform(622.55,178.05);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_767.setTransform(623.275,186.15);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_768.setTransform(613.625,186.15);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_769.setTransform(603.975,186.15);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_770.setTransform(594.325,186.15);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_771.setTransform(594.325,177.225);

	this.instance_243 = new lib.Rectangle_14();
	this.instance_243.setTransform(594.35,175.5,1,1,0,0,0,3.4,2.1);
	this.instance_243.alpha = 0.5;
	this.instance_243.compositeOperation = "multiply";

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_772.setTransform(594.325,170.15);

	this.instance_244 = new lib.Rectangle_1_7();
	this.instance_244.setTransform(594.35,168.45,1,1,0,0,0,3.4,2.1);
	this.instance_244.alpha = 0.5;
	this.instance_244.compositeOperation = "multiply";

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#F9FF00").s().p("AgNAuIAAhbIAbAAIAABbg");
	this.shape_773.setTransform(626.35,170);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#00FCFF").s().p("AgNAuIAAhbIAbAAIAABbg");
	this.shape_774.setTransform(618.85,170);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#00FCFF").s().p("AgNAuIAAhbIAbAAIAABbg");
	this.shape_775.setTransform(622.55,170);

	this.instance_245 = new lib.Path_21();
	this.instance_245.setTransform(585.5,178.65,1,1,0,0,0,2,1);
	this.instance_245.alpha = 0.5;
	this.instance_245.compositeOperation = "multiply";

	this.instance_246 = new lib.Path_22_1();
	this.instance_246.setTransform(585.5,175.6,1,1,0,0,0,2,1);
	this.instance_246.alpha = 0.5;
	this.instance_246.compositeOperation = "multiply";

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#FFFFAE").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_776.setTransform(569.4,178.625);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#FFFFAE").s().p("AgTAJIAAgSIAnAAIAAASg");
	this.shape_777.setTransform(569.4,175.55);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#F90068").s().p("AgoAKIAAgSIBRAAIAAASg");
	this.shape_778.setTransform(583.2,186.15);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#F90068").s().p("AgpAKIAAgSIBTAAIAAASg");
	this.shape_779.setTransform(571.575,186.15);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#00FC98").s().p("AhpAKIAAgTIDTAAIAAATg");
	this.shape_780.setTransform(578,169.675);

	this.instance_247 = new lib.Path_28();
	this.instance_247.setTransform(594.7,174.75,1,1,0,0,0,34.9,12.2);
	this.instance_247.alpha = 0.5;
	this.instance_247.compositeOperation = "multiply";

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.rf(["#675D9D","#644381"],[0,1],0,0,0,0,0,28.3).s().p("Al6CZIAAkyIL1AAIAAEyg");
	this.shape_781.setTransform(594.175,175.55);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgNAPQgFgGAAgJQAAgIAFgGQAGgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgGgGgAgHgIQgCAEAAAEQAAAFACAEQAEAEADAAQAEAAAEgEQACgEAAgFQAAgEgCgEQgEgEgEAAQgDAAgEAEg");
	this.shape_782.setTransform(608.8,234.975);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAGADADQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_783.setTransform(603.225,234.975);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgNAPQgFgGAAgJQAAgIAFgGQAGgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgGgGgAgHgIQgCAEAAAEQAAAFACAEQAEAEADAAQAEAAAEgEQACgEAAgFQAAgEgCgEQgEgEgEAAQgDAAgEAEg");
	this.shape_784.setTransform(608.8,229.425);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAGADADQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_785.setTransform(603.225,229.425);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgNAPQgFgGAAgJQAAgIAFgGQAGgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgGgGgAgHgIQgCAEAAAEQAAAFACAEQAEAEADAAQAEAAAEgEQACgEAAgFQAAgEgCgEQgEgEgEAAQgDAAgEAEg");
	this.shape_786.setTransform(608.8,223.875);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_787.setTransform(603.225,223.875);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#FFFFFF").s().p("AgHAAQABgCACgDQACgDACAAQADAAACADQADADAAACQAAAIgIAAQgGAAgBgIg");
	this.shape_788.setTransform(626.25,232.9);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#F90000").s().p("AgGAAQgBgCADgDQACgDACAAQADAAACADQACADABACQAAAIgIAAQgGAAAAgIg");
	this.shape_789.setTransform(622.55,232.9);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_790.setTransform(591.675,225);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAg");
	this.shape_791.setTransform(591.675,232.075);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#FFFFFF").s().p("AgGAAQgBgCADgDQACgDACAAQADAAACADQACADAAACQABAIgIAAQgGAAAAgIg");
	this.shape_792.setTransform(618.85,232.9);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,3.8).s().p("AgzAPIAAgdIBnAAIAAAdg");
	this.shape_793.setTransform(622.55,232.925);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_794.setTransform(623.275,241);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#FFFFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_795.setTransform(613.625,241);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#FFFFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_796.setTransform(603.975,241);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_797.setTransform(594.325,241);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_798.setTransform(594.325,232.075);

	this.instance_248 = new lib.Rectangle_13();
	this.instance_248.setTransform(594.35,230.35,1,1,0,0,0,3.4,2.1);
	this.instance_248.alpha = 0.5;
	this.instance_248.compositeOperation = "multiply";

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_799.setTransform(594.325,225);

	this.instance_249 = new lib.Rectangle_1_6();
	this.instance_249.setTransform(594.35,223.3,1,1,0,0,0,3.4,2.1);
	this.instance_249.alpha = 0.5;
	this.instance_249.compositeOperation = "multiply";

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#F9FF00").s().p("AgTAuIAAhbIAnAAIAABbg");
	this.shape_800.setTransform(625.75,224.85);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#00FCFF").s().p("AgTAuIAAhbIAnAAIAABbg");
	this.shape_801.setTransform(619.75,224.85);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#F9FF00").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_802.setTransform(577.575,233.475);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#F9FF00").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_803.setTransform(577.575,230.425);

	this.instance_250 = new lib.Path_16_0();
	this.instance_250.setTransform(585.5,233.5,1,1,0,0,0,2,1);
	this.instance_250.alpha = 0.5;
	this.instance_250.compositeOperation = "multiply";

	this.instance_251 = new lib.Path_17_0();
	this.instance_251.setTransform(585.5,230.45,1,1,0,0,0,2,1);
	this.instance_251.alpha = 0.5;
	this.instance_251.compositeOperation = "multiply";

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#FFFFAE").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_804.setTransform(569.4,233.475);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#FFFFAE").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_805.setTransform(569.4,230.425);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#00FC98").s().p("AglAKIAAgTIBLAAIAAATg");
	this.shape_806.setTransform(571.175,241.025);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#00FC98").s().p("AhpAKIAAgTIDTAAIAAATg");
	this.shape_807.setTransform(578,224.525);

	this.instance_252 = new lib.Path_22_0();
	this.instance_252.setTransform(594.7,229.7,1,1,0,0,0,34.9,12.3);
	this.instance_252.alpha = 0.5;
	this.instance_252.compositeOperation = "multiply";

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.rf(["#675D9D","#644381"],[0,1],0,0,0,0,0,28.3).s().p("Al6CaIAAkzIL1AAIAAEzg");
	this.shape_808.setTransform(594.175,230.4);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#00FFFF").s().p("AhjAKIAAgTIDHAAIAAATg");
	this.shape_809.setTransform(617.35,307);

	this.instance_253 = new lib.Rectangle_6();
	this.instance_253.setTransform(621.75,301.3,1,1,0,0,0,4,1.6);
	this.instance_253.alpha = 0.5;
	this.instance_253.compositeOperation = "multiply";

	this.instance_254 = new lib.Rectangle_1_5();
	this.instance_254.setTransform(621.75,290,1,1,0,0,0,4,1.6);
	this.instance_254.alpha = 0.5;
	this.instance_254.compositeOperation = "multiply";

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#F9FF00").s().p("AgEAGQgDgDAAgDQAAgDADgCQACgDACAAQADAAADADQABACAAADQAAADgBADQgDADgDAAQgCAAgCgDg");
	this.shape_810.setTransform(614.05,301.325);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#00FFFF").s().p("AgEAGQgDgDAAgDQAAgIAHAAQAHAAAAAIQAAADgBADQgDADgDgBQgCABgCgDg");
	this.shape_811.setTransform(614.05,290.05);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#FFFFFF").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAJgHAAQgGAAAAgJg");
	this.shape_812.setTransform(610.475,301.325);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#00FFFF").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAIgHAAQgGAAAAgIg");
	this.shape_813.setTransform(610.475,290.05);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#00FFFF").s().p("AgSAYIAAguIAlAAIAAAug");
	this.shape_814.setTransform(597.675,303.65);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#00FFFF").s().p("AgSAYIAAguIAlAAIAAAug");
	this.shape_815.setTransform(592.15,303.65);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#00FFFF").s().p("AgSAYIAAguIAlAAIAAAug");
	this.shape_816.setTransform(586.65,303.65);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#00FFFF").s().p("AgSAYIAAguIAlAAIAAAug");
	this.shape_817.setTransform(581.125,303.65);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#00FFFF").s().p("AgSAYIAAguIAlAAIAAAug");
	this.shape_818.setTransform(575.6,303.65);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#00FFFF").s().p("AgSAYIAAguIAlAAIAAAug");
	this.shape_819.setTransform(570.1,303.65);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#00FFFF").s().p("AgSAYIAAguIAlAAIAAAug");
	this.shape_820.setTransform(564.575,303.65);

	this.instance_255 = new lib.Path_5_2();
	this.instance_255.setTransform(617.35,297.35,1,1,0,0,0,10,10.7);
	this.instance_255.alpha = 0.5;
	this.instance_255.compositeOperation = "screen";

	this.instance_256 = new lib.Rectangle_9_1();
	this.instance_256.setTransform(595.25,294.95,1,1,0,0,0,4.3,1.2);
	this.instance_256.alpha = 0.5;
	this.instance_256.compositeOperation = "multiply";

	this.instance_257 = new lib.Rectangle_10_1();
	this.instance_257.setTransform(585.55,294.95,1,1,0,0,0,4.4,1.2);
	this.instance_257.alpha = 0.5;
	this.instance_257.compositeOperation = "multiply";

	this.instance_258 = new lib.Rectangle_11_1();
	this.instance_258.setTransform(575.8,294.95,1,1,0,0,0,4.4,1.2);
	this.instance_258.alpha = 0.5;
	this.instance_258.compositeOperation = "multiply";

	this.instance_259 = new lib.Rectangle_12_1();
	this.instance_259.setTransform(566.05,294.95,1,1,0,0,0,4.4,1.2);
	this.instance_259.alpha = 0.5;
	this.instance_259.compositeOperation = "multiply";

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.lf(["#FFC7CB","#FFEAB8"],[0,1],-18.9,0,19,0).s().p("Ai9AMIAAgXIF7AAIAAAXg");
	this.shape_821.setTransform(580.625,289.625);

	this.instance_260 = new lib.Path_6_2();
	this.instance_260.setTransform(580.8,297.35,1,1,0,0,0,21,10.7);
	this.instance_260.alpha = 0.5;
	this.instance_260.compositeOperation = "multiply";

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.rf(["#675D9D","#644381"],[0,1],0,0,0,0,0,28.3).s().p("Al6CaIAAkzIL1AAIAAEzg");
	this.shape_822.setTransform(594.175,297.025);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_823.setTransform(172.175,278.85);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_824.setTransform(169.775,278.85);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_825.setTransform(167.375,278.85);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_826.setTransform(165.025,278.85);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_827.setTransform(162.625,278.85);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#00FFFF").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_828.setTransform(160.325,278.85);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#00FFFF").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_829.setTransform(158.225,278.85);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAIIAAgPIEXAAIAAAPg");
	this.shape_830.setTransform(193.325,280.5);

	this.instance_261 = new lib.Path_1_9();
	this.instance_261.setTransform(193.3,278.85,1,1,0,0,0,14,2.4);
	this.instance_261.alpha = 0.3008;
	this.instance_261.compositeOperation = "multiply";

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#455BFF").s().p("AgsAKIAAgTIBZAAIAAATg");
	this.shape_831.setTransform(222.8,282.475);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#F90000").s().p("AgEAGQgCgCgBgEQABgCACgDQACgDACAAQADAAADADQACADAAACQAAAEgCACQgDADgDAAQgCAAgCgDg");
	this.shape_832.setTransform(225.5,275.075);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#FFFFFF").s().p("AgEAGQgCgCgBgEQABgCACgDQACgDACAAQADAAACADQADADAAACQAAAEgDACQgCADgDAAQgCAAgCgDg");
	this.shape_833.setTransform(219.9,275.075);

	this.instance_262 = new lib.Rectangle_8_3();
	this.instance_262.setTransform(194.15,278.8,1,1,0,0,0,37.9,5.5);
	this.instance_262.compositeOperation = "screen";

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_834.setTransform(172.175,236.75);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_835.setTransform(169.775,236.75);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_836.setTransform(167.375,236.75);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_837.setTransform(165.025,236.75);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_838.setTransform(162.625,236.75);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#00FFFF").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_839.setTransform(160.325,236.75);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#00FFFF").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_840.setTransform(158.225,236.75);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAIIAAgPIEXAAIAAAPg");
	this.shape_841.setTransform(193.325,238.45);

	this.instance_263 = new lib.Path_1_8();
	this.instance_263.setTransform(193.3,236.75,1,1,0,0,0,14,2.4);
	this.instance_263.alpha = 0.3008;
	this.instance_263.compositeOperation = "multiply";

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#455BFF").s().p("AgsAKIAAgSIBZAAIAAASg");
	this.shape_842.setTransform(222.8,240.4);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#F90000").s().p("AgHAAQABgCACgDQACgDACAAQADAAADADQACADAAACQgBAJgHgBQgHABAAgJg");
	this.shape_843.setTransform(225.5,233);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#FFFFFF").s().p("AgHAAQABgCACgDQACgDACAAQADAAACADQADADAAACQAAAJgIgBQgGABgBgJg");
	this.shape_844.setTransform(219.9,233);

	this.instance_264 = new lib.Rectangle_8_2();
	this.instance_264.setTransform(194.15,236.75,1,1,0,0,0,37.9,5.5);
	this.instance_264.compositeOperation = "screen";

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_845.setTransform(169.775,208.5);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_846.setTransform(167.375,208.5);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_847.setTransform(165.025,208.5);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_848.setTransform(162.625,208.5);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#00FFFF").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_849.setTransform(160.325,208.5);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#00FFFF").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_850.setTransform(158.225,208.5);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAHIAAgNIEXAAIAAANg");
	this.shape_851.setTransform(193.325,209.925);

	this.instance_265 = new lib.Path_1_7();
	this.instance_265.setTransform(193.3,208.25,1,1,0,0,0,14,2.4);
	this.instance_265.alpha = 0.3008;
	this.instance_265.compositeOperation = "multiply";

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#455BFF").s().p("AgsAKIAAgTIBZAAIAAATg");
	this.shape_852.setTransform(222.8,211.5);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#FFFFFF").s().p("AgEAGQgCgDgBgDQABgDACgCQACgDACAAQADAAADADQACACAAADQAAADgCADQgDADgDAAQgCAAgCgDg");
	this.shape_853.setTransform(225.5,205.475);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#FFFFFF").s().p("AgEAGQgCgDgBgDQABgDACgCQACgDACAAQADAAACADQADACAAADQAAADgDADQgCADgDAAQgCAAgCgDg");
	this.shape_854.setTransform(219.9,205.475);

	this.instance_266 = new lib.Rectangle_7_2();
	this.instance_266.setTransform(194.15,208.2,1,1,0,0,0,37.9,5.5);
	this.instance_266.compositeOperation = "screen";

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#00FFFF").s().p("AgEAGQgCgDAAgDQAAgDACgCQACgDACAAQADAAACADQACACAAADQAAADgCADQgCADgDAAQgCAAgCgDg");
	this.shape_855.setTransform(219.05,261.075);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#F9FF00").s().p("AgEAGQgCgDgBgDQABgDACgCQACgDACAAQADAAADADQACACAAADQAAADgCADQgDADgDAAQgCAAgCgDg");
	this.shape_856.setTransform(223.15,261.075);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#004CFF").s().p("AgEAGQgDgDABgDQgBgDADgCQACgDACAAQADAAACADQACACABADQgBADgCADQgCADgDAAQgCAAgCgDg");
	this.shape_857.setTransform(226.55,261.075);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#F90068").s().p("AgEAGQgCgDAAgDQgBgIAHABQAHgBAAAIQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_858.setTransform(219.05,263.7);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#00FFFF").s().p("AgEAGQgCgDgBgDQABgIAGABQAIgBAAAIQAAADgCADQgDACgDAAQgCAAgCgCg");
	this.shape_859.setTransform(223.15,263.7);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#F90068").s().p("AgEAGQgDgDABgDQAAgIAGABQAIgBAAAIQgBADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_860.setTransform(226.55,263.7);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#F9FF00").s().p("AgEAGQgCgDAAgDQAAgDACgCQACgDACAAQADAAACADQACACAAADQAAADgCADQgCADgDAAQgCAAgCgDg");
	this.shape_861.setTransform(219.05,266.325);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#F90068").s().p("AgEAGQgCgDgBgDQABgDACgCQACgDACAAQADAAADADQACACAAADQAAADgCADQgDADgDAAQgCAAgCgDg");
	this.shape_862.setTransform(223.15,266.325);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#004CFF").s().p("AgEAGQgDgDABgDQgBgDADgCQACgDACAAQADAAACADQACACABADQgBADgCADQgCADgDAAQgCAAgCgDg");
	this.shape_863.setTransform(226.55,266.325);

	this.instance_267 = new lib.Path_9_0();
	this.instance_267.setTransform(223.15,263.65,1,1,0,0,0,6.5,4.6);
	this.instance_267.alpha = 0.5;
	this.instance_267.compositeOperation = "multiply";

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#FFFFFF").s().p("AgWAGIAAgLIAsAAIAAALg");
	this.shape_864.setTransform(177.05,259.65);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#00FC98").s().p("AgWAGIAAgLIAsAAIAAALg");
	this.shape_865.setTransform(171.65,259.65);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#F90000").s().p("AgHAAQAAgDADgCQACgCACgBQADABADACQACACgBADQAAAJgHAAQgHAAAAgJg");
	this.shape_866.setTransform(198.15,261.85);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#F9FF00").s().p("AgGAAQAAgDACgCQACgCACgBQADABACACQACACAAADQABAJgIAAQgHAAABgJg");
	this.shape_867.setTransform(195.75,261.85);

	this.instance_268 = new lib.Rectangle_2_0();
	this.instance_268.setTransform(181.5,261.85,1,1,0,0,0,12.1,1.1);
	this.instance_268.alpha = 0.5;
	this.instance_268.compositeOperation = "multiply";

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#FFFFFF").s().p("AgdAIIAAgQIA7AAIAAAQg");
	this.shape_868.setTransform(223.15,251);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#00FFFF").s().p("AgdAIIAAgPIA7AAIAAAPg");
	this.shape_869.setTransform(194.4,252.675);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#00FFFF").s().p("AgdAIIAAgPIA7AAIAAAPg");
	this.shape_870.setTransform(187.075,252.675);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#00FFFF").s().p("AgdAIIAAgPIA7AAIAAAPg");
	this.shape_871.setTransform(179.75,252.675);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#00FFFF").s().p("AgdAIIAAgPIA7AAIAAAPg");
	this.shape_872.setTransform(172.425,252.675);

	this.instance_269 = new lib.Path_12();
	this.instance_269.setTransform(199.8,256.8,1,1,0,0,0,32.4,8.8);
	this.instance_269.alpha = 0.5;
	this.instance_269.compositeOperation = "multiply";

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAGADADQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_873.setTransform(164.425,264.625);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgDAAgGQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_874.setTransform(158.875,264.625);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_875.setTransform(164.425,259.075);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#00FFFF").s().p("AgJAMQgEgFgBgHQABgGAEgFQAEgFAFAAQAGAAAFAFQADAFAAAGQAAAHgDAFQgFAFgGAAQgFAAgEgFg");
	this.shape_876.setTransform(164.45,259.075);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_877.setTransform(158.875,259.075);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#00FFFF").s().p("AgJAMQgFgFAAgHQAAgGAFgFQAEgFAFAAQAGAAAEAFQAFAFAAAGQAAAHgFAFQgEAFgGAAQgFAAgEgFg");
	this.shape_878.setTransform(158.875,259.075);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDADAAAFQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_879.setTransform(164.425,253.525);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#FFFF00").s().p("AgJAMQgEgFgBgHQABgGAEgFQAEgFAFAAQAGAAAFAFQADAFAAAGQAAAHgDAFQgFAFgGAAQgFAAgEgFg");
	this.shape_880.setTransform(164.45,253.525);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgFgDgDQgDgEgEAAQgDAAgDAEg");
	this.shape_881.setTransform(158.875,253.525);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.rf(["#675D9D","#644381"],[0,1],0,0,0,0,0,28.3).s().p("Al6BvIAAjdIL1AAIAADdg");
	this.shape_882.setTransform(194.175,259.075);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgNAPQgFgGAAgJQAAgIAFgGQAGgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgGgGgAgGgIQgEAEAAAEQAAAFAEAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_883.setTransform(208.8,185.225);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_884.setTransform(203.225,185.225);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgNAPQgFgGAAgJQAAgIAFgGQAGgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgGgGgAgGgIQgEAEAAAEQAAAFAEAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_885.setTransform(208.8,179.675);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_886.setTransform(203.225,179.675);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgNAPQgFgGAAgJQAAgIAFgGQAGgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgGgGgAgGgIQgEAEAAAEQAAAFAEAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_887.setTransform(208.8,174.125);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDADAAAFQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_888.setTransform(203.225,174.125);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#FFFFFF").s().p("AgGAAQAAgCACgDQACgCACAAQADAAADACQABADAAACQAAAJgHgBQgHABABgJg");
	this.shape_889.setTransform(226.25,183.15);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#F90000").s().p("AgHAAQAAgCADgDQACgCACAAQADAAADACQABADAAACQAAAJgHgBQgHABAAgJg");
	this.shape_890.setTransform(222.55,183.15);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_891.setTransform(191.675,175.225);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_892.setTransform(191.675,182.325);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#FFFFFF").s().p("AgHAAQAAgCADgDQACgCACAAQADAAADACQABADAAACQAAAJgHgBQgHABAAgJg");
	this.shape_893.setTransform(218.85,183.15);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,3.8).s().p("AgzAPIAAgdIBnAAIAAAdg");
	this.shape_894.setTransform(222.55,183.15);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_895.setTransform(223.275,191.25);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_896.setTransform(213.625,191.25);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_897.setTransform(203.975,191.25);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_898.setTransform(194.275,191.25);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_899.setTransform(194.275,182.3);

	this.instance_270 = new lib.Rectangle_5();
	this.instance_270.setTransform(194.3,180.6,1,1,0,0,0,3.4,2.1);
	this.instance_270.alpha = 0.5;
	this.instance_270.compositeOperation = "multiply";

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_900.setTransform(194.275,175.25);

	this.instance_271 = new lib.Rectangle_1_4();
	this.instance_271.setTransform(194.3,173.55,1,1,0,0,0,3.4,2.1);
	this.instance_271.alpha = 0.5;
	this.instance_271.compositeOperation = "multiply";

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#F9FF00").s().p("AgTAuIAAhbIAnAAIAABbg");
	this.shape_901.setTransform(225.75,175.075);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#00FCFF").s().p("AgTAuIAAhbIAnAAIAABbg");
	this.shape_902.setTransform(219.75,175.075);

	this.instance_272 = new lib.Path_14_1();
	this.instance_272.setTransform(185.5,183.75,1,1,0,0,0,2,1);
	this.instance_272.alpha = 0.5;
	this.instance_272.compositeOperation = "multiply";

	this.instance_273 = new lib.Path_15_1();
	this.instance_273.setTransform(185.5,180.65,1,1,0,0,0,2,1);
	this.instance_273.alpha = 0.5;
	this.instance_273.compositeOperation = "multiply";

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#FFFFAE").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_903.setTransform(169.4,183.725);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#FFFFAE").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_904.setTransform(169.4,180.625);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#00FC98").s().p("AhpAKIAAgTIDTAAIAAATg");
	this.shape_905.setTransform(178,191.225);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#00FC98").s().p("AhpAKIAAgTIDTAAIAAATg");
	this.shape_906.setTransform(178,174.775);

	this.instance_274 = new lib.Path_20_1();
	this.instance_274.setTransform(194.7,179.85,1,1,0,0,0,34.9,12.2);
	this.instance_274.alpha = 0.5;
	this.instance_274.compositeOperation = "multiply";

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.rf(["#675D9D","#644381"],[0,1],0,0,0,0,0,28.3).s().p("Al6CaIAAkyIL1AAIAAEyg");
	this.shape_907.setTransform(194.175,180.65);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#00FFFF").s().p("AhjAKIAAgTIDHAAIAAATg");
	this.shape_908.setTransform(217.35,155.9);

	this.instance_275 = new lib.Rectangle_4();
	this.instance_275.setTransform(221.75,150.2,1,1,0,0,0,4,1.6);
	this.instance_275.alpha = 0.5;
	this.instance_275.compositeOperation = "multiply";

	this.instance_276 = new lib.Rectangle_1_3();
	this.instance_276.setTransform(221.75,138.9,1,1,0,0,0,4,1.6);
	this.instance_276.alpha = 0.5;
	this.instance_276.compositeOperation = "multiply";

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#F9FF00").s().p("AgEAGQgCgCAAgEQAAgCACgDQACgDACAAQADAAACADQADADAAACQAAAEgDACQgCADgDAAQgCAAgCgDg");
	this.shape_909.setTransform(214.05,150.225);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#00FFFF").s().p("AgGAAQAAgDACgCQACgDACAAQADAAACADQADACAAADQAAAJgIgBQgGABAAgJg");
	this.shape_910.setTransform(214.05,138.95);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#FFFFFF").s().p("AgEAGQgCgCgBgEQABgCACgDQACgDACAAQADAAACADQADADAAACQAAAEgDACQgCADgDAAQgCAAgCgDg");
	this.shape_911.setTransform(210.45,150.225);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#00FFFF").s().p("AgHAAQABgDACgCQACgDACAAQADAAACADQADACAAADQAAAJgIgBQgGABgBgJg");
	this.shape_912.setTransform(210.45,138.95);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#00FFFF").s().p("AgSAXIAAgtIAlAAIAAAtg");
	this.shape_913.setTransform(197.675,152.575);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#00FFFF").s().p("AgTAXIAAgtIAnAAIAAAtg");
	this.shape_914.setTransform(192.15,152.575);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#00FFFF").s().p("AgTAXIAAgtIAnAAIAAAtg");
	this.shape_915.setTransform(186.65,152.575);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#00FFFF").s().p("AgSAXIAAgtIAlAAIAAAtg");
	this.shape_916.setTransform(181.125,152.575);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#00FFFF").s().p("AgTAXIAAgtIAnAAIAAAtg");
	this.shape_917.setTransform(175.6,152.575);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#00FFFF").s().p("AgSAXIAAgtIAlAAIAAAtg");
	this.shape_918.setTransform(170.075,152.575);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#00FFFF").s().p("AgSAXIAAgtIAlAAIAAAtg");
	this.shape_919.setTransform(164.575,152.575);

	this.instance_277 = new lib.Path_5_1();
	this.instance_277.setTransform(217.35,146.25,1,1,0,0,0,10,10.7);
	this.instance_277.alpha = 0.5;
	this.instance_277.compositeOperation = "screen";

	this.instance_278 = new lib.Rectangle_9_0();
	this.instance_278.setTransform(195.3,143.85,1,1,0,0,0,4.4,1.2);
	this.instance_278.alpha = 0.5;
	this.instance_278.compositeOperation = "multiply";

	this.instance_279 = new lib.Rectangle_10_0();
	this.instance_279.setTransform(185.55,143.85,1,1,0,0,0,4.4,1.2);
	this.instance_279.alpha = 0.5;
	this.instance_279.compositeOperation = "multiply";

	this.instance_280 = new lib.Rectangle_11_0();
	this.instance_280.setTransform(175.8,143.85,1,1,0,0,0,4.4,1.2);
	this.instance_280.alpha = 0.5;
	this.instance_280.compositeOperation = "multiply";

	this.instance_281 = new lib.Rectangle_12_0();
	this.instance_281.setTransform(166.05,143.85,1,1,0,0,0,4.4,1.2);
	this.instance_281.alpha = 0.5;
	this.instance_281.compositeOperation = "multiply";

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.lf(["#FFC7CB","#FFEAB8"],[0,1],-18.9,0,19,0).s().p("Ai9AMIAAgXIF7AAIAAAXg");
	this.shape_920.setTransform(180.625,138.55);

	this.instance_282 = new lib.Path_6_1();
	this.instance_282.setTransform(180.8,146.25,1,1,0,0,0,21,10.7);
	this.instance_282.alpha = 0.5;
	this.instance_282.compositeOperation = "multiply";

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.rf(["#675D9D","#644381"],[0,1],0,0,0,0,0,28.3).s().p("Al6CaIAAkzIL1AAIAAEzg");
	this.shape_921.setTransform(194.175,145.925);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#F90000").s().p("AgEAGQgCgDgBgDQABgCACgCQACgCACgBQADABADACQACACAAACQAAADgCADQgDACgDAAQgCAAgCgCg");
	this.shape_922.setTransform(730.85,222.25);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#475788").s().p("AgEAGQgCgDAAgDQAAgCACgCQACgCACgBQAHABAAAGQAAAIgHAAQgCAAgCgCg");
	this.shape_923.setTransform(726.725,222.25);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#00FFFF").s().p("AgEAGQgCgDAAgDQAAgCACgCQACgCACgBQAHABAAAGQAAAIgHAAQgCAAgCgCg");
	this.shape_924.setTransform(722.625,222.25);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#F90000").s().p("AgGAAQAAgGAGgBQAHABAAAGQAAAIgHAAQgGAAAAgIg");
	this.shape_925.setTransform(718.525,222.25);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#FFFFFF").s().p("AgEAGQgCgDAAgDQAAgCACgCQACgCACgBQAHABAAAGQAAAIgHAAQgCAAgCgCg");
	this.shape_926.setTransform(660.675,222.25);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#F9FF00").s().p("AgEATIAAgmIAJAAIAAAmg");
	this.shape_927.setTransform(671.275,193.3);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#F9FF00").s().p("AgEATIAAgmIAJAAIAAAmg");
	this.shape_928.setTransform(669.15,193.3);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#F9FF00").s().p("AgEATIAAgmIAJAAIAAAmg");
	this.shape_929.setTransform(667.025,193.3);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#F9FF00").s().p("AgEATIAAgmIAKAAIAAAmg");
	this.shape_930.setTransform(664.9,193.3);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#00FFFF").s().p("AgEATIAAgmIAJAAIAAAmg");
	this.shape_931.setTransform(662.775,193.3);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#00FFFF").s().p("AgFATIAAgmIALAAIAAAmg");
	this.shape_932.setTransform(660.65,193.3);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAIIAAgPIEXAAIAAAPg");
	this.shape_933.setTransform(695.75,194.7);

	this.instance_283 = new lib.Path_1_6();
	this.instance_283.setTransform(695.75,193.05,1,1,0,0,0,14,2.4);
	this.instance_283.alpha = 0.3008;
	this.instance_283.compositeOperation = "multiply";

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#455BFF").s().p("AgsAKIAAgTIBZAAIAAATg");
	this.shape_934.setTransform(725.225,196.425);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#FFFFFF").s().p("AgEAGQgCgDAAgDQAAgDACgCQACgDACAAQADAAACADQADACAAADQAAADgDADQgCADgDAAQgCAAgCgDg");
	this.shape_935.setTransform(727.95,190.025);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#F90000").s().p("AgEAGQgDgDABgDQgBgDADgCQACgDACAAQADAAACADQACACAAADQAAADgCADQgCADgDAAQgCAAgCgDg");
	this.shape_936.setTransform(722.35,190.025);

	this.instance_284 = new lib.Rectangle_7_1();
	this.instance_284.setTransform(696.65,193.25,1,1,0,0,0,38,5.5);
	this.instance_284.compositeOperation = "screen";

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#F9FF00").s().p("AgEATIAAgmIAJAAIAAAmg");
	this.shape_937.setTransform(672.225,175.75);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#F9FF00").s().p("AgEATIAAgmIAJAAIAAAmg");
	this.shape_938.setTransform(669.825,175.75);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#F9FF00").s().p("AgFATIAAgmIAKAAIAAAmg");
	this.shape_939.setTransform(667.45,175.75);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#F9FF00").s().p("AgEATIAAgmIAJAAIAAAmg");
	this.shape_940.setTransform(665.075,175.75);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#00FFFF").s().p("AgEATIAAgmIAJAAIAAAmg");
	this.shape_941.setTransform(662.775,175.75);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#00FFFF").s().p("AgFATIAAgmIALAAIAAAmg");
	this.shape_942.setTransform(660.65,175.75);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAIIAAgPIEXAAIAAAPg");
	this.shape_943.setTransform(695.75,177.15);

	this.instance_285 = new lib.Path_1_5();
	this.instance_285.setTransform(695.75,175.5,1,1,0,0,0,14,2.4);
	this.instance_285.alpha = 0.3008;
	this.instance_285.compositeOperation = "multiply";

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#455BFF").s().p("AgsAKIAAgTIBZAAIAAATg");
	this.shape_944.setTransform(725.225,178.725);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#FFFFFF").s().p("AgEAGQgCgDAAgDQAAgDACgCQACgDACAAQADAAACADQADACAAADQAAADgDADQgCADgDAAQgCAAgCgDg");
	this.shape_945.setTransform(727.95,172.725);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#FFFFFF").s().p("AgEAGQgDgDABgDQgBgDADgCQACgDACAAQADAAACADQACACAAADQAAADgCADQgCADgDAAQgCAAgCgDg");
	this.shape_946.setTransform(722.35,172.725);

	this.instance_286 = new lib.Rectangle_7_0();
	this.instance_286.setTransform(696.65,175.45,1,1,0,0,0,38,5.5);
	this.instance_286.compositeOperation = "screen";

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDADAAAFQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_947.setTransform(711.225,297.025);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgFgDgDQgDgEgEAAQgDAAgDAEg");
	this.shape_948.setTransform(705.675,297.025);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDADAAAFQAAAFADAEQADADADAAQAEAAADgDQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_949.setTransform(711.225,291.475);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADADADAAQAEAAADgDQADgEAAgFQAAgFgDgDQgDgEgEAAQgDAAgDAEg");
	this.shape_950.setTransform(705.675,291.475);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgHAAgIQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAIgGAHQgFAGgIAAQgHAAgFgGgAgGgIQgDADAAAFQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEABQgDgBgDAEg");
	this.shape_951.setTransform(711.225,285.9);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgHAAgIQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAIgGAHQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgFgDgDQgDgEgEABQgDgBgDAEg");
	this.shape_952.setTransform(705.675,285.9);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#FFFFFF").s().p("AgGAAQAAgHAGAAQAHAAAAAHQAAAJgHAAQgGAAAAgJg");
	this.shape_953.setTransform(728.675,294.95);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#F90000").s().p("AgGAAQAAgHAGAAQAHAAAAAHQAAAJgHAAQgGAAAAgJg");
	this.shape_954.setTransform(724.975,294.95);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#FFFFFF").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_955.setTransform(694.1,287.025);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#FFFFFF").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_956.setTransform(694.1,294.1);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#FFFFFF").s().p("AgGAAQAAgHAGAAQAHAAAAAHQAAAJgHAAQgGAAAAgJg");
	this.shape_957.setTransform(721.275,294.95);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,3.8).s().p("AgzAPIAAgeIBnAAIAAAeg");
	this.shape_958.setTransform(724.975,294.95);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_959.setTransform(725.725,303.025);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#FFFFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_960.setTransform(716.075,303.025);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#FFFFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_961.setTransform(706.375,303.025);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_962.setTransform(696.725,303.025);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_963.setTransform(696.725,294.1);

	this.instance_287 = new lib.Rectangle_3();
	this.instance_287.setTransform(696.75,292.4,1,1,0,0,0,3.4,2.1);
	this.instance_287.alpha = 0.5;
	this.instance_287.compositeOperation = "multiply";

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_964.setTransform(696.725,287.025);

	this.instance_288 = new lib.Rectangle_1_2();
	this.instance_288.setTransform(696.75,285.3,1,1,0,0,0,3.4,2.1);
	this.instance_288.alpha = 0.5;
	this.instance_288.compositeOperation = "multiply";

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#F9FF00").s().p("AgTAuIAAhbIAnAAIAABbg");
	this.shape_965.setTransform(728.2,286.875);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#00FCFF").s().p("AgTAuIAAhbIAnAAIAABbg");
	this.shape_966.setTransform(722.175,286.875);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#F9FF00").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_967.setTransform(680,295.525);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#F9FF00").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_968.setTransform(680,292.425);

	this.instance_289 = new lib.Path_16();
	this.instance_289.setTransform(687.95,295.55,1,1,0,0,0,2,1);
	this.instance_289.alpha = 0.5;
	this.instance_289.compositeOperation = "multiply";

	this.instance_290 = new lib.Path_17();
	this.instance_290.setTransform(687.95,292.45,1,1,0,0,0,2,1);
	this.instance_290.alpha = 0.5;
	this.instance_290.compositeOperation = "multiply";

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#FFFFAE").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_969.setTransform(671.85,295.525);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#FFFFAE").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_970.setTransform(671.85,292.425);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#00FC98").s().p("AglAKIAAgTIBLAAIAAATg");
	this.shape_971.setTransform(673.625,303.025);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#00FC98").s().p("AhpAKIAAgTIDTAAIAAATg");
	this.shape_972.setTransform(680.425,286.525);

	this.instance_291 = new lib.Path_22();
	this.instance_291.setTransform(697.15,291.65,1,1,0,0,0,34.9,12.2);
	this.instance_291.alpha = 0.5;
	this.instance_291.compositeOperation = "multiply";

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.rf(["#675D9D","#644381"],[0,1],0,0,0,0,0,28.3).s().p("Al7CaIAAkzIL3AAIAAEzg");
	this.shape_973.setTransform(696.6,292.425);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_974.setTransform(711.225,260.725);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#FFFFFF").s().p("AgJAMQgFgFAAgHQAAgGAFgFQAEgFAFAAQAGAAAFAFQAEAFAAAGQAAAHgEAFQgFAFgGAAQgFAAgEgFg");
	this.shape_975.setTransform(711.225,260.725);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_976.setTransform(705.675,260.725);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#FFFFFF").s().p("AgJAMQgFgFAAgHQAAgGAFgFQAEgFAFAAQAGAAAEAFQAFAFAAAGQAAAHgFAFQgEAFgGAAQgFAAgEgFg");
	this.shape_977.setTransform(705.675,260.725);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDADAAAFQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_978.setTransform(711.225,255.175);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgFgDgDQgDgEgEAAQgDAAgDAEg");
	this.shape_979.setTransform(705.675,255.175);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDADAAAFQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_980.setTransform(711.225,249.625);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#FFFFFF").s().p("AgJAMQgFgFAAgHQAAgGAFgFQAEgFAFAAQAGAAAFAFQAEAFAAAGQAAAHgEAFQgFAFgGAAQgFAAgEgFg");
	this.shape_981.setTransform(711.225,249.6);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgFgDgDQgDgEgEAAQgDAAgDAEg");
	this.shape_982.setTransform(705.675,249.625);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#FFFFFF").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAJgHgBQgGABAAgJg");
	this.shape_983.setTransform(728.675,258.65);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#F90000").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAJgHgBQgGABAAgJg");
	this.shape_984.setTransform(724.975,258.65);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#FFFFFF").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_985.setTransform(694.1,250.725);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#FFFFFF").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBgBAAAAg");
	this.shape_986.setTransform(694.1,257.825);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#FFFFFF").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAJgHgBQgGABAAgJg");
	this.shape_987.setTransform(721.275,258.65);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,3.8).s().p("AgzAPIAAgdIBnAAIAAAdg");
	this.shape_988.setTransform(724.975,258.65);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_989.setTransform(725.725,266.75);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_990.setTransform(716.075,266.75);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_991.setTransform(706.375,266.75);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_992.setTransform(696.725,266.75);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_993.setTransform(696.725,257.8);

	this.instance_292 = new lib.Rectangle_2();
	this.instance_292.setTransform(696.75,256.1,1,1,0,0,0,3.4,2.1);
	this.instance_292.alpha = 0.5;
	this.instance_292.compositeOperation = "multiply";

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_994.setTransform(696.725,250.75);

	this.instance_293 = new lib.Rectangle_1_1();
	this.instance_293.setTransform(696.75,249.05,1,1,0,0,0,3.4,2.1);
	this.instance_293.alpha = 0.5;
	this.instance_293.compositeOperation = "multiply";

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#F9FF00").s().p("AgTAuIAAhbIAnAAIAABbg");
	this.shape_995.setTransform(728.2,250.575);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#F90000").s().p("AgTAuIAAhbIAnAAIAABbg");
	this.shape_996.setTransform(722.175,250.575);

	this.instance_294 = new lib.Path_14_0();
	this.instance_294.setTransform(687.95,259.25,1,1,0,0,0,2,1);
	this.instance_294.alpha = 0.5;
	this.instance_294.compositeOperation = "multiply";

	this.instance_295 = new lib.Path_15_0();
	this.instance_295.setTransform(687.95,256.15,1,1,0,0,0,2,1);
	this.instance_295.alpha = 0.5;
	this.instance_295.compositeOperation = "multiply";

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#FFFFAE").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_997.setTransform(671.85,259.225);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#FFFFAE").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_998.setTransform(671.85,256.125);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#00FC98").s().p("AhpAKIAAgTIDTAAIAAATg");
	this.shape_999.setTransform(680.425,266.725);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#00FC98").s().p("AhpAKIAAgTIDTAAIAAATg");
	this.shape_1000.setTransform(680.425,250.275);

	this.instance_296 = new lib.Path_20_0();
	this.instance_296.setTransform(697.15,255.35,1,1,0,0,0,34.9,12.2);
	this.instance_296.alpha = 0.5;
	this.instance_296.compositeOperation = "multiply";

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.rf(["#675D9D","#644381"],[0,1],0,0,0,0,0,28.3).s().p("Al7CaIAAkyIL3AAIAAEyg");
	this.shape_1001.setTransform(696.6,256.15);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAGADADQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_1002.setTransform(711.225,152.475);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgDAAgGQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_1003.setTransform(705.675,152.475);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAGADADQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_1004.setTransform(711.225,146.925);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgDAAgGQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_1005.setTransform(705.675,146.925);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_1006.setTransform(711.225,141.375);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.lf(["#8B84B4","#6E4F7C"],[0,1],0,2.1,0,-2.1).s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAIQAAAJgGAGQgFAGgIAAQgHAAgFgGgAgGgIQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_1007.setTransform(705.675,141.375);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#FFFFFF").s().p("AgGAAQAAgIAGABQAHgBAAAIQAAAJgHAAQgGAAAAgJg");
	this.shape_1008.setTransform(728.675,150.4);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#F90000").s().p("AgGAAQAAgIAGABQAHgBAAAIQAAAJgHAAQgGAAAAgJg");
	this.shape_1009.setTransform(724.975,150.4);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#FFFFFF").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_1010.setTransform(694.1,142.5);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#FFFFFF").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_1011.setTransform(694.1,149.575);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#FFFFFF").s().p("AgGAAQAAgIAGABQAHgBAAAIQAAAJgHAAQgGAAAAgJg");
	this.shape_1012.setTransform(721.275,150.4);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,3.8).s().p("AgzAPIAAgdIBnAAIAAAdg");
	this.shape_1013.setTransform(724.975,150.425);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_1014.setTransform(725.725,158.5);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_1015.setTransform(716.075,158.5);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_1016.setTransform(706.375,158.5);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#00FFFF").s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_1017.setTransform(696.725,158.5);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_1018.setTransform(696.725,149.575);

	this.instance_297 = new lib.Rectangle_0();
	this.instance_297.setTransform(696.75,147.85,1,1,0,0,0,3.4,2.1);
	this.instance_297.alpha = 0.5;
	this.instance_297.compositeOperation = "multiply";

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,2.4).s().p("AghAFIAAgJIBDAAIAAAJg");
	this.shape_1019.setTransform(696.725,142.5);

	this.instance_298 = new lib.Rectangle_1_0();
	this.instance_298.setTransform(696.75,140.8,1,1,0,0,0,3.4,2.1);
	this.instance_298.alpha = 0.5;
	this.instance_298.compositeOperation = "multiply";

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#F9FF00").s().p("AgTAuIAAhbIAnAAIAABbg");
	this.shape_1020.setTransform(728.2,142.35);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#00FCFF").s().p("AgTAuIAAhbIAnAAIAABbg");
	this.shape_1021.setTransform(722.175,142.35);

	this.instance_299 = new lib.Path_14();
	this.instance_299.setTransform(687.95,151,1,1,0,0,0,2,1);
	this.instance_299.alpha = 0.5;
	this.instance_299.compositeOperation = "multiply";

	this.instance_300 = new lib.Path_15();
	this.instance_300.setTransform(687.95,147.95,1,1,0,0,0,2,1);
	this.instance_300.alpha = 0.5;
	this.instance_300.compositeOperation = "multiply";

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#FFFFAE").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_1022.setTransform(671.85,150.975);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#FFFFAE").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_1023.setTransform(671.85,147.925);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#00FC98").s().p("AhpAKIAAgSIDTAAIAAASg");
	this.shape_1024.setTransform(680.425,158.5);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#00FC98").s().p("AhpAKIAAgTIDTAAIAAATg");
	this.shape_1025.setTransform(680.425,142.025);

	this.instance_301 = new lib.Path_20();
	this.instance_301.setTransform(697.15,147.1,1,1,0,0,0,34.9,12.2);
	this.instance_301.alpha = 0.5;
	this.instance_301.compositeOperation = "multiply";

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.rf(["#675D9D","#644381"],[0,1],0,0,0,0,0,28.3).s().p("Al7CaIAAkyIL3AAIAAEyg");
	this.shape_1026.setTransform(696.6,147.9);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#F90000").s().p("AgGAAQAAgHAGABQADAAACACQACACAAACQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_1027.setTransform(829.025,133.55);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#475788").s().p("AgGAAQAAgHAGABQADAAACACQACACAAACQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_1028.setTransform(824.925,133.55);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#00FFFF").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_1029.setTransform(820.8,133.55);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#F90000").s().p("AgGAAQAAgHAGABQADAAACACQACACAAACQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_1030.setTransform(795.175,133.55);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#455BFF").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_1031.setTransform(800.55,133.55);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#455BFF").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQAHgBAAAHQAAAHgHAAQgCAAgCgCg");
	this.shape_1032.setTransform(805.925,133.55);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#F90000").s().p("AgGAAQAAgHAGABQAHgBAAAHQAAAHgHAAQgGAAAAgHg");
	this.shape_1033.setTransform(811.325,133.55);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#F90000").s().p("AgEAFQgCgCgBgDQABgCACgCQACgCACAAQADAAADACQACACAAACQAAADgCACQgDACgDAAQgCAAgCgCg");
	this.shape_1034.setTransform(816.7,133.55);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#FFFFFF").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgCACAAQADAAADACQABACAAACQAAADgBACQgDACgDAAQgCAAgCgCg");
	this.shape_1035.setTransform(758.85,133.55);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#F90000").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_1036.setTransform(829.025,249.275);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#475788").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_1037.setTransform(824.925,249.275);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#00FFFF").s().p("AgGAAQgBgGAHAAQAIAAgBAGQABAHgIAAQgHAAABgHg");
	this.shape_1038.setTransform(820.8,249.275);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#F90000").s().p("AgHAAQABgGAGAAQAIAAAAAGQAAAHgIAAQgGAAgBgHg");
	this.shape_1039.setTransform(816.7,249.275);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#FFFFFF").s().p("AgHAAQAAgGAHAAQAHAAAAAGQAAAHgHAAQgHAAAAgHg");
	this.shape_1040.setTransform(758.85,249.275);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_1041.setTransform(773.925,218.65);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_1042.setTransform(771.575,218.65);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_1043.setTransform(769.175,218.65);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_1044.setTransform(766.775,218.65);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#F9FF00").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_1045.setTransform(764.425,218.65);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#00FFFF").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_1046.setTransform(762.125,218.65);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#00FFFF").s().p("AgEATIAAglIAJAAIAAAlg");
	this.shape_1047.setTransform(759.975,218.65);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAHIAAgOIEXAAIAAAOg");
	this.shape_1048.setTransform(795.1,220.3);

	this.instance_302 = new lib.Path_1_4();
	this.instance_302.setTransform(795.1,218.65,1,1,0,0,0,14,2.4);
	this.instance_302.alpha = 0.3008;
	this.instance_302.compositeOperation = "multiply";

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#455BFF").s().p("AgsAKIAAgTIBZAAIAAATg");
	this.shape_1049.setTransform(824.55,222.275);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#F90000").s().p("AgEAGQgDgDABgDQgBgDADgCQACgDACAAQADAAACADQACACABADQgBADgCADQgCADgDAAQgCAAgCgDg");
	this.shape_1050.setTransform(827.3,214.875);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#FFFFFF").s().p("AgEAGQgCgDAAgDQAAgDACgCQACgDACAAQADAAACADQACACAAADQAAADgCADQgCADgDAAQgCAAgCgDg");
	this.shape_1051.setTransform(821.7,214.875);

	this.instance_303 = new lib.Rectangle_8_1();
	this.instance_303.setTransform(796,218.6,1,1,0,0,0,38,5.5);
	this.instance_303.compositeOperation = "screen";

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#F9FF00").s().p("AgEAUIAAgmIAJAAIAAAmg");
	this.shape_1052.setTransform(773.925,175.25);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#F9FF00").s().p("AgEAUIAAgmIAJAAIAAAmg");
	this.shape_1053.setTransform(771.575,175.25);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#F9FF00").s().p("AgEAUIAAgmIAJAAIAAAmg");
	this.shape_1054.setTransform(769.175,175.25);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#F9FF00").s().p("AgEAUIAAgmIAJAAIAAAmg");
	this.shape_1055.setTransform(766.775,175.25);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#F9FF00").s().p("AgEAUIAAgmIAJAAIAAAmg");
	this.shape_1056.setTransform(764.425,175.25);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#00FFFF").s().p("AgEAUIAAgmIAJAAIAAAmg");
	this.shape_1057.setTransform(762.125,175.25);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#00FFFF").s().p("AgEAUIAAgmIAJAAIAAAmg");
	this.shape_1058.setTransform(759.975,175.25);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAHIAAgNIEXAAIAAANg");
	this.shape_1059.setTransform(795.1,176.95);

	this.instance_304 = new lib.Path_1_3();
	this.instance_304.setTransform(795.1,175.25,1,1,0,0,0,14,2.4);
	this.instance_304.alpha = 0.3008;
	this.instance_304.compositeOperation = "multiply";

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#455BFF").s().p("AgsAKIAAgTIBZAAIAAATg");
	this.shape_1060.setTransform(824.55,178.875);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#F90000").s().p("AgGAAQgBgDADgCQACgCACgBQADABACACQACACABADQAAAIgIAAQgGAAAAgIg");
	this.shape_1061.setTransform(827.3,171.5);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#FFFFFF").s().p("AgGAAQAAgDACgCQACgCACgBQADABACACQACACAAADQABAIgIAAQgHAAABgIg");
	this.shape_1062.setTransform(821.7,171.5);

	this.instance_305 = new lib.Rectangle_8_0();
	this.instance_305.setTransform(796,175.25,1,1,0,0,0,38,5.5);
	this.instance_305.compositeOperation = "screen";

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#F9FF00").s().p("AgEATIAAgmIAJAAIAAAmg");
	this.shape_1063.setTransform(773.925,152.35);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#F9FF00").s().p("AgEATIAAgmIAJAAIAAAmg");
	this.shape_1064.setTransform(771.575,152.35);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#F9FF00").s().p("AgEATIAAgmIAJAAIAAAmg");
	this.shape_1065.setTransform(769.175,152.35);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#F9FF00").s().p("AgEATIAAgmIAJAAIAAAmg");
	this.shape_1066.setTransform(766.775,152.35);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#F9FF00").s().p("AgEATIAAgmIAJAAIAAAmg");
	this.shape_1067.setTransform(764.425,152.35);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#00FFFF").s().p("AgEATIAAgmIAJAAIAAAmg");
	this.shape_1068.setTransform(762.125,152.35);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#00FFFF").s().p("AgEATIAAgmIAJAAIAAAmg");
	this.shape_1069.setTransform(759.975,152.35);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAHIAAgNIEXAAIAAANg");
	this.shape_1070.setTransform(795.1,154);

	this.instance_306 = new lib.Path_1_2();
	this.instance_306.setTransform(795.1,152.35,1,1,0,0,0,14,2.4);
	this.instance_306.alpha = 0.3008;
	this.instance_306.compositeOperation = "multiply";

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#455BFF").s().p("AgsAKIAAgTIBZAAIAAATg");
	this.shape_1071.setTransform(824.55,155.975);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#F90000").s().p("AgEAGQgDgDABgDQAAgIAGABQAIgBAAAIQgBADgCADQgCADgDAAQgCAAgCgDg");
	this.shape_1072.setTransform(827.3,148.6);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#FFFFFF").s().p("AgEAGQgCgDAAgDQgBgIAHABQAIgBgBAIQAAADgCADQgCADgDAAQgCAAgCgDg");
	this.shape_1073.setTransform(821.7,148.6);

	this.instance_307 = new lib.Rectangle_8();
	this.instance_307.setTransform(796,152.3,1,1,0,0,0,38,5.5);
	this.instance_307.compositeOperation = "screen";

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#F9FF00").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_1074.setTransform(771.575,194.95);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#F9FF00").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_1075.setTransform(769.175,194.95);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#F9FF00").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_1076.setTransform(766.775,194.95);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#F9FF00").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_1077.setTransform(764.425,194.95);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#00FFFF").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_1078.setTransform(762.125,194.95);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#00FFFF").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape_1079.setTransform(759.975,194.95);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.rf(["#8B84B4","#6E4F7C"],[0,1],0,0,0,0,0,9.9).s().p("AiLAIIAAgOIEXAAIAAAOg");
	this.shape_1080.setTransform(795.1,196.4);

	this.instance_308 = new lib.Path_1_1();
	this.instance_308.setTransform(795.1,194.7,1,1,0,0,0,14,2.4);
	this.instance_308.alpha = 0.3008;
	this.instance_308.compositeOperation = "multiply";

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#455BFF").s().p("AgsAKIAAgTIBZAAIAAATg");
	this.shape_1081.setTransform(824.55,197.975);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#FFFFFF").s().p("AgEAGQgDgCABgEQgBgCADgDQACgDACAAQADAAACADQACADABACQgBAEgCACQgCADgDAAQgCAAgCgDg");
	this.shape_1082.setTransform(827.3,191.925);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#FFFFFF").s().p("AgEAGQgCgCAAgEQAAgCACgDQACgDACAAQADAAACADQACADAAACQAAAEgCACQgCADgDAAQgCAAgCgDg");
	this.shape_1083.setTransform(821.7,191.925);

	this.instance_309 = new lib.Rectangle_7();
	this.instance_309.setTransform(796,194.7,1,1,0,0,0,38,5.5);
	this.instance_309.compositeOperation = "screen";

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#00FFFF").s().p("AhjAKIAAgTIDHAAIAAATg");
	this.shape_1084.setTransform(819.1,290.15);

	this.instance_310 = new lib.Rectangle();
	this.instance_310.setTransform(823.5,284.5,1,1,0,0,0,4,1.6);
	this.instance_310.alpha = 0.5;
	this.instance_310.compositeOperation = "multiply";

	this.instance_311 = new lib.Rectangle_1();
	this.instance_311.setTransform(823.5,273.2,1,1,0,0,0,4,1.6);
	this.instance_311.alpha = 0.5;
	this.instance_311.compositeOperation = "multiply";

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#F9FF00").s().p("AgGAAQAAgCACgDQACgCACAAQADAAACACQACADAAACQABAJgIAAQgHAAABgJg");
	this.shape_1085.setTransform(815.85,284.5);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#00FFFF").s().p("AgEAGQgCgCAAgEQAAgCACgDQACgDACAAQADAAACADQACADAAACQAAAEgCACQgCADgDAAQgCAAgCgDg");
	this.shape_1086.setTransform(815.85,273.225);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#FFFFFF").s().p("AgGAAQAAgCACgDQACgCACAAQADAAACACQACADAAACQABAJgIAAQgHAAABgJg");
	this.shape_1087.setTransform(812.25,284.5);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#00FFFF").s().p("AgEAGQgCgCAAgEQAAgCACgDQACgDACAAQADAAACADQACADAAACQAAAEgCACQgCADgDAAQgCAAgCgDg");
	this.shape_1088.setTransform(812.25,273.225);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#00FFFF").s().p("AgTAXIAAgtIAmAAIAAAtg");
	this.shape_1089.setTransform(799.45,286.825);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#00FFFF").s().p("AgTAXIAAgtIAmAAIAAAtg");
	this.shape_1090.setTransform(793.95,286.825);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#00FFFF").s().p("AgSAXIAAgtIAlAAIAAAtg");
	this.shape_1091.setTransform(788.425,286.825);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#00FFFF").s().p("AgTAXIAAgtIAnAAIAAAtg");
	this.shape_1092.setTransform(782.9,286.825);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#00FFFF").s().p("AgSAXIAAgtIAlAAIAAAtg");
	this.shape_1093.setTransform(777.375,286.825);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#00FFFF").s().p("AgTAXIAAgtIAnAAIAAAtg");
	this.shape_1094.setTransform(771.85,286.825);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#00FFFF").s().p("AgTAXIAAgtIAnAAIAAAtg");
	this.shape_1095.setTransform(766.35,286.825);

	this.instance_312 = new lib.Path_5_0();
	this.instance_312.setTransform(819.1,280.55,1,1,0,0,0,10,10.7);
	this.instance_312.alpha = 0.5;
	this.instance_312.compositeOperation = "screen";

	this.instance_313 = new lib.Rectangle_9();
	this.instance_313.setTransform(797.1,278.15,1,1,0,0,0,4.4,1.2);
	this.instance_313.alpha = 0.5;
	this.instance_313.compositeOperation = "multiply";

	this.instance_314 = new lib.Rectangle_10();
	this.instance_314.setTransform(787.35,278.15,1,1,0,0,0,4.4,1.2);
	this.instance_314.alpha = 0.5;
	this.instance_314.compositeOperation = "multiply";

	this.instance_315 = new lib.Rectangle_11();
	this.instance_315.setTransform(777.6,278.15,1,1,0,0,0,4.4,1.2);
	this.instance_315.alpha = 0.5;
	this.instance_315.compositeOperation = "multiply";

	this.instance_316 = new lib.Rectangle_12();
	this.instance_316.setTransform(767.85,278.15,1,1,0,0,0,4.4,1.2);
	this.instance_316.alpha = 0.5;
	this.instance_316.compositeOperation = "multiply";

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.lf(["#FFC7CB","#FFEAB8"],[0,1],-18.9,0,19,0).s().p("Ai9AMIAAgXIF7AAIAAAXg");
	this.shape_1096.setTransform(782.425,272.825);

	this.instance_317 = new lib.Path_6_0();
	this.instance_317.setTransform(782.5,280.55,1,1,0,0,0,20.9,10.7);
	this.instance_317.alpha = 0.5;
	this.instance_317.compositeOperation = "multiply";

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.rf(["#675D9D","#644381"],[0,1],0,0,0,0,0,28.3).s().p("Al7CaIAAkyIL3AAIAAEyg");
	this.shape_1097.setTransform(795.95,280.2);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#604573").s().p("AgVQfMAAmgg9IAFAAMgAmAg9g");
	this.shape_1098.setTransform(746.825,224.45);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#604573").s().p("AgLQjMAASghFIAFABMgASAhEg");
	this.shape_1099.setTransform(647,224.825);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#604573").s().p("AgBQnMAAAghNIADAAMAAAAhNg");
	this.shape_1100.setTransform(545.25,224.5);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#604573").s().p("AgNwtIAFAAMAAWAhaIgFABg");
	this.shape_1101.setTransform(446.4,224.325);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#604573").s().p("AgRwwIAFAAMAAeAhhIgFAAg");
	this.shape_1102.setTransform(346.725,223.825);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#604573").s().p("AgZw1IAFAAMAAuAhrIgFAAg");
	this.shape_1103.setTransform(245.625,223.5);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.rf(["#3B2F81","#190C43"],[0,1],0,0,0,0,0,74.6).s().p("Am5O+IAd97INWAAIgrd7g");
	this.shape_1104.setTransform(796.8,217.825);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.rf(["#3B2F81","#190C43"],[0,1],0,0,0,0,0,74.4).s().p("AmxO+IAO97INVAAIgbd7g");
	this.shape_1105.setTransform(696.625,217.825);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.rf(["#3B2F81","#190C43"],[0,1],0,0,0,0,0,74.2).s().p("AmpO+IgB97INVAAIgLd7g");
	this.shape_1106.setTransform(596.375,217.825);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.rf(["#3B2F81","#190C43"],[0,1],0,0,0,0,0,74.3).s().p("AmbO+IgR97INVAAIAEd7g");
	this.shape_1107.setTransform(495.65,217.825);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.rf(["#3B2F81","#190C43"],[0,1],0,0,0,0,0,74.5).s().p("AmUO+Igg97INWAAIATd7g");
	this.shape_1108.setTransform(395.475,217.825);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.rf(["#3B2F81","#190C43"],[0,1],0,0,0,0,0,74.7).s().p("AmMO+Igw97INWAAIAid7g");
	this.shape_1109.setTransform(295.3,217.825);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.rf(["#3B2F81","#190C43"],[0,1],0,0,0,0,0,74.9).s().p("AmTO+Igw97INVAAIAyd7g");
	this.shape_1110.setTransform(195.15,217.825);

	this.instance_318 = new lib.Path_2_0();
	this.instance_318.setTransform(499.25,332.35,1,1,0,0,0,358,2.4);
	this.instance_318.alpha = 0.5;
	this.instance_318.compositeOperation = "multiply";

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.lf(["#AAA5C8","#8B84B4","#6E4F7C"],[0.039,0.486,1],0,107.9,0,-107.8).s().p("Eg4KgQ2MBwVAA/MgAzAgjMhuhAALg");
	this.shape_1111.setTransform(496.525,223.575);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.rf(["#7067A3","#502763"],[0,1],0,0,0,0,0,74.2).s().p("Al7O+Igv97INVAAIAAAaIs/gHIAldog");
	this.shape_1112.setTransform(293.575,217.825);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.rf(["#7067A3","#502763"],[0,1],0,0,0,0,0,74.2).s().p("Al6O+Igw97INVAAIAAAVIs4ABIAidlg");
	this.shape_1113.setTransform(192.65,217.825);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.rf(["#7067A3","#502763"],[0,1],0,0,0,0,0,74.2).s().p("AGDO+IAU9cItBAAIAAgfINVAAIgLd7g");
	this.shape_1114.setTransform(596.375,217.825);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.rf(["#7067A3","#502763"],[0,1],0,0,0,0,0,74.2).s().p("AFjO+IAz9YItAgBIAAgiINVAAIgqd7g");
	this.shape_1115.setTransform(798.275,217.825);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.rf(["#7067A3","#502763"],[0,1],0,0,0,0,0,74.2).s().p("AF7O+IAZ9oIs+AAIAAgTINVAAIgbd7g");
	this.shape_1116.setTransform(697.325,217.825);

	this.instance_319 = new lib.Path_10();
	this.instance_319.setTransform(500.25,63.25,1,1,0,0,0,500,58.6);
	this.instance_319.alpha = 0.8008;
	this.instance_319.compositeOperation = "multiply";

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#593867").s().p("AggAMIA3guIAKAiIg0Ajg");
	this.shape_1117.setTransform(853.275,75.2);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.lf(["#FFC7CB","#FFEAB8"],[0,1],0,-1.7,0,1.8).s().p("Ai/ASIA1gjIFKAAIhHAjg");
	this.shape_1118.setTransform(870.425,76.925);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.rf(["#9995CF","#83619A"],[0,1],0,0,0,0,0,12.1).s().p("AigARIgJghIFTAAIAAAhg");
	this.shape_1119.setTransform(872.6,73.425);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#593867").s().p("AguATIBQhDIANAxIhLAwg");
	this.shape_1120.setTransform(905.675,17.725);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.lf(["#FFC7CB","#FFEAB8"],[0,1],0,-2.4,0,2.4).s().p("AkUAYIBMgvIHdAAIhrAvg");
	this.shape_1121.setTransform(930.5,20.225);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.rf(["#9995CF","#83619A"],[0,1],0,0,0,0,0,17.5).s().p("AjnAZIgOgxIHrAAIAAAxg");
	this.shape_1122.setTransform(933.625,15.3);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#593867").s().p("AggADIAKghIA3AuIgOAQg");
	this.shape_1123.setTransform(136.475,74.85);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.lf(["#FFC7CB","#FFEAB8"],[0,1],0,1.4,0,-1.4).s().p("Ah5AOIhEgbIFIAAIAzAbg");
	this.shape_1124.setTransform(119.3,76.575);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.rf(["#9995CF","#83619A"],[0,1],0,0,0,0,0,12.1).s().p("AioARIAAghIFSAAIgKAhg");
	this.shape_1125.setTransform(117.2,73.425);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#593867").s().p("AgvACIAOgxIBRBEIgTAbg");
	this.shape_1126.setTransform(84.15,17.575);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.lf(["#FFC7CB","#FFEAB8"],[0,1],0,2.3,0,-2.2).s().p("AiuAXIhmgtIHdAAIBMAtg");
	this.shape_1127.setTransform(59.3,20.075);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.rf(["#9995CF","#83619A"],[0,1],0,0,0,0,0,17.5).s().p("Aj1AZIAAgxIHrAAIgOAxg");
	this.shape_1128.setTransform(56.175,15.3);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.rf(["#493372","#532B66"],[0,1],0,0,0,0,0,353.6).s().p("EhOHAAhIAAhBMCcPAAAIAABBg");
	this.shape_1129.setTransform(500.25,7.975);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.rf(["#746189","#765685"],[0,1],0,0,0,0,0,353.6).s().p("EhL0AA4IiThTIAAhCMCcPAAAIAABCIizB5g");
	this.shape_1130.setTransform(500.25,14.075);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.rf(["#493372","#532B66"],[0,1],0,0,0,0,0,295.8).s().p("EhBWAAMIAAg4MCCtAAgIAAA5g");
	this.shape_1131.setTransform(497.975,66.575);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.rf(["#746189","#765685"],[0,1],0,0,0,0,0,295.9).s().p("Eg/kAAJIhyhSMCCtAAhIieByg");
	this.shape_1132.setTransform(497.975,75.175);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#20133A").s().p("Ag3CDIAAkGIBvAAIAAEGg");
	this.shape_1133.setTransform(546.45,13.15);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#6E5178").s().p("Ag3ifIBvAAIgjE9IgvACg");
	this.shape_1134.setTransform(546.45,42.325);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#150934").s().p("AhiEPICUkQIAAkjIAxAAIAAEHIjFFCg");
	this.shape_1135.setTransform(670.775,29.25);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#20133A").s().p("AgkCDIAAkGIBJAAIAAEGg");
	this.shape_1136.setTransform(684.325,13.15);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#513C68").s().p("AA+igIBJAAIi6E9IhUAEg");
	this.shape_1137.setTransform(674.45,42.4);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#150934").s().p("AiWERID8kUIAAkjIAxAAIAAEHIktFFg");
	this.shape_1138.setTransform(789.775,29.45);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#20133A").s().p("AgkCDIAAkGIBJAAIAAEGg");
	this.shape_1139.setTransform(808.525,13.15);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#513C68").s().p("AByiiIBJAAIkjFAIhSAFg");
	this.shape_1140.setTransform(793.45,42.6);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#150934").s().p("AjeE8IGNlpIAAkjIAwAAIAAEHIm9Gag");
	this.shape_1141.setTransform(900.45,33.725);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#20133A").s().p("AgkCDIAAkGIBJAAIAAEGg");
	this.shape_1142.setTransform(926.475,13.15);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#513C68").s().p("AC7jNIBJAAIm1GXIhSAEg");
	this.shape_1143.setTransform(904.125,46.875);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#150934").s().p("Ah3gHIAAkHIAxAAIAAEiIC+DmIAAAVg");
	this.shape_1144.setTransform(425.55,31.775);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#20133A").s().p("AgkCEIAAkGIBJAAIAAEGg");
	this.shape_1145.setTransform(409.875,17.8);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#513C68").s().p("ABKCHIjmkSIBKAAIDvEXg");
	this.shape_1146.setTransform(421.875,44.925);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#150934").s().p("Ah8gHIAAkHIAxAAIAAEiIDIDmIAAAVg");
	this.shape_1147.setTransform(300.05,31.775);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#20133A").s().p("AgjCEIAAkGIBHAAIAAEGg");
	this.shape_1148.setTransform(283.9,17.8);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#513C68").s().p("ABPCHIjvkSIBIAAID6EXg");
	this.shape_1149.setTransform(296.4,44.925);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#150934").s().p("AiQgHIAAkHIAxAAIAAEiIDwDmIAAAVg");
	this.shape_1150.setTransform(178.05,31.775);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#20133A").s().p("AgkCEIAAkGIBIAAIAAEGg");
	this.shape_1151.setTransform(159.9,17.8);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#513C68").s().p("ABjCHIkYkSIBJAAIEhEXg");
	this.shape_1152.setTransform(174.4,44.925);

	this.instance_320 = new lib.Path_9();
	this.instance_320.setTransform(501.25,19.65,1,1,0,0,0,499,15);
	this.instance_320.alpha = 0.5;
	this.instance_320.compositeOperation = "multiply";

	this.instance_321 = new lib.Path_1_0();
	this.instance_321.setTransform(504.7,42.4,1,1,0,0,0,462.9,14.2);
	this.instance_321.compositeOperation = "screen";

	this.instance_322 = new lib.Path_0();
	this.instance_322.setTransform(305.45,63.55,1,1,0,0,0,233.1,6.8);
	this.instance_322.alpha = 0.5;
	this.instance_322.compositeOperation = "multiply";

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#473568").s().p("Egi4gAHMBFxgBSIgeCCMhDBAAxg");
	this.shape_1153.setTransform(315.275,71.075);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.rf(["#5F3A6C","#24184C"],[0,1],0,0,0,0,0,74.3).s().p("AhaDYQl2ABk9i3Qhkg4hShFIhAg6IAPgOIA/A6QBRBEBiA3QE4CyFwAAIAQAAQF2gDGJjLQDFhmB9hoIANAPQh+BpjIBmQmNDOl7AEg");
	this.shape_1154.setTransform(280.075,94.4);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.rf(["#955681","#40256A"],[0,1],0,0,0,0,0,61.8).s().p("AjLB9QkJgJjdhUQhGgag5geQgdgQgTgNIARgYIAsAZQA4AeBEAaQDbBSECAJQEDAKGmhxQDUg5Ckg8IAKAcQibA5jMA3QmXBvkGAAg");
	this.shape_1155.setTransform(245.575,81.8);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.rf(["#955681","#40256A"],[0,1],0,0,0,0,0,96.5).s().p("AhXCbQlQgBnwhzQicgkiagqIh9glIAJgdIB9AlQCYArCbAjQHuByFNABIAFAAQDsAAE7hAQC0gkFVhaQEFhHBigSIAFAdQhoAVj8BEQlXBai1AlQk9BAjvAAg");
	this.shape_1156.setTransform(644.975,72.525);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.rf(["#5F3A6C","#24184C"],[0,1],0,0,0,0,0,135.4).s().p("AmaAKQlggYpfABIohAGIAAgUIIhgGQJggBFhAZQGcAdNhgIQNNgIDGgeIADATQh0ASmLALQl8AMm/AAQqTAAlIgYg");
	this.shape_1157.setTransform(664.7,68.5708);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.rf(["#5F3A6C","#24184C"],[0,1],0,0,0,0,0,155.2).s().p("ArbA5I21hvIABgUIW1BvQIEAoIbgeQE1gRHWg2QD5gdBigGQDmgNEVgFQCMgCBfABIAAAUQhfgBiLACQkWAFjkANQhiAGj4AdQlNAmjTARQloAdlRAAQktAAkogXg");
	this.shape_1158.setTransform(667,73.995);

	this.instance_323 = new lib.Path_5();
	this.instance_323.setTransform(501.3,88.2,1,1,0,0,0,386.8,2.5);
	this.instance_323.alpha = 0.3984;
	this.instance_323.compositeOperation = "multiply";

	this.instance_324 = new lib.Path_6();
	this.instance_324.setTransform(504.2,73.5,1,1,0,0,0,412.2,8.2);
	this.instance_324.alpha = 0.3984;
	this.instance_324.compositeOperation = "multiply";

	this.instance_325 = new lib.Path_7();
	this.instance_325.setTransform(502.55,82.8,1,1,0,0,0,395.7,4.5);
	this.instance_325.compositeOperation = "screen";

	this.instance_326 = new lib.Path_8();
	this.instance_326.setTransform(500.25,95,1,1,0,0,0,380.9,4.3);
	this.instance_326.compositeOperation = "screen";

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.rf(["#55407B","#674478"],[0,1],0,0,0,0,0,355.6).s().p("Eg3UAH2IthpUIh/AhIgCgBInUklIAGgIIHREjICAggINiJUMBuiAAKIFuj+IAyAAIGukMIAchaIJKmRIAGAIIpIGPIgbBbIm0EPIgxAAIlwD+g");
	this.shape_1159.setTransform(500.25,62.1);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.rf(["#55407B","#674478"],[0,1],-59.4,-31,0,-59.4,-31,83.9).s().p("ALIGTI2Yr/IAAgmIWhMlg");
	this.shape_1160.setTransform(72.325,81.7);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.rf(["#8A85C7","#805D97","#9679A9"],[0,0.749,0.973],-59.4,-33.6,0,-59.4,-33.6,90.7).s().p("ArQlwIAAhEIWhNPIAAAag");
	this.shape_1161.setTransform(72.325,78.325);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.rf(["#55407B","#674478"],[0,1],-60.2,-34,0,-60.2,-34,91.8).s().p("AK+G6I2XswIAAhDIWzNzg");
	this.shape_1162.setTransform(73.275,75.175);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.rf(["#8A85C7","#805D97","#9679A9"],[0,0.749,0.973],-60.2,-44.2,0,-60.2,-44.2,118.6).s().p("ArZkAIAAk9IWzQfIAABcg");
	this.shape_1163.setTransform(73.275,62.025);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.rf(["#8984C7","#775290"],[0,1],0,0,0,0,0,251.9).s().p("Eg3pAANIAIgZMBvMAAAIAAAZg");
	this.shape_1164.setTransform(499.8,120.7);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.rf(["#9995CF","#83619A"],[0,1],0,0,0,0,0,251.9).s().p("Eg3jAAuIgGhbMBvTAAAIAABbg");
	this.shape_1165.setTransform(498,114.8);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.rf(["#55407B","#674478"],[0,1],59.5,-31,0,59.5,-31,83.9).s().p("ArQGTIWhslIAAAmI2ZL/g");
	this.shape_1166.setTransform(928.15,81.7);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.rf(["#8A85C7","#805D97","#9679A9"],[0,0.749,0.973],59.5,-33.6,0,59.5,-33.6,90.8).s().p("ArQGbIWhtPIAABEI2hMlg");
	this.shape_1167.setTransform(928.15,78.325);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.rf(["#55407B","#674478"],[0,1],60.3,-34,0,60.3,-34,91.9).s().p("ArZG6IW0tzIAABDI2YMwg");
	this.shape_1168.setTransform(927.2,75.175);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.rf(["#8A85C7","#805D97","#9679A9"],[0,0.749,0.973],60.3,-44.2,0,60.3,-44.2,118.6).s().p("ArZHiIW0wfIAAE9I20M+g");
	this.shape_1169.setTransform(927.2,62.025);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.lf(["#4B225A","#24184C"],[0,1],0,52.8,0,-52.8).s().p("Eg5pAIQI0ewfMCcPAAAI2WQfg");
	this.shape_1170.setTransform(500.25,57.425);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.lf(["#556EB5","#805D97"],[0.988,1],-73,0,73.1,0).s().p("ArZ7zIWXR8MAAcAg1I2zE2g");
	this.shape_1171.setTransform(73.275,182.65);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.lf(["#556EB5","#805D97"],[0.988,1],-74.5,0,74.5,0).s().p("AroXUMAA8giSIWVwfMAAAA27g");
	this.shape_1172.setTransform(925.75,180.475);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.lf(["#556EB5","#805D97"],[0.988,1],-368.9,0,369,0).s().p("Eg3yARJMgB3giRMBzTAAAMgA9AiRg");
	this.shape_1173.setTransform(488.3,219.925);

	this.instance_327 = new lib.Path();
	this.instance_327.setTransform(768.2,373.15,1,1,0,0,0,41.3,31.5);
	this.instance_327.alpha = 0.5;
	this.instance_327.compositeOperation = "multiply";

	this.instance_328 = new lib.Path_1();
	this.instance_328.setTransform(266.2,374.8,1,1,0,0,0,34.1,29.9);
	this.instance_328.alpha = 0.5;
	this.instance_328.compositeOperation = "multiply";

	this.instance_329 = new lib.Path_2();
	this.instance_329.setTransform(488.3,374,1,1,0,0,0,1.8,30.7);
	this.instance_329.alpha = 0.5;
	this.instance_329.compositeOperation = "multiply";

	this.instance_330 = new lib.Path_3();
	this.instance_330.setTransform(500.25,360.1,1,1,0,0,0,500,25.4);
	this.instance_330.alpha = 0.5;
	this.instance_330.compositeOperation = "multiply";

	this.instance_331 = new lib.Path_4();
	this.instance_331.setTransform(500.25,355.65,1,1,0,0,0,500,26);
	this.instance_331.alpha = 0.1992;
	this.instance_331.compositeOperation = "multiply";

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#604573").s().p("AlCEpIKCpVIADAEIqBJVg");
	this.shape_1174.setTransform(268.35,374.75);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#604573").s().p("AmPk4IADgEIMcJ1IgDAEg");
	this.shape_1175.setTransform(766.725,373.125);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#604573").s().p("AgBEzIAAplIADAAIAAJlg");
	this.shape_1176.setTransform(488.3,373.975);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#604573").s().p("AjjgPIAAgEIHHAjIAAAEg");
	this.shape_1177.setTransform(65.875,370.95);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#604573").s().p("AgmgiIAEgDIBJBIIgEADg");
	this.shape_1178.setTransform(152.55,341.95);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#604573").s().p("AgpAUIBRgsIACAFIhRAsg");
	this.shape_1179.setTransform(845.1,338.625);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#604573").s().p("AkbgEIAAgEII3AMIAAAFg");
	this.shape_1180.setTransform(940.05,369.85);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#604573").s().p("EA0igE7Mhq+AAvI29JNIgCgFIW/pMMBq+gAwIABAAIY4J8IgBAFg");
	this.shape_1181.setTransform(504.75,372.75);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.rf(["#4268B1","#59457C"],[1,1],0,23.2,0,0,23.2,533.8).s().p("EhOHAF3IAAm3IUek2MBwfAAAIXSELIAAHig");
	this.shape_1182.setTransform(500.25,367.15);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.instance_4,this.instance_5,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.instance_6,this.instance_7,this.instance_8,this.shape_48,this.shape_49,this.instance_9,this.instance_10,this.instance_11,this.shape_50,this.shape_51,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.shape_52,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.instance_23,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.instance_24,this.instance_25,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.instance_26,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.instance_27,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.instance_28,this.instance_29,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.instance_30,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192,this.shape_193,this.shape_194,this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210,this.shape_211,this.instance_31,this.instance_32,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218,this.shape_219,this.shape_220,this.instance_33,this.instance_34,this.instance_35,this.shape_221,this.shape_222,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.instance_44,this.instance_45,this.instance_46,this.instance_47,this.instance_48,this.instance_49,this.instance_50,this.instance_51,this.instance_52,this.instance_53,this.instance_54,this.instance_55,this.instance_56,this.instance_57,this.instance_58,this.instance_59,this.instance_60,this.instance_61,this.instance_62,this.instance_63,this.instance_64,this.instance_65,this.instance_66,this.instance_67,this.instance_68,this.instance_69,this.instance_70,this.instance_71,this.instance_72,this.instance_73,this.instance_74,this.instance_75,this.instance_76,this.instance_77,this.instance_78,this.instance_79,this.instance_80,this.instance_81,this.instance_82,this.instance_83,this.instance_84,this.instance_85,this.instance_86,this.instance_87,this.instance_88,this.instance_89,this.instance_90,this.instance_91,this.instance_92,this.instance_93,this.instance_94,this.instance_95,this.instance_96,this.instance_97,this.instance_98,this.instance_99,this.instance_100,this.instance_101,this.instance_102,this.instance_103,this.instance_104,this.instance_105,this.instance_106,this.instance_107,this.instance_108,this.instance_109,this.instance_110,this.instance_111,this.instance_112,this.instance_113,this.instance_114,this.instance_115,this.instance_116,this.instance_117,this.shape_223,this.shape_224,this.shape_225,this.shape_226,this.shape_227,this.shape_228,this.instance_118,this.shape_229,this.shape_230,this.instance_119,this.shape_231,this.shape_232,this.shape_233,this.shape_234,this.instance_120,this.shape_235,this.shape_236,this.shape_237,this.shape_238,this.shape_239,this.shape_240,this.shape_241,this.shape_242,this.shape_243,this.shape_244,this.shape_245,this.shape_246,this.shape_247,this.shape_248,this.shape_249,this.shape_250,this.shape_251,this.shape_252,this.shape_253,this.shape_254,this.shape_255,this.shape_256,this.shape_257,this.instance_121,this.instance_122,this.shape_258,this.shape_259,this.shape_260,this.shape_261,this.shape_262,this.shape_263,this.shape_264,this.shape_265,this.shape_266,this.instance_123,this.shape_267,this.shape_268,this.shape_269,this.shape_270,this.shape_271,this.shape_272,this.shape_273,this.shape_274,this.shape_275,this.shape_276,this.shape_277,this.shape_278,this.shape_279,this.shape_280,this.shape_281,this.shape_282,this.instance_124,this.shape_283,this.shape_284,this.shape_285,this.instance_125,this.instance_126,this.instance_127,this.instance_128,this.instance_129,this.instance_130,this.instance_131,this.instance_132,this.instance_133,this.instance_134,this.instance_135,this.instance_136,this.instance_137,this.instance_138,this.instance_139,this.instance_140,this.instance_141,this.instance_142,this.instance_143,this.instance_144,this.instance_145,this.instance_146,this.instance_147,this.instance_148,this.instance_149,this.instance_150,this.instance_151,this.instance_152,this.instance_153,this.instance_154,this.instance_155,this.instance_156,this.instance_157,this.instance_158,this.instance_159,this.instance_160,this.instance_161,this.shape_286,this.shape_287,this.shape_288,this.shape_289,this.shape_290,this.shape_291,this.instance_162,this.instance_163,this.instance_164,this.instance_165,this.shape_292,this.shape_293,this.shape_294,this.shape_295,this.shape_296,this.shape_297,this.shape_298,this.shape_299,this.shape_300,this.shape_301,this.shape_302,this.shape_303,this.shape_304,this.shape_305,this.shape_306,this.shape_307,this.shape_308,this.shape_309,this.shape_310,this.shape_311,this.shape_312,this.shape_313,this.shape_314,this.shape_315,this.shape_316,this.shape_317,this.shape_318,this.shape_319,this.shape_320,this.shape_321,this.shape_322,this.shape_323,this.shape_324,this.shape_325,this.shape_326,this.shape_327,this.shape_328,this.shape_329,this.shape_330,this.shape_331,this.shape_332,this.shape_333,this.shape_334,this.shape_335,this.shape_336,this.shape_337,this.shape_338,this.shape_339,this.shape_340,this.shape_341,this.shape_342,this.shape_343,this.shape_344,this.shape_345,this.shape_346,this.instance_166,this.shape_347,this.shape_348,this.shape_349,this.shape_350,this.shape_351,this.instance_167,this.shape_352,this.shape_353,this.shape_354,this.shape_355,this.shape_356,this.shape_357,this.instance_168,this.shape_358,this.shape_359,this.shape_360,this.shape_361,this.shape_362,this.instance_169,this.shape_363,this.shape_364,this.shape_365,this.shape_366,this.shape_367,this.shape_368,this.shape_369,this.shape_370,this.instance_170,this.shape_371,this.shape_372,this.shape_373,this.instance_171,this.shape_374,this.shape_375,this.shape_376,this.shape_377,this.shape_378,this.shape_379,this.shape_380,this.instance_172,this.shape_381,this.shape_382,this.shape_383,this.instance_173,this.shape_384,this.shape_385,this.shape_386,this.shape_387,this.shape_388,this.shape_389,this.instance_174,this.shape_390,this.instance_175,this.shape_391,this.instance_176,this.shape_392,this.shape_393,this.shape_394,this.shape_395,this.shape_396,this.instance_177,this.shape_397,this.shape_398,this.shape_399,this.shape_400,this.shape_401,this.shape_402,this.shape_403,this.shape_404,this.shape_405,this.shape_406,this.shape_407,this.shape_408,this.shape_409,this.shape_410,this.shape_411,this.shape_412,this.shape_413,this.shape_414,this.shape_415,this.shape_416,this.shape_417,this.shape_418,this.shape_419,this.shape_420,this.shape_421,this.shape_422,this.shape_423,this.shape_424,this.shape_425,this.shape_426,this.shape_427,this.shape_428,this.shape_429,this.shape_430,this.shape_431,this.shape_432,this.instance_178,this.shape_433,this.instance_179,this.shape_434,this.shape_435,this.shape_436,this.instance_180,this.instance_181,this.shape_437,this.shape_438,this.shape_439,this.shape_440,this.shape_441,this.instance_182,this.shape_442,this.shape_443,this.shape_444,this.shape_445,this.shape_446,this.shape_447,this.shape_448,this.shape_449,this.shape_450,this.shape_451,this.shape_452,this.shape_453,this.shape_454,this.shape_455,this.shape_456,this.shape_457,this.shape_458,this.shape_459,this.instance_183,this.shape_460,this.instance_184,this.shape_461,this.shape_462,this.instance_185,this.instance_186,this.shape_463,this.shape_464,this.shape_465,this.shape_466,this.instance_187,this.shape_467,this.shape_468,this.shape_469,this.shape_470,this.shape_471,this.instance_188,this.shape_472,this.shape_473,this.shape_474,this.shape_475,this.shape_476,this.instance_189,this.shape_477,this.shape_478,this.shape_479,this.shape_480,this.shape_481,this.shape_482,this.instance_190,this.shape_483,this.shape_484,this.shape_485,this.shape_486,this.shape_487,this.instance_191,this.shape_488,this.shape_489,this.shape_490,this.shape_491,this.shape_492,this.shape_493,this.shape_494,this.shape_495,this.shape_496,this.shape_497,this.instance_192,this.shape_498,this.shape_499,this.shape_500,this.shape_501,this.shape_502,this.instance_193,this.shape_503,this.shape_504,this.shape_505,this.shape_506,this.shape_507,this.shape_508,this.shape_509,this.shape_510,this.instance_194,this.shape_511,this.shape_512,this.shape_513,this.shape_514,this.shape_515,this.instance_195,this.shape_516,this.shape_517,this.shape_518,this.shape_519,this.shape_520,this.shape_521,this.instance_196,this.shape_522,this.shape_523,this.shape_524,this.shape_525,this.shape_526,this.instance_197,this.shape_527,this.instance_198,this.shape_528,this.shape_529,this.shape_530,this.shape_531,this.shape_532,this.instance_199,this.shape_533,this.shape_534,this.shape_535,this.shape_536,this.shape_537,this.shape_538,this.shape_539,this.shape_540,this.shape_541,this.shape_542,this.shape_543,this.shape_544,this.shape_545,this.shape_546,this.shape_547,this.shape_548,this.shape_549,this.shape_550,this.shape_551,this.shape_552,this.shape_553,this.shape_554,this.shape_555,this.shape_556,this.shape_557,this.shape_558,this.shape_559,this.shape_560,this.shape_561,this.shape_562,this.shape_563,this.shape_564,this.shape_565,this.shape_566,this.shape_567,this.shape_568,this.instance_200,this.shape_569,this.instance_201,this.shape_570,this.shape_571,this.shape_572,this.instance_202,this.instance_203,this.shape_573,this.shape_574,this.shape_575,this.shape_576,this.shape_577,this.instance_204,this.shape_578,this.shape_579,this.instance_205,this.shape_580,this.shape_581,this.instance_206,this.instance_207,this.shape_582,this.shape_583,this.shape_584,this.shape_585,this.shape_586,this.shape_587,this.shape_588,this.shape_589,this.shape_590,this.shape_591,this.shape_592,this.shape_593,this.shape_594,this.shape_595,this.shape_596,this.shape_597,this.shape_598,this.shape_599,this.instance_208,this.instance_209,this.instance_210,this.instance_211,this.instance_212,this.shape_600,this.instance_213,this.shape_601,this.instance_214,this.shape_602,this.shape_603,this.shape_604,this.shape_605,this.shape_606,this.shape_607,this.shape_608,this.shape_609,this.shape_610,this.shape_611,this.shape_612,this.shape_613,this.shape_614,this.shape_615,this.shape_616,this.shape_617,this.shape_618,this.shape_619,this.shape_620,this.shape_621,this.shape_622,this.shape_623,this.shape_624,this.shape_625,this.shape_626,this.shape_627,this.instance_215,this.shape_628,this.shape_629,this.shape_630,this.shape_631,this.shape_632,this.instance_216,this.shape_633,this.shape_634,this.shape_635,this.shape_636,this.shape_637,this.shape_638,this.shape_639,this.instance_217,this.shape_640,this.shape_641,this.shape_642,this.instance_218,this.shape_643,this.shape_644,this.shape_645,this.shape_646,this.shape_647,this.shape_648,this.shape_649,this.shape_650,this.shape_651,this.shape_652,this.shape_653,this.shape_654,this.shape_655,this.shape_656,this.shape_657,this.shape_658,this.shape_659,this.instance_219,this.shape_660,this.instance_220,this.shape_661,this.shape_662,this.shape_663,this.instance_221,this.instance_222,this.shape_664,this.shape_665,this.shape_666,this.shape_667,this.instance_223,this.shape_668,this.shape_669,this.shape_670,this.shape_671,this.shape_672,this.shape_673,this.shape_674,this.shape_675,this.shape_676,this.shape_677,this.shape_678,this.shape_679,this.shape_680,this.shape_681,this.shape_682,this.shape_683,this.shape_684,this.shape_685,this.shape_686,this.shape_687,this.shape_688,this.instance_224,this.shape_689,this.instance_225,this.shape_690,this.shape_691,this.instance_226,this.instance_227,this.shape_692,this.shape_693,this.shape_694,this.shape_695,this.instance_228,this.shape_696,this.shape_697,this.instance_229,this.instance_230,this.shape_698,this.shape_699,this.shape_700,this.shape_701,this.shape_702,this.shape_703,this.shape_704,this.shape_705,this.shape_706,this.shape_707,this.shape_708,this.instance_231,this.instance_232,this.instance_233,this.instance_234,this.instance_235,this.shape_709,this.instance_236,this.shape_710,this.shape_711,this.shape_712,this.shape_713,this.shape_714,this.shape_715,this.shape_716,this.shape_717,this.shape_718,this.shape_719,this.shape_720,this.instance_237,this.shape_721,this.shape_722,this.shape_723,this.shape_724,this.shape_725,this.instance_238,this.shape_726,this.shape_727,this.shape_728,this.shape_729,this.shape_730,this.shape_731,this.shape_732,this.instance_239,this.shape_733,this.shape_734,this.shape_735,this.instance_240,this.shape_736,this.shape_737,this.shape_738,this.shape_739,this.shape_740,this.shape_741,this.shape_742,this.instance_241,this.shape_743,this.shape_744,this.shape_745,this.instance_242,this.shape_746,this.shape_747,this.shape_748,this.shape_749,this.shape_750,this.shape_751,this.shape_752,this.shape_753,this.shape_754,this.shape_755,this.shape_756,this.shape_757,this.shape_758,this.shape_759,this.shape_760,this.shape_761,this.shape_762,this.shape_763,this.shape_764,this.shape_765,this.shape_766,this.shape_767,this.shape_768,this.shape_769,this.shape_770,this.shape_771,this.instance_243,this.shape_772,this.instance_244,this.shape_773,this.shape_774,this.shape_775,this.instance_245,this.instance_246,this.shape_776,this.shape_777,this.shape_778,this.shape_779,this.shape_780,this.instance_247,this.shape_781,this.shape_782,this.shape_783,this.shape_784,this.shape_785,this.shape_786,this.shape_787,this.shape_788,this.shape_789,this.shape_790,this.shape_791,this.shape_792,this.shape_793,this.shape_794,this.shape_795,this.shape_796,this.shape_797,this.shape_798,this.instance_248,this.shape_799,this.instance_249,this.shape_800,this.shape_801,this.shape_802,this.shape_803,this.instance_250,this.instance_251,this.shape_804,this.shape_805,this.shape_806,this.shape_807,this.instance_252,this.shape_808,this.shape_809,this.instance_253,this.instance_254,this.shape_810,this.shape_811,this.shape_812,this.shape_813,this.shape_814,this.shape_815,this.shape_816,this.shape_817,this.shape_818,this.shape_819,this.shape_820,this.instance_255,this.instance_256,this.instance_257,this.instance_258,this.instance_259,this.shape_821,this.instance_260,this.shape_822,this.shape_823,this.shape_824,this.shape_825,this.shape_826,this.shape_827,this.shape_828,this.shape_829,this.shape_830,this.instance_261,this.shape_831,this.shape_832,this.shape_833,this.instance_262,this.shape_834,this.shape_835,this.shape_836,this.shape_837,this.shape_838,this.shape_839,this.shape_840,this.shape_841,this.instance_263,this.shape_842,this.shape_843,this.shape_844,this.instance_264,this.shape_845,this.shape_846,this.shape_847,this.shape_848,this.shape_849,this.shape_850,this.shape_851,this.instance_265,this.shape_852,this.shape_853,this.shape_854,this.instance_266,this.shape_855,this.shape_856,this.shape_857,this.shape_858,this.shape_859,this.shape_860,this.shape_861,this.shape_862,this.shape_863,this.instance_267,this.shape_864,this.shape_865,this.shape_866,this.shape_867,this.instance_268,this.shape_868,this.shape_869,this.shape_870,this.shape_871,this.shape_872,this.instance_269,this.shape_873,this.shape_874,this.shape_875,this.shape_876,this.shape_877,this.shape_878,this.shape_879,this.shape_880,this.shape_881,this.shape_882,this.shape_883,this.shape_884,this.shape_885,this.shape_886,this.shape_887,this.shape_888,this.shape_889,this.shape_890,this.shape_891,this.shape_892,this.shape_893,this.shape_894,this.shape_895,this.shape_896,this.shape_897,this.shape_898,this.shape_899,this.instance_270,this.shape_900,this.instance_271,this.shape_901,this.shape_902,this.instance_272,this.instance_273,this.shape_903,this.shape_904,this.shape_905,this.shape_906,this.instance_274,this.shape_907,this.shape_908,this.instance_275,this.instance_276,this.shape_909,this.shape_910,this.shape_911,this.shape_912,this.shape_913,this.shape_914,this.shape_915,this.shape_916,this.shape_917,this.shape_918,this.shape_919,this.instance_277,this.instance_278,this.instance_279,this.instance_280,this.instance_281,this.shape_920,this.instance_282,this.shape_921,this.shape_922,this.shape_923,this.shape_924,this.shape_925,this.shape_926,this.shape_927,this.shape_928,this.shape_929,this.shape_930,this.shape_931,this.shape_932,this.shape_933,this.instance_283,this.shape_934,this.shape_935,this.shape_936,this.instance_284,this.shape_937,this.shape_938,this.shape_939,this.shape_940,this.shape_941,this.shape_942,this.shape_943,this.instance_285,this.shape_944,this.shape_945,this.shape_946,this.instance_286,this.shape_947,this.shape_948,this.shape_949,this.shape_950,this.shape_951,this.shape_952,this.shape_953,this.shape_954,this.shape_955,this.shape_956,this.shape_957,this.shape_958,this.shape_959,this.shape_960,this.shape_961,this.shape_962,this.shape_963,this.instance_287,this.shape_964,this.instance_288,this.shape_965,this.shape_966,this.shape_967,this.shape_968,this.instance_289,this.instance_290,this.shape_969,this.shape_970,this.shape_971,this.shape_972,this.instance_291,this.shape_973,this.shape_974,this.shape_975,this.shape_976,this.shape_977,this.shape_978,this.shape_979,this.shape_980,this.shape_981,this.shape_982,this.shape_983,this.shape_984,this.shape_985,this.shape_986,this.shape_987,this.shape_988,this.shape_989,this.shape_990,this.shape_991,this.shape_992,this.shape_993,this.instance_292,this.shape_994,this.instance_293,this.shape_995,this.shape_996,this.instance_294,this.instance_295,this.shape_997,this.shape_998,this.shape_999,this.shape_1000,this.instance_296,this.shape_1001,this.shape_1002,this.shape_1003,this.shape_1004,this.shape_1005,this.shape_1006,this.shape_1007,this.shape_1008,this.shape_1009,this.shape_1010,this.shape_1011,this.shape_1012,this.shape_1013,this.shape_1014,this.shape_1015,this.shape_1016,this.shape_1017,this.shape_1018,this.instance_297,this.shape_1019,this.instance_298,this.shape_1020,this.shape_1021,this.instance_299,this.instance_300,this.shape_1022,this.shape_1023,this.shape_1024,this.shape_1025,this.instance_301,this.shape_1026,this.shape_1027,this.shape_1028,this.shape_1029,this.shape_1030,this.shape_1031,this.shape_1032,this.shape_1033,this.shape_1034,this.shape_1035,this.shape_1036,this.shape_1037,this.shape_1038,this.shape_1039,this.shape_1040,this.shape_1041,this.shape_1042,this.shape_1043,this.shape_1044,this.shape_1045,this.shape_1046,this.shape_1047,this.shape_1048,this.instance_302,this.shape_1049,this.shape_1050,this.shape_1051,this.instance_303,this.shape_1052,this.shape_1053,this.shape_1054,this.shape_1055,this.shape_1056,this.shape_1057,this.shape_1058,this.shape_1059,this.instance_304,this.shape_1060,this.shape_1061,this.shape_1062,this.instance_305,this.shape_1063,this.shape_1064,this.shape_1065,this.shape_1066,this.shape_1067,this.shape_1068,this.shape_1069,this.shape_1070,this.instance_306,this.shape_1071,this.shape_1072,this.shape_1073,this.instance_307,this.shape_1074,this.shape_1075,this.shape_1076,this.shape_1077,this.shape_1078,this.shape_1079,this.shape_1080,this.instance_308,this.shape_1081,this.shape_1082,this.shape_1083,this.instance_309,this.shape_1084,this.instance_310,this.instance_311,this.shape_1085,this.shape_1086,this.shape_1087,this.shape_1088,this.shape_1089,this.shape_1090,this.shape_1091,this.shape_1092,this.shape_1093,this.shape_1094,this.shape_1095,this.instance_312,this.instance_313,this.instance_314,this.instance_315,this.instance_316,this.shape_1096,this.instance_317,this.shape_1097,this.shape_1098,this.shape_1099,this.shape_1100,this.shape_1101,this.shape_1102,this.shape_1103,this.shape_1104,this.shape_1105,this.shape_1106,this.shape_1107,this.shape_1108,this.shape_1109,this.shape_1110,this.instance_318,this.shape_1111,this.shape_1112,this.shape_1113,this.shape_1114,this.shape_1115,this.shape_1116,this.instance_319,this.shape_1117,this.shape_1118,this.shape_1119,this.shape_1120,this.shape_1121,this.shape_1122,this.shape_1123,this.shape_1124,this.shape_1125,this.shape_1126,this.shape_1127,this.shape_1128,this.shape_1129,this.shape_1130,this.shape_1131,this.shape_1132,this.shape_1133,this.shape_1134,this.shape_1135,this.shape_1136,this.shape_1137,this.shape_1138,this.shape_1139,this.shape_1140,this.shape_1141,this.shape_1142,this.shape_1143,this.shape_1144,this.shape_1145,this.shape_1146,this.shape_1147,this.shape_1148,this.shape_1149,this.shape_1150,this.shape_1151,this.shape_1152,this.instance_320,this.instance_321,this.instance_322,this.shape_1153,this.shape_1154,this.shape_1155,this.shape_1156,this.shape_1157,this.shape_1158,this.instance_323,this.instance_324,this.instance_325,this.instance_326,this.shape_1159,this.shape_1160,this.shape_1161,this.shape_1162,this.shape_1163,this.shape_1164,this.shape_1165,this.shape_1166,this.shape_1167,this.shape_1168,this.shape_1169,this.shape_1170,this.shape_1171,this.shape_1172,this.shape_1173,this.instance_327,this.instance_328,this.instance_329,this.instance_330,this.instance_331,this.shape_1174,this.shape_1175,this.shape_1176,this.shape_1177,this.shape_1178,this.shape_1179,this.shape_1180,this.shape_1181,this.shape_1182];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.instance_331},{t:this.instance_330},{t:this.instance_329},{t:this.instance_328},{t:this.instance_327},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.instance_326},{t:this.instance_325},{t:this.instance_324},{t:this.instance_323},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.instance_322},{t:this.instance_321},{t:this.instance_320},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.instance_319},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.instance_318},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.instance_317},{t:this.shape_1096},{t:this.instance_316},{t:this.instance_315},{t:this.instance_314},{t:this.instance_313},{t:this.instance_312},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.instance_311},{t:this.instance_310},{t:this.shape_1084},{t:this.instance_309},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.instance_308},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.instance_307},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.instance_306},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.instance_305},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.instance_304},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.instance_303},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.instance_302},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.instance_301},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.instance_300},{t:this.instance_299},{t:this.shape_1021},{t:this.shape_1020},{t:this.instance_298},{t:this.shape_1019},{t:this.instance_297},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.instance_296},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.instance_295},{t:this.instance_294},{t:this.shape_996},{t:this.shape_995},{t:this.instance_293},{t:this.shape_994},{t:this.instance_292},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.instance_291},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.instance_290},{t:this.instance_289},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.instance_288},{t:this.shape_964},{t:this.instance_287},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.instance_286},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.instance_285},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.instance_284},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.instance_283},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.instance_282},{t:this.shape_920},{t:this.instance_281},{t:this.instance_280},{t:this.instance_279},{t:this.instance_278},{t:this.instance_277},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.instance_276},{t:this.instance_275},{t:this.shape_908},{t:this.shape_907},{t:this.instance_274},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.instance_273},{t:this.instance_272},{t:this.shape_902},{t:this.shape_901},{t:this.instance_271},{t:this.shape_900},{t:this.instance_270},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.instance_269},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.instance_268},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.instance_267},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.instance_266},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.instance_265},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.instance_264},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.instance_263},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.instance_262},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.instance_261},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.instance_260},{t:this.shape_821},{t:this.instance_259},{t:this.instance_258},{t:this.instance_257},{t:this.instance_256},{t:this.instance_255},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.instance_254},{t:this.instance_253},{t:this.shape_809},{t:this.shape_808},{t:this.instance_252},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.instance_251},{t:this.instance_250},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.instance_249},{t:this.shape_799},{t:this.instance_248},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.instance_247},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.instance_246},{t:this.instance_245},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.instance_244},{t:this.shape_772},{t:this.instance_243},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.instance_242},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.instance_241},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.instance_240},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.instance_239},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.instance_238},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.instance_237},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.instance_236},{t:this.shape_709},{t:this.instance_235},{t:this.instance_234},{t:this.instance_233},{t:this.instance_232},{t:this.instance_231},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.instance_230},{t:this.instance_229},{t:this.shape_697},{t:this.shape_696},{t:this.instance_228},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.instance_227},{t:this.instance_226},{t:this.shape_691},{t:this.shape_690},{t:this.instance_225},{t:this.shape_689},{t:this.instance_224},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.instance_223},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.instance_222},{t:this.instance_221},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.instance_220},{t:this.shape_660},{t:this.instance_219},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.instance_218},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.instance_217},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.instance_216},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.instance_215},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.instance_214},{t:this.shape_601},{t:this.instance_213},{t:this.shape_600},{t:this.instance_212},{t:this.instance_211},{t:this.instance_210},{t:this.instance_209},{t:this.instance_208},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.instance_207},{t:this.instance_206},{t:this.shape_581},{t:this.shape_580},{t:this.instance_205},{t:this.shape_579},{t:this.shape_578},{t:this.instance_204},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.instance_203},{t:this.instance_202},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.instance_201},{t:this.shape_569},{t:this.instance_200},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.instance_199},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.instance_198},{t:this.shape_527},{t:this.instance_197},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.instance_196},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.instance_195},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.instance_194},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.instance_193},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.instance_192},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.instance_191},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.instance_190},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.instance_189},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.instance_188},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.instance_187},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.instance_186},{t:this.instance_185},{t:this.shape_462},{t:this.shape_461},{t:this.instance_184},{t:this.shape_460},{t:this.instance_183},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.instance_182},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.instance_181},{t:this.instance_180},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.instance_179},{t:this.shape_433},{t:this.instance_178},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.instance_177},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.instance_176},{t:this.shape_391},{t:this.instance_175},{t:this.shape_390},{t:this.instance_174},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.instance_173},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.instance_172},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.instance_171},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.instance_170},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.instance_169},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.instance_168},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.instance_167},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.instance_166},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.instance_124},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.instance_123},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.instance_122},{t:this.instance_121},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.instance_120},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.instance_119},{t:this.shape_230},{t:this.shape_229},{t:this.instance_118},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.shape_222},{t:this.shape_221},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.instance_32},{t:this.instance_31},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.instance_30},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.instance_29},{t:this.instance_28},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.instance_27},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.instance_26},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.instance_25},{t:this.instance_24},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.shape_52},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_51},{t:this.shape_50},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_49},{t:this.shape_48},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.instance_5},{t:this.instance_4},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0.3,4.7,1000,400), null);


// stage content:
(lib.transition1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// server_room
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(142.95,193.05,0.0221,0.0113,0,0,0,500.4,203.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:500.2,regY:203.2,scaleX:0.55,scaleY:1,x:275,y:198.55},98).wait(2));

	// firstRoom
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(277.05,200.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.4,regY:0.2,scaleX:6.2444,scaleY:8.6592,x:1139,y:278.1},98).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-312,-1263.2,3172.3,3279.7);
// library properties:
lib.properties = {
	id: 'B6456C92770F1A44A51A59F5A7439E49',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Path_11_1.png", id:"Path_11_1"},
		{src:"images/Path_14_5.png", id:"Path_14_5"},
		{src:"images/Path_23.png", id:"Path_23"},
		{src:"images/Path_44.png", id:"Path_44"}
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
an.compositions['B6456C92770F1A44A51A59F5A7439E49'] = {
	getStage: function() { return exportRoot.stage; },
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;