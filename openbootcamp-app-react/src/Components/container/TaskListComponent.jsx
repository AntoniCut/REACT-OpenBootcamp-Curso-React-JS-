//  ************************************************************************************
//  **********  /openbootcamp/src/Components/container/TaskListComponent.jsx  **********
//  ************************************************************************************


import React from 'react'
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import { TaskComponent } from '../pure/TaskComponent';


//  **********  Componente Lista de Tareas  **********
export const TaskListComponent = () => {

    //  -----  Creamos una Tarea y se la pasamos al componente TaskComponent
    const defaultTask = new Task('Example', 'Default Description', 'false', LEVELS.NORMAL);

    const changeState = (id) => {
        console.log('TODO: Cambiar el estado de una tarea');
    }

    return (

        <div className='componentes'>

            <h2> Lista de Tareas </h2>

            {/* TODO: Aplicar un Map para Renderizar una Lista de Tareas */}
            <TaskComponent task={defaultTask} />

        </div>
    )

}
