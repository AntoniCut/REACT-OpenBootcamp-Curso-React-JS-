//  ********************************************************
//  **********  02/openbootcamp-app-react-redux/  **********
//  **********  /src/components/pure/  *********************
//  **********  /FilterOptions.jsx  ************************
//  ********************************************************


import PropTypes from 'prop-types';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    }
)


//  ----------  Login Form  --  Componente Formulario  ----------
export const LoginForm = ({ loged, fetching, onLogin }) => {


    //"email": "eve.holt@reqres.in",
    //"password": "cityslicka"


    const initialCredentials = {
        email: '',
        password: ''
    }

    return (

        <div className='todo-form'>

            <h1> LOGIN FORM </h1>

            <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={async values => onLogin(values.email, values.password)}
            >
                {/* We obtain props from Formik */}

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form className='column'>

                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" />

                        {/* Email Errors */}
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name="email" component='div'></ErrorMessage>
                            )
                        }

                        <br />
                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type='password'
                        />

                        {/* Password Errors */}
                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name="password" component='div'></ErrorMessage>
                            )
                        }

                        <br />
                        <button type="submit"> Login </button>
                        {fetching ? (<p> LOADING... </p>) : null}
                        {isSubmitting ? (<p> Login your credentials... </p>) : null}

                    </Form>
                )}

            </Formik>

        </div>
    )
}


//  -----  Prop Types  -----
LoginForm.propTypes = {
    loged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
}
