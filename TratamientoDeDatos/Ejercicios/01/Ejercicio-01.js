window.onload = function(){
    const form = document.forms[0];
    let input = form.elements["texto"]

    input.addEventListener("keyup", function(){
        form.elements["copia"].value = this.value
    });

}