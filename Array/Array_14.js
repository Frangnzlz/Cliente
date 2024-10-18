let colores = ["red", "yellow", "green", "white", "blue", "brown", "pink", "black"];  

function generarBanderasConRepeticion(){
    let num = parseInt(prompt(`Introduce el numero de franjas que quieres en la bandera`));
    let instrucciones = [`<style>table, td{border: 1px solid black;text-align: center;}td{width: 60px;height:60px;}</style>`,`<table><caption>Bandera</caption><tbody><tr>`];
    if(Number.isNaN(num)){
        alert(`No has introducido un numero`);
    }else if(num > 5 || num < 1){
        alert(`No has introducido un numero de franjas valido`)
    }else{
        for(let i = 0; i < num; i++){
            let rand = random(0, colores.length);
            instrucciones.push(` <td style="background-color: ${colores[rand]};"></td>`)
        }
        document.write(instrucciones.join("\n"));
    }

}


function generarBanderasSinRepeticion(){
    let num = parseInt(prompt(`Introduce el numero de franjas que quieres en la bandera`));
    let instrucciones = [`<style>table, td{border: 1px solid black;text-align: center;}td{width: 60px;height:60px;}</style>`,`<table><caption>Bandera</caption><tbody><tr>`];
    let copiaColores = [...colores];
    if(Number.isNaN(num)){
        alert(`No has introducido un numero`);
    }else if(num > 5 || num < 1){
        alert(`No has introducido un numero de franjas valido`)
    }else{
        for(let i = 0; i < num; i++){
            let rand = random(0, copiaColores.length);
            console.log(copiaColores);
            console.log(rand);
            instrucciones.push(`<td style="background-color: ${copiaColores[rand]};"></td>`);
            copiaColores.splice(rand, 1)

        }
        document.write(instrucciones.join("\n"));
    }

}

function generarBanderasSinRepeticionConsecutiva(){
    let num = parseInt(prompt(`Introduce el numero de franjas que quieres en la bandera`));
    let instrucciones = [`<style>table, td{border: 1px solid black;text-align: center;}td{width: 60px;height:60px;}</style>`,`<table><caption>Bandera</caption><tbody><tr>`];
    let copiaColores = [...colores];
    let color;
    if(Number.isNaN(num)){
        alert(`No has introducido un numero`);
    }else if(num > 5 || num < 1){
        alert(`No has introducido un numero de franjas valido`)
    }else{
        for(let i = 0; i < num; i++){
            let rand = random(0, copiaColores.length);
            console.log(copiaColores);
            console.log(rand);
            color = copiaColores[rand]
            instrucciones.push(`<td style="background-color: ${color};"></td>`);
            copiaColores = [...colores];
            eliminarElemento(color,copiaColores);
            console.log(copiaColores);

        }
        document.write(instrucciones.join("\n"));
    }

}

function eliminarElemento(elemento, array){
    for(let i = 0; i < array.length; i++){
        if(elemento == array[i]){
            array.splice(i, 1);
            return true;
        }
    }
    return false;
}



function random(min, max){
    return Math.floor(Math.random()*((max)-min) + min);
}

