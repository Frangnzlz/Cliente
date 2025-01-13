window.onload = function (){
    function añadir(){
        let lista = document.querySelector("ul");

        let texto = prompt("Introduce una cadena de texto");

        texto = document.createTextNode(texto);

        let nuevo = document.createElement("li")

        nuevo.appendChild(texto);
        lista.appendChild(nuevo);

    }
    window.añadir = añadir;
}