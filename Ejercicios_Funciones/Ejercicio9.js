function calcFactorial() {
  var calc = 1;
  // do {
  //     var fact = parseInt(prompt("Introduce un numero entero positivo" , ""));
  // } while (fact <=0 || Number.isNaN(fact));
  var fact = parseFloat(document.getElementById("factorial").value);
  document.getElementById("factorial").value = "";
  for (let i = 2; i <= fact; i++) {
    calc *= i;
  }
  // alert(`El valor del factiral de ${fact} es ${calc}`);
  document.getElementById("result").innerText =
    Number.isNaN(fact)
      ? "No has introducido un numero"
      : Number.isInteger(fact) && fact >= 0 
      ? "El valor del factorial de " + fact + " es " + calc
      : "No has introducido un natural";
}
