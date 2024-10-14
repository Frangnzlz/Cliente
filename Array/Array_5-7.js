function ej5(){
    let array = new Array();
    let cont = 0;
    let pares = 0;
    let impares = 0;
    let num;
    let numeros = "";
    do {
        num = parseInt(prompt(`El numero del espacio ${cont + 1}`));
        array[cont] = num;
        cont++;
        
    } while (!(Number.isNaN(num) || num == 0));    

    for(let i = 0; i < array.length - 1; i++){
        numeros += `${array[i]} `
        if(array[i] % 2 == 0){
            pares++;
        }else{
            impares++;
        }
    }

    console.log(`El array con los elementos ${numeros}tiene ${pares} numeros pares y ${impares} numeros impares`)

}

function ej6(){
    let array = new Array();
    let letra = prompt("Introduce la letra que quieras buscar en el array");
    let i = 0;
    
    do{
        array[i] = prompt("Introduce una letra dentro del array");
        i++;
    }while(confirm("¿Quieres continuar metiendo letras en el array?"))

    if(buscarLetra(letra, array)){
        console.log(`La letra ${letra} se encuentra en el array`)
    }else if(letra.length ==1){
        console.log(`La letra ${letra}  no se encuentra en el array`)
    }else{
        console.warn(`${letra} no es una letra`)
    }

}
function buscarLetra( letra , array){
        for(let i = 0; i < array.length; i++){
            if(array[i] == letra){
                return true;
            }
        }
        return false;
}


function ej7(){
    let array = new Array();

    do {
        let elemento = prompt("Introduce un elemento al array");
        array.push(elemento);    
    } while (confirm("Introducir un elemento al array"));

    listar(array);
}
function listar(miArray) {
    let lista = "";
    for(let i = 0; i < miArray.length; i++){
        lista += i< miArray.length-1 ? `${miArray[i]}-` :miArray[i]; 
    }
    console.log(lista);

}