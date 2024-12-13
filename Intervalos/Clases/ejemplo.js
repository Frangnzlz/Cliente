window.onload = function (){
    let cont = -1
    let contador = document.getElementById("contador");
    let id = setInterval(iniciarContador,1000);

    


    function iniciarContador(){
        cont++;
        contador.innerText = cont;
    }

    function pararContador(){
        let boton = document.getElementById("pausar");

        if(boton.innerText == "Pausar"){
            boton.innerText = "Renaudar"
            clearInterval(id)
        }else{
            if(document.getElementById("reset").checked){
                cont = 0;
                contador.innerText = cont;
            }
            boton.innerText = "Pausar";
            id = setInterval(iniciarContador, 1000);
        }
    }


    window.pararContador = pararContador;
}