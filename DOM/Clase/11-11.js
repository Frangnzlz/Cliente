window.onload = function(){
    function cambiarTexto(parrafo){
        parrafo.innerText = prompt("Introduce el nuevo texto");
    }


    window.cambiarTexto = cambiarTexto;
}