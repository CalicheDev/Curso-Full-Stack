// Cómo trabajar con listas (arrays, arreglos, vectores)
let var1= 3;
let array =[1,'Hola',3,4,null,6, var1]

console.log(array);

console.log(array[0])
console.log(array[1])

//Valores al final
array.push('final',45,100,false)
console.log(array)


//Valores al principio
array.unshift('inicio',87,98)
console.log(array)


//Métodos para eliminar valores en nuestros arrays
//.pop() .shift() => mutan el valor del array
const array2 = [1,3,'hola',false]
array2.pop()
console.log(array2)


array2.shift()
console.log(array2)


//Método para eliminar, modificar o añadir valores a un array
const array3 =[1,2,3,4,5,6];

//Eliminar valores
array3.splice(2,3)
console.log(array3)

//Añadir valores .splice(indice, 0, valores nuevos)
array3.splice(2,3, 'Q tal','nuevo')
console.log(array3)

//Método para modificar valores .splice(indice, 0, valores nuevos)
array3.splice(2,1,3)
console.log(array3)




