//  ******************************************************************************************
//  **********  /openbootcamp/src/ComponentsMain/CursoComponent/CursoComponent.jsx  **********
//  ******************************************************************************************


import './CursoComponent.css';
import GreetingClass from '../../Components/pure/GreetingClass.jsx';
import { GreetingFunction } from '../../Components/pure/GreetingFunction.jsx';


export const CursoComponent = () => {

    return (

        <main className='curso-react'>
            
            <h1> Curso de React OpenBootcamp </h1>

            <GreetingClass name="Antonio" />
            <GreetingFunction name="Antonio" />

        </main>

    )
}