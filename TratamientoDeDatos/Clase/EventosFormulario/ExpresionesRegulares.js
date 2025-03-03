let regex = /Modo 1/;
let regex2 = new RegExp("Modo 2")

console.log(regex.test("Modo 1"))
console.log(regex2.test("Modo 2"))

/**
 * . cualquier Caracter /h.t/ hat = true
 * \d digitos /\d/ A4 = true
 * \w caracteres alfanumerico /\w/ A = true
 * \s un espacio en blanco /\s/ Hola Mundo = true
 * \b limite de la palabra  /\bJava\b/ Java = true
 * ^ inicio de la line  /^Hola/ solo Hola al inicio de la linea
 * $ fin de linea /mundo$/ solo mundo al final de la linea
 * + uno o mas caracteres
 * * cero o mas caracteres
 * ? caracter opcional
 * {n, m} repeticiones entre n y m veces, puede haber un solo numero 
 * [] especificar conjunto de caracteres
 * [a-d] conjunto entre a y d
 * [^] Niega la condicion
 * | operador O
 * (?=...) Se debe cumplir la condición dentro de los parentesis pero sin consumir caracteres. es solo una condición
 */

let expDNI = /^\d{8}[A-Z]$/;

let form = document.getElementById("form");
let dni = document.getElementById("dni");
console.log(dni)

form.onsubmit = function(){
    if(expDNI.test(dni)){
        return true;
    }else{
        alert("no has introducido un dni")
        return false;
    }
}


