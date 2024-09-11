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
export const TaskForm = ({ add }) => {


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




    return (

        <Draggable>

            <form onSubmit={ addTask } className='d-flex justify-content-center align-items-center mb-4'>

                <div className='form-outline flex-fill'>

                    <input ref={nameRef} id='inputName' type='text'
                        className='form-form-control-lg'
                        placeholder='Task Name...' required autoFocus />



                    <input ref={descriptionRef} id='inputDescription' type='text'
                        className='form-form-control-lg'
                        placeholder='Task Description...' required />


                    <label htmlFor='selectLevel' className='sr-only'> Priority </label>
                    <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                        <option value={LEVELS.NORMAL}> Normal </option>
                        <option value={LEVELS.BLOCKING}> Urgent </option>
                        <option value={LEVELS.BLOCKING}> Blocking </option>
                    </select>
                    <button type='submit' className='btn btn-success btn-lg ms-2'> Add </button>


                </div>

            </form>

        </Draggable>

    );
}


TaskForm.propTypes = {
    add: propTypes.func.isRequired
}


