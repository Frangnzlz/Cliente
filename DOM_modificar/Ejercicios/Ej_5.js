window.onload = function (){

    function generar(buton){
        let contenedores = document.querySelectorAll(".generar");

        for(let i = 0; i < contenedores.length; i++){
            let num = numAleatorio(1, 1);
            contenedores[i].textContent = num
        }
        buton.disabled = true;
        document.querySelector("#comparar").disabled = false
        document.querySelector(".comparar").textContent = "";
    }
    
    function comparar(buton){
        let contenedores = document.querySelectorAll(".generar");
        let max = Number.MIN_SAFE_INTEGER;

        for(let i = 0; i < contenedores.length; i++){
            let num = Number.parseInt(contenedores[i].textContent)
            if(max < num){
                max = num
            }

        }
        document.querySelector(".comparar").textContent = max;
        buton.disabled = true;
        document.querySelector("#generar").disabled = false;
    }



    function numAleatorio (min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    window.generar = generar;
    window.comparar = comparar
}