document.addEventListener("DOMContentLoaded",
function(event){
    // action listener
    document.querySelector("button").addEventListener("click",function(){        
        // Llama al servidor para obtener el nombre

        XajaxUtils.sendGetRequest("/data/name.txt",function(request){
            var name = request.responseText;
            document.querySelector ("#contenido").innerHTML = "<h2>Hello" + name +" !!!";
        });
       
    });
});
