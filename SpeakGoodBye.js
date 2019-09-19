/*
  Name: Sukayna Kugshia
  Date: 9/19/2019
  Description: The script.js file includes the modifications for the SpeakGoodBye.js file. 
                                  
                                  Assignment #4 
*/


(function (window){
	 var byeSpeaker ={};
	 var speakWord = "Good Bye";

	 byeSpeaker.speak = function (name) {
	  	console.log(speakWord + " " + name);
	}

   /*Implementation of Array.prototype.map section*/
	 byeSpeaker.speakSimple = function(name){
		return (speakWord + " " + name);
	};

	window.byeSpeaker = byeSpeaker;
})(window);