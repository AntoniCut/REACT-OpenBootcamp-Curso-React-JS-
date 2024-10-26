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

    //useEffect(() => obtainUser(), []);


    //  -----  obtener usuario  -----
    const obtainUser = () => {

        getRandomUser()

            .then(response => {

                if (response.status === 200) {
                    setUser(response.data.results[0])
                    console.log("response ==> ", response);
                    console.log("response.data.results ==> ", response.data.results);
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


/*

{
"results": [
{
"gender": "male",
"name": {
"title": "Monsieur",
"first": "Nevio",
"last": "Robert"
},
"location": {
"street": {
"number": 9951,
"name": "Rue Paul-Duvivier"
},
"city": "Rekingen (Ag)",
"state": "Basel-Landschaft",
"country": "Switzerland",
"postcode": 1455,
"coordinates": {
"latitude": "-60.6882",
"longitude": "-83.9192"
},
"timezone": {
"offset": "+5:30",
"description": "Bombay, Calcutta, Madras, New Delhi"
}
},
"email": "nevio.robert@example.com",

*/