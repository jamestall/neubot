module.exports = function(bot) {
	 bot.hear(/That's Cold/, function(res) {
   		return res.send("...");
 	});
}

var squirrels = [
  "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png",
  "http://shipitsquirrel.github.com/images/squirrel.png",
  "https://media.giphy.com/media/143vPc6b08locw/giphy.gif",
  "http://i.imgur.com/DPVM1.png",
  "http://s2.quickmeme.com/img/e0/e07b5437703f88eb4229adc1c6931061d4c5557f761c048dac3d12f9b8e4846a.jpg",
  "http://s.quickmeme.com/img/9a/9a0066a21027716e7b0b5b900f3c2af295fdcad706ea6836fcb58efdeb261c8e.jpg",
  "http://i.memecaptain.com/gend_images/zyCwXg.jpg"
]

module.exports = function(bot) {
	bot.hear(/squirrels!/, function(res) {
		return res.send(res.random(squirrels));
	});
}
