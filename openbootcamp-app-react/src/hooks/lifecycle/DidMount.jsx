//  *********************************************************
//  **********  /src/hooks/lifecycle/DidMount.jsx  **********
//  *********************************************************

//  Ejemplo de uso del metodo 'ciclo de vida en componente clase'.
//  Y el hook de              'ciclo de vida en componente funcional'.

import React, { Component, useEffect } from 'react'


//  **********  Componente de tipo 'Clase'  **********

export class DidMount extends Component {

    componentDidMount() {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)')
    }

    render() {
        return (
            <div>
                <h1> DidMount </h1>
            </div>
        )
    }
}


//  **********  Componente de tipo 'Función'  **********

export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)')
    }, [])

    return (
        <div>
            <h1> DidMountHook </h1>
        </div>
    )
}




