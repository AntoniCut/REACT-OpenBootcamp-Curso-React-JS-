//  *******************************************************************
//  **********  /openbootcamp/src/pages/profile/Profile.jsx  **********
//  *******************************************************************


import { NavigationButtons } from "../../Components/container/NavigationButtons";


export const ProfilePage = ( {user}) => {


    return (

        <div className="componentes" style={{marginTop: '200px'}}>

            <h2 className='titulo-componente'> -----  Profile  ----- </h2>
            
            <NavigationButtons />

        </div>
    )
}