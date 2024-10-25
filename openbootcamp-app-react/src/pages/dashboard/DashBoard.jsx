//  ***********************************************************************
//  **********  /openbootcamp/src/pages/dashboard/DashBoard.jsx  **********
//  ***********************************************************************


import Button from '@mui/material/Button';
import { CopyRight } from '../../Components/pure/CopyRight';
import { useNavigate } from 'react-router-dom';


export const DashBoard = () => {

    const navigate = useNavigate();
    
    const logout = () => navigate('/proyecto-final/login'); 

    return (

        <div className="componentes">

            <h2 className='titulo-componente'> -----  DashBoard  ----- </h2>

            <Button variant="contained" onClick={logout}> Logout </Button>
            <CopyRight />
            
        </div>
    )
}