/******************************************************************************

	Hierarchy:
	----------
	page_n
		equation_n
			alpha_1 ( single character string )
			alpha_2 ( single character string )
			alpha_3 ( single character string )
			defaultMode ( "solution" or "exercise" )
			solutionEnabled ( boolean )
			exerciseEnabled ( boolean )
	    	question ( string )
	    	exercise
	    		step_n ( input boxes embedded in string )
	    	solution
	    		step_n
		        	type ( "expand" , "law" , "none" )
		        	panels ( a combination of "t" , "b" & "r" )
		        	groups ( affects only if type == "expand" )
		          		group_n
		            		color ( string, can be any html color string, best if hex format is used ( #rrggbb ) )
		            		original ( string )
		            		expanded ( string )
		            		panel ( either of "t" , "b" or "r", determines which panel is to be used to position the handle )
		            		left ( number denoting margin left in percentage to be given to handle to position it in the panel )
		            		top ( number denoting margin top in percentage to be given to handle to position it in the panel )
		            		right ( number denoting margin right in percentage to be given to handle to position it in the panel )
		            		bottom ( number denoting margin bottom in percentage to be given to handle to position it in the panel )
		        	law ( affects only if type == "law" )
		        		color ( string, can be any html color string, best if hex format is used ( #rrggbb ) )
		        	 	law ( string )
		        	 	panel ( either of "t" , "b" or "r", determines which panel is to be used to position the handle )
		          		left ( number denoting margin left in percentage to be given to handle to position it in the panel )
		          		top ( number denoting margin top in percentage to be given to handle to position it in the panel )
		          		right ( number denoting margin right in percentage to be given to handle to position it in the panel )
		          		bottom ( number denoting margin bottom in percentage to be given to handle to position it in the panel )
		          	step ( groups embedded in string as \\group_1 )

	Comments:
	---------
		> No arrays have been used. Wherever multiple elements of same type are needed to be grouped, elementType_n key has been used.
		> type_n keys are indexed from 1 & not 0.
		> solutionEnabled & exerciseEnabled can't both be false.
		> If defaultMode is solution, then solutionEnabled can't be false. Same applies for exercise.
		> A panel contains the colored handles in interactive solutions.
		> If exercise or solution are enabled, there must be at least one step for them. Otherwise, use a blank object.
		> 3 panels are available for all steps: top ("t") , bottom ("b") & right ("r").
		> You can choose for each step, which panels to show & also for each group, which panel to use to place it's handler.
		> If there is only 1 handle in a panel, it is centered considering the entire width of the step represents the same expandable group.
		> If the string provided for alpha_x keys has more than 1 characters, only the first character will be considered after trimming the string.

	Math String Rules:
	------------------
		> Enclose the string in `` ( backticks ) & not "" ( quotes ).
		> \ should always be used as \\ unless actually using an escape character.
		> Use a defined group as \\group_n.
		> Use \\, to force space character.
		> Use \\cfrac instead of \\frac to force fractions in exponents or nested fractions to be in normal text style.
		> Use \\left( & \\right) to let the parenthesis cover the entire content.
		> Enclose everything ( exponents, numerators, denominators, etc. ) in {} to be safe.
		> Use \\textstyle{normal-sized content} & \\scriptstyle{small-sized content} to style sizes of the content.
		> Use \\color{#rrggbb}{coloured content} to color content. Color can also be any other valid html color format but usage of #rrggbb format is highly recommended.
		> Place input box as \\input{"width":20,"length":2,"key":"-2","style":"text"}
			- width is in pixels & should be a number
			- length denotes maximum number of charcters allowed & should be an integer. If it is not, it will be converted into one. If conversion fails, default value of 2 will be considered.
			- key is the correct answer for the input
			- style denotes whether the input box is place along with text having style "text" or "script". Defaults to "text".

******************************************************************************/

mathInteractiveContent =
{
	"page_1" :
	{
		"equation_1" :
		{
			"alpha_1" : "x" ,
			"alpha_2" : "y" ,
			"alpha_3" : "" ,
			"defaultMode" : "solution" ,
			"exerciseEnabled" : true	 ,
			"solutionEnabled" : true ,
			"question" :
			`
				\\cfrac
				{
					45 ^ { x - 3 }
					\\scdot
					3
					\\scdot
					75 ^ { 4 - x }
				}
				{
					25 ^ { -x }
					\\scdot
					15 ^ { x + 2 }
				}
			` ,
			"exercise" :
			{
				"step_1":{
					"position_box": [1.5001 , 1.5002 , 1.5003 , 1.5004 , 1.5005 , 1.5006],
					"eq": `
						\\cfrac
						{		
							( 5 \\scdot \\bbox[1px, border:1.5001pt solid grey]{&#8199;&#8202;} ^ { \\bbox[1px, border:1.5002pt solid grey]{&#8199;&#8202;} } ) ^{x-3}
							\\scdot
							3
							\\scdot
							( 3 \\scdot \\bbox[1px, border:1.5003pt solid grey]{&#8199;&#8202;} ^ { \\bbox[1px, border:1.5004pt solid grey]{&#8199;&#8202;} } ) ^{4-x}
						}
						{
							(5 ^ {\\bbox[1px, border:1.5005pt solid grey]{&#8199;&#8202;}} ) ^ { -x }
							\\scdot
							( 3 \\scdot \\bbox[1px, border:1.5006pt solid grey]{&#8199;&#8202;}) ^ { x + 2 }
						}
					`
				},
				"step_2":{
					"position_box": [1.5001 , 1.5002 , 1.5003 , 1.5004 , 1.5005 , 1.5006],
					"eq": `
						\\cfrac
						{		
							5 ^ {x- \\bbox[1px, border:1.5001pt solid grey]{&#8199;&#8202;}}
							\\scdot
							3^{2x-6}
							\\scdot
							3^{1}
							\\scdot
							3 ^ {\\bbox[1px, border:1.5002pt solid grey]{&#8199;&#8202;} - x}		
							\\scdot
							\\bbox[1px, border:1.5001pt solid grey]{&#8199;&#8202;} ^ {8-2x}
						}
						{
							5 ^ {\\bbox[1px, border:1.5001pt solid grey]{&#8199;&#8202;}x}	
							\\scdot
							3 ^ {x+2}
							\\scdot
							\\bbox[1px, border:1.5001pt solid grey]{&#8199;&#8202;} ^ {x+2}
						}
					`
				},
				"step_3":{
					"position_box": [1.5001 , 1.5002 , 1.5003 , 1.5004 , 1.5005 , 1.5006],
					"eq": `
						5 ^ {x-\\bbox[1px, border:1.5001pt solid grey]{&#8199;&#8202;}+8-2x+\\bbox[1px, border:1.5001pt solid grey]{&#8199;&#8202;}x-x-2 }
						\\scdot
						3 ^{2x- \\bbox[1px, border:1.5001pt solid grey]{&#8199;&#8202;}+1+4-\\bbox[1px, border:1.5001pt solid grey]{&#8199;&#8202;}-x-2}
					`
				},
				"step_4":{
					"position_box": [1.5001 , 1.5002 , 1.5003 , 1.5004 , 1.5005 , 1.5006],
					"eq": `
						5 ^ {\\bbox[1px, border:1.5001pt solid grey]{&#8199;&#8202;}}
						\\scdot
						3 ^ {-\\bbox[1px, border:1.5001pt solid grey]{&#8199;&#8202;}}
					`
				}
			} ,
			"solution" :
			{
				"step_1" :
				{	
					"type" : "expand",
					"last_step": false,
					"position_btn" : ["t 20" , "t 75" , "b 30" , "b 60"],
					"group_1" : 
					{
						"color" : "#FF6701", 
						"flag" : "wraped" ,
						"orignal_eq" : "45 ^ {x - 3}",
						"expanded_eq": "\\color{#FF6701}{ \\left( 5 \\scdot 3 ^ 2 \\right)  ^ {x - 3}}"

					} ,

					"group_2" : 
					{	
						"color" : "#349acd",
						"flag" : "wraped" ,
						"orignal_eq" : "75 ^ {4 - x}",
						"expanded_eq": "\\color{#349acd}{ \\left( 3 \\scdot 5 ^ 2 \\right)  ^ {4 - x} }"

					} ,


					"group_3" : 
					{	
						"color" : "#679a67",
						"flag" : "wraped" ,
						"orignal_eq" : "25 ^ {-x}",
						"expanded_eq": "\\color{#679a67}{ \\left( 5 ^ 2 \\right)  ^ {-x} }"

						
					} ,


					"group_4" : 
					{
						"color" : "#e19a01",
						"flag" : "wraped" ,
						"orignal_eq" : "15 ^ {x + 2}",
						"expanded_eq": "\\color{#e19a01}{ \\left(3\\scdot 5\\right)  ^ {x + 2} }"

						
					} ,

					"currentStepString" : function (){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						var temp_2 = (this. group_2.flag == "wraped")?this. group_2. orignal_eq : this. group_2. expanded_eq;
						var temp_3 = (this. group_3.flag == "wraped")?this. group_3. orignal_eq : this. group_3. expanded_eq;
						var temp_4 = (this. group_4.flag == "wraped")?this. group_4. orignal_eq : this. group_4. expanded_eq;
						console. log(temp_1 , temp_2 , temp_3 , temp_4	)
						return(`\\cfrac{`
								+ temp_1
								+ `\\scdot 3 \\scdot `
								+ temp_2
							+`}
							{`
								+ temp_3
								+ `\\scdot `
								+ temp_4 
							+`}`)
					}


					//question group : that group replace with solution group
					//group : that store solution
					//expand_flag : determine that flag is Expanded or Not 
				} ,
				"step_2" :
				{
					"type" : "expand",
					"last_step": false,
					"position_btn" : ["t 20" , "t 50" , "t 75" , "b 30" , "b 60"],
					"group_1" : 
					{
						"color" : "#FF6701", 
						"flag" : "wraped" ,
						"orignal_eq" : "\\left( 5 \\scdot 3 ^ 2 \\right)  ^ {x - 3}",
						"expanded_eq": "\\color{#FF6701}{ 5 ^ {x - 3} \\scdot 3 ^ {2x - 6} }"

					} ,

					"group_2" : 
					{
						"color" : "#9a67cd", 
						"flag" : "wraped" ,
						"orignal_eq" : "3",
						"expanded_eq": "\\color{#9a67cd}{ 3 ^ {1}}"

					} ,

					"group_3" : 
					{	
						"color" : "#349acd",
						"flag" : "wraped" ,
						"orignal_eq" : "\\left( 3 \\scdot 5 ^ 2 \\right)  ^ {4 - x}",
						"expanded_eq": "\\color{#349acd}{ 3 ^ {4 - x} \\scdot 5 ^ {8 - 2x} }"

					} ,


					"group_4" : 
					{	
						"color" : "#679a67",
						"flag" : "wraped" ,
						"orignal_eq" : "\\left(  5 ^ {2} \\right)  ^ {-x}",
						"expanded_eq": "\\color{#679a67}{ 5 ^ {-2x} }"

						
					} ,


					"group_5" : 
					{
						"color" : "#e19a01",
						"flag" : "wraped" ,
						"orignal_eq" : "\\left( 3 \\scdot 5 \\right)  ^ {x + 2}",
						"expanded_eq": "\\color{#e19a01}{ 3 ^ {x + 2} \\scdot 5 ^ {x + 2}}"

						
					} ,

					"currentStepString" : function (){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						var temp_2 = (this. group_2.flag == "wraped")?this. group_2. orignal_eq : this. group_2. expanded_eq;
						var temp_3 = (this. group_3.flag == "wraped")?this. group_3. orignal_eq : this. group_3. expanded_eq;
						var temp_4 = (this. group_4.flag == "wraped")?this. group_4. orignal_eq : this. group_4. expanded_eq;
						var temp_5 = (this. group_5.flag == "wraped")?this. group_5. orignal_eq : this. group_5. expanded_eq;
						return(`\\cfrac{`
								+ temp_1
								+ `\\scdot` 
								+ temp_2 
								+`\\scdot `
								+ temp_3
							+`}
							{`
								+ temp_4
								+ `\\scdot `
								+ temp_5 
							+`}`)
					} ,

					"previousStepString" : function (){
						var temp_1 = this. group_1. orignal_eq;
						var temp_2 = this. group_2. orignal_eq;
						var temp_3 = this. group_3. orignal_eq;
						var temp_4 = this. group_4. orignal_eq;
						var temp_5 = this. group_5. orignal_eq;
						console. log(temp_1 , temp_2 , temp_3 , temp_4	)
						return(`\\cfrac{`
								+ temp_1
								+ `\\scdot` 
								+ temp_2 
								+`\\scdot `
								+ temp_3
							+`}
							{`
								+ temp_4
								+ `\\scdot `
								+ temp_5 
							+`}`)
					}
					
				} , 
				
				"step_3":
				{
					"type" : "law",
					"last_step": false,
					"law_text":"Applying multiplication law and division law of exponents",
					"position_btn" : ["r 100"],
					"group_1" : 
					{
						// #ff679a
						"flag" : "NotApply",
						"orignal_eq" : `\\cfrac{5 ^ {x - 3} \\scdot 3 ^ {2x - 6} \\scdot 3 ^ {1} \\scdot 3 ^ {4 - x} \\scdot 5 ^ {8 - 2x}}
											   { 5 ^ {-2x} \\scdot 3 ^ {x + 2} \\scdot 5 ^ {x + 2}}`,
						"expanded_eq" : `5 ^ {\\color{#0167cd}{x - 3 + 8 - 2x + 2x - x -2}} \\scdot 3 ^ {\\color{#ff679a}{2x - 6 + 1 + 4 - x + x -2} }`
					},

					"currentStepString" : function(){
						var temp_1 = (this. group_1.flag == "NotApply")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						return temp_1
					},

					"previousStepString" : function(){
						var temp_1 = this. group_1. orignal_eq;
						return temp_1
					}
				},
				"step_4":
				{
					"type" : "law",
					"position_btn" : ["r 100"],
					"law_text":"Applying division law of exponents",
					"last_step": false,
					"group_1" : 
					{
						// #ff679a
						"flag" : "NotApply",
						"last_step": false,
						"orignal_eq" : `5 ^{3} \\scdot 3 ^ {-3}`,
						"expanded_eq" : `\\cfrac {5 ^ {\\color{#0167cd}{3} } } { 3 ^\\color{#ff679a}{3} }`
					},

					"currentStepString" : function(){
						var temp_1 = (this. group_1.flag == "NotApply")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						return temp_1
					},

					"previousStepString" : function(){
						var temp_1 = this. group_1. orignal_eq;
						return temp_1
					}
				},
				"step_5":
				{
					"type" : "Ans",
					"last_step": true,
					// "last_step": 
					"position_btn" : [],
					"group_1" : 
					{
						// #ff679a
						"flag" : "Ans",
						"orignal_eq" : `\\cfrac {5 ^ {3} } { 3 ^ {3} }`,
						"expanded_eq" : `\\cfrac {125}{9} `
					},

					"currentStepString" : function(){
						var temp_1 = (this. group_1.flag == "NotApply")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						return temp_1
					},

					"previousStepString" : function(){
						var temp_1 = this. group_1. orignal_eq;
						return temp_1
					}
				}
			}
		},
		"equation_2" :
		{
			"alpha_1" : "x" ,
			"alpha_2" : "y" ,
			"alpha_3" : "" ,
			"defaultMode" : "solution" ,
			"exerciseEnabled" : false ,
			"solutionEnabled" : true ,
			"question" :
			`
				\\cfrac
				{
					\\sqrt[3]{a} \\times \\sqrt{m^{3}}
				}
				{
					a^{ -\\frac{2}{3}}m^{\\frac{1}{2}}
				}
			` ,
			"exercise" :
			{
			} ,
			"solution" :
			{
				"step_1" : 
				{
					"type" : "expand",
					"last_step" : false,
					"position_btn" : ["t 25" , "t 75"],
					"group_1" : 
					{
						"color" : "#FF6701", 
						"flag" : "wraped" ,
						"orignal_eq" : "\\sqrt[3]{a}",
						"expanded_eq": "\\color{#FF6701}{ a^{ \\frac{1}{3} } }"

					} ,

					"group_2" : 
					{	
						"color" : "#349acd",
						"flag" : "wraped" ,
						"orignal_eq" : "\\sqrt{m^{3}}",
						"expanded_eq": "\\color{#349acd}{ m ^ {\\frac{1}{3}} }"

					},

					"currentStepString" : function (){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						var temp_2 = (this. group_2.flag == "wraped")?this. group_2. orignal_eq : this. group_2. expanded_eq;
						return(`\\cfrac{`
								+ temp_1
								+ ` \\times `
								+ temp_2
							+`}
							{`
								+`a^{ -\\frac{2}{3} } m^{\\frac{1}{2} }`
							+`}`)
					}
				},

				"step_2" : 
				{
					"type" : "expand",
					"position_btn" : ["t 25" , "t 75"],
					"last_step" : false,
					"group_1" : 
					{
						"color" : "#0167cd", 
						"flag" : "wraped" ,
						"orignal_eq" : `\\cfrac{`
											+ `a^{ \\frac{1}{3}}`
											+ `m ^{\\frac{3}{2}}`
										+`}
										{`
											+`a^{ -\\frac{2}{3} } m^{\\frac{1}{2} }`
										+`}`,
						"expanded_eq": `\\cfrac{`
											+ `\\color{#0167cd}{ a ^{\\frac{1}{3} + \\frac{2}{3} } } `
											+ `\\color{}{ m ^{\\frac{3}{2}} }`
										+`}
										{`
											+` \\color{}{  m^{\\frac{1}{2}} }`
										+`}`

					} ,
					"group_2" : 
					{
						"color" : "#ff679a", 
						"flag" : "wraped" ,
						"orignal_eq" : `\\cfrac{`
											+ `a^{ \\frac{1}{3}}`
											+ `m ^{\\frac{3}{2}}`
										+`}
										{`
											+`a^{ -\\frac{2}{3} } m^{\\frac{1}{2} }`
										+`}`,
						"expanded_eq": `\\cfrac{`
											+ `\\color{}{ a ^{\\frac{1}{3} } } `
											+ `\\color{#ff679a}{ m ^{\\frac{3}{2} - \\frac{1}{2} } }`
										+`}
										{`
											+` \\color{}{  a^{-\\frac{2}{3}} }`
										+`}`

					} ,

					"group_3" : 
					{
						"color" : "#FF6701", 
						"flag" : "wraped" ,
						"orignal_eq" : `\\cfrac{`
											+ `a^{ \\frac{1}{3}}`
											+ `m ^{\\frac{3}{2}}`
										+`}
										{`
											+`a^{ -\\frac{2}{3} } m^{\\frac{1}{2} }`
										+`}`,
						"expanded_eq": 	 `\\color{#0167cd}{ a ^{\\frac{1}{3} + \\frac{2}{3} } }  `
											+ `\\color{#ff679a}{ m ^{\\frac{3}{2} - \\frac{1}{2} } }`
					} ,

					"currentStepString" : function (){
						if(this. group_1. flag != "wraped" && this. group_2. flag != "wraped" ){
							var temp_3 = (this. group_3.flag != "wraped")?this. group_3. orignal_eq : this. group_3. expanded_eq;	
							return(temp_3)
						}else if(this. group_1. flag != "wraped"){
							var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
							return(temp_1)
						}else{
							var temp_2 = (this. group_2.flag == "wraped")?this. group_2. orignal_eq : this. group_2. expanded_eq;	
							return(temp_2)
						}
						
					}, 
					"previousStepString" : function (){
						var temp_1 = this. group_1. orignal_eq ;
						return(temp_1)
					}
				},
				"step_3" :
				{
					"type" : "expand",
					"position_btn" : ["t 25" , "t 75"],
					"last_step" : true,
					"group_1" : 
					{ 
						"flag" : "wraped" ,
						"color" : "#542503",
						"orignal_eq" : `a^{\\frac{1}{3} + \\frac{2}{3}}`,
						"expanded_eq": `\\color{#542503}{a}`
					} ,
					"group_2" : 
					{ 
						"flag" : "wraped" ,
						"color": "#545251",
						"orignal_eq" : `m^{\\frac{3}{2}-\\frac{1}{2}}`,
						"expanded_eq": `\\color{#545251}{m}`
					} ,

					"currentStepString" : function (){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						var temp_2 = (this. group_2.flag == "wraped")?this. group_2. orignal_eq : this. group_2. expanded_eq;
						return(temp_1 + temp_2)
					}, 
					"previousStepString" : function (){
						var temp_1 = this. group_1. orignal_eq ;
						var temp_2 = this. group_2. orignal_eq ;
						return(temp_1 + temp_2)
					}
				}
			}
		},
		"equation_3" :
		{
			"alpha_1" : "x" ,
			"alpha_2" : "y" ,
			"alpha_3" : "" ,
			"defaultMode" : "solution" ,
			"exerciseEnabled" : false ,
			"solutionEnabled" : true ,
			"question" :
			`
				\\cfrac{
					6^{x+1} \\times 9^{x-1}}
					{2^{x} \\times 27^{x} 
				}
				
			` ,
			"exercise" :
			{
			},
			"solution" :
			{
				"step_1":
				{
					"type" : "expand",
					"position_btn" : ["t 25" , "t 75" ,"b 70"],
					"last_step":false,
					"group_1":
					{
						"color":"#45b5b3",
						"flag" : "wraped",
						"orignal_eq": "6^{x+1}",
						"expanded_eq": `\\color{#45b5b3}{2^{x+1}3^{x+1}}`
					},
					"group_2":
					{
						"color":"#25821d",
						"flag" : "wraped",
						"orignal_eq": "9^{x-1}",
						"expanded_eq": `\\color{#25821d}{3^{2x-2}}`
					},
					"group_3":
					{
						"color":"#d9d90d",
						"flag" : "wraped",
						"orignal_eq": "27^{x}",
						"expanded_eq": `\\color{#d9d90d}{3^{3x}}`
					},

					"currentStepString" : function()
					{
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						var temp_2 = (this. group_2.flag == "wraped")?this. group_2. orignal_eq : this. group_2. expanded_eq;
						var temp_3 = (this. group_3.flag == "wraped")?this. group_3. orignal_eq : this. group_3. expanded_eq;
						return(`\\cfrac{`
								+ temp_1
								+ temp_2
							+`}
							{`
								+ `2^{x}`
								+ temp_3 
							+`}`)
					}
				},

				"step_2":
				{
					"type" : "expand",
					"last_step": false,
					"position_btn" : ["t 15" , "t 60"],
					"group_1":
					{	
						"color":"#f060e9",
						"flag" : "wraped",
						"orignal_eq" : `\\cfrac 
									{ 2 ^ {x+1} 3 ^{x+1} 3^{2x-2}}
									{2 ^ {x} 3 ^{3x}}`,
						"expanded_eq" : `\\cfrac 
									{ \\color{#f060e9}{2 ^ {x+1-x}} \\color{}{ 3 ^{x+1} 3^{2x-2}} }
									{ \\color{}{ 3 ^{3x}} } `,
						
					},
					"group_2":
					{	
						"color":"#828785",
						"flag" : "wraped",
						"orignal_eq" : `\\cfrac 
									{ 2 ^ {x+1} 3 ^{x+1} 3^{2x-2}}
									{2 ^ {x} 3 ^{3x}}`,
						"expanded_eq" : `\\cfrac 
									{ \\color{}{2 ^ {x+1}} \\color{#828785}{ 3 ^{x+1+2x-2-3x} } }
									{ \\color{}{ 2 ^ {x} } }`,
						
					},
					"group_3":
					{
						"color":"#ffff4d",
						"flag" : "wraped",
						"orignal_eq" : `\\cfrac 
									{ 2 ^ {x+1} 3 ^{x+1} 3^{2x-2}}
									{2 ^ {x} 3 ^{3x}}`,
						"expanded_eq" : ` \\color{#f060e9}{2 ^ {x+1-x}} \\color{#828785}{ 3 ^{x+1+2x-2-3x} } `,
						
					},
					"currentStepString": function (){
						if(this. group_1. flag != "wraped" && this. group_2. flag != "wraped" ){
							var temp_3 = (this. group_3.flag != "wraped")?this. group_3. orignal_eq : this. group_3. expanded_eq;	
							return(temp_3)
						}else if(this. group_1. flag != "wraped"){
							var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
							return(temp_1)
						}else{
							var temp_2 = (this. group_2.flag == "wraped")?this. group_2. orignal_eq : this. group_2. expanded_eq;	
							return(temp_2)
						}
					},
					"previousStepString": function(){
						return (this. group_1. orignal_eq )
					}
				},

				"step_3":
				{
					"type" : "expand",
					"position_btn" : ["t 20" , "t 60"],
					"last_step": false,
					"group_1" : 
					{	
						"color":"#0e0b9e",
						"flag" : "wraped",
						"orignal_eq": `2 ^ {x+1-x}`,
						"expanded_eq" : `\\color{#0e0b9e}{2} \\scdot`
					},
					"group_2" : 
					{	
						"color":"#803a14",
						"flag" : "wraped",
						"orignal_eq": `3 ^ {x+1+2x-2-3x}`,
						"expanded_eq" : `\\color{#803a14}{3^{-1}}`
					},
					"currentStepString": function (){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						var temp_2 = (this. group_2.flag == "wraped")?this. group_2. orignal_eq : this. group_2. expanded_eq;
						return (temp_1 + temp_2)
					},
					"previousStepString": function(){
						return (this. group_1. orignal_eq + this. group_2. orignal_eq)
					}
				},

				"step_4":
				{
					"type" : "expand",
					"position_btn" : ["t 50"],
					"last_step" : true,
					"group_1" : 
					{	
						"color":"#0e0b9e",
						"flag" : "wraped",
						"orignal_eq": `2 \\scdot 3 ^{-1}`,
						"expanded_eq" : `\\color{#13400b}{ \\cfrac{2}{3} }`
					},
					"currentStepString": function (){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						return (temp_1)
					},
					"previousStepString": function(){
						return (this. group_1. orignal_eq)
					}
				}
			}
		},
		"equation_4" :
		{
			"alpha_1" : "x" ,
			"alpha_2" : "y" ,
			"alpha_3" : "" ,
			"defaultMode" : "solution" ,
			"exerciseEnabled" : false ,
			"solutionEnabled" : true ,
			"question" :
			`
				\\cfrac{
					2 ^ {n+2} - 2 ^ {n+1}
				}
				{
					2^{x}
				}
				
			` ,
			"exercise" :
			{
			},
			"solution" :
			{
				"step_1":
				{
					"type" : "expand",
					"position_btn" : ["t 50"],
					"last_step":false,
					"group_1":
					{
						"color": "#cf0c0c",
						"flag": "wraped",
						"orignal_eq": `2 ^ {n+2} - 2 ^ {n+1}`,
						"expanded_eq": `\\color{#cf0c0c}{ 2^{n} \\left( 2^{2} - 2 ^{2} \\right) }`
					},

					"currentStepString": function (){
						 var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						 return (`
						 	\\cfrac{${temp_1}}{2^{x}}
						 `)
					}
				},

				"step_2" : 
				{
					"type" : "law" ,
					"law_text" : "Applying division law of exponents",
					"last_step": false,
					"position_btn" : ["r 100"],
					"group_1" : 
					{
						
						"flag" : "NotApply",
						"orignal_eq" : `\\cfrac{
											2^{n} \\left( 2^{2} - 2 ^{1} \\right)
										}
										{
											2^{x}
										}`,
						"expanded_eq" : `\\color{#1d8062}{ 2^{n-x} }\\left(4-2 \\right)`
					},

					"currentStepString" : function(){
						var temp_1 = (this. group_1.flag == "NotApply")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						return temp_1
					},

					"previousStepString" : function(){
						var temp_1 = this. group_1. orignal_eq;
						return temp_1
					}
				},
				"step_3" : 
				{
					"type" : "expand" ,
					"last_step": false,
					"position_btn" : ["t 60"],
					"group_1" : 
					{
						"color" : "#cf0c0c",
						"flag" : "wraped",
						"orignal_eq" : `2^{n-x} \\left(4-2 \\right)`,
						"expanded_eq" : `2^{n-x} \\scdot \\color{#cf0c0c} { 2^{1} }`
					},

					"currentStepString" : function(){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						return temp_1
					},

					"previousStepString" : function(){
						var temp_1 = this. group_1. orignal_eq;
						return temp_1
					}
				},
				"step_4" : 
				{
					"type" : "expand" ,
					"last_step": true,
					"position_btn" : ["t 50"],
					"group_1" : 
					{
						"color" : "#6e1680",
						"flag" : "wraped",
						"orignal_eq" : `2^{n-x} \\scdot 2^{1} `,
						"expanded_eq" : ` \\color{#6e1680} { 2^{n-x+1} }`
					},

					"currentStepString" : function(){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						return temp_1
					},

					"previousStepString" : function(){
						var temp_1 = this. group_1. orignal_eq;
						return temp_1
					}
				}
			}
		},
		"equation_5" :
		{
			"alpha_1" : "x" ,
			"alpha_2" : "y" ,
			"alpha_3" : "" ,
			"defaultMode" : "solution" ,
			"exerciseEnabled" : false ,
			"solutionEnabled" : true ,
			"question" :
			`
				\\cfrac{
					3 ^ {x} - 3 ^ {x-1}
				}
				{
					3^{x+2}
				}
				
			` ,
			"exercise" :
			{
			},
			"solution" :
			{
				"step_1":
				{
					"type" : "expand",
					"position_btn" : ["t 50" , "b 50"],
					"last_step": false,
					"group_1":
					{
						"flag": "wraped",
						"color" : "#33a331",
						"orignal_eq": `3 ^ {x} - 3 ^ {x-1}`,
						"expanded_eq": `\\color{#33a331}{ 3^{x} \\left( 1-3^{-1} \\right) }`
					},
					"group_2":
					{
						"flag": "wraped",
						"color":"#b522ba",
						"orignal_eq": `3 ^ {x+2} `,
						"expanded_eq": `\\color{#b522ba}{ 3^{x} 3^{2} }`
					},
					"currentStepString" : function(){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						var temp_2 = (this. group_2.flag == "wraped")?this. group_2. orignal_eq : this. group_2. expanded_eq;
						return (`
							\\cfrac{ ${temp_1} }{ ${temp_2}}
							`)
					}
				},
				"step_2":
				{
					"type" : "expand",
					"position_btn" : ["t 55" , "b 50"],
					"last_step": false,
					"group_1":
					{
						"flag": "wraped",
						"color" : "#33a331",
						"orignal_eq": `\\left( 1 - 3^{-1} \\right)`,
						"expanded_eq": `\\color{#33a331} { \\cfrac{2}{3} }`
					},
					"group_2":
					{
						"flag": "wraped",
						"color":"#b522ba",
						"orignal_eq": `3 ^ {2} `,
						"expanded_eq": `\\color{#b522ba}{9}`
					},
					"currentStepString" : function(){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						var temp_2 = (this. group_2.flag == "wraped")?this. group_2. orignal_eq : this. group_2. expanded_eq;
						return (`
							\\cfrac{ ${temp_1} }{ ${temp_2}}
							`)
					},
					"previousStepString" : function(){
						var temp_1 = this. group_1. orignal_eq ;
						var temp_2 = this. group_2. orignal_eq ;
						return (`
							\\cfrac{ 3 ^ {x}${temp_1} }{ 3^{x} ${temp_2}}
							`)
					}
				},
				"step_3":
				{
					"type" : "expand",
					"position_btn" : ["r 100"],
					"last_step": true,
					"group_1":
					{
						"flag": "wraped",
						"color" : "#5a1d5c",
						"orignal_eq": `\\cfrac{ \\cfrac{2}{3} }{9}`,
						"expanded_eq": `\\color{#5a1d5c} { \\cfrac{2}{27} }`
					},
					
					"currentStepString" : function(){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						return (temp_1)
					},
					"previousStepString" : function(){
						var temp_1 = this. group_1. orignal_eq ;
						return (temp_1)
					}
				},
			}
		}
	} ,
	"page_2" :
	{
		"equation_1" :
		{
			"alpha_1" : "x" ,
			"alpha_2" : "y" ,
			"alpha_3" : "" ,
			"defaultMode" : "solution" ,
			"exerciseEnabled" : false ,
			"solutionEnabled" : true ,
			"question" :
			`
				\\cfrac
				{
					45 ^ { x - 3 }
					\\scdot
					3
					\\scdot
					75 ^ { 4 - x }
				}
				{
					25 ^ { -x }
					\\scdot
					15 ^ { x + 2 }
				}
			` ,
			"exercise" :
			{
			} ,
			"solution" :
			{
				"step_1" :
				{	
					"type" : "expand",
					"last_step": false,
					"position_btn" : ["t 20" , "t 75" , "b 30" , "b 60"],
					"group_1" : 
					{
						"color" : "#FF6701", 
						"flag" : "wraped" ,
						"orignal_eq" : "45 ^ {x - 3}",
						"expanded_eq": "\\color{#FF6701}{ \\left( 5 \\scdot 3 ^ 2 \\right)  ^ {x - 3}}"

					} ,

					"group_2" : 
					{	
						"color" : "#349acd",
						"flag" : "wraped" ,
						"orignal_eq" : "75 ^ {4 - x}",
						"expanded_eq": "\\color{#349acd}{ \\left( 3 \\scdot 5 ^ 2 \\right)  ^ {4 - x} }"

					} ,


					"group_3" : 
					{	
						"color" : "#679a67",
						"flag" : "wraped" ,
						"orignal_eq" : "25 ^ {-x}",
						"expanded_eq": "\\color{#679a67}{ \\left( 5 ^ 2 \\right)  ^ {-x} }"

						
					} ,


					"group_4" : 
					{
						"color" : "#e19a01",
						"flag" : "wraped" ,
						"orignal_eq" : "15 ^ {x + 2}",
						"expanded_eq": "\\color{#e19a01}{ \\left(3\\scdot 5\\right)  ^ {x + 2} }"

						
					} ,

					"currentStepString" : function (){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						var temp_2 = (this. group_2.flag == "wraped")?this. group_2. orignal_eq : this. group_2. expanded_eq;
						var temp_3 = (this. group_3.flag == "wraped")?this. group_3. orignal_eq : this. group_3. expanded_eq;
						var temp_4 = (this. group_4.flag == "wraped")?this. group_4. orignal_eq : this. group_4. expanded_eq;
						console. log(temp_1 , temp_2 , temp_3 , temp_4	)
						return(`\\cfrac{`
								+ temp_1
								+ `\\scdot 3 \\scdot `
								+ temp_2
							+`}
							{`
								+ temp_3
								+ `\\scdot `
								+ temp_4 
							+`}`)
					}


					//question group : that group replace with solution group
					//group : that store solution
					//expand_flag : determine that flag is Expanded or Not 
				} ,
				"step_2" :
				{
					"type" : "expand",
					"last_step": false,
					"position_btn" : ["t 20" , "t 50" , "t 75" , "b 30" , "b 60"],
					"group_1" : 
					{
						"color" : "#FF6701", 
						"flag" : "wraped" ,
						"orignal_eq" : "\\left( 5 \\scdot 3 ^ 2 \\right)  ^ {x - 3}",
						"expanded_eq": "\\color{#FF6701}{ 5 ^ {x - 3} \\scdot 3 ^ {2x - 6} }"

					} ,

					"group_2" : 
					{
						"color" : "#9a67cd", 
						"flag" : "wraped" ,
						"orignal_eq" : "3",
						"expanded_eq": "\\color{#9a67cd}{ 3 ^ {1}}"

					} ,

					"group_3" : 
					{	
						"color" : "#349acd",
						"flag" : "wraped" ,
						"orignal_eq" : "\\left( 3 \\scdot 5 ^ 2 \\right)  ^ {4 - x}",
						"expanded_eq": "\\color{#349acd}{ 3 ^ {4 - x} \\scdot 5 ^ {8 - 2x} }"

					} ,


					"group_4" : 
					{	
						"color" : "#679a67",
						"flag" : "wraped" ,
						"orignal_eq" : "\\left(  5 ^ {2} \\right)  ^ {-x}",
						"expanded_eq": "\\color{#679a67}{ 5 ^ {-2x} }"

						
					} ,


					"group_5" : 
					{
						"color" : "#e19a01",
						"flag" : "wraped" ,
						"orignal_eq" : "\\left( 3 \\scdot 5 \\right)  ^ {x + 2}",
						"expanded_eq": "\\color{#e19a01}{ 3 ^ {x + 2} \\scdot 5 ^ {x + 2}}"

						
					} ,

					"currentStepString" : function (){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						var temp_2 = (this. group_2.flag == "wraped")?this. group_2. orignal_eq : this. group_2. expanded_eq;
						var temp_3 = (this. group_3.flag == "wraped")?this. group_3. orignal_eq : this. group_3. expanded_eq;
						var temp_4 = (this. group_4.flag == "wraped")?this. group_4. orignal_eq : this. group_4. expanded_eq;
						var temp_5 = (this. group_5.flag == "wraped")?this. group_5. orignal_eq : this. group_5. expanded_eq;
						return(`\\cfrac{`
								+ temp_1
								+ `\\scdot` 
								+ temp_2 
								+`\\scdot `
								+ temp_3
							+`}
							{`
								+ temp_4
								+ `\\scdot `
								+ temp_5 
							+`}`)
					} ,

					"previousStepString" : function (){
						var temp_1 = this. group_1. orignal_eq;
						var temp_2 = this. group_2. orignal_eq;
						var temp_3 = this. group_3. orignal_eq;
						var temp_4 = this. group_4. orignal_eq;
						var temp_5 = this. group_5. orignal_eq;
						console. log(temp_1 , temp_2 , temp_3 , temp_4	)
						return(`\\cfrac{`
								+ temp_1
								+ `\\scdot` 
								+ temp_2 
								+`\\scdot `
								+ temp_3
							+`}
							{`
								+ temp_4
								+ `\\scdot `
								+ temp_5 
							+`}`)
					}
					
				} , 
				
				"step_3":
				{
					"type" : "law",
					"last_step": false,
					"law_text":"Applying multiplication law and division law of exponents",
					"position_btn" : ["r 100"],
					"group_1" : 
					{
						// #ff679a
						"flag" : "NotApply",
						"orignal_eq" : `\\cfrac{5 ^ {x - 3} \\scdot 3 ^ {2x - 6} \\scdot 3 ^ {1} \\scdot 3 ^ {4 - x} \\scdot 5 ^ {8 - 2x}}
											   { 5 ^ {-2x} \\scdot 3 ^ {x + 2} \\scdot 5 ^ {x + 2}}`,
						"expanded_eq" : `5 ^ {\\color{#0167cd}{x - 3 + 8 - 2x + 2x - x -2}} \\scdot 3 ^ {\\color{#ff679a}{2x - 6 + 1 + 4 - x + x -2} }`
					},

					"currentStepString" : function(){
						var temp_1 = (this. group_1.flag == "NotApply")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						return temp_1
					},

					"previousStepString" : function(){
						var temp_1 = this. group_1. orignal_eq;
						return temp_1
					}
				},
				"step_4":
				{
					"type" : "law",
					"position_btn" : ["r 100"],
					"law_text":"Applying division law of exponents",
					"last_step": false,
					"group_1" : 
					{
						// #ff679a
						"flag" : "NotApply",
						"last_step": false,
						"orignal_eq" : `5 ^{3} \\scdot 3 ^ {-3}`,
						"expanded_eq" : `\\cfrac {5 ^ {\\color{#0167cd}{3} } } { 3 ^\\color{#ff679a}{3} }`
					},

					"currentStepString" : function(){
						var temp_1 = (this. group_1.flag == "NotApply")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						return temp_1
					},

					"previousStepString" : function(){
						var temp_1 = this. group_1. orignal_eq;
						return temp_1
					}
				},
				"step_5":
				{
					"type" : "Ans",
					"last_step": true,
					// "last_step": 
					"position_btn" : [],
					"group_1" : 
					{
						// #ff679a
						"flag" : "Ans",
						"orignal_eq" : `\\cfrac {5 ^ {3} } { 3 ^ {3} }`,
						"expanded_eq" : `\\cfrac {125}{9} `
					},

					"currentStepString" : function(){
						var temp_1 = (this. group_1.flag == "NotApply")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						return temp_1
					},

					"previousStepString" : function(){
						var temp_1 = this. group_1. orignal_eq;
						return temp_1
					}
				}
			}
		}
	} ,
	"page_3" :
	{
		"equation_1" :
		{
			"alpha_1" : "x" ,
			"alpha_2" : "y" ,
			"alpha_3" : "" ,
			"defaultMode" : "solution" ,
			"exerciseEnabled" : false ,
			"solutionEnabled" : true ,
			"question" :
			`
				\\cfrac
				{
					\\sqrt[3]{a} \\times \\sqrt{m^{3}}
				}
				{
					a^{ -\\frac{2}{3}}m^{\\frac{1}{2}}
				}
			` ,
			"exercise" :
			{
			} ,
			"solution" :
			{
				"step_1" : 
				{
					"type" : "expand",
					"last_step" : false,
					"position_btn" : ["t 25" , "t 75"],
					"group_1" : 
					{
						"color" : "#FF6701", 
						"flag" : "wraped" ,
						"orignal_eq" : "\\sqrt[3]{a}",
						"expanded_eq": "\\color{#FF6701}{ a^{ \\frac{1}{3} } }"

					} ,

					"group_2" : 
					{	
						"color" : "#349acd",
						"flag" : "wraped" ,
						"orignal_eq" : "\\sqrt{m^{3}}",
						"expanded_eq": "\\color{#349acd}{ m ^ {\\frac{1}{3}} }"

					},

					"currentStepString" : function (){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						var temp_2 = (this. group_2.flag == "wraped")?this. group_2. orignal_eq : this. group_2. expanded_eq;
						return(`\\cfrac{`
								+ temp_1
								+ ` \\times `
								+ temp_2
							+`}
							{`
								+`a^{ -\\frac{2}{3} } m^{\\frac{1}{2} }`
							+`}`)
					}
				},

				"step_2" : 
				{
					"type" : "expand",
					"position_btn" : ["t 25" , "t 75"],
					"last_step" : false,
					"group_1" : 
					{
						"color" : "#0167cd", 
						"flag" : "wraped" ,
						"orignal_eq" : `\\cfrac{`
											+ `a^{ \\frac{1}{3}}`
											+ `m ^{\\frac{3}{2}}`
										+`}
										{`
											+`a^{ -\\frac{2}{3} } m^{\\frac{1}{2} }`
										+`}`,
						"expanded_eq": `\\cfrac{`
											+ `\\color{#0167cd}{ a ^{\\frac{1}{3} + \\frac{2}{3} } } `
											+ `\\color{}{ m ^{\\frac{3}{2}} }`
										+`}
										{`
											+` \\color{}{  m^{\\frac{1}{2}} }`
										+`}`

					} ,
					"group_2" : 
					{
						"color" : "#ff679a", 
						"flag" : "wraped" ,
						"orignal_eq" : `\\cfrac{`
											+ `a^{ \\frac{1}{3}}`
											+ `m ^{\\frac{3}{2}}`
										+`}
										{`
											+`a^{ -\\frac{2}{3} } m^{\\frac{1}{2} }`
										+`}`,
						"expanded_eq": `\\cfrac{`
											+ `\\color{}{ a ^{\\frac{1}{3} } } `
											+ `\\color{#ff679a}{ m ^{\\frac{3}{2} - \\frac{1}{2} } }`
										+`}
										{`
											+` \\color{}{  a^{-\\frac{2}{3}} }`
										+`}`

					} ,

					"group_3" : 
					{
						"color" : "#FF6701", 
						"flag" : "wraped" ,
						"orignal_eq" : `\\cfrac{`
											+ `a^{ \\frac{1}{3}}`
											+ `m ^{\\frac{3}{2}}`
										+`}
										{`
											+`a^{ -\\frac{2}{3} } m^{\\frac{1}{2} }`
										+`}`,
						"expanded_eq": 	 `\\color{#0167cd}{ a ^{\\frac{1}{3} + \\frac{2}{3} } }  `
											+ `\\color{#ff679a}{ m ^{\\frac{3}{2} - \\frac{1}{2} } }`
					} ,

					"currentStepString" : function (){
						if(this. group_1. flag != "wraped" && this. group_2. flag != "wraped" ){
							var temp_3 = (this. group_3.flag != "wraped")?this. group_3. orignal_eq : this. group_3. expanded_eq;	
							return(temp_3)
						}else if(this. group_1. flag != "wraped"){
							var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
							return(temp_1)
						}else{
							var temp_2 = (this. group_2.flag == "wraped")?this. group_2. orignal_eq : this. group_2. expanded_eq;	
							return(temp_2)
						}
						
					}, 
					"previousStepString" : function (){
						var temp_1 = this. group_1. orignal_eq ;
						return(temp_1)
					}
				},
				"step_3" :
				{
					"type" : "expand",
					"position_btn" : ["t 25" , "t 75"],
					"last_step" : true,
					"group_1" : 
					{ 
						"flag" : "wraped" ,
						"color" : "#542503",
						"orignal_eq" : `a^{\\frac{1}{3} + \\frac{2}{3}}`,
						"expanded_eq": `\\color{#542503}{a}`
					} ,
					"group_2" : 
					{ 
						"flag" : "wraped" ,
						"color": "#545251",
						"orignal_eq" : `m^{\\frac{3}{2}-\\frac{1}{2}}`,
						"expanded_eq": `\\color{#545251}{m}`
					} ,

					"currentStepString" : function (){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						var temp_2 = (this. group_2.flag == "wraped")?this. group_2. orignal_eq : this. group_2. expanded_eq;
						return(temp_1 + temp_2)
					}, 
					"previousStepString" : function (){
						var temp_1 = this. group_1. orignal_eq ;
						var temp_2 = this. group_2. orignal_eq ;
						return(temp_1 + temp_2)
					}
				}
			}
		}
	},
	"page_4" :
	{
		"equation_1" :
		{
			"alpha_1" : "x" ,
			"alpha_2" : "y" ,
			"alpha_3" : "" ,
			"defaultMode" : "solution" ,
			"exerciseEnabled" : false ,
			"solutionEnabled" : true ,
			"question" :
			`
				\\cfrac{
					6^{x+1} \\times 9^{x-1}}
					{2^{x} \\times 27^{x} 
				}
				
			` ,
			"exercise" :
			{
			},
			"solution" :
			{
				"step_1":
				{
					"type" : "expand",
					"position_btn" : ["t 25" , "t 75" ,"b 70"],
					"last_step":false,
					"group_1":
					{
						"color":"#45b5b3",
						"flag" : "wraped",
						"orignal_eq": "6^{x+1}",
						"expanded_eq": `\\color{#45b5b3}{2^{x+1}3^{x+1}}`
					},
					"group_2":
					{
						"color":"#25821d",
						"flag" : "wraped",
						"orignal_eq": "9^{x-1}",
						"expanded_eq": `\\color{#25821d}{3^{2x-2}}`
					},
					"group_3":
					{
						"color":"#d9d90d",
						"flag" : "wraped",
						"orignal_eq": "27^{x}",
						"expanded_eq": `\\color{#d9d90d}{3^{3x}}`
					},

					"currentStepString" : function()
					{
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						var temp_2 = (this. group_2.flag == "wraped")?this. group_2. orignal_eq : this. group_2. expanded_eq;
						var temp_3 = (this. group_3.flag == "wraped")?this. group_3. orignal_eq : this. group_3. expanded_eq;
						return(`\\cfrac{`
								+ temp_1
								+ temp_2
							+`}
							{`
								+ `2^{x}`
								+ temp_3 
							+`}`)
					}
				},

				"step_2":
				{
					"type" : "expand",
					"last_step": false,
					"position_btn" : ["t 15" , "t 60"],
					"group_1":
					{	
						"color":"#f060e9",
						"flag" : "wraped",
						"orignal_eq" : `\\cfrac 
									{ 2 ^ {x+1} 3 ^{x+1} 3^{2x-2}}
									{2 ^ {x} 3 ^{3x}}`,
						"expanded_eq" : `\\cfrac 
									{ \\color{#f060e9}{2 ^ {x+1-x}} \\color{}{ 3 ^{x+1} 3^{2x-2}} }
									{ \\color{}{ 3 ^{3x}} } `,
						
					},
					"group_2":
					{	
						"color":"#828785",
						"flag" : "wraped",
						"orignal_eq" : `\\cfrac 
									{ 2 ^ {x+1} 3 ^{x+1} 3^{2x-2}}
									{2 ^ {x} 3 ^{3x}}`,
						"expanded_eq" : `\\cfrac 
									{ \\color{}{2 ^ {x+1}} \\color{#828785}{ 3 ^{x+1+2x-2-3x} }
									{ \\color{}{ 2 ^ {x} }`,
						
					},
					"group_3":
					{
						"color":"#ffff4d",
						"flag" : "wraped",
						"orignal_eq" : `\\cfrac 
									{ 2 ^ {x+1} 3 ^{x+1} 3^{2x-2}}
									{2 ^ {x} 3 ^{3x}}`,
						"expanded_eq" : ` \\color{#f060e9}{2 ^ {x+1-x}} \\color{#828785}{ 3 ^{x+1+2x-2-3x} } `,
						
					},
					"currentStepString": function (){
						if(this. group_1. flag != "wraped" && this. group_2. flag != "wraped" ){
							var temp_3 = (this. group_3.flag != "wraped")?this. group_3. orignal_eq : this. group_3. expanded_eq;	
							return(temp_3)
						}else if(this. group_1. flag != "wraped"){
							var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
							return(temp_1)
						}else{
							var temp_2 = (this. group_2.flag == "wraped")?this. group_2. orignal_eq : this. group_2. expanded_eq;	
							return(temp_2)
						}
					},
					"previousStepString": function(){
						return (this. group_1. orignal_eq )
					}
				},

				"step_3":
				{
					"type" : "expand",
					"position_btn" : ["t 20" , "t 60"],
					"last_step": false,
					"group_1" : 
					{	
						"color":"#0e0b9e",
						"flag" : "wraped",
						"orignal_eq": `2 ^ {x+1-x}`,
						"expanded_eq" : `\\color{#0e0b9e}{2} \\scdot`
					},
					"group_2" : 
					{	
						"color":"#803a14",
						"flag" : "wraped",
						"orignal_eq": `3 ^ {x+1+2x-2-3x}`,
						"expanded_eq" : `\\color{#803a14}{3^{-1}}`
					},
					"currentStepString": function (){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						var temp_2 = (this. group_2.flag == "wraped")?this. group_2. orignal_eq : this. group_2. expanded_eq;
						return (temp_1 + temp_2)
					},
					"previousStepString": function(){
						return (this. group_1. orignal_eq + this. group_2. orignal_eq)
					}
				},

				"step_4":
				{
					"type" : "expand",
					"position_btn" : ["t 50"],
					"last_step" : true,
					"group_1" : 
					{	
						"color":"#0e0b9e",
						"flag" : "wraped",
						"orignal_eq": `2 \\scdot 3 ^{-1}`,
						"expanded_eq" : `\\color{#13400b}{ \\cfrac{2}{3} }`
					},
					"currentStepString": function (){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						return (temp_1)
					},
					"previousStepString": function(){
						return (this. group_1. orignal_eq)
					}
				}
			}
		}
	},
	"page_5" :
	{
		"equation_1" :
		{
			"alpha_1" : "x" ,
			"alpha_2" : "y" ,
			"alpha_3" : "" ,
			"defaultMode" : "solution" ,
			"exerciseEnabled" : false ,
			"solutionEnabled" : true ,
			"question" :
			`
				\\cfrac{
					2 ^ {n+2} - 2 ^ {n+1}
				}
				{
					2^{x}
				}
				
			` ,
			"exercise" :
			{
			},
			"solution" :
			{
				"step_1":
				{
					"type" : "expand",
					"position_btn" : ["t 50"],
					"last_step":false,
					"group_1":
					{
						"color": "#cf0c0c",
						"flag": "wraped",
						"orignal_eq": `2 ^ {n+2} - 2 ^ {n+1}`,
						"expanded_eq": `\\color{#cf0c0c}{ 2^{n} \\left( 2^{2} - 2 ^{2} \\right) }`
					},

					"currentStepString": function (){
						 var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						 return (`
						 	\\cfrac{${temp_1}}{2^{x}}
						 `)
					}
				},

				"step_2" : 
				{
					"type" : "law" ,
					"law_text" : "Applying division law of exponents",
					"last_step": false,
					"position_btn" : ["r 100"],
					"group_1" : 
					{
						
						"flag" : "NotApply",
						"orignal_eq" : `\\cfrac{
											2^{n} \\left( 2^{2} - 2 ^{1} \\right)
										}
										{
											2^{x}
										}`,
						"expanded_eq" : `\\color{#1d8062}{ 2^{n-x} }\\left(4-2 \\right)`
					},

					"currentStepString" : function(){
						var temp_1 = (this. group_1.flag == "NotApply")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						return temp_1
					},

					"previousStepString" : function(){
						var temp_1 = this. group_1. orignal_eq;
						return temp_1
					}
				},
				"step_3" : 
				{
					"type" : "expand" ,
					"last_step": false,
					"position_btn" : ["t 60"],
					"group_1" : 
					{
						"color" : "#cf0c0c",
						"flag" : "wraped",
						"orignal_eq" : `2^{n-x} \\left(4-2 \\right)`,
						"expanded_eq" : `2^{n-x} \\scdot \\color{#cf0c0c} { 2^{1} }`
					},

					"currentStepString" : function(){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						return temp_1
					},

					"previousStepString" : function(){
						var temp_1 = this. group_1. orignal_eq;
						return temp_1
					}
				},
				"step_4" : 
				{
					"type" : "expand" ,
					"last_step": true,
					"position_btn" : ["t 50"],
					"group_1" : 
					{
						"color" : "#6e1680",
						"flag" : "wraped",
						"orignal_eq" : `2^{n-x} \\scdot 2^{1} `,
						"expanded_eq" : ` \\color{#6e1680} { 2^{n-x+1} }`
					},

					"currentStepString" : function(){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						return temp_1
					},

					"previousStepString" : function(){
						var temp_1 = this. group_1. orignal_eq;
						return temp_1
					}
				}
			}
		}
	},
	"page_6" :
	{
		"equation_1" :
		{
			"alpha_1" : "x" ,
			"alpha_2" : "y" ,
			"alpha_3" : "" ,
			"defaultMode" : "solution" ,
			"exerciseEnabled" : false ,
			"solutionEnabled" : true ,
			"question" :
			`
				\\cfrac{
					3 ^ {x} - 3 ^ {x-1}
				}
				{
					3^{x+2}
				}
				
			` ,
			"exercise" :
			{
			},
			"solution" :
			{
				"step_1":
				{
					"type" : "expand",
					"position_btn" : ["t 50" , "b 50"],
					"last_step": false,
					"group_1":
					{
						"flag": "wraped",
						"color" : "#33a331",
						"orignal_eq": `3 ^ {x} - 3 ^ {x-1}`,
						"expanded_eq": `\\color{#33a331}{ 3^{x} \\left( 1-3^{-1} \\right) }`
					},
					"group_2":
					{
						"flag": "wraped",
						"color":"#b522ba",
						"orignal_eq": `3 ^ {x+2} `,
						"expanded_eq": `\\color{#b522ba}{ 3^{x} 3^{2} }`
					},
					"currentStepString" : function(){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						var temp_2 = (this. group_2.flag == "wraped")?this. group_2. orignal_eq : this. group_2. expanded_eq;
						return (`
							\\cfrac{ ${temp_1} }{ ${temp_2}}
							`)
					}
				},
				"step_2":
				{
					"type" : "expand",
					"position_btn" : ["t 55" , "b 50"],
					"last_step": false,
					"group_1":
					{
						"flag": "wraped",
						"color" : "#33a331",
						"orignal_eq": `\\left( 1 - 3^{-1} \\right)`,
						"expanded_eq": `\\color{#33a331} { \\cfrac{2}{3} }`
					},
					"group_2":
					{
						"flag": "wraped",
						"color":"#b522ba",
						"orignal_eq": `3 ^ {2} `,
						"expanded_eq": `\\color{#b522ba}{9}`
					},
					"currentStepString" : function(){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						var temp_2 = (this. group_2.flag == "wraped")?this. group_2. orignal_eq : this. group_2. expanded_eq;
						return (`
							\\cfrac{ ${temp_1} }{ ${temp_2}}
							`)
					},
					"previousStepString" : function(){
						var temp_1 = this. group_1. orignal_eq ;
						var temp_2 = this. group_2. orignal_eq ;
						return (`
							\\cfrac{ 3 ^ {x}${temp_1} }{ 3^{x} ${temp_2}}
							`)
					}
				},
				"step_3":
				{
					"type" : "expand",
					"position_btn" : ["r 100"],
					"last_step": true,
					"group_1":
					{
						"flag": "wraped",
						"color" : "#5a1d5c",
						"orignal_eq": `\\cfrac{ \\cfrac{2}{3} }{9}`,
						"expanded_eq": `\\color{#5a1d5c} { \\cfrac{2}{27} }`
					},
					
					"currentStepString" : function(){
						var temp_1 = (this. group_1.flag == "wraped")?this. group_1. orignal_eq : this. group_1. expanded_eq;
						return (temp_1)
					},
					"previousStepString" : function(){
						var temp_1 = this. group_1. orignal_eq ;
						return (temp_1)
					}
				},
			}
		}
	}
}