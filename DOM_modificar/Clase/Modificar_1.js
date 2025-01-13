window.onload = function (){
    function eliminarParrafo(){
        // Obtener referencia del nodo a eliminar
        let parrafo = document.getElementById("texto");

        // parrafo.remove();
        
        // Referencia del padre
        let padre = parrafo.parentNode;

        //Eliminamos el elemento
        padre.removeChild(parrafo);
    }

    window.eliminarParrafo = eliminarParrafo;
}