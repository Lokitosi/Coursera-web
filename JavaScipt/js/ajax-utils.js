(function (global) {

    //Dar el nombre al namespace
    var ajaxUtils = {};

    //Regresa una peticion https objeto
    function getRequestObject() {
        if (window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        }
        else if (window.ActiveXObject) {
            // Peticion para navegadores muy antiguos
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        } else {
            global.alert("no se soporta ajax");
            return (null);
        }
    }

    // Hace una peticion GET usando AJAX
    ajaxUtils.sendGetRequest =
        function (requestUrl, responseHandler) {
            var request = getRequestObject();
            request.onreadystatechange =
                function () {
                    handleResponse(request, responseHandler);
                };
            request.open("GET", requestUrl, true);// si fuera false seria peticion sincrona
            request.send(null); // para el metodo POST
        };

    /*Only Calls User Provided 'responseHandler'
     function if response is ready
     and not a error*/

    function handleResponse(request, responseHandler) {
        if ((request.readyState == 4) && (request.status == 200)) {
            responseHandler(request);
        }
    }

    //Expose Utility to the global object
    global.XajaxUtils = ajaxUtils;

})(window);