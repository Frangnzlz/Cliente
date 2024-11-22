function Ejercicio1(){
    let metros = 0;
    do{
        metros = parseInt(prompt(`Introduce la cantidad de metros a convertir. Debe ser mayor a cero`))
        if(Number.isNaN(metros)){
            alert(`Debes introducir un numero`)
        }
    }while(Number.isNaN(metros) || metros < 0);

    kilometros = metros /1000;

    alert(`${metros} metros equivalen a ${kilometros} kilómetros`)

}

function Ejercicio2(){
    let num = 0;
    let i = 0;
    //Inicalización y declaración de los contadores de los distintos rangos numerícos
    //El men indica que es menor que el numero encontrado inmediatamente a la derecha o igual al mismo
    //El may indica que es mayor que el numero encontrado inmediatamente a la derecha o igual al mismo
    let men9 = 0;
    let may10men20 = 0;
    let may21men30 = 0;
    let may31 = 0;
    while(i < 10){
        num = parseInt(prompt(`Introduce el numero ${i+1} de 10. Debera ser un entero`))
        //Estrucutura switch como condicional
        switch (true) {
            //Si alguna de las comparaciones es verdadera aumentara en 1 el rango del contador
            //En caso contrario sera que no se ha introducido un numero
            case num < 10:
                men9++;
                i++;
                break;
            case num >= 10 && num <= 20:
                may10men20++;
                i++;
                break;
            case num >= 21 && num <= 30:
                may21men30++;
                i++;
                break;
            case num > 30:
                may31++;
                i++;
                break;
            default:
                alert(`No has introducido un numero`)
                break;
        }
    }

    alert(`Menores de 10: ${men9}. Entre 10 y 20: ${may10men20}. Entre 21 y 30: ${may21men30}. Mayores de 30: ${may31}`);
}

function Ejercicio3(){
    let num = 0;
    let i = 0;
    let array = []


    //Apartado A
    let suma = 0;
    do{
        num = parseInt(prompt(`Introduce un numero entero positivo. ${i+1}/7`))
        if(!Number.isNaN(num) && num > 0){
            array[i] = num;
            suma += num;
            i++;
        }

    }while(i < 7);
    console.log(array.join(","))
    console.log(`La suma de sus elementos es: ${suma}`)
    //Apartado B
    let inicio = true
    //Bucle para cambiar el elemento del inicio, como el elemento del final
    do{
        num = parseInt(prompt(`Introduce un numero entero positivo para el ${inicio ? "inicio" : "final"} del array.`))
        if(!Number.isNaN(num) && num > 0){
            if(inicio){
                inicio = false;
                array.shift();
                array.unshift(num);
            }else{
                array.pop();
                array.push(num);
                //Forma de romper el bucle para asegurarnos que ambos numeros han sido correctamente cambiados
                break;
            }   
        }

    }while(true);
    console.log(array.join(","))
    //Apartado C
    suma = 0;
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }
    let media = suma/array.length;
    //Apartado D
    //Arrays para introducir los mayores y los menores
    let arrayMenores = [];
    let arrayMayores = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] < media){
            arrayMenores.push(array[i]);
        }else if(array[i] > media){
            arrayMayores.push(array[i])
        }
    }
    console.log(`Numeros Mayores Media: ${arrayMayores.join(",")}`)
    console.log(`Numeros Menores Media: ${arrayMenores.join(",")}`)
    //Apartado E
    //Array para introducir las posiciones donde se encuentre el numero
    let iguales = [];
    let buscar = 0;
    //Bucle para confirmar que es un numero positivo
    do{
        buscar = parseInt(prompt(`Introduce un numero entero positivo para buscarlo en el array.`))

    }while(Number.isNaN(buscar) || buscar < 0);
    for(let i = 0; i < array.length;i++){
        if(buscar == array[i]){
            iguales.push(i);
        }
    }
    if(iguales.length == 0){
        console.log(`El numero ${buscar} no se encuentra`)
    }else{
        console.log(`El numero ${buscar} aparece en las posiciones: ${iguales.join(",")}`)
    }


}







function Ejercicio4(){
    let tamaño
    do {
        tamaño = parseInt(prompt(`Introduce el tamaño de la matriz(Tiene que ser mayor que 2 y menor que 5)`));
    } while (tamaño < 2 || tamaño > 5);
    let matriz = [];
    //Apartadao A
    for(let i = 0; i < tamaño; i++){
        matriz[i] = [];
        for(let j = 0; j <tamaño;j++){
            matriz[i].push(random(1, 100));
        }
    }
    //Apartado B
    mostarArray(matriz);
    //Apartado C
    let sumatorio = 0;
    for(let i = 0; i < matriz.length;i++){
        for(let j = 0; j < matriz[i].length; j++){
            sumatorio += matriz[i][j];
        }
    }
    console.log(`Suma ${sumatorio}`)
    //Apartado D
    let matrizCopia = [];
    for(let i = 0; i < matriz.length; i++){
        matrizCopia[i] = [];
        for(let j = 0; j <matriz[i].length;j++){
            matrizCopia[i][j] = matriz[i][j] <= 50 ? 50 : matriz[i][j];
        }
    }
    mostarArray(matrizCopia);
    //Apartado D
    let diagonalMatriz = 0;
    let diagonalCopia = 0;
    for(let i = 0; i < matriz.length; i++){
        diagonalMatriz += matriz[i][i];
        diagonalCopia += matrizCopia[i][i];
    }
    //switch como estructura condicional
    switch (true) {
        //En caso de que algunas de las comparaciones es verdaderar imprimira un texto por consola
        //Si no es así, indicara que ambas diagonales son iguales
        case diagonalMatriz < diagonalCopia:
            console.log(`La copia de la matriz tiene una diagonal mayor`)
            break;
        case diagonalMatriz > diagonalCopia:
            console.log(`La matriz tiene una diagonal mayor`)
            break;
        default:
            console.log(`Ambas diagonales son iguales`)
            break;
    }

}



//Funcion para generar numeros aleatorios
//el primer parametro indica el minimo, se encuentra includio
//el segundo parametro indica el maximo, no se encuentra incluido
function random(min, max){
    return Math.floor(Math.random()*(max-min) + min);
}

//Funcion para mostrar un Array en consola que se pase como parametro
function mostarArray(matriz){
    let txt = "";
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz.length; j++){
            if(matriz[i][j] < 10){
                txt += "0" + matriz[i][j] + " ";
            }else{
                txt += matriz[i][j] + " ";
            }    
        }  
        txt += "\n";
    }
    console.log(txt);
}