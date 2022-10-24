//PRINCIPALES OPERACIONES ARITMETICAS

let a = 3.4;
let b = 4.1;

//suma
console.log(a+b)

//Resta
console.log(a-b)


//Multiplicacion
console.log(a*b)

//Division
console.log(a/b)

//Representacion de los números en cadenas de texto
console.log(typeof a)
let a_s = a.toString();

console.log(a_s)
console.log(typeof a_s)

//Redondeo de números decimales
let c = 3.3;
let d=c*3;

console.log(d)

//toFixed(x) - Limita el n´pumero de decimales a un valor ingredado en la variable
console.log(d.toFixed(4))
console.log(typeof d.toFixed(4))

let e = 1839.123256256522;
let f= 123526523564145;

console.log(e.toFixed(2))
console.log(f.toFixed(2))

//toPrecision(x) 
console.log(e.toPrecision(7))
console.log(f.toPrecision(7))

