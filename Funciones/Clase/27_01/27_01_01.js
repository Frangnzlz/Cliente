window.onload = function(){
    function hacerAlgo(){
        alert("algo");
    }

    document.querySelector("#boton").addEventListener("click", hacerAlgo);
    let parrafo =     document.querySelector("p");
    function resaltarTexto(){
        parrafo.style.color = "red";
        parrafo.style.fontWeight = "bold";
    }

    function restaurar(){
        parrafo.style.color = "black";
        parrafo.style.fontWeight = "normal";
    }
    parrafo.addEventListener("mouseover", resaltarTexto)
    parrafo.addEventListener("mouseout", restaurar)

    let lista = document.querySelectorAll("ul li");
    for(let i = 0; i < lista.length; i++){
        lista[i].onclick = cambiarColorLista;
    }

    function cambiarColorLista(evento){
        let elemento = evento.target;
        elemento.style.backgroundColor = "lightblue"
    }



    document.querySelector("div button").addEventListener("click", añadirTabla);

    function añadirTabla(){
        let capa = document.querySelector("#solucion");
        let fila = comprobarValor(0, 11);
        let columna = comprobarValor(0,11);
        let tabla = generarTabla(fila, columna);

        capa.appendChild(tabla)
    }

    function comprobarValor(min, max){
        let num;

        do {
            num = prompt(`Introduce un valor entre ${min+1} y ${max-1}`)
        } while (num <= min || num >= max || Number.isNaN(num));

        return num
    }


    function generarTabla(filas, columnas){
        let tabla = document.createElement("table");
        tabla.setAttribute("border", "1");
        tabla.setAttribute("class", "tabla");

        for(let i = 0; i < filas; i++){
            let fila = document.createElement("tr");
            for(let j = 0; j < columnas; j++){
                let columna = document.createElement("td");
                columna.addEventListener("click", function (){
                    cambiarColor(this);
                })
                let texto = document.createTextNode(`Fila ${i+1} Celda ${j+1}`);
                columna.appendChild(texto);
                fila.appendChild(columna);
            }
            tabla.appendChild(fila)
        }
        return tabla;
    }

    function cambiarColor(elemento){
        let color = getComputedStyle(elemento).backgroundColor
        let fontStyle = getComputedStyle(elemento).fontStyle
        let colores = ["rgba(0, 0, 0, 0)", "rgb(200, 0, 0)", "rgb(0, 200, 0)", "rgb(0, 0, 200)", "rgb(0, 255, 255"]

        let index = (colores.indexOf(color)+1) % colores.length;
        elemento.style.fontStyle =  fontStyle == "italic" ? "normal" : "italic";
        elemento.style.backgroundColor = colores[index];
        
    }

    let parrafo2 = document.querySelector("#texto2");

    parrafo2.addEventListener("mouseover", function(){
        parrafo2.style.color = "red";
        parrafo2.style.fontWeight = "bold";
    });
    parrafo2.addEventListener("mouseout", function(){
        parrafo2.style.color = "black";
        parrafo2.style.fontWeight = "normal";
    });


}