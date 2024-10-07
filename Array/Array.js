var arra = new Array(5);
var cont = 0;



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
        arra = new Array(5);
        cont = 0
        document.getElementById("num").innerText = `${cont+1}`;
    }
}

function mayor(){
    arra.sort();
    document.getElementById("result").innerText = `El mayor numero dentro del array es ${arra[arra.length-1]}`;

}

function esPar(){
    
}