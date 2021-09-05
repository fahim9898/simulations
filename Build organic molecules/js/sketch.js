
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
const SIM_heading = "Build organic molecules" ;

document. title = titleCase ( SIM_heading ) ;

var correct_response = ["That’s right!"] , incorrect_response = ["Your<br>response<br>is<br>incorrect!<br>","Sorry, <br>that’s not<br>correct<br>"] , closser_response = [ "Almost!<br>","You<br>are<br>almost<br>there!<br>"];//Almost!<br>

var ans_equation = [];
var response_text;
var move_time = 500
var ERROR = -1;

//Orignal Image
var ACT_W = 2560 , ACT_H = 1440;
var imgX = 0, imgY = 0 , scl_x = 0 , scl_y = 0;
var SCL_CONST = 2.15246;
var CLICK_TIME = 100;
var y_off = 242;
var Tab = 1;
var first_page = true ; second_page = false;

var minimum_distance = 125;
var node_count = 0

// click 
var clickInst = false;
var click_atom_btn = true;
var click_bond_btn = false;
var clickCheck = false
var clickReveal = false

// hover;
var hoverInst = false;
var hoverCheck = false

// move up down animation
annimatio_up = false;
annimatio_down = false;

//instruction scl
ori_instclose_x = 1200, ori_instclose_y = 30, ori_instclose_w = 127, ori_instclose_h = 85;

// clickable atom list
var list_atom = [];
var number_of_atom_created = 0;
var selected_atom = false;
var selected_atom_index = -1

// bond
var list_bond = [];
var number_of_bond_created = 0;
var selected_bond = false;
var selected_bond_index = -1

// NAME OF EQUATION 
name_of_equation = ["pent-2-ene" , "methylpropane" , "2-methylbut-1-ene" , "ethyl methanoate" , "2,3-butanediol" , "1,1,2-trichloropropane" , "butan-2-one" , "ethanoic acid" , "tetrachloromethane" , "2-methylpropanal"]

var root_node;
var root_x , root_y;
var flag_already_atom_present = false

function setup(){
	
	cnv = createCanvas( windowWidth , windowHeight);
	Scaling();

	bg = loadImage("img/BG_EDU.png");
	// bg2 = loadImage("img/Bg1.png")

	fontRobotMedian=loadFont("font/Roboto-Medium.ttf");
	fontRobotoLit=loadFont("font/Roboto-Light.ttf");
	fontLatoBold=loadFont("font/Lato-Bold.ttf");
	fontLatoReg=loadFont("font/Lato-Regular.ttf");

	contain_img = createDiv("");
	// contain_img. style("background-image" , "url('img/mainbg.png')");
	// contain_img. style("background-repeat" , "none");
	stl(contain_img , "background-image : url('img/mainbg.png')" ,"background-repeat:none" )
	contain_img.hide();

	blue_line_1 = createDiv();
	blue_line_1. style("background-color" , "rgb(0 , 160 , 221)");
	blue_line_1. hide();

	blue_line_2 = createDiv();
	blue_line_2. style("background-color" , "rgb(0 , 160 , 221)");
	blue_line_2. hide();

	// Atom button
	atom_btn = createDiv();
	atom_btn. style("background-image : url('img/Atoms1_button.png')");

	// Atom button
	bond_btn = createDiv();
	bond_btn. style("background-image : url('img/Bonds1_button.png')");
	bond_btn. style("cursor" , "pointer")

	//Equation
	equation_name = createDiv();

	ATOM = createDiv();

	high_light_atom = createDiv();
	high_light_atom. style("border-radius" , "50%")

	blue_dot_1 = createDiv();
	blue_dot_1. style("z-index" , "6")
	blue_dot_1. style("background-image : url('img/bludot.png')");
	blue_dot_2 = createDiv();
	blue_dot_2. style("z-index" , "6")
	blue_dot_2. style("background-image : url('img/bludot.png')");


	H_atom = createDiv();
	H_atom. parent(ATOM)
	H_atom. style("cursor" , "pointer")
	H_atom. style("background-image : url('img/H.png')");

	O_atom = createDiv();
	O_atom. parent(ATOM)
	O_atom. style("cursor" , "pointer")
	O_atom. style("background-image : url('img/O.png')");

	Cl_atom = createDiv();
	Cl_atom. parent(ATOM)
	Cl_atom. style("cursor" , "pointer")
	Cl_atom. style("background-image : url('img/Cl.png')");

	C_atom = createDiv();
	C_atom. parent(ATOM)
	C_atom. style("cursor" , "pointer")
	C_atom. style("background-image : url('img/C.png')");

	BOND = createDiv();

	b1_bond = createDiv();
	b1_bond. parent(BOND)
	b1_bond. style("cursor" , "pointer")
	b1_bond. style("background-image : url('img/b1.png')");

	b2_bond = createDiv();
	b2_bond. parent(BOND)
	b2_bond. style("cursor" , "pointer")
	b2_bond. style("background-image : url('img/b2.png')");
	
	b3_bond = createDiv();
	b3_bond. parent(BOND)
	b3_bond. style("cursor" , "pointer")
	b3_bond. style("background-image : url('img/b3.png')");

	b4_bond = createDiv();
	b4_bond. parent(BOND)
	b4_bond. style("cursor" , "pointer")
	b4_bond. style("background-image : url('img/b4.png')");

	b5_bond = createDiv();
	b5_bond. parent(BOND)
	b5_bond. style("cursor" , "pointer")
	b5_bond. style("background-image : url('img/b5.png')");

	b6_bond = createDiv();
	b6_bond. parent(BOND)
	b6_bond. style("cursor" , "pointer")
	b6_bond. style("background-image : url('img/b6.png')");

	b7_bond = createDiv();
	b7_bond. parent(BOND)
	b7_bond. style("cursor" , "pointer")
	b7_bond. style("background-image : url('img/b7.png')");

	b8_bond = createDiv();
	b8_bond. parent(BOND)
	b8_bond. style("cursor" , "pointer")
	b8_bond. style("background-image : url('img/b8.png')");

	// Pagination button
	page = createDiv("");
	page. style("position" , "absolute");
	page. hide();

	pageLeft = createDiv(""); //<
	pageLeft. style("background-image" , "url('img/prev.png')");
	pageLeft. parent(page);
	pageLeft. hide();

	page1 = createDiv(""); //<
	page1. style("background-image" , "url('img/keyselect.png')");
	page1. parent(page);
	page1. hide();

	page2 = createDiv(""); //1
	page2. style("background-image" , "url('img/key.png')");
	page2. parent(page);
	page2. hide();

	page3 = createDiv("");//2
	page3. style("background-image" , "url('img/key.png')");
	page3. parent(page);
	page3. hide();

	page4 = createDiv("");//3
	page4. style("background-image" , "url('img/key.png')");
	page4. parent(page);
	page4. hide();

	page5 = createDiv(""); //1
	page5. style("background-image" , "url('img/key.png')");
	page5. parent(page);
	page5. hide();

	page6 = createDiv("");//2
	page6. style("background-image" , "url('img/key.png')");
	page6. parent(page);
	page6. hide();

	page7 = createDiv("");//3
	page7. style("background-image" , "url('img/key.png')");
	page7. parent(page);
	page7. hide();

	page8 = createDiv(""); //1
	page8. style("background-image" , "url('img/key.png')");
	page8. parent(page);
	page8. hide();

	page9 = createDiv("");//2
	page9. style("background-image" , "url('img/key.png')");
	page9. parent(page);
	page9. hide();

	page10 = createDiv("");//3
	page10. style("background-image" , "url('img/key.png')");
	page10. parent(page);
	page10. hide();

	// page11 = createDiv("");//3
	// page11. style("background-image" , "url('img/key.png')");
	// page11. parent(page);
	// page11. hide();

	pageRight = createDiv("");//>
	pageRight. style("background-image" , "url('img/prev.png')");
	pageRight. parent(page);
	pageRight. hide();

	// instruction
	compInstPanel = select("#inst-div");
	compInstructionClose = select("#instclosecss")
	compInst = createDiv("");
	compInst. style("background-image" , "url('img/inst_btn.png')");


	// #CHECK BTN
	check_btn = createDiv("");
	check_btn. style("background-image" , "url('img/Assets/checkButton.png')");
	check_btn. style("position" , "absolute");
	check_btn. style("cursor" , "pointer");

	incomplete_bg = createDiv("");
	incomplete_bg. style("background-image" , "url('img/Assets/messageBoxIcomplete.png')");
	incomplete_bg. style("position" , "absolute");
	// incomplete_bg. style("cursor" , "pointer");
	incomplete_bg. style("z-index" , "10");
	incomplete_bg. hide();

	incomplete_contain = createDiv("");
	incomplete_contain. style("background-image" , "url('img/Assets/messageBoxError.png')");
	incomplete_contain. style("position" , "absolute");
	incomplete_contain. parent(incomplete_bg)
	incomplete_contain. style("cursor" , "default");
	incomplete_contain. hide();

	incorrect_bg = createDiv("");
	incorrect_bg. style("background-image" , "url('img/Assets/messageBoxIncorrect.png')");
	incorrect_bg. style("position" , "absolute");
	// incorrect_bg. style("cursor" , "pointer");
	incorrect_bg. style("z-index" , "10");
	incorrect_bg. hide();

	incorrect_contain_1 = createDiv("");
	incorrect_contain_1. style("background-image" , "url('img/Assets/messageBoxError.png')");
	incorrect_contain_1. style("position" , "absolute");
	incorrect_contain_1. parent(incorrect_bg)
	incorrect_contain_1. style("cursor" , "default");
	incorrect_contain_1. hide();

	incorrect_contain_1_text = createDiv("");
	incorrect_contain_1_text. style("position" , "absolute");
	incorrect_contain_1_text. style("pointer-events" , "none");
	incorrect_contain_1_text. parent(incorrect_contain_1);

	incorrect_contain_2 = createDiv("");
	incorrect_contain_2. style("background-image" , "url('img/Assets/messageBoxTry.png')");
	incorrect_contain_2. style("position" , "absolute");
	incorrect_contain_2. parent(incorrect_bg)
	incorrect_contain_2. style("cursor" , "pointer");
	incorrect_contain_2. hide();

	incorrect_contain_2_text = createDiv("");
	incorrect_contain_2_text. style("position" , "absolute");
	incorrect_contain_2_text. style("pointer-events" , "none");
	incorrect_contain_2_text. parent(incorrect_contain_2);

	incorrect_contain_3 = createDiv("");
	incorrect_contain_3. style("background-image" , "url('img/Assets/messageBoxReveal.png')");
	incorrect_contain_3. style("position" , "absolute");
	incorrect_contain_3. parent(incorrect_bg)
	incorrect_contain_3. style("cursor" , "pointer");
	incorrect_contain_3. hide();

	incorrect_contain_3_text = createDiv("");
	incorrect_contain_3_text. style("position" , "absolute");
	incorrect_contain_3_text. style("pointer-events" , "none");
	incorrect_contain_3_text. parent(incorrect_contain_3);

	correct_bg = createDiv("");
	correct_bg. style("background-image" , "url('img/Assets/messageBoxCorrect.png')");
	correct_bg. style("position" , "absolute");
	// correct_bg. style("cursor" , "pointer");
	correct_bg. style("z-index" , "10");
	correct_bg. hide();

	correct_contain_1 = createDiv("");
	correct_contain_1. style("background-image" , "url('img/Assets/messageCorrectBox.png')");
	correct_contain_1. style("position" , "absolute");
	correct_contain_1. parent(correct_bg)
	correct_contain_1. style("cursor" , "default");
	correct_contain_1. hide();

	correct_contain_1_text = createDiv("");
	correct_contain_1_text. style("position" , "absolute");
	correct_contain_1_text. style("pointer-events" , "none");
	correct_contain_1_text. parent(correct_contain_1);

	correct_contain_2 = createDiv("");
	correct_contain_2. style("background-image" , "url('img/Assets/messageBoxNext.png')");
	correct_contain_2. style("position" , "absolute");
	correct_contain_2. parent(correct_bg)
	correct_contain_2. style("cursor" , "pointer");
	correct_contain_2. hide();

	correct_contain_2_text = createDiv("");
	correct_contain_2_text. style("position" , "absolute");
	correct_contain_2_text. style("pointer-events" , "none");
	correct_contain_2_text. parent(correct_contain_2);

	
	resizeLoad();
	compInstX = 78 , compInstY = 1255 , compInstW = 420 , compInstH = 101;

	pageX = 850 , pageY = 1245 , pageW = 1006 , pageH = 117;  
	pageLeftX = 7, pageLeftY = 0, pageLeftW = 110 , pageLeftH = 110;
	page1X = 117 + 10, page1Y = 0, page1W = 117 , page1H = 117;
	page2X = 117 + 117 + 20, page2Y = 0, page2W = 117 , page2H = 117;
	page3X = 3 * 117 + 30, page3Y = 0, page3W = 117 , page3H = 117;
	page4X = 4 * 117 + 40, page4Y = 0, page4W = 117 , page4H = 117;
	page5X = 5 * 117 + 50, page5Y = 0, page5W = 117 , page5H = 117;
	page6X = 6 * 117 + 60, page6Y = 0, page6W = 117 , page6H = 117;
	pageRightX = 7 * 117 + 70, pageRightY = 0, pageRightW = 110 , pageRightH = 110;
	
	check_btnX = 2120 , check_btnY = 1255 , check_btnW = 311 , check_btnH = 101;

	incomplete_bgX = 2150 , incomplete_bgY = 946 , incomplete_bgW = 194 , incomplete_bgH = 225;
	incomplete_containX = 6  , incomplete_containY = 6 , incomplete_containW = 184 , incomplete_containH = 184; 
	incorrect_bgX = 1800 , incorrect_bgY = 1020 , incorrect_bgW = 560 , incorrect_bgH = 225;
	incorrect_contain_1X = 9.5  , incorrect_contain_1Y = 9.5 , incorrect_contain_1W = 174 , incorrect_contain_1H = 174;
	incorrect_contain_2X = 19 + 174  , incorrect_contain_2Y = 10 , incorrect_contain_2W = 174 , incorrect_contain_2H = 174;
	incorrect_contain_3X = 28.5 + 174 + 174  , incorrect_contain_3Y = 10 , incorrect_contain_3W = 174 , incorrect_contain_3H = 174;
	
	correct_bgX =2100 , correct_bgY = 1020 , correct_bgW = 376 , correct_bgH = 225;
	correct_contain_1X = 9.5  , correct_contain_1Y = 9.5 , correct_contain_1W = 174 , correct_contain_1H = 174;
	correct_contain_2X = 19 + 174  , correct_contain_2Y = 10 , correct_contain_2W = 174 , correct_contain_2H = 174;	

	
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
		ori_instclose_x = 1198, ori_instclose_y = 27, ori_instclose_w = 145, ori_instclose_h = 93.3;
		// 
	})
	compInstructionClose. mouseOut( function (){
		ori_instclose_x = 1200, ori_instclose_y = 30, ori_instclose_w = 127, ori_instclose_h = 85;
		// 
	})
	compInstructionClose. mouseClicked( function (){
		clickInst = false
		// 
	})

	contain_img. mouseReleased( function () {
		resetClick();
		// 
	})
	contain_img. touchEnded( function () {
		resetClick();
		// 
	})

	atom_btn. mouseClicked(function (){
		click_atom_btn = true;
		click_bond_btn = false;
		atom_btn. style("background-image : url('img/Atoms1_button.png')")
		bond_btn. style("background-image : url('img/Bonds1_button.png')")
		atom_btn. style("cursor" , "default")
		bond_btn. style("cursor" , "pointer")
	})

	bond_btn. mouseClicked(function (){
		click_bond_btn = true;
		click_atom_btn = false;
		atom_btn. style("background-image : url('img/Atoms_button.png')")
		bond_btn. style("background-image : url('img/Bonds_button.png')")
		bond_btn. style("cursor" , "default")
		atom_btn. style("cursor" , "pointer")
	})

	H_atom. mousePressed( function (){
			set_atom("H" , "atom" , "H" , 0 , 0 , 42)
	})

	O_atom. mousePressed( function (){
			set_atom("O" , "atom" , "O" , 0 , 0 , 63)
	})

	C_atom. mousePressed( function (){
			set_atom("C" , "atom" , "C" , 0 , 0 , 78.5)
	})

	Cl_atom. mousePressed( function (){
			set_atom("Cl" , "atom" , "Cl" , 0 , 0 , 85.5)
	})

	b1_bond. mousePressed( function (){
		set_bond("b1" , "single" , "b1" , 0 ,0 , 24 , 140)
	})

	b2_bond. mousePressed( function (){
		set_bond("b2" , "single" , "b2" , 0 ,0 , 106 , 106)
	})

	b4_bond. mousePressed( function (){
		set_bond("b4" , "single" , "b4" , 0 ,0 , 106 , 106)
	})

	b5_bond. mousePressed( function (){
		set_bond("b5" , "single" , "b5" , 0 ,0 , 140 , 24)
	})

	b7_bond. mousePressed( function (){
		set_bond("b7" , "double" , "b7" , 0 ,0 , 140 , 64)
	})

	b3_bond. mousePressed( function (){
		set_bond("b3" , "double" , "b3" , 0 ,0 , 64 , 140)
	})

	b6_bond. mousePressed( function (){
		set_bond("b6" , "double" , "b6" , 0 ,0 , 135 , 135)
	})

	b8_bond. mousePressed( function (){
		set_bond("b8" , "double" , "b8" , 0 ,0 , 135 , 135)
	})


	// pageination btn
	for( i = 1; i <= 10 ; i++){
		temp_i = i;
		// console. log(temp_i)
		eval(`var temp_${i} = i`)
		// eval(`temp_${i} `)
		eval(`page${temp_i}. mouseOver( function (){
			// console. log("hover")
			if(Tab != temp_${i}){
				page${eval(`temp_${i} `)}. style("cursor" , "pointer")
				page${eval(`temp_${i} `)}. style("background-image" , "url('img/keyover.png')")
			}
		})
		page${temp_i}. mouseOut( function (){
			if(Tab != temp_${i}){
				page${eval(`temp_${i} `)}. style("background-image" , "url('img/key.png')")
			}
		})
		page${temp_i}. mouseClicked( function (){
			if(Tab != temp_${i}){
				reset_elt();
				// console. log(Tab  , "tab")
				reset_key();
				Tab = temp_${i};
				console. log(temp_${i})
				page${eval(`temp_${i} `)}. style("background-image" , "url('img/keyselect.png')")
				page${eval(`temp_${i} `)}. style("cursor" , "default")
			}
		})
		`)
	}

	pageRight. mouseClicked( function (){
		if(Tab !== 10){
			reset_key();
			reset_elt();
			if(Tab == 6){
				second_page = true;
				first_page = false;
			}
			Tab ++;
			eval(`page${Tab}. style("background-image" , "url('img/keyselect.png')") `)
			
		}
	})

	pageLeft. mouseClicked( function (){
		if(Tab !== 1){
			reset_key();
			reset_elt();
			if(Tab == 7){
				second_page = false;
				first_page = true;
			}
			Tab --;
			eval(`page${Tab}. style("background-image" , "url('img/keyselect.png')") `)
			
		}
	})

	// #CHECK BTN
	check_btn. mouseClicked( function (){
		if(clickCheck == false && clickReveal == false && root_node != undefined ){
			check_btn. style("opacity" , "0.5");
			check_btn. style("cursor" ,  "default");
			clickConclusion = false;
			clickInst = false;

			// console. log("---------")
			hoverCheck = false
			setTimeout( function (){
				hoverCheck = true;	
			} , 200)
	
			correct_ans = false
			
			if(correct_ans == false){
				response_text = random(incorrect_response);
				ERROR = 2
				/*if(count_error == 2){
					ERROR = 3;
					response_text = random(closser_response);
				}else{

					ERROR = 2;
					response_text = random(incorrect_response);
				}*/
			}else{
				ERROR = 0;
				response_text = random(correct_response);
			}
			ERROR = 0	
			clickCheck = true;
			move_annimation_start_time = new Date(). getTime();
			annimatio_up = true;
			
		}
	});
	check_btn. mouseOver( function (){
		if(clickCheck == false && clickReveal == false && root_node != undefined){
			hoverCheck = true;
		}
	})
	check_btn. mouseOut( function (){
		hoverCheck = false
			// 
	})

	// 
	incorrect_contain_2. mouseOver( function (){
		incorrect_contain_2. style("background-image" , "url('img/Assets/messageBoxTryHover.png')");
		// 
	});
	incorrect_contain_2. mouseOut( function (){
		incorrect_contain_2. style("background-image" , "url('img/Assets/messageBoxTry.png')");
		// 
	});
	incorrect_contain_2.mouseClicked(function (){
		if(clickCheck == true){
			annimatio_down = true;
			move_annimation_start_time = new Date(). getTime();
			clickConclusion = false;
			// pre_clickTryAgain = true;
			clickInst = false;

		}
	})

	incorrect_contain_3. mouseOver( function (){
		incorrect_contain_3. style("background-image" , "url('img/Assets/messageBoxRevealHover.png')");
		// 
	});
	incorrect_contain_3. mouseOut( function (){
		incorrect_contain_3. style("background-image" , "url('img/Assets/messageBoxReveal.png')");
		// 
	});
	incorrect_contain_3.mouseClicked(function (){
		if(clickCheck == true){
			annimatio_down = true;
			move_annimation_start_time = new Date(). getTime();
			pre_clickReveal = true;
			clickConclusion = false;
			clickInst = false;

		}
	})

	correct_contain_2. mouseOver( function (){
		correct_contain_2. style("background-image" , "url('img/Assets/messageBoxHover.png')");
		// 
	});
	correct_contain_2. mouseOut( function (){
		if (Tab != 3) {
		correct_contain_2. style("background-image" , "url('img/Assets/messageBoxNext.png')");
		// 
		}else{
			correct_contain_2. style("background-image" , "url('img/Assets/messageBoxHover.png')");

		}
	});
	correct_contain_2.mouseClicked(function (){
		if(clickCheck == true){
			if(Tab != 10){
				annimatio_down = true;
				move_annimation_start_time = new Date(). getTime();
				pre_clickNext = true;
				clickConclusion = false;
				clickInst = false;

			}
		}
	});

	cnv. mouseReleased( function (){
		resetClick();
		// 
	})
	cnv. touchEnded( function (){
		resetClick();
		// 
	})
}

function resizeLoad(){
	scaleImgCss(contain_img , 0 , 245 , 2560 , 1010 - 30)
	scaleImgCss(blue_line_1 , 0 , 230 , ACT_W  , 15);
	scaleImgCss(blue_line_2 , 0 , 975 + 245 , ACT_W  , 15);
}

function resetClick(){	
}

function preload(){

	ans_equation[0] = loadJSON("data/pent_2_ene.json");
	pent_2_ene = []
	for (var i = 8; i <= 11 ; i++) {
		pent_2_ene. push( loadJSON(`data/pent_2_ene/pent_2_eneT${i}.json`) ) 
	}
	ethyl_methanoate = []
	for (var i = 0; i <= 5 ; i++) {
		ethyl_methanoate[i] = loadJSON(`data/ethyl_methanoate/ethyl_methanoateT${i}.json`) 
	}
	methylpropane = []
	for (var i = 0; i <= 1 ; i++) {
		methylpropane[i] = loadJSON(`data/methylpropane/methylpropaneT${i}.json`) 
	}
	tetrachloromethane = []
	for (var i = 0; i <= 0 ; i++) {
		tetrachloromethane[i] = loadJSON(`data/tetrachloromethane/tetrachloromethaneT${i}.json`) 
	}
}

function draw(){
	background(255 , 255 , 255);
	// console. log(selected_bond)
	instruction_scl();

	Scaling();
	display_all_img();
	fill(255);
	textHeadX = 93 , textHeadY = 52 , textHeadS = 46;
	textSize( textHeadS * scl_y );
	textFont( fontLatoBold );
	textAlign(LEFT,CENTER);
	text("Build organic molecules", textHeadX * scl_x + imgX , textHeadY * scl_y + imgY);

	fill("#676767");
	textSubHX = 124 , textSubHY = 152 , textSubHS = 37;
	textSize(textSubHS * scl_y);
	textFont(fontLatoReg);
	textAlign(LEFT,CENTER);
	text("Build the molecule from the IUPAC name", textSubHX * scl_x + imgX , textSubHY * scl_y + imgY);

	text7X=31,text7Y=1400,text7S=40;
	fill(0)
	textSize(text7S*scl_x);
	textFont(fontRobotoLit);
	textAlign(LEFT,CENTER);
	text("Physical Sciences    ",text7X*scl_x+imgX,text7Y*scl_y+imgY);
	textFont(fontRobotMedian);
	text("  Grade 12",340*scl_x+imgX,text7Y*scl_y+imgY);

	if(clickInst == true){
		compInstPanel. position(100 * scl_x + imgX , 560 * scl_y + imgY);
		compInstPanel. show();
	}

	if(clickInst == false){
		compInstPanel. hide();
		// 
	}

	if(selected_atom == true){
		list_atom[selected_atom_index]. x = (mouseX - imgX)/ scl_x - list_atom[selected_atom_index].radius;
		list_atom[selected_atom_index]. y = (mouseY - imgY)/ scl_y - list_atom[selected_atom_index].radius;
		eval(`scaleImgCss(dynamic_atom_${selected_atom_index} , list_atom[selected_atom_index]. x , list_atom[selected_atom_index]. y , list_atom[selected_atom_index]. radius *2 , list_atom[selected_atom_index]. radius * 2 )`)
		list_atom[selected_atom_index]. update_points();
		check_connection_atom();
	}

	if(selected_bond == true){
		list_bond[selected_bond_index]. x = (mouseX - imgX)/ scl_x - list_bond[selected_bond_index]. w / 2 
		list_bond[selected_bond_index]. y = (mouseY - imgY)/ scl_y - list_bond[selected_bond_index]. h / 2
		eval(`scaleImgCss(dynamic_bond_${selected_bond_index} , list_bond[selected_bond_index]. x , list_bond[selected_bond_index]. y , list_bond[selected_bond_index]. w , list_bond[selected_bond_index]. h )`)
		list_bond[selected_bond_index]. update_points();
		check_connection_bond();	
	}

	if(hoverCheck == false){
		scaleImgCss(check_btn , check_btnX , check_btnY , check_btnW , check_btnH);
	}else{
		scaleImgCss(check_btn , check_btnX - check_btnW * 0.05 , check_btnY - check_btnH * 0.05 , check_btnW * 1.09 , check_btnH * 1.08);
	}


	// #CHECK BTN EFFECTS
	if( (ERROR == 2 || ERROR == 3 ) && clickCheck == true){
		// scaleImgCss(disable_click_div , 0 , 245 , ACT_W , 975);
		if(annimatio_up == true){
			incorrect_bgY = MOVEE( incorrect_bg , move_annimation_start_time , move_annimation_start_time + move_time , ACT_H + imgY , 1020 , 0 , 1);  // bottom to top
		}
		if(annimatio_down == true){
			if(pre_clickReveal == true){
				incorrect_bgY = MOVEE( incorrect_bg , move_annimation_start_time , move_annimation_start_time + move_time , 1020 , ACT_H + imgY  , 1 , 0 , "down" );  // bottom to top	
			}else{
				incorrect_bgY = MOVEE( incorrect_bg , move_annimation_start_time , move_annimation_start_time + move_time , 1020 , ACT_H + imgY  , 1 , 0 , "down" );
			}
		}
		incorrect_contain_1_text. style("color" , "#FFFFFF");
		incorrect_contain_1_text. style("white-space" ,"nowrap");
		incorrect_contain_1_text. style("font-size" , 34 * scl_x + "px")
		incorrect_contain_1_text. style("text-align" , "center");
		incorrect_contain_1_text. style("top" , "50%");
		incorrect_contain_1_text. style("left" , "50%");
		// incorrect_contain_1_text. style("margin-right" ,"-50%")
		incorrect_contain_1_text. style("transform" , "translate(-50% , -50%)")
		incorrect_contain_1_text. html(`<span style = 'font-family : LatoBold'>${response_text}</span>`);

		incorrect_contain_2_text. style("color" , "#333333");
		incorrect_contain_2_text. style("font-size" , 40 * scl_x + "px")
		incorrect_contain_2_text. style("text-align" , "center");
		incorrect_contain_2_text. style("top" , "50%");
		incorrect_contain_2_text. style("left" , "50%");
		// incorrect_contain_2_text. style("margin-right" ,"-50%")
		incorrect_contain_2_text. style("transform" , "translate(-50% , -50%)")
		incorrect_contain_2_text. html(`<span style = 'font-family : LatoBold'>Try<br>Again</span>`);

		incorrect_contain_3_text. style("color" , "#333333");
		incorrect_contain_3_text. style("font-size" , 40 * scl_x + "px")
		incorrect_contain_3_text. style("text-align" , "center");
		incorrect_contain_3_text. style("top" , "50%");
		incorrect_contain_3_text. style("left" , "50%");
		// incorrect_contain_3_text. style("margin-right" ,"-50%")
		incorrect_contain_3_text. style("transform" , "translate(-50% , -50%)")
		incorrect_contain_3_text. html(`<span style = 'font-family : LatoBold'>Reveal<br>Answer</span>`);

		scaleImgCss( incorrect_bg , incorrect_bgX , incorrect_bgY , incorrect_bgW  , incorrect_bgH 	);
		scaleImgCss( incorrect_contain_1 , incorrect_contain_1X , incorrect_contain_1Y , incorrect_contain_1W ,incorrect_contain_1H , contain = false ,  child = true);
		scaleImgCss( incorrect_contain_2 , incorrect_contain_2X , incorrect_contain_2Y , incorrect_contain_2W ,incorrect_contain_2H , contain = false ,  child = true)
		scaleImgCss( incorrect_contain_3 , incorrect_contain_3X , incorrect_contain_3Y , incorrect_contain_3W ,incorrect_contain_3H , contain = false ,  child = true)
	}else if(ERROR == 0 && clickCheck == true){
		// scaleImgCss(disable_click_div , 0 , 245 , ACT_W , 975);
		if(annimatio_up == true){
			correct_bgY = MOVEE( correct_bg , move_annimation_start_time , move_annimation_start_time + move_time , ACT_H + imgY , 1020 , 0 , 1);  // bottom to top
			if(Tab == 3){
				// console. log("whyrropfejbfajkJSBj")
				correct_contain_2. style("background-image" , "url('img/Assets/messageBoxHover.png')")
				correct_contain_2. style("cursor" , "default");
				correct_contain_2. mouseOut( function (){
					correct_contain_2. style("background-image" , "url('img/Assets/messageBoxHover.png')");
					// 
				});
			}
		}
		if(annimatio_down == true){
			correct_bgY = MOVEE( correct_bg , move_annimation_start_time , move_annimation_start_time + move_time , 1020 , ACT_H + imgY  , 1 , 0 , "down" , Next);  // bottom to top	
		}

		correct_contain_1_text. style("white-space" ,"nowrap");
		correct_contain_1_text. style("color" , "#FFFFFF");
		correct_contain_1_text. style("font-size" , 32 * scl_x + "px")
		correct_contain_1_text. style("text-align" , "center");
		correct_contain_1_text. style("top" , "80%");
		correct_contain_1_text. style("left" , "80%");
		// correct_contain_1_text. style("margin-right" ,"-50%")
		correct_contain_1_text. style("transform" , "translate(-80% , -50%)")
		correct_contain_1_text. html(`<span style = 'font-family : LatoBold'>That’s right!</span>`);
		// white-space: nowrap
		correct_contain_2_text. style("color" , "#FFFFFF");
		correct_contain_2_text. style("font-size" , 45 * scl_x + "px")
		correct_contain_2_text. style("text-align" , "center");
		correct_contain_2_text. style("top" , "50%");
		correct_contain_2_text. style("left" , "50%");
		// correct_contain_2_text. style("margin-right" ,"-50%")
		correct_contain_2_text. style("transform" , "translate(-50% , -50%)")
		correct_contain_2_text. html(`<span style = 'font-family : LatoBold'>Next</span>`);

		scaleImgCss( correct_bg , correct_bgX , correct_bgY , correct_bgW  , correct_bgH 	);
		scaleImgCss( correct_contain_1 , correct_contain_1X , correct_contain_1Y , correct_contain_1W ,correct_contain_1H , contain = false, child = true);
		scaleImgCss( correct_contain_2 , correct_contain_2X , correct_contain_2Y , correct_contain_2W ,correct_contain_2H , contain = false, child = true)
	}
}

function reset_key(){
	eval(`page${eval(Tab)}. style("background-image" , "url('img/key.png')")`)
}

function display_all_img(){
	//background - img
	scaleImg(bg , 0 , 0 , ACT_W , ACT_H) ;
	scaleImgCss(equation_name , 53 , 255 , 1500 , 50)
	equation_name. html("<span style = 'font-family:RobotoMedium; color:#FFFFFF; pointer-events: none; font-size : "+ 65 * scl_x+"px'>"+ name_of_equation[Tab-1]+"</span>");

	scaleImgCss(atom_btn , 2058 , 30 + y_off , 240 , 84 )
	scaleImgCss(bond_btn , 2298 , 30 + y_off , 240 , 84 )

	if(click_atom_btn == true){
		scaleImgCss(H_atom, 2248 , 150 + y_off , 84 , 84)
		scaleImgCss(O_atom, 2227 , 313 + y_off , 126 , 126)
		scaleImgCss(C_atom, 2211 , 503 + y_off , 157 ,157) 
		scaleImgCss(Cl_atom, 2204 , 733 + y_off , 171 , 171)
		ATOM. show();
		BOND. hide();
	}else{
		scaleImgCss(b1_bond , 2169 , 186 + y_off, 24 , 140)
		scaleImgCss(b2_bond , 2333 , 190 + y_off, 106 , 106)
		scaleImgCss(b3_bond , 2148 , 423 + y_off, 64 , 140)
		scaleImgCss(b4_bond , 2347 , 410 + y_off, 106 , 106)
		scaleImgCss(b5_bond , 2120 , 675 + y_off, 140 , 24)
		scaleImgCss(b6_bond , 2330 , 594 + y_off, 135 , 135)
		scaleImgCss(b7_bond , 2125 , 859 + y_off, 140 , 64)
		scaleImgCss(b8_bond , 2340 , 815 + y_off, 135 , 135)
		ATOM. hide();
		BOND. show();
	}

	// #INSTRUCTION 
	if(hoverInst == false){
		scaleImgCss(compInst , compInstX , compInstY , compInstW , compInstH);
	}else{
		scaleImgCss(compInst , compInstX - compInstW * 0.05 , compInstY - compInstH * 0.05 , compInstW * 1.09 , compInstH * 1.08);
	}

	// #pagination button 
	page. style('font-size' , 55 * scl_x+'px'); 
	page. style('line-height' , 2.1);
	page. style('text-align' , 'center');



	scaleImgCss(page , pageX , pageY , pageW , pageH);
	// if(hoverPage1 == false){
		scaleImgCss(pageLeft , pageLeftX , pageLeftY , pageLeftW , pageLeftH , contain = false ,child = true);
		
	// }else{
	// 	scaleImgCss(page1 , page1X - page1W * 0.05 , page1Y , page1W * 1.08, page1H * 1.08 , contain = false ,child = true);
	// }
	pageLeft. html("<span style = 'font-family:LatoBold; color:#444444; pointer-events: none'><</span>");
	if(first_page == true){
		page7. hide();
		page8. hide();
		page9. hide();
		page10. hide();
		scaleImgCss(page1 , page1X , page1Y , page1W , page1H , contain = false ,child = true);
		scaleImgCss(page2 , page2X , page2Y , page2W , page2H , contain = false ,child = true);
		scaleImgCss(page3 , page3X , page3Y , page3W , page3H , contain = false ,child = true);
		scaleImgCss(page4 , page4X , page4Y , page4W , page4H , contain = false ,child = true);
		scaleImgCss(page5 , page5X , page5Y , page5W , page5H , contain = false ,child = true);
		scaleImgCss(page6 , page6X , page6Y , page6W , page6H , contain = false ,child = true);
		scaleImgCss(pageRight , pageRightX , pageRightY , pageRightW , pageRightH , contain = false ,child = true);
		page1. html("<span style = 'font-family:LatoBold; color:#444444; pointer-events: none'>1</span>");
		page2. html("<span style = 'font-family:LatoBold; color:#444444; pointer-events: none'>2</span>");
		page3. html("<span style = 'font-family:LatoBold; color:#444444; pointer-events: none'>3</span>");
		page4. html("<span style = 'font-family:LatoBold; color:#444444; pointer-events: none'>4</span>");
		page5. html("<span style = 'font-family:LatoBold; color:#444444; pointer-events: none'>5</span>");
		page6. html("<span style = 'font-family:LatoBold; color:#444444; pointer-events: none'>6</span>");
		pageRight. html("<span style = 'font-family:LatoBold; color:#444444; pointer-events: none'>></span>");
	}else{
		page1. hide();
		page2. hide();
		page3. hide();
		page4. hide();
		page5. hide();
		page6. hide();
		scaleImgCss(page7 , page1X , page1Y , page1W , page1H , contain = false ,child = true);
		scaleImgCss(page8 , page2X , page2Y , page2W , page2H , contain = false ,child = true);
		scaleImgCss(page9 , page3X , page3Y , page3W , page3H , contain = false ,child = true);
		scaleImgCss(page10 , page4X , page4Y , page4W , page4H , contain = false ,child = true);
		scaleImgCss(pageRight , page5X , page5Y , page5W , page5H , contain = false ,child = true);
		page7. html("<span style = 'font-family:LatoBold; color:#444444; pointer-events: none'>7</span>");
		page8. html("<span style = 'font-family:LatoBold; color:#444444; pointer-events: none'>8</span>");
		page9. html("<span style = 'font-family:LatoBold; color:#444444; pointer-events: none'>9</span>");
		page10. html("<span style = 'font-family:LatoBold; color:#444444; pointer-events: none'>10</span>");
		pageRight. html("<span style = 'font-family:LatoBold; color:#444444; pointer-events: none'>></span>");
	}
}	

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	resizeLoad();
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
	var ori_inst_w = 1410;
	var ori_inst_h = 661;
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
	var ori_numbers_x = 150, ori_numbers_y = 140, ori_numbers_w = 1180, ori_numbers_h = 500, ori_inst_font_size = 40;
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
	var ori_reset_btn_inst_x = 100, ori_reset_btn_inst_y = 275, ori_reset_btn_inst_w = 200, ori_reset_btn_inst_h = 60;
	reset_btn_inst_w = ori_reset_btn_inst_w * ratio;
	reset_btn_inst_h = ori_reset_btn_inst_h * ratio;
	reset_btn_inst_x = ori_reset_btn_inst_x * ratio;
	reset_btn_inst_y = ori_reset_btn_inst_y * ratio;
	document.getElementById(`reset-btn-inst`).style.backgroundSize = reset_btn_inst_w + "px " + reset_btn_inst_h + "px";
	document.getElementById(`reset-btn-inst`).style.left = `${reset_btn_inst_x}px`;
	document.getElementById(`reset-btn-inst`).style.top = `${reset_btn_inst_y}px`;
	document.getElementById(`reset-btn-inst`).style.width = `${reset_btn_inst_w}px`;
	document.getElementById(`reset-btn-inst`).style.height = `${reset_btn_inst_h}px`;

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

function stl(){
	for( i = 1; i < arguments. length ; i++){
		arg = arguments[i]. split(":")
		arg[0] = arg[0]. replace(" " , "");
		arg[1] =arg[1]. replace(" " , "");
		arguments[0]. style(arg[0] , arg[1]);
	}
}


class Node{
	constructor(name , id , parent = null){
		this. name = name;
		this. ID =  id;
		this. parent = parent;
		this. connected_bond = [];
		this. connected_bond_id = [];
		this. connected_bond_angle = [];
		this. connected_atom = [];
		this. connected_atom_id = []
	}
}

var count_atom = 0;
class Elt{
	constructor(name , type = "atom" , x ,y ,radius = 0){
		this. name = name;
		this. removed = false
		this. type = type;
		this. radius = radius;
		this. id = count_atom;
		this. points_status = []  // alrady bond or not
		this. bond_id = []
		this. points = [];
		this. perfect_points= [];
		this. factor_r = 0.7;
		this. x = x;
		this. y = y;
		count_atom += 1;
		for(i= 0 ;i< 16 ; i++){
			this. points[i] = [];
			this. bond_id[i] = -1;
			this. perfect_points[i] = [];
			if(i < 8){
				this. points[i][0] = this. x + this. radius + this. radius * this. factor_r * cos(( i * PI )/4)
				this. points[i][1] = this. y + this. radius + this. radius * this. factor_r * sin(( i * PI )/4)
				this. perfect_points[i][0] = this. x + this. radius + this. radius * cos(( i * PI )/4)
				this. perfect_points[i][1] = this. y + this. radius + this. radius * sin(( i * PI )/4)
			}else{
				var t = i % 8;
				this. points[i][0] = this. x + this. radius + this. radius * this. factor_r * cos( ( ( t * PI )/4) + (PI/8) )
				this. points[i][1] = this. y + this. radius + this. radius * this. factor_r * sin( ( ( t * PI )/4) + (PI/8) )
				this. perfect_points[i][0] = this. x + this. radius + this. radius * cos( ( ( t * PI )/4) + (PI/8) )
				this. perfect_points[i][1] = this. y + this. radius + this. radius * sin( ( ( t * PI )/4) + (PI/8) ) 
			}
			this. points_status[i] = false;
		}
	}

	update_points(){
		for(i= 0 ;i< 16 ; i++){
			this. points[i] = [];
			this. perfect_points[i] = [];
			if(i < 8){
				this. points[i][0] = this. x + this. radius + this. radius * this. factor_r * cos(( i * PI )/4)
				this. points[i][1] = this. y + this. radius + this. radius * this. factor_r * sin(( i * PI )/4)
				this. perfect_points[i][0] = this. x + this. radius + this. radius * cos(( i * PI )/4)
				this. perfect_points[i][1] = this. y + this. radius + this. radius * sin(( i * PI )/4)
			}else{
				var t = i % 8;
				this. points[i][0] = this. x + this. radius + this. radius * this. factor_r * cos( ( ( t * PI )/4) + (PI/8) )
				this. points[i][1] = this. y + this. radius + this. radius * this. factor_r * sin( ( ( t * PI )/4) + (PI/8) ) 
				this. perfect_points[i][0] = this. x + this. radius + this. radius * cos( ( ( t * PI )/4) + (PI/8) )
				this. perfect_points[i][1] = this. y + this. radius + this. radius * sin( ( ( t * PI )/4) + (PI/8) )
			}
		}
	}
}

var count_bond = 0;
class Elt_bond{
	constructor (name , type = "single" , x , y , w , h){
		this. id = count_bond;
		this. name = name;
		this. removed = false
		this. type = type;
		this. placed = [];
		this. x = x;
		this. y = y;
		this. w = w;
		this. h = h;
		this. points = []
		this. perfect_points = [];
		this. update_points( x, y , w , h);
		count_bond++;
	}

	update_points(x , y ){

		if(this. name == "b1"){
			this. placed = [2 , 6]
			for(i = 0 ; i < 2 ; i++){ 
				this. points[i] = [];
				this. perfect_points[i] = [];
			}

			this. points[0][0] = this. x ;
			this. points[0][1] = this. y - 24;
			this. points[1][0] = this. x;
			this. points[1][1] = this. y + 140  ;

			this. perfect_points[0][0] = this. x ;
			this. perfect_points[0][1] = this. y - 24 - 15;
			this. perfect_points[1][0] = this. x;
			this. perfect_points[1][1] = this. y + 140 + 15	  ;

			/*var temp_div = createDiv()
			temp_div. style("background-color" , "red");
			scaleImgCss(temp_div , this. points[0][0]  , this. points[0][1]  , 24 , 24) 
			
			var temp_div_2 = createDiv()
			temp_div_2. style("background-color" , "blue");
			scaleImgCss(temp_div_2 , this. points[1][0]  , this. points[1][1]  , 24 , 24)*/
		}

		if(this. name == "b2"){
			this. placed = [7 , 3]
			for(i = 0 ; i < 2 ; i++){ 
				this. points[i] = [];
			}
			this. points[0][0] = this. x - 24;
			this. points[0][1] = this. y + this. h;
			this. points[1][0] = this. x + this. w;
			this. points[1][1] = this. y - 24;
		}

		if(this. name == "b4"){
			this. placed = [1 , 5]
			for(i = 0 ; i < 2 ; i++){ 
				this. points[i] = [];
			} 
			this. points[0][0] = this. x - 24;
			this. points[0][1] = this. y - 24;
			this. points[1][0] = this. x + this. w;
			this. points[1][1] = this. y + this. h;
		}

		if(this. name == "b5"){
			this. placed = [0 , 4]
			for(i = 0 ; i < 2 ; i++){ 
				this. points[i] = [];
			}
			this. points[0][0] = this. x-24;
			this. points[0][1] = this. y ;
			this. points[1][0] = this. x + 140;
			this. points[1][1] = this. y ;

		}

		if(this. name == "b7"){
			this. placed = [0 , 4]
			for(i = 0 ; i < 2 ; i++){ 
				this. points[i] = [];
			}
			this. points[0][0] = this. x-24;
			this. points[0][1] = this. y + 24 ;
			this. points[1][0] = this. x + 140;
			this. points[1][1] = this. y + 24 ;

		}

		if(this. name == "b3"){
			this. placed = [2 , 6]
			for(i = 0 ; i < 2 ; i++){ 
				this. points[i] = [];
			}
			this. points[0][0] = this. x + 24;
			this. points[0][1] = this. y - 12 ;
			this. points[1][0] = this. x + 24 ;
			this. points[1][1] = this. y + 140 ;

		}

		if(this. name == "b6"){
			this. placed = [7 , 3]
			for(i = 0 ; i < 2 ; i++){ 
				this. points[i] = [];
			}
			this. points[0][0] = this. x - 24;
			this. points[0][1] = this. y + this. h;
			this. points[1][0] = this. x + this. w;
			this. points[1][1] = this. y - 24;
		}

		if(this. name == "b8"){
			this. placed = [1 , 5]
			for(i = 0 ; i < 2 ; i++){ 
				this. points[i] = [];
			} 
			this. points[0][0] = this. x - 24;
			this. points[0][1] = this. y - 24;
			this. points[1][0] = this. x + this. w;
			this. points[1][1] = this. y + this. h;
		}


	}
}

function find_minimum_distance(arr){
	var temp_array = [];
	for(i = 0; i< arr. length ; i++){
		temp_array[i] = arr[i][3];
	}

	var min_val = min(temp_array);
	return(temp_array. indexOf(min_val)) 
}
function remove_id_in_atom(){
	for( i = 0 ; i< list_atom. length ; i++){
		for(j =0 ; j< list_atom[i]. bond_id. length ; j++){
			if(list_atom[i]. bond_id[j] == list_bond[selected_bond_index]. id || list_atom[i]. bond_id[j] == "x" + list_bond[selected_bond_index]. id){
				list_atom[i]. bond_id[j] = -1;
				// return 
			}
		} 
	}
}

function Traverse( temp_root, id , cb){
	// console.log("Traverse" , id)
	if(temp_root. ID  == id){
		temp_root= cb(temp_root)
		return;
	}

	/*if(temp_root. connected_atom. length == 0){
		return;
	}*/
	/*for(i = 0 ; i < temp_root. connected_atom. length ; i++){
		Traverse(temp_root. connected_atom[i] , id , cb)
	}*/
	var len_count = 0
	temp_root. connected_atom. forEach(function (item , index){
		len_count++
	})
	if(len_count == 0){
		return;
	}
	temp_root. connected_atom. forEach( function (data_ , i){
		// console. log(data_)
		return Traverse(data_ , id , cb)
	})
}
var atom_between_roots = [];
var reachDestination = false;
function rootToRootAtom(temp_root , id , cb){
	if(reachDestination != true){
		atom_between_roots. push(temp_root);
	
	console. log("In the" , temp_root)
	console. log(temp_root. ID , id)
	if(temp_root. ID  == id){
		reachDestination = true;
		temp_root= cb(temp_root)
		console. log(`----Done----`)
		// console. log(temp_root)
		return;
	}
	var len_count = 0
	temp_root. connected_atom. forEach(function (item , index){
		len_count++;
	})
	if(len_count == 0){
		atom_between_roots. pop();
		return;
	}
	temp_root. connected_atom. forEach( function (data_ , i){
		console. log(`--------`);
		rootToRootAtom(data_ , id , cb);
	})
		if(reachDestination != true){
			atom_between_roots. pop();
		}
		return
	}
	console. log(atom_between_roots)
}
function swapeBondsBetweenNodes(array_nodes){
	for(var j = array_nodes. length - 1; j > 0; j--){
		var temp_current = array_nodes[j];
		var temp_prev = array_nodes[j-1];

		var index_of_change = 0;
		console. log(temp_prev)

		temp_prev. connected_atom. forEach(( data_ , index )=>{
			if(data_ == temp_current. ID){
				console. log(index)
				index_of_change = index;
			}
		})
		// console. log(temp_prev. connected_atom. splice(index_of_change , 1)[0]);
		temp_current. parent = temp_prev. ID;
		temp_current. connected_atom. push( temp_prev);
		temp_current. connected_atom_id. push( temp_prev. ID );
		temp_prev. connected_atom. splice(index_of_change , 1);
		temp_prev. connected_atom_id. splice(index_of_change , 1)
		temp_current. connected_bond. push( temp_prev. connected_bond. splice(index_of_change , 1)[0] );
		temp_current. connected_bond_id. push( temp_prev. connected_bond_id. splice(index_of_change , 1)[0] );
		temp_current. connected_bond_angle. push( ( temp_prev. connected_bond_angle. splice(index_of_change , 1)[0] + 4 )%8 );
		// console. log(temp_current. connected_atom_id)
		// console. log(temp_prev. connected_atom_id)

		// alert("oj")
		// console. log(temp_prev.connected_atom[index_of_change])
		// swapRelationBetween(temp_current , temp_prev , index_of_change);
	}
	array_nodes[0]. parent = null;
}

function swapRelationBetween(temp_current , temp_prev , index_of_change){
	// console. log(temp_prev. connected_atom[index_of_change])
	temp_current. connected_atom. push( temp_prev. connected_atom. splice(index_of_change , 1)[0] );
	temp_current. connected_atom_id. push( temp_prev. connected_atom_id. splice(index_of_change , 1)[0] );
	temp_current. connected_bond. push( temp_prev. connected_bond. splice(index_of_change , 1)[0] );
	temp_current. connected_bond_id. push( temp_prev. connected_bond_id. splice(index_of_change , 1)[0] );
	temp_current. connected_bond_angle. push( ( temp_prev. connected_bond_angle. splice(index_of_change , 1)[0] + 4 )%8 );
	console. log(temp_current , index_of_change)
}
// let return_each_loop = -1
function Traverse_base_on_bond_id(temp_root , id_bond){
	let return_each_loop = -1
	// console. error(temp_root. connected_bond_id)
	for(var i=0; i<temp_root. connected_bond_id. length; i++){
		// console. log([ temp_root, i , temp_root. connected_bond_id[i] , id_bond])
		if(temp_root. connected_bond_id[i] == id_bond){
			// console. log(temp_root. ID)
			return temp_root. ID ;
		}
	}

	// for(i = 0 ; i < temp_root. connected_atom. length ; i++){
	// 	return Traverse_base_on_bond_id(temp_root. connected_atom[i] , id_bond)
	// }
	
	/*temp_root. connected_bond_id. forEach(function (item , index){
		
		console. log("found" , )
		if(item == id_bond){
			return temp_root. ID
		}
	})*/
	// console. error(temp_root. connected_atom)
	for(var i = 0 ; i < temp_root. connected_atom. length ; i++){
		if(temp_root. connected_atom[i] != undefined){
			var return_id = Traverse_base_on_bond_id(temp_root. connected_atom[i] , id_bond)
			if(return_id != -1){
				return return_id;
			}
		}
	}
	// temp_root. connected_atom. forEach( function (data_ , i){
	// 	console. log(data_ , id_bond)
	// 	return_each_loop= Traverse_base_on_bond_id(data_ , id_bond)
	// 	console. log(return_each_loop)
	// 	// return return_each_loop
	// })
	// return return_each_loop;
	return -1;
}
function adjust_bond(child_bond = false){
	// var minimum_distance = 200;
	// for(var i = 0 ; i < list_atom. length ; i++){
	// 	for(var j =0 ; j < list_bond[i]. points. length ; j++){
	// 		for(var k =0 ; k < list_bond[selected_bond_index]. points. length ; k++ ){
	// 			console. log("ehy")
	// 			if( (list_atom[selected_atom_index]. points[j][0] - list_bond[selected_bond_index]. points[k][0] )**2 +  (list_atom[selected_atom_index]. points[k][1] - list_bond[selected_bond_index]. points[k][1] )**2  < minimum_distance ** 2){
	// 				// console. log("yup")
	// 				t = arg_mini((list_atom[selected_atom_index]. points[j][0] - list_bond[selected_bond_index]. points[k][0] ) , (list_atom[selected_atom_index]. points[j][1] - list_bond[selected_bond_index]. points[k][1] ))
	// 				console. log((list_atom[selected_atom_index]. points[j][0] - list_bond[selected_bond_index]. points[k][0] ) , (list_atom[selected_atom_index]. points[j][1] - list_bond[selected_bond_index]. points[k][1]))
	// 				console. log(t)
	// 				return;
	// 			}
	// 		}
	// 	}
	// }
	count = 0
	bests_atom_bond_index = [];
	// if(child_bond == false){
	remove_id_in_atom();
	// }
	for(var i = 0 ; i < list_atom. length ; i++){

		for(var j =0 ; j < list_bond[selected_bond_index]. placed. length ; j++){
			// for(var k =0 ; k < list_bond[selected_bond_index]. points. length ; k++ ){
			assumed_points = list_bond[selected_bond_index]. placed[j]
			if(list_atom[i]. bond_id[assumed_points] == -1){
				k = j;
				// console. log("okay")
				if(list_atom[i]. removed == false && list_bond[selected_bond_index]. removed == false && (list_atom[i]. points[assumed_points][0] - list_bond[selected_bond_index]. points[k][0] )**2 +  (list_atom[i]. points[assumed_points][1] - list_bond[selected_bond_index]. points[k][1] )**2  < minimum_distance ** 2){
					bests_atom_bond_index[count] = [i , assumed_points , k , distance = (list_atom[i]. points[assumed_points][0] - list_bond[selected_bond_index]. points[k][0] )**2 +  (list_atom[i]. points[assumed_points][1] - list_bond[selected_bond_index]. points[k][1] )**2]
					count += 1;
				}
			}
		}
	}
	// console. log(bests_atom_bond_index. length , "fsdhfhsdgu")
	// best_atom_bond_index ===> [which_atom , which_position_atom_where bond place , which_position_bond] 
	if(bests_atom_bond_index. length > 0){

		min_index = find_minimum_distance(bests_atom_bond_index)
		console. log(bests_atom_bond_index[min_index])
		
		var extra_val_x = 0 , extra_val_y = 0;
		
			list_atom[bests_atom_bond_index[min_index][0]]. points_status[bests_atom_bond_index[min_index][1]] = true
			list_atom[bests_atom_bond_index[min_index][0]]. bond_id[ bests_atom_bond_index[min_index][1] ] = list_bond[selected_bond_index]. id;
			/*list_atom[bests_atom_bond_index[min_index][0]]. bond_id[ (bests_atom_bond_index[min_index][1] + 1)%8 ] = "x" + list_bond[selected_bond_index]. id;
			list_atom[bests_atom_bond_index[min_index][0]]. bond_id[ (bests_atom_bond_index[min_index][1] + 7)%8] = "x" + list_bond[selected_bond_index]. id;*/
		
		// Tree formation 
		var parent_id = list_atom[bests_atom_bond_index[min_index][0]]. id
		Traverse( root_node , parent_id , function (data){
			index_same_data = data. connected_bond_id. indexOf(list_bond[selected_bond_index]. id)
			console. log(index_same_data)
			// data. connected_bond. splice( , 1)
			if(index_same_data == -1){
				data. connected_bond. push(list_bond[selected_bond_index]. name )
				data. connected_bond_id. push(list_bond[selected_bond_index]. id )
				data. connected_bond_angle. push(bests_atom_bond_index[min_index][1])
				console. log("whuhfkh")
			}
			return data
		})


		if( bests_atom_bond_index[min_index][1] == 0 || bests_atom_bond_index[min_index][1] == 1 ||  bests_atom_bond_index[min_index][1] == 2 || bests_atom_bond_index[min_index][1] == 7){
			
			if(list_bond[selected_bond_index]. name == "b2"){
				extra_val_y= - list_bond[selected_bond_index]. h +24
				extra_val_x= 0
			}

			if(list_bond[selected_bond_index]. name == "b7"){
				extra_val_y= - 20
				extra_val_x= 0
			}

			if(list_bond[selected_bond_index]. name == "b3"){
				extra_val_y=  0
				extra_val_x=  -18
			}

			if(list_bond[selected_bond_index]. name == "b6"){
				extra_val_y=  -64 - 24
				extra_val_x=  -24
				// console. log("b666")
			}

			if(list_bond[selected_bond_index]. name == "b8"){
				extra_val_y= - 24
				extra_val_x=  -24
				// console. log("b666")
			}

			list_bond[selected_bond_index]. x = list_atom[bests_atom_bond_index[min_index][0]]. points[ bests_atom_bond_index[min_index][1] ][0] - 12 + extra_val_x
			list_bond[selected_bond_index]. y = list_atom[bests_atom_bond_index[min_index][0]]. points[ bests_atom_bond_index[min_index][1] ][1] - 12 + extra_val_y
		
		}else{
			if(list_bond[selected_bond_index]. name == "b2"){
				extra_val_y= - list_bond[selected_bond_index]. h +24
				extra_val_x= 0
			}

			if(list_bond[selected_bond_index]. name == "b7"){
				extra_val_y= - 20
				extra_val_x= 0
			}

			if(list_bond[selected_bond_index]. name == "b3"){
				extra_val_y=  0
				extra_val_x=  -18
				// console. log("b33333")
			}

			if(list_bond[selected_bond_index]. name == "b6"){
				extra_val_y=  -64 - 24
				extra_val_x=  -24
				// console. log("b666")
			}

			if(list_bond[selected_bond_index]. name == "b8"){
				extra_val_y= - 24
				extra_val_x=  -24
				// console. log("b666")
			}

			// console. log("dsajfhb")
			list_bond[selected_bond_index]. x = list_atom[bests_atom_bond_index[min_index][0]]. points[ bests_atom_bond_index[min_index][1] ][0] - list_bond[selected_bond_index]. w + 12 - extra_val_x
			list_bond[selected_bond_index]. y = list_atom[bests_atom_bond_index[min_index][0]]. points[ bests_atom_bond_index[min_index][1] ][1] - list_bond[selected_bond_index]. h + 12 - extra_val_y
		}
		// scaleImgCss(list_bond[selected_bond_index] , list_bond[selected_bond_index]. x , list_bond[selected_bond_index]. y , list_bond[selected_bond_index]. w, list_bond[selected_bond_index]. h  )

		eval(`scaleImgCss(dynamic_bond_${selected_bond_index} , list_bond[selected_bond_index]. x , list_bond[selected_bond_index]. y , list_bond[selected_bond_index]. w , list_bond[selected_bond_index]. h )`)
		list_bond[selected_bond_index]. update_points();
		except_bond = selected_bond_index	
	}else{
		console. log("Remove Atom")
	}


	// REMOVE ELEMENT IN TREE 
		if(bests_atom_bond_index == 0){
			console. log("remove check" , list_bond. length)
			if(typeof root_node != "undefined"){
				current_atom_id = Traverse_base_on_bond_id(root_node , list_bond[selected_bond_index]. id)
				if(current_atom_id != -1){
					Traverse( root_node , current_atom_id , function (data){
							animationDropOutAnimation(`#dynamic_bond_${selected_bond_index}` , "bond" , function(){

								var splice_index = data. connected_bond_id. indexOf( list_bond[selected_bond_index]. id )
								remove_css(data , list_bond[selected_bond_index]. id , true)
								data. connected_bond_id. splice(splice_index , 1)
								data. connected_bond. splice(splice_index , 1)
								data. connected_bond_angle. splice(splice_index , 1)
								data. connected_atom. splice(splice_index , 1)
								data. connected_atom_id. splice(splice_index , 1)
								console. log("Some Element removed")
								return data
							})
					} )

				}else{
					animationDropOutAnimation(`#dynamic_bond_${selected_bond_index}` , "bond" , function(){
						console. log("ksajdsa")
						remove_bond_in_bondList(selected_bond_index);
						eval(`dynamic_bond_${selected_bond_index}. remove()`)
					})
				}
			}else{
				animationDropOutAnimation(`#dynamic_bond_${selected_bond_index}` , "bond" , function(){
					console. log("ksajdsa")
					remove_bond_in_bondList(selected_bond_index);
					eval(`dynamic_bond_${selected_bond_index}. remove()`)
				})
			}
			
		}		
	
	/*if(list_bond. length != 1){
		if(bests_atom_bond_index == 0){
			console. log("remove check" , list_bond. length)
			current_atom_id = Traverse_base_on_bond_id(root_node , list_bond[selected_bond_index]. id)
			console. log(current_atom_id)
			if(current_atom_id != -1 ){
				Traverse( root_node , current_atom_id , function (data){
						var splice_index = data. connected_bond_id. indexOf( list_bond[selected_bond_index]. id )
						remove_css(data , list_bond[selected_bond_index]. id , true)
						data. connected_bond_id. splice(splice_index , 1)
						data. connected_bond. splice(splice_index , 1)
						data. connected_bond_angle. splice(splice_index , 1)
						data. connected_atom. splice(splice_index , 1)
						data. connected_atom_id. splice(splice_index , 1)
						console. log("Some Element removed")
						return data
				} )
			}else{
				console. log(`okay--why`)
				remove_bond_in_bondList(selected_bond_index);
				eval(`dynamic_bond_${selected_bond_index}. remove()`) 
			}
		}		
	}else{
		if(bests_atom_bond_index == 0){

			console. log(`okay----why`)
			// remove Only one elements
			remove_bond_in_bondList(selected_bond_index);
			eval(`dynamic_bond_${selected_bond_index}. remove()`)
		}
	}
*/
	/*if(list_atom. length > 1){
		for(m = 0 ; m< list_atom. length; m++){
			selected_atom_index = m;
			adjust_atom(recursive_atom = true);

			list_atom[selected_atom_index]. update_points();
		}
	}*/
}
function remove_atom_in_atomList(id){
	for(var k = 0 ; k < list_atom. length; k++ ){
		if(list_atom[k].id == id){
			list_atom[k]. removed = true
			// list_atom. splice(k , 1);
			// number_of_atom_created--;
		}
	}
}

function remove_bond_in_bondList(id){
	console. log("djksd")
	for(var k = 0 ; k < list_bond. length; k++ ){
		if(list_bond[k].id == id){
			// console. log("fkd")
			list_bond[k]. removed = true 
			// list_bond. splice(k , 1);
			// number_of_bond_created--;
		}
	}
}

function remove_css(temp_root , remove_bond_id = -1 , first = false){
	console. log(temp_root)
	console. log(temp_root , temp_root. connected_bond_id , remove_bond_id)
	if(first == true){
		/*for(var k = 0; k < temp_root. connected_bond_id. length;k ++){

		}*/
		eval(`dynamic_bond_${remove_bond_id}. remove()`)
		remove_bond_in_bondList(remove_bond_id)
		console. log(temp_root. connected_bond_id. indexOf(remove_bond_id))
		var len_of_connectd_atom = 0;
		for(var k = 0; k < temp_root. connected_atom. length;k ++){
			if(temp_root. connected_atom[k] != undefined){	
				len_of_connectd_atom ++;
			}	
		}
		if(temp_root. connected_bond_id. indexOf(remove_bond_id) != -1){
			if(temp_root. connected_atom[temp_root. connected_bond_id. indexOf(remove_bond_id)] != undefined){
				remove_css(temp_root. connected_atom[temp_root. connected_bond_id. indexOf(remove_bond_id) ])
			}
		}
	}else{
		eval(`dynamic_atom_${temp_root. ID}. remove()`);
		remove_atom_in_atomList(temp_root. ID)
		for(var k = 0; k < temp_root. connected_bond_id. length;k ++){
			eval(`dynamic_bond_${temp_root. connected_bond_id[k] }. remove()`)	
			remove_bond_in_bondList(temp_root. connected_bond_id[k])
		}
		for(var k = 0; k < temp_root. connected_atom. length;k ++){
				if(temp_root. connected_atom[k] != undefined){	
					console. log("ku gaya")
					remove_css(temp_root. connected_atom[k])
				}	
		}
	}
}

function adjust_atom(recursive_atom = false){
	// var minimum_distance = 200;

	/*if(custom_distance == true){
		var temp_mini_distance = 50
	}else{
		var temp_mini_distance = minimum_distance
	}*/
	if(!AllElementsAreRemoved()){
		remove_befor_adjust_atom()		
	}

	var temp_mini_distance = minimum_distance
	count = 0
	bests_atom_bond_index = [];
	for(var i = 0 ; i < list_bond. length ; i++){
		for(var j =0 ; j < list_bond[i]. points. length ; j++){
			for(var k =0 ; k < list_bond[i]. placed. length ; k++ ){
				assumed_points = list_bond[i]. placed[k]
				// if(list_atom[i]. points_status[assumed_points] == false){
					// k = j;
					// console. log("okay")
					if(list_atom[selected_atom_index]. removed == false && list_bond[i]. removed == false && (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2  < temp_mini_distance ** 2){
						// console. log("--------HAPPY--------")
						if(recursive_atom == true){
							if(IndexOf(list_atom[selected_atom_index]. bond_id , i) == -1 ){
								// bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
								if( ( list_bond[i].name == "b1" && j == 0 &&  assumed_points == 2) || ( list_bond[i].name == "b1" && j == 1 &&  assumed_points == 6) ){
									bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
									count += 1;
								}else if( ( list_bond[i].name == "b2" && j == 0 &&  assumed_points == 7) || ( list_bond[i].name == "b2" && j == 1 &&  assumed_points == 3) ){
									bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
									count += 1;
								}else if( ( list_bond[i].name == "b3" && j == 0 &&  assumed_points == 2) || ( list_bond[i].name == "b3" && j == 1 &&  assumed_points == 6) ){
									bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
									count += 1;
								}else if( ( list_bond[i].name == "b4" && j == 0 &&  assumed_points == 1) || ( list_bond[i].name == "b4" && j == 1 &&  assumed_points == 5) ){
									bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
									count += 1;
								}else if( ( list_bond[i].name == "b5" && j == 0 &&  assumed_points == 0) || ( list_bond[i].name == "b5" && j == 1 &&  assumed_points == 4) ){
									bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
									count += 1;
								}else if( ( list_bond[i].name == "b6" && j == 0 &&  assumed_points == 7) || ( list_bond[i].name == "b6" && j == 1 &&  assumed_points == 3) ){
									bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
									count += 1;
								}else if( ( list_bond[i].name == "b7" && j == 0 &&  assumed_points == 0) || ( list_bond[i].name == "b7" && j == 1 &&  assumed_points == 4) ){
									bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
									count += 1;
								}else if( ( list_bond[i].name == "b8" && j == 0 &&  assumed_points == 1) || ( list_bond[i].name == "b8" && j == 1 &&  assumed_points == 5) ){
									bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
									count += 1;
								}
								// count += 1;	
							}
							
						}else{
							// bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
							if( ( list_bond[i].name == "b1" && j == 0 &&  assumed_points == 2) || ( list_bond[i].name == "b1" && j == 1 &&  assumed_points == 6) ){
								bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
								count += 1;
							}else if( ( list_bond[i].name == "b2" && j == 0 &&  assumed_points == 7) || ( list_bond[i].name == "b2" && j == 1 &&  assumed_points == 3) ){
								bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
								count += 1;
							}else if( ( list_bond[i].name == "b3" && j == 0 &&  assumed_points == 2) || ( list_bond[i].name == "b3" && j == 1 &&  assumed_points == 6) ){
								bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
								count += 1;
							}else if( ( list_bond[i].name == "b4" && j == 0 &&  assumed_points == 1) || ( list_bond[i].name == "b4" && j == 1 &&  assumed_points == 5) ){
								bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
								count += 1;
							}else if( ( list_bond[i].name == "b5" && j == 0 &&  assumed_points == 0) || ( list_bond[i].name == "b5" && j == 1 &&  assumed_points == 4) ){
								bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
								count += 1;
							}else if( ( list_bond[i].name == "b6" && j == 0 &&  assumed_points == 7) || ( list_bond[i].name == "b6" && j == 1 &&  assumed_points == 3) ){
								bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
								count += 1;
							}else if( ( list_bond[i].name == "b7" && j == 0 &&  assumed_points == 0) || ( list_bond[i].name == "b7" && j == 1 &&  assumed_points == 4) ){
								bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
								count += 1;
							}else if( ( list_bond[i].name == "b8" && j == 0 &&  assumed_points == 1) || ( list_bond[i].name == "b8" && j == 1 &&  assumed_points == 5) ){
								bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
								count += 1;
							}
							// count += 1;
						}
					}
				}
		}
	}
	// best_atom_bond_index ===> [which_bond , which_position_of_bond->where_atom_place , which_position_atom] 
	
	if(bests_atom_bond_index. length > 0){

		// if(recursive_atom == true){
		//  	remove_already_set_bond(bests_atom_bond_index)
		// }
		min_index = find_minimum_distance(bests_atom_bond_index )
		console. log(list_atom[selected_atom_index]. name + "" )
		console. log(bests_atom_bond_index , recursive_atom)

		// both_side_update_atom_bond_id();

		list_atom[selected_atom_index]. bond_id[bests_atom_bond_index[min_index][2]] = list_bond[bests_atom_bond_index[min_index][0]]. id;
		// list_atom[selected_atom_index]. bond_id[(bests_atom_bond_index[min_index][2] + 1) % 8] = "x" + list_bond[bests_atom_bond_index[min_index][0]]. id;
		// list_atom[selected_atom_index]. bond_id[(bests_atom_bond_index[min_index][2] + 7) % 8] = "x" + list_bond[bests_atom_bond_index[min_index][0]]. id;

		console. log(list_atom[selected_atom_index]. name + " FINISH")

		// *******************UPDATE TREE*************
		var parent_id = find_parent_node_id(list_bond[bests_atom_bond_index[min_index][0]]. id , selected_atom_index)
		// console. log(parent_id , "parent-id")
		Traverse( root_node , parent_id , function (data) {
			// console. log("why bro")
			// console. log("okay")
			var create_new_node = new Node(list_atom[selected_atom_index]. name , list_atom[selected_atom_index]. id)
			// index_same_data = data. connected_atom. indexOf(create_new_node)
			flag_already_atom_present = false
			if(recursive_atom == false){
				if(typeof root_node != "undefined"){
					var local_parent_id = Traverse_base_on_bond_id(root_node , list_bond[bests_atom_bond_index[min_index][0]]. id)
					Traverse(root_node ,  local_parent_id , function (data){
						// console. log()
						// console. warn("=======" , bests_atom_bond_index[min_index] , IndexOf( data. connected_bond_angle , (bests_atom_bond_index[min_index][2]) + 4) % 8 )
						var where_atom_place = IndexOf( data. connected_bond_angle , ( (bests_atom_bond_index[min_index][2]) + 4) % 8 )
						// console. log()
						if(data. connected_atom[where_atom_place] != undefined){
							flag_already_atom_present = true;
							console. log("already present");
						}
					})
				}
			}
			console. log(flag_already_atom_present)
			if(flag_already_atom_present == false){
				console. log(list_atom[selected_atom_index].x + list_atom[selected_atom_index].radius , root_x)
				if(list_atom[selected_atom_index].x + list_atom[selected_atom_index].radius < root_x ){
				// if( ( list_atom[selected_atom_index].x + list_atom[selected_atom_index].y + list_atom[selected_atom_index]. radius) < (root_x + root_y)*0.9  ){
					root_x = list_atom[selected_atom_index].x ;
					root_y = list_atom[selected_atom_index].y + list_atom[selected_atom_index]. radius;
					var remove_bond_index 
					console. log(data. connected_bond_angle. length)
					
					// change_root_node(root_node , )

					for(var k = 0; k < data. connected_bond_angle. length ; k++){
						console .log(data. connected_bond_angle[k] , "angle")
						if(data. connected_bond_angle[k] == 5){
							remove_bond_index = k 
							k= data. connected_bond_angle. length
						}else if(data. connected_bond_angle[k] == 4){
							remove_bond_index = k 
							k= data. connected_bond_angle. length
						}else if(data. connected_bond_angle[k] == 3){
							remove_bond_index = k 
							k= data. connected_bond_angle. length
						}
					}
					
					console. log(create_new_node. ID , bests_atom_bond_index[min_index][0] , Traverse_base_on_bond_id(root_node , bests_atom_bond_index[min_index][0] , ()=>{} ) )

					atom_between_roots = [];
					reachDestination = false;
					rootToRootAtom(root_node , Traverse_base_on_bond_id(root_node , bests_atom_bond_index[min_index][0]) , function (){} );
					console. log(`ijfjs` , atom_between_roots)

					
					console. log(remove_bond_index)
					create_new_node. connected_bond_angle. push((data. connected_bond_angle. splice(remove_bond_index , 1)[0] + 4)%8 ) 
					create_new_node. connected_bond. push(data. connected_bond. splice(remove_bond_index , 1)[0] )
					create_new_node. connected_bond_id. push(data. connected_bond_id. splice(remove_bond_index , 1)[0] )
					create_new_node. connected_atom_id. push(data. ID)
					create_new_node. parent = data. ID;
					data. connected_atom_id. splice(remove_bond_index , 1)
					data. connected_atom. splice(remove_bond_index , 1)
					data. parent = create_new_node. ID;
					create_new_node. connected_atom. push(data)
					// list_atom[selected_atom_index]. bond_id
					root_node = create_new_node
					swapeBondsBetweenNodes(atom_between_roots);
					// console. log(create_new_node)
					// console. log(data)
					console.warn("root change")
					
					return root_node
				}else{

					connect_bond_id = bests_atom_bond_index[min_index][0]
					data. parent = list_atom[selected_atom_index]. id
					which_index_atom_store= data. connected_bond_id. indexOf(connect_bond_id)
					console. warn("get" , which_index_atom_store)
					data. connected_atom[which_index_atom_store] = create_new_node
					data. connected_atom_id[which_index_atom_store] = list_atom[selected_atom_index]. id 
					// data. connected_atom. push(create_new_node)
					// data. connected_atom_id. push(list_atom[selected_atom_index]. id)
					return data
				}
			}else{
				console. warn("out")
				animationDropOutAnimation(`#dynamic_atom_${selected_atom_index}` , "atom" , function (){
					// console. log(`dynamic_atom_${selected_atom_index} `, selected_atom_index)
					eval(`dynamic_atom_${selected_atom_index}. remove()`)
					remove_atom_in_atomList(selected_atom_index)
				})
			}
		})
		
		var xfactor = 1, yfactor =1
		if(list_bond[bests_atom_bond_index[min_index][0]]. name == "b1"){
			xfactor = -get_sign_x((8 - bests_atom_bond_index[min_index][2]) * (PI/4)  )  * 0;
			yfactor = -get_sign_y((8 - bests_atom_bond_index[min_index][2]) * (PI/4) ) * map(list_atom[selected_atom_index]. radius , 42 , 85 , 0 , 0.45)
		}

		if(list_bond[bests_atom_bond_index[min_index][0]]. name == "b2" ){
			xfactor = -get_sign_x((8 - bests_atom_bond_index[min_index][2]) * (PI/4) ) * map(list_atom[selected_atom_index]. radius , 42 , 85 , 0 , 0.35);
			yfactor = -get_sign_y((8 - bests_atom_bond_index[min_index][2]) * (PI/4) ) * map(list_atom[selected_atom_index]. radius , 42 , 85 , 0 , 0.35)
		}

		if(list_bond[bests_atom_bond_index[min_index][0]]. name == "b3"){
			xfactor = -get_sign_x((8 - bests_atom_bond_index[min_index][2]) * (PI/4) ) * 0;
			yfactor = -get_sign_y((8 - bests_atom_bond_index[min_index][2]) * (PI/4) ) * map(list_atom[selected_atom_index]. radius , 42 , 85 , 0 , 0.35)
		}

		if(list_bond[bests_atom_bond_index[min_index][0]]. name == "b4"){
			xfactor = -get_sign_x((8 - bests_atom_bond_index[min_index][2]) * (PI/4) ) * map(list_atom[selected_atom_index]. radius , 42 , 85 , 0 , 0.35);
			yfactor = -get_sign_y((8 - bests_atom_bond_index[min_index][2]) * (PI/4) ) * map(list_atom[selected_atom_index]. radius , 42 , 85 , 0 , 0.35)
		}

		if(list_bond[bests_atom_bond_index[min_index][0]]. name == "b5"){
			xfactor = -get_sign_x((8 - bests_atom_bond_index[min_index][2]) * (PI/4) ) * map(list_atom[selected_atom_index]. radius , 42 , 85 , 0 , 0.45);
			yfactor = -get_sign_y((8 - bests_atom_bond_index[min_index][2]) * (PI/4) ) * 0
		}

		if(list_bond[bests_atom_bond_index[min_index][0]]. name == "b6" ){
			xfactor = -get_sign_x((8 - bests_atom_bond_index[min_index][2]) * (PI/4) ) * map(list_atom[selected_atom_index]. radius , 42 , 85 , -0.5 , 0.15);
			yfactor = -get_sign_y((8 - bests_atom_bond_index[min_index][2]) * (PI/4) ) * map(list_atom[selected_atom_index]. radius , 42 , 85 , -0.5 , 0.15)
		}	

		if(list_bond[bests_atom_bond_index[min_index][0]]. name == "b7"){
			xfactor = -get_sign_x((8 - bests_atom_bond_index[min_index][2]) * (PI/4) ) * map(list_atom[selected_atom_index]. radius , 42 , 85 , 0 , 0.45);
			yfactor = -get_sign_y((8 - bests_atom_bond_index[min_index][2]) * (PI/4) ) * 0
		}

		if(list_bond[bests_atom_bond_index[min_index][0]]. name == "b8"){
			xfactor = -get_sign_x((8 - bests_atom_bond_index[min_index][2]) * (PI/4) ) * map(list_atom[selected_atom_index]. radius , 42 , 85 , -0.5 , 0.15);
			yfactor = -get_sign_y((8 - bests_atom_bond_index[min_index][2]) * (PI/4) ) * map(list_atom[selected_atom_index]. radius , 42 , 85 , -0.5 , 0.15)
		}

		// if(bests_atom_bond_index[min_index][1] == 1 || bests_atom_bond_index[min_index][1] = 1 )
		
		list_atom[selected_atom_index]. x = list_bond[bests_atom_bond_index[min_index][0]]. points[bests_atom_bond_index[min_index][1]][0]  - list_atom[selected_atom_index].radius + 12 + list_atom[selected_atom_index].radius * xfactor;
		list_atom[selected_atom_index]. y = list_bond[bests_atom_bond_index[min_index][0]]. points[bests_atom_bond_index[min_index][1]][1]  - list_atom[selected_atom_index].radius + 12 + list_atom[selected_atom_index].radius * yfactor;
		eval(`scaleImgCss(dynamic_atom_${selected_atom_index} , list_atom[selected_atom_index]. x  , list_atom[selected_atom_index]. y   , list_atom[selected_atom_index]. radius * 2 ,  list_atom[selected_atom_index]. radius * 2 )`)
		list_atom[selected_atom_index]. update_points();

		// alert(selected_atom_index)
	}

	// REMOVE ELEMENTS IN TREE
	console. log(AllElementsAreRemoved())
	if(!AllElementsAreRemoved()){
		console. warn("===========okay---------")
		if(bests_atom_bond_index == 0 && list_atom. length > 1 && recursive_atom == false){
			if(root_node. ID != list_atom[selected_atom_index]. id){

				console. log("okay---1")
				remove_node( root_node , list_atom[selected_atom_index]. id , function (data){
					// remove_css(data , -1 , false)
					// eval(`dynamic_atom_${selected_atom_index}. remove()`)
					splice_index = data. connected_atom_id. indexOf(list_atom[selected_atom_index]. id)
					// data. connected_atom_id. splice(splice_index , 1)
					// data. connected_atom. splice(splice_index , 1)
					delete data. connected_atom_id [splice_index]
					delete data. connected_atom [splice_index]
					// data. connected_atom_id [splice_index] = undefined
					// data. connected_atom [splice_index] = undefined
					console. log("removed node")
					return data;
				})
				animationDropOutAnimation(`#dynamic_atom_${selected_atom_index}` , "atom" , function (){
					console. log(`dynamic_atom_${selected_atom_index} `, selected_atom_index)
					eval(`dynamic_atom_${selected_atom_index}. remove()`)
					remove_atom_in_atomList(selected_atom_index)
				})
			}

				// splice_index = data. connected_atom_id. indexOf(list_atom[selected_atom_index]. id)
		}
	}

	if(list_atom. length == 1 || AllElementsAreRemoved() ){
		root_node = new Node(list_atom[selected_atom_index]. name , list_atom[selected_atom_index]. id )
		root_x = list_atom[selected_atom_index]. x
		root_y = list_atom[selected_atom_index]. y + list_atom[selected_atom_index]. radius
		// console. log(root_node)
	}
}

function remove_node( temp_root , remove_node_id , cb){
	
	/*for(i = 0 ; i< temp_root. connected_atom_id. length ; i++){
		if(temp_root. connected_atom_id[i] == remove_node_id ){
			temp_root = cb(temp_root)
			return;
		}
	}*/
	temp_root. connected_atom_id. forEach( function (item , index){
		if(item == remove_node_id){
			console. log(item , "item")
			temp_root = cb(temp_root)
			return;
		}
	})

	var len_count = 0
	temp_root. connected_atom. forEach(function (item , index){
		len_count++
	})
	if(len_count == 0){
		return;
	}
	temp_root. connected_atom. forEach( function (data_ , i){
		console. log(data_ , "REMOVED")
		return remove_node( data_, remove_node_id , cb)
	})
}
function remove_already_set_bond(data){
	var slice_data = [];
	for(var i =0 ; i < 8 ; i++){
		 // if(IndexOf(data , list_atom[selected_atom_index]. bond_id[i] ) == -1 ){
		 // 	console. log("sxhduisdhugiuih" ,  data[])
		 // 	slice_data. push( data[ IndexOf(data , list_atom[selected_atom_index]. bond_id[i] ) ]) 
		 // }
		 data = IndexOf(data , list_atom[selected_atom_index]. bond_id[i])

	}
	console. log(data)
}

function IndexOf(data , value){
	for(i = 0 ; i< data. length ; i++){
		if(data[i] == value){
			return i
		}
		// if(data[i][0] == value){
		// 	data. splice(i , 1)
		// }
	}
	return -1;
}

function find_parent_node_id(id , except_id){
	for(i = 0; i < list_atom. length; i++){
		if(i != except_id){
			for(j = 0 ; j< 8 ; j++){
				if(list_atom[i]. bond_id[j] == id){
					return list_atom[i]. id
				}
			}
		}
	}
}

function check_connection_bond(){
	// var minimum_distance = 100;
	var alrady_highlighted = false 
	count = 0
	bests_atom_bond_index = [];
	for(var i = 0 ; i < list_atom. length ; i++){
		for(var j =0 ; j < list_bond[selected_bond_index]. placed. length ; j++){
			// for(var k =0 ; k < list_bond[selected_bond_index]. points. length ; k++ ){
			assumed_points = list_bond[selected_bond_index]. placed[j]
			// if(list_atom[i]. points_status[assumed_points] == false){
				k = j;
				// console. log("okay")
				if(list_atom[i]. removed == false && list_bond[selected_bond_index]. removed == false && (list_atom[i]. points[assumed_points][0] - list_bond[selected_bond_index]. points[k][0] )**2 +  (list_atom[i]. points[assumed_points][1] - list_bond[selected_bond_index]. points[k][1] )**2  < minimum_distance ** 2){
					/*hl_atom_X = list_atom[i]. x + list_atom[i]. radius - (minimum_distance) - 5
					hl_atom_Y = list_atom[i]. y + list_atom[i]. radius - (minimum_distance) - 5  
					alrady_highlighted = true
					high_light_atom. style("border-style" , "solid");
					high_light_atom. style("background-color" , "rgb(255 , 255 , 255 , 0.1)")
					high_light_atom. style("border-width" , 2 * scl_x + "px");
					high_light_atom. style("border-color" , "white");
					scaleImgCss(high_light_atom , hl_atom_X , hl_atom_Y , 2 * minimum_distance  , 2*minimum_distance )*/
					// console. log("CONNECTED")

					bests_atom_bond_index[count] = [i , assumed_points , k , distance = (list_atom[i]. points[assumed_points][0] - list_bond[selected_bond_index]. points[k][0] )**2 +  (list_atom[i]. points[assumed_points][1] - list_bond[selected_bond_index]. points[k][1] )**2]
					count += 1;
				}
			// }
		}
	}

	// best_atom_bond_index ===> [which_atom , which_position_atom_where bond place , which_position_bond] 
	if(bests_atom_bond_index. length > 0){
		min_index = find_minimum_distance(bests_atom_bond_index)
		// console. log(list_atom[bests_atom_bond_index[min_index][0]]. points[ bests_atom_bond_index[min_index][1] ][0]	)
		// console. log(list_bond[bests_atom_bond_index[min_index][0]]. type)
		// console. log(list_atom[bests_atom_bond_index[min_index][0]]. bond_id[bests_atom_bond_index[min_index][1]])
		if(list_atom[bests_atom_bond_index[min_index][0]]. bond_id[bests_atom_bond_index[min_index][1]] == -1 ){
			if(list_bond[selected_bond_index]. type != "single"){
				
				var blue_dot_X = list_atom[bests_atom_bond_index[min_index][0]]. points[bests_atom_bond_index[min_index][1] + 7][0] - 15;
				var blue_dot_Y = list_atom[bests_atom_bond_index[min_index][0]]. points[bests_atom_bond_index[min_index][1] + 7][1] - 15;
				scaleImgCss(blue_dot_1 , blue_dot_X , blue_dot_Y , 31 , 31 )
				
				var blue_dot_X = list_atom[bests_atom_bond_index[min_index][0]]. points[bests_atom_bond_index[min_index][1] + 7 + 1][0] - 15;
				var blue_dot_Y = list_atom[bests_atom_bond_index[min_index][0]]. points[bests_atom_bond_index[min_index][1] + 7 + 1][1] - 15;
				scaleImgCss(blue_dot_2 , blue_dot_X , blue_dot_Y , 31 , 31 )
			}else{
				blue_dot_2. hide();
				var blue_dot_X = list_atom[bests_atom_bond_index[min_index][0]]. points[bests_atom_bond_index[min_index][1]][0] - 15;
				var blue_dot_Y = list_atom[bests_atom_bond_index[min_index][0]]. points[bests_atom_bond_index[min_index][1]][1] - 15;
				scaleImgCss(blue_dot_1 , blue_dot_X , blue_dot_Y , 31 , 31 )	
			}

			hl_atom_X = list_atom[bests_atom_bond_index[min_index][0]]. x + list_atom[bests_atom_bond_index[min_index][0]]. radius - (minimum_distance) - 5
			hl_atom_Y = list_atom[bests_atom_bond_index[min_index][0]]. y + list_atom[bests_atom_bond_index[min_index][0]]. radius - (minimum_distance) - 5  
			alrady_highlighted = true
			high_light_atom. style("border-style" , "solid");
			high_light_atom. style("background-color" , "rgb(255 , 255 , 255 , 0.1)")
			high_light_atom. style("border-width" , 2 * scl_x + "px");
			high_light_atom. style("border-color" , "white");
			scaleImgCss(high_light_atom , hl_atom_X , hl_atom_Y , 2 * minimum_distance  , 2*minimum_distance )
		}else{
			high_light_atom. hide();
			blue_dot_1. hide()
			blue_dot_2. hide();
		}
	}else{
		blue_dot_1. hide();
		blue_dot_2. hide();
	}

	if(alrady_highlighted == false){
		high_light_atom. hide();
	}	
}

function check_connection_atom(){
	count = 0
	var alrady_highlighted = false

	bests_atom_bond_index = [];
	for(var i = 0 ; i < list_bond. length ; i++){
		for(var j =0 ; j < list_bond[i]. points. length ; j++){
			for(var k =0 ; k < list_bond[i]. placed. length ; k++ ){
				assumed_points = list_bond[i]. placed[k]
				// if(list_atom[i]. points_status[assumed_points] == false){
					// k = j;
					// console. log("okay")
					if( list_atom[selected_atom_index]. removed == false && list_bond[i]. removed == false && (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2  < minimum_distance ** 2){
						// console. log("--------HAPPY--------")
						hl_atom_X = list_atom[selected_atom_index]. x + list_atom[selected_atom_index]. radius - (minimum_distance) - 5
						hl_atom_Y = list_atom[selected_atom_index]. y + list_atom[selected_atom_index]. radius - (minimum_distance) - 5 
						alrady_highlighted = true
						high_light_atom. style("border-style" , "solid");
						high_light_atom. style("background-color" , "rgb(255 , 255 , 255 , 0.1)")
						high_light_atom. style("border-width" , 2 * scl_x + "px");
						high_light_atom. style("border-color" , "white");
						scaleImgCss(high_light_atom , hl_atom_X , hl_atom_Y , 2 * minimum_distance  , 2*minimum_distance )
						// console. log(j , assumed_points)
						if( ( list_bond[i].name == "b1" && j == 0 &&  assumed_points == 2) || ( list_bond[i].name == "b1" && j == 1 &&  assumed_points == 6) ){
							bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
							count += 1;
						}else if( ( list_bond[i].name == "b2" && j == 0 &&  assumed_points == 7) || ( list_bond[i].name == "b2" && j == 1 &&  assumed_points == 3) ){
							bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
							count += 1;
						}else if( ( list_bond[i].name == "b3" && j == 0 &&  assumed_points == 2) || ( list_bond[i].name == "b3" && j == 1 &&  assumed_points == 6) ){
							bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
							count += 1;
						}else if( ( list_bond[i].name == "b4" && j == 0 &&  assumed_points == 1) || ( list_bond[i].name == "b4" && j == 1 &&  assumed_points == 5) ){
							bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
							count += 1;
						}else if( ( list_bond[i].name == "b5" && j == 0 &&  assumed_points == 0) || ( list_bond[i].name == "b5" && j == 1 &&  assumed_points == 4) ){
							bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
							count += 1;
						}else if( ( list_bond[i].name == "b6" && j == 0 &&  assumed_points == 7) || ( list_bond[i].name == "b6" && j == 1 &&  assumed_points == 3) ){
							bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
							count += 1;
						}else if( ( list_bond[i].name == "b7" && j == 0 &&  assumed_points == 0) || ( list_bond[i].name == "b7" && j == 1 &&  assumed_points == 4) ){
							bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
							count += 1;
						}else if( ( list_bond[i].name == "b8" && j == 0 &&  assumed_points == 1) || ( list_bond[i].name == "b8" && j == 1 &&  assumed_points == 5) ){
							bests_atom_bond_index[count] = [i , j , assumed_points , distance = (list_atom[selected_atom_index]. points[assumed_points][0] - list_bond[i]. points[j][0] )**2 +  (list_atom[selected_atom_index]. points[assumed_points][1] - list_bond[i]. points[j][1] )**2]
							count += 1;
						}
					}
				}
		}
	}
	// best_atom_bond_index ===> [which_bond , which_position_of_bond->where_atom_place , which_position_atom] 

	if(bests_atom_bond_index. length > 0){
		min_index = find_minimum_distance(bests_atom_bond_index)
		// console. log(list_atom[bests_atom_bond_index[min_index][0]]. points[ bests_atom_bond_index[min_index][1] ][0]	)
		// console. log(list_bond[bests_atom_bond_index[min_index][0]]. type)
		if(list_bond[bests_atom_bond_index[min_index][0]]. type != "single"){
			
			var blue_dot_X = list_atom[selected_atom_index]. points[bests_atom_bond_index[min_index][2] + 7][0] - 15;
			var blue_dot_Y = list_atom[selected_atom_index]. points[bests_atom_bond_index[min_index][2] + 7][1] - 15;
			scaleImgCss(blue_dot_1 , blue_dot_X , blue_dot_Y , 31 , 31 )
			
			var blue_dot_X = list_atom[selected_atom_index]. points[bests_atom_bond_index[min_index][2] + 7 + 1][0] - 15;
			var blue_dot_Y = list_atom[selected_atom_index]. points[bests_atom_bond_index[min_index][2] + 7 + 1][1] - 15;
			scaleImgCss(blue_dot_2 , blue_dot_X , blue_dot_Y , 31 , 31 )
		}else{
			blue_dot_2. hide();
			var blue_dot_X = list_atom[selected_atom_index]. points[bests_atom_bond_index[min_index][2]][0] - 15;
			var blue_dot_Y = list_atom[selected_atom_index]. points[bests_atom_bond_index[min_index][2]][1] - 15;
			scaleImgCss(blue_dot_1 , blue_dot_X , blue_dot_Y , 31 , 31 )	
		}
	}else{
		blue_dot_1. hide()
		blue_dot_2. hide();
	}


	if(alrady_highlighted == false){
		high_light_atom. hide();
	}
}

function positive(val){
	if(val < 0){
		return (-val)
	}
	return val;
}

function arg_mini(val1 , val2){
	if(positive(val1) > positive(val2) ){
		return 1;
	}
	return 0;
}

function set_bond( name = "" , type = "", img = "" , x, y , w , h){
		var dynamic_select = number_of_bond_created; 
		eval(`dynamic_bond_${number_of_bond_created} = createDiv();
			console. log(dynamic_select)
			dynamic_bond_${number_of_bond_created}. style("background-image" , "url('img/${img}.png')")
			dynamic_bond_${number_of_bond_created}. style("z-index" , "6")
			dynamic_bond_${number_of_bond_created}. style("cursor" , "pointer")
			dynamic_bond_${number_of_bond_created}. id("dynamic_bond_${number_of_bond_created}")
			
			list_bond[${number_of_bond_created}] = new Elt_bond(name , type , x , y , w , h)
			list_bond[${number_of_bond_created}].x = (mouseX - imgX)/ scl_x 
			list_bond[${number_of_bond_created}].y = (mouseY - imgY)/scl_y 
			
			selected_bond_index = number_of_bond_created;
			selected_bond = true;

			dynamic_bond_${dynamic_select}. mouseOver( function(){
				if(typeof root_node != "undefined"){

					parent_atom_id = Traverse_base_on_bond_id(root_node , dynamic_select)
					Traverse(root_node , parent_atom_id , function (data){
						// console. log(IndexOf(data. connected_bond , name) , name)
						bond_name_index = IndexOf(data. connected_bond_id , dynamic_select);
						console. log(bond_name_index , data. connected_bond_id , dynamic_select)
						if(typeof data. connected_atom[bond_name_index] == "undefined"){

								dynamic_bond_${dynamic_select}. style("cursor" , "pointer")
								dynamic_bond_${dynamic_select}. style("transform" , "scale(1.1)")
						}else{
							dynamic_bond_${dynamic_select}. style("cursor" , "default")
						}
					})
				}
			} )

			dynamic_bond_${dynamic_select}. mouseOut( function(){
					console. log("okay")
					dynamic_bond_${dynamic_select}. style("transform" , "scale(1)")
					
			} )

			dynamic_bond_${dynamic_select}. mousePressed( function(){
					console. log(dynamic_select)
					parent_atom_id = Traverse_base_on_bond_id(root_node , dynamic_select)
					Traverse(root_node , parent_atom_id , function (data){
						// console. log(IndexOf(data. connected_bond , name) , name)
						bond_name_index = IndexOf(data. connected_bond_id , dynamic_select);
						console. log(bond_name_index , data. connected_bond_id , dynamic_select)
						if(typeof data. connected_atom[bond_name_index] == "undefined"){

							dynamic_bond_${dynamic_select}. style("z-index" , "6")	
							selected_bond_index = dynamic_select;
							selected_bond = true;
						}
					})
			} )

			dynamic_bond_${dynamic_select}. mouseReleased( function(){
					dynamic_bond_${dynamic_select}. style("z-index" , "1")
					selected_bond = false;
					high_light_atom. hide()
					blue_dot_1. hide();
					blue_dot_2. hide();
					adjust_bond()
			} )

			number_of_bond_created += 1;
		`)
}

function set_atom(name = "" , type = "" , img = "" , x , y , r){
	var dynamic_select = number_of_atom_created;

			eval(`dynamic_atom_${number_of_atom_created} = createDiv();
			console. log(dynamic_select)
			dynamic_atom_${number_of_atom_created}. style("background-image" , "url('img/${img}.png')")
			dynamic_atom_${number_of_atom_created}. style("z-index" , "5")
			dynamic_atom_${number_of_atom_created}. style("cursor" , "pointer")
			dynamic_atom_${number_of_atom_created}. id("dynamic_atom_${number_of_atom_created}")
			
			list_atom[${number_of_atom_created}] = new Elt(name ,  type , x , y , r )
			list_atom[${number_of_atom_created}].x = (mouseX - imgX)/ scl_x - list_atom[${number_of_atom_created}].radius
			list_atom[${number_of_atom_created}].y = (mouseY - imgY)/scl_y - list_atom[${number_of_atom_created}].radius
			scaleImgCss(dynamic_atom_${number_of_atom_created} , list_atom[${number_of_atom_created}].x , list_atom[${number_of_atom_created}].y  ,84 , 82 )
			
			selected_atom_index = number_of_atom_created;
			selected_atom = true;

			console. warn(selected_atom_index)
			
			dynamic_atom_${dynamic_select}. mouseOver( function(){
					// console. log(typeof root_node , "okkay--+")
					if(typeof root_node != "undefined"){
						Traverse(root_node , dynamic_select , function(data){
							console. log(data. connected_bond)
							if(data. connected_bond. length == 0){
								dynamic_atom_${dynamic_select}. style("transform" , "scale(1.1)")
								dynamic_atom_${dynamic_select}. style("cursor" , "pointer")
							}else{
								dynamic_atom_${dynamic_select}. style("cursor" , "default")
							}

						})
					}
					
			} )
			dynamic_atom_${dynamic_select}. mouseOut( function(){
					console. log("okay")
					dynamic_atom_${dynamic_select}. style("transform" , "scale(1)")
					
			} )
			dynamic_atom_${dynamic_select}. mousePressed( function(){
					Traverse(root_node , dynamic_select , function(data){
						if(data. connected_bond. length == 0){
							selected_atom_index = dynamic_select;
							selected_atom = true;							
						}

					})
					
			} )

			dynamic_atom_${dynamic_select}. mouseReleased( function(){
				if(selected_atom){
					if(insideBox() || !AllElementsAreRemoved() ){				
						selected_atom = false;
						adjust_atom()
						high_light_atom. hide();
						blue_dot_1. hide();
						blue_dot_2. hide();
					}else{
						// console. warn("OOUTusds 2" , selected_atom_index , '#dynamic_atom_'+selected_atom_index , ${selected_atom_index});
						// console. warn(${selected_atom_index})
						selected_atom = false;
						animationDropOutAnimation('#dynamic_atom_'+ selected_atom_index , "atom" , function (){
							console. log("opopop" , '#dynamic_atom_'+selected_atom_index)
							eval("dynamic_atom_"+selected_atom_index+". remove()")
							remove_atom_in_atomList(selected_atom_index)
						})

					}
				}
			} )

			number_of_atom_created += 1;
		`)
}

function get_sign_x(angle){
	if( parseFloat(cos(angle). toFixed(2)) != 0){
		if(cos(angle) > 0){
			return 1;
		}else{
			return -1;
		}
	}else{
		// console. log("exp")
		if(sin(angle) > 0){
			return -1;
		}else{
			return 1;
		}
	}
}

function get_sign_y(angle){
	if( parseFloat(sin(angle). toFixed(2)) != 0){
		if(sin(angle) > 0){
			return -1;
		}else{
			return 1;
		}
	}else{
		// console. log("exp")
		if(cos(angle) > 0){
			return 1;
		}else{
			return -1;
		}
	}
}

function reset_elt(){
	for(i = 0 ; i< list_atom. length ; i++){
		eval(`dynamic_atom_${i}. remove()`)
	}
	for(i = 0 ; i< list_bond. length ; i++){
		eval(`dynamic_bond_${i}. remove()`)
	}

	delete root_node;
	root_node;

	list_atom = [];
	list_bond = [];

	number_of_atom_created = 0;
	number_of_bond_created = 0;
	count_atom = 0;
	count_bond = 0
}

function indexOfCustom(arr , val , count_){
	var index = -1;
	for(i = 0 ; i<count_ ; i++){
		index = arr. indexOf(val , index+1)
		if(index == -1){
			return -1;
		}
		// console. log(index)
	}
	// console. log(index)
	return index;
}
let correct_flag = true
function validate_tree(ref_root , check_root , first){
	if(first == true){
		correct_flag = true
	}
	if(ref_root . name != check_root. name){
		console. log("name not mach ")
		correct_flag = false;
		return false
	}else{
		console. log(ref_root. name)
	}

	// if(ref_root. connected_bond. length == 0 && check_root. connected_bond. length == 0)
	// {
	// 	return;
	// }
	// delete count_index_data; 
	let count_index_data = []
	if(ref_root. connected_bond. length == check_root. connected_bond. length){
		for(let i = 0; i < ref_root. connected_bond. length ; i++){
			if(count_index_data[ref_root. connected_bond[i]] == undefined){
					count_index_data[ref_root. connected_bond[i]] = 1	
			}
			check_index = indexOfCustom(check_root.connected_bond , ref_root. connected_bond[i] , count_index_data[ref_root. connected_bond[i]])
			if(check_index == -1){
				console. log("not found match")
				correct_flag = false
				return false
			}
			else{
				count_index_data[ref_root. connected_bond[i]] += 1
			}

			// COMPARE ANGLE
			// onle one bond
			if(indexOfCustom(check_root.connected_bond , ref_root. connected_bond[i] ,2) == -1){
				if(ref_root. connected_bond_angle[i] != check_root. connected_bond_angle[check_index]){
					console. log("Angle not match")
					correct_flag = false
					return false;
				}
			}else{
				first_index = indexOfCustom(check_root.connected_bond , ref_root. connected_bond[i] ,1)
				secound_index = indexOfCustom(check_root.connected_bond , ref_root. connected_bond[i] ,2)
				// console. log(ref_root. connected_bond_angle[i] , check_root. connected_bond_angle[first_index])
				// console. log(ref_root. connected_bond_angle[i] , check_root. connected_bond_angle[secound_index])
				if(ref_root. connected_bond_angle[i] != check_root. connected_bond_angle[first_index] && ref_root. connected_bond_angle[i] != check_root. connected_bond_angle[secound_index]){
					console. log("Angle not match")
					correct_flag = false
					return false;
				}
			}
			if(ref_root. connected_atom[i] != undefined  && check_root. connected_atom[check_index] == undefined){
				correct_flag = false
				return false;

			}
			if(ref_root. connected_atom[i] == undefined  && check_root. connected_atom[check_index] != undefined){
				correct_flag = false
				return false;
			}
			// console. log(ref_root. connected_atom[i]. name , check_root. connected_atom[check_index]. name , i , check_index)
			if(ref_root. connected_atom[i] != undefined && check_root. connected_atom[check_index] != undefined ){
				console. log("CHANGE" , correct_flag);
				if( false == validate_tree(ref_root. connected_atom[i] , check_root. connected_atom[check_index]) , false){
					correct_flag = false
				}
			}

		}
		// return true
	}else{
		console. log("LENGTH NOT MATCH")
		correct_flag = false
		return false;
	}
	// console. log(ref_root , check_root)
	return correct_flag;
}


function compareTree(){
	var check_structure = false;
	var number_of_solutions = 0;
	for(var data_ in ans_equation[0]){
		number_of_solutions++;
	}
	console. log(number_of_solutions);
	for(var i=0; i<number_of_solutions; i++){
		correct_flag = true;
		check_structure = validate_tree(root_node , ans_equation[Tab-1][i] , true)
		if(correct_flag == true){
			console. log('----True----')
			break;
		}else{
			console. log("----False----")
		}
	}
	if(correct_flag){
		return true;
	}
	return false;
}

function JSONcopy(src){
	return (JSON. parse(JSON. stringify(src)));
}

function MOVEE( dom , startTime , endTime , start , end ,opacityS = 0 , opacityE = 1 , direction = "up" , cb = function (){}){
	var time = new Date(). getTime();
	var opacity = map( time , startTime , endTime , opacityS , opacityE);
	dom. style("opacity" , opacity);
	if( time > endTime){
		if( direction == "up"){
			annimatio_up = false;
			if(ERROR != 1){
			}
		}else{
			annimatio_down = false;
			clickCheck = false;
			// disable_click_div. hide();
			if(clickReveal == false){
				check_btn. style("opacity" , "1");
				check_btn. style("cursor" ,  "pointer");
			}
			if(ERROR != 1){
				// Q1. style("background-image" , "url('img/"+(Tab * 2 - 1)+"/t"+arrange_random_question[0]+".png')");
				// Q2. style("background-image" , "url('img/"+(Tab * 2 - 1)+"/t"+arrange_random_question[1]+".png')");
				// Q3. style("background-image" , "url('img/"+(Tab * 2 - 1)+"/t"+arrange_random_question[2]+".png')");
				// Q4. style("background-image" , "url('img/"+(Tab * 2 - 1)+"/t"+arrange_random_question[3]+".png')");
				// hideWrongTicks();
			}
			ERROR = 0;
			cb();
		}
	}
	return (map( time , startTime , endTime , start , end))
}

function Next(){
	if(Tab != 10){
		if(Tab == 6){
			second_page = true;
			first_page = false;
		}
		reset_key();
		Tab++;
		reset_elt()
		eval(`page${Tab}. style("background-image" , "url('img/keyselect.png')")`)
		eval(`page${Tab}. style("cursor" , "default")`)

	}
}


function animationDropOutAnimation(animated_id , type , cb = ()=>{}){
	if(type == "atom"){
		// var startX = list_atom[selected_bond_index]. x * scl_x + imgX;
		// var startY = list_atom[selected_bond_index]. y * scl_y + imgY;
		console. log(type)
		var endX , endY;
		var atom_type = list_atom[selected_atom_index]. name;
		// if()
		console. log(atom_type)
		if(atom_type == "H"){
			endX = 2248 * scl_x + imgX;
			endY = (150 + y_off) * scl_y + imgY;
		}else if(atom_type == "O"){
			endX = 2227 * scl_x + imgX;
			endY = (313 + y_off) * scl_y + imgY;
		}else if(atom_type == "C"){
			endX = 2211 * scl_x + imgX;
			endY = (503 + y_off) * scl_y + imgY;
		}else if(atom_type == "Cl"){
			endX = 2204 * scl_x + imgX;
			endY = (733 + y_off) * scl_y + imgY;
		}else{
			console. error("plese select perfect atom")
		} 
		$(animated_id). animate({left: `${endX}px`, top: `${endY}px`} , 500 , function (){
			click_atom_btn = true;
			click_bond_btn = false
			atom_btn. style("background-image : url('img/Atoms1_button.png')")
			bond_btn. style("background-image : url('img/Bonds1_button.png')")
			atom_btn. style("cursor" , "default")
			bond_btn. style("cursor" , "pointer")
			cb();
			console. log("Sdsds")
		} );
	}else if(type == "bond"){
		// var startX = list_atom[selected_bond_index]. x * scl_x + imgX;
		// var startY = list_atom[selected_bond_index]. y * scl_y + imgY;

		var endX , endY;
		var bond_type = list_bond[selected_bond_index]. name;
		// if()
		if(bond_type == "b1"){
			endX = 2169 * scl_x + imgX;
			endY = (186 + y_off) * scl_y + imgY;
		}else if(bond_type == "b2"){
			endX = 2333 * scl_x + imgX;
			endY = (190 + y_off) * scl_y + imgY;
		}else if(bond_type == "b3"){
			endX = 2148 * scl_x + imgX;
			endY = (423 + y_off) * scl_y + imgY;
		}else if(bond_type == "b4"){
			endX = 2347 * scl_x + imgX;
			endY = (410 + y_off) * scl_y + imgY;
		}else if(bond_type == "b5"){
			endX = 2120 * scl_x + imgX;
			endY = (665 + y_off) * scl_y + imgY;
		}else if(bond_type == "b6"){
			endX = 2330 * scl_x + imgX;
			endY = (594 + y_off) * scl_y + imgY;
		}else if(bond_type == "b7"){
			endX = 2125 * scl_x + imgX;
			endY = (859 + y_off) * scl_y + imgY;
		}else if(bond_type == "b8"){
			endX = 2340 * scl_x + imgX;
			endY = (815 + y_off) * scl_y + imgY;
		}else{
			console. error("plese select perfect bond")
		} 
		$(animated_id). animate({left: `${endX}px`, top: `${endY}px`} , 500 , function (){
			click_atom_btn = false;
			click_bond_btn = true;
			atom_btn. style("background-image : url('img/Atoms_button.png')")
			bond_btn. style("background-image : url('img/Bonds_button.png')")
			atom_btn. style("cursor" , "pointer")
			bond_btn. style("cursor" , "default")
			cb();
		} );	
	}
}

// scaleImgCss(H_atom, 2248 , 150 + y_off , 84 , 84)
// 		scaleImgCss(O_atom, 2227 , 313 + y_off , 126 , 126)
// 		scaleImgCss(C_atom, 2211 , 503 + y_off , 157 ,157) 
// 		scaleImgCss(Cl_atom, 2204 , 733 + y_off , 171 , 171)

// scaleImgCss(b1_bond , 2169 , 186 + y_off, 24 , 140)
// 		scaleImgCss(b2_bond , 2333 , 190 + y_off, 106 , 106)
// 		scaleImgCss(b3_bond , 2148 , 423 + y_off, 64 , 140)
// 		scaleImgCss(b4_bond , 2347 , 410 + y_off, 106 , 106)
// 		scaleImgCss(b5_bond , 2120 , 675 + y_off, 140 , 24)
// 		scaleImgCss(b6_bond , 2330 , 594 + y_off, 135 , 135)
// 		scaleImgCss(b7_bond , 2125 , 859 + y_off, 140 , 64)
// 		scaleImgCss(b8_bond , 2340 , 815 + y_off, 135 , 135)

function insideBox(x = 13 , y = 254 , w = 2010 , h = 950){
	// tempO = createDiv("")
	// tempO. style("border" , "10px solid black");
	// scaleImgCss(tempO , x , y , w , h)
	if( (mouseX > (x)* scl_x+imgX && mouseX < (x + w) * scl_x + imgX) &&  (mouseY > (y * scl_y + imgY) && mouseY < (y + h)* scl_y + imgY  )){
		console. log("IN")
		return true
	}else{
		console. log("OUT")
		return false;
	}
}

function AllElementsAreRemoved(type = "atom"){
	if(type == "atom"){
		var count_temp = 0;
		var allAreDeleted = true;
		for(var index in list_atom){
			if(!list_atom[index]. removed){
				count_temp ++;
				// return false
			}
		}
		if(count_temp == 1){
			return true
		}else{
			return false;
		}
		// return true;
	}else{
		console. error("please select atom type")
	}
}

function remove_befor_adjust_atom(){
	remove_node( root_node , list_atom[selected_atom_index]. id , function (data){
					// remove_css(data , -1 , false)
					// eval(`dynamic_atom_${selected_atom_index}. remove()`)
					splice_index = data. connected_atom_id. indexOf(list_atom[selected_atom_index]. id)
					// data. connected_atom_id. splice(splice_index , 1)
					// data. connected_atom. splice(splice_index , 1)
					delete data. connected_atom_id [splice_index]
					delete data. connected_atom [splice_index]
					// data. connected_atom_id [splice_index] = undefined
					// data. connected_atom [splice_index] = undefined
					console. log("removed node")
					return data;
	})	
}
/*
function mousePressed(){
	console. log(`o`)
	insideBox()
}*/