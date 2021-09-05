let config = {
	"who_is_moving" : "ambulance",
	"direction" : "TL",	 						// T- Toward  L- Listener  A- Away   C-Ambulance (Car)
	"speed_ambulance" : 10,  
	"speed_listener" : 1,
	"frequency" : 700,   
	"position_ambulance" : 0,					// position map between 0 to 100
	"position_person" : 0						// position map between 0 to 100
}

let Tab_is_activate = true;
let Tab_diactive_time =0;
let Tab_switch_time = 0;
let Tab_switch_time_total = 0;
// let Tab_activate_time =0;

var off_setY = 250;
var bg_containerX = 0 , bg_containerY = 250 , bg_containerW = 2560 , bg_containerH = 973;

var wait_for_direction_btn_change = false
var move_loop_animation = null;
var sound_loop_animation = null;
var queue_circle = [];
var frequency_value_text = "700 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 800 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 900  &nbsp;&nbsp;&nbsp;&nbsp;  1 000";
// var ambulance_speed_value_text = "0 &nbsp;&nbsp; 10 &nbsp;&nbsp; 20 &nbsp;&nbsp; 30 &nbsp;&nbsp; 40 &nbsp;&nbsp; 50 &nbsp;&nbsp; 60";
var ambulance_speed_value_text = "0 &nbsp;&nbsp; 05 &nbsp;&nbsp; 10 &nbsp;&nbsp; 15 &nbsp;&nbsp; 20 &nbsp;&nbsp; 25 &nbsp;&nbsp; 30";
var listener_speed_value_text = "0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 ";

var frequency_slider_btn_clicked = false;
var ambulance_slider_btn_clicked = false;
var listener_slider_btn_clicked = false;
var copy_of_listener_updated = false;
var copy_of_ambulance_updated = false;

var in_loop_change_direction = false;
var time_animation = 0;
var after_change_direction_time_left = 0;

var frequency_slider_btn_value  = config[`frequency`];
var ambulance_slider_btn_value = config[`speed_ambulance`];
var listener_slider_btn_value = config[`speed_listener`];

var reset_btn_activated = false;
var go_btn_activated = true;
var animation_pause = false

const frequency_btn_start = 118 , frequency_btn_end = 678;
const slider2_start = 844 , slider2_end = 1403;

const AMB_MAX_SPEED_TIME = 3000;
const AMB_MIN_SPEED_TIME = 8000;  
const LIST_MAX_SPEED_TIME = 5000 ;
const LIST_MIN_SPEED_TIME = 12000;

const AMB_MAX_SPEED_CHANG_FRAME_TIME = 20;
const AMB_MIN_SPEED_CHANG_FRAME_TIME = 200;
const LIST_MAX_SPEED_CHANG_FRAME_TIME = 10;
const LIST_MIN_SPEED_CHANG_FRAME_TIME = 50;

const FRQ_MAX_SPEED_OF_EXPAND = 15;
const FRQ_MIN_SPEED_OF_EXPAND = 5 ; 

function set_jarvis(){

	body_container = select(`body`);
	console. log(body_container);

	body_container. mouseReleased( ()=>{
		resetClickedEffect();
	})

	// frameRate(30)

	//Layout part
	bg_container = createDiv("");
	bg_container. id("bg-container");

	//hide circle outside of road
	dummy_road = createDiv("");
	dummy_road. id("dummy_road");

	$(`#dummy_road`). css(`position` , `absolute`)
	$(`#dummy_road`). css(`z-index` , `1`)
	$(`#dummy_road`). css(`overflow` , `hidden`)

	/*bg_container. mouseClicked( () => {
		animationStart();
	})*/


	frequency_box = createDiv("");
	frequency_box. id("frequency_box");
	speed_ambulance_box = createDiv("");
	speed_ambulance_box. id("speed_ambulance_box");
	speed_listener_box = createDiv("");
	speed_listener_box. id("speed_listener_box");
	observed_frequency_box = createDiv("");
	observed_frequency_box. id("observed_frequency_box");

	$("#bg-container"). css(`position` , `absolute`);
	$("#bg-container"). css(`background-image` , `url('img/Bg1.png')`);
	
	$(`#frequency_box`). css(`position` , `absolute`);
	$(`#frequency_box`). css(`text-align` , `right`)
	$(`#frequency_box`). css(`line-height` , `1.6`)
	$(`#speed_ambulance_box`). css(`position` , `absolute`);
	$(`#speed_ambulance_box`). css(`text-align` , `right`)
	$(`#speed_ambulance_box`). css(`line-height` , `1.6`)
	$(`#speed_listener_box`). css(`position` , `absolute`);
	$(`#speed_listener_box`). css(`text-align` , `right`)
	$(`#speed_listener_box`). css(`line-height` , `1.6`)
	$(`#observed_frequency_box`). css(`position` , `absolute`);
	$(`#observed_frequency_box`). css(`text-align` , `right`)
	$(`#observed_frequency_box`). css(`line-height` , `1.6`)



	//Btn part
	reset_btn = createDiv("");
	reset_btn. id(`reset_btn`);
	go_btn = createDiv("");
	go_btn. id(`go_btn`);
	who_is_moving_btn = createDiv("")
	who_is_moving_btn. id(`who_is_moving_btn`);

	dummy_move_amb_btn = createDiv("");
	dummy_move_amb_btn. id("dummy_move_amb_btn");
	dummy_move_lis_btn = createDiv("");
	dummy_move_lis_btn. id("dummy_move_lis_btn");

	direction_btn = createDiv("");
	direction_btn_bg = createDiv("");
	direction_btn_slider = createDiv("");
	direction_btn_left_arrow = createDiv("");
	direction_btn_right_arrow = createDiv("");
	direction_btn_left_content = createDiv("");
	direction_btn_right_content = createDiv("");

	direction_btn. id("direction_btn");
	direction_btn_bg. id("direction_btn_bg");
	direction_btn_slider. id("direction_btn_slider");
	direction_btn_left_arrow. id("direction_btn_left_arrow");
	direction_btn_right_arrow. id("direction_btn_right_arrow");
	direction_btn_left_content. id("direction_btn_left_content");
	direction_btn_right_content. id("direction_btn_right_content");

	$(`#reset_btn`). css("background-image" , "url('img/reset.png')");
	$(`#reset_btn`). css("background-repeat" , "none");
	$(`#reset_btn`). css("z-index" , "1");
	$(`#reset_btn`). css("cursor" , "pointer");

	$(`#go_btn`). css("background-image" , "url('img/go.png')");
	$(`#go_btn`). css("background-repeat" , "none");
	$(`#go_btn`). css("z-index" , "1");
	$(`#go_btn`). css("cursor" , "pointer");
	// reset_btn. hide();

	reset_btn. mouseOver(function(){
		reset_btn. style("transform" , "scale(1.1)")	
	})
	reset_btn.mouseOut( function (){
		reset_btn. style("transform" , "scale(1)")
	})

	reset_btn. mouseClicked ( function (){
		reset_btn. style("transform" , "scale(0.9)")
		setTimeout( function (){
			clickInst = false;
			resetPosition()
			reset_btn_activated = false;
			go_btn_activated = true;
			reset_btn. style("transform" , "scale(1)")
			$(`#go_btn`). css("background-image" , "url('img/go.png')");
		} , 200)
	})

	dummy_canvas = createDiv(``);
	dummy_canvas. id(`dummy_canvas`);

	go_btn. mouseOver(function(){
		go_btn. style("transform" , "scale(1.1)")	
	})
	go_btn.mouseOut( function (){
		go_btn. style("transform" , "scale(1)")
	})

	go_btn. mouseClicked ( function (){
		go_btn. style("transform" , "scale(0.9)")
		setTimeout( function (){
			if(reset_btn_activated == false){
				Tab_is_activate = true; 
				Tab_switch_time = 0;
				animationStart();
				reset_btn_activated = true;
				go_btn_activated = false;
				$(`#go_btn`). css("background-image" , "url('img/pause.png')");
			}else{
				if(go_btn_activated == true){
					// Resume logic
					console. log("Resume");
					animation_pause = false;
					Tab_is_activate = true;
					Tab_switch_time = new Date(). getTime() - Tab_diactive_time;
					Tab_switch_time_total += Tab_switch_time;
					go_btn_activated = false;
					$(`#go_btn`). css("background-image" , "url('img/pause.png')");
				}else{
					// Pase logic
					console. log(`pause`);
					animation_pause = true;
					Tab_is_activate = false
					Tab_diactive_time = new Date(). getTime() - Tab_switch_time;
					go_btn_activated = true
					$(`#go_btn`). css("background-image" , "url('img/go.png')");
				}
			}
			clickInst = false;
			go_btn. style("transform" , "scale(1.1)")
		} , 200)
	})

	$(`#dummy_move_amb_btn`). css(`z-index` , `1`)
	$(`#dummy_move_lis_btn`). css(`z-index` , `1`)

	dummy_move_amb_btn. mouseClicked(() => {
		if(config["who_is_moving"] != "ambulance"){
			clickInst = false;
			resetCircleAnimation();
			config["who_is_moving"] = "ambulance";
			config["direction"] = "TL";
			animation_start = false;
			clearInterval(move_loop_animation);
			ambulanceX = ambulanceStart;
			listenerX = listenerStart;
			resetListenerAmbulanceImg();
			resetPosition();
		}
	})
	dummy_move_lis_btn. mouseClicked(() => {
		if(config["who_is_moving"] != "listener"){
			clickInst = false
			resetCircleAnimation();
			config["who_is_moving"] = "listener";
			config["direction"] = "TC";
			animation_start = false;
			clearInterval(move_loop_animation);
			ambulanceX = ambulanceStart;
			listenerX = listenerStart;
			resetListenerAmbulanceImg();
			resetPosition();
		}
	})

	$(`#who_is_moving_btn`). css(`position` , `absolute`);
	$(`#who_is_moving_btn`). css(`z-index` , `1`)
	$(`#who_is_moving_btn`). css(`background-image` , `url('img/Moving1.png')`);

	$(`#direction_btn`). css(`position` , `absolute`);
	$(`#direction_btn_bg`). css(`position` , `absolute`);
	$(`#direction_btn_left_arrow`). css(`position` , `absolute`);
	$(`#direction_btn_right_arrow`). css(`position` , `absolute`);
	$(`#direction_btn_left_content`). css(`position` , `absolute`);
	$(`#direction_btn_right_content`). css(`position` , `absolute`);
	$(`#direction_btn`). css(`z-index` , `1`)
	$(`#direction_btn_slider`). css(`z-index` , `1`)

	$(`#direction_btn_slider`). css(`position` , `absolute`);
	$(`#direction_btn_slider`). css(`background-image` , `url('img/listener slider.png')`)
	$(`#direction_btn_slider`). css(`cursor` , `pointer`)
	$(`#direction_btn`). css(`background-image` , `url('img/listenerBt.png')`)
	$(`#direction_btn`). css(`z-index` , 2);

	direction_btn_slider. mouseClicked(()=>{
		changeDirection();
	})


	//Animation part
	ambulanceStart = 100 , ambulanceEnd = 1808;
	listenerStart = 2368 , listenerEnd = 400;
	animation_start = null;
	animation_start_time = 0;
	ambulanceX = map(config["position_ambulance"] , 0 , 100 , ambulanceStart , ambulanceEnd);
	listenerX = map(config["position_ambulance"] , 0 , 100 , listenerStart , listenerEnd);
	
	ambulance = createDiv("");
	ambulance. id("ambulance");
	ambulance_copy = createDiv("");
	ambulance_copy. id("ambulance_copy");
	listener = createDiv("");
	listener. id("listener");
	listener_copy = createDiv("");
	listener_copy. id("listener_copy");

	$(`#ambulance`). css(`position` , `absolute`);
	$(`#ambulance`). css(`z-index` , `0`)
	$(`#listener`). css(`position` , `absolute`);

	for(var i=0 ; i<=6; i++){
		$(`#ambulance`). css(`background-image` , `url('img/Ambulance animation1/Ambulance ani${i}.png')`);
	}

	$(`#ambulance`). css(`background-image` , `url('img/Ambulance animation1/Ambulance ani1.png')`);
	$(`#ambulance_copy`). css(`background-image` , `url('img/Ambulance animation1/Ambulance ani1.png')`);
	$(`#listener`). css(`background-image` , `url('img/Man animation/Man ani1.png')`);
	$(`#listener_copy`). css(`background-image` , `url('img/Man animation/Man ani1.png')`);

	temp_time = 0;
	clr_flag = "red";
	sound_sleep_time = 200;


	/*//hide circle outside of road
	dummy_road = createDiv("");
	dummy_road. id("dummy_road");

	$(`#dummy_road`). css(`position` , `absolute`)
	$(`#dummy_road`). css(`overflow` , `hidden`)*/
	

	//slider animation
	frequency_label = createDiv("");                        //700 800 900 1000 frequency
	frequency_label. id("frequency_label");

	ambulance_label = createDiv("");                        //700 800 900 1000 frequency
	ambulance_label. id("ambulance_label");

	listener_label = createDiv("");                        //700 800 900 1000 frequency
	listener_label. id("listener_label");

	$(`#frequency_label`). css(`position` , `absolute`);
	$(`#frequency_label`). css(`line-height` , `1.6`);
	$(`#frequency_label`). css(`font-family` , `MathJexReg`);

	$(`#ambulance_label`). css(`position` , `absolute`);
	$(`#ambulance_label`). css(`line-height` , `1.6`);
	$(`#ambulance_label`). css(`font-family` , `MathJexReg`);

	$(`#listener_label`). css(`position` , `absolute`);
	$(`#listener_label`). css(`line-height` , `1.6`);
	$(`#listener_label`). css(`font-family` , `MathJexReg`);

	frequency_slider = createDiv("");
	frequency_slider. id(`frequency_slider`);
	frequency_slider_btn = createDiv("");
	frequency_slider_btn. id(`frequency_slider_btn`);
	ambulance_slider = createDiv("");
	ambulance_slider. id(`ambulance_slider`);
	ambulance_slider_btn = createDiv("");
	ambulance_slider_btn. id(`ambulance_slider_btn`);
	listener_slider = createDiv("");
	listener_slider. id(`listener_slider`);
	listener_slider_btn = createDiv("");
	listener_slider_btn. id(`listener_slider_btn`);

	$(`#frequency_slider`). css(`position` , `absolute`);
	$(`#frequency_slider`). css(`background-image` , `url('img/slider.png')` );
	$(`#frequency_slider_btn`). css(`position` , `absolute`);
	$(`#frequency_slider_btn`). css(`cursor` , `pointer`);
	$(`#frequency_slider_btn`). css(`background-image` , `url('img/Frequency sliderbtn.png')` );
	
	$(`#ambulance_slider`). css(`position` , `absolute`);
	$(`#ambulance_slider`). css(`background-image` , `url('img/slider.png')` );
	$(`#ambulance_slider_btn`). css(`position` , `absolute`);
	$(`#ambulance_slider_btn`). css(`cursor` , `pointer`);
	$(`#ambulance_slider_btn`). css(`background-image` , `url('img/Speed sliderbtn1.png')` );

	$(`#listener_slider`). css(`position` , `absolute`);
	$(`#listener_slider`). css(`background-image` , `url('img/slider.png')` );
	$(`#listener_slider_btn`). css(`position` , `absolute`);
	$(`#listener_slider_btn`). css(`cursor` , `pointer`);
	$(`#listener_slider_btn`). css(`background-image` , `url('img/Speed sliderbtn2.png')` );

	frequency_slider_btn. mousePressed( ()=>{
		frequency_slider_btn_clicked = true;
	})
	ambulance_slider_btn. mousePressed( ()=>{
		ambulance_slider_btn_clicked = true;
	})
	listener_slider_btn. mousePressed( ()=>{
		listener_slider_btn_clicked = true;
	})
	// Touch start
	frequency_slider_btn. touchStarted( ()=>{
		frequency_slider_btn_clicked = true;
	})
	ambulance_slider_btn. touchStarted( ()=>{
		ambulance_slider_btn_clicked = true;
	})
	listener_slider_btn. touchStarted( ()=>{
		listener_slider_btn_clicked = true;
	})

	// Touch End
	frequency_slider_btn. touchEnded( ()=>{
		frequency_slider_btn_clicked = false;
		adjustSlider();
	})
	ambulance_slider_btn. touchEnded( ()=>{
		ambulance_slider_btn_clicked = false;
		adjustSlider();
	})
	listener_slider_btn. touchEnded( ()=>{
		listener_slider_btn_clicked = false;
		adjustSlider();
	})

	frequency_slider_btn. mouseOver( ()=>{
		frequency_slider_btn. style(`transform` , `scale(1.1)`)
	})
	frequency_slider_btn. mouseOut( ()=>{
		frequency_slider_btn. style(`transform` , `scale(1)`)
	})
	ambulance_slider_btn. mouseOver( ()=>{
		ambulance_slider_btn. style(`transform` , `scale(1.1)`)
	})
	ambulance_slider_btn. mouseOut( ()=>{
		ambulance_slider_btn. style(`transform` , `scale(1)`)
	})
	listener_slider_btn. mouseOver( ()=>{
		listener_slider_btn. style(`transform` , `scale(1.1)`)
	})
	listener_slider_btn. mouseOut( ()=>{
		listener_slider_btn. style(`transform` , `scale(1)`)
	})
	/*frequency_slider_btn. mouseReleased( ()=>{
		frequency_slider_btn_clicked = false;
		adjustSlider();
	})*/

	Tab_diactive_time = new Date(). getTime();
	$(window).focus(function() {
		if(animation_pause != true){
			console. log("ACTIVATE");
			Tab_is_activate = true;
			// Tab_switch_time = 0;
			Tab_switch_time = new Date(). getTime() - Tab_diactive_time;
			console. log(new Date(). getTime() - Tab_diactive_time);
		}
	});

	$(window).blur(function() {
		if(animation_pause != true){
			console. log(`DEACTIVATE`)
			Tab_is_activate = false
			Tab_diactive_time = new Date(). getTime() - Tab_switch_time;
		}
	});
}

function draw_jarvis(){
	// console. log(ambulanceX)
	layoutPart();
	btnPart();
	if(Tab_is_activate){
		animationPart();

		for(var index in queue_circle){
			queue_circle[index]. expandCircle();
		}
		if(animation_start){
			var off_set_siren = 0;
			if(new Date(). getTime() > temp_time + sound_sleep_time && temp_time != 0 ){
				if(config["direction"] == "TL" || config["direction"] == "TC"  || config["direction"] == "AC" ){
					off_set_siren = 347
				}else{
					off_set_siren = 200
				}
				if(clr_flag == "red"){
					queue_circle. push(new CircleAnimation(ambulanceX + off_set_siren , 240 , 20 , 1000 , clr_flag) );
					clr_flag = "blue";
				}else{
					queue_circle. push(new CircleAnimation(ambulanceX + off_set_siren , 240 , 20 , 1000 , clr_flag) );
					clr_flag = "red";
				}
				temp_time = new Date(). getTime()
				// console. log("-----")
			}
		}
	}else{
		for(var index in queue_circle){
			queue_circle[index]. expandCircle(false);
		}	
	}
	sliderPart();
	
	scaleImgJq(`#ambulance` , ambulanceX , 150 + off_setY , 590 , 340);
	scaleImgJq(`#ambulance_copy` , ambulanceX , 150 + off_setY , 590 , 340);
	scaleImgJq(`#listener` , listenerX , 350 + off_setY , 110 , 180);
	scaleImgJq(`#listener_copy` , listenerX , 350 + off_setY , 110 , 180);
}

function layoutPart(){

	//LayOut Containt
	if(reset_btn_activated){
		$(`#reset_btn`). css(`pointer-events` , `auto`);
		$(`#reset_btn`). css(`opacity` , `1`);
	}else{
		$(`#go_btn`). css(`background-image` , `url('img/go.png')`)
		$(`#reset_btn`). css(`pointer-events` , `none`)
		$(`#reset_btn`). css(`opacity` , `0.5`);
	}
	if(go_btn_activated){
		$(`#go_btn`). css(`pointer-events` , `auto`);
		$(`#go_btn`). css(`opacity` , `1`);
		$(`#dummy_canvas`). css(`z-index` , `5`)
		if(reset_btn_activated){
			scaleImgJq(`#dummy_canvas` , 34 , 990 , 1390 , 190)
		}
	}else{
		dummy_canvas. hide();
		// $(`#go_btn`). css(`pointer-events` , `none`)
		$(`#go_btn`). css(`opacity` , `1`);
	}
	scaleImgCss(reset_btn , 2122 , 1253 , 315 , 106);
	scaleImgCss(go_btn , 1760 , 1253 , 315 , 106);

	if(config["who_is_moving"] == "ambulance"){
		$("#bg-container"). css(`background-image` , `url('img/Bg1.png')`)		
	}else{
		$("#bg-container"). css(`background-image` , `url('img/Bg2.png')`)
	}

	scaleImgCss(bg_container , bg_containerX , bg_containerY , bg_containerW , bg_containerH);
	
	$(`#frequency_box`). css(`font-family` , `MathJexReg`);
	$(`#frequency_box`). css(`font-size` , 45 * scl_x + "px" );
	$(`#frequency_box`). css(`color` , `white`)
	$(`#frequency_box`). html( round( config[`frequency`] )  + "&nbsp");

	$(`#speed_ambulance_box`). css(`font-family` , `MathJexReg`);
	$(`#speed_ambulance_box`). css(`font-size` , 45 * scl_x + "px" );
	$(`#speed_ambulance_box`). css(`color` , `white`)
	$(`#speed_ambulance_box`). html( (config[`who_is_moving`] == `ambulance`) ? ( round( config[`speed_ambulance`] )  + "&nbsp") : `0 &nbsp` );
	
	$(`#speed_listener_box`). css(`font-family` , `MathJexReg`);
	$(`#speed_listener_box`). css(`font-size` , 45 * scl_x + "px" );
	$(`#speed_listener_box`). css(`color` , `white`)
	$(`#speed_listener_box`). html( (config[`who_is_moving`] == `listener`) ? ( round( config[`speed_listener`] )  + "&nbsp") : `0 &nbsp`);

	$(`#observed_frequency_box`). css(`font-family` , `MathJexReg`);
	$(`#observed_frequency_box`). css(`font-size` , 45 * scl_x + "px" );
	$(`#observed_frequency_box`). css(`color` , `white`)
	var observed_frequency = observedFrequency();
	$(`#observed_frequency_box`). html( observed_frequency. toFixed(2). replace("." , ",")  + "&nbsp");	


	scaleImgJq(`#frequency_box` , 2226 , 905 , 182 , 64)
	scaleImgJq(`#speed_ambulance_box` , 2226 , 979 , 182 , 64)
	scaleImgJq(`#speed_listener_box` , 2226 , 1059 , 182 , 64)
	scaleImgJq(`#observed_frequency_box` , 2226 , 1133 , 182 , 64)

	scaleImgJq(`#dummy_road` , 0 , off_setY , ACT_W , 848 - off_setY)
}

function btnPart(){
	if(config["who_is_moving"] == "ambulance"){
		$(`#dummy_move_lis_btn`). css("cursor" , `pointer`);
		$(`#dummy_move_amb_btn`). css("cursor" , `default`);
		$("#who_is_moving_btn"). css(`background-image` , `url('img/Moving1.png')`)		
	}else{
		$(`#dummy_move_amb_btn`). css("cursor" , `pointer`);
		$(`#dummy_move_lis_btn`). css("cursor" , `default`);
		$("#who_is_moving_btn"). css(`background-image` , `url('img/Moving2.png')`)
	}	

	scaleImgJq(`#who_is_moving_btn` , 2113 , 6 + off_setY , 438 , 151)
	scaleImgJq(`#dummy_move_amb_btn` , 2120 , 54 + off_setY , 206 , 90);
	scaleImgJq(`#dummy_move_lis_btn` , 2335 , 54 + off_setY , 206 , 90);


	if(config["who_is_moving"] == "ambulance"){
		scaleImgJq(`#direction_btn_slider` , 1167 , 563 + off_setY , 206 , 78);
		if(config["direction"] == "TL" && wait_for_direction_btn_change == false){
		
			$(`#direction_btn_left_content`). css(`background-image` , `url('img/Man1.png')`);
			scaleImgJq(`#direction_btn_left_content` , 1127 , 548 + off_setY , 22 , 93);
			$(`#direction_btn_right_content`). css(`background-image` , `url('img/Man2.png')`);
			scaleImgJq(`#direction_btn_right_content` , 1485 , 548 + off_setY , 22 , 93);
			
			$(`#direction_btn_left_arrow`). css(`background-image` , `url('img/Arrow1.png')`);
			$(`#direction_btn_left_arrow`). css(`transform` , `rotate(0deg)`);
			scaleImgJq(`#direction_btn_left_arrow`, 1025 , 563 + off_setY , 86 , 67)

			$(`#direction_btn_right_arrow`). css(`background-image` , `url('img/Arrow2.png')`);
			$(`#direction_btn_right_arrow`). css(`transform` , `rotate(0deg)`);
			scaleImgJq(`#direction_btn_right_arrow`, 1383 , 563 + off_setY , 86 , 67)
			
			scaleImgJq(`#direction_btn` , 1293 , 562 + off_setY , 79 , 79)
		}else if(wait_for_direction_btn_change == false){

			$(`#direction_btn_left_content`). css(`background-image` , `url('img/Man2.png')`);
			scaleImgJq(`#direction_btn_left_content` , 1127 , 548 + off_setY , 22 , 93);
			$(`#direction_btn_right_content`). css(`background-image` , `url('img/Man1.png')`);
			scaleImgJq(`#direction_btn_right_content` , 1485 , 548 + off_setY , 22 , 93);
			
			$(`#direction_btn_left_arrow`). css(`background-image` , `url('img/Arrow2.png')`);
			$(`#direction_btn_left_arrow`). css(`transform` , `rotate(180deg)`);
			scaleImgJq(`#direction_btn_left_arrow`, 1025 , 563 + off_setY , 86 , 67)

			$(`#direction_btn_right_arrow`). css(`background-image` , `url('img/Arrow1.png')`);
			$(`#direction_btn_right_arrow`). css(`transform` , `rotate(180deg)`);
			scaleImgJq(`#direction_btn_right_arrow`, 1383 , 563 + off_setY , 86 , 67)

			scaleImgJq(`#direction_btn` , 1167 , 562 + off_setY , 79 , 79)	
		}
	
	}else{
		scaleImgJq(`#direction_btn_slider` , 1185 , 563 + off_setY , 206 , 78);
		if(config["direction"] == "TC" && wait_for_direction_btn_change == false){
			
			$(`#direction_btn_left_content`). css(`background-image` , `url('img/Ambulanceicon2.png')`);
			scaleImgJq(`#direction_btn_left_content` , 937 , 564 + off_setY , 139 , 65);
			$(`#direction_btn_right_content`). css(`background-image` , `url('img/Ambulanceicon1.png')`);
			scaleImgJq(`#direction_btn_right_content` , 1491 , 564 + off_setY , 139 , 65);
			
			$(`#direction_btn_left_arrow`). css(`background-image` , `url('img/Arrow2.png')`);
			$(`#direction_btn_left_arrow`). css(`transform` , `rotate(180deg)`);
			scaleImgJq(`#direction_btn_left_arrow`, 1089 , 563 + off_setY , 86 , 67)

			$(`#direction_btn_right_arrow`). css(`background-image` , `url('img/Arrow1.png')`);
			$(`#direction_btn_right_arrow`). css(`transform` , `rotate(180deg)`);
			scaleImgJq(`#direction_btn_right_arrow`, 1404 , 563 + off_setY , 86 , 67)
			
			scaleImgJq(`#direction_btn` , 1185 , 562 + off_setY , 79 , 79)

		}else if(wait_for_direction_btn_change == false){
			
			$(`#direction_btn_left_content`). css(`background-image` , `url('img/Ambulanceicon1.png')`);
			scaleImgJq(`#direction_btn_left_content` , 937 , 564 + off_setY , 139 , 65);
			$(`#direction_btn_right_content`). css(`background-image` , `url('img/Ambulanceicon2.png')`);
			scaleImgJq(`#direction_btn_right_content` , 1491 , 564 + off_setY , 139 , 65);
			
			$(`#direction_btn_left_arrow`). css(`background-image` , `url('img/Arrow1.png')`);
			$(`#direction_btn_left_arrow`). css(`transform` , `rotate(0deg)`);
			scaleImgJq(`#direction_btn_left_arrow`, 1089 , 563 + off_setY , 86 , 67)

			$(`#direction_btn_right_arrow`). css(`background-image` , `url('img/Arrow2.png')`);
			$(`#direction_btn_right_arrow`). css(`transform` , `rotate(0deg)`);
			scaleImgJq(`#direction_btn_right_arrow`, 1404 , 563 + off_setY , 86 , 67)

			scaleImgJq(`#direction_btn` , 1319 , 562 + off_setY , 79 , 79)
		
		}
	}	
}

function animationPart(){
	if(animation_start){
		
		//Ambulance Move

		if(config["who_is_moving"] == "ambulance" && config["speed_ambulance"] != 0){

			if(config["direction"] == "TL"){
				time_animation = map(config["speed_ambulance"] , 10 , 60 , AMB_MIN_SPEED_TIME , AMB_MAX_SPEED_TIME);
				ambulanceX = map(new Date(). getTime() + after_change_direction_time_left - Tab_switch_time  , animation_start_time , animation_start_time + time_animation , ambulanceStart , ambulanceEnd);
				


				if(ambulanceX > ambulanceEnd){
					animation_start = false
					in_loop_change_direction =  false;
					after_change_direction_time_left = 0;
					clearInterval(move_loop_animation); 

					changeDirection();
					reset_btn_activated = false;
					go_btn_activated = true;
					Tab_switch_time = 0;
				}
			}else{

				time_animation = map(config["speed_ambulance"] , 10 , 60 , AMB_MIN_SPEED_TIME , AMB_MAX_SPEED_TIME);
				// if(in_loop_change_direction){

				// }
				ambulanceX = map(new Date(). getTime() + after_change_direction_time_left - Tab_switch_time  , animation_start_time , animation_start_time + time_animation , ambulanceEnd , ambulanceStart );
				
				if(ambulanceX < ambulanceStart){
					animation_start = false;
					in_loop_change_direction = false;
					after_change_direction_time_left = 0;
					clearInterval(move_loop_animation);

					changeDirection();
					reset_btn_activated = false;
					go_btn_activated = true;
					Tab_switch_time = 0;
				}
			}
		}else{
			if(config["speed_listener"] != 0 && config[`who_is_moving`] == "listener"){
				time_animation = map(config["speed_listener"] , 1 , 6 , LIST_MIN_SPEED_TIME , LIST_MAX_SPEED_TIME)
				listenerX = map(new Date(). getTime() + after_change_direction_time_left - Tab_switch_time , animation_start_time , animation_start_time + time_animation , listenerStart , listenerEnd);
				
				if(listenerX < listenerEnd){
					animation_start = false;
					in_loop_change_direction = false;
					after_change_direction_time_left = 0;
					clearInterval(move_loop_animation);

					changeDirection();
					reset_btn_activated = false;
					go_btn_activated = true;
					Tab_switch_time = 0;
				}
			}
		}
	}

	if(copy_of_ambulance_updated == true){
		if(config["direction"] == "TL"){
			$(`#ambulance`). css(`background-image` , `url('img/Ambulance animation1/Ambulance ani${render_img_count}.png')`);
		}else{
			$(`#ambulance`). css(`background-image` , `url('img/Ambulance animation2/Ambulance ani${render_img_count}.png')`);
		}
		copy_of_ambulance_updated = false;
	}
	if(copy_of_listener_updated == true){
		$(`#listener`). css(`background-image` , `url('img/Man animation/Man ani${render_img_count}.png')`)
		copy_of_listener_updated = false;
	}

	/*scaleImgJq(`#ambulance` , ambulanceX , 150 + off_setY , 590 , 340);
	scaleImgJq(`#ambulance_copy` , ambulanceX , 150 + off_setY , 590 , 340);
	scaleImgJq(`#listener` , listenerX , 350 + off_setY , 110 , 180);
	scaleImgJq(`#listener_copy` , listenerX , 350 + off_setY , 110 , 180)*/;
}

function animationStart(){
	console. log(config[`direction`])
	reset_btn_activated = true
	resetCircleAnimation();
	animation_start = true;
	clearInterval(move_loop_animation)
	render_img_count = 0;
	animation_start_time = new Date(). getTime();
	if(config["who_is_moving"] == "ambulance"){
		//-----------------Ambulance------------------//
		// time_per_img = map(config["speed_ambulance"] , 0 , 60 , 200 , 20); 
		time_per_img = map(config["speed_ambulance"] , 0 , 60 , AMB_MIN_SPEED_CHANG_FRAME_TIME , AMB_MAX_SPEED_CHANG_FRAME_TIME);
		if(config["direction"] == "TL"){
			render_img_count = 1
			console. log("sdlk")
			move_loop_animation = setInterval( function (){
				if(Tab_is_activate == true){
					// console. log(`----+++++-----+++++-----`)
					$(`#ambulance_copy`). css(`background-image` , `url('img/Ambulance animation1/Ambulance ani${render_img_count}.png')`)
					copy_of_ambulance_updated = true;
					if(config[`speed_ambulance`]!=0){
						render_img_count++;
					}
					if(render_img_count >= 7){
						render_img_count = 1;
					}
					time_per_img = map(config["speed_ambulance"] , 0 , 60 , AMB_MIN_SPEED_CHANG_FRAME_TIME , AMB_MAX_SPEED_CHANG_FRAME_TIME);
				}
			} , time_per_img);	
		}else{
			render_img_count = 18;
			move_loop_animation = setInterval( function (){
				if(Tab_is_activate == true){
					console. log(`ksjfkj`)
					$(`#ambulance_copy`). css(`background-image` , `url('img/Ambulance animation2/Ambulance ani${render_img_count}.png')`)
					copy_of_ambulance_updated = true
					if(config[`speed_ambulance`]!=0){
						render_img_count--;
					}
					if(render_img_count <= 12){
						render_img_count = 18;
					}
					time_per_img = map(config["speed_ambulance"] , 0 , 60 , AMB_MIN_SPEED_CHANG_FRAME_TIME , AMB_MAX_SPEED_CHANG_FRAME_TIME);
				}
			} , time_per_img);
		}
	}else{
		//--------------------Listener---------------//
		// time_per_img = map(config["speed_listener"] , 0 , 5 , 50 , 10);
		render_img_count = 1
		time_per_img = map(config["speed_listener"] , 0 , 5 , LIST_MIN_SPEED_CHANG_FRAME_TIME , LIST_MAX_SPEED_CHANG_FRAME_TIME);
		move_loop_animation = setInterval( function (){
			if(Tab_is_activate == true){
				$(`#listener_copy`). css(`background-image` , `url('img/Man animation/Man ani${render_img_count}.png')`);
				copy_of_listener_updated = true;
				if(config[`speed_listener`]!=0){
					render_img_count++;
				}				if(render_img_count >= 24){
					render_img_count = 1;
				}
				new CircleAnimation(447 , 492 , 20 , 400);
				time_per_img = map(config["speed_listener"] , 0 , 5 , LIST_MIN_SPEED_CHANG_FRAME_TIME , LIST_MAX_SPEED_CHANG_FRAME_TIME);
			}
		} , time_per_img);
	}


	temp_time = new Date(). getTime();
}

class CircleAnimation{
	constructor(x, y, r , boundry , clr = "red"){
		this. x = x;
		this. y = y;
		this. r = r;
		this. circle_div = createDiv("");
		this. circle_div. parent("dummy_road")
		this. circle_div. style("position" , "absolute");
		// this. circle_div. style("background-color" , "red")
		this. circle_div. style("border-radius" , "50%" );
		this. circle_div. style("border-style" , "solid")
		this. circle_div. style("border-color" , clr);
		this. boundry = boundry;
		// this. expandCircle();
		// this. rate_of_change = map(config["frequency"] , 700 ,		9898 1000 , 12 , 30) * (frameRate() / 60); 
	}

	expandCircle(expand_ = true){	
			// console. log(frameRate())
			// this. r += map(config["frequency"] , 700 , 1000 , 5 , 15) * (60/frameRate());
			if(expand_ == true){
				if(frameRate() > 10){
					this. r += map(config["frequency"] , 700 , 1000 , FRQ_MIN_SPEED_OF_EXPAND , FRQ_MAX_SPEED_OF_EXPAND) * (60/frameRate());
				}else{
					this. r += map(config["frequency"] , 700 , 1000 , FRQ_MIN_SPEED_OF_EXPAND , FRQ_MAX_SPEED_OF_EXPAND) * (60/15);
				}
				// this. r += this. rate_of_change	
				this. circle_div. style("border-width" , 5 * scl_x + "px");

				scaleImgCss(this. circle_div , this.x - this. r , this. y - this. r  , 2 * this. r , 2 * this. r , false , true);
				if(this. r > this. boundry * 0.1){
					this. circle_div. style("opacity" , `${map(this. r , this. boundry * 0.6 , this. boundry , 1 , 0.1)}` )
					// console. log("okay")
				}
				if(this. r > this. boundry){
					this. circle_div. style("opacity" , "0");
					this. circle_div. remove();
					queue_circle. splice(0 , 1)
				}
			}else{
				scaleImgCss(this. circle_div , this.x - this. r , this. y - this. r  , 2 * this. r , 2 * this. r , false , true);
			}
	}
}

function resetCircleAnimation(){
	queue_circle. forEach( function (item , index){
		item. circle_div. remove();
	})
	delete queue_circle;
	queue_circle = [];
	// animation_start = false;
	// clearInterval(move_loop_animation);
	/*if(config["direction"] == "TL" || config["direction"] == "TC"){
		ambulanceX = ambulanceStart;
		listenerX = listenerStart;
	}*/
}

function sliderPart(){
	scaleImgJq(`#frequency_label` , 84 , 980 , 636 , 50);
	$(`#frequency_label`). css(`font-size` , 48 * scl_x + "px");
	$(`#frequency_label`). html(frequency_value_text);

	scaleImgJq(`#frequency_slider` , 108 , 1115 , 576 , 18)
	
	if(config["who_is_moving"] == "ambulance"){
		$(`#listener_speed_slider`). hide()
		scaleImgJq(`#ambulance_label` , 835 , 980 , 636 , 50);
		$(`#listener_label`). hide();
		$(`#ambulance_label`). css(`font-size` , 48 * scl_x + "px");
		$(`#ambulance_label`). html(ambulance_speed_value_text);	
		scaleImgJq(`#ambulance_slider` , 837 , 1115 , 576 , 18)
	}else{
		$(`#ambulance_label`). hide();
		$(`#ambulance_slider`). hide()
		scaleImgJq(`#listener_label` , 835 , 980 , 636 , 50);
		$(`#listener_label`). css(`font-size` , 48 * scl_x + "px");
		$(`#listener_label`). html(listener_speed_value_text);
		scaleImgJq(`#listener_slider` , 837 , 1115 , 576 , 18)
	}

	let frequency_slider_btn_x;
	let ambulance_slider_btn_x;
	let listener_slider_btn_x;

	//------------variance of speed when change slider position----------------------//
	let distance_traveled = 0;
	let distance_traveled_time = 0;
	if(animation_start == true){
		if(config[`who_is_moving`] == `ambulance`){
			if(config[`direction`] == `TL`){
				distance_traveled = ambulanceX - ambulanceStart;
			}else{
				distance_traveled =  ambulanceEnd - ambulanceX;
			}
		}else{
			distance_traveled = listenerX - listenerStart;
		}
		distance_traveled_time = new Date(). getTime();
	}
	//-------------------------------------------------------------------------------//

	if(frequency_slider_btn_clicked == true){
		frequency_slider_btn_x = moveSliderBtn(frequency_btn_start , frequency_btn_end);
		frequency_slider_btn_value = map(frequency_slider_btn_x , frequency_btn_start , frequency_btn_end , 700 , 1000);
	}else if(ambulance_slider_btn_clicked){
		ambulance_slider_btn_x = moveSliderBtn(slider2_start , slider2_end);
		ambulance_slider_btn_value = map(ambulance_slider_btn_x , slider2_start , slider2_end , 0 , 30);
	}else if(listener_slider_btn_clicked){
		listener_slider_btn_x = moveSliderBtn(slider2_start , slider2_end);
		listener_slider_btn_value = map(listener_slider_btn_x , slider2_start , slider2_end , 0 , 5);
	}

	scaleImgJq(`#frequency_slider_btn` , sliderPosition(frequency_slider_btn_value , 700 , 1000 , frequency_btn_start , frequency_btn_end) , 1054 , 75 , 129 )
	if(config[`who_is_moving`] == "ambulance"){
		$(`#listener_slider_btn`). hide();
		$(`#listener_slider`). hide();
		scaleImgJq(`#ambulance_slider_btn` , sliderPosition(ambulance_slider_btn_value , 0 , 30 , slider2_start , slider2_end) , 1054 , 75 , 129 )
	}else{
		$(`#ambulance_slider_btn`). hide();
		$(`#ambulance_slider`). hide();
		scaleImgJq(`#listener_slider_btn` , sliderPosition(listener_slider_btn_value , 0 , 5 , slider2_start , slider2_end) , 1054 , 75 , 129 );
	}
	config[`frequency`] = frequency_slider_btn_value;
	config[`speed_ambulance`] = ambulance_slider_btn_value;
	config[`speed_listener`] = listener_slider_btn_value;

	if(ambulance_slider_btn_clicked){
		var time_animation = map(config["speed_ambulance"] , 10 , 60 , AMB_MIN_SPEED_TIME , AMB_MAX_SPEED_TIME);
		var new_time_for_disatnce_travel = map(distance_traveled , 0 , ambulanceEnd - ambulanceStart , animation_start_time , animation_start_time + time_animation);
		var diff_time = new_time_for_disatnce_travel - distance_traveled_time;
		
		animation_start_time = animation_start_time + after_change_direction_time_left - diff_time - Tab_switch_time;
	}else if(listener_slider_btn_clicked){
		var time_animation = map(config["speed_listener"] , 1 , 6 , LIST_MIN_SPEED_TIME , LIST_MAX_SPEED_TIME);
		var new_time_for_disatnce_travel = map(distance_traveled , 0 , listenerEnd - listenerStart , animation_start_time , animation_start_time + time_animation );
		
		var diff_time = new_time_for_disatnce_travel - distance_traveled_time;
		
		animation_start_time = animation_start_time + after_change_direction_time_left - diff_time - Tab_switch_time;
	}

	// console. log(ambulance_slider_btn_value)
}

function moveSliderBtn(start , end){
	if( ( start * scl_x + imgX ) > mouseX){
		return start;
	}else if(( end * scl_x + imgX ) < mouseX ){
		return end;
	}else{
		return (  (mouseX - imgX) / scl_x ); 
	}
}

function sliderPosition(value , start , end , positionStart , positionEnd){
	var width_slider = 70/2;
	var positionX = map(value , start , end , positionStart , positionEnd);
	return positionX - width_slider;
}

function adjustSlider(){
	var frequency_label_distance = 100;
	frequency_slider_btn_value = frequency_label_distance * round ( frequency_slider_btn_value / frequency_label_distance );
	// var ambulance_label_distance = 10;
	var ambulance_label_distance = 5;
	ambulance_slider_btn_value = ambulance_label_distance * round ( ambulance_slider_btn_value / ambulance_label_distance );
	var listener_label_distance = 1;
	listener_slider_btn_value = listener_label_distance * round ( listener_slider_btn_value / listener_label_distance );
	// console. log("okay")
}

function resetClickedEffect(){
	frequency_slider_btn_clicked = false;
	ambulance_slider_btn_clicked = false;
	listener_slider_btn_clicked = false;
	adjustSlider();
}

function resetListenerAmbulanceImg(){
	reset_btn_activated = false;
	if(in_loop_change_direction != true){
		go_btn_activated = true;
	}
	$(`#ambulance`). css(`background-image` , `url('img/Ambulance animation1/Ambulance ani1.png')`);
	$(`#ambulance_copy`). css(`background-image` , `url('img/Ambulance animation1/Ambulance ani1.png')`);
	if(config["direction"] == "TL"){
		$(`#ambulance`). css(`background-image` , `url('img/Ambulance animation1/Ambulance ani1.png')`);
		$(`#ambulance_copy`). css(`background-image` , `url('img/Ambulance animation1/Ambulance ani1.png')`);
	}else if(config["direction"] == "AL"){
		$(`#ambulance`). css(`background-image` , `url('img/Ambulance animation2/Ambulance ani1.png')`);
		$(`#ambulance_copy`). css(`background-image` , `url('img/Ambulance animation2/Ambulance ani1.png')`);
	}
	$(`#listener_copy`). css(`background-image` , `url('img/Man animation/Man ani1.png')`);
	$(`#listener`). css(`background-image` , `url('img/Man animation/Man ani1.png')`);
}

function observedFrequency(){
	var speed_sound_wave = 340;
	if(config[`direction`] == `TL`){
		return ( ( speed_sound_wave ) / ( speed_sound_wave - config["speed_ambulance"]) ) * config[`frequency`];
	}else if(config[`direction`] == `AL`){
		return ( ( speed_sound_wave ) / ( speed_sound_wave + config["speed_ambulance"]) ) * config[`frequency`]
	}else if(config[`direction`] == `TC`){
		return ( ( speed_sound_wave + config["speed_listener"] ) / ( speed_sound_wave ) ) * config[`frequency`]
	}else if(config[`direction`] == `AC`){
		return ( ( speed_sound_wave - config["speed_listener"] ) / ( speed_sound_wave ) ) * config[`frequency`]
	}
}

function resetPosition(){
	clearInterval(move_loop_animation);
	if(config[`direction`] == `TL`){
		ambulanceX = ambulanceStart;
	}else if(config[`direction`] == `AL`){
		ambulanceX = ambulanceEnd;
	}
	listenerX = listenerStart;
	animation_start = false;
	after_change_direction_time_left = 0;
	in_loop_change_direction = false;
	resetCircleAnimation();
	resetListenerAmbulanceImg();

	// Tab_switch_time = 0;
	animation_pause = false;
	// Tab_diactive_time = new Date(). getTime();
}

function changeDirection(){
	if(config["who_is_moving"] == "ambulance"){
			if(config["direction"] == "TL"){
				wait_for_direction_btn_change = true;
				$(`#direction_btn`). animate({left:`${1167 * scl_y + imgX}px`} , ()=>{
					// Tab_switch_time = 0;
					resetCircleAnimation();
					wait_for_direction_btn_change = false
					config["direction"] = "AL";
					if(animation_start != true){
						ambulanceX = ambulanceEnd;
						listenerX = listenerStart;		
					}
					resetListenerAmbulanceImg();

					//Reset animation
					if(animation_start != true){
						clearInterval(move_loop_animation);
						animation_start = false
					}else{
						clearInterval(move_loop_animation);
						// console. log(Tab_switch_time)
						if(Tab_is_activate){
							if(Tab_switch_time == 0){
								after_change_direction_time_left = -after_change_direction_time_left + time_animation + animation_start_time  - new Date(). getTime()  //+ 2 * (new Date(). getTime() - Tab_diactive_time) //- (new Date(). getTime() - Tab_diactive_time) // //+ (+ Tab_switch_time_total) //- Tab_diactive_time - Tab_switch_time );
							}else{
								after_change_direction_time_left = -after_change_direction_time_left + time_animation + animation_start_time  - new Date(). getTime() + 2 * Tab_switch_time  // Tab_switch_time_total //+  (new Date(). getTime() - Tab_diactive_time)// + Tab_switch_time_total) //- (new Date(). getTime() - Tab_diactive_time) // //+ (+ Tab_switch_time_total) //- Tab_diactive_time - Tab_switch_time );								
							}
						}else{
							after_change_direction_time_left = -after_change_direction_time_left + time_animation + animation_start_time  - new Date(). getTime()  + 2 * (new Date(). getTime() - Tab_diactive_time) //- (new Date(). getTime() - Tab_diactive_time) // //+ (+ Tab_switch_time_total) //- Tab_diactive_time - Tab_switch_time );
						}
						// console. log(config[`direction`])
						console. log("okkokokokookokko" ,  after_change_direction_time_left)
						// Tab_switch_time = 0;
						animationStart();
					}
				})

			}else{
				wait_for_direction_btn_change = true;
				$(`#direction_btn`). animate({left:`${1293 * scl_y + imgX}px`} , ()=>{
					// Tab_switch_time = 0
					resetCircleAnimation();
					wait_for_direction_btn_change = false
					config["direction"] = "TL";
					if(animation_start != true){
						ambulanceX = ambulanceStart;
						listenerX = listenerStart;
					}
					resetListenerAmbulanceImg();

					//Reset animation
					if(animation_start != true){
						clearInterval(move_loop_animation);
						animation_start = false
					}else{
						clearInterval(move_loop_animation);
						if(Tab_is_activate){
							if(Tab_switch_time == 0){
								after_change_direction_time_left = -after_change_direction_time_left + time_animation + animation_start_time  - new Date(). getTime();
							}else{
								after_change_direction_time_left = -after_change_direction_time_left + time_animation + animation_start_time  - new Date(). getTime() + 2 * Tab_switch_time;		
							}
						}else{
							after_change_direction_time_left = -after_change_direction_time_left + time_animation + animation_start_time  - new Date(). getTime() + 2 * (new Date(). getTime() - Tab_diactive_time);		
						}
						console. log("okkokokokookokko" ,  after_change_direction_time_left)
						animationStart();
					}
				})
			}
		}else{
			if(config["direction"] == "TC"){
				wait_for_direction_btn_change = true;
				$(`#direction_btn`). animate({left:`${1319 * scl_y + imgX}px`} , ()=>{
					resetCircleAnimation();
					wait_for_direction_btn_change = false
					config["direction"] = "AC";
					if(animation_start != true){
						listenerX = listenerStart;
					}
					ambulanceX = ambulanceEnd;
					resetListenerAmbulanceImg();
					if(animation_start != true){
						clearInterval(move_loop_animation);
						animation_start = false
					}else{
						clearInterval(move_loop_animation);
						after_change_direction_time_left = after_change_direction_time_left - animation_start_time + new Date(). getTime() //+ Tab_switch_time;
						animationStart();
					}
				})
			}else{
				wait_for_direction_btn_change = true;
				$(`#direction_btn`). animate({left:`${1185 * scl_y + imgX}px`} , ()=>{
					resetCircleAnimation();
					wait_for_direction_btn_change = false
					config["direction"] = "TC";
					if(animation_start != true){
						listenerX = listenerStart;
					}	
					ambulanceX = ambulanceStart;
					resetListenerAmbulanceImg();

					//Reset animation
					if(animation_start != true){
						clearInterval(move_loop_animation);
						animation_start = false
					}else{
						clearInterval(move_loop_animation);
						after_change_direction_time_left = after_change_direction_time_left - animation_start_time + new Date(). getTime();
						animationStart();
					}
				})
			}
		}

		if(animation_start){
			in_loop_change_direction = true;
		}
}
