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

    mostrarMatriz(matriz);
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
    } while (tamaño < 2 || tamaño > 5);
    
    let primerMatriz = [];
       
    for(let i = 0; i < tamaño; i++){
        primerMatriz[i] = [];
        for(let j = 0; j <tamaño;j++){
            primerMatriz[i].push(random(1,21));
        }
    }
    console.log("primera matriz");
    mostrarMatriz(primerMatriz)
    let segundaMatriz = [];
    
    for(let i = 0; i < primerMatriz.length; i++){
        segundaMatriz[i] = [];
        for(let j = 0; j <primerMatriz[i].length;j++){
            segundaMatriz[i].push(primerMatriz[j][i]);
        }
    }
    console.log("segunda matriz");
    mostrarMatriz(segundaMatriz);

}


function random(min, max){
    return Math.floor(Math.random()*(max-min) + min);
}

function mostrarMatriz(matriz) {
    let txt = ""
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
