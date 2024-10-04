let pi = 3.1415;
// Te dice devuelve true si un numero es entero
console.log(Number.isInteger(pi));

//toFixed, te devuelve una cadena con el redondeo de un numero
let aprox = pi.toFixed(3);
console.log(aprox);
console.log(aprox + 1);

// toPrecision, te devuelve el numero final de caracteres como cadena de caracteres sin redondear
pi = 3.1405;
aprox = pi.toPrecision(4);
console.log(aprox);
console.log(aprox + 1);
 




