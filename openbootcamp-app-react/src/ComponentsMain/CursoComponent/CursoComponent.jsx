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
import { LifeCycleExample } from '../../Components/pure/LifeCycleExample.jsx';
import { DidMountClass, DidMountHook } from '../../hooks/lifecycle/DidMount.jsx';
import { DidUpdateClass, DidUpdatetHook } from '../../hooks/lifecycle/DidUpdate.jsx';
import { WillUnMounthClass, WillUnMountHook } from '../../hooks/lifecycle/WillUnmount.jsx';
import { TituloCapitulosCurso } from './TituloCapitulosCurso.jsx';
import { AllCycles } from '../../hooks/lifecycle/AllCycles.jsx';
import { GreetingStyled } from '../../Components/pure/greetingStyled.jsx';
import { Father } from '../../Components/container/Father.jsx';
import { OptionalRender } from '../../Components/pure/OptionalRender.jsx';
import { LoginFormik } from '../../Components/pure/forms/LoginFormik.jsx';
import { RegisterFormik } from '../../Components/pure/forms/RegisterFormik.jsx';


//  **********  Componente Principal de los Ejercicios del Curso  **********
export const CursoComponent = () => {

    return (

        <main className='curso-react'>

            <h1 style={{ marginTop: '50px' }}> Curso de React OpenBootcamp </h1>

            {/* *****  Componente de Clase y Componentes Funcionales  ***** */}
            <TituloCapitulosCurso titulo="Componentes de Clase y Componentes Funcionates" />
            <GreetingClass name="Antonio" />
            <GreetingFunction name="Antonio" />

            {/* *****  Ejemplos de Hooks  ***** */}
            <TituloCapitulosCurso titulo="Ejemplos de Hooks" />
            <Ejemplo1 />
            <Ejemplo2Caso1 />
            <Ejemplo2Caso2 />
            <Ejemplo2Caso3 />
            <MiComponenteConContexto />
            <Ejemplo4 nombre="Antonio Francisco">
                <h3> Soy las Children del Componente Ejemplo 4 </h3>
            </Ejemplo4>

            {/* *****  Ciclo de Vida de los Componentes - Hooks  ***** */}
            <TituloCapitulosCurso titulo="Ciclo de Vida de los Componentes de Clase y Hooks" />

            <LifeCycleExample />

            <DidMountClass />
            <DidMountHook />

            <DidUpdateClass />
            <DidUpdatetHook />

            <WillUnMounthClass />
            <WillUnMountHook />

            <AllCycles />

            {/* *****  Estilos dentro de los componentes y Renderizado Condicional  ***** */}
            <TituloCapitulosCurso titulo="Estilos - Renderizado Condicional" />
            <GreetingStyled name='Antonio' />

            {/* *****  Manejo de Eventos en React - Comunicación Padre-Hijo e Hijo-Padre  ***** */}
            <TituloCapitulosCurso titulo="Manejo de Eventos en React - Padre-Hijo & Hijo-Padre" />
            <Father />


            {/* *****  Ejemplos de Renderizado Condicional  ***** */}
            <TituloCapitulosCurso titulo="Ejemplos de Renderizado Condicional" />
            <OptionalRender />


            {/* *****  Ejemplos de Formularios con Formik y Yup  ***** */}
            <TituloCapitulosCurso titulo="Formularios con Formik y Yup" />
            <LoginFormik />
            <RegisterFormik />


            {/* *****  Separador Visual  ***** */}
            <div className='separador'> </div>

        </main>

    )
}