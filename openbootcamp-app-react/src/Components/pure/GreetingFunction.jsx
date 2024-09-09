//  ******************************************************************************
//  **********  /openbootcamp/src/Components/pure/GreetingFunction.jsx  **********
//  ******************************************************************************


import { useState } from "react";


//  **********  Componente Funcional - GreetingFunction  **********
export const GreetingFunction = (props) => {

    //  -----  Breve introducción a useState  -----
    // const [variable, método para actualizarlo] = useState(valor inicial)
    const [age, setAge] = useState(48);

    const birthday = () => {
        
        //  -----  Actualizamos el State  -----
        setAge(age + 1);
    }

    
    return (

        <div className="componentes">
            
            <h2 className='titulo-componente'> -----  GreetingFunction - Soy un Componente Funcional  ----- </h2>
            <h3> ¡Hola, soy {props.name} y tengo {age} años! </h3>
            <button onClick={birthday}> Cumplir Años </button>

        </div>
    )

}