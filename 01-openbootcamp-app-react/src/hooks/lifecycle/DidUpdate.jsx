//  *********************************************************************************
//  **********  /openbootcamp-app-react/src/hooks/lifecycle/DidUpdate.jsx  **********
//  *********************************************************************************


import React, { Component, useEffect } from 'react';


//  Ejemplo de uso del metodo componentDidUpdate 'ciclo de vida en componente clase'.
//  Y uso del hook de         componentDidUpdate 'ciclo de vida en componente funcional'.


//  **********  Componente de tipo 'Clase'  **********

export class DidUpdateClass extends Component {

    componentDidUpdateClass() {
        console.log("\n");
        console.warn('----- ComponentDidUpdateClass() ----- Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
    }

    render() {
        
        return (
            <div className='componentes'>
                <h2 className='titulo-componente'> ----- DidUpdateClass ----- </h2>
            </div>
        )
    }
}


//  **********  Componente de tipo 'Función'  **********

export const DidUpdatetHook = () => {

    useEffect(() => {
        console.log("\n");
        console.warn('----- DidUpdateHook() ----- Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
    })

    return (
        <div className='componentes'>
            <h2 className='titulo-componente'> ----- DidUpdateHook ----- </h2>
        </div>
    )
}
