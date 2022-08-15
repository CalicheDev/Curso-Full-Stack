//factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let factorial= 10;
let n = 5;
let i = 1;
let max = 5;

while (i < max) {
    console.log(factorial)
    i++
    if(i >= 1){
        factorial = factorial * i;
        continue;
    }
    console.log(factorial)
    if(i<=5){
        factorial = factorial * i;
        break;
    }
}
console.log(factorial)
