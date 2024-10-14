function ej8() {
    let array = new Array();
    do{
        let num = parseInt(prompt("Introduce un numero en el array"));

        Number.isNaN(num)? alert("No ha introducido un numero") : array.push(num);

    }while(confirm("Seguir introduciendo numeros"))

    console.log(sumaParcial(array));
}

function sumaParcial(array){
    let resultArray = new Array();
    let result = 0;

    for(let i = 0; i < array.length;i++){
        result += array[i];
        resultArray.push(result);
    }

    return resultArray;

}