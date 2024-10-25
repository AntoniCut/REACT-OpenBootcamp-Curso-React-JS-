//  **********************************************************************************
//  **********  openbootcamp-app-react/src/components/container/Father.jsx  **********
//  **********************************************************************************


import React from 'react';
import { useNavigate } from 'react-router-dom';


export const NavigationButtons = () => {

    const navigate = useNavigate();
    const goToHome = () => navigate('/');
    const goBack = () => navigate(-1);
    const goForward = () => navigate(1);

    return (
        
        <div className="btn-container">
            <button onClick={goToHome} className='navbar-header__link btn-color' > Go to Home </button>
            <button onClick={goBack} className='navbar-header__link btn-color' >  Go Back </button>
            <button onClick={goForward} className='navbar-header__link btn-color' > Go Forward </button>
        </div>
    );
}
