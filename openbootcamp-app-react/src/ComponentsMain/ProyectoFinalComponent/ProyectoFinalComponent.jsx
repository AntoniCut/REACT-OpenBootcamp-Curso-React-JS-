//  **************************************************************************************************
//  **********  /openbootcamp/src/ComponentsMain/CursoComponent/ProyectoFinalComponent.jsx  **********
//  **************************************************************************************************


import './ProyectoFinalComponent.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DashBoard } from '../../pages/dashboard/DashBoard';
import { NotFoundPage } from '../../pages/404/NotFoundPages';
import { LoginPage } from '../../pages/auth/LoginPage';


export const ProyectoFinalComponent = () => {
    
    // TODO - Change to value from session storage
    const loggedIn = true; 

    return (
        <main className='proyecto-final'>
            <h1 style={{ marginTop: '50px' }}>Proyecto Final de React OpenBootcamp</h1>

            <Routes>
                <Route path='/' element={<Navigate to='/proyecto-final/dashboard' replace />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/dashboard' element={loggedIn ? <DashBoard /> : <Navigate to='/proyecto-final/login' replace />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </main>
    )
}
