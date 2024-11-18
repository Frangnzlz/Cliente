window.onload = function(){
    function cambiarColor(bton){
        document.body.style.backgroundColor = bton.value;
    }
    window.cambiarColor = cambiarColor;

    function cambiarCelda(celda){
        if(celda.style.backgroundColor == "black"){
            celda.style.backgroundColor = "white";
        }else{
            celda.style.backgroundColor = "black";
        }
    }
    window.cambiarCelda = cambiarCelda;


    function cambiarCelda2(celda){
        let colores = ["white", "green", "black", "red"];
        
        let num = comprobarColor(celda.style.backgroundColor, colores) ;
        celda.style.backgroundColor = colores[(num +1) %  colores.length];

    }

    function comprobarColor(color, lista){
        for(let i = 0; i < lista.length; i++){
            if(color == lista[i]){
                return i
            }
        }
        return 0;
    }


    window.cambiarCelda2 = cambiarCelda2;

    function cambiarImagen(imagen){
        imagen.src = "imagen/2.jpg";
    }
    function devolverImagen(imagen){
        imagen.src = "imagen/1.jpg";
    }

    window.cambiarImagen = cambiarImagen;
    window.devolverImagen = devolverImagen;


}