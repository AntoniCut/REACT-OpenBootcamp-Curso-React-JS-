//  ******************************************************************************
//  **********  /openbootcamp/src/Components/pure/AxiosCrudExample.jsx  **********
//  ******************************************************************************


import {
    loginAxios,
    getAllUsers,
    getAllPagedUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
} from "../../services/axiosCRUDService";

import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from "react";
import Draggable from 'react-draggable';
import * as Yup from 'yup';


//  -----------------------------------------
//  ----------  AXIOS CRUD EXAPLE  ----------
//  -----------------------------------------
export const AxiosCrudExample = () => {


    //  -----  ESTADOS  -----
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);          // Estado para la página actual
    const [totalPages, setTotalPages] = useState(1);            // Estado para el total de páginas

    // Define los estados independientes
    const [createUserId, setCreateUserId] = useState("");       // Estado para ID en "Create User"
    const [createUserName, setCreateUserName] = useState("");   // Estado para Name en "Create User"
    const [createUserJob, setCreateUserJob] = useState("");     // Estado para Job en "Create User"

    const [getUserId, setGetUserId] = useState("");             // Estado para ID en "Get User By ID"
    const [updateUserId, setUpdateUserId] = useState("");       // Estado para ID en "Update User By ID"
    const [updateUserName, setUpdateUserName] = useState("");   // Estado para Name en "Update User By ID"
    const [updateUserJob, setUpdateUserJob] = useState("");     // Estado para Job en "Update User By ID"

    const [deleteUserId, setDeleteUserId] = useState("");       // Estado para ID en "Delete User By ID"


    // const [userId, setUserId] = useState("");               // Estado para el ID del usuario
    // const [userName, setUserName] = useState("");           // Estado para el NAME del usuario
    // const [userJob, setUserJob] = useState("");             // Estado para el JOB del usuario

    const [userCreate, setUserCreate] = useState(null);     // Estado para almacenar el usuario recién creado


    //  -----  Estado para mostrar y ocultar botones  -----
    const [showGetAll, setShowGetAll] = useState(true); // Estado inicial para mostrar "Get All Users"


    //  -----  funciones para mostrar y ocultar botones  -----
    const handleGetAllUsers = () => {
        obtainAllUsers();
        setShowGetAll(false); // Cambia para mostrar el botón "Get All Users By Page"
    };

    const handleGetAllPagedUsers = () => {
        obtainAllPagedUsers(currentPage);
        setShowGetAll(true); // Cambia para mostrar el botón "Get All Users"
    };


    //  -----  inicializacion de credenciales  -----
    const initialCredentials = {
        email: '',
        password: ''
    }


    //  -----  YUP  --  Esquema para utilizar Yup  -----
    const loginSchema = Yup.object().shape({

        email: Yup
            .string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup
            .string()
            .required('Password is Required')
    })


    //  -----  Autorización de Usuario  -----
    const authUser = (values) => {

        loginAxios(values.email, values.password)

            .then(response => {

                if (response) {

                    alert(JSON.stringify(response.data));
                    console.log('Response ==> ', response.data);
                    sessionStorage.setItem('token', response.data.token);

                } else {
                    sessionStorage.removeItem('token')
                    throw new Error('Login failue...')
                }

            })

            .catch(error => {
                alert(`Something went wrong: ${error}`);
                sessionStorage.removeItem('token');
            })


            .finally(() => console.log('Login done...'));
    }


    //  ----------  CRUD EXAMPLES  ----------

    //  ----- get all users  -----
    const obtainAllUsers = () => {

        getAllUsers()
            .then(response => {
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data))
                    setUsers(response.data.data)
                } else throw new Error('Error, users not found');
            })
            .catch(error => alert(`Something went wrong: ${error}`))
    }


    //  ----- get all paged users  -----
    const obtainAllPagedUsers = (page) => {

        getAllPagedUsers(page)

            .then(response => {
                if (response.data.data && response.status === 200) {
                    setUsers(response.data.data);               // Almaceno los usuarios obtenidos
                    setCurrentPage(page);                       // Actualizo la página actual
                    setTotalPages(response.data.total_pages);   // Almaceno el total de páginas    
                } else throw new Error(`Error, user not found in page ${page}`);
            })
            .catch(error => alert(`Something went wrong: ${error}`));
    }


    //  ----- get user by id  -----
    const obtainUserById = () => {

        getUserById(getUserId)
            .then(response => {

                if (response.data.data && response.status === 200) {
                    setUsers([response.data.data]);               // Almaceno los usuarios obtenidos
                    alert(JSON.stringify(response.data.data))
                } else throw new Error('Error, user not found...');

            })
            .catch(error => alert(`Something went wrong: ${error}`));
    }


    //  -----  create user  -----
    const createNewUser = (createUserId, createUserName, createUserJob) => {

        console.clear();
        console.log("Creating user with ID:", createUserId, "Name:", createUserName, "Job:", createUserJob); // <-- Verifica valores aquí

        createUser(createUserId, createUserName, createUserJob)
            .then(response => {
                if (response.data && response.status === 201) {
                    setUserCreate(response.data);
                    alert("User created successfully!");
                } else throw new Error('Error, user not created...');
            })
            .catch(error => alert(`Something went wrong: ${error}`));
    }


    //  ----- update user by id  -----
    const updateUser = () => {

        updateUserById(updateUserId, updateUserName, updateUserJob)
            .then(response => {
                if (response.data && response.status === 200) {
                    // Actualiza la lista de usuarios en el estado
                    setUsers(users.map(user =>
                        user.id === updateUserId ? { ...user, first_name: updateUserName, job: updateUserJob } : user
                    ));
                    alert(`User with id: ${updateUserId} updated successfully!`);
                } else {
                    throw new Error('Error, user not found & no update done...');
                }
            })
            .catch(error => alert(`Something went wrong: ${error}`));
    }


    //  ----- delete user by id  -----
    const deleteUser = () => {
        
        deleteUserById(deleteUserId)
            .then(response => {
                if (response.status === 204) {
                    alert(`User with id: ${deleteUserId} successfully deleted`);
                    // Elimina el usuario de la lista de usuarios en el estado
                    setUsers(users.filter(user => user.id !== deleteUserId));
                    setDeleteUserId(""); // Limpia el campo de ID después de la eliminación
                } else {
                    throw new Error('Unexpected response code');
                }
            })
            .catch(error => alert(`Something went wrong: ${error.message}`));
    };



    return (

        <div className="componentes">

            <h2 className='titulo-componente'> -----  Login Auth  ----- </h2>


            {/* **********  FORMULARIO  ********** */}
            <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={async (values) => authUser(values)}
            >

                {/* -----  We obtain props from Formik  ----- */}

                {({ values, touched, errors, isSubmitting, handleChange, handlerBlur }) => (

                    <Draggable>

                        {/* -----  Form es un children de Formik <Formik> <Form> </Form> </Formik>  -----  */}

                        <Form className='login-formik d-flex justify-content-center align-items-center mb-4'
                            style={{ marginTop: '50px' }}>

                            {/* -----  Campo Email  ----- */}
                            <label htmlFor="email"> <h4> Email </h4> </label>
                            <Field type="email" id="email" name="email" placeholder=" example@email.com" />

                            {   //  -----  Email Errors  -----
                                errors.email && touched.email &&
                                <div className='error-message'> <ErrorMessage name="email" /> </div>
                            }


                            {/* -----  Campo Password  ----- */}
                            <label htmlFor="password"> <h4> Password </h4> </label>
                            <Field type="password" id="password" name="password" placeholder="your password" />

                            {   //  -----  Password Errors  -----
                                errors.password && touched.password &&
                                <div className='error-message'> <ErrorMessage name="password" /> </div>
                            }


                            {/* -----  Botón Enviar Formulario  ----- */}
                            <button type="submit"> Login </button>

                            {isSubmitting ? (<h4> Login your Credentials... 🚀 😊 !!! </h4>) : null}

                        </Form>

                    </Draggable>

                )}

            </Formik>


            <section className="fetch-info column-info">

                {/* **********  botones para la aplicacioón  ***** */}
                <div className="btn-container">

                    {/* Mostrar el botón "Get All Users" si showGetAll es true */}
                    {showGetAll ? (<button onClick={handleGetAllUsers}> Get All Users with Axios </button>)

                        // Mostrar el botón "Get All Users By Page" si showGetAll es false
                        :
                        (<button onClick={handleGetAllPagedUsers}> Get All Users By Page with Axios </button>
                        )}
                </div>


                {/* **********  ventanas para introducir información  ********** */}
                <div className="btn-container">

                    {/* -----  Create User  ----- */}
                    <div className="info-container column-info">
                        <label style={{ fontSize: '24px', fontWeight: 'bold' }}> Create User </label>
                        <input type='number' value={createUserId} onChange={(e) => setCreateUserId(e.target.value)} placeholder="ID..." />
                        <input type='text' value={createUserName} onChange={(e) => setCreateUserName(e.target.value)} placeholder="Name..." />
                        <input type='text' value={createUserJob} onChange={(e) => setCreateUserJob(e.target.value)} placeholder="Job..." />
                        <button onClick={() => createNewUser(createUserId, createUserName, createUserJob)}> Create User </button>
                    </div>

                    {/* -----  Get User By ID  ----- */}
                    <div className="info-container column-info">
                        <label style={{ fontSize: '24px', fontWeight: 'bold' }}> Get User By ID </label>
                        <input type='number' value={getUserId} onChange={(e) => setGetUserId(e.target.value)} placeholder="ID..." />
                        <button onClick={() => obtainUserById(getUserId)}> Get User By Id </button>
                    </div>

                    {/* -----  Update User By ID  ----- */}
                    <div className="info-container column-info">
                        <label style={{ fontSize: '24px', fontWeight: 'bold' }}> Update User By ID </label>
                        <input type='number' value={updateUserId} onChange={(e) => setUpdateUserId(e.target.value)} placeholder="ID..." />
                        <input type='text' value={updateUserName} onChange={(e) => setUpdateUserName(e.target.value)} placeholder="Name..." />
                        <input type='text' value={updateUserJob} onChange={(e) => setUpdateUserJob(e.target.value)} placeholder="Job..." />
                        <button onClick={() => updateUser(updateUserId, updateUserName, updateUserJob)}> Update User By Id </button>
                    </div>

                    {/* -----  Delete User By ID  ----- */}
                    <div className="info-container column-info">
                        <label style={{ fontSize: '24px', fontWeight: 'bold' }}> Delete User By ID </label>
                        <input type='number' value={deleteUserId} onChange={(e) => setDeleteUserId(e.target.value)} placeholder="ID..." />
                        <button onClick={() => deleteUser(deleteUserId)}> Delete User By Id </button>
                    </div>

                </div>

            </section>


            <section className="fetch-info">

                {users.length > 0 ? (

                    <div className={users.length === 1 ? 'fetch-info column-info' : 'fetch-info'}>

                        <h3> Showing Users Page {currentPage} </h3>

                        <section className="fetch-info">

                            {users.map((user) => (

                                <article key={user.id} className='user-info'>
                                    <h3> {user.id} </h3>
                                    <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} style={{ width: '230px', height: '200px' }} />
                                    <h4>{user.first_name} {user.last_name}</h4>
                                    <p>{user.email}</p>
                                </article>

                            ))}

                        </section>

                        <div className="btn-container">

                            {/* Mostrar el botón "Previous Page y Next Page" si showGetAll es true */}
                            {showGetAll &&
                                <>
                                    <button onClick={() => obtainAllPagedUsers(currentPage - 1)} disabled={currentPage === 1} > Previous Page </button>
                                    <button onClick={() => obtainAllPagedUsers(currentPage + 1)} disabled={currentPage === totalPages} > Next Page </button>
                                </>
                            }

                        </div>

                    </div>
                ) : (
                    <p>No users to display. Click "Get All Users with Axios" or <br /> "Get All Users (Page {currentPage}) with Axios" to fetch users.</p>
                )}
                
            </section>


            {/* Mostrar el usuario recién creado */}
            {userCreate && (

                <section className="fetch-info column-info">

                    <h3> User Created Successfully </h3>

                    <article key={userCreate.id} className='user-info'>
                        <h3> {userCreate.id} </h3>
                        <h4> {userCreate.name} </h4>
                        <p> Job: {userCreate.job} </p>
                        <p> Created At: {userCreate.createdAt} </p>
                    </article>

                </section>
            )}

        </div>
    )
}
