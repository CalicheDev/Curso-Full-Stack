//Cómo ordenar arrays .sort() => metodo que modifica el ARRAY
const array = [2,5,9,15,1,2,0,4]

console.log(array);

array.sort((a,b)=>{
    if(a < b){
        return -1;
    }else if(a > b){
        return +1;
    }else {
        return 0;
    }

})

console.log(array);

//Ordenar unicamente arrays numericos
const arrayNumerico = [4,11,7,3,1,3,56,8,546]

arrayNumerico.sort((a,b)=> a - b)

console.log(arrayNumerico);

const listaObjeto = [
    {nombre: 'carlos', edad: 34},
    {nombre: 'lorena', edad: 30},
    {nombre: 'natalia', edad: 31},
    {nombre: 'hector', edad: 29},
]

listaObjeto.sort((a,b)=> a.edad - b.edad)
console.log(listaObjeto);




