let precio = parseFloat(prompt("Introduce el precio original" ,""));
let descuento = parseFloat(prompt("Introduce el descuento en porcentaje" ,""))/100;
descuento = 1 - descuento;
precio *= descuento;

alert(`El precio final del producto es: ${precio.toFixed(2)}`)