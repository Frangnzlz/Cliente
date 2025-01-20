window.onload = function(){
    let lista = document.querySelector(".divLista ul");

    function agregar(){
        let pagina = prompt("introduce el enlace a la pagina");

        let elementoLista = document.createElement("li");
        let enlace = document.createElement("a");
        let texto = document.createTextNode(pagina)
        enlace.setAttribute("href", "http://" + pagina);
        enlace.setAttribute("target", "_blank");

        enlace.appendChild(texto);

        elementoLista.appendChild(enlace);
        lista.appendChild(elementoLista)
    }

    function borrar(){
        lista.innerHTML = "";
    }

    window.agregar = agregar;
    window.borrar = borrar;
}