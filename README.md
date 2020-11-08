# Code snippets

Over the past two weeks I've realised that syntax errors are oftrn the cause of bugs that we have to spend far too long hunting. I think snippets could be a good way to tackle that because they can provide the basic syntax for code elements we use often and help avoid errors.

I have started to compile a snippet file (for now just JavaScript) to build up a library of snippets for regularly used program elements. Feel free to use this and to let me know if you find any bugs or want to have items added.

For a good video on snippets and how to get them installed see here: https://youtu.be/K3gLlZm-m_8

Have fun, 

#### Mark
 
 ----------------------------
 # JavaScript snippets
 

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

| clog | console.log() |


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
| !bs | Bootstrap template (like Emmet '!' shortcut with Bootstrap links added

 ----------------------------
# NumbersToText
Set of functions to convert integers, currencies and floating point numbers to words

float2Words - converts a floating point number to text. Calls integer2Words and hundreds2Words functions.
currency2Words - converts a monetary value to text. Calls integer2Words and hundreds2Words functions. Currency list currently only contains dollar, euro and pounds - additional currencies can be added in the currency array.
integer2Words - calls hundreds2Words function.

This may not be the most elegant approach to converting numbers, so improvement suggestions are welcome!
