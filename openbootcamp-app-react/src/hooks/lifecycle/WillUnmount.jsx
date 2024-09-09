//  ************************************************************
//  **********  /src/hooks/lifecycle/WillUnMount.jsx  **********
//  ************************************************************

//  Ejemplo de uso del metodo componentWillUnMount 'ciclo de vida en componente clase'.
//  Y el hook de              componentWillUnMount 'ciclo de vida en componente funcional'.
//  Cuando el componente va ha desaparecer.


import React, { Component, useEffect } from 'react'


//  **********  Componente de tipo 'Clase'  **********

export class WillUnMounth extends Component {
  
  componentWillUnmount() {
    console.log('Comportamiento antes de que el componente desaparezca')
  }
  
  render() {
    return (
      <div>
        <h1> WillUnMount </h1>
      </div>
    )
  }
}



//  **********  Componente de tipo 'Función'  **********

export const WillUnMountHook = () => {

    useEffect(() => {
        
        //  ----------  aqui no ponemos nada  ----------

        return ()=> {
            console.log('Comportamiento antes de que el componente desaparezca')
        }
             
    }, [])

    return (
        <div>
            <h1> WillUnMountHook </h1>
        </div>
    )
}
