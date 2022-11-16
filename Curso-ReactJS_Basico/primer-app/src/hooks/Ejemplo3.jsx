/**
 * Ejemplo Hooks:
 * -useState()
 * -useContext()
 */

import React, { useState, useContext } from "react";

const miContexto = React.createContext(null);

const Componente1 = () => {
  const state = useContext(miContexto);
  return (
    <div>
      <h1>El token es: {state.token}</h1>
      {/**Pintamos el componente 2 */}
      <Componente2></Componente2>
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);
  return (
    <div>
      <h2>La sesion es: {state.sesion}</h2>
      <div>
        <label htmlFor="">Usuario </label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Password </label>
        <input type="password" />
      </div>
    </div>
  );
};

export default function MiComponenteConContexto() {
  const estadoInicial = {
    token: "12345657",
    sesion: 1,
  };
  /**
   * Esta es la estructura que debe ir siempre cuando usemos useState()
   * const [nombreVarialbe, funcionParaCambiar] = useState(valorInicial); 
   */
  const [sessionData, setSessionData] = useState(estadoInicial);

  /**Funcion para actualizar el estado de sesion en el componente Contexto */
  function actualizarSesion() {
    setSessionData({
      token: "JWT123456789",
      sesion: sessionData.sesion + 1,
    });
  }

  return (
    <miContexto.Provider value={sessionData}>
      {/**Todo lo que esta aqui dentro puede leer los datos de sessionData */}
      {/** */}
      <Componente1></Componente1> 

      <button onClick={actualizarSesion}> Actualizar sesion </button>
    </miContexto.Provider>
  );
}
