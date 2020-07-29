//Arrays
var jugador = new Array();
jugador[0] = "id o nombre";
jugador[1] = 5;
jugador[2] = function (name) {
    console.log("hola: "+name);
}
jugador[3] = { play : "nombre play" };

console.log(jugador);
console.log(jugador[3].play);
//Arrays cortos 

var Jugador2 = ["objeto1","objeto2","aibjeto3"];
Jugador2[100] = "objeto100";

for (var i =0 ; i<101 ; i++){
    console.log("Hello :" + Jugador2[i]);
}

//IIFEs or Immediately Invoked Function Expression
//Example:
(function(nombre){
    console.log("Bienvenido : "+nombre);
})("Andres");

