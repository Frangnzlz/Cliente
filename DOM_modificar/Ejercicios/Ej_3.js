window.onload = function(){


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
                let texto = document.createTextNode(i+1);
                columna.appendChild(texto);
                columna.addEventListener("click", function(){
                    let style = window.getComputedStyle(columna)

                    if(style.backgroundColor == "rgb(0, 0, 255)"){
                        columna.style.backgroundColor = "rgb(255, 255, 255)";
                    }else{
                        columna.style.backgroundColor = "rgb(0, 0, 255)";
                    }


                })
                fila.appendChild(columna);
            }
            tabla.appendChild(fila)
        }
        return tabla;

    }


    window.añadirTabla = añadirTabla;
}