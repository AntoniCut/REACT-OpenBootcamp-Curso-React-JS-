//  ************************************************************************************************
//  **********  /openbootcamp-app-react/src/components/pure/forms/RegisterFormik.jsx  **************
//  ************************************************************************************************


import { User } from '../../../models/user.class';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Draggable from 'react-draggable';
import * as Yup from 'yup';
import { ROLES } from '../../../models/roles.enum';


//  **********  Componente que va ha contener un formulario  ********** 
//  **********  para autenticacion de usuarios               **********
//  **********  con Formik y Yup                             **********

export const RegisterFormik = () => {


    //  -----  Definicion de un nuevo usuario  -----
    const user = new User();


    //  -----  inicializacion de credenciales  -----
    const initialValues = {
        userName: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }


    //  -----  Validaciones con Yup  -----
    const registerSchema = Yup.object().shape({

        userName: Yup
            .string()
            .min(6, 'Username too short!')
            .max(12, 'Username too long!')
            .required('Username is required'),
        email: Yup
            .string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup
            .string()
            .min(8, 'Password too short!')
            .required('Password is Required')
            .matches(``),

        confirm: Yup
            .string()
            .when('password', {
                is: (password) => password && password.length > 0,
                then: () => Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
            })
            .required('You must confirm the password'),
       
        role: Yup
            .string()
            .oneOf([ROLES.USER, ROLES.ADMIN], '¡You must select a Role: User / Admin')
            .required('Role is required')

    });


    //  ----------  Definición de Campos del Formulario  ----------

    //  -----  Definición del campo UserName  -----
    const fieldUserName = (errors, touched) => {

        return (
            <>
                <label htmlFor="userName"> <h4> Username </h4> </label>
                <Field type="text" id="userName" name="userName" placeholder=" Username..." />

                {errors.userName && touched.userName &&
                    <div className='error-message'> <ErrorMessage name="userName" /> </div>
                }
            </>
        );
    }


    //  -----  Definición del campo Email  -----
    const fieldEmail = (errors, touched) => {

        return (
            <>
                <label htmlFor="email"> <h4> Email </h4> </label>
                <Field type="email" id="email" name="email" placeholder=" example@email.com" />

                {
                    errors.email && touched.email &&
                    <div className='error-message'> <ErrorMessage name="email" /> </div>
                }
            </>
        );
    }


    //  -----  Definición del campo Password  -----
    const fieldPassword = (errors, touched) => {

        return (
            <>
                <label htmlFor="password"> <h4> Password </h4> </label>
                <Field type="password" id="password" name="password" placeholder="your password" />

                {
                    errors.password && touched.password &&
                    <div className='error-message'> <ErrorMessage name="password" /> </div>
                }
            </>
        );
    }


    //  -----  Definición del campo Password  -----
    const fieldConfirm = (errors, touched) => {

        return (
            <>
                <label htmlFor="confirm"> <h4> Confirm Password </h4> </label>
                <Field type="password" id="confirm" name="confirm" placeholder="Confirm password" />

                {
                    errors.confirm && touched.confirm &&
                    <div className='error-message'> <ErrorMessage name="confirm" /> </div>
                }
            </>
        );
    }


    //  -----  al enviar el formulario  -----
    const handleSubmit = async (values) => {

        await new Promise((r) => setTimeout(r, 1000));
        alert(JSON.stringify(values, null, 2));
        localStorage.setItem('users', values);
    }


    return (

        <div className="componentes">

            <h2 className='titulo-componente'> -----  RegisterFormik  ----- </h2>

            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={handleSubmit}
            >

                {/* -----  We obtain props from Formik  ----- */}

                {({ values, touched, errors, isSubmitting, handleChange, handlerBlur }) => (

                    <Draggable>

                        {/* -----  Form es un children de Formik <Formik> <Form> </Form> </Formik>  -----  */}

                        <Form className='login-formik d-flex justify-content-center align-items-center mb-4'
                            style={{ marginTop: '50px' }}>

                            {/* -----  UserName  ----- */}
                            {fieldUserName(errors, touched)}

                            {/* -----  Email  ----- */}
                            {fieldEmail(errors, touched)}


                            {/* -----  Password  ----- */}
                            {fieldPassword(errors, touched)}

                            {/* -----  Confirm  ----- */}
                            {fieldConfirm(errors, touched)}

                            {/* -----  Botón Enviar Formulario  ----- */}
                            <button type="submit"> Register User </button>

                            {isSubmitting ? (<h4> Sending your Credentials... 🚀 😊 !!! </h4>) : null}

                        </Form>

                    </Draggable>

                )}

            </Formik>

        </div>
    );
}
