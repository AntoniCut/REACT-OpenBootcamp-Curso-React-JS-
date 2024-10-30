//  **************************************************************************
//  **********  /openbootcamp/src/Components/pure/FetchExample.jsx  **********
//  **************************************************************************


import { useState, useEffect } from "react";
import { getAllPagedUsers, getAllUsers, getUsersDetailsById, login } from "../../services/FetchService";


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


    const authUser = () => {

        login("eve.holt@reqres.in", "cityslicka")

            .then(response => {

                console.log('TOKEN ==> ', response.token);
                sessionStorage.setItem('token', response.token);

            })

            .catch(error => alert(`Error while login user: ${error} `))

            .finally(() => console.log('Ended login user. Navigate to Home...'))
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
                    
                    {/* -----  Button to simulate login  ----- */}
                    <button onClick={authUser}> Auth User </button>
                </div>

                <>
                    {
                        selectedUser ?

                            <section className="fetch-info">
                                <article className="user-info">
                                    <p> {selectedUser.id} - {selectedUser.first_name} {selectedUser.last_name} </p>
                                    <img src={selectedUser.avatar} alt={`img avatar ${selectedUser.id}`} style={{ width: '230px', height: '200px' }} />
                                    <p style={{ fontSize: '12px' }}> {selectedUser.avatar} </p>
                                </article>
                            </section>

                            : <h3 style={{ color: '#AAC7CF', fontWeight: 'bold' }}> Please, click on a user to see its details </h3>
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
