//  ************************************************************************
//  **********  /openbootcamp/src/pages/task/TaskDetailsPage.jsx  **********
//  ************************************************************************


import { useParams } from 'react-router-dom';
import { NavigationButtons } from '../../Components/container/NavigationButtons';


export const TaskDetailPage = () => {

    const {id} = useParams();

    return (

        <div className="componentes" style={{ marginTop: '200px' }}>

            <h2 className='titulo-componente'> -----  Task Detail - {id}  ----- </h2>
            <NavigationButtons />

        </div>
    )
}