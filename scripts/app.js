
//Set Response Arrays
var jsMeme = [
  "https://jordankasper.com/js-testing/images/meme-functions.jpg",
  "http://s2.quickmeme.com/img/bf/bfd0455c2d86e15a9982534d90f8859a08be8f74062fff46e07e00ca7fbbdd1f.jpg",
  "https://files.managewp.org/js_nan_meme-320x200.jpg",
  "http://cf.chucklesnetwork.com/items/7/4/9/7/3/original/yo-dawg-we-herd-you-liek-javascript-so-we-put-some-js-in-your-js.jpg",
  "http://s.quickmeme.com/img/7e/7e12f2bf903bcb56c97fb18a86cc3f5f0429730f40aa92595acab1905abe2b4c.jpg",
  "http://www.developermemes.com/wp-content/uploads/2014/07/Wastes-2-Hours-Debugging-Broken-Javascript-Missing-A-Curly-Brace-Developer-Meme.jpg",
  "http://m.memegen.com/bvnpsq.jpg"
]

var arithemticOperators = [
	"+ 	add (also concatenates strings)",
	"- 	subtract",
	"* 	multiply",
	"/ 	divide",
	"% 	modulus (returns the remainder)",
	"+=	adds number to a variable and assigns the result to the variable",
	"-= 	subtracts number from a variable and assigns the result to the variable",
	"*=	multiplies number with a variable and assigns the result to the variable",
	"/=  divides number from a variable and assigns the result to the variable",
	"++	increments up",
	"--	increments down"
]

var comparisonOperators = [
	">	greater than",
	">=	greater than or equal to",
	"<	less than",
	"<=	less than or equal to",
	"===	strict equal (use this)",
	"==	coercive equal (AVOID)",
	"!== strict not equal (use this)",
	"!=	coercive not equal ()"
]

var logicalOperators = [
	"&&	and 	Returns *true* when both left and right values are true",
	"||	or 		Returns *true* when at least one of the lef or right values is true",
	"!	not 	Takes a single value and returns the opposite Boolean value"
]

var specialNumberOperators = [
	"Math.pow(m,n)	Returns m to the power of n",
	"Math.sqrt(n) 	Returns the square root of n",
	"Math.random()	Returns a random number between 0 (inclusive) and 1 (exclusive)",
	"Math.floor(n)	Returns largest interger less than or equal to n",
	"Math.ceil(n)	Returns smallest integer greater than or equal to n"
]

var basicFunctions = [
	"toString() 	Transforms value into a string",
	"typeof()	Returns a string with a data type of the data you pass into it"

]


var properties = [
	".length		Returns the length of the array"
]

var variables = [
	"var    instantiates a variable",
	"let ",
	"const"
]

var arrayHelperMethods = [
	"toString()					Returns a single string consisting of the array elements converted to strings and separated by commas",
	"join()						Same as toString(), but allows you to pass a custome separator as an argument",
	"pop()						Removes and returns the last item",
	"push(item1, ..., itemN)	Adds one or more items to the end of the array",
	"reverse()					Reverses the array",
	"shift()					Removes an returns the first item",
	"unshift(item1, ..., itemN) adds one or more items to the start of an array"
]

var arrayIteratorMethods = [
	"forEach()	Performs specified actions on each element in an array",
	"every()	Tests whether all elements in the arrya pass a test ",
	"some()		Tests whether some element in the array passes the text implemented by the provided function",
	"filter()	Creates a new array witha ll the elements that pass the test that pass the test implemented by the function",
	"map()		Creates a new array with results of calling a provided function on every element in this array"
]

var loops = [
	"while		A loop statement that runs while a condition is true",
	"do/while	A loop statment similar to while, but ensures that the code block is executed at least once",
	"for 		A loop statement that 1. declares variable for the itterator, 2. value condition, 3. increment",
	"forEach		Method specific to arrays, but similar to the for statement",
	"				-Lets you specify a function to execute for each array element",
	"				-EXMAScript 5 and later, so not supported by older browsers (IE8!)"

]

var conditionals = [
	"if (condition) {",
	"//code",
	"}",
	" ",
	"if (condition) {",
	"	//code",
	"} else {",
	"	//code",
	"}",
	" ",
	"if (condition) {",
	"	//code",
	"} else if (another condition) {",
	"	//code",
	"} else if (another condition) {",
	"	//code",
	"} else {",
	"	//code",
	"}",
	" ",
	"(expression) ? trueCode : falseCode;",
	"	// var allowed = (age > 18) ? `yes` : `no`;"
]

var booleans = [
	"false",
	"true",
	"falsy (when converted to boolean it will = false)",
	"	possible values =	`false`, 0,	``,	NaN, null",
	"Truthy (when converted to boolean it will = true)",
	"	everything else besides falsy values"
]

var iceCold = "Ice Cold";

var helpMe = [
"arithmetic 	= 		Arithmetic Operators",
"comparison		=		Comparison Operators",
"logical		=		Logical Operators",
"number			=		Special Number Operators",
"functions		=		Basic Functions",
"properties		=		Basic Properties",
"variables		=		Variables",
"array helper	=		Array helper methods",
"array iterator	=		Array iterator methods",
"loops			=		Loops",
"conditionals	=		Conditionals",
"booleans		=		Booleans",
"meme			=		JavaScript memes!",
"9gag     		=		Random 9gag meme"
]

//setup for 9gag
var HTMLParser, Select, escape_html_characters, get_meme_image, get_meme_title, select_element, send_meme;

Select = require("soupselect").select;

HTMLParser = require("htmlparser");

	

var ackbars = [
"http://i.imgur.com/OTByx1b.jpg", 
"http://farm4.static.flickr.com/3572/3637082894_e23313f6fb_o.jpg", 
"http://6.asset.soup.io/asset/0610/8774_242b_500.jpeg", 
"http://files.g4tv.com/ImageDb3/279875_S/steampunk-ackbar.jpg", 
"http://farm6.staticflickr.com/5126/5725607070_b80e61b4b3_z.jpg", 
"http://farm6.static.flickr.com/5291/5542027315_ba79daabfb.jpg", 
"http://farm6.staticflickr.com/5250/5216539895_09f963f448_z.jpg", 
"http://static.fjcdn.com/pictures/Its_2031a3_426435.jpg", 
"http://www.millionaireplayboy.com/mpb/wp-content/uploads/2011/01/1293668358_bottom_trappy.jpeg", 
"http://31.media.tumblr.com/tumblr_lqrrkpAqjf1qiorsyo1_500.jpg", 
"https://i.chzbgr.com/maxW500/4930876416/hB0F640C6/", 
"http://i.qkme.me/356mr9.jpg", 
"http://24.media.tumblr.com/e4255aa10151ebddf57555dfa3fc8779/tumblr_mho9v9y5hE1r8gxxfo1_500.jpg", 
"http://farm2.staticflickr.com/1440/5170210261_fddb4c480c_z.jpg", 
"http://fashionablygeek.com/wp-content/uploads/2010/02/its-a-mouse-trap.jpg?cb5e28", 
"http://31.media.tumblr.com/tumblr_lmn8d1xFXN1qjs7yio1_500.jpg"
]


//Bot behavior
module.exports = function(bot) {
	//That's cold
	 bot.hear(/That's Cold/, function(res) {
   		return res.send(iceCold);
 	});

	//Meme randomizer
	bot.hear(/meme/, function(res) {
		return res.send(res.random(jsMeme));
	});

	//Listen for kamusta
	bot.hear(/kamusta/, function(res) {
   		return res.send("mabuti naman po");
 	});
	
	//JS Notes

	//Arithmetic operators
	bot.hear(/arithmetic/, function(res) {
		for (var i = arithemticOperators.length - 1; i >= 0; i--) {
		 	res.send(arithemticOperators[i]);
		} 
		return res.send("*ARITHMETIC OPERATORS*");
	});

	//Comparison operators
	bot.hear(/comparison/, function(res) {
		for (var i = comparisonOperators.length - 1; i >= 0; i--) {
		 	res.send(comparisonOperators[i]);
		} 
		return res.send("*COMPARISON OPERATORS*");
	});

	//Logical operators
	bot.hear(/logical/, function(res) {
		for (var i = logicalOperators.length - 1; i >= 0; i--) {
		 	res.send(logicalOperators[i]);
		} 
		return res.send("*LOGICAL OPERATORS*");
	});

	//Special number operators
	bot.hear(/number/, function(res) {
		for (var i = specialNumberOperators.length - 1; i >= 0; i--) {
		 	res.send(specialNumberOperators[i]);
		} return res.send("*SPECIAL NUMBER OPERATORS*");
	});

	//Basic Functions
	bot.hear(/functions/, function(res) {
		for (var i = basicFunctions.length - 1; i >= 0; i--) {
		 	res.send(basicFunctions[i]);
		} return res.send("*BASIC FUNCTIONS*");
	});

	//Basic Properties
	bot.hear(/properties/, function(res) {
		for (var i = properties.length - 1; i >= 0; i--) {
		 	res.send([properties][i]);
		} return res.send("*PROPERTIES*");
	});

	//Variables
	bot.hear(/variables/, function(res) {
		for (var i = variables.length - 1; i >= 0; i--) {
		 	res.send(variables[i]);
		} 
		return res.send("*VARIABLES*");
	});

	//Array helper methods
	bot.hear(/array helper/, function(res) {
		for (var i = arrayHelperMethods.length - 1; i >= 0; i--) {
		 	res.send(arrayHelperMethods[i]);
		} 
		return res.send("*ARRAY HELPER METHODS*");
	});

	//Array iterator methods
	bot.hear(/array iterator/, function(res) {
		for (var i = arrayIteratorMethods.length - 1; i >= 0; i--) {
		 	res.send(arrayIteratorMethods[i]);
		} 
		return res.send("*ARRAY ITERATOR METHODS*");
	});

	//Loops
	bot.hear(/loops/, function(res) {
		for (var i = loops.length - 1; i >= 0; i--) {
		 	res.send(loops[i]);
		} 
		return res.send("*LOOPS*");
	});

	//Conditionals
	bot.hear(/conditionals/, function(res) {
		for (var i = conditionals.length - 1; i >= 0; i--) {
		 	res.send(conditionals[i]);
		} 
		return res.send("*CONDITIONALS*");
	});

	//Logical operators
	bot.hear(/booleans/, function(res) {
		for (var i = booleans.length - 1; i >= 0; i--) {
		 	res.send(booleans[i]);
		 } 
		return res.send("*BOOLEANS*");
	});

	//Help Me!
	bot.hear(/tell me/, function(res) {
		for (var i = helpMe.length - 1; i >= 0; i--) {
		 	res.send(helpMe[i]);
		 } 
		return res.send("Say this...			and I'll tell you about...");
	});



  // return bot.hear(/it['’]?s a trap\b/i, function(msg) {
  //   return msg.send(msg.random(ackbars));
  // });

	bot.hear(/it['’]?s a trap\b/, function(res) {
		return res.send(res.random(ackbars));
	});

	//9gag code
	return bot.respond(/9gag( me)?/i, function(message) {
    return send_meme(message, false, function(title, src) {
      return message.send(title, src);
    });
  });
};

send_meme = function(message, location, response_handler) {
  var meme_domain, url;
  meme_domain = "http://9gag.com";
  location || (location = "/random");
  if (location.substr(0, 4) !== "http") {
    url = meme_domain + location;
  } else {
    url = location;
  }
  return message.http(url).get()(function(error, response, body) {
    var img_src, img_title, selectors;
    if (error) {
      return response_handler("Sorry, something went wrong");
    }
    if (response.statusCode === 302) {
      location = response.headers['location'];
      return send_meme(message, location, response_handler);
    }
    selectors = ["a img.badge-item-img"];
    if (process.env.HUBOT_9GAG_NO_GIFS == null) {
      selectors.unshift("div.badge-animated-container-animated img");
    }
    img_src = get_meme_image(body, selectors);
    if (img_src.substr(0, 4) !== "http") {
      img_src = "http:" + img_src;
    }
    img_title = escape_html_characters(get_meme_title(body, [".badge-item-title"]));
    return response_handler(img_title, img_src);
  });
};

select_element = function(body, selectors) {
  var html_handler, html_parser, i, img_container, len, selector;
  html_handler = new HTMLParser.DefaultHandler((function() {}), {
    ignoreWhitespace: true
  });
  html_parser = new HTMLParser.Parser(html_handler);
  html_parser.parseComplete(body);
  for (i = 0, len = selectors.length; i < len; i++) {
    selector = selectors[i];
    img_container = Select(html_handler.dom, selector);
    if (img_container && img_container[0]) {
      return img_container[0];
    }
  }
};

get_meme_image = function(body, selectors) {
  return select_element(body, selectors).attribs.src;
};

get_meme_title = function(body, selectors) {
  return select_element(body, selectors).children[0].raw;
};

escape_html_characters = function(text) {
  var i, len, r, replacements;
  replacements = [[/&/g, '&amp;'], [/</g, '&lt;'], [/"/g, '&quot;'], [/'/g, '&#039;']];
  for (i = 0, len = replacements.length; i < len; i++) {
    r = replacements[i];
    text = text.replace(r[0], r[1]);
  }
  return text;


}

//comment







