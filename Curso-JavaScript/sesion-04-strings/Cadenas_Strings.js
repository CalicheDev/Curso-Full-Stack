//Metodos mas utilizados con cadenas de caracteres
//Cómo obtener la lingitud de un string
let str="Hola este es un string"
console.log(str.length)

//Obtener partes de cadenas de caracteres
//slice() substring() substr()
let slice_str = str.slice(5,10)
let subtring_str= str.substring(5,10)
let substr_str = str.substr(5,10)

console.log(str)
console.log(slice_str)
console.log(subtring_str)
console.log(substr_str)

//Reemplazar parte de una cadena de texto
let nombre= "Hola mi nombre es Carlos"
console.log(nombre)

console.log(nombre.replace('Carlos','Bejarano'))

let trxto_largo = "El código ASCII (siglas en ingles para American Standard Code for Information Interchange, es decir código Americano ( Je! lease estadounidense... ) Estándar para el intercambio de Información ) ( se pronuncia Aski )."

console.log(trxto_largo.replace('código','tema'))


console.log(trxto_largo.replace(/código/g,'tema'))




