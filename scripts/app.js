module.exports = function(bot) {
	 bot.hear(/Hello!/, function(res) {
   		return res.send("Hi there!");
 	});
	}