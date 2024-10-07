var num1 = 0;
var num2 = 0;

while(Number.isNaN(num1)|| num1 <= 0){
  num1 = parseInt(prompt("Introduce el primer numero", ""));
}

while (num1 >= num2 || Number.isNaN(num2)) {
  var num2 = parseInt(prompt(`Introduce un segundo numero mayor a ${num1}`, ""));
}

var numPrimos = "";

for (let i = num1; i <= num2; i++) {
  if (esPrimo(i)) {
    numPrimos += `${i} `;
  }
}
alert(`Los numeros primos entre ${num1} y ${num2} son ${numPrimos}`);

function esPrimo(num) {
  if(num ===1 ){
    return false;
  }
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
