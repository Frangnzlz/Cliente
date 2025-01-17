window.onload = function(){
    window.reemplazar = reemplazar;

    function reemplazar(){
        let liNuevo =document.createElement("li");
        let textoNuevo = document.createTextNode("Tarea sustituta"); 
        liNuevo.appendChild(textoNuevo);

        let liViejo = document.querySelectorAll("ul li");
        let ultimoViejo = liViejo[liViejo.length -1];


        let padre = ultimoViejo.parentNode;

        padre.replaceChild(liNuevo, ultimoViejo);

    }


}