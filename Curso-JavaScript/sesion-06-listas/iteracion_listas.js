// Iterar los valores de una lista

const array = ['hola',2,5,90,false,undefined]

//Forma antigua poco eficiente
for(let i=0; i<array.length;i++){
    console.log(array);
}

//Nueva forma ES6  .forEach()
array.forEach(valor=>{
    console.log(valor)
})

const casa = {
    color: 'blanco',
    altura: 150,
    altua: 250,
    tipo: 'nueva',
    propietario: {
        nombre: 'carlos',
        apellido: 'bejarano',
        documento: 1130639211
    }
}
console.log(casa.propietario)


const nombre2 = casa.propietario.nombre
console.log(nombre2)

const listaObjeto = [
    {nombre: 'carlos', edad: 34},
    {nombre: 'lorena', edad: 30},
    {nombre: 'natalia', edad: 31},
    {nombre: 'hector', edad: 29},
]

const {edad,nombre} = listaObjeto.find(o => o.nombre === 'carlos')
console.log(edad,nombre)

