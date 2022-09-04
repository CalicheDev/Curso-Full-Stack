//Cómo unir dos listas .concat(lista2)

const lista1 = ['hola',2,2,false,null]
const lista2 = ['bye',8,true,undefined]

console.log(lista1.concat(lista2))

const lista3 = lista1.concat(lista2)

//Factor de propagacion
console.log(...lista3)

const lista4 = [...lista1,...lista2]
console.log(...lista4)



