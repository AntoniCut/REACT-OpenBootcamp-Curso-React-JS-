//  ******************************************************************************************
//  **********  /openbootcamp/src/ComponentsMain/CursoComponent/CursoComponent.jsx  **********
//  ******************************************************************************************


import './CursoComponent.css';
import GreetingClass from '../../Components/pure/GreetingClass.jsx';
import { GreetingFunction } from '../../Components/pure/GreetingFunction.jsx';
import { Ejemplo1 } from '../../hooks/ejemplo1.jsx';
import { Ejemplo2Caso1 } from '../../hooks/ejemplo2Caso1.jsx';
import { Ejemplo2Caso2 } from '../../hooks/ejemplo2Caso2.jsx';
import { Ejemplo2Caso3 } from '../../hooks/ejemplo2Caso3.jsx';
import { MiComponenteConContexto } from '../../hooks/ejemplo3.jsx';
import { Ejemplo4 } from '../../hooks/ejemplo4.jsx';


//  **********  Componente Principal de los Ejercicios del Curso  **********
export const CursoComponent = () => {

    return (

        <main className='curso-react'>

            <h1> Curso de React OpenBootcamp </h1>

            {/* *****  Componente de Clase  ***** */}
            <GreetingClass name="Antonio" />

            {/* *****  Componente Funcional  ***** */}
            <GreetingFunction name="Antonio" />

            {/* *****  Ejemplos de Hooks  ***** */}
            <Ejemplo1 />
            <Ejemplo2Caso1 />
            <Ejemplo2Caso2 />
            <Ejemplo2Caso3 />
            <MiComponenteConContexto />
            <Ejemplo4 nombre="Antonio Francisco"> 
                <h3>Soy las Children del Componente Ejemplo 4 </h3> 
            </Ejemplo4>

            {/* *****  Separador Visual  ***** */}
            <div className='separador'> </div>
            
        </main>

    )
}