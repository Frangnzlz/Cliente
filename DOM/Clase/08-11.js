window.onload = function(){

    function cambiarTexto(){
        let parrafo = document.getElementById("text");

        console.log(parrafo.innerHTML);
        parrafo.innerHTML = `<i>texto cambiado</i>`;
    }

    function copiarTexto(){
        let parrafo = document.getElementById("text2");
        let destino = document.getElementById("destino");


        destino.innerHTML = parrafo.innerHTML;

        console.log();
        parrafo.innerHTML = `<del> ${parrafo.innerHTML.slice(3,parrafo.innerHTML.length-4)} </del>`
    }

    function cambiarEstilo(){
        let parrafo = document.getElementById("cambiar");
        let estilo = document.getElementById("cambio");

        if(!estilo.checked){
            parrafo.className = "nuevoEstilo";
            estilo.checked = true;
        }else{
            parrafo.className = "estiloOriginal";
            estilo.checked = false;
        }

        
    }

    window.cambiarEstilo = cambiarEstilo;
    window.copiarTexto = copiarTexto;
    window.cambiarTexto = cambiarTexto;
}