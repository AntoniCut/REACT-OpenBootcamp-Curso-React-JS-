//  **********************************************************************************
//  **********  /openbootcamp-app-react/src/hooks/lifecycle/AllCycles.jsx  **********
//  **********************************************************************************


import React, {useEffect} from 'react';


//  Ejemplo de uso del metodo componentWillUnMount 'ciclo de vida en componente clase'.
//  Y el hook de              componentWillUnMount 'ciclo de vida en componente funcional'.
//  Cuando el componente va ha desaparecer.


//  **********  Componente de tipo 'Funcional'  **********

export const AllCycles = ()=> {
    
    useEffect(() => {

        console.log("\n");
        console.warn('AllCycles - Componente Creado');
        
        const intervalID = setInterval( ()=> {
            document.title = `${new Date()}`;
            console.log('Actualizacion del componente');
            //const title = document.title = `${new Date()}`;
            //console.log('Actualizacion del componente', title )
        }, 1000)
        
        return () => {
            console.log('Componente va ha desaparecer')    
            document.title = "Tiempo detenido"
            clearInterval(intervalID)
        };

    }, []);
        
    
    return (
        <div className='componentes'>
            <h2 className='titulo-componente'> ----- AllCycles  ----- </h2>
        </div>
    );
}
