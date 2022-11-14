/**
 * Ejemplo de hooks para uso
 * -useState()
 * -useRef()
 * -useEffect()
 */

import React, {useState,useRef,useEffect} from 'react'

export default function Ejemplo2() {

    const [contador1,setContador1] = useState(0);
    const [contador2,setContador2] = useState(0);

    //Vamos a crear una refernecia con useRef() para asociar una variable

    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 +1);
    }

    function incrementar2(){
        setContador2(contador2 +1);
    }

    /**
     * ? Caso 1: Ejecutar SIEMPRE un snippet de código
     * Cada vez que haya un cambio en el estado del componenete
     * se ejecuta lo que esta dentro del useEffect()
     */

     /* useEffect(()=>{
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        console.log('Mostrando Referencia a elemento del DOM:');
        console.log(miRef);
     }) */

     /**
     * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1
     * Cada vez que haya un cambio en el estado del componenete
     * se ejecuta lo que esta dentro del useEffect()
     */

     /* useEffect(()=>{
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
        console.log('Mostrando Referencia a elemento del DOM:');
        console.log(miRef);
     }, [contador1]); */

     /**
     * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1 o CONTADOR2
     * Cada vez que haya un cambio en el estado del componenete
     * se ejecuta lo que esta dentro del useEffect()
     */

      useEffect(()=>{
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR2');
        console.log('Mostrando Referencia a elemento del DOM:');
        console.log(miRef);
     }, [contador1, contador2]);







  return (
    <div>
        <h1>Ejemplo de useState(), useRef() y useEffect() </h1>
        <h2>CONTADOR 1: {contador1}</h2>
        <h2>CONTADOR 2: {contador2}</h2>
        {/**Elemento referenciado */}
        <h4 ref={miRef}>
            Elemento referenciado
        </h4>
        <div>
            <button onClick={incrementar1}>Incrementar contador 1</button>
            <button onClick={incrementar2}>Incrementar contador 2</button>
        </div>

    </div>
  )
}






