//Casos para usar break y continue
//Se usa en casos muy especifico, no es normal usar estos metodos
let lista = [1,2,3,4,5,6,7,8]

for (let i = 0; i < lista.length; i++) {
    
    if (lista[i] === 3){
        continue;
    }
    console.log(lista[i]);

    if (lista[i] >5 ){
    console.log(lista[i]);
    break;
    }
}