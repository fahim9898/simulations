var count_step = 0
step_enable_flag = []
function setExe_div(){
	pageX = 650
	show_expand_btn = false;
	count_step = numberOfStep()
	//#Create Step btn
	step_btn = createDiv("");
	createStepBtn()

	for(var j=0; j < position_exp_btn_list. length; j++){
		eval(`dynamic_exp_btn_${j}. hide()`)
	}
	next_step_div. hide();
	question_div_content. html("")
	solution_equation_1_div_content. html("")
	solution_equation_2_div_content. html("")
	solution_equation_3_div_content. html("")
	solution_equation_1_div_content_copy. html("")
	solution_equation_2_div_content_copy. html("")
	solution_equation_3_div_content_copy. html("")
	exercise_question_div = createDiv("")
	exercise_question_div_content = createDiv("")
	exercise_equation_1_div = createDiv("")				 					// exercised 2nd last equation
	exercise_equation_1_div_content = createDiv("")
	exercise_equation_2_div = createDiv("")				 					// exercised last equation 
	exercise_equation_2_div_content = createDiv("")
	exercise_equation_3_div = createDiv("")				 					// exercised last equation 
	exercise_equation_3_div_content = createDiv("")

	// #Copy of orignal Div
	exercise_equation_1_div_copy = createDiv("")
	exercise_equation_1_div_content_copy = createDiv("")
	exercise_equation_1_div_content_copy. parent(exercise_equation_1_div_copy)
	exercise_equation_2_div_copy = createDiv("")
	exercise_equation_2_div_content_copy = createDiv("")
	exercise_equation_2_div_content_copy. parent(exercise_equation_2_div_copy)
	exercise_equation_3_div_copy = createDiv("")
	exercise_equation_3_div_content_copy = createDiv("")
	exercise_equation_3_div_content_copy. parent(exercise_equation_3_div_copy)

	//set parent
	exercise_question_div_content. parent(exercise_question_div)								//Question could place	
	exercise_equation_1_div_content. parent(exercise_equation_1_div)
	exercise_equation_2_div_content. parent(exercise_equation_2_div)
	exercise_equation_3_div_content. parent(exercise_equation_3_div)

	exercise_question_div. style("position" , "absolute")
	exercise_equation_1_div. style("position" , "absolute")
	exercise_equation_2_div. style("position" , "absolute")
	exercise_equation_3_div. style("position" , "absolute")

	exercise_question_div_content. style("position" , "absolute")
	exercise_question_div_content. style("text-align" , "center");
	exercise_question_div_content. style("top" , "50%");
	exercise_question_div_content. style("left" , "50%");
	exercise_question_div_content. style("transform" , "translate(-50% , -50%)")
	exercise_question_div_content. style("font-size" , font_size+"px")

	exercise_equation_1_div_content. style("position" , "absolute")
	exercise_equation_1_div_content. style("text-align" , "center");
	exercise_equation_1_div_content. style("top" , "50%");
	exercise_equation_1_div_content. style("transform" , "translate(0% , -50%)")
	exercise_equation_1_div_content. style("font-size" , font_size+"px")

	exercise_equation_2_div_content. style("position" , "absolute")
	exercise_equation_2_div_content. style("text-align" , "center");
	exercise_equation_2_div_content. style("top" , "50%");
	exercise_equation_2_div_content. style("transform" , "translate(0% , -50%)")
	exercise_equation_2_div_content. style("font-size" , font_size+"px")

	exercise_equation_3_div_content. style("position" , "absolute")
	exercise_equation_3_div_content. style("text-align" , "center");
	exercise_equation_3_div_content. style("top" , "50%");
	exercise_equation_3_div_content. style("transform" , "translate(0% , -50%)")
	exercise_equation_3_div_content. style("font-size" , font_size+"px")


	// Copy div set properties

	exercise_equation_1_div_copy. style("position" , "absolute")
	exercise_equation_2_div_copy. style("position" , "absolute")
	exercise_equation_3_div_copy. style("position" , "absolute")

	exercise_equation_1_div_content_copy. style("position" , "absolute")
	exercise_equation_1_div_content_copy. style("text-align" , "center");
	exercise_equation_1_div_content_copy. style("top" , "50%");
	exercise_equation_1_div_content_copy. style("transform" , "translate(0% , -50%)")
	exercise_equation_1_div_content_copy. style("font-size" , font_size+"px")

	exercise_equation_2_div_content_copy. style("position" , "absolute")
	exercise_equation_2_div_content_copy. style("text-align" , "center");
	exercise_equation_2_div_content_copy. style("top" , "50%");
	exercise_equation_2_div_content_copy. style("transform" , "translate(0% , -50%)")
	exercise_equation_2_div_content_copy. style("font-size" , font_size+"px")

	exercise_equation_3_div_content_copy. style("position" , "absolute")
	exercise_equation_3_div_content_copy. style("text-align" , "center");
	exercise_equation_3_div_content_copy. style("top" , "50%");
	exercise_equation_3_div_content_copy. style("transform" , "translate(0% , -50%)")
	exercise_equation_3_div_content_copy. style("font-size" , font_size+"px")

	intractiveText_exercise();

}

function intractiveText_exercise(cb = () => {}  , cb2 = () => {}){

	onChange = true
	halfChange = true

	if(hoverReset_btn == false){
		scaleImgCss(reset_btn , 2062 , 1253 , 315 , 106);
	}else{
		scaleImgCss(reset_btn , 2062 - 15.5, 1253 - 5.3  , 315 + 31.5, 106 + 10.6);
	}

	console. log(1/scl_x)
	if(current_step == 0){  //Only Question could load
		
		exercise_question_div_content. style("font-size" , font_size * 2.26059 * scl_x + "px")
		exercise_question_div_content. html("\\("+ `Simplify: \\,\\,\\,` + eval(`mathInteractiveContentCopy. page_1. ${equation_index}. question`) + "\\)")
		
		exercise_question_div_content. hide();
		
	}else if(current_step == 1){

			//copy current step
			exercise_question_div_content. style("font-size" , font_size * 2.26059 * scl_x + "px")
			exercise_question_div_content. html("\\("+ `Simplify: \\,\\,\\,` + eval(`mathInteractiveContentCopy. page_1. ${equation_index}. question`) + "\\)")
			exercise_question_div_content. hide();
		
		// if(onChange == false){
			exercise_equation_1_div_content. style("font-size" , font_size * 2.26059 * scl_x + "px")
			// exercise_equation_1_div_content. html(" \\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. currentStepString() `) + "\\)")
			exercise_equation_1_div_content. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. exercise. step_${current_step}. eq`) + "\\)")
			
			exercise_equation_1_div_content_copy. show();
			exercise_equation_1_div_content. hide();
		// }

	}else if(current_step == 2){
		console. log("start")

		exercise_equation_1_div_content. style("font-size" , font_size * 2.26059 * scl_x + "px")
		exercise_equation_1_div_content. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. currentStepString() `) + "\\)")
		exercise_equation_1_div_content. hide();
		exercise_equation_1_div_content_copy. show();
		
		exercise_equation_2_div_content. style("font-size" , font_size * 2.26059 * scl_x + "px")
		exercise_equation_2_div_content. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. exercise. step_${current_step}. eq `) + "\\)")
		exercise_equation_2_div_content. hide();
		exercise_equation_2_div_content_copy. show();
		
	}else if(current_step == 3){
		console. log("start")

		exercise_equation_1_div_content. style("font-size" , font_size * 2.26059 * scl_x + "px")
		exercise_equation_1_div_content. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step-1}. previousStepString() `) + "\\)")
		exercise_equation_1_div_content. hide();
		exercise_equation_1_div_content_copy. show();

		exercise_equation_2_div_content. style("font-size" , font_size * 2.26059 * scl_x + "px")
		exercise_equation_2_div_content. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. previousStepString() `) + "\\)")
		exercise_equation_2_div_content. hide();
		exercise_equation_2_div_content_copy. show();
		
		exercise_equation_3_div_content. style("font-size" , font_size * 2.26059 * scl_x + "px")
		exercise_equation_3_div_content. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. exercise. step_${current_step}. eq `) + "\\)")
		exercise_equation_3_div_content. hide();
		exercise_equation_3_div_content_copy. show();
	}else{
		console. log("start")

		exercise_equation_1_div_content. style("font-size" , font_size * 2.26059 * scl_x + "px")
		exercise_equation_1_div_content. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step-1}. previousStepString() `) + "\\)")
		exercise_equation_1_div_content. hide();
		exercise_equation_1_div_content_copy. show();
		console. log(current_step , eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. previousStepString() `))
		exercise_equation_2_div_content. style("font-size" , font_size * 2.26059 * scl_x + "px")
		exercise_equation_2_div_content. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. previousStepString() `) + "\\)")
		exercise_equation_2_div_content. hide();
		exercise_equation_2_div_content_copy. show();
		
		exercise_equation_3_div_content. style("font-size" , font_size * 2.26059 * scl_x + "px")
		exercise_equation_3_div_content. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. exercise. step_${current_step}. eq `) + "\\)")
		exercise_equation_3_div_content. hide();
		exercise_equation_3_div_content_copy. show();
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
		exercise_question_div_content. show();
		// exercise_equation_1_div_content. html(/exercise_equation_1_div_content_copy. html())
		if(current_step >=1){
			if(current_step == 1){
				exercise_equation_1_div_content. show()
				exercise_equation_1_div_content_copy. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step+1}. currentStepString() `) + "\\)")
				
			}else if(current_step == 2){
				exercise_equation_1_div_content. show()
				exercise_equation_2_div_content. show()
				exercise_equation_1_div_content_copy. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. previousStepString() `) + "\\)")
				exercise_equation_2_div_content_copy. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step + 1}. currentStepString() `) + "\\)")
			}else{
				exercise_equation_1_div_content. show()
				exercise_equation_2_div_content. show()
				exercise_equation_3_div_content. show()
				exercise_equation_1_div_content_copy. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step-1}. previousStepString() `) + "\\)")
				exercise_equation_2_div_content_copy. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. previousStepString() `) + "\\)")
				exercise_equation_3_div_content_copy. html("\\("+ `= ` + eval(`mathInteractiveContentCopy. page_${ Tab }. ${equation_index}. solution. step_${current_step}. currentStepString() `) + "\\)")
			}
			exercise_equation_1_div_content_copy. hide();
			exercise_equation_2_div_content_copy. hide();
			exercise_equation_3_div_content_copy. hide();

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

function drawExercise(){
	sclStepBtn()
	sclPageBtn()
	if(force_to_animation_stop == false){
		if(current_step == 0){
			if(onChange == true){
				if(hoverNext_btn == false){
					scaleImgCss(next_step_div , 1775 , 605 , 110 , 110)
				}else{
					scaleImgCss(next_step_div , 1775 - hoverVal , 605 - hoverVal, 110 + 2 * hoverVal, 110 + 2 * hoverVal)
				}
			}
			scaleImgCss(exercise_question_div , 700 , 240 , 1200 , 850)
			exercise_equation_1_div. hide();
			exercise_equation_2_div. hide();
			exercise_equation_3_div. hide();
			exercise_equation_1_div_copy. hide();
			exercise_equation_2_div_copy. hide();
			exercise_equation_3_div_copy. hide();
			seprate_line. hide();
			seprate_line2. hide();
		}else if(current_step == 1){
			scaleImgCss(exercise_question_div , -150 , 240 , 1200 , 850)
			scaleImgCss(seprate_line , 963 , 245 , 6 ,975);
			scaleImgCss(seprate_line2 , 2472 , 245 , 6 ,975);
			scaleImgCss(exercise_equation_1_div , 1010 , 240 , 1200 , 850)
			scaleImgCss(exercise_equation_1_div_copy , 1010 , 240 , 1200 , 850)
			
			exercise_equation_2_div. hide();
			exercise_equation_3_div. hide();
			exercise_equation_2_div_copy. hide();
			exercise_equation_3_div_copy. hide();
		}else if(current_step == 2){
			scaleImgCss(exercise_question_div , -150 , 240 , 1200 , 850)
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
					scaleImgCss(exercise_equation_1_div , 1010 , current_Y , 1200 , 850)
					scaleImgCss(exercise_equation_1_div_copy , 1010 , current_Y , 1200 , 850)
					
					if(animation_start == false){
						show_exercise_btn = true;
						scaleImgCss(exercise_equation_2_div , 1010 , 290 , 1200 , 850)
						scaleImgCss(exercise_equation_2_div_copy , 1010 , 290 , 1200 , 850)
					}else{
						show_exercise_btn = false
						exercise_equation_2_div. hide();
						exercise_equation_2_div_copy. hide();
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
					exercise_equation_3_div. hide();
					exercise_equation_3_div_copy. hide();
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
					scaleImgCss(exercise_equation_1_div , 1010 , current_Y , 1200 , 850)
					scaleImgCss(exercise_equation_2_div , 1010 , current_Y2 , 1200 , 850)
					scaleImgCss(exercise_equation_1_div_copy , 1010 , current_Y , 1200 , 850)
					scaleImgCss(exercise_equation_2_div_copy , 1010 , current_Y2 , 1200 , 850)
					
					if(animation_start == false){
						scaleImgCss(exercise_equation_3_div , 1010 , 430 , 1200 , 850)
						scaleImgCss(exercise_equation_3_div_copy , 1010 , 430 , 1200 , 850)
					}else{
						exercise_equation_3_div. hide();
						exercise_equation_3_div_copy. hide()
					}
				}
				scaleImgCssWithoutShow(exercise_equation_1_div , 1010 , current_Y , 1200 , 850)
				scaleImgCssWithoutShow(exercise_equation_2_div , 1010 , current_Y2 , 1200 , 850)
				scaleImgCssWithoutShow(exercise_equation_1_div_copy , 1010 , current_Y , 1200 , 850)
				scaleImgCssWithoutShow(exercise_equation_2_div_copy , 1010 , current_Y2 , 1200 , 850)
				scaleImgCssWithoutShow(exercise_equation_3_div , 1010 , 430 , 1200 , 850)
				scaleImgCssWithoutShow(exercise_equation_3_div_copy , 1010 , 430 , 1200 , 850)
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
					scaleImgCssWithoutShow(exercise_equation_1_div , 1010 , Start_Y , 1200 , 850)
					scaleImgCssWithoutShow(exercise_equation_2_div , 1010 , Start_Y2 , 1200 , 850)
					scaleImgCssWithoutShow(exercise_equation_1_div_copy , 1010 , Start_Y , 1200 , 850)
					scaleImgCssWithoutShow(exercise_equation_2_div_copy , 1010 , Start_Y2 , 1200 , 850)
					scaleImgCssWithoutShow(exercise_equation_3_div , 1010 , 430 , 1200 , 850)
					scaleImgCssWithoutShow(exercise_equation_3_div_copy , 1010 , 430 , 1200 , 850)
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
			scaleImgCss(exercise_equation_1_div , 1010 , -60 , 1200 , 850)
			scaleImgCss(exercise_equation_2_div , 1010 , 180 , 1200 , 850)
			scaleImgCss(exercise_equation_3_div , 1010 , 430 , 1200 , 850)
			scaleImgCss(exercise_equation_1_div_copy , 1010 , -60 , 1200 , 850)
			scaleImgCss(exercise_equation_2_div_copy , 1010 , 180 , 1200 , 850)
			scaleImgCss(exercise_equation_3_div_copy , 1010 , 430 , 1200 , 850)
		}else if(current_step == 2){

			scaleImgCss(exercise_equation_1_div , 1010 , -60 , 1200 , 850)
			scaleImgCss(exercise_equation_1_div_copy , 1010 , -60 , 1200 , 850)
			scaleImgCss(exercise_equation_2_div , 1010 , 290 , 1200 , 850)
			scaleImgCss(exercise_equation_2_div_copy , 1010 , 290 , 1200 , 850)
			exercise_equation_3_div. hide()
			exercise_equation_3_div_copy. hide();
		}else if(current_step == 1){
			scaleImgCss(exercise_equation_1_div , 1010 , 240 , 1200 , 850)
			scaleImgCss(exercise_equation_1_div_copy , 1010 , 240 , 1200 , 850)
			exercise_equation_2_div. hide()
			exercise_equation_2_div_copy. hide();
			exercise_equation_3_div. hide()
			exercise_equation_3_div_copy. hide();
		}
	}
}

function gotoNextStep(){
	click_next = true
	force_to_animation_stop = false;
	current_step++;
	if(current_step > 1){
		animation_completed = false
	}
	intractiveText_exercise();
	exercise_equation_3_div. hide();
	exercise_equation_3_div_copy. hide();
}

function numberOfStep(){
	var temp_count=0;
	eval(`
			for(var eq in mathInteractiveContent. page_${Tab}. ${equation_index}. exercise){
				temp_count++;
			}
		`)
	return temp_count
}

function createStepBtn(){
	
	for(let j=0; j< count_step; j++){
		step_enable_flag[j] = false;
		eval(`
				dynamic_step_btn_${j} = createDiv("")
				dynamic_step_btn_${j}. parent(step_btn)
				dynamic_step_btn_${j}. id("dynamic_step_btn_"+ j)
				dynamic_step_btn_${j}. style("border-radius" , "50%")
				dynamic_step_btn_${j}. style("background-color" , "white")
				dynamic_step_btn_${j}. style("border-style" , "solid")
				dynamic_step_btn_${j}. style("border-color" , "rgb(200 , 200 , 200)")
				dynamic_step_btn_${j}. style("pointer-events" , "none")
				dynamic_step_btn_${j}. style("z-index" , "5")

				dynamic_step_btn_${j}. style("cursor" , "pointer")

				dynamic_step_btn_${j}. mouseClicked( function(){
					console. log("which step" + j)
					if(current_step -1 != j){
						
						force_to_animation_stop = true
					
						current_step = j + 1;
						
						clicked_apply_btn = false
						intractiveText_exercise()
						exercise_equation_3_div. hide();
						exercise_equation_3_div_copy. hide();
						// console. log(position_exp_btn_list)
						// expand_btn_remove = 0
						console. log("Change the loaction")
					}
				})
			`)
	}
}

function sclStepBtn(){
	for(var j=0; j< count_step ; j++){
		eval(`
				dynamic_step_btn_${j}. style("border-width" , 5 * scl_x+ "px")
				scaleImgCss(dynamic_step_btn_${j} ,  j * 130, 0 , 37 , 37 ,  contain = false ,child = true)
			`)
	}
	if(animation_completed == true){
		step_enable_flag[current_step-1] = true
		// var k=0		
		for( var k=0; k < count_step ; k++){
			eval(`dynamic_step_btn_${k}. style("background-color" , "white")`)	
		}
		eval(`
				dynamic_step_btn_${current_step-1}. style("background-color" , "rgb(102 , 204, 255)")
				dynamic_step_btn_${current_step-1}. style("border-color" , "black")
				dynamic_step_btn_${current_step-1}. style("pointer-events" , "auto")	
			`)
	}
	scaleImgCss(step_btn  , 1292 , 1150 , 10 , 10)
	step_btn. show();
}