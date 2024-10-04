var bool = confirm("Pasar de celcius a Fahrenheit");

if (bool) {
    let temp = parseFloat(prompt("Introduce la temperatura en Celcius"));
    if (!Number.isNaN(temp)){
        temp = temp * (9/5) + 32;

        alert(`la temperatura sera de: ${temp.toFixed(2)} Fahrenheit`);
    }else {
        alert("No has introducido un numero");
    }
} else {
    let temp = parseFloat(prompt("Introduce la temperatura en Fahrenheit"));

    if (!Number.isNaN(temp)){
        temp = (temp - 32) / 1.8;

        alert(`la temperatura sera de: ${temp.toFixed(2)} Celcius`);
    }else {
        alert("No has introducido un numero");
    }
}