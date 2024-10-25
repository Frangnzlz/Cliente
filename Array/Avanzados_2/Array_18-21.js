function ADNtoARN(){
    let correcto = true;
    do {
    var cadenaADN = prompt(`Introduce la candena de ADN que deseas transformar a ARN`).toUpperCase();
    correcto = true;
    for(let i = 0; i < cadenaADN.length; i++){
        if(cadenaADN[i] != `A` && cadenaADN[i] != `C` && cadenaADN[i] != `T` && cadenaADN[i] != `G` ){
            correcto = false;
            alert(`La cadena ${cadenaADN} no esta correctamente planteada`);
            break;
        }
    }    
        
    } while (!correcto);
    let cadenaARN = '';

    for(let i = 0; i < cadenaADN.length; i++){
        if(cadenaADN[i] == 'T'){
            cadenaARN += 'U';
        }else{
            cadenaARN += cadenaADN[i];
        }
    }
    alert(`La cadena de ARN será ${cadenaARN} para la cadena de ADN ${cadenaADN}`)
}
function ej19(){
    let lista = ["Luis", "Estela", "Ángel", "Enya", "Jose Antonio"];
    let lista2 = ["Joaquín", "Manuel", "Carlos"];

    console.log(`Tus amigos de la lista ${lista} son ${listaAmigos(lista)}`)
    console.log(`Tus amigos de la lista ${lista2} son ${listaAmigos(lista2)}`)
}
function listaAmigos(array){
    let amigos = Array();

    for(let i = 0; i < array.length; i++){
        if(array[i].length <= 4){
            amigos.push(array[i]);
        }
    }

    return amigos;
}
function ej20(){
    let colores = ["red", "yellow", "green", "white", "blue", "brown", "pink", "black"];  
    let cantElementos = 8;
    let arrayUsuario = [];

    for(let i = 0; i < cantElementos; i++){
        arrayUsuario[i] = prompt(`Introduce el elemento numero ${i+1} de ${cantElementos}`);
    }

    for(let i = 0, cont = 0; i < arrayUsuario.length; i++){
        let aux;
        for(let j = 0; j < colores.length; j++){
            if(arrayUsuario[i] == colores[j] ){
                aux = arrayUsuario[cont];
                arrayUsuario[cont] = colores[j];
                arrayUsuario[i] = aux;
                cont++;
            }
        }
    }
    console.log(arrayUsuario);
}


function ej21(){
    caso1 = []
    caso2 = ["Peter"]
    caso3 = ["Jacob", "Alex"]
    caso4 = ["Max", "John", "Mark"]
    caso5 = ["Alex", "Jacob", "Mark", "Max"]


    console.log(`caso 0 personas: ${likes(caso1)}`);
    console.log(`caso 1 personas: ${likes(caso2)}`);
    console.log(`caso 2 personas: ${likes(caso3)}`);
    console.log(`caso 3 personas: ${likes(caso4)}`);
    console.log(`caso 4 o mas personas: ${likes(caso5)}`);
}
function likes(array){
    switch (array.length) {
        case 0:
            return `Nobody likes this`;
        case 1:
            return `${array[0]} likes this`;
        case 2:
            return `${array[0]} and ${array[1]} like this`;    
        case 3:
            return `${array[0]}, ${array[1]} and ${array[2]} like this`;   
        default:
            return `${array[0]}, ${array[1]} and ${array.length-2} like this`;    
    }
}


function ej22(){
    let num = 0;
    let i = 0;
    let indice = [];
    let array = [];
    let inicio = 0, final = 0;
    let aux = [];

    do{
        num = parseInt(prompt(`Introduce el numero ${i+1}, deberá estar comprendido entre 0 y 99`));

        if(!Number.isNaN(num) || num>=0 && num<=99){
            array[i] = num;
            indice[i] = i;
            i++;
        }else{
            alert(`No has introducido un numero valido`);
        }
    }while(i  < 10);



    console.log(indice);
    console.log(array);

    do{
        inicio = parseInt(prompt(`Introduce el numero inicial, ha de estar comprendido entre 0 y 9`));
        if(!Number.isNaN(inicio) && inicio >= 0 && inicio < 9){
            final = parseInt(prompt(`Introduce el numero final, ha de estar comprendido entre ${inicio} y 9`));
        }else{
            alert(`El numero inicial no es valido`);
        }
    }while( Number.isNaN(inicio)
        ||Number.isNaN(final)
        ||inicio < 0
        ||inicio > 9
        ||final <= inicio
        ||final > 9
    )

    for(let i = 0; i < array.length; i++){
        if(i == 0){
            aux[i] = array[9];
        }else if(i){
            aux[i] = array[i+1];
        }
    }


    console.log(indice);
    console.log(aux);



}