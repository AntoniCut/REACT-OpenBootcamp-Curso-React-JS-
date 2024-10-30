//  ********************************************************************************
//  **********  /openbootcamp-app-react/src/hooks/lifecycle/DidMount.jsx  **********
//  ********************************************************************************


import React, { Component, useEffect } from 'react';


//  Ejemplo de uso del metodo 'ciclo de vida en componente clase'.
//  Y el hook de              'ciclo de vida en componente funcional'.


//  **********  Componente de tipo 'Clase'  **********

export class DidMountClass extends Component {

    componentDidMount() {
        console.log("\n");
        console.warn('----- ComponentDidMountDidMount() ----- Comportamiento antes de que el componente sea añadido al DOM (renderice)');
    }

    render() {
        
        return (
            <div className='componentes'>
                <h2 className='titulo-componente'> ----- DidMountClass ----- </h2>
            </div>
        )
    }
}


//  **********  Componente de tipo 'Función'  **********

export const DidMountHook = () => {

    useEffect(() => {
        console.log("\n");
        console.log('----- DidMountHook() ----- Comportamiento antes de que el componente sea añadido al DOM (renderice)');
    }, [])

    return (
        <div className='componentes'>
            <h2 className='titulo-componente'> ----- DidMountHook ----- </h2>
        </div>
    )
}
