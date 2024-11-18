window.onload = function(){
    function cambiarColor(parrafo){
        
        
        if(parrafo.style.color == "blue"){
            parrafo.style.color = "black"
        }else{
            parrafo.style.color = "blue"
        }
    }
    window.cambiarColor = cambiarColor;

    document.getElementById("a").style.backgroundColor = "aqua"
    document.getElementById("b").style.backgroundColor = "yellow"
    document.getElementById("c").style.backgroundColor = "blueviolet"
    function cambiarFondo(color){
        console.log(color.style.backgroundColor)
        document.body.style.backgroundColor = color.style.backgroundColor;
    }
    function devolverFondo(){
        document.body.style.backgroundColor = "white";
    }

    window.cambiarFondo = cambiarFondo;
    window.devolverFondo = devolverFondo;

    function mostrarDiv(){
        document.getElementById("B").style.visibility = "visible"
        document.getElementById("B").style.display = "block"
        
    }
    window.mostrarDiv = mostrarDiv;

    function desplazar(buton, id){
        let otroBoton = document.getElementById(id);
        let imagen = document.getElementById("imagen");
        let tamaño = window.innerWidth;
        let imagenPosicion = Number.parseInt(imagen.style.left.slice(0, imagen.style.left.length-2));
        
        console.log(imagenPosicion);
        console.log(window.innerWidth);
        console.log(imagen.width)

        if(buton.id == "izquierda" ){

            if(imagenPosicion <= tamaño){ 
                otroBoton.disabled = false;
            }
            if(imagenPosicion <=0){ 
                buton.disabled = true;
            }else{
                let desplazamiento = imagenPosicion - Number.parseInt(buton.value)
                imagen.style.left =  desplazamiento + "px";            
            }
        }else{
            if(imagenPosicion >=0){ 
                otroBoton.disabled = false;
            }
            if(imagenPosicion >= tamaño-imagen.width){ 
                buton.disabled = true;
            }else{
                let desplazamiento = imagenPosicion + Number.parseInt(buton.value)
                imagen.style.left =  desplazamiento + "px";
            }
        }

    }
    function devolverImagen(){
        let imagen = document.getElementById("imagen");
        imagen.style.left = "0px";
    }
    window.devolverImagen = devolverImagen
    window.desplazar = desplazar

    function mostrar(){
        document.getElementById("spoiler").hidden = false
        document.getElementById("mostrar").hidden = true
        document.getElementById("ocultar").hidden = false
        
    }
    function ocultar(){
        document.getElementById("spoiler").hidden = true
        document.getElementById("mostrar").hidden = false
        document.getElementById("ocultar").hidden = true
        
    }
    window.ocultar = ocultar;
    window.mostrar = mostrar;
    
    
    console.log(document.baseURI)
}