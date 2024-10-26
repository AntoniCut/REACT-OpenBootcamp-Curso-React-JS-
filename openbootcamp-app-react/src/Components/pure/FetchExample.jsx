//  **************************************************************************
//  **********  /openbootcamp/src/Components/pure/FetchExample.jsx  **********
//  **************************************************************************


import { useState, useEffect } from "react";
import { getAllPagedUsers, getAllUsers, getUsersDetailsById } from "../../services/FetchService";


//  ------------------------------------
//  ----------  FETCH EXAPLE  ----------
//  ------------------------------------
export const FetchExample = () => {


    //  -----  usuarios  -----
    const [users, setUsers] = useState([]);

    //  -----  usuario seleccionado  -----
    const [selectedUser, setSelectedUser] = useState(false);

    //  -----  total de usuarios  -----
    const [totalUsers, setTotalUsers] = useState(12);

    //  -----  total de páginas  -----
    const [page, setPages] = useState(2);

    //  -----  usuarios por página  -----
    const [userPerPage, setUserPerPage] = useState(6);


    //  -----  se ejecuta una vez al crearse el componente  -----
    useEffect(() => obtainUsers(), []);



    //  -----  Obtener todos los usuarios por página  -----
    const obtainUsers = () => {

        getAllUsers()

            .then(response => {

                console.log('All Users ==> ', response.data);
                console.table(response.data);

                setUsers(response.data);
                setTotalUsers(response.total);
                setPages(response.pages);
                setUserPerPage(response.per_page);
            })

            .catch(error => alert(`Something went wrong:\n ${error} `))

            .finally(() => console.log('Ended obtaining users'));
    }


    //  -----  obtener usuarios  -----
    const obtainPagedUsers = (page) => {

        getAllPagedUsers(page)

            .then(response => {

                console.log('All Paged Users ==> ', response.data);
                console.table(response.data);

                setUsers(response.data);
                setTotalUsers(response.total);
                setPages(response.pages);
                setUserPerPage(response.per_page);
            })

            .catch(error => alert(`Something went wrong:\n ${error} `))

            .finally(() => console.log('Ended obtaining users'));
    }


    //  -----  Obtener los detalles de un usuario por id  -----
    const obtainUserDetailsById = (id) => {

        getUsersDetailsById(id)

            .then(response => {

                console.log('Users by Id ==> ', response.data);
                console.table(response.data);
                setSelectedUser(response.data)

            })

            .catch(error => alert(`Something went wrong:\n ${error} `))

            .finally(() => {
                console.log('Ended obtaining users')
                console.table(selectedUser);
            })
    }


    return (

        <div className="componentes">

            <h2 className='titulo-componente'> -----  Fetch Example  ----- </h2>
            <br />

            <section className="fetch-info">

                <h3> Showing {userPerPage} users of {totalUsers} in total </h3>
                
                <div className="btn-container">
                    <button onClick={() => obtainPagedUsers(1)}> page 1 </button>
                    <button onClick={() => obtainPagedUsers(2)}> page 2 </button>
                </div>

                <>
                    {
                        selectedUser ?

                            <section className="fetch-info">

                                <article className="user-info">
                                    <p> {selectedUser.id} - {selectedUser.first_name} {selectedUser.last_name} </p>
                                    <img src={selectedUser.avatar} alt={`img avatar ${selectedUser.id}`} style={{ width: '230px', height: '200px' }} />
                                    <p style={{fontSize: '12px'}}> {selectedUser.avatar} </p>
                                </article>

                            </section>

                            : ''
                    }
                </>

            </section>



            <h3> Users: </h3>

            <section className="fetch-info">

                {users.map((user) => (

                    <article className="user-info" key={user.id} onClick={() => obtainUserDetailsById(user.id)}>
                        <p> {user.id} - {user.first_name} {user.last_name} </p>
                        <img src={user.avatar} alt={`img avatar ${user.id}`} />
                        <p> {user.avatar} </p>
                    </article>

                ))}

            </section>




        </div>
    )
}


/*

{
"page": 1,
"per_page": 6,
"total": 12,
"total_pages": 2,
"data": [
{
"id": 1,
"email": "george.bluth@reqres.in",
"first_name": "George",
"last_name": "Bluth",
"avatar": "https://reqres.in/img/faces/1-image.jpg"
},
{
"id": 2,
"email": "janet.weaver@reqres.in",
"first_name": "Janet",
"last_name": "Weaver",
"avatar": "https://reqres.in/img/faces/2-image.jpg"
},
{
"id": 3,
"email": "emma.wong@reqres.in",
"first_name": "Emma",
"last_name": "Wong",
"avatar": "https://reqres.in/img/faces/3-image.jpg"
},
{
"id": 4,
"email": "eve.holt@reqres.in",
"first_name": "Eve",
"last_name": "Holt",
"avatar": "https://reqres.in/img/faces/4-image.jpg"
},
{
"id": 5,
"email": "charles.morris@reqres.in",
"first_name": "Charles",
"last_name": "Morris",
"avatar": "https://reqres.in/img/faces/5-image.jpg"
},
{
"id": 6,
"email": "tracey.ramos@reqres.in",
"first_name": "Tracey",
"last_name": "Ramos",
"avatar": "https://reqres.in/img/faces/6-image.jpg"
}
],
"support": {
"url": "https://reqres.in/#support-heading",
"text": "To keep ReqRes free, contributions towards server costs are appreciated!"
}
}


*/