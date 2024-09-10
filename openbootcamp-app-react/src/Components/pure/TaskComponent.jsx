//  ***************************************************************************
//  **********  /openbootcamp/src/Components/pure/TaskComponent.jsx  **********
//  ***************************************************************************


import propTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { useEffect } from 'react';
import '../../styles/task.scss';
import { LEVELS } from '../../models/levels.enum';

//  **********  Componente TaskComponent para Pintar una Tarea  **********
export const TaskComponent = ({ task }) => {

    useEffect(() => {

        console.log('\n');
        console.warn('Create Task');

        return () => {
            console.warn(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);

    //  -----  Función que devuelbe un 'badge' y depende del level de la tarea  -----
    const taskLevelBadge = () => {

        switch (task.level) {

            case LEVELS.NORMAL:
                return (<h6 className='mb-0'> <span className='badge bg-primary'> {task.level} </span> </h6>)

            case LEVELS.URGENT:
                return (<h6 className='mb-0'> <span className='badge bg-warning'> {task.level} </span> </h6>)

            case LEVELS.BLOCKING:
                return (<h6 className='mb-0'> <span className='badge bg-danger'> {task.level} </span> </h6>)
            default:
                break;
        }
    }

    //  -----Función que devuelve un icono en función de si la tarea esta completada o no  -----
    const taskIconCompleted = () => {
        
        return task.completed ? 
            ( <i className='bi-toggle-on' style={{ color: 'green', fontSize: '28px' }}> </i>) 
            : 
            ( <i className='bi-toggle-off' style={{ color: 'gray', fontSize: '28px' }}> </i>  );
    }


    return (

        <tr className='fw-normal'>
            <th style={{ width: '30%' }}> <span> {task.name} </span> </th>
            <td style={{ width: '50%' }} className='align-middle'> <span> {task.description} </span> </td>
            <td style={{ width: '10%' }} className='align-middle'> {taskLevelBadge()} </td>
            <td style={{ width: '10%' }} className='align-middle'>
                {taskIconCompleted()}
                <i className='bi-trash' style={{ color: 'tomato', fontSize: '28px' }}> </i>
            </td>
        </tr>
    );
}


TaskComponent.propTypes = {
    task: propTypes.instanceOf(Task)
}
