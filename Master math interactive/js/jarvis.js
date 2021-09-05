/************************************************************************
	step :
	-----------
		step 0 : Question (Which user try to Simplify) &nbsp;&nbsp;&nbsp;	step 1 : expand given question
		step n : number of time , we need to expand above step equation 

*************************************************************************/

let current_step = 0;
var Tab = 1
var font_size = 32;
var expand_btn_remove = 0;                            // how much expand clicked

var show_next_btn = true;
var show_apply_btn = false;
var mathJaxClassP5Elt = [];                           //store all new dynamic p5 ELT, after typeset MathJax. hub 
var mathJaxClassElt = [];							  //store all mew dynamic basic html elements
var position_exp_btn_list = [];                       //store refrence of the position 

var hide_exp_btn = false;

var page_len = 0;
var reset_mathjax_index = 0;

var wait_new_cmd = true;
var clicked_apply_btn = false;
var apply_law_text = ""

var equation_index = "";
var one_time_click_flag = [];

//Hover btn
var hoverVal = 3;                 //How much change in x and y
var hoverReset_btn = false
var hoverNext_btn = false;
var hoverPrev_btn = false;
var hoverApply_btn = false;
var hoverGoToBtn = false; 
var hoverLeft = false;
var hoverRight = false;

var net_change = 0;

// Hide effect
var number_of_equation = 0;
var show_expand_btn = true;
var hide_exp_1 = false;
var hide_exp_1_copy = false;
var force_to_animation_stop = false
var animation_start = false;
var animation_completed = true
var ANIMATION_TIME = 1000;                  // Animation Time for slid up equaiton
var onChange = false;
var halfChange = false;                    // only hide orignal content and show copy content :->  Not change in hide content
var click_next =false
var click_prev = false;

var EXERCISE = false;
var SOLUTION = true;
// All Position constant
pageX = 850 , pageY = 1245 , pageW = 1006 , pageH = 117;  
pageLeftX = 7, pageLeftY = 0, pageLeftW = 110 , pageLeftH = 110;
// page1X = 117 + 10, page1Y = 0, page1W = 117 , page1H = 117;
// page2X = 117 + 117 + 20, page2Y = 0, page2W = 117 , page2H = 117;
// page3X = 3 * 117 + 30, page3Y = 0, page3W = 117 , page3H = 117;
// pageRightX = 4 * 117 + 40, pageRightY = 0, pageRightW = 110 , pageRightH = 110;


function set_div(){
	// equation_index = "equation_" + getNumberOfEquationInTab();
	equation_index = "equation_1"
	count_pg = 0
	for(var pg in mathInteractiveContent)
	{
		eval(`
				page${count_pg+1}X = (count_pg+1 )*(117+10);
				page${count_pg+1}Y = 0, page${count_pg+1}W = 117 , page${count_pg+1}H = 117;
			`)
		count_pg++
	}
	eval(`pageRightX = (count_pg+1 )*(117+10) , pageRightY = 0, pageRightW = 117 , pageRightH = 117;`)
		console. log(count_pg)
	mathInteractiveContentCopy=  bestCopyEver(mathInteractiveContent)
	// Equation Text Div  > Maximum only two last solution can show
	question_div = createDiv("");                        					// Question Text 
	// question_di = createDiv("");
	question_div_content = createDiv("")
	solution_equation_1_div = createDiv("")				 					// Expanded 2nd last equation
	solution_equation_1_div_content = createDiv("")
	solution_equation_2_div = createDiv("")				 					// Expanded last equation 
	solution_equation_2_div_content = createDiv("")
	solution_equation_3_div = createDiv("")				 					// Expanded last equation 
	solution_equation_3_div_content = createDiv("")
	seprate_line = createDiv("")
	seprate_line2 = createDiv("")
	apply_law_btn = createDiv("")
	reset_btn = createDiv("");
	go_to_exercise = createDiv("")
	apply_line = createDiv("");
	apply_box = createDiv("");
	apply_box_content = createDiv("")


	// #Copy of orignal Div
	solution_equation_1_div_copy = createDiv("")
	solution_equation_1_div_content_copy = createDiv("")
	solution_equation_1_div_content_copy. parent(solution_equation_1_div_copy)
	solution_equation_2_div_copy = createDiv("")
	solution_equation_2_div_content_copy = createDiv("")
	solution_equation_2_div_content_copy. parent(solution_equation_2_div_copy)
	solution_equation_3_div_copy = createDiv("")
	solution_equation_3_div_content_copy = createDiv("")
	solution_equation_3_div_content_copy. parent(solution_equation_3_div_copy)

	
	// Next Button
	next_step_div = createDiv("")                        					// Change Step Button
	// previous Button
	prev_step_div = createDiv("")                        					// Change Step Button
	
	// set parent 
	question_div_content. parent(question_div)								//Question could place	
	solution_equation_1_div_content. parent(solution_equation_1_div)
	solution_equation_2_div_content. parent(solution_equation_2_div)
	solution_equation_3_div_content. parent(solution_equation_3_div)
	apply_box_content. parent(apply_box)

	seprate_line. style("background-color" , "rgb(102 , 102 , 102)")
	seprate_line2. style("background-color" , "rgb(102 , 102 , 102)")
	apply_line. style("background-color" , "rgb(102 , 102 , 102)")
	// #SET PROPERTIES
	question_div. style("position" , "absolute")
	solution_equation_1_div. style("position" , "absolute")
	solution_equation_2_div. style("position" , "absolute")
	solution_equation_3_div. style("position" , "absolute")

	question_div_content. style("position" , "absolute")
	question_div_content. style("text-align" , "center");
	question_div_content. style("top" , "50%");
	question_div_content. style("left" , "50%");
	question_div_content. style("transform" , "translate(-50% , -50%)")
	question_div_content. style("font-size" , font_size+"px")

	solution_equation_1_div_content. style("position" , "absolute")
	solution_equation_1_div_content. style("text-align" , "center");
	solution_equation_1_div_content. style("top" , "50%");
	solution_equation_1_div_content. style("transform" , "translate(0% , -50%)")
	solution_equation_1_div_content. style("font-size" , font_size+"px")

	solution_equation_2_div_content. style("position" , "absolute")
	solution_equation_2_div_content. style("text-align" , "center");
	solution_equation_2_div_content. style("top" , "50%");
	solution_equation_2_div_content. style("transform" , "translate(0% , -50%)")
	solution_equation_2_div_content. style("font-size" , font_size+"px")

	solution_equation_3_div_content. style("position" , "absolute")
	solution_equation_3_div_content. style("text-align" , "center");
	solution_equation_3_div_content. style("top" , "50%");
	solution_equation_3_div_content. style("transform" , "translate(0% , -50%)")
	solution_equation_3_div_content. style("font-size" , font_size+"px")

	apply_box_content. style("position" , "absolute")
	// apply_box_content. style("text-align" , "center");
	apply_box_content. style("top" , "50%");
	apply_box_content. style("text-align" , "center")
	apply_box_content. style("left" , "20%")
	// apply_box_content. style("right" , "20%")
	apply_box_content. style("transform" , "translate( -10% , -50%)")

	// Copy div set properties

	solution_equation_1_div_copy. style("position" , "absolute")
	solution_equation_2_div_copy. style("position" , "absolute")
	solution_equation_3_div_copy. style("position" , "absolute")

	solution_equation_1_div_content_copy. style("position" , "absolute")
	solution_equation_1_div_content_copy. style("text-align" , "center");
	solution_equation_1_div_content_copy. style("top" , "50%");
	solution_equation_1_div_content_copy. style("transform" , "translate(0% , -50%)")
	solution_equation_1_div_content_copy. style("font-size" , font_size+"px")

	solution_equation_2_div_content_copy. style("position" , "absolute")
	solution_equation_2_div_content_copy. style("text-align" , "center");
	solution_equation_2_div_content_copy. style("top" , "50%");
	solution_equation_2_div_content_copy. style("transform" , "translate(0% , -50%)")
	solution_equation_2_div_content_copy. style("font-size" , font_size+"px")

	solution_equation_3_div_content_copy. style("position" , "absolute")
	solution_equation_3_div_content_copy. style("text-align" , "center");
	solution_equation_3_div_content_copy. style("top" , "50%");
	solution_equation_3_div_content_copy. style("transform" , "translate(0% , -50%)")
	solution_equation_3_div_content_copy. style("font-size" , font_size+"px")

	next_step_div. style("background-image" , "url('img/Arrow.png')");
	next_step_div. style("repeat" , "none")
	next_step_div. style("z-index" , "5")
	next_step_div. style("cursor" , "pointer")

	prev_step_div. style("background-image" , "url('img/Arrow.png')");
	prev_step_div. style("repeat" , "none")
	prev_step_div. style("z-index" , "5")
	prev_step_div. style("cursor" , "pointer")
	prev_step_div. style(`transform-origin`, `50% 50%`)
  	prev_step_div. style("transform" , "rotate(180deg)")

	reset_btn. style("background-image" , "url('img/reset.png')");
	reset_btn. style("background-repeat" , "none");
	reset_btn. style("z-index" , "1");
	reset_btn. hide();

	go_to_exercise. style("background-image" , "url('img/go_to_exercise.png')");
	go_to_exercise. style("background-repeat" , "none");
	go_to_exercise. style("z-index" , "1");
	go_to_exercise. style("cursor" , "pointer")
	go_to_exercise. hide();

	apply_box. style("background-image" , "url('img/ref_applybg.png')");
	apply_box. style("background-repeat" , "none");
	apply_box. style("z-index" , "1");
	apply_box. hide();

	// #MOUSE EVENTS:

	// When click on arrow btn then chnage the step
	// Next btn Events	
	next_step_div. mouseClicked(function (){
		next_step_div. hide();
		force_to_animation_stop = false;
		// length_exp_btn = 
		for(var i = 0; i < position_exp_btn_list. length; i++){
			if(eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. type`) != "law"){
				eval(`dynamic_exp_btn_${i}. remove()`)
			}
		}
		console. log("exp btn removed")
		// console. log(position_exp_btn_list)
		current_step ++;
		if(current_step > 1){
			// animation_start = true;
			// starting_time = new Date() . getTime();
		animation_completed = false
			click_next = true
		}
		show_next_btn = false
		show_apply_btn = false;
		clicked_apply_btn = false
		intractiveText(createExpandBtn);
		solution_equation_3_div. hide();
		solution_equation_3_div_copy. hide();
		console. log(position_exp_btn_list)
		// solution_equation_2_div. hide();
		// solution_equation_2_div_copy. hide();
		// solution_equation_1_div. hide();
		// solution_equation_1_div_copy. hide();
		// expand_btn_remove = 0
	})
	next_step_div. mouseOver( function (){
		hoverNext_btn = true;
		// 
	})
	next_step_div. mouseOut( function (){
		hoverNext_btn = false;
		// 
	})

	prev_step_div. mouseClicked(function (){
		previousBtn();
	})
	prev_step_div. mouseOver( function (){
		hoverPrev_btn = true;
		// 
	})
	prev_step_div. mouseOut( function (){
		hoverPrev_btn = false;
		// 
	})

	reset_btn. mouseOver(function(){
		reset_btn. style("cursor" , "pointer")
		hoverReset_btn = true
	})
	reset_btn.mouseOut( function (){
		hoverReset_btn = false
	})

	reset_btn. mouseClicked ( function (){
		hoverReset_btn = false
		setTimeout( function (){
			hoverReset_btn = true;
			reset_page();
		} , 200)
	})

	go_to_exercise. mouseClicked(function(){
		hoverGoToBtn = false
		setTimeout(function (){
			hoverGoToBtn = true
		} , 200)
		current_step = 1
		EXERCISE = true
		setExe_div();
		go_to_exercise. hide()
		// alert("Under Development!!!")
	})
	go_to_exercise. mouseOver(function (){
		hoverGoToBtn = true
	})
	go_to_exercise. mouseOut(function (){
		hoverGoToBtn = false
	})
	
	//---------Pagination Button----------//
		page = createDiv("");
		page. style("position" , "absolute");
		page. hide();

		pageLeft = createDiv(""); //<
		pageLeft. style("background-image" , "url('img/prev.png')");
		pageLeft. style("cursor" , "pointer")
		pageLeft. parent(page);
		pageLeft. hide();

		pageRight = createDiv(""); //<
		pageRight. style("background-image" , "url('img/prev.png')");
		pageRight. parent(page);
		pageRight. style("cursor" , "pointer")
		pageRight. hide();

		for(var k = 1 ;  k <= count_pg ;k++){
			eval(`
					if(k == 1){
						page1 = createDiv(""); //1
						page1. style("background-image" , "url('img/keyselect.png')");
						page1. parent(page);
						page1. hide();
					}else{
						page${k} = createDiv(""); //1
						page${k}. style("background-image" , "url('img/key.png')");
						page${k}. parent(page);
						page${k}. hide();
					}
				`)
		}

		// page1 = createDiv(""); //1
		// page1. style("background-image" , "url('img/keyselect.png')");
		// page1. parent(page);
		// page1. hide();

		// page2 = createDiv(""); //2
		// page2. style("background-image" , "url('img/key.png')");
		// page2. parent(page);
		// page2. hide();

		// page3 = createDiv("");//3
		// page3. style("background-image" , "url('img/key.png')");
		// page3. parent(page);
		// page3. hide();


		for( i = 1; i <= count_pg ; i++){
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
					reset_key();
					// console. log(Tab  , "tab")
					Tab = temp_${i};
					console. log(temp_${i})
					page${eval(`temp_${i} `)}. style("background-image" , "url('img/keyselect.png')")
					page${eval(`temp_${i} `)}. style("cursor" , "default")
					reset_page();
				}
			})
			`)
		}

		pageRight. mouseClicked( function (){
			if(Tab != count_pg){
				reset_key();
				Tab ++;
				if(Tab == count_pg){
					pageRight. style("cursor" , "default")
					hoverRight == false
				}
				eval(`page${Tab}. style("background-image" , "url('img/keyselect.png')") `)
				reset_page();
				
			}
		})
		pageRight. mouseOver( function (){
			if(Tab == count_pg){
				hoverRight = false
				pageRight. style("cursor" , "default")
				// pageRight. style("pointer-events" , "none")
			}else{
				pageRight. style("cursor" , "pointer")
				hoverRight = true
			}
		})
		pageRight. mouseOut(function (){
			hoverRight = false;
		})
		pageLeft. mouseOut(function (){
			hoverLeft = false;
		})

		pageLeft. mouseClicked( function (){
			if(Tab !== 1){
				reset_key();
				Tab --;
				if(Tab == 1){
					hoverLeft = false
					pageLeft. style("cursor" , "default")
				}
				eval(`page${Tab}. style("background-image" , "url('img/keyselect.png')") `)
				reset_page();
				
			}
		})
		pageLeft. mouseOver( function (){
			if(Tab == 1){
				hoverLeft = false
				pageLeft. style("cursor" , "default")
				// pageLeft. style("pointer-events" , "none")
			}else{
				hoverLeft = true
				pageLeft. style("cursor" , "pointer")
				// pageLeft. style("pointer-events" , "auto")
			}
		})

	/*\\(\\newcommand{ \\scdot }{ {\\cdot} }*/  
	// create New comand remove extra space
	new_cmd = createDiv("")
	new_cmd. html(`(\\ \\(\\newcommand{ \\scdot }{ {\\cdot} } \\)`) 
	MathJax. Hub. Queue( ["Typeset",MathJax.Hub] , function (){
		new_cmd. show();
		wait_new_cmd = false;
	})
		
}

function intractiveText(cb = () => {}  , cb2 = () => {}){

	onChange = true
	halfChange = true
	console. log(1/scl_x)
	if(current_step == 0){  //Only Question could load
		
		question_div_content. style("font-size" , font_size * 2.26059 * scl_x + "px")
		question_div_content. html("\\("+ `Simplify: \\,\\,\\,` + eval(`mathInteractiveContentCopy. page_1. ${equation_index}. question`) + "\\)")
		
		question_div_content. hide();
		
	}else if(current_step == 1){
		
		// if(onChange == false){
			solution_equation_1_div_content. style("font-size" , font_size * 2.26059 * scl_x + "px")
			// solution_equation_1_div_content. html(" \\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. currentStepString() `) + "\\)")
			solution_equation_1_div_content. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. currentStepString() `) + "\\)")
			
			solution_equation_1_div_content_copy. show();
			solution_equation_1_div_content. hide();
		// }

	}else if(current_step == 2){
		console. log("start")

		solution_equation_1_div_content. style("font-size" , font_size * 2.26059 * scl_x + "px")
		solution_equation_1_div_content. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. previousStepString() `) + "\\)")
		solution_equation_1_div_content. hide();
		solution_equation_1_div_content_copy. show();
		
		solution_equation_2_div_content. style("font-size" , font_size * 2.26059 * scl_x + "px")
		solution_equation_2_div_content. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. currentStepString() `) + "\\)")
		solution_equation_2_div_content. hide();
		solution_equation_2_div_content_copy. show();
		
	}else{
		console. log("start")

		solution_equation_1_div_content. style("font-size" , font_size * 2.26059 * scl_x + "px")
		solution_equation_1_div_content. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step-1}. previousStepString() `) + "\\)")
		solution_equation_1_div_content. hide();
		solution_equation_1_div_content_copy. show();

		solution_equation_2_div_content. style("font-size" , font_size * 2.26059 * scl_x + "px")
		solution_equation_2_div_content. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. previousStepString() `) + "\\)")
		solution_equation_2_div_content. hide();
		solution_equation_2_div_content_copy. show();
		
		solution_equation_3_div_content. style("font-size" , font_size * 2.26059 * scl_x + "px")
		solution_equation_3_div_content. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. currentStepString() `) + "\\)")
		solution_equation_3_div_content. hide();
		solution_equation_3_div_content_copy. show();
	}

	intractiveTextScale();

	// Converting Latex formate
	hide_exp_btn = true
	console. log("-----------STARTED-----------")
	MathJax. Hub. Queue( ["Typeset",MathJax.Hub] , function (){
		halfChange = false
		console. log("-------------END-----------")
		// Select all Typeset data converted by MathJax. hub
		math_cnt = MathJax.Hub.getAllJax("MathDiv");
		math_cnt. forEach( function (item , index){
			mathJaxClassP5Elt[index + reset_mathjax_index] = select(`#${item. inputID}-Frame`)
			mathJaxClassElt[index + reset_mathjax_index] = document. getElementById(`${item. inputID}-Frame`)
		})
		intractiveTextScale();
		question_div_content. show();
		// solution_equation_1_div_content. html(/solution_equation_1_div_content_copy. html())
		if(current_step >=1){
			if(current_step == 1){
				solution_equation_1_div_content. show()
				solution_equation_1_div_content_copy. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. currentStepString() `) + "\\)")
				
			}else if(current_step == 2){
				solution_equation_1_div_content. show()
				solution_equation_2_div_content. show()
				solution_equation_1_div_content_copy. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. previousStepString() `) + "\\)")
				solution_equation_2_div_content_copy. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. currentStepString() `) + "\\)")
			}else{
				solution_equation_1_div_content. show()
				solution_equation_2_div_content. show()
				solution_equation_3_div_content. show()
				solution_equation_1_div_content_copy. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step-1}. previousStepString() `) + "\\)")
				solution_equation_2_div_content_copy. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. previousStepString() `) + "\\)")
				solution_equation_3_div_content_copy. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. currentStepString() `) + "\\)")
			}
			solution_equation_1_div_content_copy. hide();
			solution_equation_2_div_content_copy. hide();
			solution_equation_3_div_content_copy. hide();

			MathJax. Hub. Queue( ["Typeset",MathJax.Hub] , function (){
				math_cnt = MathJax.Hub.getAllJax("MathDiv");
				math_cnt. forEach( function (item , index){
					mathJaxClassP5Elt[index + reset_mathjax_index] = select(`#${item. inputID}-Frame`)
					mathJaxClassElt[index + reset_mathjax_index] = document. getElementById(`${item. inputID}-Frame`)
				})
				console.log("Changed")
				onChange = false;
				if(click_next == true){
					starting_time = new Date(). getTime();
					animation_start = true
					// animation_completed = false
					console. log("Animation Start")
					click_next = false

				}
				
			})
		}
		cb( function (){
			// starting_time = new Date(). getTime();
			// animation_start = true
			// console. log("Animation Start")
		});
		cb2()
		hide_exp_btn = false;
	});

	
	// Disable show menu and messege
	MathJax.Hub.Config({
  		showMathMenu: false,
  		messageStyle: "none"
	});

	// MathJax.Hub.Config({
	//   "fast-preview": {disabled: true},
	//   tex2jax: {preview: "none"}
	// });
}

function intractiveTextScale(){
	if(current_step == 0){  
		scaleImgCss(question_div , 700 , 240 , 1200 , 850)
	}else if(current_step == 1){
		scaleImgCss(question_div , 0 , 240 , 1200 , 850)
	}
	mathJaxClassP5Elt. forEach( (item , index) =>{
		item. style("font-size" , font_size * 2.26059 * scl_x + "px")
		// item. style("color" , "red")
	})
}



function drawJarvis(){
	// if(clicked_apply_btn == true ||)

	//Select mathjax equation for eliminate blink effect
	if(net_change != 3 && halfChange == false){
		if(current_step == 1){
			if(net_change != 2 && net_change != 3){
				net_change = 1
			}
		}else if(current_step == 2){
			if(net_change != 3){
				net_change = 2
			}
		}else if(current_step == 3){
			net_change = 3
		} 
	}

	if(hoverGoToBtn == false){
		scaleImgCss(go_to_exercise , 40 , 1000 ,514 , 179)
	}else{
		scaleImgCss(go_to_exercise , 40-10 , 1000 -10,514 + 2*10, 179 + 2*10)
	}
	if(eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. exerciseEnabled`) == false){
		go_to_exercise. hide()
	}
	
	//Reset Btn
	if(current_step == 0){
		reset_btn. style("pointer-events" , "none")
		reset_btn. style("opacity" , "0.5")
	}else{
		reset_btn. style("pointer-events" , "auto")
		reset_btn. style("opacity" , "1")
	}

	if(hoverReset_btn == false){
		scaleImgCss(reset_btn , 2062 , 1253 , 315 , 106);
	}else{
		scaleImgCss(reset_btn , 2062 - 15.5, 1253 - 5.3  , 315 + 31.5, 106 + 10.6);
	}

	sclPageBtn();
	
	//Scale Orignal Text content
	if(force_to_animation_stop == false){
		if(current_step == 0){
			if(onChange == true){
				if(hoverNext_btn == false){
					scaleImgCss(next_step_div , 1775 , 605 , 110 , 110)
				}else{
					scaleImgCss(next_step_div , 1775 - hoverVal , 605 - hoverVal, 110 + 2 * hoverVal, 110 + 2 * hoverVal)
				}
			}
			scaleImgCss(question_div , 700 , 240 , 1200 , 850)
			solution_equation_1_div. hide();
			solution_equation_2_div. hide();
			solution_equation_3_div. hide();
			solution_equation_1_div_copy. hide();
			solution_equation_2_div_copy. hide();
			solution_equation_3_div_copy. hide();
			seprate_line. hide();
			seprate_line2. hide();
		}else if(current_step == 1){
			scaleImgCss(question_div , -150 , 240 , 1200 , 850)
			scaleImgCss(seprate_line , 963 , 245 , 6 ,975);
			scaleImgCss(seprate_line2 , 2472 , 245 , 6 ,975);
			scaleImgCss(solution_equation_1_div , 1010 , 240 , 1200 , 850)
			scaleImgCss(solution_equation_1_div_copy , 1010 , 240 , 1200 , 850)
			
			solution_equation_2_div. hide();
			solution_equation_3_div. hide();
			solution_equation_2_div_copy. hide();
			solution_equation_3_div_copy. hide();
		}else if(current_step == 2){
			scaleImgCss(question_div , -150 , 240 , 1200 , 850)
			scaleImgCss(seprate_line , 963 , 245 , 6 ,975);
			scaleImgCss(seprate_line2 , 2472 , 245 , 6 ,975);
			
			if(animation_start == true){
				var Start_Y =240 , End_Y = -60;
				var current_Y = 0;
				current_Y = map(new Date(). getTime() , starting_time , starting_time + ANIMATION_TIME , Start_Y , End_Y)
				if(current_Y < End_Y){
					current_Y = End_Y
					animation_start = false
					animation_completed = true
				}
				console. log(current_Y)
				// if(animation_start == true){

				// }
				if(onChange == false){
					scaleImgCss(solution_equation_1_div , 1010 , current_Y , 1200 , 850)
					scaleImgCss(solution_equation_1_div_copy , 1010 , current_Y , 1200 , 850)
					
					if(animation_start == false){
						show_expand_btn = true;
						scaleImgCss(solution_equation_2_div , 1010 , 290 , 1200 , 850)
						scaleImgCss(solution_equation_2_div_copy , 1010 , 290 , 1200 , 850)
					}else{
						show_expand_btn = false
						solution_equation_2_div. hide();
						solution_equation_2_div_copy. hide();
					}
				}
			}
		}else{
			scaleImgCss(question_div , -150 , 240 , 1200 , 850)
			scaleImgCss(seprate_line , 963 , 245 , 6 ,975);
			scaleImgCss(seprate_line2 , 2472 , 245 , 6 ,975);
			if(animation_start == true){
				if(current_step == 3){
					var Start_Y =-60 , End_Y = -60;
				}else{
					var Start_Y =180 , End_Y = -60;
				}
				current_Y = map(new Date(). getTime() , starting_time , starting_time + ANIMATION_TIME , Start_Y , End_Y)
				if(current_Y < End_Y){
					current_Y = End_Y
					Start_Y = End_Y
					animation_start = false
					solution_equation_3_div. show();
					solution_equation_3_div_copy. show();
					animation_completed = true
					console. log("Showed")
				}else{
					solution_equation_3_div. hide();
					solution_equation_3_div_copy. hide();
				}
				if(current_step == 3){
					var Start_Y2 =240 , End_Y2 = 180;
				}else{
					var Start_Y2 =430 , End_Y2 = 180;
				}
				var current_Y2 = 0
				current_Y2 = map(new Date(). getTime() , starting_time , starting_time + ANIMATION_TIME , Start_Y2 , End_Y2)
				if(current_Y2 < End_Y2){
					current_Y2 = End_Y2
					Start_Y2 = End_Y2
					animation_start = false
					animation_completed = true
				}
				if(animation_start == false ){
					current_Y = Start_Y
					current_Y2 = Start_Y2
				}

				if(onChange == false){
				// if(animation_completed == true){
					scaleImgCss(solution_equation_1_div , 1010 , current_Y , 1200 , 850)
					scaleImgCss(solution_equation_2_div , 1010 , current_Y2 , 1200 , 850)
					scaleImgCss(solution_equation_1_div_copy , 1010 , current_Y , 1200 , 850)
					scaleImgCss(solution_equation_2_div_copy , 1010 , current_Y2 , 1200 , 850)
					
					if(animation_start == false){
						scaleImgCss(solution_equation_3_div , 1010 , 430 , 1200 , 850)
						scaleImgCss(solution_equation_3_div_copy , 1010 , 430 , 1200 , 850)
					}else{
						solution_equation_3_div. hide();
						solution_equation_3_div_copy. hide()
					}
				}
				scaleImgCssWithoutShow(solution_equation_1_div , 1010 , current_Y , 1200 , 850)
				scaleImgCssWithoutShow(solution_equation_2_div , 1010 , current_Y2 , 1200 , 850)
				scaleImgCssWithoutShow(solution_equation_1_div_copy , 1010 , current_Y , 1200 , 850)
				scaleImgCssWithoutShow(solution_equation_2_div_copy , 1010 , current_Y2 , 1200 , 850)
				scaleImgCssWithoutShow(solution_equation_3_div , 1010 , 430 , 1200 , 850)
				scaleImgCssWithoutShow(solution_equation_3_div_copy , 1010 , 430 , 1200 , 850)
			}else{
				if(animation_completed != true){
					if(current_step == 3){
						var Start_Y =-60 , End_Y = -60;
					}else{
						var Start_Y =180 , End_Y = -60;
					}
					if(current_step == 3){
						var Start_Y2 =240 , End_Y2 = 180;
					}else{
						var Start_Y2 =430 , End_Y2 = 180;
					}
					scaleImgCssWithoutShow(solution_equation_1_div , 1010 , Start_Y , 1200 , 850)
					scaleImgCssWithoutShow(solution_equation_2_div , 1010 , Start_Y2 , 1200 , 850)
					scaleImgCssWithoutShow(solution_equation_1_div_copy , 1010 , Start_Y , 1200 , 850)
					scaleImgCssWithoutShow(solution_equation_2_div_copy , 1010 , Start_Y2 , 1200 , 850)
					scaleImgCssWithoutShow(solution_equation_3_div , 1010 , 430 , 1200 , 850)
					scaleImgCssWithoutShow(solution_equation_3_div_copy , 1010 , 430 , 1200 , 850)
				}
			}
			/*scaleImgCss(solution_equation_1_div , 1010 , -60 , 1200 , 850)
			scaleImgCss(solution_equation_2_div , 1010 , current_Y , 1200 , 850)
			scaleImgCss(solution_equation_3_div , 1010 , 430 , 1200 , 850)
			scaleImgCss(solution_equation_1_div_copy , 1010 , -60 , 1200 , 850)
			scaleImgCss(solution_equation_2_div_copy , 1010 , current_Y , 1200 , 850)
			scaleImgCss(solution_equation_3_div_copy , 1010 , 430 , 1200 , 850)*/
		}
	}else{
		animation_start = false
		scaleImgCss(question_div , -150 , 240 , 1200 , 850)
		scaleImgCss(seprate_line , 963 , 245 , 6 ,975);
		scaleImgCss(seprate_line2 , 2472 , 245 , 6 ,975);
		if(current_step >= 3){
			scaleImgCss(solution_equation_1_div , 1010 , -60 , 1200 , 850)
			scaleImgCss(solution_equation_2_div , 1010 , current_Y , 1200 , 850)
			scaleImgCss(solution_equation_3_div , 1010 , 430 , 1200 , 850)
			scaleImgCss(solution_equation_1_div_copy , 1010 , -60 , 1200 , 850)
			scaleImgCss(solution_equation_2_div_copy , 1010 , current_Y , 1200 , 850)
			scaleImgCss(solution_equation_3_div_copy , 1010 , 430 , 1200 , 850)
		}else if(current_step == 2){

			scaleImgCss(solution_equation_1_div , 1010 , -60 , 1200 , 850)
			scaleImgCss(solution_equation_1_div_copy , 1010 , -60 , 1200 , 850)
			scaleImgCss(solution_equation_2_div , 1010 , 290 , 1200 , 850)
			scaleImgCss(solution_equation_2_div_copy , 1010 , 290 , 1200 , 850)
			solution_equation_3_div. hide()
			solution_equation_3_div_copy. hide();
		}else if(current_step == 1){
			scaleImgCss(solution_equation_1_div , 1010 , 240 , 1200 , 850)
			scaleImgCss(solution_equation_1_div_copy , 1010 , 240 , 1200 , 850)
			solution_equation_2_div. hide()
			solution_equation_2_div_copy. hide();
			solution_equation_3_div. hide()
			solution_equation_3_div_copy. hide();
		}
	}

	// Scl expand btn
	for(var i = 0 ; i < position_exp_btn_list. length ; i++){
			// if(hide_exp_btn == false){
			if(show_expand_btn == true && animation_completed == true){
				// console. log(show_expand_btn , animation_start , onChange)
				var reduce_size = 0;
				if(eval(`click_exp_btn_${i}`) == true){
					eval(`
							dynamic_exp_btn_${i}. style("border-width", 8 * scl_x+"px")
							reduce_size = 8
						`)
				}else{
					eval(`
							dynamic_exp_btn_${i}. style("border-width", 0 * scl_x+"px")
						`)
						// console. log("sfmdfsafjkasjhjfhjasfh")
				}
				// console. log("okay")
				eval(`
					if(current_step == 1){
						if(hide_exp_btn == false){
							var equation_position = mathJaxClassElt[1].getBoundingClientRect()
						}else{
							var equation_position = mathJaxClassElt[1 + net_change].getBoundingClientRect()
						}
					}else if(current_step == 2){
						if(hide_exp_btn == false){
							var equation_position = mathJaxClassElt[2].getBoundingClientRect()
						}else{
							var equation_position = mathJaxClassElt[2 + net_change].getBoundingClientRect()
						}
					}else{
						if(hide_exp_btn == false){
							var equation_position = mathJaxClassElt[3].getBoundingClientRect()
						}else{
							var equation_position = mathJaxClassElt[3 + net_change].getBoundingClientRect()
						}
					}
					if(position_exp_btn_list[i]. split(" ")[0] == "t"){
						// console. log(current_step)
						//Get the x , y , w  and h for mathJaxClassElt[2]
						if(hover_exp_btn_${i} == false){
							scaleImgCss(dynamic_exp_btn_${i} ,( (equation_position. x + equation_position. width * position_exp_btn_list[i]. split(" ")[1] * 0.01) - imgX) / scl_x, ( ( (equation_position.y) -imgY) / scl_y) - 90 , 65 - reduce_size , 65 - reduce_size  )	
						}else{
							scaleImgCss(dynamic_exp_btn_${i} ,( (equation_position. x + equation_position. width * position_exp_btn_list[i]. split(" ")[1] * 0.01) - imgX) / scl_x - hoverVal, ( ( (equation_position.y) -imgY) / scl_y) - 90 - hoverVal , 65 - reduce_size + 2 * hoverVal, 65 - reduce_size + 2 * hoverVal )
						}
					}else if(position_exp_btn_list[i]. split(" ")[0] == "b"){
						if(hover_exp_btn_${i} == false){	
							scaleImgCss(dynamic_exp_btn_${i} ,( (equation_position. x + equation_position. width * position_exp_btn_list[i]. split(" ")[1] * 0.01) - imgX) / scl_x, ( ( (equation_position.y + equation_position.height ) -imgY) / scl_y) + 15, 65 - reduce_size , 65 - reduce_size  )
						}else{
							scaleImgCss(dynamic_exp_btn_${i} ,( (equation_position. x + equation_position. width * position_exp_btn_list[i]. split(" ")[1] * 0.01) - imgX) / scl_x - hoverVal, ( ( (equation_position.y + equation_position.height ) -imgY) / scl_y) + 15 - hoverVal, 65 - reduce_size + 2 * hoverVal, 65 - reduce_size  + 2 * hoverVal)
						}
					}else if( position_exp_btn_list[i]. split(" ")[0] == "r"){
						if(hover_exp_btn_${i} == false){
							scaleImgCss( dynamic_exp_btn_${i} ,( (equation_position. x + equation_position. width  - imgX) / scl_x + 10), ( ( (equation_position.y + equation_position.height/2  ) -imgY) / scl_y-40) , 60 - reduce_size , 60 - reduce_size  )
						}else{
							scaleImgCss( dynamic_exp_btn_${i} ,( (equation_position. x + equation_position. width  - imgX) / scl_x + 10) - hoverVal, ( ( (equation_position.y + equation_position.height/2  ) -imgY) / scl_y-40 - hoverVal) , 60 - reduce_size + 2 * hoverVal, 60 - reduce_size + 2 * hoverVal )
						}
					}
				`)
				// console. log("Yup")
				}else{
					eval(`dynamic_exp_btn_${i}. hide()`)
				}
	}
	
	//Previous btn
	if(current_step > 1 ){
		if(animation_start == false && onChange == false){
			if(hoverPrev_btn == false){
				scaleImgCss(prev_step_div , 1000 , 1104 ,110 , 110)
			}else{
				scaleImgCss(prev_step_div , 1000 - hoverVal, 1104 - hoverVal, 110 + hoverVal*2 , 110 + hoverVal*2)
			}
		}else{
			if(animation_start == true){
				prev_step_div. hide()
			}
		}
	}else{
		prev_step_div. hide()
	}

	// mangage next btn
	if(current_step != 0 && show_next_btn == true && animation_completed == true){
		if(current_step == 1){
			if(halfChange == false){
				var equation_position = mathJaxClassElt[1].getBoundingClientRect()
			}else{
				var equation_position = mathJaxClassElt[1 + net_change].getBoundingClientRect()
			}
		}else if(current_step == 2){
			if(halfChange == false){
				var equation_position = mathJaxClassElt[2].getBoundingClientRect()
			}else{
				var equation_position = mathJaxClassElt[2 + net_change].getBoundingClientRect()
			}
		}else{
			if(halfChange == false){
				var equation_position = mathJaxClassElt[3].getBoundingClientRect()
			}else{
				var equation_position = mathJaxClassElt[3 + net_change].getBoundingClientRect()
			}
		}
		var extra_x = 0
		if(show_next_btn == true){
			extra_x = 110
		}
		// console. log(equation_position. x , equation_position. y , onChange)
		if(hoverNext_btn == false){
			scaleImgCss( next_step_div ,( (equation_position. x + equation_position. width  - imgX) / scl_x + 60 + extra_x), ( ( (equation_position.y + equation_position.height/2  ) -imgY) / scl_y-55) , 110 , 110)
		}else{
			scaleImgCss( next_step_div ,( (equation_position. x + equation_position. width  - imgX) / scl_x + 60 + extra_x - hoverVal), ( ( (equation_position.y + equation_position.height/2  ) -imgY) / scl_y-55-hoverVal) , 110 + 2 * hoverVal, 110 + 2 * hoverVal)
		}
	}

	if(show_next_btn == false && animation_start == false){
		if(current_step != 0){
			next_step_div. hide();
		}
	}

	// Apply law btn
	if(show_apply_btn == true  && animation_completed == true){
		if(current_step == 1){
			if(halfChange == false){
				var equation_position = mathJaxClassElt[1].getBoundingClientRect()
			}else{
				var equation_position = mathJaxClassElt[1 + net_change].getBoundingClientRect()
			}
		}else if(current_step == 2){
			if(halfChange == false){
				var equation_position = mathJaxClassElt[2].getBoundingClientRect()
			}else{
				var equation_position = mathJaxClassElt[2 + net_change].getBoundingClientRect()
			}
		}else{
			if(halfChange == false){
				var equation_position = mathJaxClassElt[3].getBoundingClientRect()
			}else{
				var equation_position = mathJaxClassElt[3 + net_change].getBoundingClientRect()
			}
		}
		if(clicked_apply_btn == true){
			// apply_law_btn. style("background-color" , "white")
			// apply_law_btn. style("border-style" , "solid")
			apply_law_btn. style("border-width" , 10 * scl_x + "px")
			// apply_law_btn. style("border-color" , "red")
		}
		if(hoverApply_btn == false){
			scaleImgCss( apply_law_btn ,( (equation_position. x + equation_position. width  - imgX) / scl_x + 10), ( ( (equation_position.y + equation_position.height/2  ) -imgY) / scl_y-40) , 60 , 60  )
		}else{
			scaleImgCss( apply_law_btn ,( (equation_position. x + equation_position. width  - imgX) / scl_x + 10) - hoverVal, ( ( (equation_position.y + equation_position.height/2  ) -imgY) / scl_y-40 - hoverVal) , 60 + 2 * hoverVal, 60 + 2 * hoverVal )
		}
	}else{
		apply_law_btn. hide();
	}	

	//Apply Box
	if(clicked_apply_btn == true){
		// apply_box. style("text-align" , "center");
		// apply_box. style("line-height" , "2.9")
		apply_box_content. style("font-size" , 50 * scl_x+"px")
		apply_box_content. style("font-family" , "RobotoRegular")
		apply_box_content. style("color" , "rgb(255 , 103 , 1)")
		apply_box_content. html(apply_law_text)
		apply_box_content. show();
		scaleImgCssWithoutShow(apply_box , 1221 , 952 , 878 , 250)
		apply_line. style("color" , "rgb(153 , 153 , 153)")
		scaleImgCssWithoutShow(apply_line , 963 ,950 , 1508 , 4)
	}else{
		apply_box. hide();
		apply_line. hide();
	}		
}

function reset_page(){
	equation_index = "equation_" + getNumberOfEquationInTab();
	force_to_animation_stop = false
	current_step = 0
	show_next_btn = true;
	show_apply_btn = false;
	clicked_apply_btn = false;
	delete mathJaxClassElt;
	mathJaxClassElt = [];
	delete mathJaxClassP5Elt;
	mathJaxClassP5Elt = [];
	clicked_apply_btn = mathJaxClassElt. length
	mathInteractiveContentCopy=  bestCopyEver(mathInteractiveContent)

	for(var i = 0 ; i < position_exp_btn_list. length ; i++){
		eval(`dynamic_exp_btn_${i}. remove()`)
	}
	// console. log(("\\("+ `= ` + (`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step+1}. previousStepString() `) + "\\)"))
	solution_equation_1_div_content_copy. html("")
	position_exp_btn_list = []
	expand_btn_remove = 0;
	intractiveText()
}

function reset_key(){
	eval(`page${eval(Tab)}. style("background-image" , "url('img/key.png')")`)
}

function createExpandBtn( cb = function (){} ){
	
	// for( var i in eval(`mathInteractiveContentCopy. page${Tab}. ${equation_index}. solution. step${current_step}`))
	position_exp_btn_list = eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. position_btn`)
	type_step = eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. type`)
	console. log(position_exp_btn_list)
	for(var i in position_exp_btn_list){
		// if(position_exp_btn_list[parseInt(i)]. split(" ")[0] != "r"){
			if(type_step != "law"){
			
				var clr = eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}.  group_${parseInt(i)+1}. color`)
				
				//Create Div
				eval(`
					console. log(1)
					dynamic_exp_btn_${i} = createDiv("")
					dynamic_exp_btn_${i}. id("dynamic_exp_btn_${i}");
					dynamic_exp_btn_${i}. style("background-color" , clr+"")
					
					dynamic_exp_btn_${i}. style("border-radius" , "50%")
				`)
			}else{

				apply_law_btn = createDiv("")
				apply_law_btn. id("apply_law_btn");
				apply_law_btn. style("background-color" , "red")
				apply_law_btn. style("border-radius" , "50%")
				apply_law_btn. style("pointer-events" , "auto")
				show_apply_btn = true
			}
		
	}

	//Apply mouse Events
	for(var j in position_exp_btn_list){
		let temp_i = parseInt(j);
		if(type_step != "law"){
		// if(position_exp_btn_list[parseInt(j)]. split(" ")[0] != "r"){
			let Extra_one = 0
			console. log(j)
			eval(`
				if(mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. group_${temp_i+1}. flag == "extend"){
					click_exp_btn_${temp_i} = true;
					var clr= eval("mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}.  group_${parseInt(temp_i)+1}. color")
					dynamic_exp_btn_${temp_i}. style("background-color" , "white")
					dynamic_exp_btn_${temp_i}. style("border-style" , "solid")
					dynamic_exp_btn_${temp_i}. style("border-color" , clr)
					console. log("YUp bro")
				}else{
					click_exp_btn_${temp_i} = false;
				}
					hover_exp_btn_${temp_i} = false
				dynamic_exp_btn_${temp_i}. mouseOver(function (){
					console. log(temp_i)
					dynamic_exp_btn_${temp_i}.style("cursor" , "pointer")
				})

				dynamic_exp_btn_${temp_i}. mouseClicked(function (){
					if(onChange == false){	
						// dynamic_exp_btn_${temp_i}. remove();
						expand_btn_remove++
						var clr= eval("mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}.  group_${parseInt(temp_i)+1}. color")
						if(click_exp_btn_${temp_i} == false){
							one_time_click_flag[ ${temp_i} ] = true 
							mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. group_${temp_i+1}. flag = "extend";
							// click_exp_btn_${temp_i} = true;
							hover_exp_btn_${temp_i} = false
							setTimeout( function (){
								hover_exp_btn_${temp_i} = true;
								click_exp_btn_${temp_i} = true

								dynamic_exp_btn_${temp_i}. style("background-color" , "white")
								dynamic_exp_btn_${temp_i}. style("border-style" , "solid")
								dynamic_exp_btn_${temp_i}. style("border-color" , clr)
							}, 200)
						}else{
							mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. group_${temp_i+1}. flag = "wraped";
							click_exp_btn_${temp_i} = false;
							dynamic_exp_btn_${temp_i}. style("border-color" , "none")
							dynamic_exp_btn_${temp_i}. style("background-color", clr)
						}

						/*if(expand_btn_remove != position_exp_btn_list. length){
							intractiveText();
						}else{
							intractiveText( function (){
								console. log(mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. last_step)
								if(mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. last_step == false){
									show_next_btn = true
								}
							})
						}*/
						console. log("NEXT " , chekNextVisible())
						if(chekNextVisible() == false){
							intractiveText();
						}else{
							intractiveText( function (){
								console. log(mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. last_step)
								if(mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. last_step == false){
									show_next_btn = true
								}
							})
						}
					}
				})
				dynamic_exp_btn_${temp_i}. mouseOver(function (){
					hover_exp_btn_${temp_i} = true
					dynamic_exp_btn_${temp_i}. style("cursor" , "pointer")
				})
				dynamic_exp_btn_${temp_i}. mouseOut(function (){
					hover_exp_btn_${temp_i} = false
				})
			`)
		}else{
			if(eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. group_${temp_i+1}. flag`) == "applyed"){
				show_next_btn = true
				clicked_apply_btn = true
				apply_law_btn. style("background-color" , "white")
				apply_law_btn. style("border-style" , "solid")
				apply_law_btn. style("border-width" , 10 * scl_x + "px")
				apply_law_btn. style("border-color" , "red")
				apply_line. show();
				apply_box. show();
			}
			apply_law_btn. mouseOver(function (){
					console. log(temp_i)
					hoverApply_btn = true
					apply_law_btn.style("cursor" , "pointer")
			})

			apply_law_btn. mouseOut(function (){
					hoverApply_btn = false
			})

			apply_law_btn. mouseClicked( function (){
					// apply_law_btn. style("pointer-events" , "none")
				if(onChange == false){
					apply_law_text = eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. law_text`)
					// NotApply
					if(eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. group_${temp_i+1}. flag `)== "NotApply"){
						eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. group_${temp_i+1}. flag = "applyed"; `);
						intractiveText( function (){
									show_next_btn = true
									clicked_apply_btn = true
									apply_law_btn. style("background-color" , "white")
									apply_law_btn. style("border-style" , "solid")
									apply_law_btn. style("border-width" , 10 * scl_x + "px")
									apply_law_btn. style("border-color" , "red")
									apply_box. show()
									apply_line. show();
						})
					}else{
						eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. group_${temp_i+1}. flag = "NotApply"; `);
						intractiveText( function (){
									show_next_btn = true
									clicked_apply_btn = true
									apply_law_btn. style("background-color" , "red")
									apply_law_btn. style("border-style" , "solid")
									apply_law_btn. style("border-width" , 10 * scl_x + "px")
									apply_law_btn. style("border-color" , "transparent")
									apply_line. hide();
									apply_box. hide();			
						})
					}
				}
			})	
		}

		console. log(eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. type`) ,"Type")

	}
	if(eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. type`) == "None"){
		show_next_btn = true
	}

	// animation_start = true

	console. log("Length of exp_btn" , position_exp_btn_list. length)
	delete one_time_click_flag;
	one_time_click_flag = []
	// if()
	for(var i = 0; i < position_exp_btn_list. length; i++){
		if(eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. group_${i+1}. flag `)== "NotApply" || eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. group_${i+1}. flag `)== "wraped")
		{
			one_time_click_flag[i] = false;
		}else{
			one_time_click_flag[i] = true;
		}
	}
	show_next_btn = chekNextVisible()
	cb();	
}


function bestCopyEver(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = bestCopyEver(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = bestCopyEver(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

function copyJSON(src){
	return ( JSON. parse(JSON. stringify(src)) )
}


function chekNextVisible(){
	
	for(var j=0; j<one_time_click_flag. length; j++){
		if(one_time_click_flag[j] == false){
			return false
		}
	}
	if(eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. last_step`) == true){
		return false
	}
	return true;
}


function previousBtn(){
	click_prev = true
	if(current_step != 1){
		apply_law_btn. hide()
		force_to_animation_stop = true
		// mathInteractiveContentCopy=  bestCopyEver(mathInteractiveContent)
		for(var i = 0; i < position_exp_btn_list. length; i++){
			if(eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. type`) != "law"){
				eval(`dynamic_exp_btn_${i}. remove()`)
			}
		}
		console. log("exp btn removed")
		// console. log(position_exp_btn_list)
		current_step --;
		if(current_step > 1){
			// animation_start = true;
			// starting_time = new Date() . getTime();
			click_next = true
		}

		show_next_btn = false
		show_apply_btn = false;
		clicked_apply_btn = false
		intractiveText(createExpandBtn(function (){
			console. log(position_exp_btn_list)
			for(var i = 0; i < position_exp_btn_list. length; i++){
				one_time_click_flag[i] = true;
			}
			show_next_btn = true
		}));
		solution_equation_3_div. hide();
		solution_equation_3_div_copy. hide();
		console. log(position_exp_btn_list)
		expand_btn_remove = 0
	}	
}


function TraverseToBoxElt(){
	node = getAllIds(mathJaxClassElt[2])
	console. log(node)
	for(var j = 0 ; j< node. length; j++){	
		node_elt = document.getElementById(node[j]);
		console. log(node_elt. style["border"])
		if(node_elt. style["border"] == "1.5001pt solid grey"){
			console. log("We Just got it")
			return node_elt. id;
		}
	}
}

function getAllIds(node){
	var ids = [];
	var start_search_index = 0
	while(node. innerHTML. indexOf(`id="` , start_search_index) != -1){
	// for(var i=0; i<10;i++){
		var mySubString = node. innerHTML.substring(
			node. innerHTML. indexOf(`id="` , start_search_index) + 4, 
			node. innerHTML .indexOf(`"`,node. innerHTML. indexOf(`id="`, start_search_index) + 4)
		)
		start_search_index = node. innerHTML .indexOf(`"`,node. innerHTML. indexOf(`id="`, start_search_index) + 5)
		ids. push(mySubString)
		console. log(mySubString , start_search_index)
	}
	return ids
}

function getNumberOfEquationInTab(){
	var temp_count = 0
	eval(`
			for(var eq in mathInteractiveContent. page_${Tab}){
				temp_count++;
			}
		`)
	return ceil( random() * temp_count);
	// console. log(temp_count)
}

function sclPageBtn(){
	/*-------------Pagination btn-----------------*/

		page. style('font-size' , 55 * scl_x+'px'); 
		page. style('line-height' , 2.1);
		page. style('text-align' , 'center');

		scaleImgCss(page , pageX , pageY , pageW , pageH);
		if(hoverLeft == false){
			scaleImgCss(pageLeft , pageLeftX , pageLeftY , pageLeftW , pageLeftH , contain = false ,child = true)
		}else{
			scaleImgCss(pageLeft , pageLeftX - 2 * 5 , pageLeftY - 5, pageLeftW + 2 * 5, pageLeftH + 2 * 5, contain = false ,child = true)
		}
		scaleImgCss(page1 , page1X , page1Y , page1W , page1H , contain = false ,child = true);
		scaleImgCss(page2 , page2X , page2Y , page2W , page2H , contain = false ,child = true);
		scaleImgCss(page3 , page3X , page3Y , page3W , page3H , contain = false ,child = true);
		for(var j = 1; j <= count_pg; j++){
			eval(`
					scaleImgCss(page${j} , page${j}X , page${j}Y , page${j}W , page${j}H , contain = false ,child = true);
					page${j}. html("<span style = 'font-family:LatoBold; color:#444444; pointer-events: none'>${j}</span>");
				`)
		}
		if(hoverRight == false){
			scaleImgCss(pageRight , pageRightX , pageRightY , pageRightW , pageRightH , contain = false ,child = true);
		}else{
			scaleImgCss(pageRight , pageRightX , pageRightY - 5, pageRightW + 2 * 5 , pageRightH + 2 * 5 , contain = false ,child = true);
		}
		pageRight. html("<span style = 'font-family:LatoBold; color:#444444; pointer-events: none'>></span>");
		pageLeft. html("<span style = 'font-family:LatoBold; color:#444444; pointer-events: none'><</span>");

}