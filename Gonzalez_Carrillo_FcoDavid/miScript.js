window.onload = function(){
    function actualizarEnlace(){
        //Llamamos a una clase que creamos en el html para todos los enlaces
        let enlaces = document.getElementsByClassName("enlace");
        //iteramos el array resultante
        for(let i = 0; i < enlaces.length; i++){
            //Cambiamos el atributo href por el nombre que queramos con la extension html
            enlaces[i].setAttribute("href",`${enlaces[i].id}.html`);
            console.log(enlaces[i].getAttribute("href"));

        }
    }

    function resaltarServicios(){
        let enlace = document.getElementById("servicios");

        if(enlace.style.color == "red"){
            enlace.style.color = "blue";
            enlace.style.backgroundColor = "white"
        }else{
            enlace.style.color = "red";
            enlace.style.backgroundColor = "yellow"
        }
    }
    function cambiarClaseParrafo(){
        //recogemos todos los parrafos por su clase en un array
        let parrafos = document.getElementsByClassName("parrafo");
        //iteramos el array para cambiar la clase de cada uno de los parrafos devueltos
        //Al cambiar de clase en cada iteracion los elementos de la clase parrafo
        //iran disminuiendo hasta quedarse sin poder iterar, por lo que no necesitamos variar el iterador
        //para aplicarlo a todos los elementos de clase parrafo 
        for(let i = 0; i < parrafos.length;){
            parrafos[i].className = "estilo1";
        }
    }
    function cambiarClase(){
        let parrafo = document.getElementById("parrafo");
        if(parrafo.className == "estilo1"){
            parrafo.className = "estilo2";
        }else{
            parrafo.className = "estilo1";
        }
    }
    
    function cambiarColor(){
        let parrafo = document.getElementById("parrafo");
        //Uso el nombre de la clase para operar, porque no devuelve ningun valor en la primera pulsación
        //haciendo que solo entre en el else y nunca en el if aun cuando deberia ir en el if
        console.log(parrafo.style.color);
        if(parrafo.className == "estilo2"){
            parrafo.style.color = "green";
        }else if(parrafo.className == "estilo1"){
            parrafo.style.color = "red";
        }
    }

    function cambiarCelda(celda){
        let lista = ["Marcado", "Pendiente", "Completado"];
        //guardamos el index en el que se encuentre el texto de la celda
        let index = lista.indexOf(celda.innerText); 
        //Le sumamos 1 al index y realizamos el modulo por la longitud de la lista para que siempre de
        // un numero entre 0 y longitud -1
        celda.innerText = lista[(index + 1) % lista.length];
            
    }


    function desplazarCarrusel(buton){
        //recogemos el elemento contador por su nombre, al devolver un array
        //guardamos solo el primer (y unico) elemento del array 
        let cont = document.getElementsByName("cont")[0];
        //Creamos un array con los elemntos de la clase que creamos en el html
        let imagenes = document.getElementsByClassName("ej4");
        //Cambiamos el display del actual
        imagenes[cont.value].style.display = "none";
        //Miramos el index de la siguiente imagen usando el modulo de la longitud del array imagenes
        //con la actualización del contador y cambiamos el display de la imagen que toque
        cont.value = Number.parseInt(cont.value) + Number.parseInt(buton.value)
        //Nos aseguramos que el contador nunca sea negativo
        if(cont.value<0) cont.value = 4;
        else cont.value = (cont.value) % imagenes.length;

        imagenes[cont.value].style.display = "block"

    }
    cambiarClaseParrafo();
    window.desplazarCarrusel = desplazarCarrusel
    window.cambiarCelda = cambiarCelda;
    window.cambiarClase = cambiarClase;
    window.cambiarColor = cambiarColor;
    window.resaltarServicios = resaltarServicios;
    window.actualizarEnlace = actualizarEnlace;
}