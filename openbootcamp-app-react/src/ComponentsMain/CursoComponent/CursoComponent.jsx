//  ******************************************************************************************
//  **********  /openbootcamp/src/ComponentsMain/CursoComponent/CursoComponent.jsx  **********
//  ******************************************************************************************


import './CursoComponent.css';
import GreetingClass from '../../Components/pure/GreetingClass.jsx';
import { GreetingFunction } from '../../Components/pure/GreetingFunction.jsx';


//  **********  Componente Principal de los Ejercicios del Curso  **********
export const CursoComponent = () => {

    return (

        <main className='curso-react'>

            <h1> Curso de React OpenBootcamp </h1>

            {/* *****  Componente de Clase  ***** */}
            <GreetingClass name="Antonio" />

            {/* *****  Componente Funcional  ***** */}
            <GreetingFunction name="Antonio" />

            {/* *****  Separador Visual  ***** */}
            <div className='separador'> </div>
            
        </main>

    )
}