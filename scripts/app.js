var jsMeme = [
  "https://jordankasper.com/js-testing/images/meme-functions.jpg",
  "http://s2.quickmeme.com/img/bf/bfd0455c2d86e15a9982534d90f8859a08be8f74062fff46e07e00ca7fbbdd1f.jpg",
  "https://files.managewp.org/js_nan_meme-320x200.jpg",
  "http://cf.chucklesnetwork.com/items/7/4/9/7/3/original/yo-dawg-we-herd-you-liek-javascript-so-we-put-some-js-in-your-js.jpg",
  "http://s.quickmeme.com/img/7e/7e12f2bf903bcb56c97fb18a86cc3f5f0429730f40aa92595acab1905abe2b4c.jpg",
  "http://www.developermemes.com/wp-content/uploads/2014/07/Wastes-2-Hours-Debugging-Broken-Javascript-Missing-A-Curly-Brace-Developer-Meme.jpg",
  "http://m.memegen.com/bvnpsq.jpg"
]

var aritemticOperators = [
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




module.exports = function(bot) {
	//That's cold
	 bot.hear(/That's Cold/, function(res) {
   		return res.send("...");
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
		return res.send(aritemticOperators);
	});

	//Comparison operators
	bot.hear(/comparison/, function(res) {
		return res.send(comparisonOperators);
	});

	//Logical operators
	bot.hear(/logical/, function(res) {
		return res.send(logicalOperators);
	});

	//Special number operators
	bot.hear(/number/, function(res) {
		return res.send(specialNumberOperators);
	});

	//Basic Functions
	bot.hear(/functions/, function(res) {
		return res.send(basicFunctions);
	});

	//Basic Properties
	bot.hear(/properties/, function(res) {
		return res.send(properties);
	});

	//Variables
	bot.hear(/variables/, function(res) {
		return res.send(variables);
	});

	//Array helper methods
	bot.hear(/array helper/, function(res) {
		return res.send(arrayHelperMethods);
	});

	//Array iterator methods
	bot.hear(/array iterator/, function(res) {
		return res.send(arrayIteratorMethods);
	});

	//Loops
	bot.hear(/loops/, function(res) {
		return res.send(loops);
	});

	//Conditionals
	bot.hear(/conditionals/, function(res) {
		return res.send(conditionals);
	});

	//Logical operators
	bot.hear(/booleans/, function(res) {
		return res.send(booleans);
	});



}







