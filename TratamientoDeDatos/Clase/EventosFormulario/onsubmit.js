window.onload = function(){
    let form = document.getElementById("form");
    let usuario = document.getElementById("usuario");
    let password = document.getElementById("password");
    form.onsubmit = function(){
        if(usuario.value.length < 6){
            alert("Introduce un usuario correcto");
            return false;
        }else if(password.value.length < 8){
            alert("Introduce un password correcto");
            return false;
        }else{
            return true; 
        }
    }

    let form2 = document.getElementById("form2");

    form2.onsubmit = function(){
        let checkbox = document.querySelectorAll("input[name='opcion']:checked");

        if(checkbox.length == 0){
            alert("Tienes que seleccionar alguna")
            return false;
        }else{
            return true;
        }
    }

}