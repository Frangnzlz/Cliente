window.onload = function(){
    let select = document.getElementById("imageSelect");
    let contenedor = document.getElementById("imageContainer");
    let radio = document.getElementsByName("imageOption");
    let options = document.getElementsByTagName("option")
    select.onchange = function(){
        let imagen = this.value
        let primerHijo = contenedor.firstElementChild
        //Commprobamos si es la opción vacia o no
        if(imagen.length == ""){
            let parrafo = document.createElement("p")
            parrafo.append(document.createTextNode("No se ha seleccionado ninguna imagen"));
            //Remplazamos al primerHijo por el nuevo parrafo
            contenedor.replaceChild(parrafo, primerHijo)
        }else{
            //Creamos la imagen y la remplazamos por el primer hijo anterior
            let img = document.createElement("img");
            img.setAttribute("src", imagen);
            
            contenedor.replaceChild(img, primerHijo);
        }
        for(let i = 0; i < radio.length;i++){
            //Comprobamos que radioButton en la lista contiene el mismo valor que la opcion seleccionada
            radio[i].checked  = radio[i].value == imagen;
        }
    }

    for(let i = 0; i < radio.length; i++){
        radio[i].onclick= function(){
            let primerHijo = contenedor.firstElementChild

            let img = document.createElement("img");
            img.setAttribute("src", this.value);

            for(let i = 0; i < options.length;i++){
                //Comprobamos que opcion en la lista contiene el mismo valor que radioButton seleccionado
                options[i].selected =  this.value == options[i].value;
            }

            contenedor.replaceChild(img, primerHijo);
        }
    }
}