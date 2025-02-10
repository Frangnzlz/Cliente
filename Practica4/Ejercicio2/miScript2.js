window.onload = function(){
    const añadir = document.querySelector("#addCheckbox");
    const leer = document.querySelector("#readCheckboxes");
    
    añadir.onclick = function(){
        let valorCheck = document.getElementById("checkboxLabel").value;
        document.getElementById("checkboxLabel").value = "";
        //Comprobamos que se haya escrito algo
        if(valorCheck.length != 0){
            let contenedor = document.getElementById("checkboxContainer")
            let nuevoCheck = document.createElement("input");
            nuevoCheck.setAttribute("type", "checkbox")
            nuevoCheck.setAttribute("name", "opciones")
            nuevoCheck.setAttribute("value",  valorCheck);
            contenedor.append(nuevoCheck);
            contenedor.append(document.createTextNode(valorCheck));
            contenedor.append(document.createElement("br"));
        }else{
            document.getElementById("checkboxLabel").setAttribute("placeholder", "Introduce algo");
        }
    }

    leer.onclick = function(){
        let textArea = document.getElementById("outputArea");
        let checked = document.querySelectorAll("#checkboxContainer input:checked");
        let textos = [];
        //Creamos un array de strings con los valores de las checkBox seleccionadas
        for(let i = 0; i < checked.length; i++){
            textos[i] = checked[i].value;
        }
        //Convertimos el array a auna cadena de caracteres
        textArea.value = textos.join(", ")
    }
}