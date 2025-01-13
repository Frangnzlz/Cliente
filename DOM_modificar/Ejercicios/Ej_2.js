window.onload = function (){
    function añadir(buton){
        let capa = document.createElement("div");
        capa.className = "estilo2";

        let texto = document.querySelector(".estilo1 p").innerText;

        texto = document.createTextNode(texto);

        capa.appendChild(texto);

        document.body.insertBefore(capa, buton);
    }

    window.añadir = añadir
}