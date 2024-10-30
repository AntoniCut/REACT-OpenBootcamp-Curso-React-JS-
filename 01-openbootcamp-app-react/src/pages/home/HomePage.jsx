//  *****************************************************************
//  **********  /openbootcamp/src/pages/home/HomePage.jsx  **********
//  *****************************************************************



import { useNavigate } from 'react-router-dom';
import { NavigationButtons } from '../../Components/container/NavigationButtons';

export const HomePage = () => {

    const navigate = useNavigate();

    const navigateWithStateAndQueryParams = () => {

        navigate(
            '/online-state',
            {
                state: { online: true }, // State
                search: '?online=true',  // Query params
            }
        );
    };

    const navigateWithProps = () => {

        // Ensure props handling is correct
        navigate(
            '/online-state',
            {
                state: { online: false }
            }
        );
    };


    return (

        <div className="componentes" style={{ marginTop: '250px' }}>
            <h2 className='titulo-componente'> -----  HomePage  ----- </h2>
            <h3> Dashboard - Access to your Tasks </h3>

            {/* First button for state/query params */}
            <button className="btn-container" onClick={navigateWithStateAndQueryParams}>
                Go To Page with State / Query Params
            </button>

            {/* Second button for state only (or props) */}
            <button className="btn-container" onClick={navigateWithProps}>
                Go To State Page with Props
            </button>
            
        </div>
    )
}






