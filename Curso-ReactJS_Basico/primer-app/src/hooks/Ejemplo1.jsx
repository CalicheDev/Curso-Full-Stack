/*Ejemplo para le uso del Hook useState 
*
*Crear un componente de tipo funcion y acceder a su estado
*privado a travpes de un hook, y ademas poder modificarlo
*
*/
import React, {useState} from 'react'

export default function Ejemplo1() {

    //Valor incial para un contador
    const valorInicial=0;

    const personaInicial ={
        nombre: 'Carlos',
        email: 'cabejarano2323@gmail.com'
    }

      const [contador,setContador] = useState(valorInicial);
      const [persona, serPersona] =useState(personaInicial);

      /* Funcion para actualizar el estado privado     
      *que contiene el contrador 
      */

      function incrementarContador(){
        setContador(contador + 1);
      }

      /* Funcion para actualizar el estado de     
      *persona en el contrador 
      */
      function actualizarPersona(){
        serPersona(
            {
                nombre: 'Alberto',
                email: 'estenuevo@gmail.comm'
            }
        )
      }

  return (
    <div>
        <h1>Ejemplo de useState</h1>
        <h2>Contador: {contador}</h2>
        <h2>Datos de la persona</h2>
        <h3>NOMBRE: {persona.nombre}</h3>
        <h3>EMAIL: {persona.email}</h3>
        {/**Bloque de botones para actualizar datos del componente */}
        <button onClick={incrementarContador}>Aumnentar</button>
        <button onClick={actualizarPersona}>Actualizar persona</button> 
    </div>
  )
}

