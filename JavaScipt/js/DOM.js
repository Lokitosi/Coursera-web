//console.log(document.getElementById("title"));
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("cargo");
    function diHola(event){
        var nombre =(document.getElementById("nombre").value);
        var saludo = "Bienvenido "+ nombre +" a la comunidad";
        //textcontent
        //document.getElementById("contenido").textContent = saludo;
        //InnerHTML
        saludo = "<h2>Bienvenido "+ nombre +" a la comunidad</h2>";
        document.getElementById("contenido").innerHTML = saludo;
    
        if (nombre === "andres"){
            var title = document.querySelector("#title").textContent;
            title += "Maquina,crack,mastodonte";
            //Se guarda el nuevo valor de title
            document.querySelector("#title").textContent = title;
        }   
    }
    //añadir action listeners
    document.querySelector("button").addEventListener("click",diHola);
        //otra manera de hacerlo
        //document.querySelector("button").onclick = diHola;
    document.querySelector("body").addEventListener("mousemove",
    function(event){
        if(event.shiftKey===true){
            console.log("x :"+event.clientX+"y :"+event.clientY);
        }  
    })
  });
