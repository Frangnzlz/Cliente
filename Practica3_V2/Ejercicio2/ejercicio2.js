window.onload = function(){
    
    function añadir(){
        let text = prompt("Introduce el texto para añadir")
        let elementosLista = document.querySelectorAll("ol li") 

        let opcionesInsertar = prompt('Introduce la opción:\n'+
                                        "+ : Se incluira al final de la lista\n" + 
                                        "* . Se incluira el primero de la lista\n"+
                                        "1, 2, 3, 4... : reemplaza el elemento\n" +
                                        "-n : Se elimina el elemento correspondiente");
            console.log(elementosLista.length)

        if(elementosLista.length <= 0){
            alert("No hay elementos en la lista")
        }else{
            let parent;
            let nuevoElemento;
            switch(true){  
                case opcionesInsertar == "+":
                    parent = elementosLista[0].parentNode;
                    nuevoElemento = document.createElement("li");
                    text = document.createTextNode(text);
                    nuevoElemento.append(text)
                    parent.appendChild(nuevoElemento);
                    break;
                case opcionesInsertar == "*":
                    parent = elementosLista[0].parentNode;
                    nuevoElemento = document.createElement("li");
                    text = document.createTextNode(text);
                    nuevoElemento.append(text)
                    parent.prepend(nuevoElemento);
                    break;
                case !isNaN(opcionesInsertar) && opcionesInsertar > 0 && opcionesInsertar < elementosLista.length:
                    parent = elementosLista[0].parentNode;
                    elementoElegido = elementosLista[opcionesInsertar-1];
                    nuevoElemento = document.createElement("li");
                    text = document.createTextNode(text);
                    nuevoElemento.append(text)
                    parent.replaceChild(nuevoElemento, elementoElegido);
                    break;
                case !isNaN(opcionesInsertar) && opcionesInsertar < 0 && Math.abs(opcionesInsertar) < elementosLista.length:
                    opcionesInsertar = Math.abs(opcionesInsertar);
                    parent = elementosLista[0].parentNode;
                    elementoElegido = elementosLista[opcionesInsertar-1];
                    parent.removeChild(elementoElegido);
                    break;
                default:
                    alert("No has introducido una opcion valida")
            }
        }
    }


    window.añadir = añadir
}