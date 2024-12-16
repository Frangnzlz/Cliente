window.onload = function (){
    var progress;
    var meter;


    function iniciarCarga(buton){

        if(buton.value == "progress" && progress  == undefined){
            progress = setInterval(cargar, 100, buton.value);
            buton.disabled = true;
        }else if(buton.value == "meter" && meter == undefined){
            meter = setInterval(cargar, 100, buton.value);
            buton.disabled = true;
        }
            
        
    }

    function cargar(carga){
        let barra = document.getElementById(carga);
        console.log = barra.value;
        barra.value = Number.parseInt(barra.value) + 1;

        if(barra.value >= 100){
            alert(`${carga} ha terminado de cargar`);
            document.getElementById(`buton_${carga}`).disabled = false;
            
            if(carga == "progress"){
                clearInterval(progress);
                progress = undefined;
                barra.value = 0;
            }else if(carga == "meter"){
                clearInterval(meter);
                meter = undefined;
                barra.value = 0;
            }
        }
    }


    window.iniciarCarga= iniciarCarga
}