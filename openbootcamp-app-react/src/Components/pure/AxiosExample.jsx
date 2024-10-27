//  **************************************************************************
//  **********  /openbootcamp/src/Components/pure/AxiosExample.jsx  **********
//  **************************************************************************


import { useState, useEffect } from "react";
import { getRandomUser } from "../../services/axiosService";


//  ------------------------------------
//  ----------  AXIOS EXAPLE  ----------
//  ------------------------------------
export const AxiosExample = () => {


    const [user, setUser] = useState(null);

    useEffect(() => obtainUser(), []);


    //  -----  obtener usuario  -----
    const obtainUser = () => {

        getRandomUser()

            .then(response => {

                if (response.status === 200) {
                    setUser(response.data.results[0])
                    console.log("response ==> ", response);
                    console.log("response.data.results[0] ==> ", response.data.results[0]);
                }
            })
            .catch(error => alert(`Something went wrong: ${error}`))
    }

    return (

        <div className="componentes">

            <h2 className='titulo-componente'> -----  Axios Example  ----- </h2>
            <br />

            <section className="fetch-info">

                {
                    user ?
                        (<>
                            <h3> Name: {user.name.title} - {user.name.first} {user.name.last} - {user.email} </h3>
                            <img src={user.picture.large} alt='imagen usurario' />
                        </>)

                        :
                        (<>
                            <p> Generate a new User </p>
                            <button onClick={obtainUser}> Random User </button>
                        </>)
                }

            </section>


        </div>
    )
}

