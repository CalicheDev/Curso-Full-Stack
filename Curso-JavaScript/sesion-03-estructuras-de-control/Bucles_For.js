//Bucles for

for (let index = 0; index < 10; index++) {
    //const element = array[index];
    console.log(index);
}


let lista = [1,4,6,2,3,7,10,12]

for (let i = 0; i < lista.length; i++) {
    //const element = array[i];
    console.log(i)
}

//Estructura for of
for(let valor of lista){
    console.log(valor);
}

//Estructura forEach
lista.forEach(valor=>{
    console.log(valor);
})

//Estructura for in
let persona ={
    nombre: "Bejarano",
    apellido: "Carlos",
    edad: 34,
    isdeveloper: true
}
console.log(persona.nombre)
let prop = "edad";
console.log(persona[prop])

for (propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad])
}