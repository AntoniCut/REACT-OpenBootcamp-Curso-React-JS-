//  ********************************************************************************************
//  **********  /openbootcamp/src/ComponentsMain/HeaderComponent/HeaderComponent.jsx  **********
//  ********************************************************************************************


import './NavBarHeader.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { CursoComponent } from '../CursoComponent/CursoComponent';
import { ProyectoFinalComponent } from '../ProyectoFinalComponent/ProyectoFinalComponent';
import { HomePage } from '../../pages/home/HomePage';
import { NotFoundPage } from '../../pages/404/NotFoundPages';
import { AboutPages } from '../../pages/about-faqs/AboutPages';
import { StatePage } from '../../pages/home/StatePage';
import { TaskPage } from '../../pages/task/TaskPage';
import { LoginPage } from '../../pages/auth/LoginPage';
import { TaskDetailPage } from '../../pages/task/TaskDetailPage';
import { ProfilePage } from '../../pages/profile/ProfilePage';
import { NavigationButtons } from '../../Components/container/NavigationButtons';


// -------------------------------------------  
// ----------  BARRA DE NAVEGACIÓN  ----------
// -------------------------------------------
export const NavBarHeader = () => {
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        // Obtiene las credenciales del localStorage
        const credentials = localStorage.getItem('credentials');
        // Establece el estado de logged en true si hay credenciales
        setLogged(!!credentials);
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    // Definir las tareas
    const taskList = [
        { id: 1, name: 'Task 1', description: 'My First Task' },
        { id: 2, name: 'Task 2', description: 'My Second Task' },
        { id: 3, name: 'Task 3', description: 'My Three Task' },
    ];

    return (
        <>
            {/* Enlaces a las rutas */}
            <nav className='navbar-header'>
                <Link to='/' className='navbar-header__link'> HOME </Link>
                <Link to='/clases-curso' className='navbar-header__link'> Clases del Curso </Link>
                <Link to='/proyecto-final' className='navbar-header__link'> Proyecto Final </Link>
                {/* Not Found - 404 */}
                <Link to='/404' className='navbar-header__link'> Not Exist Route </Link>
                <NavigationButtons />
            </nav>

            {/* Definición de rutas */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/clases-curso" element={<CursoComponent />} />
                <Route path="/proyecto-final/*" element={<ProyectoFinalComponent />} />
                <Route path="/online-state" element={<StatePage />} />
                <Route path="/about" element={<AboutPages />} />
                <Route path="/faqs" element={<AboutPages />} />
                <Route path="/tasks" element={<TaskPage />} />
                <Route path="/login-page" element={<LoginPage />} />

                <Route path='/tasks/:id' element={<TaskDetailPage taskList={taskList} />} />

                {/* Ruta protegida para /profile */}
                <Route
                    path="/profile"
                    element={
                        logged ? (
                            <ProfilePage /> // Si está logueado, muestra la página de perfil
                        ) : (
                            <Navigate to="/login-page" /> // Si no está logueado, redirige a login
                        )
                    }
                />

                <Route path="/404" element={<NotFoundPage />} />
            </Routes>
        </>
    )
}