var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var TechPlayed = require("./gtOpponents.js");
var AllTeams = require('./fbsTeams.js');

var teamsNotPlayed = [];

function getDiff(TechPlayed, AllTeams) {
	setTimeout(function(){		
		
		teamsNotPlayed = AllTeams.subtract(TechPlayed);
	
		for (var i = 0; i < teamsNotPlayed.length; i++) {
			console.log(teamsNotPlayed[i]);
		}
		fs.writeFile("TeamsNotPlayed.txt", teamsNotPlayed, function(err) {
		if (err) {
			return console.log(err);
		}
	});
	}, 2000);

};

getDiff(TechPlayed, AllTeams);

//phrogz JavaScript Array Set Mathematics Library
(function(){
	var methods = {
		//*** SORTED IMPLEMENTATIONS *************************************************** 
		subtract : function ArraySetMathSubtract(a2,compareFunction){ 
			var a1=this.removeDuplicates(compareFunction);
			if (!a2) return a1;
			var a2=a2.removeDuplicates(compareFunction);
			var len2=a2.length;
			if (compareFunction){ 
				for (var i=0;i<a1.length;i++){ 
					var src=a1[i],found=false,src;
					for (var j=0;j<len2&&compareFunction(src2=a2[j],src)!=1;j++) if (compareFunction(src,src2)==0) { found=true; break; } 
					if (found) a1.splice(i--,1);
				} 
			}else{ 
				for (var i=0;i<a1.length;i++){ 
					var src=a1[i],found=false,src;
					for (var j=0;(j<len2)&&(src>=(src2=a2[j]));j++) if (src2==src) { found=true; break; } 
					if (found) a1.splice(i--,1);
				} 
			} 
			return a1;
		},
		removeDuplicates : function ArraySetMathRemoveDuplicates(compareFunction){ 
			var a1=this.concat(); compareFunction ? a1.sort(compareFunction) : a1.sort();
			if (compareFunction){ 
				for (var i=0;i<a1.length;i++){ 
					var src=a1[i];
					for (var j=i+1;j<a1.length&&compareFunction(a1[j],src)==0;j++){} 
					if (j-1>i) a1.splice(i+1,j-i-1);
				} 
			}else{ 
				for (var i=0;i<a1.length;i++){ 
					var src=a1[i];
					for (var j=i+1;j<a1.length&&a1[j]==src;j++){} 
					if (j-1>i) a1.splice(i+1,j-i-1);
				} 
			} 
			return a1;
		}
	};
	var useDefineProperty = (typeof Object.defineProperty == 'function');
	for (var methodName in methods){
		if (!methods.hasOwnProperty(methodName)) continue;
		if (useDefineProperty){
			try{
				Object.defineProperty( Array.prototype, methodName, {value:methods[methodName]} );
			}catch(e){}
		}
		if (!Array.prototype[methodName]) Array.prototype[methodName] = methods[methodName];
	}
})();