module.exports = function(bot) {
	 bot.hear(/That's Cold/, function(res) {
   		return res.send("...");
 	});
}

var jsMeme = [
  "https://jordankasper.com/js-testing/images/meme-functions.jpg",
  "http://s2.quickmeme.com/img/bf/bfd0455c2d86e15a9982534d90f8859a08be8f74062fff46e07e00ca7fbbdd1f.jpg",
  "https://files.managewp.org/js_nan_meme-320x200.jpg",
  "http://cf.chucklesnetwork.com/items/7/4/9/7/3/original/yo-dawg-we-herd-you-liek-javascript-so-we-put-some-js-in-your-js.jpg",
  "http://s.quickmeme.com/img/7e/7e12f2bf903bcb56c97fb18a86cc3f5f0429730f40aa92595acab1905abe2b4c.jpg",
  "http://www.developermemes.com/wp-content/uploads/2014/07/Wastes-2-Hours-Debugging-Broken-Javascript-Missing-A-Curly-Brace-Developer-Meme.jpg",
  "http://m.memegen.com/bvnpsq.jpg"
]

module.exports = function(bot) {
	bot.hear(/js/, function(res) {
		return res.send(res.random(jsMeme));
	});
}

module.exports = function(bot) {
	 bot.hear(/kamusta/, function(res) {
   		return res.send("mabuti naman po");
 	});
}