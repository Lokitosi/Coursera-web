
(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var hellow = {};
  for (var i = 0 ; i < names.length; i++) {

    var primeraletra = names[i].charAt(0);
    
    if (primeraletra === "J"){
      SpeakGoodBye.speak();
    }else{
      SpeakHello.speak();
    }
  }
})();
