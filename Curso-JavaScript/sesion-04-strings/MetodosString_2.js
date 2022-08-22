//Metodos de cadenas de texto
let input= "esPañol"
let db="EspaÑol"

console.log(input.toUpperCase()===db.toUpperCase())

//Formas de concatenar dos cadenas de cartacteres
let str_1 = "Hola soy la primera cadena"
let str_2 = "Y yo soy la segybda cadena"

console.log(str_1.concat(" ",str_2))
console.log(str_1+" "+str_2)
console.log(`${str_1} ${str_2}`)

//Eliminar espacions al inicio y al final
let str_3 = " Hola soy un string con espacio al final... "
console.log(`${str_3}`)
console.log(`${str_3.length}`)
console.log(str_3.trim().length)

//Obtener el carectar que hay en una cadena de texto
let str_4 = "Hola soy el string numero 4"
console.log(str_4.charAt(5))
console.log(str_4[5])

//Obtener la posicion de una palabra
let str_5 = "Hola soy el string numero 4"
console.log(str_5.indexOf("string"))
console.log(str_5.charAt(9))
console.log(str_5.lastIndexOf("string"))