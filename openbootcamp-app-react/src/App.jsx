//  **********************************************************
//  **********  /openbootcamp-app-react/src/App.js  **********
//  **********************************************************


import './App.css';
import { HeaderComponent } from './ComponentsMain/HeaderComponent/HeaderComponent';
import { CursoComponent } from './ComponentsMain/CursoComponent/CursoComponent';
import { ProyectoFinalComponent } from './ComponentsMain/ProyectoFinalComponent/ProyectoFinalComponent';


//  **********  Componente Padre o Principal - App()  **********
export const App = () => {

    return (

        <div className="App">

            {/* *****  Cabecera del Proyecto  ***** */}
            <HeaderComponent />

            {/* *****  Ejercicios del Proyecto  ***** */}
            <CursoComponent />

            {/* *****  Proyecto Final  ***** */}
            <ProyectoFinalComponent />


        </div>
    );
}


