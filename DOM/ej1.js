function verEnlace(){
    alert(document.getElementById("enlace").href);
}

function cambiarEnlace(){
    document.getElementById("enlace").href = "https://www.youtube.com/";
    document.getElementById("cambiar").innerText = "He cambiado";

}