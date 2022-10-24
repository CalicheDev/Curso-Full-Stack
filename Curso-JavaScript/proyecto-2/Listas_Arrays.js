//Luistas arrays y arreglos

const lista =[1,"Hola", true, undefined,null] ;
const lista2=new Array(2,"Hola", true, undefined,null);
const lista3 =new Array(3);
lista3[0]="Soy el primer elemento, index 0";
const lista4 =[lista,lista2,lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Objetos
const movil ={
    alto:10,
    ancho:5,
    marca:"Xiaomi",
    isWhite:false,
    contactos:["Bejarano","Carlos","Alberto"],
    tarjeta:{
        marca: "Nokia",
        almacenamiento: 128,
    }
}
movil.anio = 2022; //Se pueden adicionar propiedades al objeto asi no se haya definido cuando se declaro el objeto original

console.log(movil.anio)


//Fechas
//Libreria de apoyo Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); //Se puede definir con los milisegundos
console.log(fecha_milis);


const dia =ahora.getDate();
const mes =ahora.getMonth() + 1;
const anio =ahora.getFullYear();

console.log(dia,mes,anio);