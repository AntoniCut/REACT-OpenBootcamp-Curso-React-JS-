//  **********************************************************************************
//  **********  //openbootcamp-app-react/src/hooks/lifecycle/AllCycles.jsx  **********
//  **********************************************************************************

//  Ejemplo de uso del metodo componentWillUnMount 'ciclo de vida en componente clase'.
//  Y el hook de              componentWillUnMount 'ciclo de vida en componente funcional'.
//  Cuando el componente va ha desaparecer.

import React, {useEffect} from 'react';


//  **********  Componente de tipo 'Funcional'  **********

const Allcycles = ()=> {
    
    useEffect(() => {

        console.log('Componente Creado')
        
        const intervalID = setInterval( ()=> {
            document.title = `${new Date()}`
            console.log('Actualizacion del componente')
        }, 1000)
        
        return () => {
            console.log('Componente va ha desaparecer')    
            document.title = "Tiempo detenido"
            clearInterval(intervalID)
        };

    }, []);
        
    
    return (
        <div>
            
        </div>
    );
}

export default Allcycles;
