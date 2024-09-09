//  *****************************************************************
//  **********  /openbootcamp/src/hooks/ejemplo2Caso1.jsx  **********
//  *****************************************************************


import React, { useState, useRef, useEffect } from 'react';


/*
    **********  Ejemplo de uso de los siguientes hooks  **********

    -  useState().
    -  useRef(),     Identificar o referenciar elementos o valores dentro de la vista.
    -  useEffect(),  Nos ayuda a controlar los cambios en la vista.

*/


export const Ejemplo2Caso1 = () => {

    //  Crear dos contadores distintos, cada uno en un estado diferente.
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    
    //  Vamos a crear una referencia con useRef() para asociar una variable
    //  con un elemento del DOM del componente (vista HTML).
    const miRef = useRef();

    //  ----------  CONTADOR 1  ----------

    //  -----  Decrementar el Contador  -----
    function decrementarContador1() {
        if (contador1 === 0) return;
        setContador1(contador1 - 1);
    }

    //  -----  Incrementar el Contador  -----
    function incrementarContador1() {
         setContador1(contador1 + 1);
    }


    //  ----------  CONTADOR 2  ----------

    //  -----  Decrementar el Contador  -----
    function decrementarContador2() {
        if (contador2 === 0) return;
        setContador2(contador2 - 1);
    }

    //  -----  Incrementar el Contador  -----
    function incrementarContador2() {
         setContador2(contador2 + 1);
    }
   


    //  **********  Trabajando con UseEffect()  **********

    //  -----  Caso 1: Ejecutar SIEMPRE un snippet de código  -----

    //    Cada vez que haya un cambio en el estado del componente
    //    se ejecuta aquello que este dentro del useEffect.
    useEffect(() => {
        console.log("*****  ejemplo2Caso1  ***** CAMBIO EN EL ESTADO DEL COMPONENTE  *****");
        console.log('Mostrando referencia a elemento del DOM');
        console.log({ miRef });
    });


    return (

        <div className='componentes'>

            <h2 className='titulo-componente'> ----- Ejemplo 2 - Caso 1 - de useState(), useRef() y useEffect() ----- </h2>

            <h2> Contador 1: {contador1} </h2>
            <div className='btn-container'>
                <button onClick={decrementarContador1}> Decrementar Contador 1 </button>
                <button onClick={incrementarContador1}> Incrementar Contador 1 </button>
            </div>

            <h2> Contador 2: {contador2} </h2>
            <div className='btn-container'>
                <button onClick={decrementarContador2}> Decrementar Contador 2 </button>
                <button onClick={incrementarContador2}> Incrementar Contador 2 </button>
            </div>

            { /*  Elemento Referenciado */}
            <h2 ref={miRef}> Ejemplo de elemento referenciado </h2>
            
        </div>
    )
}
