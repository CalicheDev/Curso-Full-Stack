/**
 *
 */

import React, { useState } from "react";

//Definiendo stilos en constantes
//? Estilo para usuario logueado
const loggedStyle = {
  color: "blue",
};

//? Estilo para usuario no logueado
const unloggedSyle = {
  color: "red",
  fontWeight: "bold",
};

export default function Greetingstyle(props) {
  /** Generamos un estado para el componenete
   * para controlar si el usuario esta o no logueado
   */
  const [logeed, setLogeedfirst] = useState(false);

  return (
    <div style={logeed ? loggedStyle : unloggedSyle}>
        {logeed ? (<p>Hola {props.name} </p>) : ( <p>Please Login</p> )}
      
      <button
        onClick={() => {
          console.log("Boton pulsado"); 
          setLogeedfirst(!logeed);
        }}
      >
        {logeed ? "Logout" : "Login"}
      </button>
    </div>
  );
}
