function CaF(){
    let temp = parseFloat(document.getElementById("temp").value);
    document.getElementById("temp").value = ""
    
    if(!Number.isNaN(temp)){
        temp = temp * (9/5) + 32;
    
         document.getElementById("result").innerText = `la temperatura sera de: ${temp.toFixed(2)} Fahrenheit`
    }else  {
        document.getElementById("result").innerText =  'No has introducido un numero';
    }
}

function FaC(){
    let temp = parseFloat(document.getElementById("temp").value);
    document.getElementById("temp").value = ""

    if(!Number.isNaN(temp)){
        temp = (temp - 32) / 1.8;

        document.getElementById("result").innerText = `la temperatura sera de: ${temp.toFixed(2)} Celcius`;
    }else  {
        document.getElementById("result").innerText = 'No has introducido un numero';
    }
}