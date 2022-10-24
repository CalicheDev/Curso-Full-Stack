//Cómo obtener una lista a partir de otra .slice()

const array = ['hola',1,2,3, true, null, 'bye']

//este metodo no modifica el valor del array original
console.log(array.slice(0));

const array2 = array.slice(2,5);
console.log(array2)

const array4 = array.slice(2, -2);
console.log(array4)