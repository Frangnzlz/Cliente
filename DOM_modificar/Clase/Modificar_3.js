window.onload = function (){
    function eliminarFila(){
        // let fila = document.querySelectorAll("tr+tr");
        let fila = document.querySelector("tr+tr");

        console.log(fila);
        if(fila){
            let padre = fila.parentNode

            padre.removeChild(fila)
        }
    }


    window.eliminarFila = eliminarFila;
}