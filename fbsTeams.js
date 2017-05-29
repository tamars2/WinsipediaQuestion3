var request = require('request');
var cheerio = require('cheerio');

var FBSTeams = [];

request("http://www.winsipedia.com/team", function(error, response, html) {
	var $ = cheerio.load(html);

	$("h3").each(function(i, element) {
		var team = $(this).text();
		if (team != "" && team != "GEORGIA TECH") {
		FBSTeams.push(team);
	}
	});
});

module.exports = FBSTeams;