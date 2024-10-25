//  ******************************************************************
//  **********  /openbootcamp-app-react/src/AppRouting.jsx  **********
//  ******************************************************************


import './App.css';

import { HeaderComponent } from './ComponentsMain/HeaderComponent/HeaderComponent';
import { NavBarHeader } from './ComponentsMain/HeaderComponent/NavBarHeader';
//import { HomePage } from './pages/home/HomePage';
//import { NavBarComponent } from './ComponentsMain/NavbarComponent/NavBarComponent';


//  **********  Componente Padre o Principal - App()  **********
export const AppRoutingOne = () => {

    return (

        <div className="App">

            {/* **********  Cabecera del Proyecto  ********** */}
            <HeaderComponent />

            {/* **********  Barra de Navegación del Header  ********** */}
            <NavBarHeader />
            
        </div>

    )
}


