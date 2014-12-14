(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.main300x1050 = function() {
	this.initialize();

	// Laag 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAXXhR8MAAACj5MgutAAAMAAAij5MAutAAA").cp();
	this.shape.setTransform(149.5,524.5);

	// geldtitel
	this.geldtitle = new lib.mcgeldtitel();
	this.geldtitle.setTransform(124.1,150,1,1,0,0,0,115.4,-9);

	// hand
	this.hand = new lib.mchand();
	this.hand.setTransform(46,242);

	// laptoptitel
	this.laptoptitle = new lib.mclaptoptittel();
	this.laptoptitle.setTransform(192.1,41,1,1,0,0,0,75.4,0);

	// laptop
	this.laptop = new lib.mclaptop();
	this.laptop.setTransform(500,334.1,1,1,0,0,0,0,-0.9);

	// djtitel
	this.djtitle = new lib.mcdjtitel();
	this.djtitle.setTransform(63.1,123.1,1,1,0,0,0,98,-11.9);

	// tafel
	this.tafel = new lib.mctafel();
	this.tafel.setTransform(220.9,219);

	// dj
	this.dj = new lib.animdj();
	this.dj.setTransform(58,207,1,1,0,0,0,2,23.9);

	// mensen
	this.mensenlinks = new lib.mcpeople();
	this.mensenlinks.setTransform(-9.7,282.6,1,1,0,0,0,1.2,-0.4);

	this.mensenrechts = new lib.mcpeople();
	this.mensenrechts.setTransform(198.2,273.6,1,1,0,0,0,1.2,-0.4);

	// titel
	this.title = new lib.mctitel();
	this.title.setTransform(121,80);

	// record
	this.record = new lib.animrecord();
	this.record.setTransform(131,175.5);

	this.addChild(this.record,this.title,this.mensenrechts,this.mensenlinks,this.dj,this.tafel,this.djtitle,this.laptop,this.laptoptitle,this.hand,this.geldtitle,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-180.3,-63.9,1180.4,1113);


// symbols:
(lib.shutterstock_196863584_laptop = function() {
	this.initialize(img.shutterstock_196863584_laptop);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,668);


(lib.wordteendjeps = function() {
	this.initialize();

	// wordteendj.eps
	this.text = new cjs.Text("Wordt \neen \nDJ!", "bold 24px ");
	this.text.lineHeight = 29;
	this.text.setTransform(0,1.4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.4,75.7,81.6);


(lib.mcimage = function() {
	this.initialize();

	// Laag 1
	this.instance = new lib.shutterstock_196863584_laptop();
	this.instance.setTransform(-499.9,-333.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-499.9,-333.9,1000,668);


(lib.mcbg = function() {
	this.initialize();

	// Laag 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AdXt0IAAbpMg6tAAAIAA7pMA6tAAA").cp();

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-187.9,-88.4,376,177);


(lib.plaat_defeps = function() {
	this.initialize();

	// plaat_def.eps
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AH0AAQAAjOiTiSQiSiTjPAAQjOAAiSCTQiTCSAADOQAADPCTCSQCSCTDOAAQDPAACSiTQCTiSAAjPIAAAAABqhpQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsIAAAAAiAlUQgQAEgYAMQgwAZgtAsQgtAugZAwQgMAYgDAPIgngIQAEgTAOgcQAbg3AzgzQAzgyA3gcQAbgOAUgEIAIAnAiuiuQgXAXgNAZQgGAMgCAIIgngJQACgKAJgSQAPgfAdgdQAdgcAegQQARgIAMgDIAIAoQgIACgMAGQgZANgXAXIAAAA").cp();
	this.shape_1.setTransform(50,50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAgaQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIQgIgIAAgLQAAgKAIgIQAIgIAKAAIAAAA").cp();
	this.shape_2.setTransform(50,50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AG6AAQAAC3iBCCQiCCBi3AAQi2AAiCiBQiBiCAAi3QAAi2CBiCQCCiBC2AAQC3AACCCBQCBCCAAC2IAAAA").cp();
	this.shape_3.setTransform(51.3,47.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.nietgoedgeldterugeps = function() {
	this.initialize();

	// nietgoedgeldterug.eps
	this.text_1 = new cjs.Text("Niet \ngoed, \ngeld \nterug!", "bold 24px ", "#2B2B2A");
	this.text_1.lineHeight = 29;
	this.text_1.setTransform(0,1.4);

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.4,66.6,110.4);


(lib.metjelaptopeps = function() {
	this.initialize();

	// metjelaptop.eps
	this.text_2 = new cjs.Text("Met \nje \nlaptop!", "bold 24px ", "#2B2B2A");
	this.text_2.lineHeight = 29;
	this.text_2.setTransform(0,1.4);

	this.addChild(this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.4,77.8,81.6);


(lib.logozwart_outlineseps = function() {
	this.initialize();

	// logozwart_outlines.eps
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B2B2A").s().p("AB4CnIjvAAIAAlOIBJAAIAAEMICmAAIAABC").cp();
	this.shape_4.setTransform(577.2,46.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B2B2A").s().p("ABHifQAhAOAYAXQAYAYANAfQANAgAAAjIAAAAQAAAjgNAgQgOAfgYAYQgYAYggANQghAOgmAAQgnAAgggOQgfgNgZgYQgYgWgNggQgNggAAgkIAAAAQAAgjANgfQAOggAXgXQAZgYAggOQAhgNAlAAQAmAAAhANIAAAAAAAhoQgWAAgSAIQgTAIgNAOQgNAPgHATQgIATAAAVIAAAAQAAAVAIATQAHAUAOAOQAOAOASAJQARAIAWAAQAXAAASgIQAUgJALgOQAOgOAHgTQAIgTAAgWIAAAAQAAgUgIgTQgHgTgOgPQgOgPgSgIQgTgIgVAAIAAAA").cp();
	this.shape_5.setTransform(537.1,46.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B2B2A").s().p("ABdgnQgHgTgOgPQgOgPgSgIQgUgIgUAAQgWAAgSAIQgTAIgNAOQgNAPgIATQgHATAAAVIAAAAQAAAVAHATQAIAUAOAOQANAOATAJQARAIAWAAQAXAAASgIQATgJAMgOQANgOAIgTQAIgTAAgWIAAAAQAAgUgIgTIAAAAACAh6QAYAYANAfQANAgAAAjIAAAAQAAAjgOAgQgNAfgYAYQgYAYggANQghAOgmAAQgnAAgggOQgfgNgZgYQgYgWgNggQgNggAAgkIAAAAQAAgjANgfQAOggAXgXQAYgYAhgOQAhgNAlAAQAmAAAhANQAhAOAYAXIAAAA").cp();
	this.shape_6.setTransform(492.7,46.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B2B2A").s().p("ACNinIAAFOIhJAAIAAiHIiHAAIAACHIhJAAIAAlOIBJAAIAACFICHAAIAAiFIBJAA").cp();
	this.shape_7.setTransform(450.5,46.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B2B2A").s().p("AgxhKQgOAQgGASQgIATAAAVIAAAAQAAAVAIATQAHATANAPQAMAOASAJQASAIAUAAQAdAAAUgLQAUgLAUgRIAvAvQgOAPgNAKQgOALgRAIQgQAIgUAEQgVAEgYAAQgjAAgfgNQgggOgXgXQgXgYgMgfQgOgfAAglIAAAAQAAgkAOgeQAMgfAXgYQAXgYAggOQAhgNAlAAQAZAAASADQAPADAUAIQAPAGAOAKQAOALALAKIgvA3QgSgRgWgLQgVgKgZAAQgTAAgSAIQgTAIgMAOIAAAA").cp();
	this.shape_8.setTransform(411.3,46.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B2B2A").s().p("AgjhiQgKAJAAAMIAAABQAAAIADAGQACAGAJAFQAJAFAOAEIAhAKQAbAHATAIQASAIAQAKQANAMAHAQQAHARAAAVIAAABQAAAZgJATQgJAUgQANQgRAOgWAGQgXAHgbAAQgkAAglgNQglgNgegcIArg0QAWASAaAMQAXALAcAAQAYAAAMgJQAMgIAAgPIAAgBQAAgGgCgHQgDgFgIgFQgGgEgOgFQgGgDgbgIQgagGgUgHQgVgJgOgJQgPgKgHgRQgIgRAAgZIAAgBQAAgWAIgUQAJgSAPgOQAPgMAWgIQAVgHAbAAQAkAAAeALQAdAKAcAVIgnA4QgVgPgXgJQgVgJgUAAQgVAAgMAIIAAAA").cp();
	this.shape_9.setTransform(373.9,46.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B2B2A").s().p("AB9hlIiyAAIAABFICcAAIAAA/IicAAIAABHIC0AAIAABBIj9AAIAAlOID7AAIAABC").cp();
	this.shape_10.setTransform(194.8,46.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B2B2A").s().p("ACVinIAAFOIg/AAIihjTIAADTIhJAAIAAlOIBFAAICbDNIAAjNIBJAA").cp();
	this.shape_11.setTransform(155.4,46.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B2B2A").s().p("AgkinIBIAAIAAFOIhIAAIAAlO").cp();
	this.shape_12.setTransform(124.8,46.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B2B2A").s().p("AguinIAAEMICmAAIAABCIjvAAIAAlOIBJAA").cp();
	this.shape_13.setTransform(99.5,46.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B2B2A").s().p("ACVinIAAFOIg/AAIihjTIAADTIhJAAIAAlOIBEAAICcDNIAAjNIBJAA").cp();
	this.shape_14.setTransform(60.8,46.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B2B2A").s().p("AAAisQAnAAAhANQAgAOAYAXQAYAYANAfQANAfAAAkIAAAAQAAAjgNAgQgOAggYAXQgXAYghANQghAOgmAAQgnAAgfgOQghgNgYgYQgYgYgNgeQgNggAAgkIAAAAQAAgjANgfQANgfAZgYQAXgYAhgOQAhgNAlAAIAAAAAgohgQgSAIgOAOQgNAOgHAUQgIATAAAVIAAAAQAAAVAIATQAIAUANAOQAMANAUAKQASAIAVAAQAXAAASgIQASgIAOgPQANgOAHgTQAIgTAAgWIAAAAQAAgUgIgTQgHgTgOgPQgNgOgTgJQgUgIgUAAQgWAAgSAIIAAAA").cp();
	this.shape_15.setTransform(17.9,46.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B2B2A").s().p("AExnFIAAJIQAABRgWA7QgWA6gpAqQgqApg6AVQg7AVhIAAQhpAAhHgoQhHgogug3IB8iKQAmAqAoAYQAnAYAvAAQA3AAAfgjQAggjAAhPIAAo/IDLAA").cp();
	this.shape_16.setTransform(317.6,45.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B2B2A").s().p("AGcAAQAABfgiBRQgjBTg/A7Qg/A8hYAjQhYAihnAAIldAAIAAt9IFdAAQBoAABXAhQBZAjA+A7QA/A9AjBRQAiBSAABeIAAABAC6hrQgTgygkgkQgkglgxgTQgxgUg7AAIiYAAIAAIbICYAAQA8AAAwgUQAygSAjglQAkgkATgwQAUgwAAg9IAAgCQAAg6gUgxIAAAA").cp();
	this.shape_17.setTransform(266.1,44.8);

	this.addChild(this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,589.3,90.9);


(lib.logowit_outlineseps = function() {
	this.initialize();

	// logowit_outlines.eps
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AB4CnIjvAAIAAlOIBJAAIAAEMICmAAIAABC").cp();
	this.shape_18.setTransform(577.2,46.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAhoQgWAAgSAIQgTAIgNAOQgNAPgHATQgIATAAAVIAAAAQAAAVAIATQAHAUAOAOQAOAOASAJQARAIAWAAQAXAAASgIQAUgJALgOQAOgOAHgTQAIgTAAgWIAAAAQAAgUgIgTQgHgTgOgPQgOgPgSgIQgTgIgVAAIAAAAABHifQAhAOAYAXQAYAYANAfQANAgAAAjIAAAAQAAAjgNAgQgOAfgYAYQgYAYggANQghAOgmAAQgnAAgggOQgfgNgZgYQgYgWgNggQgNggAAgkIAAAAQAAgjANgfQAOggAXgXQAZgYAggOQAhgNAlAAQAmAAAhANIAAAA").cp();
	this.shape_19.setTransform(537.1,46.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABHifQAhAOAYAXQAYAYANAfQANAgAAAjIAAAAQAAAjgOAgQgNAfgYAYQgYAYggANQghAOgmAAQgnAAgggOQgfgNgZgYQgYgWgNggQgNggAAgkIAAAAQAAgjANgfQAOggAXgXQAYgYAhgOQAhgNAlAAQAmAAAhANIAAAAABdgnQgHgTgOgPQgOgPgSgIQgUgIgUAAQgWAAgSAIQgTAIgNAOQgNAPgIATQgHATAAAVIAAAAQAAAVAHATQAIAUAOAOQANAOATAJQARAIAWAAQAXAAASgIQATgJAMgOQANgOAIgTQAIgTAAgWIAAAAQAAgUgIgTIAAAA").cp();
	this.shape_20.setTransform(492.7,46.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ACNinIAAFOIhJAAIAAiHIiHAAIAACHIhJAAIAAlOIBJAAIAACFICHAAIAAiFIBJAA").cp();
	this.shape_21.setTransform(450.5,46.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgxhKQgOAQgGASQgIATAAAVIAAAAQAAAVAIATQAHATANAPQAMAOASAJQASAIAUAAQAdAAAUgLQAUgLAUgRIAvAvQgOAPgNAKQgOALgRAIQgQAIgUAEQgVAEgYAAQgjAAgfgNQgggOgXgXQgXgYgMgfQgOgfAAglIAAAAQAAgkAOgeQAMgfAXgYQAXgYAggOQAhgNAlAAQAZAAASADQAPADAUAIQAPAGAOAKQAOALALAKIgvA3QgSgRgWgLQgVgKgZAAQgTAAgSAIQgTAIgMAOIAAAA").cp();
	this.shape_22.setTransform(411.3,46.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgjhiQgKAJAAAMIAAABQAAAIADAGQACAGAJAFQAJAFAOAEIAhAKQAbAHATAIQASAIAQAKQANAMAHAQQAHARAAAVIAAABQAAAZgJATQgJAUgQANQgRAOgWAGQgXAHgbAAQgkAAglgNQglgNgegcIArg0QAWASAaAMQAXALAcAAQAYAAAMgJQAMgIAAgPIAAgBQAAgGgCgHQgDgFgIgFQgGgEgOgFQgGgDgbgIQgagGgUgHQgVgJgOgJQgPgKgHgRQgIgRAAgZIAAgBQAAgWAIgUQAJgSAPgOQAPgMAWgIQAVgHAbAAQAkAAAeALQAdAKAcAVIgnA4QgVgPgXgJQgVgJgUAAQgVAAgMAIIAAAA").cp();
	this.shape_23.setTransform(373.9,46.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AB9hlIiyAAIAABFICcAAIAAA/IicAAIAABHIC0AAIAABBIj9AAIAAlOID7AAIAABC").cp();
	this.shape_24.setTransform(194.8,46.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ACVinIAAFOIg/AAIihjTIAADTIhJAAIAAlOIBFAAICbDNIAAjNIBJAA").cp();
	this.shape_25.setTransform(155.4,46.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgkinIBIAAIAAFOIhIAAIAAlO").cp();
	this.shape_26.setTransform(124.8,46.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AguinIAAEMICmAAIAABCIjvAAIAAlOIBJAA").cp();
	this.shape_27.setTransform(99.5,46.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ACVinIAAFOIg/AAIihjTIAADTIhJAAIAAlOIBEAAICcDNIAAjNIBJAA").cp();
	this.shape_28.setTransform(60.8,46.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgohgQgSAIgOAOQgNAOgHAUQgIATAAAVIAAAAQAAAVAIATQAIAUANAOQAMANAUAKQASAIAVAAQAXAAASgIQASgIAOgPQANgOAHgTQAIgTAAgWIAAAAQAAgUgIgTQgHgTgOgPQgNgOgTgJQgUgIgUAAQgWAAgSAIIAAAAAAAisQAnAAAhANQAgAOAYAXQAYAYANAfQANAfAAAkIAAAAQAAAjgNAgQgOAggYAXQgXAYghANQghAOgmAAQgnAAgfgOQghgNgYgYQgYgYgNgeQgNggAAgkIAAAAQAAgjANgfQANgfAZgYQAXgYAhgOQAhgNAlAAIAAAA").cp();
	this.shape_29.setTransform(17.9,46.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AExnFIAAJIQAABRgWA7QgWA6gpAqQgqApg6AVQg7AVhIAAQhpAAhHgoQhHgogug3IB8iKQAmAqAoAYQAnAYAvAAQA3AAAfgjQAggjAAhPIAAo/IDLAA").cp();
	this.shape_30.setTransform(317.6,45.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AC6hrQgTgygkgkQgkglgxgTQgxgUg7AAIiYAAIAAIbICYAAQA8AAAwgUQAygSAjglQAkgkATgwQAUgwAAg9IAAgCQAAg6gUgxIAAAAAGcAAQAABfgiBRQgjBTg/A7Qg/A8hYAjQhYAihnAAIldAAIAAt9IFdAAQBoAABXAhQBZAjA+A7QA/A9AjBRQAiBSAABeIAAAB").cp();
	this.shape_31.setTransform(266.1,44.8);

	this.addChild(this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,589.3,90.9);


(lib.handeps = function() {
	this.initialize();

	// hand.eps
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("EAbaglyQDNAACZCUQCYCVAADIMAAAAz4QAAKhodHmQkSD1ktB4QgTAMggAAI2fAAQmRAAmGo7QiZjgiulWQhhjAjImuQj/o3iGjGQh8irAIjHQAHjDCHiHQCUiUDQgDQDQgECPCOIFsFwMAAAgnHQAAjJCYiUQCYiUDOAAQDSAACWCRQCWCRAADJIAAUUQAAA1gmAlQglAmg1AAQg1AAglgmQglglAAg1IAA0OQAAhghLhGQhMhGhoAAQhqAAhKBHQhLBHAABkMAAAAsAQAAAmgWAhQgUAegjAUQgmAPglgJQgkgIgdgdIpEpQQhDhChoAEQhnAEhNBHQhIBIAIBwQAHBkA/BUQBVB3BxDiQBAB/CZFMQCjFjBbC4QCbE4CFDTQFbImEiAAIWFAAQEeh7DujmQGemQAAoQMAAAgz4QAAhkhLhHQhLhHhpAAQhpAAhLBGQhLBGAABgIAAcMQAAA1gmAlQglAkg1AAQg1AAglgkQglglAAg1IAA8MQAAjNCWiPQCViPDTAAIAAAA").cp();
	this.shape_32.setTransform(226.4,318.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAAvqQhoAAhLBGQhLBGAABfIAAdqQAAA1glAlQgmAmg0AAQg1AAglgmQgmglAAg1IAA9qQAAjNCWiPQCWiPDRAAQDNAACZCVQCYCUAADJIAAdjQAAA1gmAlQglAmg1AAQg0AAgmgmQglglAAg1IAA9jQAAhkhLhIQhLhGhpAAIAAAA").cp();
	this.shape_33.setTransform(324.7,167.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAAw6QhoAAhLBGQhLBGAABgMAAAAgJQAAA1glAlQgmAlg0AAQg1AAglglQgmglAAg1MAAAggJQAAjNCWiPQCWiPDRAAQDNAACZCUQCYCVAADIMAAAAgDQAAA1gmAlQglAlg1AAQg0AAgmglQglglAAg1MAAAggDQAAhkhLhHQhLhHhpAAIAAAA").cp();
	this.shape_34.setTransform(248.2,133.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("EAWBghgIAABNIB4hmIETAAIELB/IBNJ+MAAAAxyImrLjInfFLIoxBgIungsIlShTIlLlSIpev8Ioew8IhMkMICsj9IFrhMIDTDLIE+FKIBtAzIBzqvMgAggiqIBsgmIGShTIB/BMICgFGIAAoyIFch/ICsB/ICmCgIAAeYIAtE/IAA+4IDSiAICshAIDTBAIBMBzIBnDy").cp();
	this.shape_35.setTransform(222.7,307.6);

	this.addChild(this.shape_35,this.shape_34,this.shape_33,this.shape_32);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,452.9,612);


(lib.dj_tafeleps = function() {
	this.initialize();

	// dj_tafel.eps
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#252422").s("#FFFFFF").ss(0.5,0,0,4).p("AAxATQAVgGAAgIQAAgDgDgCQADgCAAgCQAAgIgVgGQgVgGgcAAQgcAAgUAGQgVAGAAAIQAAADACABQgCACAAADQAAAIAVAGQAVAGAbAAQAcAAAVgGIAAAA").cp();
	this.shape_36.setTransform(33.5,2.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#252422").s("#FFFFFF").ss(0.5,0,0,4).p("ABDAAQADgCAAgCQAAgIgVgGQgVgGgcAAQgcAAgUAGQgVAGAAAIQAAADACABQgCACAAADQAAAIAVAGQAUAGAcAAQAcAAAVgGQAVgGAAgIQAAgDgDgCIAAAA").cp();
	this.shape_37.setTransform(16.5,2.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#252422").s("#FFFFFF").ss(0.5,0,0,4).p("AD1iTInpAAIAAEnIHpAAIAAkn").cp();
	this.shape_38.setTransform(25,22.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#252422").s("#FFFFFF").ss(0.5,0,0,4).p("ADNgiImOAAIgyBFIHoAAIgohF").cp();
	this.shape_39.setTransform(24.9,4.8);

	this.addChild(this.shape_39,this.shape_38,this.shape_37,this.shape_36);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0.3,49,36.7);


(lib.dj_lichaameps = function() {
	this.initialize();

	// dj_lichaam.eps
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#252422").s().p("ABoj5IAAIGQAAANgKAJQgKAJgNAAIgCAAQgNAAgJgJQgJgJAAgNIAAkLQgBgEgCgEQgDgGgDAOIAAEMQAAANgKAKQgKAJgLAAIgCAAQgNAAgJgJQgJgKAAgNIgBnxIgQABIAADLQAAALgIAIQgIAGgKAAQgLAAgHgGQgHgHAAgMIAAjiIABgGQABgMAQgLQAhgXBCAAIA3AAIAfA3IAEgD").cp();
	this.shape_40.setTransform(10.5,46);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#252422").s().p("AAahPQAAgLAHgIQAIgIAKAAQAKAAAIAIQAHAIAAALIAKCGIAAAHQgCALgQALQggAXhDAAIg2AAIAAg4IB5gIIgKh6").cp();
	this.shape_41.setTransform(20.9,10.7);

	this.addChild(this.shape_41,this.shape_40);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.6,76.3);


(lib.dj_koptelefooneps = function() {
	this.initialize();

	// dj_koptelefoon.eps
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#252422").s("#FFFFFF").ss(0.1,0,0,4).p("AgDgfQgDAAgBACIAAA7QACADACAAIAHAAQAEgBAAgDIAAg5QAAgDgEAAIgHAA").cp();
	this.shape_42.setTransform(17,9.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#252422").s("#FFFFFF").ss(0.1,0,0,4).p("AgDgfQgDAAgBACIAAA7QACADACAAIAHAAQAEgBAAgDIAAg5QAAgDgEAAIgHAA").cp();
	this.shape_43.setTransform(4,9.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#252422").s().p("ABpAgQgBgWgOgIQgBgZgZgVQgbgUglAAQglAAgaAUQgaAUgBAbQgOAKABATQAAAOAHAJQAHAKAJAAIAHgCIAAgBIAAg8IAAgBIgDgBQACgVAUgPQAXgSAfAAQAeAAAYASQAPALAFAQIADAJIgDABIAAABIAAA8IAAABIAHABQAKAAAHgJQAHgKAAgNIAAAA").cp();
	this.shape_44.setTransform(10.5,6.5);

	this.addChild(this.shape_44,this.shape_43,this.shape_42);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,13);


(lib.dj_hoofdeps = function() {
	this.initialize();

	// dj_hoofd.eps
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#252422").s().p("AAAg+QAaAAASATQATASAAAZQAAAagTASQgSATgaAAQgZAAgSgTQgTgSAAgaQAAgZATgSQASgTAZAAIAAAA").cp();
	this.shape_45.setTransform(6.3,6.3);

	this.addChild(this.shape_45);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.7,12.7);


(lib.danserseps = function() {
	this.initialize();

	// dansers.eps
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#252422").ss().p("ABhjAQgSARgTANIgQAJIgBBHQAABNADAbIAdAfQAkAmAcAoQAcAnAaA6QAMAbAQAtQALAdgXAKQgXAJgMgcQgNgegQgfQgSgigNgRQgzhJg5gjIAQAkQAPAsgCAmQgCAdgrAtQg0A1gFAIQgNAZgXgGQgXgGAJgdQAEgMAtg6QAngzgEgTQgJglglgnQgigkgFgqQADhbgGg4QgbAVgNAnQgNAnAFAoQAEAfgWAFQgVAEgJgeQgQg6AUhAQAYhPBGgZQALgEBAgLQA+gNAWgQQAegWAWgpQAHgNAVg1QAKgYAUAIQAUAIgFAjQgNBQg3A3IAAAA").cp();
	this.shape_46.setTransform(153.3,37.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#252422").ss().p("AgtAQQgFgZAKgZQAKgZAUgEQASgEAQANQARANAFAaQAFAZgKAZQgKAZgTAEQgTAEgQgNQgRgNgFgaIAAAA").cp();
	this.shape_47.setTransform(147.9,9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#252422").s().p("ADJi3QgbhShGgRQgLgDgpAEQgvAFgSgBQgTgBgRAQQgIAHgZAhQg0BChAAYQgXAOALASQALASAhgKQA0gSAsgpQAXgUALgRIAECLQgqAxgmBCQgXApgTA8QgIAagMAwQgIAeAYAHQAYAHAJgeQAYhMAWgoQAWgnAUgZQAYgfAbgWIgLAlQgIAsAFAlQAKBEAgA4QAQAbAWgKQAXgKgNgcQgLgZgIgoQgJgqADgYQAFgmAggqQAdglABgqQgNhjAAg4QAtAbgBB0QAAAgAWABQAVACAFgeQAKhCgUg/IAAAA").cp();
	this.shape_48.setTransform(105.1,49.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#252422").s().p("AAvALQACgagNgXQgNgYgTgBQgTgCgOAOQgPAPgCAaQgCAaAMAXQANAXATACQATABAPgOQAPgOACgaIAAAA").cp();
	this.shape_49.setTransform(108.4,12.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#252422").ss().p("ABbjcQBIALAcBPQAUA4gFBHQgCAdgWAAQgWAAgCgeQgFg6gGgZQgLgsgbgNQAFA4AUBYQADAqgaAqQgdAtgBAnQgBAYAMAqQAMAnANAZQAPAbgVAKQgWAKgSgWQgjgrgUhPQgJgkAGguIAIgmQgsArgnBTQgTApgSBRQgGAegZgFQgYgFAFgeQATh2AdhBQAghHAng1QgEgcgOhLIgOhFQgYgGgdgUQg6gqgchMQgMghASgMQASgMAPAWQALASAWAoQAXAiAhAPQAYALBAABQAiAAAqAAIAAAA").cp();
	this.shape_50.setTransform(59.8,41.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#252422").ss().p("AAwAHQAAAagOAQQgNAPgVABQgSAAgPgXQgOgWAAgaQgBgaAOgQQAOgQAUAAQASAAAPAXQAPAWAAAaIAAAA").cp();
	this.shape_51.setTransform(60.5,10.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#252422").s().p("ADLhgQg7gkgnhKQgTglgHgIQgOgTgSgDQgVgCgrgNQgngLgLAAQhJAFgpBMQgfA6gCBDQAAAfAVACQAWABAFgeQAThyAygTQgKA3geBfQgHAqAWApQAYAwgCAmQgBAYgQAoQgPAlgQAXQgRAaAUANQAVAOAUgYQAqgzAXhAQAMgjgCgtIgEgnQAYAcAQAjQAPAcAPAqQAHAUAHAlQAHAjAEAfQAEAeAYgCQAZgDgCgeQgGhBgBgMQgIg/gQgtQgPgugXgsIgUglIAdiIIAbArQAkAwAwAbQAeAQAPgQQAOgQgUgRIAAAA").cp();
	this.shape_52.setTransform(21.5,47);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#252422").s().p("AgFBAQASACAQgVQARgVACgZQADgagMgRQgMgQgVgDQgRgCgRAWQgQAUgDAZQgDAaANARQAMARAUACIAAAA").cp();
	this.shape_53.setTransform(23.2,10.1);

	this.addChild(this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.5,175.9,77.1);


(lib.mcrecord = function() {
	this.initialize();

	// Laag 1
	this.instance_1 = new lib.plaat_defeps("synched",0);
	this.instance_1.setTransform(0,0,1,1,0,0,0,50,50);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.9,-49.9,100,100);


(lib.animrecord = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Laag 1
	this.instance_2 = new lib.mcrecord();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:90},4).to({rotation:180},5).to({rotation:270.1},5).to({rotation:360},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-49.9,100,100);


(lib.mctitel = function() {
	this.initialize();

	// Laag 1
	this.instance_3 = new lib.logozwart_outlineseps("synched",0);
	this.instance_3.setTransform(0,0,1,1,0,0,0,294.6,45.4);

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-294.5,-45.3,589.3,90.9);


(lib.mctafeltitel = function() {
	this.initialize();

	// Laag 1
	this.instance_4 = new lib.logowit_outlineseps("synched",0);
	this.instance_4.setTransform(0,0,0.3,0.3,0,0,0,294.5,45.5);

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.3,-13.6,176.8,27.3);


(lib.mctafel = function() {
	this.initialize();

	// titel
	this.titel = new lib.mctafeltitel();
	this.titel.setTransform(0,-40.2);

	// tafel
	this.instance_5 = new lib.dj_tafeleps("synched",0);
	this.instance_5.setTransform(-0.1,0,4.014,6.123,0,0,0,24.9,18.6);

	this.addChild(this.instance_5,this.titel);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98.1,-112.3,196.7,224.7);


(lib.mcpeople = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Laag 1
	this.instance_6 = new lib.danserseps("synched",0);
	this.instance_6.setTransform(1.3,-0.3,1,1,0,0,0,88.2,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({skewY:180,x:1.2},0).wait(10).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.8,-38.4,175.9,77.1);


(lib.mclaptoptittel = function() {
	this.initialize();

	// Laag 1
	this.instance_7 = new lib.metjelaptopeps("synched",0);
	this.instance_7.setTransform(75.4,0,1,1,0,0,0,75.4,13.3);

	this.addChild(this.instance_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-11.9,77.8,81.6);


(lib.mclaptop = function() {
	this.initialize();

	// Laag 1
	this.image = new lib.mcimage();
	this.image.setTransform(0,-0.9);

	// Laag 2
	this.bg = new lib.mcbg();
	this.bg.setTransform(6,-56.4);

	this.addChild(this.bg,this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-499.9,-334.9,1000,668);


(lib.mchand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Laag 1
	this.instance_8 = new lib.handeps("synched",0);
	this.instance_8.setTransform(0,0,1,1,0,0,0,226.4,306);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:-79.8},4).to({startPosition:0},1).to({y:0},4).to({startPosition:0},5).to({startPosition:0},1).to({y:-79.8},4).to({startPosition:0},1).to({y:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226.3,-305.9,452.9,612);


(lib.mcgeldtitel = function() {
	this.initialize();

	// Laag 1
	this.instance_9 = new lib.nietgoedgeldterugeps("synched",0);
	this.instance_9.setTransform(115.4,-8.9,1,1,0,0,0,115.4,13.3);

	this.addChild(this.instance_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-20.9,66.6,110.4);


(lib.mcdjtitel = function() {
	this.initialize();

	// Laag 1
	this.instance_10 = new lib.wordteendjeps("synched",0);
	this.instance_10.setTransform(6.1,-6.9,1,1,0,0,0,78.4,13.3);

	this.addChild(this.instance_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.2,-18.9,75.7,81.6);


(lib.mclichaam = function() {
	this.initialize();

	// Laag 1
	this.instance_11 = new lib.dj_lichaameps("synched",0);
	this.instance_11.setTransform(2.1,23,1,1,0,0,0,14.8,38.1);

	this.addChild(this.instance_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.7,-15,29.6,76.3);


(lib.mckoptelefoon = function() {
	this.initialize();

	// Laag 1
	this.instance_12 = new lib.dj_koptelefooneps("synched",0);
	this.instance_12.setTransform(0,110,17.476,17,0,0,0,10.5,6.5);

	this.addChild(this.instance_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-183.4,-0.4,367,221);


(lib.animkoptelefoon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Laag 1
	this.instance_13 = new lib.mckoptelefoon();
	this.instance_13.setTransform(-0.9,111.4,1,1,0,0,0,0,110.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleX:1.19,y:85.5},4).to({scaleX:1,y:111.4},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.4,0.5,367,221);


(lib.mchoofd = function() {
	this.initialize();

	// Laag 1
	this.instance_14 = new lib.dj_hoofdeps("synched",0);
	this.instance_14.setTransform(-0.2,-0.2,11.858,11.857,0,0,0,6.3,6.3);

	this.addChild(this.instance_14);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.9,-74.9,150,150);


(lib.mcdj = function() {
	this.initialize();

	// Laag 1
	this.instance_15 = new lib.mchoofd();
	this.instance_15.setTransform(-1.4,-28.4,0.067,0.067);

	this.instance_16 = new lib.mclichaam();
	this.instance_16.setTransform(0,0,1,1,0,0,0,2,23);

	this.addChild(this.instance_16,this.instance_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.7,-38,29.6,76.3);


(lib.animlichaam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Laag 1
	this.instance_17 = new lib.mcdj();
	this.instance_17.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({y:-1.7},4).to({y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-38.1,29.6,76.3);


(lib.animdj = function() {
	this.initialize();

	// koptelefoon
	this.koptelefoon = new lib.animkoptelefoon();
	this.koptelefoon.setTransform(0.6,-6.6,0.047,0.046,0,0,0,-1,112);

	// lichaam
	this.lichaam = new lib.animlichaam();
	this.lichaam.setTransform(2,24);

	this.addChild(this.lichaam,this.koptelefoon);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.6,-14.1,29.6,76.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;