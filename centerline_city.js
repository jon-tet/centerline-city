function listenForExternalTriggers() {
    window.addEventListener('message', function(event) {
        // Optionally, validate the event's origin for security reasons
        if (event.origin !== "https://lumos-framework-cl-testing.webflow.io") {
            console.error("Received message from unauthorized origin:", event.origin);
            return; // Ignore messages from unauthorized origins
        }

        const data = event.data;
        if (data && data.trigger) {
            triggerAnimationBasedOnTrigger(data.trigger);
        }
    });
}

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



(lib.Base = function() {
	this.initialize(img.Base);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3170,1932);


(lib.BlueCar = function() {
	this.initialize(img.BlueCar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,62);


(lib.BlueEVCar = function() {
	this.initialize(img.BlueEVCar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,67);


(lib.DAS_Bushes = function() {
	this.initialize(img.DAS_Bushes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,147);


(lib.DAS_OFF_Base = function() {
	this.initialize(img.DAS_OFF_Base);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1019,599);


(lib.DAS_ON_Bldg_top = function() {
	this.initialize(img.DAS_ON_Bldg_top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,714);


(lib.DAS_ON_Glow = function() {
	this.initialize(img.DAS_ON_Glow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1776,1356);


(lib.DAS_ON_Inside = function() {
	this.initialize(img.DAS_ON_Inside);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,425,777);


(lib.DC_base_ON = function() {
	this.initialize(img.DC_base_ON);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,471);


(lib.DC_Ground = function() {
	this.initialize(img.DC_Ground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,705,407);


(lib.DC_ON_bldg_top = function() {
	this.initialize(img.DC_ON_bldg_top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,315);


(lib.DC_ON_Glow = function() {
	this.initialize(img.DC_ON_Glow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1462,1163);


(lib.Emergency_Outside_Front = function() {
	this.initialize(img.Emergency_Outside_Front);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,478,221);


(lib.Emergency_Responder_Ground = function() {
	this.initialize(img.Emergency_Responder_Ground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,686,397);


(lib.ER_OFF_Bldg = function() {
	this.initialize(img.ER_OFF_Bldg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,338,380);


(lib.ER_ON_bldg_shadow = function() {
	this.initialize(img.ER_ON_bldg_shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,315,186);


(lib.ER_ON_GLOW = function() {
	this.initialize(img.ER_ON_GLOW);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1442,1154);


(lib.ER_ON_RED_GLOW = function() {
	this.initialize(img.ER_ON_RED_GLOW);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,80);


(lib.ER_Trees_Back = function() {
	this.initialize(img.ER_Trees_Back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,168);


(lib.EV_Base = function() {
	this.initialize(img.EV_Base);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,879,555);


(lib.EV_ON_Glow = function() {
	this.initialize(img.EV_ON_Glow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1636,1291);


(lib.EV_ON_Shadow = function() {
	this.initialize(img.EV_ON_Shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,397,231);


(lib.EV_ON_Station = function() {
	this.initialize(img.EV_ON_Station);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,410,335);


(lib.EV_ON_Station_Glow = function() {
	this.initialize(img.EV_ON_Station_Glow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,493,325);


(lib.Firetruck = function() {
	this.initialize(img.Firetruck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,160);


(lib.GreenCar = function() {
	this.initialize(img.GreenCar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,74);


(lib.House_1_on = function() {
	this.initialize(img.House_1_on);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,210);


(lib.House_1_plants = function() {
	this.initialize(img.House_1_plants);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,41);


(lib.House_2_on = function() {
	this.initialize(img.House_2_on);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,202);


(lib.House_3_on = function() {
	this.initialize(img.House_3_on);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,191);


(lib.Houses_Ground = function() {
	this.initialize(img.Houses_Ground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,975,574);


(lib.Houses_ON_Glow = function() {
	this.initialize(img.Houses_ON_Glow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1731,1330);


(lib.houses_shad_1 = function() {
	this.initialize(img.houses_shad_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,102);


(lib.houses_shad_2 = function() {
	this.initialize(img.houses_shad_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,104);


(lib.houses_shad_3 = function() {
	this.initialize(img.houses_shad_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,133);


(lib.Houses_Trees_4 = function() {
	this.initialize(img.Houses_Trees_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,73);


(lib.Houses_Trees_5 = function() {
	this.initialize(img.Houses_Trees_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,115);


(lib.HVAC_glow_on = function() {
	this.initialize(img.HVAC_glow_on);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1401,1301);


(lib.HVAC_ON_BASE = function() {
	this.initialize(img.HVAC_ON_BASE);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,644,545);


(lib.HVAC_TOP_ANIMATION = function() {
	this.initialize(img.HVAC_TOP_ANIMATION);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,565,414);


(lib.Powerlines_OFF = function() {
	this.initialize(img.Powerlines_OFF);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2285,866);


(lib.Powerlines_OFF_ON = function() {
	this.initialize(img.Powerlines_OFF_ON);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2306,900);


(lib.Powerlines_ON_single_spark = function() {
	this.initialize(img.Powerlines_ON_single_spark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,29);


(lib.street_light_1 = function() {
	this.initialize(img.street_light_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,87);


(lib.street_light_2 = function() {
	this.initialize(img.street_light_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,99);


(lib.street_light_3 = function() {
	this.initialize(img.street_light_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,111);


(lib.street_light_4 = function() {
	this.initialize(img.street_light_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,121);


(lib.street_light_5 = function() {
	this.initialize(img.street_light_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,121);


(lib.SUV = function() {
	this.initialize(img.SUV);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,89);


(lib.traffic_light_1 = function() {
	this.initialize(img.traffic_light_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,126);


(lib.traffic_light_2 = function() {
	this.initialize(img.traffic_light_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,96);


(lib.traffic_light_3 = function() {
	this.initialize(img.traffic_light_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,115);


(lib.WW_OFF_Bldg = function() {
	this.initialize(img.WW_OFF_Bldg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,596,649);


(lib.WW_ON_Glow = function() {
	this.initialize(img.WW_ON_Glow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1352,1130);// helper functions:

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


(lib.ww_on_glow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WW_ON_Glow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1352,1130);


(lib.vehicles_green_car_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.GreenCar();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vehicles_green_car_mc, new cjs.Rectangle(0,0,102,74), null);


(lib.vehicles_firetruck_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Firetruck();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vehicles_firetruck_mc, new cjs.Rectangle(0,0,200,160), null);


(lib.vehicles_blue_ev_car_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BlueEVCar();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vehicles_blue_ev_car_mc, new cjs.Rectangle(0,0,95,67), null);


(lib.vehicles_blue_car_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BlueCar();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vehicles_blue_car_mc, new cjs.Rectangle(0,0,92,62), null);


(lib.vehicles_black_suv_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.SUV();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vehicles_black_suv_mc, new cjs.Rectangle(0,0,101,89), null);


(lib.stoplight_glow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","rgba(255,0,0,0)"],[0,0.714],0,0,0,0,0,9).s().p("AgdBLQgQgGgMgMQgYgYAAghQAAghAYgXQAXgXAiAAQAiAAAYAXQAYAXAAAhQAAAhgYAYQgNAMgPAGQgOAFgQAAQgQAAgNgFg");
	this.shape.setTransform(8.175,7.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stoplight_glow, new cjs.Rectangle(0,0,16.4,16), null);


(lib.powerlines_on_spark_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Powerlines_ON_single_spark();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.powerlines_on_spark_anim, new cjs.Rectangle(0,0,33,29), null);


(lib.powerlines_on_glow_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Powerlines_OFF_ON();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.powerlines_on_glow_mc, new cjs.Rectangle(0,0,2306,900), null);


(lib.powerlines_hit_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhDuARqMA0Wgd/IdrtcMAxEAWMIGkL3IpYmQMgukgYrIkEBkI6jPUI4sPTIhkCgItdG4QteG4gHAAg");
	this.shape.setTransform(447.475,164.975);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,895,330);


(lib.hvac_on_top_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HVAC_TOP_ANIMATION();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hvac_on_top_mc, new cjs.Rectangle(0,0,565,414), null);


(lib.hvac_on_glow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HVAC_glow_on();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hvac_on_glow, new cjs.Rectangle(0,0,1401,1301), null);


(lib.houses_on_glow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Houses_ON_Glow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.houses_on_glow, new cjs.Rectangle(0,0,1731,1330), null);


(lib.house_03_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.House_3_on();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.house_03_anim, new cjs.Rectangle(0,0,296,191), null);


(lib.house_02_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.House_2_on();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.house_02_anim, new cjs.Rectangle(0,0,225,202), null);


(lib.house_01_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.House_1_on();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.house_01_anim, new cjs.Rectangle(0,0,218,210), null);


(lib.ev_station_on_glow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.EV_ON_Station_Glow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ev_station_on_glow, new cjs.Rectangle(0,0,493,325), null);


(lib.ev_station_gas_pumps_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.EV_ON_Station();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ev_station_gas_pumps_mc, new cjs.Rectangle(0,0,410,335), null);


(lib.ev_on_glow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.EV_ON_Glow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ev_on_glow, new cjs.Rectangle(0,0,1636,1291), null);


(lib.er_on_top_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ER_OFF_Bldg();
	this.instance.setTransform(0,0,0.391,0.391);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.er_on_top_mc, new cjs.Rectangle(0,0,132.2,148.6), null);


(lib.er_on_red_glow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ER_ON_RED_GLOW();
	this.instance.setTransform(0,0,0.391,0.391);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.er_on_red_glow, new cjs.Rectangle(0,0,26.6,31.3), null);


(lib.er_on_glow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ER_ON_GLOW();
	this.instance.setTransform(0,0,0.391,0.391);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.er_on_glow, new cjs.Rectangle(0,0,563.8,451.2), null);


(lib.dc_on_top_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.DC_ON_bldg_top();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dc_on_top_mc, new cjs.Rectangle(0,0,291,315), null);


(lib.dc_on_glow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.DC_ON_Glow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dc_on_glow, new cjs.Rectangle(0,0,1462,1163), null);


(lib.das_on_glow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.DAS_ON_Glow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.das_on_glow, new cjs.Rectangle(0,0,1776,1356), null);


(lib.DAS_ON_bldg_top_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.DAS_ON_Bldg_top();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DAS_ON_bldg_top_mc, new cjs.Rectangle(0,0,333,714), null);


(lib.circle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,255,0)","rgba(87,127,197,0.2)"],[0.678,1],0,0,0,0,0,101.4).s().p("ArCLDQklklAAmeQAAmdElklQElklGdAAQGeAAElElQElElAAGdQAAGeklElQklElmeAAQmdAAklklg");
	this.shape.setTransform(100,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.circle, new cjs.Rectangle(0,0,200,200), null);


(lib.base_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A/KAKIfjyRIeyRkMggBASrg");
	this.shape.setTransform(208.475,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC33").s().p("A/KAKIfjyRIeyRkMggBASrg");
	this.shape_1.setTransform(208.475,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,409,242);


(lib.vehicles_suv_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.vehicles_black_suv_mc();
	this.instance.setTransform(414.3,-164.95,1,1,0,0,0,50.5,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:70.05,y:33.45},623,cjs.Ease.quadInOut).wait(93).to({x:-1338.9,y:845.35},1056,cjs.Ease.quadInOut).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1389.4,-209.4,1854.2,1099.3);


(lib.vehicles_blue_car_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.vehicles_blue_car_mc();
	this.instance.setTransform(-253.9,149.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:806.7,y:-455.3},729,cjs.Ease.quadInOut).wait(31).to({x:1521.3,y:-862.55},977,cjs.Ease.quadInOut).wait(63));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-253.9,-862.5,1867.2,1073.6);


(lib.stop_light_cycle_perp_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// green
	this.instance = new lib.stoplight_glow();
	this.instance.setTransform(8.5,20.4,1,1,0,0,0,8.2,8);
	this.instance._off = true;
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,20,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(359).to({_off:false},0).to({_off:true},241).wait(1200));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(359).to(new cjs.ColorFilter(0,0,0,1,0,255,0,0), 0).wait(1200));

	// yellow
	this.instance_1 = new lib.stoplight_glow();
	this.instance_1.setTransform(8.55,14.2,1,1,0,0,0,8.2,8);
	this.instance_1._off = true;
	var instance_1Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-2,-2,20,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(600).to({_off:false},0).to({_off:true},70).wait(1130));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(600).to(new cjs.ColorFilter(0,0,0,1,255,255,0,0), 0).wait(1130));

	// red
	this.instance_2 = new lib.stoplight_glow();
	this.instance_2.setTransform(8.2,8,1,1,0,0,0,8.2,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},359).wait(311).to({_off:false,x:8.6},0).wait(1130));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:359, endFrame:359, x:-2, y:-2, w:20, h:20});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-2, y:-2, w:20, h:20});
	this.filterCacheList.push({instance: this.instance_1, startFrame:600, endFrame:600, x:-2, y:-2, w:20, h:20});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:0, x:-2, y:-2, w:20, h:20});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.8,28.4);


(lib.stop_light_cycle_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// green
	this.instance = new lib.stoplight_glow();
	this.instance.setTransform(7.3,22.4,1,1,0,0,0,8.2,8);
	var instanceFilter_1 = new cjs.ColorFilter(0,0,0,1,0,255,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,20,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},256).wait(460).to({_off:false},0).wait(1084));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(460).to(new cjs.ColorFilter(0,0,0,1,0,255,0,0), 0).wait(1084));

	// yellow
	this.instance_1 = new lib.stoplight_glow();
	this.instance_1.setTransform(7.35,15.4,1,1,0,0,0,8.2,8);
	this.instance_1._off = true;
	var instance_1Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-2,-2,20,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(256).to({_off:false},0).to({_off:true},67).wait(1477));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(256).to(new cjs.ColorFilter(0,0,0,1,255,255,0,0), 0).wait(1477));

	// red
	this.instance_2 = new lib.stoplight_glow();
	this.instance_2.setTransform(8.2,8,1,1,0,0,0,8.2,8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(323).to({_off:false},0).to({_off:true},393).wait(1084));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:716, endFrame:716, x:-2, y:-2, w:20, h:20});
	this.filterCacheList.push({instance: this.instance_1, startFrame:256, endFrame:256, x:-2, y:-2, w:20, h:20});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:0, x:-2, y:-2, w:20, h:20});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,0,17.299999999999997,30.4);


(lib.red_glow_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.er_on_red_glow();
	this.instance.setTransform(13.3,15.7,1,1,0,0,0,13.3,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.red_glow_animation, new cjs.Rectangle(0,0,26.6,31.3), null);


(lib.radial_circle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_58 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(58).call(this.frame_58).wait(1));

	// Layer_1
	this.instance = new lib.circle();
	this.instance.setTransform(100,100,0.13,0.13,0,0,0,100,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:99.9,scaleX:11.7918,scaleY:14.9851,x:98.55,y:74,alpha:0},58).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1079.4,-1424.5,2358.3,2997);


(lib.powerlines_ON_spark_mc_right = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.powerlines_on_spark_anim();
	this.instance.setTransform(1378.7,-716.35,1,1,0,0,0,16.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1378.7,-716.3,1397.2,-705.6,1419.9,-693.8,1443.1,-681.8,1496.8,-670.7,1523.7,-665.1,1545.9,-661.9,1550.3,-658.3,1554.6,-654.7,1565.6,-645.8,1577.3,-637.1,1614.7,-609.1,1645.1,-593.5,1675.5,-577.9,1753.8,-547.3,1793,-532.1,1826.1,-519.9,1829,-517.2,1831.9,-514.5,1839.6,-507.6,1848.7,-500.1,1877.9,-476.5,1910.7,-457.3,1943.5,-438.1,2002.2,-412.2,2031.6,-399.2,2054.4,-390.1]}},102).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1362.2,-730.8,708.8,355.19999999999993);


(lib.powerlines_ON_spark_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.powerlines_on_spark_anim();
	this.instance.setTransform(-77.5,42.5,1,1,0,0,0,16.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-77.4,42.5,-29.3,35.1,28.3,9.3,61.7,-5.6,105.3,-30.6,136.1,-48.3,149.1,-56.2,177.9,-73.7,201.6,-90.5,266.9,-137,306.8,-188.2,312.7,-195.7,318.6,-203.3,342.8,-212.8,366.9,-222.4,422.5,-245.1,459.3,-263.5,534.8,-301.2,600.7,-336.9,702.1,-391.9,727.8,-414.3,730.6,-417,733.4,-419.7,740.3,-426.4,746.5,-433,766.3,-454.2,771.5,-466.8,800.7,-471.7,839.1,-484.2,911.1,-507.5,997,-551,1081.3,-593.7,1149.4,-632.1,1168.4,-642.8,1182.1,-650.9]}},176).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-665.4,1292.7,722.4);


(lib.hvac_on_top_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// Layer_1
	this.instance = new lib.hvac_on_top_mc();
	this.instance.setTransform(282.5,207,1,1,0,0,0,282.5,207);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:11.4,alpha:0},59,cjs.Ease.quadOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-195.6,565,609.6);


(lib.hvac_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HVAC_TOP_ANIMATION_png
	this.hvac_on_top_anim = new lib.hvac_on_top_anim();
	this.hvac_on_top_anim.name = "hvac_on_top_anim";
	this.hvac_on_top_anim.setTransform(726.5,691,1,1,0,0,0,282.5,207);

	this.timeline.addTween(cjs.Tween.get(this.hvac_on_top_anim).wait(1));

	// HVAC_ON_BASE_png
	this.instance = new lib.HVAC_ON_BASE();
	this.instance.setTransform(380,377);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// HVAC_glow_on_png
	this.hvac_on_glow = new lib.hvac_on_glow();
	this.hvac_on_glow.name = "hvac_on_glow";
	this.hvac_on_glow.setTransform(701.5,649.5,1,1,0,0,0,700.5,650.5);
	this.hvac_on_glow.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.hvac_on_glow).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hvac_mc, new cjs.Rectangle(1,-1,1401,1301), null);


(lib.houses_on_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// house_01_anim
	this.instance = new lib.house_01_anim();
	this.instance.setTransform(109,238,1,1,0,0,0,109,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({y:146},44,cjs.Ease.quadOut).wait(11));

	// House_2_on_png
	this.instance_1 = new lib.house_02_anim();
	this.instance_1.setTransform(375.5,341,1,1,0,0,0,112.5,101);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:249},44,cjs.Ease.quadOut).wait(16));

	// House_1_on_png
	this.instance_2 = new lib.house_01_anim();
	this.instance_2.setTransform(617,192,1,1,0,0,0,109,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({y:100},44,cjs.Ease.quadOut).wait(1));

	// Houses_Trees_5_png
	this.instance_3 = new lib.Houses_Trees_5();
	this.instance_3.setTransform(194,94);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	// House_3_on_png
	this.instance_4 = new lib.house_03_anim();
	this.instance_4.setTransform(375,95.5,1,1,0,0,0,148,95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({y:3.5},44,cjs.Ease.quadOut).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-92,726,534);


(lib.houses_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// House_1_plants_png
	this.instance = new lib.House_1_plants();
	this.instance.setTransform(619,708);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// House_2_on_png
	this.houses_on_anim = new lib.houses_on_anim();
	this.houses_on_anim.name = "houses_on_anim";
	this.houses_on_anim.setTransform(888,627,1,1,0,0,0,363,221);

	this.timeline.addTween(cjs.Tween.get(this.houses_on_anim).wait(1));

	// houses_shad_2_png
	this.instance_1 = new lib.houses_shad_2();
	this.instance_1.setTransform(809,738);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// houses_shad_1_png_copy
	this.instance_2 = new lib.houses_shad_1();
	this.instance_2.setTransform(1045,597);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// houses_shad_1_png
	this.instance_3 = new lib.houses_shad_1();
	this.instance_3.setTransform(534,647);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// houses_shad_3_png
	this.instance_4 = new lib.houses_shad_3();
	this.instance_4.setTransform(770,464);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Houses_Trees_4_png
	this.instance_5 = new lib.Houses_Trees_4();
	this.instance_5.setTransform(1015,686);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Houses_Ground_png
	this.instance_6 = new lib.Houses_Ground();
	this.instance_6.setTransform(378,378);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Houses_ON_Glow_png
	this.houses_on_glow = new lib.houses_on_glow();
	this.houses_on_glow.name = "houses_on_glow";
	this.houses_on_glow.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.houses_on_glow).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.houses_mc, new cjs.Rectangle(0,0,1731,1330), null);


(lib.ev_on_station_top_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// EV_ON_Station_Glow_png
	this.instance = new lib.ev_station_on_glow();
	this.instance.setTransform(246.5,162.5,1,1,0,0,0,246.5,162.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:70.4},58,cjs.Ease.quadOut).wait(1));

	// EV_ON_Station_png
	this.instance_1 = new lib.ev_station_gas_pumps_mc();
	this.instance_1.setTransform(247,206.5,1,1,0,0,0,205,167.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:114.4},58,cjs.Ease.quadOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-92.1,493,466.1);


(lib.er_on_top_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// red_glow
	this.instance = new lib.red_glow_animation();
	this.instance.setTransform(96.05,76.6,1,1,0,0,0,13.3,15.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:49.1},58,cjs.Ease.quadOut).wait(1));

	// Layer_1
	this.instance_1 = new lib.er_on_top_mc();
	this.instance_1.setTransform(66,74.3,1,1,0,0,0,66,74.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:44.3},59,cjs.Ease.quadOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-30,132.2,178.6);


(lib.Emergency_Responder_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Emergency_Outside_Front_png
	this.instance = new lib.Emergency_Outside_Front();
	this.instance.setTransform(35,97,0.391,0.391);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ER_OFF_Bldg_png
	this.er_on_top_anim = new lib.er_on_top_anim();
	this.er_on_top_anim.name = "er_on_top_anim";
	this.er_on_top_anim.setTransform(116,74.3,1,1,0,0,0,66,74.3);

	this.timeline.addTween(cjs.Tween.get(this.er_on_top_anim).wait(1));

	// ER_ON_bldg_shadow_png
	this.instance_1 = new lib.ER_ON_bldg_shadow();
	this.instance_1.setTransform(52,76,0.391,0.391);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// ER_Trees_Back_png
	this.instance_2 = new lib.ER_Trees_Back();
	this.instance_2.setTransform(162,43,0.391,0.391);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Emergency_Responder_Ground_png
	this.instance_3 = new lib.Emergency_Responder_Ground();
	this.instance_3.setTransform(0,46,0.391,0.391);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// GLOW
	this.er_on_glow = new lib.er_on_glow();
	this.er_on_glow.name = "er_on_glow";
	this.er_on_glow.setTransform(133.9,123.6,1,1,0,0,0,281.9,225.6);
	this.er_on_glow.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.er_on_glow).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Emergency_Responder_mc, new cjs.Rectangle(-148,-102,563.8,451.2), null);


(lib.dc_on_top_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// Layer_1
	this.instance = new lib.dc_on_top_mc();
	this.instance.setTransform(145.5,157.5,1,1,0,0,0,145.5,157.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-38.1,alpha:0},59,cjs.Ease.quadOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-195.6,291,510.6);


(lib.data_center_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// DC_ON_bldg_top_png
	this.dc_on_top_anim = new lib.dc_on_top_anim();
	this.dc_on_top_anim.name = "dc_on_top_anim";
	this.dc_on_top_anim.setTransform(741.5,501.5,1,1,0,0,0,145.5,157.5);

	this.timeline.addTween(cjs.Tween.get(this.dc_on_top_anim).wait(1));

	// DC_base_ON_png
	this.instance = new lib.DC_base_ON();
	this.instance.setTransform(478,250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// DC_Ground_png
	this.instance_1 = new lib.DC_Ground();
	this.instance_1.setTransform(368,375);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// DC_ON_Glow_png
	this.dc_on_glow = new lib.dc_on_glow();
	this.dc_on_glow.name = "dc_on_glow";
	this.dc_on_glow.setTransform(721,578.5,1,1,0,0,0,731,581.5);
	this.dc_on_glow.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.dc_on_glow).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.data_center_mc, new cjs.Rectangle(-10,-3,1462,1163), null);


(lib.DAS_ON_Bldg_top_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// Layer_1
	this.instance = new lib.DAS_ON_bldg_top_mc();
	this.instance.setTransform(166.5,357,1,1,0,0,0,166.5,357);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:164.75,alpha:0},59,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-192.2,333,906.2);


(lib.das_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// DAS_Bushes_png
	this.instance = new lib.DAS_Bushes();
	this.instance.setTransform(953,681);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// DAS_ON_Bldg_top_png
	this.das_on_top_anim_mc = new lib.DAS_ON_Bldg_top_animation();
	this.das_on_top_anim_mc.name = "das_on_top_anim_mc";
	this.das_on_top_anim_mc.setTransform(930.5,462,1,1,0,0,0,166.5,357);

	this.timeline.addTween(cjs.Tween.get(this.das_on_top_anim_mc).wait(1));

	// DAS_ON_Inside_png
	this.instance_1 = new lib.DAS_ON_Inside();
	this.instance_1.setTransform(709,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// DAS_OFF_Base_png
	this.instance_2 = new lib.DAS_OFF_Base();
	this.instance_2.setTransform(377,378);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// DAS_ON_Glow_png
	this.das_on_glow = new lib.das_on_glow();
	this.das_on_glow.name = "das_on_glow";
	this.das_on_glow.setTransform(888,678,1,1,0,0,0,888,678);
	this.das_on_glow.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.das_on_glow).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.das_mc, new cjs.Rectangle(0,0,1776,1356), null);


(lib.vehicles_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Blue_EV_Car_png
	this.instance = new lib.vehicles_blue_ev_car_mc();
	this.instance.setTransform(133.5,172.5,1,1,0,0,0,47.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Blue_Car_png
	this.instance_1 = new lib.vehicles_blue_car_animation();
	this.instance_1.setTransform(-605,368,1,1,0,0,0,46,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// SUV_png
	this.instance_2 = new lib.vehicles_suv_animation();
	this.instance_2.setTransform(412.5,-367.5,1,1,0,0,0,50.5,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Green_Car_png
	this.instance_3 = new lib.vehicles_green_car_mc();
	this.instance_3.setTransform(668,23,1,1,0,0,0,51,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Firetruck_png
	this.instance_4 = new lib.vehicles_firetruck_mc();
	this.instance_4.setTransform(133,415,1,1,0,0,0,100,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vehicles_mc, new cjs.Rectangle(-904.9,-621.4,1731.6999999999998,1169.5), null);


(lib.street_lights_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// street_light_5_png
	this.instance = new lib.street_light_5();
	this.instance.setTransform(-159,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// traffic_light_3_png
	this.instance_1 = new lib.traffic_light_3();
	this.instance_1.setTransform(-97,-490);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// traffic_cycle_lights
	this.instance_2 = new lib.stop_light_cycle_perp_mc();
	this.instance_2.setTransform(79.2,-567.5,1,1,0,0,0,8.2,8);

	this.instance_3 = new lib.stop_light_cycle_mc();
	this.instance_3.setTransform(383.15,-439.3,1,1,0,0,0,8.2,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));
	this.instance_2.addEventListener("tick", AdobeAn.handleFilterCache);
	this.instance_3.addEventListener("tick", AdobeAn.handleFilterCache);

	// traffic_light_2_png
	this.instance_4 = new lib.traffic_light_2();
	this.instance_4.setTransform(71,-592);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// traffic_light_1_png
	this.instance_5 = new lib.traffic_light_1();
	this.instance_5.setTransform(378,-456);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// street_light_4_png
	this.instance_6 = new lib.street_light_4();
	this.instance_6.setTransform(-5,-555);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// street_light_3_png
	this.instance_7 = new lib.street_light_3();
	this.instance_7.setTransform(-442,-317);

	this.instance_8 = new lib.street_light_3();
	this.instance_8.setTransform(-881,-59);

	this.instance_9 = new lib.street_light_3();
	this.instance_9.setTransform(277,161);

	this.instance_10 = new lib.street_light_3();
	this.instance_10.setTransform(871,-170);

	this.instance_11 = new lib.street_light_3();
	this.instance_11.setTransform(695,-67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(1));

	// street_light_2_png
	this.instance_12 = new lib.street_light_2();
	this.instance_12.setTransform(-1178,145);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// street_light_1_png
	this.instance_13 = new lib.street_light_1();
	this.instance_13.setTransform(740,-787);

	this.instance_14 = new lib.street_light_1();
	this.instance_14.setTransform(1327,-411);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.street_lights_mc, new cjs.Rectangle(-1178,-787,2546,1059), null);


(lib.radial_circles_multi_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy_copy
	this.instance = new lib.radial_circle();
	this.instance.setTransform(-87,-40.15,1,0.4615);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).wait(70));

	// Layer_1_copy
	this.instance_1 = new lib.radial_circle();
	this.instance_1.setTransform(-87,-40.15,1,0.4615);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).wait(83));

	// Layer_1
	this.instance_2 = new lib.radial_circle();
	this.instance_2.setTransform(-87,-40.15,1,0.4615);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(95));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,12);


(lib.powerlines_static_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// powerlines_ON_spark_mc_right
	this.instance = new lib.powerlines_ON_spark_mc_right();
	this.instance.setTransform(-9.35,805.55,1,1,0,0,0,-77.5,42.5);

	this.instance_1 = new lib.powerlines_ON_spark_mc_right();
	this.instance_1.setTransform(4.35,799.15,1,1,0,0,0,-77.5,42.5);

	this.instance_2 = new lib.powerlines_ON_spark_mc_right();
	this.instance_2.setTransform(22,788.95,1,1,0,0,0,-77.5,42.5);

	this.instance_3 = new lib.powerlines_ON_spark_mc_right();
	this.instance_3.setTransform(37.35,781.95,1,1,0,0,0,-77.5,42.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// powerlines_ON_spark_mc
	this.instance_4 = new lib.powerlines_ON_spark_mc();
	this.instance_4.setTransform(171,733.75,1,1,0,0,0,16.5,14.5);

	this.instance_5 = new lib.powerlines_ON_spark_mc();
	this.instance_5.setTransform(170.25,723.55,1,1,0,0,0,16.5,14.5);

	this.instance_6 = new lib.powerlines_ON_spark_mc();
	this.instance_6.setTransform(155.25,714.8,1,1,0,0,0,16.5,14.5);

	this.instance_7 = new lib.powerlines_ON_spark_mc();
	this.instance_7.setTransform(154.5,704.6,1,1,0,0,0,16.5,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1510.1,776.3);


(lib.Powerlines_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// powerlines_anim_mc
	this.powerlines_on_anim = new lib.powerlines_static_mc();
	this.powerlines_on_anim.name = "powerlines_on_anim";
	this.powerlines_on_anim.setTransform(1153,450,1,1,0,0,0,1153,450);

	this.timeline.addTween(cjs.Tween.get(this.powerlines_on_anim).wait(1));

	// glow
	this.powerlines_on_glow = new lib.powerlines_on_glow_mc();
	this.powerlines_on_glow.name = "powerlines_on_glow";
	this.powerlines_on_glow.setTransform(1154,450,1,1,0,0,0,1153,450);
	this.powerlines_on_glow.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.powerlines_on_glow).wait(1));

	// base
	this.instance = new lib.Powerlines_OFF();
	this.instance.setTransform(16,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Powerlines_mc, new cjs.Rectangle(1,0,2306,900), null);


(lib.ev_station_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// EV_ON_Station_Glow_png
	this.ev_on_top_anim = new lib.ev_on_station_top_anim();
	this.ev_on_top_anim.name = "ev_on_top_anim";
	this.ev_on_top_anim.setTransform(463,455);

	this.timeline.addTween(cjs.Tween.get(this.ev_on_top_anim).wait(1));

	// EV_ON_Shadow_png
	this.instance = new lib.EV_ON_Shadow();
	this.instance.setTransform(518,599);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// EV_Base_png
	this.instance_1 = new lib.EV_Base();
	this.instance_1.setTransform(379,358);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// EV_ON_Glow_png
	this.ev_on_glow = new lib.ev_on_glow();
	this.ev_on_glow.name = "ev_on_glow";
	this.ev_on_glow.setTransform(818,645.5,1,1,0,0,0,818,645.5);
	this.ev_on_glow.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.ev_on_glow).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ev_station_mc, new cjs.Rectangle(0,0,1636,1291), null);


(lib.wireless_wireline_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// WW_ON_waves
	this.ww_on_anim = new lib.radial_circles_multi_mc();
	this.ww_on_anim.name = "ww_on_anim";
	this.ww_on_anim.setTransform(96.8,103.3);
	this.ww_on_anim._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ww_on_anim).wait(1).to({_off:false},0).wait(1));

	// WW_OFF_Bldg_png
	this.instance = new lib.WW_OFF_Bldg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// WW_ON_Glow_png
	this.ww_on_glow = new lib.ww_on_glow();
	this.ww_on_glow.name = "ww_on_glow";
	this.ww_on_glow.setTransform(298,462,1,1,0,0,0,676,565);
	this.ww_on_glow._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ww_on_glow).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1066,-587,2366,1614);


// stage content:
(lib.centerline_city = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var root = this;
		var selections=[root.das_mc, root.ev_mc, root.houses_mc, root.hvac_mc, root.er_mc, root.dc_mc, root.ww_mc, root.powerlines_mc]; 
		var selectedIndex = -1;  // -1=nothing selected; 0=das, 1=ev, 2=houses, 3=hvac, 4=er, 5=dc, 6=ww, 7=powerlines
		
		root.main = function () {
			document.body.style.backgroundColor = "transparent";
			stage.enableMouseOver();
		
			//das
			root.das_hit_btn.cursor = "default"; // default cursor, not finger
			root.das_hit_btn.on("mouseover", function (e) {
				root.selectedIndex=0;		//set selection
				root.passthroughTween(root.das_mc.das_on_top_anim_mc, root.das_mc.das_on_top_anim_mc.totalFrames - 1, root.das_mc.das_on_glow);
				root.fadeDownAllButThis(root.das_mc);  //fade all other selections
				//console.log(root.selections);
				
			});
			root.das_hit_btn.on("mouseout", function (e) {
				root.selectedIndex=-1;		//clear selection
				root.passthroughTween(root.das_mc.das_on_top_anim_mc, 0, root.das_mc.das_on_glow);
				root.resetAllOpacity();  //make all fully visible
				
			});
		
			//ev
			root.ev_hit_btn.cursor = "default"; // default cursor, not finger
			root.ev_hit_btn.on("mouseover", function (e) {
				root.selectedIndex=1;	//set selection
				root.passthroughTween(root.ev_mc.ev_on_top_anim, root.ev_mc.ev_on_top_anim.totalFrames - 1, root.ev_mc.ev_on_glow);
				root.fadeDownAllButThis(root.ev_mc);  //fade all other selections
				
			});
			root.ev_hit_btn.on("mouseout", function (e) {
				root.selectedIndex=-1;	//clear selection
				root.passthroughTween(root.ev_mc.ev_on_top_anim, 0, root.ev_mc.ev_on_glow);
				root.resetAllOpacity();
				
			});
		
			//houses
			root.houses_hit_btn.cursor = "default"; // default cursor, not finger
			root.houses_hit_btn.on("mouseover", function (e) {
				root.selectedIndex=2;	//set selection
				root.passthroughTween(root.houses_mc.houses_on_anim, root.houses_mc.houses_on_anim.totalFrames - 1, root.houses_mc.houses_on_glow);
				root.fadeDownAllButThis(root.houses_mc);  //fade all other selections
			});
			root.houses_hit_btn.on("mouseout", function (e) {
				root.selectedIndex=-1;	//clear selection
				root.passthroughTween(root.houses_mc.houses_on_anim, 0, root.houses_mc.houses_on_glow);
				root.resetAllOpacity();  //make all fully visible
			});
		
			//hvac
			root.hvac_hit_btn.cursor = "default"; // default cursor, not finger
			root.hvac_hit_btn.on("mouseover", function (e) {
				root.selectedIndex=3;	//set selection
				root.passthroughTween(root.hvac_mc.hvac_on_top_anim, root.hvac_mc.hvac_on_top_anim.totalFrames - 1, root.hvac_mc.hvac_on_glow);
				root.fadeDownAllButThis(root.hvac_mc);  //fade all other selections
			});
			root.hvac_hit_btn.on("mouseout", function (e) {
				root.selectedIndex=-1;	//clear selection
				root.passthroughTween(root.hvac_mc.hvac_on_top_anim, 0, root.hvac_mc.hvac_on_glow);
				root.resetAllOpacity();  //make all fully visible
			});
		
			//er
			root.er_hit_btn.cursor = "default"; // default cursor, not finger
			root.er_hit_btn.on("mouseover", function (e) {
				root.selectedIndex=4;	//set selection
				root.passthroughTween(root.er_mc.er_on_top_anim, root.er_mc.er_on_top_anim.totalFrames - 1, root.er_mc.er_on_glow);
				root.fadeDownAllButThis(root.er_mc);  //fade all other selections
			});
			root.er_hit_btn.on("mouseout", function (e) {
				root.selectedIndex=-1;	//clear selection
				root.passthroughTween(root.er_mc.er_on_top_anim, 0, root.er_mc.er_on_glow);
				root.resetAllOpacity();  //make all fully visible
			});
		
			//data center
			root.dc_hit_btn.cursor = "default"; // default cursor, not finger
			root.dc_hit_btn.on("mouseover", function (e) {
				root.selectedIndex=5;	//set selection
				root.passthroughTween(root.dc_mc.dc_on_top_anim, root.dc_mc.dc_on_top_anim.totalFrames - 1, root.dc_mc.dc_on_glow);
				root.fadeDownAllButThis(root.dc_mc);  //fade all other selections
			});
			root.dc_hit_btn.on("mouseout", function (e) {
				root.selectedIndex=-1;	//clear selection
				root.passthroughTween(root.dc_mc.dc_on_top_anim, 0, root.dc_mc.dc_on_glow);
				root.resetAllOpacity();  //make all fully visible
			});
		
			//ww
			root.ww_hit_btn.cursor = "default"; // default cursor, not finger
			root.ww_hit_btn.on("mouseover", function (e) {
				root.selectedIndex=6;	//set selection
				root.passthroughTween(root.ww_mc, root.ww_mc.totalFrames - 1, root.ww_mc.ww_on_glow);  //also works with cascaded animations since "end" frame is next frame to trigger anims
				root.fadeDownAllButThis(root.ww_mc);  //fade all other selections
			});
			root.ww_hit_btn.on("mouseout", function (e) {
				root.selectedIndex=-1;	//clear selection
				root.passthroughTween(root.ww_mc, 0, root.ww_mc.ww_on_glow);
				root.resetAllOpacity();  //make all fully visible
			});
		
		
			//powerlines
			root.powerlines_hit_btn.cursor = "default"; // default cursor, not finger
			root.powerlines_hit_btn.on("mouseover", function (e) {
				root.selectedIndex=7;	//set selection
				root.passthroughTween(root.powerlines_mc.powerlines_on_anim, root.powerlines_mc.powerlines_on_anim.totalFrames - 1, root.powerlines_mc.powerlines_on_glow);						
				//root.fadeDownAllButThis(root.powerlines_mc);  //fade all other selections
				
				
			});
			root.powerlines_hit_btn.on("mouseout", function (e) {
				root.selectedIndex=-1;	//clear selection		
				root.passthroughTween(root.powerlines_mc.powerlines_on_anim, 0, root.powerlines_mc.powerlines_on_glow);
				//root.resetAllOpacity();  //make all fully visible
				
			});
		
		
		};
		
		root.toggleGlow = function(obj) {
			//console.log("toggleGlow() called with input arg: "+obj);
		
			if(obj.visible==true){  //already glow is show, so hide glow
				if(root.selectedIndex==-1)  //check for an invalid/cleared selection
					obj.visible=false;	//hide glow
					//console.log("selected index= " + root.selectedIndex);
			}
			else
				if(root.selectedIndex>=0){  //check for a valid selection
					obj.visible=true;
					//console.log("showselected index= " + root.selectedIndex);
				}
		}
		
		root.fadeDownAllButThis = function(obj) {  //isolate selected object visually by alpha down others
				
			for(var i=0;i<selections.length;i++){
				selections[i].alpha = 0.25;
			}	
			obj.alpha = 1;	
		
		}
		root.resetAllOpacity = function(){
			for(var i=0;i<selections.length;i++){
			//console.log(selections[i].name); 
				selections[i].alpha = 1;
			}
		}
		
		//indirect object hover/tween
		root.passthroughTween = function (target, destination, glowObj, ease) {
			var duration = (Math.abs(destination - target.currentFrame) / lib.properties.fps) * 1000;
		
			target.frame = target.currentFrame;
		
			createjs.Tween.get(target, {
				override: true
			}).to({
				frame: destination
			}, duration, ease).on("change", function (e) {
				var target = e.currentTarget.target;
				target.gotoAndStop(Math.round(target.frame));
			});
			
			// trigger glow state
			root.toggleGlow(glowObj);
		
		};
		
		root.main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// street_lights_fg
	this.instance = new lib.street_light_4();
	this.instance.setTransform(329,608,0.391,0.391);

	this.instance_1 = new lib.street_light_3();
	this.instance_1.setTransform(517.95,706,0.391,0.391,0,0,180);

	this.instance_2 = new lib.street_light_3();
	this.instance_2.setTransform(695,606,0.391,0.391);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// hit_areas
	this.powerlines_hit_btn = new lib.powerlines_hit_btn();
	this.powerlines_hit_btn.name = "powerlines_hit_btn";
	this.powerlines_hit_btn.setTransform(661.4,236.05,1,1,0,0,0,447.4,165);
	new cjs.ButtonHelper(this.powerlines_hit_btn, 0, 1, 2, false, new lib.powerlines_hit_btn(), 3);

	this.hvac_hit_btn = new lib.base_btn();
	this.hvac_hit_btn.name = "hvac_hit_btn";
	this.hvac_hit_btn.setTransform(632.2,263.75,0.8456,0.8689,0,0,0,104,186);
	new cjs.ButtonHelper(this.hvac_hit_btn, 0, 1, 2, false, new lib.base_btn(), 3);

	this.er_hit_btn = new lib.base_btn();
	this.er_hit_btn.name = "er_hit_btn";
	this.er_hit_btn.setTransform(586.65,360.6,0.6479,0.6408,0,0,0,302.6,187.2);
	new cjs.ButtonHelper(this.er_hit_btn, 0, 1, 2, false, new lib.base_btn(), 3);

	this.ww_hit_btn = new lib.base_btn();
	this.ww_hit_btn.name = "ww_hit_btn";
	this.ww_hit_btn.setTransform(263,542.05,0.5974,0.6064,0,0,0,302.6,187.3);
	new cjs.ButtonHelper(this.ww_hit_btn, 0, 1, 2, false, new lib.base_btn(), 3);

	this.dc_hit_btn = new lib.base_btn();
	this.dc_hit_btn.name = "dc_hit_btn";
	this.dc_hit_btn.setTransform(421.2,454.05,0.6369,0.6309,0,0,0,302.6,187.1);
	new cjs.ButtonHelper(this.dc_hit_btn, 0, 1, 2, false, new lib.base_btn(), 3);

	this.houses_hit_btn = new lib.base_btn();
	this.houses_hit_btn.name = "houses_hit_btn";
	this.houses_hit_btn.setTransform(1104,418.9,0.9221,0.9534,0,0,0,302.3,186.8);
	new cjs.ButtonHelper(this.houses_hit_btn, 0, 1, 2, false, new lib.base_btn(), 3);

	this.ev_hit_btn = new lib.base_btn();
	this.ev_hit_btn.name = "ev_hit_btn";
	this.ev_hit_btn.setTransform(880.2,551.9,0.9221,0.9534,0,0,0,302.3,186.8);
	new cjs.ButtonHelper(this.ev_hit_btn, 0, 1, 2, false, new lib.base_btn(), 3);

	this.das_hit_btn = new lib.base_btn();
	this.das_hit_btn.name = "das_hit_btn";
	this.das_hit_btn.setTransform(307,523.5);
	new cjs.ButtonHelper(this.das_hit_btn, 0, 1, 2, false, new lib.base_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.das_hit_btn},{t:this.ev_hit_btn},{t:this.houses_hit_btn},{t:this.dc_hit_btn},{t:this.ww_hit_btn},{t:this.er_hit_btn},{t:this.hvac_hit_btn},{t:this.powerlines_hit_btn}]}).wait(1));

	// DAS
	this.das_mc = new lib.das_mc();
	this.das_mc.name = "das_mc";
	this.das_mc.setTransform(514.85,647.5,0.391,0.391,0,0,0,888,678);

	this.timeline.addTween(cjs.Tween.get(this.das_mc).wait(1));

	// street_lights
	this.instance_3 = new lib.street_lights_mc();
	this.instance_3.setTransform(685.5,518,0.391,0.391,0,0,0,25.6,63.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// vehicles
	this.instance_4 = new lib.vehicles_mc();
	this.instance_4.setTransform(650,457.45,0.391,0.391,0,0,0,100,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// EV
	this.ev_mc = new lib.ev_station_mc();
	this.ev_mc.name = "ev_mc";
	this.ev_mc.setTransform(784,496.95,0.391,0.391,0,0,0,818.1,645.4);

	this.timeline.addTween(cjs.Tween.get(this.ev_mc).wait(1));

	// Houses
	this.houses_mc = new lib.houses_mc();
	this.houses_mc.name = "houses_mc";
	this.houses_mc.setTransform(1017.5,360,0.391,0.391,0,0,0,865.5,665);

	this.timeline.addTween(cjs.Tween.get(this.houses_mc).wait(1));

	// street_lights_background
	this.instance_5 = new lib.street_light_1();
	this.instance_5.setTransform(1026,220,0.391,0.391);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// WW
	this.ww_mc = new lib.wireless_wireline_mc();
	this.ww_mc.name = "ww_mc";
	this.ww_mc.setTransform(211.45,450.5,0.391,0.391,0,0,0,298.1,324.6);

	this.timeline.addTween(cjs.Tween.get(this.ww_mc).wait(1));

	// DC
	this.dc_mc = new lib.data_center_mc();
	this.dc_mc.name = "dc_mc";
	this.dc_mc.setTransform(361.4,421.35,0.391,0.391,0,0,0,731,581.5);

	this.timeline.addTween(cjs.Tween.get(this.dc_mc).wait(1));

	// ER
	this.er_mc = new lib.Emergency_Responder_mc();
	this.er_mc.name = "er_mc";
	this.er_mc.setTransform(527.1,299.7,1,1,0,0,0,134.1,100.7);

	this.timeline.addTween(cjs.Tween.get(this.er_mc).wait(1));

	// HVAC
	this.hvac_mc = new lib.hvac_mc();
	this.hvac_mc.name = "hvac_mc";
	this.hvac_mc.setTransform(718.35,171.65,0.391,0.391,0,0,0,700.6,650.4);

	this.timeline.addTween(cjs.Tween.get(this.hvac_mc).wait(1));

	// Powerlines
	this.powerlines_mc = new lib.Powerlines_mc();
	this.powerlines_mc.name = "powerlines_mc";
	this.powerlines_mc.setTransform(657.1,257.9,0.391,0.391,0,0,0,1152.9,450.1);

	this.timeline.addTween(cjs.Tween.get(this.powerlines_mc).wait(1));

	// Base
	this.instance_6 = new lib.Base();
	this.instance_6.setTransform(26,97,0.391,0.391);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(632.6,342,723.3000000000001,570.6);
// library properties:
lib.properties = {
	id: '148D7EC74804F14580EA7507AFAB2A29',
	width: 1280,
	height: 850,
	fps: 60,
	color: "transparent",
	opacity: 1.00,
	manifest: [
		{src:"images/Base.png?1698193896145", id:"Base"},
		{src:"images/BlueCar.png?1698193896145", id:"BlueCar"},
		{src:"images/BlueEVCar.png?1698193896145", id:"BlueEVCar"},
		{src:"images/DAS_Bushes.png?1698193896145", id:"DAS_Bushes"},
		{src:"images/DAS_OFF_Base.png?1698193896145", id:"DAS_OFF_Base"},
		{src:"images/DAS_ON_Bldg_top.png?1698193896145", id:"DAS_ON_Bldg_top"},
		{src:"images/DAS_ON_Glow.png?1698193896145", id:"DAS_ON_Glow"},
		{src:"images/DAS_ON_Inside.png?1698193896145", id:"DAS_ON_Inside"},
		{src:"images/DC_base_ON.png?1698193896145", id:"DC_base_ON"},
		{src:"images/DC_Ground.png?1698193896145", id:"DC_Ground"},
		{src:"images/DC_ON_bldg_top.png?1698193896145", id:"DC_ON_bldg_top"},
		{src:"images/DC_ON_Glow.png?1698193896145", id:"DC_ON_Glow"},
		{src:"images/Emergency_Outside_Front.png?1698193896145", id:"Emergency_Outside_Front"},
		{src:"images/Emergency_Responder_Ground.png?1698193896145", id:"Emergency_Responder_Ground"},
		{src:"images/ER_OFF_Bldg.png?1698193896145", id:"ER_OFF_Bldg"},
		{src:"images/ER_ON_bldg_shadow.png?1698193896145", id:"ER_ON_bldg_shadow"},
		{src:"images/ER_ON_GLOW.png?1698193896145", id:"ER_ON_GLOW"},
		{src:"images/ER_ON_RED_GLOW.png?1698193896145", id:"ER_ON_RED_GLOW"},
		{src:"images/ER_Trees_Back.png?1698193896145", id:"ER_Trees_Back"},
		{src:"images/EV_Base.png?1698193896145", id:"EV_Base"},
		{src:"images/EV_ON_Glow.png?1698193896145", id:"EV_ON_Glow"},
		{src:"images/EV_ON_Shadow.png?1698193896145", id:"EV_ON_Shadow"},
		{src:"images/EV_ON_Station.png?1698193896145", id:"EV_ON_Station"},
		{src:"images/EV_ON_Station_Glow.png?1698193896145", id:"EV_ON_Station_Glow"},
		{src:"images/Firetruck.png?1698193896145", id:"Firetruck"},
		{src:"images/GreenCar.png?1698193896145", id:"GreenCar"},
		{src:"images/House_1_on.png?1698193896145", id:"House_1_on"},
		{src:"images/House_1_plants.png?1698193896145", id:"House_1_plants"},
		{src:"images/House_2_on.png?1698193896145", id:"House_2_on"},
		{src:"images/House_3_on.png?1698193896145", id:"House_3_on"},
		{src:"images/Houses_Ground.png?1698193896145", id:"Houses_Ground"},
		{src:"images/Houses_ON_Glow.png?1698193896145", id:"Houses_ON_Glow"},
		{src:"images/houses_shad_1.png?1698193896145", id:"houses_shad_1"},
		{src:"images/houses_shad_2.png?1698193896145", id:"houses_shad_2"},
		{src:"images/houses_shad_3.png?1698193896145", id:"houses_shad_3"},
		{src:"images/Houses_Trees_4.png?1698193896145", id:"Houses_Trees_4"},
		{src:"images/Houses_Trees_5.png?1698193896145", id:"Houses_Trees_5"},
		{src:"images/HVAC_glow_on.png?1698193896145", id:"HVAC_glow_on"},
		{src:"images/HVAC_ON_BASE.png?1698193896145", id:"HVAC_ON_BASE"},
		{src:"images/HVAC_TOP_ANIMATION.png?1698193896145", id:"HVAC_TOP_ANIMATION"},
		{src:"images/Powerlines_OFF.png?1698193896145", id:"Powerlines_OFF"},
		{src:"images/Powerlines_OFF_ON.png?1698193896145", id:"Powerlines_OFF_ON"},
		{src:"images/Powerlines_ON_single_spark.png?1698193896145", id:"Powerlines_ON_single_spark"},
		{src:"images/street_light_1.png?1698193896145", id:"street_light_1"},
		{src:"images/street_light_2.png?1698193896145", id:"street_light_2"},
		{src:"images/street_light_3.png?1698193896145", id:"street_light_3"},
		{src:"images/street_light_4.png?1698193896145", id:"street_light_4"},
		{src:"images/street_light_5.png?1698193896145", id:"street_light_5"},
		{src:"images/SUV.png?1698193896145", id:"SUV"},
		{src:"images/traffic_light_1.png?1698193896145", id:"traffic_light_1"},
		{src:"images/traffic_light_2.png?1698193896145", id:"traffic_light_2"},
		{src:"images/traffic_light_3.png?1698193896145", id:"traffic_light_3"},
		{src:"images/WW_OFF_Bldg.png?1698193896145", id:"WW_OFF_Bldg"},
		{src:"images/WW_ON_Glow.png?1698193896145", id:"WW_ON_Glow"}
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
an.compositions['148D7EC74804F14580EA7507AFAB2A29'] = {
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
