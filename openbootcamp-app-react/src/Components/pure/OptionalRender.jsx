//  ****************************************************************************
//  **********  /openbootcamp/src/Components/pure/OptionalRender.jsx  **********
//  ****************************************************************************


import { useState } from "react";
import { loggedStyle, unLoggedStyle } from "./greetingStyled";


//  *****  Login Buttons  *****
const LoginButton = ({ loginAction, propStyle }) => {

    return (
        <button onClick={loginAction} style={propStyle}> Login </button>
    )
}


//  *****  Logout Buttons  *****
const LogoutButton = ({ logoutAction, propStyle }) => {

    return (
        <button onClick={logoutAction} style={propStyle} > Logout </button>
    )
}


//  ----------------------------------------------------------------

// ? (Expresión true) && expresión => se renderiza la expresión
// ? (Expresión false) && expresión => no se renderiza la expresión

//  ----------------------------------------------------------------


//  **********  Componente OptionRender()  **********
export const OptionalRender = () => {

    //  -----  useState  -----
    const [access, setAccess] = useState(false);
    const [numMessages, setNumMessages] = useState(0);

    // const updateAccess = () => {
    //     setAccess(!access);
    // }


    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }


    let optionalButton;

    // if(access){
    //     optionalButton = <button onClick={updateAccess}>Logout</button>
    // }else{
    //     optionalButton = <button onClick={updateAccess}>Login</button>
    // }


    //  -----  Renderizado Condicional del Botón  -----
    if (access) {
        optionalButton = <LogoutButton propStyle={unLoggedStyle} logoutAction={logoutAction} > </LogoutButton>
    } else {
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction} > </LoginButton>
    }


    //  -----  Renderizado Condicional del Mensaje - Mensaje sin leer  -----
    const addMessages = () => {
        setNumMessages(numMessages + 1);
    }


    return (

        <div className="componentes">

            <h2 className='titulo-componente'> -----  Optional Render  ----- </h2>

            <br />
            {optionalButton}

            <br />

            {
                access ? (
                    <>
                        {/* -----  Renderizado Condicional  --  &&  ----- */}
                        {numMessages > 0 && <p> && condicional - You have {numMessages} new message{numMessages > 1 && 's'}... </p>}
                        {numMessages === 0 && <p> && condicional - There are no new new messages... </p>}


                        {/* -----  Renderizado Condicional  --  Operador Ternario  ----- */}
                        {
                            numMessages > 0 ?
                                <p> Operador Ternario - You have {numMessages} new message{numMessages > 1 ? 's' : null}... </p>
                                :
                                <p> Operador Ternario - There are no new new messages... </p>
                        }

                        <button onClick={addMessages}> {numMessages === 0 ? 'Add your first message' : 'Add new Message'} </button> <br />
                        <button onClick={() => { setNumMessages(0) }}> Delete All Message </button>
                    </>
                ) : null
            }

        </div>
    )
}









