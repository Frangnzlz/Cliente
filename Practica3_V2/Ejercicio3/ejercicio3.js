window.onload = function (){
    let imagenes = ["JS.png", "CSS.png", "HTML.png", "PHP.png", "Python.png"]



    //Metodo para generar la tabla
    function generarTabla(){
        let tabla = document.createElement("table");
        let numFila = crearValor(1, 10)
        let numColumnas = crearValor(1, 10)
        tabla.setAttribute("class", "tabla")

        for(let i = 1; i <= numFila; i++){
            let fila = document.createElement("tr");

            for(let j = 1; j <= numColumnas; j++){
                let columna = document.createElement("td")
                columna.append(document.createTextNode(`${i}`))
                columna.addEventListener("click", function(){
                    if(this.textContent != ""){
                        let seleccion = elegirImagen();
                        let imagen = document.createElement("img");
                        imagen.setAttribute("src", seleccion);
                        this.textContent = "";
                        this.append(imagen);
                    }else {
                        let imagen = this.firstElementChild
                        let srcImagen = imagen.getAttribute("src");
                        let index = imagenes.indexOf(srcImagen);
                        index = (index + 1) % imagenes.length;

                        imagen.setAttribute("src", imagenes[index])
                    }



                });
                fila.append(columna);
            }
            tabla.append(fila)

        }
        document.getElementById("solucion").append(tabla);

    }
    // Metodo para controlar el valor
    function crearValor(min, max){
        let num = 0;
        do{
            num = prompt(`Introduce un numero entre ${min} y  ${max}`)
        }while(num < min && num > max);
        return num;
    }

    //Metodo para poder seleccionar la imagen, devuelve un string con el src
    //devolvera JS.png por defecto 
    function elegirImagen(){
        let promptText = "Selecciona imagen a seleccionar\n";
        let seleccionada;

        for(let i = 0; i < imagenes.length; i++){
            promptText += `Imagen: ${imagenes[i]}\n`
        }

        seleccionada = prompt(promptText)

        if(imagenes.includes(seleccionada)){
            return seleccionada;

        }else{
            return imagenes[0];
        }

    }

    window.generarTabla = generarTabla;
}