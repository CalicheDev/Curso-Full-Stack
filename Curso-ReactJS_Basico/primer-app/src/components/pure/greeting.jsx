/*Componente con Clases*/
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Greeting extends Component {
  // static propTypes = {second: third}
  constructor(props){
    super(props);
    this.state={
      name : "Carlos",
      age : 34
    }
  }

  render() {
    return (
      <div>
        <h1>Saludo {this.props.name} !</h1>

        <p>Hola me llamo Carlos Bejarano soy Full Stack Developer</p>

        <h2>Tu edad es {this.state.age} </h2>
        <div>
          <button onClick={this.birthday}>
            Cumple años
          </button>
        </div>

      </div>
    )
  }
  birthday = () => {
    this.setState((prevState) => (
      {
        age: prevState.age +1
      }
    ))
  }
}

/* Los proTypes son como el TypeScript sirve para definir 
el tipo de dato o varialbe que se debe ingresar */
Greeting.propTypes= {
  name: PropTypes.string,
};

// export default Greeting;