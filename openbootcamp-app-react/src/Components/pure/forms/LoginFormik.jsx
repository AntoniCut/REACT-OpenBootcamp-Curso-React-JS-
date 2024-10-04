//  *********************************************************************************************
//  **********  /openbootcamp-app-react/src/components/pure/forms/LoginFormik.jsx  **************
//  *********************************************************************************************


//import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Draggable from 'react-draggable';
import * as Yup from 'yup';


//  **********  Esquema para utilizar Yup  **********

const loginSchema = Yup.object().shape({

    email: Yup
        .string()
        .email('Invalid email format')
        .required('Email is required'),
    password: Yup
        .string()
        .required('Password is Required')
});


//  **********  Componente que va ha contener un formulario  ********** 
//  **********  para autenticacion de usuarios               **********
//  **********  con Formik y Yup                             **********

export const LoginFormik = () => {


    //  -----  inicializacion de credenciales  -----
    const initialCredentials = {
        email: '',
        password: ''
    }


    //  -----  al enviar el formulario  -----
    const handleSubmit = async (values) => {

        await new Promise((r) => setTimeout(r, 1000));
        //alert(JSON.stringify(values, null, 2));
        localStorage.setItem('credentials', values);
    }


    return (

        <div className="componentes">

            <h2 className='titulo-componente'> -----  LoginFormik  ----- </h2>

            <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={handleSubmit}
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

        </div>
    );
}
