window.onload = function (){
    const form = document.forms[0];

   form.elements["boton"].onclick = function(){
        form.elements['copia'].value = form.elements['texto1'].value;
        form.elements['texto1'].value = ""; 
   }
}