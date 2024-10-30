//  ****************************************************************************
//  **********  /openbootcamp-app-react//src/hooks/ejemplo2Caso3.jsx  **********
//  ****************************************************************************


import React, { useState, useRef, useEffect } from 'react';


/*
    **********  Ejemplo de uso de los siguientes hooks  **********

    -  useState().
    -  useRef(),     Identificar o referenciar elementos o valores dentro de la vista.
    -  useEffect(),  Nos ayuda a controlar los cambios en la vista.

*/


export const Ejemplo2Caso3 = () => {

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

    
    //  Trabajando con UseEffect().

    //  -----  Caso 3: Ejecutar SOLO cuando cambie contador 1 o Contador 2 -----

    //    Cada vez que haya yn cambio en contador 1, se ejecutara lo que diga useEffect()
    //    Cada vez que haya yn cambio en contador 2, se ejecutara lo que diga useEffect()

    useEffect(() => {
        console.log("*****  ejemplo2Caso3  *****  CAMBIO EN EL ESTADO DEL CONTADOR 1 o CONTADOR 2  *****")
        console.log('Mostrando referencia a elemento del DOM')
        console.log({ miRef })
    }, [contador1, contador2]);


    return (

        <div className='componentes'>

            <h2 className='titulo-componente'> ----- Ejemplo 2 - Caso 2 - de useState(), useRef() y useEffect() ----- </h2>

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
    );
}
