function ej15(){
    let tamaño
    do {
        tamaño = parseInt(prompt(`Introduce el tamaño de la matriz(Tiene que ser mayor que 2 y menor que 5)`));
    } while (tamaño <= 2 || tamaño >= 5);
    
    let matriz = [];
    let factor = 1;
    
    
    for(let i = 0; i < tamaño; i++){
        matriz[i] = [];
        for(let j = 0; j <tamaño;j++){
            matriz[i].push(factor*tamaño);
            factor++;
        }
    }
    console.log(matriz);

    for(let i = 0; i < matriz.length; i++){
        console.log(matriz[i].join(" "));
    }
    return matriz;
}


function ej16(){
    let matriz = ej15();

    let total = 0;

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            total += matriz[i][j];
        }
    }
    console.log(`El resultado de la suma de todos los elementos es ${total}`)
}



function ej17(){
    let tamaño
    do {
        tamaño = parseInt(prompt(`Introduce el tamaño de la matriz(Tiene que ser mayor que 2 y menor que 5)`));
    } while (tamaño <= 2 || tamaño >= 5);
    
    let matriz = [];
    let factor = 1;
       
    for(let i = 0; i < tamaño; i++){
        matriz[i] = [];
        for(let j = 0; j <tamaño;j++){
            matriz[i][j].push(random(1,21));
        }
    }

    

}


function random(min, max){
    return Math.floor(Math.random()*((max)-min) + min);
}


