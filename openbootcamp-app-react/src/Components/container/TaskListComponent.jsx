//  ************************************************************************************
//  **********  /openbootcamp/src/Components/container/TaskListComponent.jsx  **********
//  ************************************************************************************


import React, { useEffect, useState } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import { TaskComponent } from '../pure/TaskComponent';
import '../../styles/task.scss';


//  **********  Componente Lista de Tareas  **********
export const TaskListComponent = () => {

    //  -----  Creamos una Tarea y se la pasamos al componente TaskComponent
    const defaultTask = new Task('Example', 'Default Description', 'false', LEVELS.NORMAL);


    //  -----  Estado de los Componentes  -----
    const [task, setTask] = useState({defaultTask});
    const [loading, setLoading] = useState(true);
   

    //  -----  Control del Ciclo de Vida -----
    useEffect(() => {
        
        console.log("\n");
        console.warn('Task State has been modified');
        setLoading(false);

        return () => {
            console.warn('TaskList component is going to unmount...');
        };
    }, [task]);


    const changeCompleted = (id) => {
        console.log('TODO: Cambiar el estado de una tarea');
    }


    return (

        <div className='componentes'>

            <h2 className='titulo-componente task-title'> ----- Lista de Tareas ----- </h2>

            {/* TODO: Aplicar un Map para Renderizar una Lista de Tareas */}
            <TaskComponent task={defaultTask} />

        </div>
    );
}
