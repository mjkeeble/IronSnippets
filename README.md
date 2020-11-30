# Code snippets

Over the past two weeks I've realised that syntax errors are often the cause of bugs that we have to spend far too long hunting. I think snippets could be a good way to tackle that because they can provide the basic syntax for code elements we use often and help avoid errors.

I have started to compile a snippet file (for now just JavaScript) to build up a library of snippets for regularly used program elements. Feel free to use this and to let me know if you find any bugs or want to have items added.

For a good video on snippets and how to get them installed see here: https://youtu.be/K3gLlZm-m_8

Have fun, 

#### Mark
 
 ----------------------------
 # JavaScript snippets
 (javascript.json)
 

##### | abbreviation | description |

### For-loops
| 4loop | 'for' loop with counter |

| 4arr | 'for' loop over an array |

| 4loop2d | 'for' loop for a 2-dimensional array |


### Array methods
| arrmap | array.map method |

| arrreduce | array.reduce method |

| arrfilter | array.filter method |

| arr4e | array.forEach method |

| sortu | array.sort ascending |

| sortd | array.sort descending |

### console.log
| sclog | console.log('string') |

| cl | console.log() |


### DOM manipulation
| ae | document.addEventListener |

| gi | document.getElementByID |

| gc | document.getElementByClassName |

| gt | document.getElementByTagName |

| qs | document.querySelector |

| gsa | document.querySelectorAll|

### Jasmine test suite
| jassuite | Initiate Jasmine test suite |

| jastest | Jasmine test definition within suite |

 ----------------------------
# HTML Code snippets
(html.json)

| !bs | Bootstrap template (like Emmet '!' shortcut with Bootstrap links added

 ----------------------------
# numberToWords
(numberToWords.js)
Set of functions to convert integers, decimals and currencies to words.
This may not be the most elegant approach to converting numbers, so improvement suggestions are welcome!

### float2Words
Returns the amount entered as a text string in words.

Parameters:
1. num - the number to be converted.

*The code expects a decimal point.* If a comma is used replace the '.' in the split method in line 7 with a comma.

*Dependencies:* Calls integer2Words and hundreds2Words functions.

### currency2Words
Returns a monetary value as a text string in words. 

Parameters:
1. num - the value to be converted
1. 'currency' (optional) - three-letter currency code

The currency list includes dollar, euro and pounds - additional currencies can be added to the currency object after line 23.

Uses the US numbering system for billions.

*Dependencies:* Calls integer2Words and hundreds2Words functions. 

### integer2Words
Returns an integer as a text string in words.

Parameters:
1. num - the value to be converted
1. 'sys' (optional) - enter 'us' to use the American numbering system where 10^9 = 1 billion, otherwise 10^12 = 1 billion

*Dependencies:* calls hundreds2Words function.

### hundreds2Words
Returns an integer value below 1000 as a text string in words.

Can be used on a stand-alone basis, but is concieved as a subordinated function to the others.

This function can be used on a stand-alone basis where appropriate, but was concieved as a subordinate function to integer2Words.
