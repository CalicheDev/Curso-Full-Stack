//Instancear una clase
class Persona {

    constructor(nombre,edad,isDeveloper){
        this.nombre= nombre
        this.edad=edad
        this.isDeveloper=isDeveloper
        
    }
    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años` )
    }
}

const nueva_persona = new Persona ('Carlos',34,true)
console.log(nueva_persona)
nueva_persona.saludo()

let numero = 60
console.log(numero)


console.log(nueva_persona)
console.log(nueva_persona.nombre,nueva_persona.edad)

nueva_persona.nombre = "Jaime";
console.log(nueva_persona.nombre)

