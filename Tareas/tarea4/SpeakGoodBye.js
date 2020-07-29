(function (window){
  var speakGoodBye = {};
  var speakWord = "Good Bye";
  speakGoodBye.speak = function(name) {
    console.log(speakWord + " " + name);
  }
  window.SpeakGoodBye = speakGoodBye;
})(window);