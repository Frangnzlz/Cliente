window.onload = function(){

    function eliminarEntrada(){
        let elementos = document.querySelectorAll("form p")

        if(elementos.length > 0){
            let ultimoElemento = elementos.length-1;
            let padre = elementos[ultimoElemento].parentNode

            padre.removeChild(elementos[ultimoElemento]);
        }
    }

    window.eliminarEntrada = eliminarEntrada;
}