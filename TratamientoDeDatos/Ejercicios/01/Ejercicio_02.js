window.onload = function () {
  const listaElementos = document.querySelectorAll(".aficiones");
  const textArea = document.getElementById("textArea");
  listaElementos.forEach(
    (elemento) =>
      (elemento.onclick = function () {
            if(elemento.checked){
                textArea.textContent += elemento.getAttribute("name") + " ";
            }else{
                let texto = textArea.textContent;
                
                texto = texto.replace(elemento.getAttribute("name"), "")                
                textArea.textContent = texto.trim();
            }
        
      })
  );
};
