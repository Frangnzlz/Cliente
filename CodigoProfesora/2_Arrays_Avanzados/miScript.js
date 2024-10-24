
//Definicion JSON para los arrays
//let array = new Array('a', 'e','i','o','u');
let arrayJSON = ['a', 'e', 'i', 'o', 'u'];
console.log (arrayJSON);

//***length****
let total = arrayJSON.length;
console.log (total);

//****concat ()****
var vocales = ['a', 'e', 'i', 'o', 'u'];
var nuevo = vocales.concat(1,2,3,4,5); //Añado elementos
console.log (nuevo);
//el original no se ha modificado
console.log (vocales);

//Puedo además concatenar dos arrays
var numeros = [7,8,9,1,2];
var otroArray = vocales.concat (numeros); //Concateno 2 arrays
console.log (otroArray);

//****pop ()****
var ultima = vocales.pop();
console.log (`ultimo elemento: ${ultima}`);
//array original queda modificado
console.log (vocales);

//*** push() */
vocales.push('u');
//Array con el último elemento añadido
console.log (vocales);

//*****shift()****/
var primera = vocales.shift();
console.log(`El primero elemento: ${primera}`);
//El array original queda modificado
console.log(vocales);

//******unshift*****/
vocales.unshift('a');
//Array con el primer elemento añadido
console.log(vocales);

//*****splice *******/

//Ejemplo para eliminar elementos a partir de una posición dada
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);  // Elimina 2 elementos desde el índice 1
                   //el primer argumento indica a partir de donde empezamos
                   //el segundo argumento indica el número de elmentos que elminamos
//Modifica el array original
console.log("Array modificado eliminando: "+arr);   // Resultado: [1, 4, 5]

//Ejemplo para añadir elementos a partir de una posición dada
arr = [1, 2, 3];
arr.splice(1, 0, 10, 20);  // Añade 10 y 20 en el índice 1, sin eliminar elementos
console.log("Array modificado añadiendo: "+arr);  // Resultado: [1, 10, 20, 2, 3]

//podríamos añadir otro array
arr = [1, 2, 3];
let otroarray = [40,50,60];
arr.splice (1,0,otroarray); //Añade el array otroarray en el indice 1, sin eliminar elementos
console.log ("Array modificando añadiendo array: "+arr); //[1,40,50,60,2,3]

//Ejemplo para reemplazar elementos
arr = [1, 2, 3];
arr.splice(1, 2, 10, 20);  // Elimina 2 elementos desde el índice 1 y añade 10 y 20
console.log("Array modificando reemplazando elementos: "+arr);  // Resultado: [1, 10, 20]

/********* slice () ******/

//Extraer parte de un array
arr = [1, 2, 3, 4, 5];
let subArray = arr.slice(1, 3);  // Extrae elementos desde el índice 1 hasta el 3 (sin incluir)
console.log("subArray extraido: "+subArray);  // Resultado: [2, 3]
console.log(arr);  // El array original no se modifica: [1, 2, 3, 4, 5]

//Extraer desde el inicio hasta el final
arr = [1, 2, 3, 4, 5];
subArray = arr.slice(2);  // Extrae desde el índice 2 hasta el final
console.log("subArray extraido: "+subArray);  // Resultado: [3, 4, 5]



/*****split()******/
var cadenaADNMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
var arrayDecadenaADNs = cadenaADNMeses.split (',');
console.log (arrayDecadenaADNs);

//Ejemplo de uso de split
//Parseo de respuestas de APIS - quiero extraer el dato de la clave
var cadenaADNAPI = "clave:4567";
var arraycadenaADNAPI = cadenaADNAPI.split(':');
var clave = arraycadenaADNAPI [1];
console.log (`la clave es ${clave}`);

//******join ()******/
vocales = ['a', 'e', 'i', 'o', 'u'];
//Transformo el array en cadenaADN uniendo con el caracter indicado
var cadenaADN1 = vocales.join(',');
var cadenaADN2 = vocales.join('-');
var cadenaADN3 = vocales.join(' ');
console.log (cadenaADN1);
console.log (cadenaADN2);
console.log (cadenaADN3);

//Vuelvo a transformar el array de meses en cadenaADN 
//pero separando con -
var nuevacadenaADNMeses=arrayDecadenaADNs.join('-');
console.log(nuevacadenaADNMeses);


//******reverse () ****/
vocales.reverse ();
console.log(vocales);



//Spread Operator para copiar arrays
vocales = ['a','e','i','o','u'];
let copia = vocales; //asigno una copia
copia[0] = 25; //cambio un valor en la copia
console.log (vocales); //afecta a la original

//Para que no ocurra esto usamos el Spread Operator si queremos
//una copia 
vocales = ['a','e','i','o','u'];
copia = [...vocales];
copia[0] = 25; //cambio un valor en la copia
console.log (vocales); //no afecta a la original

//Spread operator para concatenar arrays
vocales = ['a','e','i','o','u'];
numeros = [1,2,3,4,5];
let mix = [...vocales,...numeros];
console.log (mix);

//Spread operator para transformar arrays
let frase ="Es viernes al fin!";
//Queremos transformar la cadenaADN en un array de caracteres
let arrayCaracteres = [...frase];
console.log (arrayCaracteres);

let palabras = frase.split(" ");
console.log (palabras);



/*******************************/







