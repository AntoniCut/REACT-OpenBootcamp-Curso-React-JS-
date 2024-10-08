//  *****************************************************************
//  **********  /openbootcamp/src/pages/task/TaskPage.jsx  **********
//  *****************************************************************


import { NavigationButtons } from '../../Components/container/NavigationButtons';
import { TaskListComponent } from '../../Components/container/TaskListComponent';


export const TaskPage = () => {


    return (

        <div className="componentes" style={{marginTop: '200px'}}>

            <TaskListComponent />

            <NavigationButtons />
            
        </div>
    )
}