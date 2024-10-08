//  *****************************************************************
//  **********  /openbootcamp/src/pages/home/HomePage.jsx  **********
//  *****************************************************************


import { useNavigate } from "react-router-dom";
import { NavigationButtons } from "../../Components/container/NavigationButtons"


export const HomePage = () => {


    const navigate = useNavigate();

    return (

        <div className="componentes" style={{marginTop: '200px'}}>

            <h2 className='titulo-componente'> -----  HomePage  ----- </h2>
            <h3> Dashboard - Access to your Tasks </h3>
            <button className="btn-container"
                onClick={ () => navigate('/profile-page')}
            
            
            > Go To Profile </button>            



            <NavigationButtons />

        </div>
    )
}