window.onload = function(){
    let ancho = window.screen.width -100;
    let idInterval;
    
    window.addEventListener('resize',
        function (){
            ancho = window.screen.width-100;
            console.log(ancho);
        }
    );


    window.iniciarCarrera = iniciarCarrera;

    function iniciarCarrera (){
        let divs = document.querySelectorAll("div");
        document.querySelector("button").disabled = true;

        idInterval = setInterval(carrera, 100, divs);

    }
    


    function carrera(divs){
        for(let i = 0; i < divs.length; i++){
            let movimiento = numAleatorio(0, 100);
            let style = window.getComputedStyle(divs[i]);

            movimiento += Number.parseInt(style.left)
            // console.log(movimiento);
            // console.log(movimiento);
            // divs[i].style.left = movimiento;
            divs[i].style.setProperty("left", movimiento + "px");

            if(Number.parseInt(style.left) >= ancho){
                alert(divs[i].getAttribute("id") + " ha ganado la carrera")
                clearInterval(idInterval)
                document.querySelector("button").disabled = false;
                break;
            }
        }
    }








    function numAleatorio (min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }


}