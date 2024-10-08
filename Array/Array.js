var arra = new Array();
var cont = 0;


function reiniciar(){
    document.getElementById("intr").value = "";
    arra = new Array();
    cont = 0
    document.getElementById("num").innerText = `${cont+1}`;
}

function relArray() {
    let num = parseInt(document.getElementById("intr").value);
    document.getElementById("intr").value = "";

    if(!Number.isNaN(num)){
        arra[cont]= num;

        cont++;
        document.getElementById("num").innerText = `${cont+1}`;
    }else{
        document.getElementById("result").innerText = 'No has introducido un numero';
    }


}

function calSuma(){
    if(cont == 0){
        document.getElementById("result").innerText = "No hay ningun número";
    }else{
        let sum = 0;
        for (let i = 0; i < cont; i++) {
            sum += arra[i];
        }
        document.getElementById("result").innerText = `La suma de los ${cont} numeros del array es ${sum} `;

    }
    document.getElementById("intr").value = "";

}

function mayor(){
    arra.sort();
    document.getElementById("result").innerText = `El mayor numero dentro del array es ${arra[arra.length-1]}`;

    document.getElementById("intr").value = "";

}
function mostrarPar(){

    document.getElementById("result").innerText = esPar()
    ? 'Todos los elementos son pares'
    : 'No todos los elementos son pares';
    document.getElementById("intr").value = "";

}


function esPar(){
    for(let i = 0; i < arra.length; i++){
        if(arra[i] % 2 != 0){
            return false;
        }
    }
    return true;
}


function contar(){
    let cont = 0;
    let busc = parseInt(document.getElementById("intr").value);

    for(let i = 0; i < arra.length; i++){
        if(arra[i] == busc){
            cont++;
        }
    }
    document.getElementById("result").innerText = Number.isNaN(busc)
    ? "No has introducido un numero" 
    : cont === 0
    ? 'No se ha encontrado ese numero'
    : `Ese numero se ha encontrado ${cont} veces en el array`;
    document.getElementById("intr").value = "";

}