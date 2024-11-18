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
        document.body.style.backgroundColor = color.style.backgroundColor;
    }
    function devolverFondo(){
        document.body.style.backgroundColor = "white";
    }

    window.cambiarFondo = cambiarFondo;
    window.devolverFondo = devolverFondo;
}