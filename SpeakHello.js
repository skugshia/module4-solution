/*
  Name: Sukayna Kugshia
  Date: 9/19/2019
  Description: The script.js file includes the modifications for the SpeakHello.js file. 
                                  
                                  Assignment #4 
*/

(function(window){

	var helloSpeaker = {};


	var speakWord = "Hello";


	helloSpeaker.speak = function(name) {
	  console.log(speakWord + " " + name);
	}

    /*Implementation of Array.prototype.map section*/
	helloSpeaker.speakSimple = function(name){
		return (speakWord + " " + name);
	};

	 window.helloSpeaker = helloSpeaker;
})(window);