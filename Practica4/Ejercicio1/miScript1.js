window.onload = function(){
    const boton = document.getElementById("splitTextarea");

    boton.onclick = function(){
        let inputs = document.querySelectorAll("#inputContainer input");
        let inputsContainer = document.querySelector("#inputContainer");
        let texto = document.querySelector("#mainTextarea").value;
        let totalTexto = texto.length
        document.querySelector("#mainTextarea").value = ""
        if(totalTexto != 0){
            //Comprobamos si tenemos que crear los inputs o no
            if(inputs.length == 0){
                for(let i = 3; i > 0; i--){
                    let nuevoInput = document.createElement("input");
                    nuevoInput.setAttribute("type", "text");
                    nuevoInput.setAttribute("value", texto.substring(0, Math.round(totalTexto/3)));
                    texto = texto.slice(Math.round(totalTexto/3));
                    inputsContainer.append(nuevoInput)
                }

            }else{
                for(let i = 0; i < inputs.length;i++){
                    inputs[i].setAttribute("value", texto.substring(0, Math.round(totalTexto/3)));
                    texto = texto.slice(Math.round(totalTexto/3));
                }
            }
        }
    }
}