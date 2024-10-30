//  *******************************************************************************************
//  **********  /openbootcamp-app-react/src/components/pure/forms/LoginForm.jsx  **************
//  *******************************************************************************************


import React, { useState } from 'react';


//  *****Componente que va ha contener un formulario para autenticacion de usuarios  *****
export const LoginForm = ()=> {
    
    const initialCredentials = [
        {
            user:     '',
            password: ''
        }
    ] 

    //  Estado del componente.
    const [credentials, setCredentials] = useState(initialCredentials);
        
    return (
        
        <div>
            
        </div>
    );
}
