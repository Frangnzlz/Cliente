function ej11(){
    let frase = prompt("Introduce una frase")
    let array =[];

    console.log(frase.split(" "))

    array = frase.split(" ");

    array.reverse();

    array.unshift(prompt("Introduce una nueva palabra en el array"));

    listar(array, ", ");
}

