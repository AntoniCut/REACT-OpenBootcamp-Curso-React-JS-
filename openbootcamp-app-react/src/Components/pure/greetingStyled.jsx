//  ****************************************************************************
//  **********  /openbootcamp/src/Components/pure/GreetingStyled.jsx  **********
//  ****************************************************************************


import React, { useState } from 'react';


//  *****  Definiendo Estilos en constantes  **********

//  -----  Estilo para usuario logeado  -----
const loggedStyle = {
    color: 'white'
}

//  -----  Estilo para usuario No logeado  -----
const unLoggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}


export const GreetingStyled = (props) => {

    //  -----  Generamos un estado para el componente y asi controlar si el usuario esta o no logueado  -----
    const [logged, setLogged] = useState(false);

    const greetingUser = () => (<h2 className='titulo-componente'> Hola, {props.name}</h2>)
    const pleaseLogin = () => (<h2 className='titulo-componente'> Please login </h2>)

    return (

        <div className='componentes'
            style={logged ? loggedStyle : unLoggedStyle} >

            {logged ? greetingUser() : pleaseLogin()}

            <button onClick={() => {
                console.warn('Botón pulsado');
                setLogged(!logged);
            }}>
                {logged ? 'Logout' : 'login'}
            </button>

        </div>
    );
}
