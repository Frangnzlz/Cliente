window.onload = function(){
    let idInterval;

    function iniciarContador(boton){
        idInterval = setInterval(generarPunto, 1000);
        boton.disabled = true;
    }

    function generarPunto(){
        let barra = document.getElementById("barra")
        let max = barra.max;

        barra.value += 20;

        if(barra.value >= max){
            let puntos = document.getElementById("contador");
            barra.value = 0;
            puntos.textContent = ++puntos.textContent;
            document.getElementById("boton").disabled = false;
            
            clearInterval(idInterval);
            if(puntos.textContent >= 3){
                let img = document.createElement("img")
                img.setAttribute("src", "JS.png");
                document.querySelector("#premios article").append(img);
                document.getElementById("boton").disabled = true;
            }
        }
    }
    

    window.iniciarContador = iniciarContador;
}