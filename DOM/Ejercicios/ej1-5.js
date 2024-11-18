window.onload = function(){

    function verEnlace(){
        alert(document.getElementById("enlace").href);
    }
    
    function cambiarEnlace(){
        document.getElementById("enlace").href = "https://www.youtube.com/";
        document.getElementById("cambiar").innerText = "He cambiado";
    
    }
    window.verEnlace = verEnlace;
    window.cambiarEnlace = cambiarEnlace;

    function cambiarTamaño(){
        let tabla = document.getElementById("tabla");

        alert(`La tabla tiene ${tabla.width} de ancho por ${tabla.height} de alto`)
        let ancho = tabla.width;
        let alto = tabla.height;

        if(confirm("¿Quieres cambiar el ancho de la tabla?")){
            do{
                ancho = parseInt(prompt("Introduce el nuevo ancho de la tabla"))
            }while(Number.isNaN(ancho) || ancho < 0);
        }

        if(confirm("¿Quieres cambiar el alto de la tabla?")){
            do{
                alto = parseInt(prompt("Introduce el nuevo alto de la tabla"))
            }while(Number.isNaN(alto) || alto < 0);
        }

        tabla.width = ancho;
        tabla.height = alto;
        alert(`La tabla tiene ${tabla.width} de ancho por ${tabla.height} de alto`)
    }

    function cambiarBorde(){
        let tabla = document.getElementById("tabla");

        alert(`El border de la tabla es ${tabla.border}`);
        let borde = tabla.border;

        if(confirm("¿Quieres cambiar el borde de la tabla?")){
            do{
                borde = parseInt(prompt("Introduce el nuevo ancho de la tabla"))
            }while(Number.isNaN(borde) || borde < 0);
        }

        tabla.border = borde;
    }
    let cont = 0;
    function cambiarAlineacion(){
        let tabla = document.getElementById("tabla");
        cont++;
        switch(cont % 3){
            case 0:
               tabla.align = "center";
               break;
            case 1:
                tabla.align = "right";
                break
            case 2:
                tabla.align = "left";
                break;
        }
    }

    window.cambiarAlineacion = cambiarAlineacion;
    window.cambiarTamaño = cambiarTamaño;
    window.cambiarBorde = cambiarBorde;

    function incrementar(){
        let numero = document.getElementById("ej3");

        numero.innerText++;
    }
    function decrecer(){
        let numero = document.getElementById("ej3");

        numero.innerText--;
    }
    window.incrementar = incrementar;
    window.decrecer = decrecer;

    let img = 0;
    function siguiente(){

        img++;
        switch(img){
            case 0:
                document.getElementById("imagen").setAttribute("src", "imagen/1.jpg");
                document.getElementById("anterior").disabled = true;
                break;
            case 1:
                document.getElementById("imagen").setAttribute("src", "imagen/2.jpg");
                document.getElementById("anterior").disabled = false;
                break;
            case 2:
                document.getElementById("imagen").setAttribute("src", "imagen/3.jpg");
                break;
            case 3:
                document.getElementById("imagen").setAttribute("src", "imagen/4.jpg");
                document.getElementById("siguiente").disabled = false;
                break;
            case 4:
                document.getElementById("imagen").setAttribute("src", "imagen/5.jpg");
                document.getElementById("siguiente").disabled = true;
        }


    }
    function anterior(){

        img--;
        switch(img){
            case 0:
                document.getElementById("imagen").setAttribute("src", "imagen/1.jpg");
                document.getElementById("anterior").disabled = true;
                break;
            case 1:
                document.getElementById("imagen").setAttribute("src", "imagen/2.jpg");
                document.getElementById("anterior").disabled = false;
                break;
            case 2:
                document.getElementById("imagen").setAttribute("src", "imagen/3.jpg");
                break;
            case 3:
                document.getElementById("imagen").setAttribute("src", "imagen/4.jpg");
                document.getElementById("siguiente").disabled = false;
                break;
            case 4:
                document.getElementById("imagen").setAttribute("src", "imagen/5.jpg");
                document.getElementById("siguiente").disabled = true;
        }


    }

    function galeria(bton){

        if(bton.value == 0){
            img--;
        }else{
            img++;
        }
        switch(img % 5){
            case 0:
                document.getElementById("imagen").setAttribute("src", "imagen/1.jpg");
                document.getElementById("anterior").disabled = true;
                break;
            case 1:
                document.getElementById("imagen").setAttribute("src", "imagen/2.jpg");
                document.getElementById("anterior").disabled = false;
                break;
            case 2:
                document.getElementById("imagen").setAttribute("src", "imagen/3.jpg");
                break;
            case 3:
                document.getElementById("imagen").setAttribute("src", "imagen/4.jpg");
                document.getElementById("siguiente").disabled = false;
                break;
            case 4:
                document.getElementById("imagen").setAttribute("src", "imagen/5.jpg");
                document.getElementById("siguiente").disabled = true;
        }


    }
    window.galeria = galeria;
    window.siguiente = siguiente;
    window.anterior = anterior;

    function cambiarClase(parrafo){
        if(parrafo.className == "uno"){
            parrafo.className = "dos";
        }else{
            parrafo.className = "uno";
        }
    }
    window.cambiarClase = cambiarClase;

}