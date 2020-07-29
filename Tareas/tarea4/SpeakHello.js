(function (window){
  var speakHello = {};
  var speakWord = "Hello";
  speakHello.speak = function(name) {
    console.log(speakWord + " " + name);
  }
  window.SpeakHello = speakHello;
})(window);