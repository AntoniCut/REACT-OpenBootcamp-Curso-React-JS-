//  ************************************************************************************
//  **********  /openbootcamp/src/Components/container/TaskListComponent.jsx  **********
//  ************************************************************************************


import React, { useEffect, useState } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import { TaskComponent } from '../pure/TaskComponent';
import '../../styles/task.scss';
import { TaskForm } from '../pure/forms/TaskForm';
import Draggable from 'react-draggable';


//  **********  Componente Lista de Tareas  **********
export const TaskListComponent = () => {

    //  -----  Creamos una Tarea y se la pasamos al componente TaskComponent  -----
    const defaultTask1 = new Task('Example1', 'Default Description 1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Default Description 2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Default Description 3', true, LEVELS.BLOCKING);


    //  -----  Estado de los Componentes  -----
    const [tasks, setTask] = useState([defaultTask1, defaultTask2, defaultTask3]);

    //  -----  Estado para controlar la visibilidad del formulario  -----
    const [showForm, setShowForm] = useState(false);

    const [loading, setLoading] = useState(true);


    //  -----  Control del Ciclo de Vida -----
    useEffect(() => {

        console.log("\n");
        console.warn('Task State has been modified');

        setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => {
            console.warn('TaskList component is going to unmount...');
        };
    }, [tasks]);


    //  ----------  Logica de TAREAS  ----------

    //  -----  Tarea Completada  -----
    const completeTask = (task) => {

        console.log("\n");
        console.warn('-----  Complete this Task  -----', task);

        const index = tasks.indexOf(task);       //  Obtenemos el indice de la tarea.
        const tempTask = [...tasks];            //  variable temporal.
        tempTask[index].completed = !tempTask[index].completed;

        //  -----  Actualizamos el estado del componente y actualizara la iteración
        //  -----  de las tareas en el orden para mostrar.
        setTask(tempTask);
    }


    //  -----  Tarea Eliminada  -----
    const deleteTask = (task) => {

        console.log("\n");
        console.warn('-----  Delete this Task  -----', task);

        const index = tasks.indexOf(task);       //  Obtenemos el indice de la tarea.
        const tempTask = [...tasks];             //  variable temporal.
        tempTask.splice(index, 1);               //  Eliminamos una tarea por indice.

        //  -----  Actualizamos el estado del componente y actualizara la iteración
        //  -----  de las tareas en el orden para mostrar.
        setTask(tempTask);
    }


    //  -----  Crear Tarea  -----
    const addTask = (task) => {

        console.log("\n");
        console.warn('-----  Añadir Tarea  -----', task);

        //const index = tasks.indexOf(task);       //  Obtenemos el indice de la tarea.
        const tempTask = [...tasks];            //  variable temporal.

        //  -----  Añadimos tarea  -----
        tempTask.push(task);
        setTask(tempTask);
    }


    //  -----  Añadir la Tabla  -----
    const Table = () => {

        return (

            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col' style={{ width: '30%' }}> Title </th>
                        <th scope='col' style={{ width: '50%' }}> Description </th>
                        <th scope='col' style={{ width: '10%' }}> Priority </th>
                        <th scope='col' style={{ width: '10%' }}> Actions </th>
                    </tr>
                </thead>

                <tbody>

                    {/* ----------  Itera sobre una lista de tareas  ---------- */}

                    {
                        tasks.map((task, index) => {
                            return (
                                <TaskComponent
                                    key={index}
                                    task={task}
                                    complete={completeTask}
                                    remove={deleteTask}
                                />
                            )
                        })
                    }

                </tbody>
            </table>

        )
    }


    let taskTable;

    if (tasks.length > 0) taskTable = <Table />
    else taskTable = (
        <div>
            <h3> There are no Tasks to show !!! </h3>
            <h4> Please, create one !</h4>
        </div>
    )


    return (

        <div className='componentes lista-tareas'>

            <Draggable >

                {/* -----  Estilos de Bootstrap  ----- */}
                <div className='col-10 mx-auto'>

                    <div className='card'>

                        <div className='card-header p-3'>
                            <h5 className='label-titulo'> ----- Lista de Tareas ----- </h5>

                            {/* Mostrar/ocultar formulario con el botón */}
                            <button onClick={() => setShowForm(!showForm)}>
                                {showForm ? "Close Form" : "Add Task"}
                            </button>


                        </div>

                        <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: 'auto' }} >

                            {/* ----------  Aqui se Renderiza la Tabla para la Lista de Tareas  ---------- */}

                            { loading ? <i style={{fontSize: '40px'}}> Loading Tasks... 🔄 </i> : taskTable }

                        </div>

                    </div>

                </div>

            </Draggable>

            {/*  **********  Mostrar formulario basado en el estado showForm  **********  */}
            {showForm && <TaskForm add={addTask} length={tasks.length} />}


        </div>
    );
}
