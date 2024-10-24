//  ********************************************************************************************
//  **********  /openbootcamp/src/ComponentsMain/NavBarComponent/NavBarComponent.jsx  **********
//  ********************************************************************************************


import './NavBarComponent.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CursoComponent } from '../CursoComponent/CursoComponent';
import { ProyectoFinalComponent } from '../ProyectoFinalComponent/ProyectoFinalComponent';
import { HomePage } from '../../pages/home/HomePage';
import { AboutPages } from '../../pages/about-faqs/AboutPages';
import { NotFoundPage } from '../../pages/404/NotFoundPages';
import { NavigationButtons } from '../../Components/container/NavigationButtons';
import { TaskPage } from '../../pages/task/TaskPage';
import { TaskDetailPage } from '../../pages/task/TaskDetailPage';
import { LoginPage } from '../../pages/auth/LoginPage';
import { ProfilePage } from '../../pages/profile/ProfilePage'; // Asumiendo que este es el componente que necesitas.
import { StatePage } from '../../pages/home/StatePage';


// Componente de la barra de navegación
export const NavBarComponent = () => {

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
            <nav className='navbar'>
                <Link to='/' className='navbar__link'> HOME </Link>
                <Link to='/clases-curso' className='navbar__link'> Clases del Curso </Link>
                <Link to='/proyecto-final' className='navbar__link'> Proyecto Final </Link>
                <Link to='/about' className='navbar__link'> ABOUT </Link>
                <Link to='/faqs' className='navbar__link'> FAQS </Link>
                <Link to='/profile' className='navbar__link'> Profile </Link>
                <Link to='/login-page' className='navbar__link'> Login </Link>
                
                {/* Enlaces para cada tarea */}
                <Link to='/tasks/1' className='navbar__link'> Task 1 </Link>
                <Link to='/tasks/2' className='navbar__link'> Task 2 </Link>
                <Link to='/tasks/3' className='navbar__link'> Task 3 </Link>
                <Link to='/tasks/4' className='navbar__link'> Task 4 </Link>
                

                <Link to='/404' className='navbar__link'> Not Exist Route </Link>
            </nav>

            {/* Componente para Navegar entre páginas */}
            <NavigationButtons />

            {/* Definición de rutas */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/clases-curso" element={<CursoComponent />} />
                <Route path="/proyecto-final" element={<ProyectoFinalComponent />} />
                <Route path="/online-state" element={<StatePage />} />
                <Route path="/about" element={<AboutPages />} />
                <Route path="/faqs" element={<AboutPages />} />
                <Route path="/tasks" element={<TaskPage />} />
                <Route path="/login-page" element={<LoginPage />} />
                
                {/* Pasamos la lista completa de tareas al componente TaskDetailPage */}
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
    );
}