// sample simplify equation 5
simplifyEquation_5 =
{
	"question" :
	{
		"numerator" :
		[
			{
				"decimal" :
				{
					"type" : "sign" ,
					"value" : "45"
				} ,
				"exponent" : "x-3"
			} ,
			{
				"decimal" :
				{
					"type" : "sign" ,
					"value" : "3"
				}
			} ,
			{
				"decimal" :
				{
					"type" : "sign" ,
					"value" : "75"
				} ,
				"exponent" : "4-x"
			}
		] ,
		"denominator" :
		[
			{
				"decimal" :
				{
					"type" : "sign" ,
					"value" : "25"
				} ,
				"exponent" : "-x"
			} ,
			{
				"decimal" :
				{
					"type" : "sign" ,
					"value" : "15"
				} ,
				"exponent" : "x+2"
			}
		]
	} ,
	"exerciseSteps" :
	[
		{
			"numerator" :
			[
				{
					"parenthesis" : true ,
					"decimal" :
					{
						"type" : "group" ,
						"value" :
						[
							{
								"decimal" :
								{
									"type" : "sign" ,
									"value" : "5"
								}
							} ,
							{
								"decimal" :
								{
									"type" : "sign" ,
									"value" :
									{
										"minChars" : 2 ,
										"minBoxChars" : 2 ,
										"solution" : "3"
									}
								} ,
								"exponent" :
								{
									"minChars" : 2 ,
									"minBoxChars" : 2 ,
									"solution" : "2"
								}
							}
						]
					} ,
					"exponent" : "x-3"
				} ,
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" : "3"
					}
				} ,
				{
					"parenthesis" : true ,
					"decimal" :
					{
						"type" : "group" ,
						"value" :
						[
							{
								"decimal" :
								{
									"type" : "sign" ,
									"value" : "3"
								}
							} ,
							{
								"decimal" :
								{
									"type" : "sign" ,
									"value" :
									{
										"minChars" : 2 ,
										"minBoxChars" : 2 ,
										"solution" : "3"
									}
								} ,
								"exponent" :
								{
									"minChars" : 2 ,
									"minBoxChars" : 2 ,
									"solution" : "2"
								}
							}
						]
					} ,
					"exponent" : "4-x"
				}
			] ,
			"denominator" :
			[
				{
					"parenthesis" : true ,
					"decimal" :
					{
						"decimal" :
						{
							"type" : "sign" ,
							"value" : "5"
						} ,
						"exponent" :
						{
							"minChars" : 2 ,
							"minBoxChars" : 2 ,
							"solution" : "2"
						}
					} ,
					"exponent" : "-x"
				} ,
				{
					"parenthesis" : true ,
					"decimal" :
					{
						"type" : "group" ,
						"value" :
						[
							{
								"decimal" :
								{
									"type" : "sign" ,
									"value" : "3"
								}
							} ,
							{
								"decimal" :
								{
									"type" : "sign" ,
									"value" :
									{
										"minChars" : 2 ,
										"minBoxChars" : 2 ,
										"solution" : "5"
									}
								}
							}
						]
					} ,
					"exponent" : "x+2"
				}
			]
		} ,
		{
			"numerator" :
			[
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" : "5"
					} ,
					"exponent" :
					[
						"x-" ,
						{
							"maxChars" : 2 ,
							"minBoxChars" : 2 ,
							"solution" : "3"
						}
					]
				} ,
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" : "3"
					} ,
					"exponent" : "2x-6"
				} ,
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" : "3"
					} ,
					"exponent" : "1"
				} ,
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" : "3"
					} ,
					"exponent" :
					[
						{
							"maxChars" : 2 ,
							"minBoxChars" : 2 ,
							"solution" : "4"
						} ,
						"-x"
					]
				} ,
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" :
						{
							"maxChars" : 2 ,
							"minBoxChars" : 2 ,
							"solution" : "5"
						}
					} ,
					"exponent" : "8-2x"
				}
			] ,
			"denominator" :
			[
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" : "5"
					} ,
					"exponent" :
					[
						{
							"maxChars" : 2 ,
							"minBoxChars" : 2 ,
							"solution" : "-2"
						} ,
						"x"
					]
				} ,
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" : "3"
					} ,
					"exponent" : "x+2"
				} ,
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" :
						{
							"maxChars" : 2 ,
							"minBoxChars" : 2 ,
							"solution" : "5"
						}
					} ,
					"exponent" : "x+2"
				}
			]
		} ,
		{
			"numerator" :
			[
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" : "5"
					} ,
					"exponent" :
					[
						"x-" ,
						{
							"maxChars" : 2 ,
							"maxBoxChars" : 2 ,
							"solution" : "3"
						} ,
						"+8-2x+" ,
						{
							"maxChars" : 2 ,
							"maxBoxChars" : 2 ,
							"solution" : "2"
						} ,
						"x-x-2"
					]
				} ,
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" : "3"
					} ,
					"exponent" :
					[
						"2x-" ,
						{
							"maxChars" : 2 ,
							"maxBoxChars" : 2 ,
							"solution" : "6"
						} ,
						"+1+4-" ,
						{
							"maxChars" : 2 ,
							"maxBoxChars" : 2 ,
							"solution" : "x"
						} ,
						"-x-2"
					]
				}
			]
		} ,
		{
			"numerator" :
			[
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" : "5"
					} ,
					"exponent" :
					{
						"maxChars" : 2 ,
						"minBoxChars" : 2 ,
						"solution" : "3"
					}
				} ,
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" : "5"
					} ,
					"exponent" :
					[
						"-" ,
						{
							"maxChars" : 2 ,
							"minBoxChars" : 2 ,
							"solution" : "3"
						}
					]
				}
			]
		} ,
		{
			"numerator" :
			[
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" : "5"
					} ,
					"exponent" :
					{
						"maxChars" : 2 ,
						"minBoxChars" : 2 ,
						"solution" : "3"
					}
				}
			] ,
			"denominator" :
			[
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" : "3"
					} ,
					"exponent" :
					{
						"maxChars" : 2 ,
						"minBoxChars" : 2 ,
						"solution" : "3"
					}
				}
			]
		} ,
		{
			"numerator" :
			[
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" :
						{
							"maxChars" : 3 ,
							"minBoxChars" : 3 ,
							"solution" : "125"
						}
					}
				}
			] ,
			"denominator" :
			[
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" : "9"
					}
				}
			]
		}
	] ,
	"interactiveSolutionSteps" :
	[
		{
			"numerator" :
			[
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" : "45"
					} ,
					"exponent" : "x-3" ,
					"expanded" :
					{
						"color" :
						[
							255 ,
							102 ,
							0 ,
							255
						] ,
						"group" :
						{
							"parenthesis" : true ,
							"decimal" :
							{
								"type" : "group" ,
								"value" :
								[
									{
										"decimal" :
										{
											"type" : "sign" ,
											"value" : "5"
										}
									} ,
									{
										"decimal" :
										{
											"type" : "sign" ,
											"value" : "3"
										} ,
										"exponent" : "2"
									}
								]
							} ,
							"exponent" : "x-3"
						}
					}
				} ,
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" : "3"
					}
				} ,
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" : "75"
					} ,
					"exponent" : "4-x" ,
					"expanded" :
					{
						"color" :
						[
							51 ,
							153 ,
							204 ,
							255
						] ,
						"group" :
						{
							"parenthesis" : true ,
							"decimal" :
							{
								"type" : "group" ,
								"value" :
								[
									{
										"decimal" :
										{
											"type" : "sign" ,
											"value" : "3"
										}
									} ,
									{
										"decimal" :
										{
											"type" : "sign" ,
											"value" : "5"
										} ,
										"exponent" : "2"
									}
								]
							} ,
							"exponent" : "4-x"
						}
					}
				}
			] ,
			"denominator" :
			[
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" : "25"
					} ,
					"exponent" : "-x" ,
					"expanded" :
					{
						"color" :
						[
							102 ,
							153 ,
							102 ,
							255
						] ,
						"group" :
						{
							"parenthesis" : true ,
							"decimal" :
							{
								"decimal" :
								{
									"type" : "sign" ,
									"value" : "5"
								} ,
								"exponent" : "2"
							} ,
							"exponent" : "-x"
						}
					}
				} ,
				{
					"decimal" :
					{
						"type" : "sign" ,
						"value" : "15"
					} ,
					"exponent" : "x+2" ,
					"expanded" :
					{
						"color" :
						[
							255 ,
							153 ,
							0 ,
							255
						] ,
						"group" :
						{
							"parenthesis" : true ,
							"decimal" :
							{
								"type" : "group" ,
								"value" :
								[
									{
										"decimal" :
										{
											"type" : "sign" ,
											"value" : "3"
										}
									} ,
									{
										"decimal" :
										{
											"type" : "sign" ,
											"value" : "5"
										}
									}
								]
							} ,
							"exponent" : "x+2"
						}
					}
				}
			]
		}
	]
} ;

// the complete set of simplify equations
// only one of those have been defined at the moment
simplifyEquationSet =
[
	simplifyEquation_1 ,
	simplifyEquation_2 ,
	simplifyEquation_3 ,
	simplifyEquation_4 ,
	simplifyEquation_5
] ;
