function ej11(){
    let frase = prompt("Introduce una frase")
    let array =[];

    array = frase.split(" ");

    array.reverse();

    array.unshift(prompt("Introduce una nueva palabra en el array"));

    listar(array, ", ");
}

function ej12(){
    let array1 = ["Ray","Andres", "Jose", "Dani"];
    let array2 = ["Miguel", "Dani", "Jose", "Ivan"];

    console.log(buscarDistintos(array1,array2))
}
function buscarDistintos(primerArray, segundoArray){
    var array1 = [];
    var array2 = [];
    let i = 0;
    
    while(i < primerArray.length || i < segundoArray.length){

        if(i < primerArray.length){
            if(!(buscarElemento(primerArray[i], segundoArray))){
                array1.push(primerArray[i]);
            }
        }
        if(i < segundoArray.length){
            if(!(buscarElemento(segundoArray[i], primerArray))){
                array2.push(segundoArray[i]);
            }
        }
        i++;
    }


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

    return array1.concat(array2);
}

function buscarElemento(elemento, array){
    for(let i = 0; i< array.length;i++){
        if(elemento == array[i]){
            return true
        }
    }
    return false;
}




