//  **********************************************************************************
//  **********  openbootcamp-app-react/src/components/container/Father.jsx  **********
//  **********************************************************************************


import React, { useState } from 'react'
import { Child } from '../pure/Child';


//  **********  Componente Padre  **********
export const Father = () => {

    const [name, setName] = useState('Antonio');

    //  -----  Muestra el mensaje que se envia desde el padre  -----
    const showMessage = (text) => {
        alert(`Message received: ${text}`);
    }

    //  -----  Actualiza el nombre  -----
    const updateName = (newName) => {
        setName(newName);
    }


    return (

        <div className='componentes father'>

            <Child name={name} send={showMessage} update={updateName} />

        </div>
    );
}
