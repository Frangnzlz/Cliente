window.onload = function(){
    function eliminarElemento(buton){
        let elementos = document.querySelectorAll("#lista1 > il");

        if(elementos.length !=0){
            let numElementos = elementos.length;

            lista = elementos[0].parentNode
    
            lista.removeChild(elementos[numElementos-1]);
        }else{
            buton.disabled = true;
        }
    }

    window.eliminarElemento = eliminarElemento;
}