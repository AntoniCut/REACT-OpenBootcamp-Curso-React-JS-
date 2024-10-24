//  ******************************************************************
//  **********  /openbootcamp/src/pages/home/StatePage.jsx  **********
//  ******************************************************************


import { useLocation } from 'react-router-dom';
import { NavigationButtons } from '../../Components/container/NavigationButtons';

export const StatePage = () => {

    const location = useLocation();

    // Extract state and query parameters
    const isOnline = location.state?.online || 'No';
    const queryParams = new URLSearchParams(location.search);
    const queryOnline = queryParams.get('online') || '';

    console.log("isOnline", isOnline);
    console.log("queryParams", queryParams);
    console.log("queryOnline", queryOnline);

    return (

        <div className="componentes" style={{ marginTop: '200px' }}>

            <h2 className='titulo-componente'> -----  StatePage  ----- </h2>
            <h3> State (online): {isOnline}</h3>
            <h3> Query Param (online): {queryOnline}</h3>

            {/* Navigation buttons */}
            <NavigationButtons />

        </div>
    )
}



