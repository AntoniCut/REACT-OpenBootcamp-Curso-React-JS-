//  ***************************************************************************
//  **********  /openbootcamp/src/Components/pure/TaskComponent.jsx  **********
//  ***************************************************************************


import propTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { useEffect } from 'react';
import '../../styles/task.scss';

//  **********  Componente TaskComponent para Pintar una Tarea  **********
export const TaskComponent = ({ task }) => {

    useEffect(() => {
        
        console.log('\n');
        console.warn('Create Task');
        
        return () => {
            console.warn(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);

    return (

        <div>
            <h3 className='task-name'> Nombre: {task.name}  </h3>
            <h4> Descripcion: {task.description}  </h4>
            <h4> level: {task.level}  </h4>
            <h4> This task is: {task.completed ? 'COMPLETED' : 'PENDING'}  </h4>
        </div>
    )
}


TaskComponent.propTypes = {
    task: propTypes.instanceOf(Task)
}
