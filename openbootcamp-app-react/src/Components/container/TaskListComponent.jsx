//  ************************************************************************************
//  **********  /openbootcamp/src/Components/container/TaskListComponent.jsx  **********
//  ************************************************************************************


import React, { useEffect, useState } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import { TaskComponent } from '../pure/TaskComponent';
import '../../styles/task.scss';
import { TaskForm } from '../pure/forms/TaskForm';


//  **********  Componente Lista de Tareas  **********
export const TaskListComponent = () => {

    //  -----  Creamos una Tarea y se la pasamos al componente TaskComponent
    const defaultTask1 = new Task('Example1', 'Default Description 1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Default Description 2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Default Description 3', true, LEVELS.BLOCKING);


    //  -----  Estado de los Componentes  -----
    const [tasks, setTask] = useState([defaultTask1, defaultTask2, defaultTask3]);

    const [loading, setLoading] = useState(true);


    //  -----  Control del Ciclo de Vida -----
    useEffect(() => {

        console.log("\n");
        console.warn('Task State has been modified');
        setLoading(false);

        return () => {
            console.warn('TaskList component is going to unmount...');
        };
    }, [tasks]);


    const changeCompleted = (id) => {
        console.log('TODO: Cambiar el estado de una tarea');
    }


    return (

        <div>

            {/* -----  Estilos de Bootstrap  ----- */}
            <div className='col-10 mx-auto' style={{ marginTop: '50px' }}>

                <div className='card'>

                    <div className='card-header p-3'>
                        <h5> ----- Lista de Tareas ----- </h5>
                    </div>

                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }} >

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
                                            <TaskComponent key={index} task={task} />
                                        )
                                    })
                                }

                            </tbody>

                        </table>

                    </div>

                </div>

                <TaskForm />

            </div>


        </div>
    );
}
