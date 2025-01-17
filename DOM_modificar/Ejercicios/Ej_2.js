window.onload = function (){
    function añadir(){
        let padre = document.querySelector(".generar");
        let capa = document.createElement("div");
        capa.className = "estilo2";

        let texto = document.querySelector(".estilo1 p").innerText;

        texto = document.createTextNode(texto);

        capa.appendChild(texto);

        padre.appendChild(capa);
        document.querySelector("#nuevo").disabled = false
    }

    function borrarViejo(boton){
        boton.disabled = true;
        document.querySelector("#sustituir").disabled = true
        document.querySelector("#añadir").disabled = true

        let p = document.querySelector(".estilo1");
        let padre = p.parentNode

        padre.removeChild(p);

    }

    function borrarNuevos(boton){
        let nuevos = document.querySelector(".generar")
        
        while(nuevos.firstChild){
            nuevos.removeChild(nuevos.firstChild);
        }
        boton.disabled = true
    }
    function sustituirViejo(){
        let capa = document.querySelector(".estilo1");
        let parrafo = capa.firstElementChild;
        let tabla = generarTabla(2,2);

        capa.replaceChild(tabla, parrafo);
        document.querySelector("#añadir").disabled = true

    }

    function generarTabla(filas, columnas){
        let tabla = document.createElement("table");
        tabla.setAttribute("border", "1");

        for(let i = 0; i < filas; i++){
            let fila = document.createElement("tr");
            for(let j = 0; j < columnas; j++){
                let columna = document.createElement("td");
                let texto = document.createTextNode(j);
                columna.appendChild(texto);
                fila.appendChild(columna);
            }
            tabla.appendChild(fila)
        }
        return tabla;

    }

    window.añadir = añadir
    window.borrarViejo = borrarViejo;
    window.borrarNuevos = borrarNuevos;
    window.sustituirViejo = sustituirViejo;
}