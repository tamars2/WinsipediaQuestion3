var request = require('request');
var cheerio = require('cheerio');

var GTechOpponents = [];

request("http://www.winsipedia.com/georgia-tech", function(error, response, html) {
	var $ = cheerio.load(html);
	$('span.record').each(function(i, element) {
		var a = $(this).prev().text().toUpperCase();
		if (a != "") {
		GTechOpponents.push(a);
		}
	});
});

module.exports = GTechOpponents;