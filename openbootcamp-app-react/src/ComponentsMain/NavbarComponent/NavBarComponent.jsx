//  *********************************************************************************************
//  **********  /openbootcamp/src/ComponentsMain/NavBarrComponent/NavBarComponent.jsx  **********
//  *********************************************************************************************


import './NavBarComponent.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { CursoComponent } from '../CursoComponent/CursoComponent';
import { ProyectoFinalComponent } from '../ProyectoFinalComponent/ProyectoFinalComponent';
import { HomePage } from '../../pages/home/HomePage';
import { AboutPages } from '../../pages/about-faqs/AboutPages';
import { NotFoundPage } from '../../pages/404/NotFoundPages';
import { NavigationButtons } from '../../Components/container/NavigationButtons';
import { ProfilePage } from '../../pages/profile/ProfilePage';
import { TaskPage } from '../../pages/task/TaskPage';
import { TaskDetailPage } from '../../pages/task/TaskDetailPage';


//  **********  Componente para la Barra de Navegación - NavBarComponent()  **********
export const NavBarComponent = () => {

    return (

        <Router>

            {/* ----------  Enlaces a las Rutas  ---------- */}
            <nav className='navbar'>
                <Link to='/' className='navbar__link'> HOME </Link>
                <Link to='/clases-curso' className='navbar__link'> Clases del Curso </Link>
                <Link to='/proyecto-final' className='navbar__link'> Proyecto Final </Link>
                <Link to='/about' className='navbar__link'> ABOUT </Link>
                <Link to='/faqs' className='navbar__link'> FAQS </Link>
                <Link to='/profile' className='navbar__link'> Profile </Link>
                <Link to='/tasks' className='navbar__link'> Tasks Page </Link>
                <Link to='/task/:id' className='navbar__link'> Task Detail </Link>
                <Link to='/404' className='navbar__link'> Not Exist Route </Link>
            </nav>

            {/* ----------  Componente para Navegar Hacia Atras y Hacia Delante y Volver a la Home  ---------- */}
            <NavigationButtons />


            {/* ----------  Definición de Rutas  ---------- */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/clases-curso" element={<CursoComponent />} />
                <Route path="/proyecto-final" element={<ProyectoFinalComponent />} />
                <Route path="/about" element={<AboutPages />} />
                <Route path="/faqs" element={<AboutPages />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/tasks" element={<TaskPage />} />
                <Route path="/task/:id" element={<TaskDetailPage />} />
                <Route path="/404" element={<NotFoundPage />} />
            </Routes>

        </Router>


    )
}