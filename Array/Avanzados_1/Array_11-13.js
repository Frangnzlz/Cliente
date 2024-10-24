function ej11(){
    let frase = prompt("Introduce una frase")
    let array =[];

    array = frase.split(" ");

    array.reverse();

    array.unshift(prompt("Introduce una nueva palabra en el array"));

    console.log(array.join(",")) ;
}

function ej12(){
    let array1 = [1, 2, 2, 1, 1,  3];
    let array2 = [4,5,11,3, 3, 2, 5, 6,12,6];





    console.log(buscarDistintos(array1,array2))
}
function buscarDistintos([...primerArray], [...segundoArray]){
   let array = primerArray.concat(segundoArray);
   
   
    // var array1 = [];
    // var array2 = [];
    // let i = 0;
    console.log(array)
    for (let i = 0; i < array.length; i++){
        let elemento = array[i];
        let bool = true;
        for(let j = i+1; j < array.length; j++){
            if(elemento == array[j]){
                array.splice(j, 1);
                j--;
                if(bool){
                    array.splice(i,1);
                    bool = false;
                    j--;
                    i--;
                }
            }
        }
    }

    // limpiarRepetidosArray(primerArray);
    // limpiarRepetidosArray(segundoArray);


    // while(i < primerArray.length || i < segundoArray.length){

    //     if(i < primerArray.length){
    //         if(!(buscarElemento(primerArray[i], segundoArray))){
    //             array1.push(primerArray[i]);
    //         }
    //     }
    //     if(i < segundoArray.length){
    //         if(!(buscarElemento(segundoArray[i], primerArray))){
    //             array2.push(segundoArray[i]);
    //         }
    //     }
    //     i++;
    // }


    // for(let i = 0; i < primerArray.length; i++){
    //     if(!(buscarElemento(primerArray[i], segundoArray))){
    //         array1.push(primerArray[i]);
    //     }

    // }

    // for(let i = 0; i < segundoArray.length; i++){
    //     if(!(buscarElemento(segundoArray[i], primerArray))){
    //         array1.push(segundoArray[i]);
    //     }

    // }

    return array;
}

function limpiarRepetidosArray(array){
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length;j++ ){
            if(array[i] == array[j]){
                eliminarElemento(array, array[i]);
            }
        }
    }
}
function eliminarElemento(array, elemento){
    for(let j = 0; j < array.length;j++ ){
        if(elemento == array[j]){
            array.splice(j, 1);
            j--;
        }
    }
}

function buscarElemento(elemento, array){
    for(let i = 0; i< array.length;i++){
        if(elemento == array[i]){
            return true
        }
    }
    return false;
}

function ej13(){
    let puntuaciones = [56, 74, 23, 89, 95, 12, 67, 88, 45, 33, 76];
    console.log(puntuaciones);


    for(let i = 0; i < 3; i++){
        eliminarMenor(puntuaciones);
    }
    console.log(puntuaciones);

    for(let i = 1; i <= 3; i++){
        let number = parseInt(prompt(`añade una puntuación en la posisción ${i*2}`));
        if (Number.isNaN(number)){
            alert("No has introducido un numero");
            i--;
        }else{
            puntuaciones.splice(i*2, 0, number);
        }

    }
    console.log(puntuaciones);

    while(true){
        let numEliminados = parseInt(prompt(`Cuantos elementos quieres eliminar`));
        let posicion = parseInt(prompt(`Desde que posición`));

        if(Number.isNaN(numEliminados) || Number.isNaN(posicion)){
            alert("Uno de los numeros introducidos no es un numero");
        }else{
            puntuaciones.splice(posicion, numEliminados);
            break;
        }
    }

    console.log(puntuaciones);




}
function eliminarMenor(puntuaciones){
    let min = Number.MAX_SAFE_INTEGER
    let index;
    for(let i = 0; i < puntuaciones.length; i++){
        if(puntuaciones[i] < min){
            min = puntuaciones[i];
            index = i;
        }
    }
    return puntuaciones.splice(index, 1);
}



