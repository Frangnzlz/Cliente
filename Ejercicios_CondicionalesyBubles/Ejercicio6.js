do {
    var num = parseInt(prompt("Introduce un numero positivo" , ""));
} while (num < 0 || Number.isNaN(num));

var sumPotencia = 0;
var divisores = "";
for (let index = 1; index <= num; index++) {
     
}


alert(divisores);
alert(sumPotencia);

if(Math.sqrt(sumPotencia)%1===0){
    alert("El numero es un cuadrado exacto")
}else{
    alert("El numero no es un cuadrado exacto")
}