//  ******************************************************************
//  **********  /openbootcamp-app-react/src/AppRouting.jsx  **********
//  ******************************************************************


import './App.css';

import { HeaderComponent } from './ComponentsMain/HeaderComponent/HeaderComponent';
import { NavBarComponent } from './ComponentsMain/NavbarComponent/NavBarComponent';


//  **********  Componente Padre o Principal - App()  **********
export const AppRoutingOne = () => {

    return (

        <div className="App">

            {/* **********  Cabecera del Proyecto  ********** */}
            <HeaderComponent />

            {/* **********  Barra de Navegación  ********** */}
            <NavBarComponent />

        </div>

    )
}


