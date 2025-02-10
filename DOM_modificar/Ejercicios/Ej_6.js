window.onload = function (){
    let section = document.createElement("section");



    window.seleccionar = function(img){
        if(img.className != "selected"){
            img.className=  "selected";
        }else{
            img.className = "";
        }
    }


    function* crearArticulo(img){
        
        for(let i = 0; i < img.length; i++){
            let article = document.createElement("article");
            let texto = document.createTextNode(`Titulo ${i+1}`);
            let titulo = document.createElement("h1");
            titulo.appendChild(texto);
            texto = document.createTextNode(`parrafo ${i+1}`);
            let parrafo = document.createElement("p");


            parrafo.appendChild(texto);

            article.appendChild(titulo);
            article.appendChild(parrafo);
            img[i].style.width = "100px";
            img[i].style.height = "100px";
            article.appendChild(img[i]);
            // return parrafo;

            yield article;
        }
    }

    function crearSeccion(){
        let img = document.querySelectorAll(".selected")
        for(const value of crearArticulo(img)){
            console.log(value);
            section.appendChild(value);
        }
        
        document.write(section.innerHTML);
    }
    window.crearSeccion = crearSeccion;
}