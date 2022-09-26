//Ejercicio  11POO
class Estudiante{
    constructor(nombre,lista){
        this.nombre = nombre
        this.lista = {
            asignatura1: "Javascript",
            asignatura2: "HTML",
            asignatura3: "CSS",
            
        }
        
    }  
    
}
const obtenDatos = new Estudiante("Bejarano")

console.log(obtenDatos)


