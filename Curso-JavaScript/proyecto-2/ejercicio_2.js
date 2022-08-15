//Luistas arrays y arreglos

const nombre = "Carlos Alberto Bejarano Barbosa ";
const fecha_nacimiento = new Date("july 8 1988");
const edad = 34;
const desarrollador = true
const datos =[nombre,edad,desarrollador,fecha_nacimiento] ;


console.log(datos);
//"Eres desarrollador"; console.log(nombre[2]);
// console.log(fecha_nacimiento);

//Objeto Libro
const libro ={
    titulo:"El club de las 5 AM",
    autor:"Robin Sharma",
    fecha:("july 8 2018"),
    isWhite:false,
    url:"https://www.buscalibre.com.co/libro-el-club-de-las-5-de-la-manana-robin-sharma/9788425356919/p/53239602",
    dimensiones:{
        ancho: 350,
        largo: 128,
        idioma: "Español",
        paginas: 400
    }
}
//libro.anio = 2022; //Se pueden adicionar propiedades al objeto asi no se haya definido cuando se declaro el objeto original
libro.pasta = "Tapa blanda";

console.log(libro.titulo)


//Fechas
//Libreria de apoyo Moment.js


