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

function ej9(){
    console.log(countBy());
}

function countBy(){
    let num = parseInt(prompt("Introduce el numero del que quieras saber los multiplos"));
    let tam = parseInt(prompt("Introduce el numero de multiplos que quieras saber"));
    let array = [];
    if(num<0 || tam<1){
        return array;
    }

    for(let i = 0; i < tam;i++){
        array.push((i+1)*num);
    }

    return array;
}