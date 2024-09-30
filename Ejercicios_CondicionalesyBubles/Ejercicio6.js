do {
    var num = parseInt(prompt("Introduce un numero positivo" , ""));
} while (num < 0);

var sumPotencia = 0;
var divisores = "";
for (let index = 1; index <= num; index++) {
    if(num % index ==0 ){
        divisores = `${divisores + index} `
        sumPotencia += index**2; 
    }    
}


alert(divisores);
alert(sumPotencia);

if(Math.sqrt(sumPotencia)%1===0){
    alert("El numero es un cuadrado")
}else{
    alert("El numero no es un cuadrado")
}