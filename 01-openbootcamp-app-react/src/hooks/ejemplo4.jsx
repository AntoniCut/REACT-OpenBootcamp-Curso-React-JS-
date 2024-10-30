//  ***********************************************
//  **********  /src/hooks/ejemplo4.jsx  **********
//  ***********************************************

//  **********  Ejemplo de uso para entender el uso de props.children  **********


import React from 'react';

export const Ejemplo4 = (props) => {
    
    return (
        
        <div className='componentes'>
            
            <h2 className='titulo-componente'> ----- Ejemplo 4 - CHILDREN PROPS ----- </h2>        
            <h2> Nombre: {props.nombre} </h2>

            {/* props.children pintará por defecto aquello que se encuentre entre las etiquetas */}
            {/* de apertura y cierre de ese componente desde el componente de orden superior.  */}
            {props.children}

        </div>
    );
}
