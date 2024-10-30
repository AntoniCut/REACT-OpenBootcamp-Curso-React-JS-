//  ************************************************************************
//  **********  /openbootcamp/src/pages/task/TaskDetailsPage.jsx  **********
//  ************************************************************************



import { useParams } from 'react-router-dom';


export const TaskDetailPage = ({ taskList }) => {
    
    // Obtener el ID de los parámetros de la URL
    const { id } = useParams();

    // Buscar la tarea correspondiente en la lista de tareas
    const task = taskList.find(t => t.id === parseInt(id));

    // Si no se encuentra la tarea, mostramos un mensaje de error
    if (!task) {
        return (
            <div className="componentes" style={{ marginTop: '250px' }}>
                <h2 className='titulo-componente'> Task not found </h2>
            </div>
        );
    }

    // Si la tarea existe, mostramos sus detalles
    return (
        <div className="componentes" style={{ marginTop: '250px' }}>
            <h2 className='titulo-componente'> Task Detail {id} </h2>
            <h3> {task.name} </h3>
            <h3> {task.description} </h3>
        </div>
    )
}




