/*Componente con Funciones*/
import React, {useState} from 'react'
import PropTypes from 'prop-types'

const GreetingF = props => {
    const [age,setage]=useState(34);
    const birthday =()=>{
        setage(age +1);
    }
  return (
    <div>
        <h1>Saludo {props.name} !</h1>

        <p>Hola me llamo {props.name} soy Full Stack Developer</p>

        <h2>Tu edad es {age} </h2>
        <div>
          <button onClick={birthday}>
            Cumple años
          </button>
        </div>

      </div>
  )
}

GreetingF.propTypes = {
    name: PropTypes.string
}

export default GreetingF























