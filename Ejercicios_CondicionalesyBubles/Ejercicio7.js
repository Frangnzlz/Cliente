var num1 = parseInt(prompt("Introduce el primer numero", ""));
var num2 = 0;
while (num1 > num2) {
  var num2 = parseInt(prompt("Introduce el segundo numero", ""));
}

var numPrimos = "";

for (i = num1; i <= num2; i++) {
  if (esPrimo(i)) {
    numPrimos += `${i} `;
  }
}
alert(numPrimos);

function esPrimo(num) {
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
