//  ******************************************************************************************
//  **********  /openbootcamp-app-react/src/components/pure/forms/TaskForm.jsx  **************
//  ******************************************************************************************


//import React from 'react';
import propTypes from 'prop-types';
import { useRef } from 'react';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import Draggable from 'react-draggable';


//  **********  Formulario para Añadir Tareas  **********
export const TaskForm = ({ add, length }) => {


    //  -----  Referencias a los campos del Formularios  -----
    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);


    //  -----  Función que Añade una Tarea para Renderizarla  -----
    const addTask = (e) => {

        e.preventDefault();

        //  -----  Obtenemos valores del Formulario  -----
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value,
        )

        //  -----  Añadimos tarea nueva  -----
        add(newTask);
    }


    //  -----  Estilos para el Levels de la Tarea - Priority -----
    const normalStyle = {
        color: 'blue',
        fontWeight: 'bold'
    }

    const urgentStyle = {
        color: 'rgb(255, 215, 0)',
        fontWeight: 'bold'
    }

    const blockingStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }


    return (

        <Draggable>

            <form onSubmit={addTask}
                className='task-form d-flex justify-content-center align-items-center mb-4'
                style={{ marginTop: '50px' }}
            >

                <div className='form-outline flex-fill'>

                    <input ref={nameRef} id='inputName' type='text'
                        className='form-form-control-lg'
                        placeholder='Task Name...' required autoFocus />

                    <br /> <br />

                    <input ref={descriptionRef} id='inputDescription' type='text'
                        className='form-form-control-lg'
                        placeholder='Task Description...' required />

                    <br /> <br />

                    <label htmlFor='selectLevel' className='sr-only'> Priority &nbsp; </label>
                    <select ref={levelRef} defaultValue={LEVELS.NORMAL} style={normalStyle} id='selectLevel'>
                        <option value={LEVELS.NORMAL} style={normalStyle}> Normal </option>
                        <option value={LEVELS.URGENT} style={urgentStyle}> Urgent </option>
                        <option value={LEVELS.BLOCKING} style={blockingStyle}> Blocking </option>
                    </select>

                    <br /> <br />

                    <button type='submit' className='btn btn-success btn-lg ms-2'>  
                        {length > 0 ? 'Add New Task' : 'Create your First Task'}
                    </button>


                </div>

            </form>

        </Draggable>

    );
}


TaskForm.propTypes = {
    add: propTypes.func.isRequired,
    length: propTypes.number.isRequired
}


