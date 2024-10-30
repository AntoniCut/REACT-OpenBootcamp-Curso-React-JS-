//  ********************************************************
//  **********  02/openbootcamp-app-react-redux/  **********
//  **********  /src/components/pure/  *********************
//  **********  /TodoForm.jsx  *****************************
//  ********************************************************


import React, { useRef } from 'react';
import PropTypes from 'prop-types';


//  ----------  TODO FORM  --  Componente Formulario  ----------
export const TodoForm = ({ submit }) => {


    //  -----  Referencia al input de texto  -----
    const newText = useRef();


    return (

        <div className='todo-form'>

            <h2> ----- Create your TODOs ----- </h2>

            <form onSubmit={(e) => {
                e.preventDefault();
                submit(newText.current.value);
                newText.current.value = '';
            }}>
                <input type='text' ref={newText} />
                <br /> <br />
                <button type='submit'> Create Todo </button>
            </form>

            <h2> ------------------------------------ </h2>
        </div>
    )
}


//  -----  Prop Types  -----
TodoForm.propTypes = {
    submit: PropTypes.func.isRequired
}
