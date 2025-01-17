window.onload = function (){
    //contenedor
    let container = document.getElementById("container");

    //Primer parrafo
    let primerHijo = container.firstElementChild;
    let primerParrafo = primerHijo.nextElementSibling;
    console.log(primerParrafo.textContent);

    //segundo parrafo desde el primero
    let segundoParrafo = primerParrafo.nextElementSibling;
    console.log(segundoParrafo.textContent);

    //Ultimo parrafo desde el contenedor
    let tercerParrafo = container.lastElementChild;
    console.log(tercerParrafo.textContent);

    //Segundo parrafo desde el ultimo parrafo
    let retrocederHermano = tercerParrafo.previousElementSibling;
    console.log(retrocederHermano.textContent);

    //Contar numero de hijos del contender
    let listaHijos = container.childNodes;
    console.log(listaHijos.length)
    let numHijos = container.childElementCount;
    console.log(numHijos);

}