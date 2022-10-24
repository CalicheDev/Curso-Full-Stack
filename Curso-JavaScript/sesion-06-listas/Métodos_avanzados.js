//Métodos mas avanzados
// .map() .filter() .reduce()

const array = ['cali','bogota', 'palmira','buga','yumbo'];

array.forEach(v=>{
    console.log(v)
})

const newArray = array.map((f,indice)=>{
    console.log(indice)
    return f.concat('color')
})

console.log(newArray)



const listaObjeto = [
    {nombre: 'carlos', edad: 34},
    {nombre: 'lorena', edad: 30},
    {nombre: 'natalia', edad: 31},
    {nombre: 'hector', edad: 29},
]

const mayores = listaObjeto.filter(o => {
    if (o.edad > 32){
        return true
    }else {
        return false
    }
} )

console.log(mayores)


const nuevaLista = listaObjeto.filter(n => n.nombre !== 'carlos')

console.log(nuevaLista)

//Reduce sirve para obtener un objeto a partir de una listas

const suma = listaObjeto.reduce((agr,cur) => agr + cur.edad)

console.log(suma)

const valores = [3,56,55,25,28]

const suma2 = valores.reduce((agr,cur,i,arrayOriginal)=>{
    console.log(agr)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return agr + cur
})

console.log(suma2)



