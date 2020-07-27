var x = "hello world";
console.log(x);


//Creacion de objetos ejemplo

var estudiante = {
    nombre : "carlos" ,
    edad : 22,
    carrera : "Ing.Aleatoria" ,
    nacionalidad : "pais A",
    historia : {
        primerSemestre : 5,
        segundoSemestre: 2
    },
    colorPelo : "cafe"
};

console.log(estudiante);
console.log(estudiante.historia.primerSemestre);

//fabrica de funciones 
    //base
function makeMultiplier(multiplier){
    var myFunc = function(x){
        return multiplier * x;
    };
    return myFunc;
}
    //Funciones creadas de esa base 
var multiplicarPor3 = makeMultiplier(3);
var multiplicarPor10 = makeMultiplier(10);
var multiplicarPor5789 = makeMultiplier(5789);
    //Resultados
console.log(multiplicarPor10(5));
console.log(multiplicarPor3(5));
console.log(multiplicarPor5789(5));

