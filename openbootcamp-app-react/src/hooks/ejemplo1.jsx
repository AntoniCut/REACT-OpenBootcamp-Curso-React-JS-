//  ************************************************************
//  **********  /openbootcamp/src/hooks/ejemplo1.jsx  **********
//  ************************************************************


import React, { useState } from 'react';


/*
    **********  Ejemplo de uso del Hook 'useState'  **********

    Crear componente de tipo función y acceder a su estado 
    privado a través de un hook y, ademas, poder modificarlo.

*/


export const Ejemplo1 = () => {
    
    //  Valor inicial para un contador.
    const valorInicial = 0;

    //  Valor inicial para una persona.
    const personaInicial = {
        nombre: 'Antonio',
        email:  'antonicut@gmail.com'
    }

    //  Queremos que el VALORINICIAL y PERSONAINICIAL sean
    //  parte del estado del componente para asi poder gestionar su
    //  cambio y que este se vea reflejado en la vista del componente.
    
    //  -----  Estructura  -----
    //  const [nombreVariable, funcionParaCambiar] = useState(valorInicial).
    
    const [contador, setcontador] = useState(valorInicial);
    const [persona, setPersona]   = useState(personaInicial);

    // Funciones para actualizar el estado privado que contiene el contador.
    
    //  -----  Decrementar el Contador  -----
    function decrementarContador() {

        //  funcionParaCambiar(nuevoValor).
        if(contador === 0) return;
        
        setcontador(contador - 1);
    }

    //  -----  Incrementar el Contador  -----
    function incrementarContador() {

        //  funcionParaCambiar(nuevoValor).
        setcontador(contador + 1);
    }

    // Funcion para actualizar el estado de persona en el componente. 
    function actualizarPersona() {
        
        //  funcionParaCambiar(nuevoValor).
        setPersona({
            nombre: 'Pepe',
            email:  'pepeluis@gmail.com'
        })
    }
    

    return (
        
        <div className='componentes'>
            
            <h2 className='titulo-componente'> ----- Ejemplo 1 - useState() ----- </h2>
            
            <h2> Contador: {contador} </h2>

            { /*  Bloque de botones para actualizar el estado del componente  */}
            <div className='btn-container'>
                <button onClick={decrementarContador}> Decrementar Contador </button>
                <button onClick={incrementarContador}> Incrementar Contador </button>
            </div>


            <h2> Datos de la Persona: </h2>
            <h3> Nombre: {persona.nombre} </h3>
            <h3> Email: {persona.email} </h3>

            { /*  Bloque de botones para actualizar el estado del componente  */}
            <div className='btn-container'>
                <button onClick={actualizarPersona}> Actualizar Persona </button>
            </div>
            

        </div>
    )
}
