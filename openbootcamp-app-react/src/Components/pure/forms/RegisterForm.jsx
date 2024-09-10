//  **********************************************************************************************
//  **********  /openbootcamp-app-react/src/components/pure/forms/RegisterForm.jsx  **************
//  **********************************************************************************************

//  Componente que va ha contener un formulario para autenticacion de usuarios.

import React, { useState } from 'react';

export const RegisterForm = () => {
    
    const initialData = [
        {
            user:     '',
            name:     '',
            email:    '',
            password: ''
        }
    ] 

    //  Estado del componente.
    const [data, setData] = useState(initialData);
        
    return (
        
        <div>
            
        </div>
    );
}
