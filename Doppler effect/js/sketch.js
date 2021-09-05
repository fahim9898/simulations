function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
const SIM_heading = "Investigate the Doppler effect with sound" ;

document. title = titleCase ( SIM_heading ) ;

//Orignal Image
var ACT_W = 2560 , ACT_H = 1440;
var imgX = 0, imgY = 0 , scl_x = 0 , scl_y = 0;
var SCL_CONST = 2.15246;
var CLICK_TIME = 200;

// click 
var clickInst = false;

// hover;
var hoverInst = false;


//instruction scl
ori_instclose_x = 1480, ori_instclose_y = 30, ori_instclose_w = 127, ori_instclose_h = 85;


function setup(){
	
	cnv = createCanvas( windowWidth , windowHeight);
	Scaling();

	bg = loadImage("img/BG_EDU.png");

	// bg. style("overflow" , "hidden")


	// bg2 = loadImage("img/Bg1.png")

	fontRobotMedian=loadFont("font/Roboto-Medium.ttf");
	fontRobotoLit=loadFont("font/Roboto-Light.ttf");
	fontLatoBold=loadFont("font/Lato-Bold.ttf");
	fontLatoReg=loadFont("font/Lato-Regular.ttf");
	

	/*contain_img = createDiv("");
	contain_img. style("background-image" , "url('img/Bg1.png')");
	contain_img. style("background-repeat" , "none");
	contain_img.hide();*/

	// instruction
	compInstPanel = select("#inst-div");
	compInstructionClose = select("#instclosecss")
	compInst = createDiv("");
	compInst. style("background-image" , "url('img/inst_btn.png')");

	blue_line_1 = createDiv();
	blue_line_1. style("background-color" , "rgb( 18 , 167 , 219)");
	blue_line_1. hide();

	blue_line_2 = createDiv();
	blue_line_2. style("background-color" , "rgb( 18 , 167 , 219)");
	blue_line_2. hide();
	

	compInstX = 78 , compInstY = 1255 , compInstW = 420 , compInstH = 101;

	
	// INSTRUCTION
	compInst. mouseOver(function (){
		hoverInst = true ; compInst.style("cursor" , "pointer")
		// 
	} );
	compInst. mouseOut(function (){ 
		hoverInst = false
		// 
	});
	compInst. mouseClicked(function (){
		clickFormula = false;
		clickInst = true; 
		hoverInst = false;
		setTimeout(function (){
			hoverInst = true;
		},CLICK_TIME);
	});
	compInstructionClose. mouseOver( function (){
		ori_instclose_x = 1476, ori_instclose_y = 27, ori_instclose_w = 145, ori_instclose_h = 93.3;
		// 
	})
	compInstructionClose. mouseOut( function (){
		ori_instclose_x = 1480, ori_instclose_y = 30, ori_instclose_w = 127, ori_instclose_h = 85;
		// 
	})
	compInstructionClose. mouseClicked( function (){
		clickInst = false
		// 
	})

	/*contain_img. mouseReleased( function () {
		resetClick();
		// 
	})
	contain_img. touchEnded( function () {
		resetClick();
		// 
	})*/
	cnv. style("overflow" , "hidden")
	cnv. mouseReleased( function (){
		resetClick();
		// 
	})
	cnv. touchEnded( function (){
		resetClick();
		// 
	})

	
	windowResized();

	set_jarvis();
}
function resizeLoad(){
}


function resetClick(){
	
}


function draw(){
	background(255 , 255 , 255);
	instruction_scl();
	// console. log(Tab_is_activate)
	Scaling();
	display_all_img();

	fill(255);
	textHeadX = 93 , textHeadY = 52 , textHeadS = 46;
	textSize( textHeadS * scl_y );
	textFont( fontLatoBold );
	textAlign(LEFT,CENTER);
	text("Investigate the Doppler effect with sound", textHeadX * scl_x + imgX , textHeadY * scl_y + imgY);

	fill("#676767");
	textSubHX = 124 , textSubHY = 152 , textSubHS = 37;
	textSize(textSubHS * scl_y);
	textFont(fontLatoReg);
	textAlign(LEFT,CENTER);
	text("Set the parameters for the movement of the ambulance or the listener and observe the sound", textSubHX * scl_x + imgX , textSubHY * scl_y + imgY);

	text7X=31,text7Y=1400,text7S=40;
	fill(0)
	textSize(text7S*scl_x);
	textFont(fontRobotoLit);
	textAlign(LEFT,CENTER);
	text("Physical Sciences    ",text7X*scl_x+imgX,text7Y*scl_y+imgY);
	textFont(fontRobotMedian);
	text("  Grade 12",340*scl_x+imgX,text7Y*scl_y+imgY);

	if(clickInst == true){
		compInstPanel. position(80 * scl_x + imgX , 435 * scl_y + imgY);
		compInstPanel. show();
	}

	if(clickInst == false){
		compInstPanel. hide();
		// 
	}

	draw_jarvis();
}

function display_all_img(){
	//background - img
	scaleImg(bg , 0 , 0 , ACT_W , ACT_H) ;

	// #INSTRUCTION 
	if(hoverInst == false){
		scaleImgCss(compInst , compInstX , compInstY , compInstW , compInstH);
	}else{
		scaleImgCss(compInst , compInstX - compInstW * 0.05 , compInstY - compInstH * 0.05 , compInstW * 1.09 , compInstH * 1.08);
		
	}
}	




function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	// intractiveText();
	// intractiveTextScale()
	scaleImgCss(blue_line_1 , 0 , 230 , ACT_W  , 15);
	scaleImgCss(blue_line_2 , 0 , 975 + 245 , ACT_W  , 15);
}

function Scaling(){
	imgX = 0; imgY = 0;
	scl_x=windowWidth/ACT_W;
	scl_y=windowHeight/ACT_H;
	if(scl_x>1 && scl_y>1){
			// console.log(1)
			scl_x = 1 , scl_y = 1;
			imgX=( windowWidth - ( scl_x * ACT_W ) ) / 2;
			imgY=( windowHeight - ( scl_y * ACT_H ) ) / 2;

	}else{
			// console.log(2)
			if(scl_x<scl_y){
				scl_y = scl_x;
				imgY = ( windowHeight - ( scl_y * ACT_H ) ) / 2;
			}else{
				scl_x = scl_y;
				imgX= ( windowWidth - ( scl_x * ACT_W ) )/2;
			}
	}
}

function scaleImg(tempImg ,tempX , tempY , tempW = 0 , tempH = 0){
	tempX = scl_x * tempX + imgX;
	tempY = scl_y * tempY + imgY;
	tempW = scl_x * tempW;
	tempH = scl_y * tempH;
	if(tempH != 0 && tempW != 0){
		image(tempImg , tempX , tempY , tempW , tempH);
	}else{
		image(tempImg , tempX , tempY);
	}
}

function scaleImgCss(tempImg ,tempX , tempY , tempW = 0 , tempH = 0  , contain = false , child = false , marginX = 1 , marginY = 1){
	if(child == false){
		tempX = scl_x * tempX + imgX;
		tempY = scl_y * tempY + imgY;
	}else{
		tempX = scl_x * tempX;
		tempY = scl_y * tempY;

	}
	tempW = scl_x * tempW;
	tempH = scl_y * tempH;

	tempImg.size(marginX * tempW , marginY * tempH);
	tempImg. style("background-position", "center center")
	tempImg.position(tempX , tempY);
	tempImg.style('position' , 'absolute');
	if (contain == false) {
		tempImg.style('background-size' , tempW + 'px' + ' ' + tempH + 'px');	
	}else{
		tempImg.style('background-size' , "contain");
	}
	tempImg.style('background-repeat' , 'no-repeat');
	tempImg.show();
}

function scaleImgJq(id ,tempX , tempY , tempW = 0 , tempH = 0  , contain = false , child = false , marginX = 1 , marginY = 1){
	tempImg = select(id)
	if(child == false){
		tempX = scl_x * tempX + imgX;
		tempY = scl_y * tempY + imgY;
	}else{
		tempX = scl_x * tempX;
		tempY = scl_y * tempY;

	}
	tempW = scl_x * tempW;
	tempH = scl_y * tempH;

	tempImg.size(marginX * tempW , marginY * tempH);
	tempImg. style("background-position", "center center")
	tempImg.position(tempX , tempY);
	tempImg.style('position' , 'absolute');
	if (contain == false) {
		tempImg.style('background-size' , tempW + 'px' + ' ' + tempH + 'px');	
	}else{
		tempImg.style('background-size' , "contain");
	}
	tempImg.style('background-repeat' , 'no-repeat');
	tempImg.show();
}

function scaleImgCssWithoutShow(tempImg ,tempX , tempY , tempW = 0 , tempH = 0  , contain = false , child = false , marginX = 1 , marginY = 1){
	if(child == false){
		tempX = scl_x * tempX + imgX;
		tempY = scl_y * tempY + imgY;
	}else{
		tempX = scl_x * tempX;
		tempY = scl_y * tempY;

	}
	tempW = scl_x * tempW;
	tempH = scl_y * tempH;

	tempImg.size(marginX * tempW , marginY * tempH);
	tempImg. style("background-position", "center center")
	tempImg.position(tempX , tempY);
	tempImg.style('position' , 'absolute');
	if (contain == false) {
		tempImg.style('background-size' , tempW + 'px' + ' ' + tempH + 'px');	
	}else{
		tempImg.style('background-size' , "contain");
	}
	tempImg.style('background-repeat' , 'no-repeat');
	// tempImg.show();
}

function instruction_scl(){
	var background_x = 0, background_y = 0, background_w = 2560, background_h = 1440;
	var ori_background_x = 0, ori_background_y = 0, ori_background_w = 2560, ori_background_h = 1440;
	var ratio_w = background_w / gcd(background_w, background_h);
	var ratio_h = background_h / gcd(background_w, background_h);
	var window_w = window.innerWidth;
	var window_h = window.innerHeight;
	var ratio = null;

	if(window_w < ori_background_w || window_h < ori_background_h){
	    if(window_h < window_w * ratio_h / ratio_w){
	        background_h = window_h;
	        background_w = window_h * ratio_w / ratio_h;
	    }else{
	        background_w = window_w;
	        background_h = window_w * ratio_h / ratio_w;
	    }
	}

	ratio = background_w / ori_background_w;


	//instruction div
	var inst_x = 0, inst_y = 0, inst_w = 0, inst_h = 0, border_radius = 0;
	var ori_inst_x = 0, ori_inst_y = 0;
	var ori_inst_w = 1410 * 1.2;
	var ori_inst_h = 661 * 1.2 ;
	var ori_border_radius = 20;
	var ori_shadow_h = 10;
	var ori_shadow_w = 10;
	var ori_shadow_spread = 10;
	border_radius = ori_border_radius * ratio;
	inst_x = ori_inst_x * ratio;
	inst_y = ori_inst_y * ratio;
	inst_w = ori_inst_w * ratio;
	inst_h = ori_inst_h * ratio;
	document.getElementById(`inst-div`).style.backgroundSize = inst_w + "px " + inst_h + "px";
	document.getElementById(`inst-div`).style.left = inst_x + "px";
	document.getElementById(`inst-div`).style.top = inst_y + "px";
	document.getElementById(`inst-div`).style.width = inst_w + "px";
	document.getElementById(`inst-div`).style.height = inst_h + "px";
	document.getElementById(`inst-div`).style.borderRadius = border_radius + "px";
	document.getElementById(`inst-div`).style.boxShadow = (ori_shadow_h * ratio )+ "px " + (ori_shadow_w * ratio) + "px " + (ori_shadow_spread * ratio) + "px " + (ori_shadow_spread * 0.1 * ratio) + "px " +  "#333";

	//instruction numbers
	var numbers_x = 0  , numbers_y = 0, numbers_w = 50, numbers_h = 100, inst_font_size = 0;
	var ori_numbers_x = 150, ori_numbers_y = 140, ori_numbers_w = 1380, ori_numbers_h = 500, ori_inst_font_size = 40;
	numbers_w = ori_numbers_w * ratio;
	numbers_h = ori_numbers_h * ratio;
	numbers_x = ori_numbers_x * ratio;
	numbers_y = ori_numbers_y * ratio;
	inst_font_size = ori_inst_font_size * ratio;
	// document.getElementById(`numbers`).style.backgroundColor = "black";
	document.getElementById(`numbers`).style.left = numbers_x + "px";
	document.getElementById(`numbers`).style.top = numbers_y + "px";
	document.getElementById(`numbers`).style.width = numbers_w + "px";
	document.getElementById(`numbers`).style.height = numbers_h + "px";
	document.getElementById(`numbers`).style.fontSize = inst_font_size + "px";


	// //reset-btn-inst
	var reset_btn_inst_x = 0  , reset_btn_inst_y = 0, reset_btn_inst_w = 50, reset_btn_inst_h = 100;
	var ori_reset_btn_inst_x = 105, ori_reset_btn_inst_y = 470, ori_reset_btn_inst_w = 200, ori_reset_btn_inst_h = 60;
	reset_btn_inst_w = ori_reset_btn_inst_w * ratio;
	reset_btn_inst_h = ori_reset_btn_inst_h * ratio;
	reset_btn_inst_x = ori_reset_btn_inst_x * ratio;
	reset_btn_inst_y = ori_reset_btn_inst_y * ratio;
	document.getElementById(`reset-btn-inst`).style.backgroundSize = reset_btn_inst_w + "px " + reset_btn_inst_h + "px";
	document.getElementById(`reset-btn-inst`).style.left = `${reset_btn_inst_x}px`;
	document.getElementById(`reset-btn-inst`).style.top = `${reset_btn_inst_y}px`;
	document.getElementById(`reset-btn-inst`).style.width = `${reset_btn_inst_w}px`;
	document.getElementById(`reset-btn-inst`).style.height = `${reset_btn_inst_h}px`;
	
	var go_btn_inst_x = 0  , go_btn_inst_y = 0, go_btn_inst_w = 50, go_btn_inst_h = 100;
	var ori_go_btn_inst_x = 105, ori_go_btn_inst_y = 335, ori_go_btn_inst_w = 200, ori_go_btn_inst_h = 60;
	go_btn_inst_w = ori_go_btn_inst_w * ratio;
	go_btn_inst_h = ori_go_btn_inst_h * ratio;
	go_btn_inst_x = ori_go_btn_inst_x * ratio;
	go_btn_inst_y = ori_go_btn_inst_y * ratio;
	document.getElementById(`go-btn-inst`).style.backgroundSize = go_btn_inst_w + "px " + go_btn_inst_h + "px";
	document.getElementById(`go-btn-inst`).style.left = `${go_btn_inst_x}px`;
	document.getElementById(`go-btn-inst`).style.top = `${go_btn_inst_y}px`;
	document.getElementById(`go-btn-inst`).style.width = `${go_btn_inst_w}px`;
	document.getElementById(`go-btn-inst`).style.height = `${reset_btn_inst_h}px`;

	//instruction close
	var instclose_x = 0  , instclose_y = 0, instclose_w = 50, instclose_h = 100;
	// ori_instclose_x = 1200, ori_instclose_y = 30, ori_instclose_w = 127, ori_instclose_h = 85;
	instclose_w = ori_instclose_w * ratio;
	instclose_h = ori_instclose_h * ratio;
	instclose_x = ori_instclose_x * ratio;
	instclose_y = ori_instclose_y * ratio;
	document.getElementById(`instclosecss`).style.backgroundSize = instclose_w + "px " + instclose_h + "px";
	document.getElementById(`instclosecss`).style.left = instclose_x + "px";
	document.getElementById(`instclosecss`).style.top = instclose_y + "px";
	document.getElementById(`instclosecss`).style.width = instclose_w + "px";
	document.getElementById(`instclosecss`).style.height = instclose_h + "px";
}

function gcd(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

