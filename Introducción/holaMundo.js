console.log("mensaje normal");
console.info("informacion");
console.groupCollapsed("bloque1")
    console.warn("Mensaje de aviso");
    console.error("Mensaje de error")
console.groupEnd();

function externo(){
    alert("evento externo");
}

function hola(){
    alert("Hola");
}

function adios(){
    alert("adios");
}