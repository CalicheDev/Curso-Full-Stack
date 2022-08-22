//Metodos de cadenas de texto parte 3
// https://regexr.com

let texto_largo = "Hola soy un string con espacio al final... Tito no es un mono cualquiera. A tito no le gusta trepar por los arboles"

console.log(texto_largo.match(/no/g))

//Si existe la palabra dentro del texto
console.log(texto_largo.includes("nene"))

//Para saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Hola soy"))

//Para saber si un exto termina con una palabra
console.log(texto_largo.endsWith("arboles"))

