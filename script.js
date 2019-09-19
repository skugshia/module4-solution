/*
  Name: Sukayna Kugshia
  Date: 9/19/2019
  Description: The script.js file includes the modifications for the Array.prototype.map. 
                                  
                                  Assignment #4 
*/

(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
 
 /**************************************************/
      /*Implementation of Array.prototype.map*/

  /*The speakSimpleArray demonstrates the implementation of the Array.prototype.map.
    The map does not modify the original array but returns the value inside the function. 
    The parameter loops the the names array and finds the first letter, if the first letter is J
    then it goes to the byeSpeaker method, otherwise it goes to the helloSpeaker method.*/ 
  var speakSimpleArray = names.map(function(itemNames){
      for (var i = 0; i < itemNames.length; i++) {
            var firstLetter = itemNames[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
          return(byeSpeaker.speakSimple(itemNames));
      } else {
      return(helloSpeaker.speakSimple(itemNames));
     }
   }
}); 

 /*Once the mapping has been completed, it then prints out the elements within the array accordingly.*/
    console.log(speakSimpleArray.join("\n"));
 /**************************************************/

var helloReduceArray = names.reduce(function(hello, initialValue){
   hello[initialValue[speakSimpleArray]];
   return hello;
}, {});
console.log(helloReduceArray);


var goodByeReduceArray = names.reduce(function(bye, initialValue){
   bye[initialValue[speakSimpleArray]];
   return bye;
}, {});
console.log(goodByeReduceArray);



  for (var i = 0; i < names.length; i++) {
       var firstLetter = names[i].charAt(0).toLowerCase();
   
    if (firstLetter === 'j') {
          byeSpeaker.speak(names[i]);
     } else {
           helloSpeaker.speak(names[i]);
      }
  }
})();

