window.onload = function (){
    let id;
    
    function iniciarCarrusel(){
        id = setInterval(desplazarCarrusel, 500);
    }
    function pararCarrusel(){
        clearInterval(id);
    }



    function desplazarCarrusel(){
        //recogemos el elemento contador por su nombre, al devolver un array
        //guardamos solo el primer (y unico) elemento del array 
        let cont = document.getElementsByName("cont")[0];
        //Creamos un array con los elemntos de la clase que creamos en el html
        let imagenes = document.getElementsByClassName("ej4");
        //Cambiamos el display del actual
        imagenes[cont.value].style.display = "none";
        //Miramos el index de la siguiente imagen usando el modulo de la longitud del array imagenes
        //con la actualización del contador y cambiamos el display de la imagen que toque
        cont.value = Number.parseInt(cont.value) + 1;
        //Nos aseguramos que el contador nunca sea negativo
        if(cont.value<0) cont.value = 4;
        else cont.value = (cont.value) % imagenes.length;

        imagenes[cont.value].style.display = "block"
    }
    window.iniciarCarrusel = iniciarCarrusel;
    window.pararCarrusel = pararCarrusel;
}