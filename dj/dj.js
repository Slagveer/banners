(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.dj = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// geldtitel
	this.instance = new lib.mcgeldtitel();
	this.instance.setTransform(118.1,-45.8,0.74,1,0,0,0,142.3,-11.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(239).to({_off:false},0).to({y:54.1},14).wait(1));

	// laptoptitel
	this.instance_1 = new lib.mclaptoptittel();
	this.instance_1.setTransform(394.1,50.2,1,1,0,0,0,63,-7.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(169).to({_off:false},0).wait(1).to({regX:91.2,regY:-2.3,x:400.7,y:55.2,alpha:0.026},0).wait(1).to({x:379.8,alpha:0.053},0).wait(1).to({x:359.6,alpha:0.079},0).wait(1).to({x:340.1,alpha:0.105},0).wait(1).to({x:321.1,alpha:0.132},0).wait(1).to({x:302.8,alpha:0.158},0).wait(1).to({x:285.1,alpha:0.184},0).wait(1).to({x:268,alpha:0.211},0).wait(1).to({x:251.4,alpha:0.237},0).wait(1).to({x:235.5,alpha:0.263},0).wait(1).to({x:220.1,alpha:0.289},0).wait(1).to({x:205.3,alpha:0.316},0).wait(1).to({x:191,alpha:0.342},0).wait(1).to({x:177.3,alpha:0.368},0).wait(1).to({x:164.1,alpha:0.395},0).wait(1).to({x:151.4,alpha:0.421},0).wait(1).to({x:144.3,alpha:0.447},0).wait(1).to({x:142.4,alpha:0.474},0).wait(1).to({x:140.6,alpha:0.5},0).wait(1).to({x:138.8,alpha:0.526},0).wait(1).to({x:137.1,alpha:0.553},0).wait(1).to({x:135.6,alpha:0.579},0).wait(1).to({x:134,alpha:0.605},0).wait(1).to({x:132.6,alpha:0.632},0).wait(1).to({x:131.2,alpha:0.658},0).wait(1).to({x:129.9,alpha:0.684},0).wait(1).to({x:128.6,alpha:0.711},0).wait(1).to({x:127.5,alpha:0.737},0).wait(1).to({x:126.3,alpha:0.763},0).wait(1).to({x:125.3,alpha:0.789},0).wait(1).to({x:124.3,alpha:0.816},0).wait(1).to({x:123.3,alpha:0.842},0).wait(1).to({x:122.4,alpha:0.868},0).wait(1).to({x:121.6,alpha:0.895},0).wait(1).to({x:120.8,alpha:0.921},0).wait(1).to({x:120.1,alpha:0.947},0).wait(1).to({x:119.4,alpha:0.974},0).wait(1).to({x:118.8,alpha:1},0).wait(1).to({x:118.2},0).wait(1).to({x:117.6},0).wait(1).to({x:117.1},0).wait(1).to({x:116.7},0).wait(1).to({x:116.2},0).wait(1).to({x:115.8},0).wait(1).to({x:115.5},0).wait(1).to({x:115.2},0).wait(1).to({x:114.9},0).wait(1).to({x:114.6},0).wait(1).to({x:114.4},0).wait(1).to({x:114.2},0).wait(1).to({x:114},0).wait(1).to({x:113.9},0).wait(1).to({x:113.7},0).wait(1).to({x:113.6},0).wait(1).to({x:113.5},0).wait(1).wait(1).to({x:113.4},0).wait(1).to({x:113.3},0).wait(7).to({_off:true},1).wait(19));

	// laptop
	this.instance_2 = new lib.mclaptop();
	this.instance_2.setTransform(362,258,0.244,0.287,0,0,0,0,-1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(169).to({_off:false},0).to({x:122},13).wait(52).to({x:-137.8},5).to({_off:true},1).wait(14));

	// djtitel
	this.instance_3 = new lib.mcdjtitel();
	this.instance_3.setTransform(112,-69.9,1,1,0,0,0,97.9,-12);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(104).to({_off:false},0).wait(1).to({regY:-12.3,x:112.1,y:-53.8,alpha:0.043},0).wait(1).to({x:112.2,y:-38,alpha:0.087},0).wait(1).to({x:112.3,y:-22.8,alpha:0.13},0).wait(1).to({x:112.4,y:-8,alpha:0.174},0).wait(1).to({x:112.6,y:6.1,alpha:0.217},0).wait(1).to({x:112.7,y:20,alpha:0.261},0).wait(1).to({x:112.8,y:33.3,alpha:0.304},0).wait(1).to({x:112.9,y:46.2,alpha:0.348},0).wait(1).to({x:113,y:56.6,alpha:0.391},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:1},0).wait(41).to({_off:true},1).wait(85));

	// tafel
	this.instance_4 = new lib.mctafel();
	this.instance_4.setTransform(119.9,514);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).to({y:374},10).wait(70).to({y:654},10).wait(60).to({y:373},4).wait(11));

	// dj
	this.instance_5 = new lib.animdj();
	this.instance_5.setTransform(133,558,4.309,4.412,0,0,0,2.1,23.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(104).to({_off:false},0).wait(1).to({regY:23.1,x:132.9,y:530.7},0).wait(1).to({y:507.8},0).wait(1).to({y:485.5},0).wait(1).to({y:464},0).wait(1).to({y:443.2},0).wait(1).to({y:423},0).wait(1).to({y:403.6},0).wait(1).to({y:384.8},0).wait(1).to({y:366.7},0).wait(1).to({y:349.2},0).wait(1).to({y:332.4},0).wait(1).to({y:316.2},0).wait(1).to({y:300.6},0).wait(1).to({y:289.2},0).wait(1).to({y:288.3},0).wait(1).to({y:287.5},0).wait(1).to({y:286.7},0).wait(1).to({y:285.9},0).wait(1).to({y:285.2},0).wait(1).to({y:284.5},0).wait(1).to({y:283.8},0).wait(1).to({y:283.1},0).wait(1).to({y:282.5},0).wait(1).to({y:281.9},0).wait(1).to({y:281.4},0).wait(1).to({y:280.8},0).wait(1).to({y:280.3},0).wait(1).to({y:279.9},0).wait(1).to({y:279.4},0).wait(1).to({y:279},0).wait(1).to({y:278.6},0).wait(1).to({y:278.2},0).wait(1).to({y:277.8},0).wait(1).to({y:277.5},0).wait(1).to({y:277.2},0).wait(1).to({y:276.9},0).wait(1).to({y:276.6},0).wait(1).to({y:276.4},0).wait(1).to({y:276.2},0).wait(1).to({y:275.9},0).wait(1).to({y:275.7},0).wait(1).to({y:275.6},0).wait(1).to({y:275.4},0).wait(1).to({y:275.2},0).wait(1).to({y:275.1},0).wait(1).to({y:275},0).wait(1).to({y:274.9},0).wait(1).to({y:274.8},0).wait(1).to({y:274.7},0).wait(1).to({y:274.6},0).wait(1).wait(1).to({y:274.5},0).wait(1).to({y:274.4},0).wait(3).wait(1).to({y:274.3},0).wait(7).wait(1).to({regY:23.9,x:133,y:277.4},0).wait(1).to({regY:23.1,x:132.9,y:379.1},0).wait(1).to({y:481.5},0).wait(1).to({y:581},0).wait(1).to({y:593.6},0).wait(1).to({y:593.1},0).wait(1).to({y:592.6},0).wait(1).to({y:592.1},0).wait(1).to({y:591.7},0).wait(1).to({y:591.2},0).wait(1).to({y:590.8},0).wait(1).to({y:590.4},0).wait(1).to({y:590},0).wait(1).to({y:589.6},0).wait(1).to({y:589.2},0).wait(1).to({y:588.8},0).wait(1).to({y:588.5},0).wait(1).to({y:588.1},0).wait(1).to({y:587.8},0).wait(1).to({y:587.5},0).wait(1).to({y:587.2},0).wait(1).to({y:586.9},0).wait(1).to({y:586.6},0).wait(1).to({y:586.3},0).wait(1).to({y:586.1},0).wait(1).to({y:585.8},0).wait(1).to({y:585.6},0).wait(1).to({y:585.3},0).wait(1).to({y:585.1},0).wait(1).to({y:584.9},0).wait(1).to({y:584.7},0).wait(1).to({y:584.5},0).wait(1).to({y:584.3},0).wait(1).to({y:584.1},0).wait(1).to({y:584},0).wait(1).to({y:583.8},0).wait(1).to({y:583.7},0).wait(1).to({y:583.5},0).wait(1).to({y:583.4},0).wait(1).to({y:583.3},0).wait(1).to({y:583.1},0).wait(1).to({y:583},0).wait(1).to({y:582.9},0).wait(1).to({y:582.8},0).wait(1).to({y:582.7},0).wait(1).to({y:582.6},0).wait(1).wait(1).to({y:582.5},0).wait(1).to({y:582.4},0).wait(1).to({y:582.3},0).wait(1).wait(1).to({y:582.2},0).wait(1).wait(1).to({y:582.1},0).wait(2).wait(1).to({y:582},0).wait(2).wait(1).to({y:581.9},0).wait(10).wait(1).to({y:581.8},0).wait(3).wait(1).to({regY:23.9,x:133,y:547.4},0).wait(1).to({regY:23.1,x:132.9,y:474.4},0).wait(1).to({y:418.9},0).wait(1).to({y:375.6},0).wait(1).to({y:343.1},0).wait(1).to({y:319.8},0).wait(1).to({y:304.1},0).wait(1).to({y:294.7},0).wait(1).to({y:289.8},0).wait(1).to({y:288},0).wait(1).to({y:287.7},0).wait(1));

	// koptelefoon
	this.instance_6 = new lib.mchand();
	this.instance_6.setTransform(171.9,456,0.232,0.191,0,0,0,0,-0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(54).to({_off:false},0).to({y:342},6).wait(29).to({y:462},10).to({_off:true},1).wait(154));

	// titel
	this.instance_7 = new lib.mctitel();
	this.instance_7.setTransform(117.9,240,0.386,0.427);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({x:118,y:222.2,alpha:0.043},0).wait(1).to({x:118.1,y:204.8,alpha:0.087},0).wait(1).to({scaleX:0.39,x:118.2,y:187.8,alpha:0.13},0).wait(1).to({x:118.3,y:171.2,alpha:0.174},0).wait(1).to({x:118.5,y:155,alpha:0.217},0).wait(1).to({x:118.6,y:139.1,alpha:0.261},0).wait(1).to({scaleX:0.38,x:118.7,y:123.7,alpha:0.304},0).wait(1).to({x:118.8,y:108.6,alpha:0.348},0).wait(1).to({y:102,alpha:0.391},0).wait(1).to({scaleX:0.38,alpha:0.435},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.565},0).wait(1).to({scaleX:0.38,alpha:0.609},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.739},0).wait(1).to({scaleX:0.38,alpha:0.783},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.87},0).wait(1).to({scaleX:0.38,alpha:0.913},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:1},0).wait(1).wait(1).to({scaleX:0.38},0).wait(3).wait(1).to({scaleX:0.38},0).wait(3).wait(1).to({scaleX:0.38},0).wait(2).wait(1).to({scaleX:0.38},0).wait(3).wait(1).to({scaleX:0.38},0).wait(3).wait(1).to({scaleX:0.37},0).wait(3).wait(1).to({scaleX:0.37},0).wait(2).wait(1).to({scaleX:0.37},0).wait(3).wait(1).to({scaleX:0.37},0).wait(3).wait(1).to({scaleX:0.37},0).wait(3).wait(1).to({scaleX:0.37},0).wait(2).wait(1).to({scaleX:0.37},0).wait(3).wait(1).to({scaleX:0.37},0).wait(3).wait(1).to({scaleX:0.37},0).wait(15).to({_off:true},1).wait(164));

	// record
	this.instance_8 = new lib.animrecord();
	this.instance_8.setTransform(122,525.9,1.4,1.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(23).to({_off:false},0).wait(1).to({x:122.1,y:497.3,alpha:0.045},0).wait(1).to({x:122.2,y:469.6,alpha:0.091},0).wait(1).to({x:122.3,y:442.7,alpha:0.136},0).wait(1).to({x:122.5,y:416.6,alpha:0.182},0).wait(1).to({x:122.6,y:391.4,alpha:0.227},0).wait(1).to({x:122.7,y:367,alpha:0.273},0).wait(1).to({x:122.8,y:343.4,alpha:0.318},0).wait(1).to({x:122.9,y:320.6,alpha:0.364},0).wait(1).to({x:123,y:312.9,alpha:0.409},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.591},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.773},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.864},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.955},0).wait(1).to({alpha:1},0).wait(44).to({_off:true},1).wait(164));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.1,220.6,227.5,38.8);


// symbols:
(lib.shutterstock_196863584_laptop = function() {
	this.initialize(img.shutterstock_196863584_laptop);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,668);


(lib.plaat_defeps = function() {
	this.initialize();

	// plaat_def.eps
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AH0AAQAAjOiTiSQiSiTjPAAQjOAAiSCTQiTCSAADOQAADPCTCSQCSCTDOAAQDPAACSiTQCTiSAAjPIAAAAABqhpQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsIAAAAAiAlUQgQAEgYAMQgwAZgtAsQgtAugZAwQgMAYgDAPIgngIQAEgTAOgcQAbg3AzgzQAzgyA3gcQAbgOAUgEIAIAnAiuiuQgXAXgNAZQgGAMgCAIIgngJQACgKAJgSQAPgfAdgdQAdgcAegQQARgIAMgDIAIAoQgIACgMAGQgZANgXAXIAAAA").cp();
	this.shape.setTransform(50,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAgaQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIQgIgIAAgLQAAgKAIgIQAIgIAKAAIAAAA").cp();
	this.shape_1.setTransform(50,50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AG6AAQAAC3iBCCQiCCBi3AAQi2AAiCiBQiBiCAAi3QAAi2CBiCQCCiBC2AAQC3AACCCBQCBCCAAC2IAAAA").cp();
	this.shape_2.setTransform(51.3,47.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.mclaptoptittel = function() {
	this.initialize();

	// Laag 1
	this.text = new cjs.Text("Met je laptop!", "bold 30px ");
	this.text.lineHeight = 32;
	this.text.setTransform(-4.9,-21.9);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,-21.9,192.6,40);


(lib.mclaptop = function() {
	this.initialize();

	// Laag 1
	this.instance = new lib.shutterstock_196863584_laptop();
	this.instance.setTransform(-499.9,-334.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-499.9,-334.9,1000,668);


(lib.mcgeldtitel = function() {
	this.initialize();

	// Laag 1
	this.text_1 = new cjs.Text("Niet goed, geld terug!", "bold 30px ");
	this.text_1.lineHeight = 32;
	this.text_1.setTransform(-3.9,-31.9);

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.9,-31.9,292.6,40);


(lib.mcdjtitel = function() {
	this.initialize();

	// Laag 1
	this.text_2 = new cjs.Text("Wordt een DJ!", "bold 30px ");
	this.text_2.lineHeight = 32;
	this.text_2.setTransform(-1.9,-31.9);

	this.addChild(this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-31.9,200,40);


(lib.logozwart_outlineseps = function() {
	this.initialize();

	// logozwart_outlines.eps
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B2B2A").s().p("AB4CnIjvAAIAAlOIBJAAIAAEMICmAAIAABC").cp();
	this.shape_3.setTransform(577.2,46.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B2B2A").s().p("ABHifQAhAOAYAXQAYAYANAfQANAgAAAjIAAAAQAAAjgNAgQgOAfgYAYQgYAYggANQghAOgmAAQgnAAgggOQgfgNgZgYQgYgWgNggQgNggAAgkIAAAAQAAgjANgfQAOggAXgXQAZgYAggOQAhgNAlAAQAmAAAhANIAAAAAAAhoQgWAAgSAIQgTAIgNAOQgNAPgHATQgIATAAAVIAAAAQAAAVAIATQAHAUAOAOQAOAOASAJQARAIAWAAQAXAAASgIQAUgJALgOQAOgOAHgTQAIgTAAgWIAAAAQAAgUgIgTQgHgTgOgPQgOgPgSgIQgTgIgVAAIAAAA").cp();
	this.shape_4.setTransform(537.1,46.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B2B2A").s().p("ABlAAQAAgUgIgTQgHgTgOgPQgOgPgSgIQgUgIgUAAQgWAAgSAIQgTAIgNAOQgNAPgIATQgHATAAAVIAAAAQAAAVAHATQAIAUAOAOQANAOATAJQARAIAWAAQAXAAASgIQATgJAMgOQANgOAIgTQAIgTAAgWIAAAAABHifQAhAOAYAXQAYAYANAfQANAgAAAjIAAAAQAAAjgOAgQgNAfgYAYQgYAYggANQghAOgmAAQgnAAgggOQgfgNgZgYQgYgWgNggQgNggAAgkIAAAAQAAgjANgfQAOggAXgXQAYgYAhgOQAhgNAlAAQAmAAAhANIAAAA").cp();
	this.shape_5.setTransform(492.7,46.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B2B2A").s().p("ACNinIAAFOIhJAAIAAiHIiHAAIAACHIhJAAIAAlOIBJAAIAACFICHAAIAAiFIBJAA").cp();
	this.shape_6.setTransform(450.5,46.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B2B2A").s().p("AgxhKQgOAQgGASQgIATAAAVIAAAAQAAAVAIATQAHATANAPQAMAOASAJQASAIAUAAQAdAAAUgLQAUgLAUgRIAvAvQgOAPgNAKQgOALgRAIQgQAIgUAEQgVAEgYAAQgjAAgfgNQgggOgXgXQgXgYgMgfQgOgfAAglIAAAAQAAgkAOgeQAMgfAXgYQAXgYAggOQAhgNAlAAQAZAAASADQAPADAUAIQAPAGAOAKQAOALALAKIgvA3QgSgRgWgLQgVgKgZAAQgTAAgSAIQgTAIgMAOIAAAA").cp();
	this.shape_7.setTransform(411.3,46.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B2B2A").s().p("AgjhiQgKAJAAAMIAAABQAAAIADAGQACAGAJAFQAJAFAOAEIAhAKQAbAHATAIQASAIAQAKQANAMAHAQQAHARAAAVIAAABQAAAZgJATQgJAUgQANQgRAOgWAGQgXAHgbAAQgkAAglgNQglgNgegcIArg0QAWASAaAMQAXALAcAAQAYAAAMgJQAMgIAAgPIAAgBQAAgGgCgHQgDgFgIgFQgGgEgOgFQgGgDgbgIQgagGgUgHQgVgJgOgJQgPgKgHgRQgIgRAAgZIAAgBQAAgWAIgUQAJgSAPgOQAPgMAWgIQAVgHAbAAQAkAAAeALQAdAKAcAVIgnA4QgVgPgXgJQgVgJgUAAQgVAAgMAIIAAAA").cp();
	this.shape_8.setTransform(373.9,46.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B2B2A").s().p("AB9hlIiyAAIAABFICcAAIAAA/IicAAIAABHIC0AAIAABBIj9AAIAAlOID7AAIAABC").cp();
	this.shape_9.setTransform(194.8,46.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B2B2A").s().p("ACVinIAAFOIg/AAIihjTIAADTIhJAAIAAlOIBFAAICbDNIAAjNIBJAA").cp();
	this.shape_10.setTransform(155.4,46.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B2B2A").s().p("AgkinIBIAAIAAFOIhIAAIAAlO").cp();
	this.shape_11.setTransform(124.8,46.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B2B2A").s().p("AguinIAAEMICmAAIAABCIjvAAIAAlOIBJAA").cp();
	this.shape_12.setTransform(99.5,46.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B2B2A").s().p("ACVinIAAFOIg/AAIihjTIAADTIhJAAIAAlOIBEAAICcDNIAAjNIBJAA").cp();
	this.shape_13.setTransform(60.8,46.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B2B2A").s().p("AAAisQAnAAAhANQAgAOAYAXQAYAYANAfQANAfAAAkIAAAAQAAAjgNAgQgOAggYAXQgXAYghANQghAOgmAAQgnAAgfgOQghgNgYgYQgYgYgNgeQgNggAAgkIAAAAQAAgjANgfQANgfAZgYQAXgYAhgOQAhgNAlAAIAAAAAgohgQgSAIgOAOQgNAOgHAUQgIATAAAVIAAAAQAAAVAIATQAIAUANAOQAMANAUAKQASAIAVAAQAXAAASgIQASgIAOgPQANgOAHgTQAIgTAAgWIAAAAQAAgUgIgTQgHgTgOgPQgNgOgTgJQgUgIgUAAQgWAAgSAIIAAAA").cp();
	this.shape_14.setTransform(17.9,46.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B2B2A").s().p("AExnFIAAJIQAABRgWA7QgWA6gpAqQgqApg6AVQg7AVhIAAQhpAAhHgoQhHgogug3IB8iKQAmAqAoAYQAnAYAvAAQA3AAAfgjQAggjAAhPIAAo/IDLAA").cp();
	this.shape_15.setTransform(317.6,45.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B2B2A").s().p("AGcAAQAABfgiBRQgjBTg/A7Qg/A8hYAjQhYAihnAAIldAAIAAt9IFdAAQBoAABXAhQBZAjA+A7QA/A9AjBRQAiBSAABeIAAABAC6hrQgTgygkgkQgkglgxgTQgxgUg7AAIiYAAIAAIbICYAAQA8AAAwgUQAygSAjglQAkgkATgwQAUgwAAg9IAAgCQAAg6gUgxIAAAA").cp();
	this.shape_16.setTransform(266.1,44.8);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,589.3,90.9);


(lib.logowit_outlineseps = function() {
	this.initialize();

	// logowit_outlines.eps
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AB4CnIjvAAIAAlOIBJAAIAAEMICmAAIAABC").cp();
	this.shape_17.setTransform(577.2,46.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABHifQAhAOAYAXQAYAYANAfQANAgAAAjIAAAAQAAAjgNAgQgOAfgYAYQgYAYggANQghAOgmAAQgnAAgggOQgfgNgZgYQgYgWgNggQgNggAAgkIAAAAQAAgjANgfQAOggAXgXQAZgYAggOQAhgNAlAAQAmAAAhANIAAAAAAAhoQgWAAgSAIQgTAIgNAOQgNAPgHATQgIATAAAVIAAAAQAAAVAIATQAHAUAOAOQAOAOASAJQARAIAWAAQAXAAASgIQAUgJALgOQAOgOAHgTQAIgTAAgWIAAAAQAAgUgIgTQgHgTgOgPQgOgPgSgIQgTgIgVAAIAAAA").cp();
	this.shape_18.setTransform(537.1,46.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABlAAQAAgUgIgTQgHgTgOgPQgOgPgSgIQgUgIgUAAQgWAAgSAIQgTAIgNAOQgNAPgIATQgHATAAAVIAAAAQAAAVAHATQAIAUAOAOQANAOATAJQARAIAWAAQAXAAASgIQATgJAMgOQANgOAIgTQAIgTAAgWIAAAAABHifQAhAOAYAXQAYAYANAfQANAgAAAjIAAAAQAAAjgOAgQgNAfgYAYQgYAYggANQghAOgmAAQgnAAgggOQgfgNgZgYQgYgWgNggQgNggAAgkIAAAAQAAgjANgfQAOggAXgXQAYgYAhgOQAhgNAlAAQAmAAAhANIAAAA").cp();
	this.shape_19.setTransform(492.7,46.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ACNinIAAFOIhJAAIAAiHIiHAAIAACHIhJAAIAAlOIBJAAIAACFICHAAIAAiFIBJAA").cp();
	this.shape_20.setTransform(450.5,46.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgxhKQgOAQgGASQgIATAAAVIAAAAQAAAVAIATQAHATANAPQAMAOASAJQASAIAUAAQAdAAAUgLQAUgLAUgRIAvAvQgOAPgNAKQgOALgRAIQgQAIgUAEQgVAEgYAAQgjAAgfgNQgggOgXgXQgXgYgMgfQgOgfAAglIAAAAQAAgkAOgeQAMgfAXgYQAXgYAggOQAhgNAlAAQAZAAASADQAPADAUAIQAPAGAOAKQAOALALAKIgvA3QgSgRgWgLQgVgKgZAAQgTAAgSAIQgTAIgMAOIAAAA").cp();
	this.shape_21.setTransform(411.3,46.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgjhiQgKAJAAAMIAAABQAAAIADAGQACAGAJAFQAJAFAOAEIAhAKQAbAHATAIQASAIAQAKQANAMAHAQQAHARAAAVIAAABQAAAZgJATQgJAUgQANQgRAOgWAGQgXAHgbAAQgkAAglgNQglgNgegcIArg0QAWASAaAMQAXALAcAAQAYAAAMgJQAMgIAAgPIAAgBQAAgGgCgHQgDgFgIgFQgGgEgOgFQgGgDgbgIQgagGgUgHQgVgJgOgJQgPgKgHgRQgIgRAAgZIAAgBQAAgWAIgUQAJgSAPgOQAPgMAWgIQAVgHAbAAQAkAAAeALQAdAKAcAVIgnA4QgVgPgXgJQgVgJgUAAQgVAAgMAIIAAAA").cp();
	this.shape_22.setTransform(373.9,46.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AB9hlIiyAAIAABFICcAAIAAA/IicAAIAABHIC0AAIAABBIj9AAIAAlOID7AAIAABC").cp();
	this.shape_23.setTransform(194.8,46.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ACVinIAAFOIg/AAIihjTIAADTIhJAAIAAlOIBFAAICbDNIAAjNIBJAA").cp();
	this.shape_24.setTransform(155.4,46.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgkinIBIAAIAAFOIhIAAIAAlO").cp();
	this.shape_25.setTransform(124.8,46.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AguinIAAEMICmAAIAABCIjvAAIAAlOIBJAA").cp();
	this.shape_26.setTransform(99.5,46.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ACVinIAAFOIg/AAIihjTIAADTIhJAAIAAlOIBEAAICcDNIAAjNIBJAA").cp();
	this.shape_27.setTransform(60.8,46.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAAisQAnAAAhANQAgAOAYAXQAYAYANAfQANAfAAAkIAAAAQAAAjgNAgQgOAggYAXQgXAYghANQghAOgmAAQgnAAgfgOQghgNgYgYQgYgYgNgeQgNggAAgkIAAAAQAAgjANgfQANgfAZgYQAXgYAhgOQAhgNAlAAIAAAAAgohgQgSAIgOAOQgNAOgHAUQgIATAAAVIAAAAQAAAVAIATQAIAUANAOQAMANAUAKQASAIAVAAQAXAAASgIQASgIAOgPQANgOAHgTQAIgTAAgWIAAAAQAAgUgIgTQgHgTgOgPQgNgOgTgJQgUgIgUAAQgWAAgSAIIAAAA").cp();
	this.shape_28.setTransform(17.9,46.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AExnFIAAJIQAABRgWA7QgWA6gpAqQgqApg6AVQg7AVhIAAQhpAAhHgoQhHgogug3IB8iKQAmAqAoAYQAnAYAvAAQA3AAAfgjQAggjAAhPIAAo/IDLAA").cp();
	this.shape_29.setTransform(317.6,45.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AGcAAQAABfgiBRQgjBTg/A7Qg/A8hYAjQhYAihnAAIldAAIAAt9IFdAAQBoAABXAhQBZAjA+A7QA/A9AjBRQAiBSAABeIAAABAC6hrQgTgygkgkQgkglgxgTQgxgUg7AAIiYAAIAAIbICYAAQA8AAAwgUQAygSAjglQAkgkATgwQAUgwAAg9IAAgCQAAg6gUgxIAAAA").cp();
	this.shape_30.setTransform(266.1,44.8);

	this.addChild(this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,589.3,90.9);


(lib.dj_lichaameps = function() {
	this.initialize();

	// dj_lichaam.eps
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#252422").s().p("ABoj5IAAIGQAAANgKAJQgKAJgNAAIgCAAQgNAAgJgJQgJgJAAgNIAAkLQgBgEgCgEQgDgGgDAOIAAEMQAAANgKAKQgKAJgLAAIgCAAQgNAAgJgJQgJgKAAgNIgBnxIgQABIAADLQAAALgIAIQgIAGgKAAQgLAAgHgGQgHgHAAgMIAAjiIABgGQABgMAQgLQAhgXBCAAIA3AAIAfA3IAEgD").cp();
	this.shape_31.setTransform(10.5,46);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#252422").s().p("AAahPQAAgLAHgIQAIgIAKAAQAKAAAIAIQAHAIAAALIAKCGIAAAHQgCALgQALQggAXhDAAIg2AAIAAg4IB5gIIgKh6").cp();
	this.shape_32.setTransform(20.9,10.7);

	this.addChild(this.shape_32,this.shape_31);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.6,76.3);


(lib.dj_koptelefooneps = function() {
	this.initialize();

	// dj_koptelefoon.eps
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#252422").s("#FFFFFF").ss(0.1,0,0,4).p("AgDgfQgDAAgBACIAAA7QACADACAAIAHAAQAEgBAAgDIAAg5QAAgDgEAAIgHAA").cp();
	this.shape_33.setTransform(17,9.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#252422").s("#FFFFFF").ss(0.1,0,0,4).p("AgDgfQgDAAgBACIAAA7QACADACAAIAHAAQAEgBAAgDIAAg5QAAgDgEAAIgHAA").cp();
	this.shape_34.setTransform(4,9.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#252422").s().p("ABpAgQgBgWgOgIQgBgZgZgVQgbgUglAAQglAAgaAUQgaAUgBAbQgOAKABATQAAAOAHAJQAHAKAJAAIAHgCIAAgBIAAg8IAAgBIgDgBQACgVAUgPQAXgSAfAAQAeAAAYASQAPALAFAQIADAJIgDABIAAABIAAA8IAAABIAHABQAKAAAHgJQAHgKAAgNIAAAA").cp();
	this.shape_35.setTransform(10.5,6.5);

	this.addChild(this.shape_35,this.shape_34,this.shape_33);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,13);


(lib.handeps = function() {
	this.initialize();

	// hand.eps
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("EAbaglyQDNAACZCUQCYCVAADIMAAAAz4QAAKhodHmQkSD1ktB4QgTAMggAAI2fAAQmRAAmGo7QiZjgiulWQhhjAjImuQj/o3iGjGQh8irAIjHQAHjDCHiHQCUiUDQgDQDQgECPCOIFsFwMAAAgnHQAAjJCYiUQCYiUDOAAQDSAACWCRQCWCRAADJIAAUUQAAA1gmAlQglAmg1AAQg1AAglgmQglglAAg1IAA0OQAAhghLhGQhMhGhoAAQhqAAhKBHQhLBHAABkMAAAAsAQAAAmgWAhQgUAegjAUQgmAPglgJQgkgIgdgdIpEpQQhDhChoAEQhnAEhNBHQhIBIAIBwQAHBkA/BUQBVB3BxDiQBAB/CZFMQCjFjBbC4QCbE4CFDTQFbImEiAAIWFAAQEeh7DujmQGemQAAoQMAAAgz4QAAhkhLhHQhLhHhpAAQhpAAhLBGQhLBGAABgIAAcMQAAA1gmAlQglAkg1AAQg1AAglgkQglglAAg1IAA8MQAAjNCWiPQCViPDTAAIAAAA").cp();
	this.shape_36.setTransform(226.4,318.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAAvqQhoAAhLBGQhLBGAABfIAAdqQAAA1glAlQgmAmg0AAQg1AAglgmQgmglAAg1IAA9qQAAjNCWiPQCWiPDRAAQDNAACZCVQCYCUAADJIAAdjQAAA1gmAlQglAmg1AAQg0AAgmgmQglglAAg1IAA9jQAAhkhLhIQhLhGhpAAIAAAA").cp();
	this.shape_37.setTransform(324.7,167.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAAw6QhoAAhLBGQhLBGAABgMAAAAgJQAAA1glAlQgmAlg0AAQg1AAglglQgmglAAg1MAAAggJQAAjNCWiPQCWiPDRAAQDNAACZCUQCYCVAADIMAAAAgDQAAA1gmAlQglAlg1AAQg0AAgmglQglglAAg1MAAAggDQAAhkhLhHQhLhHhpAAIAAAA").cp();
	this.shape_38.setTransform(248.2,133.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("EAWBghgIAABNIB4hmIETAAIELB/IBNJ+MAAAAxyImrLjInfFLIoxBgIungsIlShTIlLlSIpev8Ioew8IhMkMICsj9IFrhMIDTDLIE+FKIBtAzIBzqvMgAggiqIBsgmIGShTIB/BMICgFGIAAoyIFch/ICsB/ICmCgIAAeYIAtE/IAA+4IDSiAICshAIDTBAIBMBzIBnDy").cp();
	this.shape_39.setTransform(222.7,307.6);

	this.addChild(this.shape_39,this.shape_38,this.shape_37,this.shape_36);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,452.9,612);


(lib.dj_hoofdeps = function() {
	this.initialize();

	// dj_hoofd.eps
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#252422").s().p("AAAg+QAaAAASATQATASAAAZQAAAagTASQgSATgaAAQgZAAgSgTQgTgSAAgaQAAgZATgSQASgTAZAAIAAAA").cp();
	this.shape_40.setTransform(6.3,6.3);

	this.addChild(this.shape_40);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.7,12.7);


(lib.dj_tafeleps = function() {
	this.initialize();

	// dj_tafel.eps
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#252422").s("#FFFFFF").ss(0.5,0,0,4).p("AAxATQAVgGAAgIQAAgDgDgCQADgCAAgCQAAgIgVgGQgVgGgcAAQgcAAgUAGQgVAGAAAIQAAADACABQgCACAAADQAAAIAVAGQAVAGAbAAQAcAAAVgGIAAAA").cp();
	this.shape_41.setTransform(33.5,2.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#252422").s("#FFFFFF").ss(0.5,0,0,4).p("ABDAAQADgCAAgCQAAgIgVgGQgVgGgcAAQgcAAgUAGQgVAGAAAIQAAADACABQgCACAAADQAAAIAVAGQAUAGAcAAQAcAAAVgGQAVgGAAgIQAAgDgDgCIAAAA").cp();
	this.shape_42.setTransform(16.5,2.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#252422").s("#FFFFFF").ss(0.5,0,0,4).p("AD1iTInpAAIAAEnIHpAAIAAkn").cp();
	this.shape_43.setTransform(25,22.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#252422").s("#FFFFFF").ss(0.5,0,0,4).p("ADNgiImOAAIgyBFIHoAAIgohF").cp();
	this.shape_44.setTransform(24.9,4.8);

	this.addChild(this.shape_44,this.shape_43,this.shape_42,this.shape_41);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0.3,49,36.7);


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


(lib.mctiteltafel = function() {
	this.initialize();

	// Laag 1
	this.instance_3 = new lib.logowit_outlineseps("synched",0);
	this.instance_3.setTransform(0,0,0.277,0.427,0,0,0,294.7,45.4);

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81.6,-19.3,163.3,38.8);


(lib.mctitel = function() {
	this.initialize();

	// Laag 1
	this.instance_4 = new lib.logozwart_outlineseps("synched",0);
	this.instance_4.setTransform(0,0,1,1,0,0,0,294.6,45.4);

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-294.5,-45.3,589.3,90.9);


(lib.mctafel = function() {
	this.initialize();

	// titel
	this.instance_5 = new lib.mctiteltafel();
	this.instance_5.setTransform(-1.9,-17.9);

	// tafel
	this.instance_6 = new lib.dj_tafeleps("synched",0);
	this.instance_6.setTransform(-0.1,0,4.014,6.123,0,0,0,24.9,18.6);

	this.addChild(this.instance_6,this.instance_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98.1,-112.3,196.7,224.7);


(lib.mchand = function() {
	this.initialize();

	// Laag 1
	this.instance_7 = new lib.handeps("synched",0);
	this.instance_7.setTransform(0,0,1,1,0,0,0,226.4,306);

	this.addChild(this.instance_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-226.3,-305.9,452.9,612);


(lib.mclichaam = function() {
	this.initialize();

	// Laag 1
	this.instance_8 = new lib.dj_lichaameps("synched",0);
	this.instance_8.setTransform(2.1,23,1,1,0,0,0,14.8,38.1);

	this.addChild(this.instance_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.7,-15,29.6,76.3);


(lib.mckoptelefoon = function() {
	this.initialize();

	// Laag 1
	this.instance_9 = new lib.dj_koptelefooneps("synched",0);
	this.instance_9.setTransform(0,110,17.476,17,0,0,0,10.5,6.5);

	this.addChild(this.instance_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-183.4,-0.4,367,221);


(lib.animkoptelefoon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Laag 1
	this.instance_10 = new lib.mckoptelefoon();
	this.instance_10.setTransform(-0.9,111.4,1,1,0,0,0,0,110.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1.19,y:85.5},4).to({scaleX:1,y:111.4},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.4,0.5,367,221);


(lib.mchoofd = function() {
	this.initialize();

	// Laag 1
	this.instance_11 = new lib.dj_hoofdeps("synched",0);
	this.instance_11.setTransform(-0.2,-0.2,11.858,11.857,0,0,0,6.3,6.3);

	this.addChild(this.instance_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.9,-74.9,150,150);


(lib.mcdj = function() {
	this.initialize();

	// Laag 1
	this.instance_12 = new lib.mchoofd();
	this.instance_12.setTransform(-1.4,-28.4,0.067,0.067);

	this.instance_13 = new lib.mclichaam();
	this.instance_13.setTransform(0,0,1,1,0,0,0,2,23);

	this.addChild(this.instance_13,this.instance_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.7,-38,29.6,76.3);


(lib.animlichaam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Laag 1
	this.instance_14 = new lib.mcdj();
	this.instance_14.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({y:-1.7},4).to({y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-38.1,29.6,76.3);


(lib.animdj = function() {
	this.initialize();

	// koptelefoon
	this.instance_15 = new lib.animkoptelefoon();
	this.instance_15.setTransform(0.6,-6.6,0.047,0.046,0,0,0,-1,112);

	// lichaam
	this.instance_16 = new lib.animlichaam();
	this.instance_16.setTransform(2,24);

	this.addChild(this.instance_16,this.instance_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.6,-14.1,29.6,76.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;