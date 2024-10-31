//  ************************************************************
//  **********  /openbootcamp/src/hooks/ejemplo3.jsx  **********
//  ************************************************************


import React, { useState, useContext } from 'react';


/*
    **********  Ejemplo de uso de los siguientes hooks  **********

    -  useState().
    -  useContext(),  utiliza el contexto o datos y se le pasa a componentes inferiores.

*/


//  ----------  Inicializamos un estado vacio que va  ----------------------- 
//  ----------  a rellenarse con los datos del contexto del padre  ----------
const miContexto = React.createContext(null);


//  **********  Componente 1()  **********  
//      -  dispone de un contexto que va a tener un valor que recibe desde el padre.
const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        
        <div>
            <h3> El Token es: {state.token} </h3>

            { /* Pintamos el Componente2 */}
            <Componente2 />
        </div>
    );
}


//  **********  Componente2()  **********  
//      -  dispone de un contexto que va a tener un valor que recibe desde el padre.

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h3> La sesión es: {state.sesion} </h3>
        </div>
    );
}


//  **********  MiComponenteContexto()  **********  
export function MiComponenteConContexto() {

    //  -----  Estado Inicial de Token y Sesión  -----
    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    //  -----  Creamos el estado de este componente  -----
    const [sessionData, setSessionData] = useState(estadoInicial);

    //  -----  Función que Actualiza la sesión  -----
    function actualizarSesion() {

        setSessionData({
            token: 'JWT123456789',
            sesion: sessionData.sesion + 1
        })
    }

    return (
        
        <miContexto.Provider value={sessionData}>

            {/* Todo lo que esta aqui dentro puede leer los datos de sessionData */}
            {/* Ademas, si se actualiza, los componentes de aqui, tambien lo actualizan */}

            <div className='componentes'>
                <h2 className='titulo-componente'> ----- Ejemplo 3 - Ejemplo de useState() y useContext() ----- </h2>
                <Componente1 />
                <button onClick={actualizarSesion}> Actualizar Sesión </button>
            </div>

        </miContexto.Provider>
    )
}
