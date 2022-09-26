//Inheritance - Herencia

class Persona{
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad

    }
}


class Derarrollador extends Persona{
    constructor(nombre,edad,lenguaje){
        super(nombre,edad)
        this.lenguaje = lenguaje
    }
}



const nuevodv = new Derarrollador("Bejarano",34,"JavaScript")


console.log(nuevodv)

nuevodv.saludo()












