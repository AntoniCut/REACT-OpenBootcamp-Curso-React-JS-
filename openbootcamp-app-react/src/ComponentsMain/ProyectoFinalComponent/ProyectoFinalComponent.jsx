//  **************************************************************************************************
//  **********  /openbootcamp/src/ComponentsMain/CursoComponent/ProyectoFinalComponent.jsx  **********
//  **************************************************************************************************


import { TaskListComponent } from '../../Components/container/TaskListComponent';
import './ProyectoFinalComponent.css';


//  **********  Componente Principal del Proyecto Final  **********
export const ProyectoFinalComponent = () => {

    return (

        <main className='proyecto-final'>

            <h1 style={{marginTop: '50px'}}> Proyecto Final de React OpenBootcamp </h1>

            {/* *****  Componente de Listado de Tareas  ***** */}
            <TaskListComponent />

        </main>

    )
}