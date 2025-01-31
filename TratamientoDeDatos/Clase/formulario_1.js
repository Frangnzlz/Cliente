window.onload = function(){
    // let form1 = document.getElementById('cuenta1');
    let form1 =document.forms['form1'];
    let form2 =document.forms['form2'];
    
    let user = form1.elements['username'];
    let pass = form1.elements['password'];
    console.log(user.value)
    console.log(pass.value)

    form2.elements['agree'].onchange = function(){
        console.log(this.checked)
    }

    
    document.querySelector("a").onclick = function(){
        let seleccionados = document.querySelectorAll("input[name=language]:checked");
        for(let i = 0; i < seleccionados.length; i++){
            console.log(seleccionados[i].value)
        }
    }
    document.querySelector("#toggleMarcar").onclick = function(){
        let controlSeleccion = this.textContent == "Marcar" ? ":not(:checked)" : ":checked";
        let seleccionados = document.querySelectorAll(`input[name=language]${controlSeleccion}`);

        this.textContent = seleccionados[0].checked ? "Marcar" : "Desmarcar";
        for(let i = 0; i < seleccionados.length; i++){
            seleccionados[i].checked = !seleccionados[i].checked;
        }
    }
    let seleccion = document.querySelectorAll("input[name=language]");
    for(let i = 0; i < seleccion.length; i++){
        seleccion[i].onchange = function(){
            cambiarMarca();
        }
    }

    function cambiarMarca(){
        let check = document.querySelectorAll("input[name=language]:checked")
        let marcar = document.querySelector("#toggleMarcar");

        marcar.textContent = (seleccion.length == check.length ? "Desmarcar" : "Marcar")
    }
}