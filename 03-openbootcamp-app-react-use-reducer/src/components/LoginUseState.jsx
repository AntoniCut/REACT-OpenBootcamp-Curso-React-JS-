//  *****************************************************************************************
//  **********  /03-openbootcamp-app-use-reducer/src/components/LoginUseState.jsx  **********
//  *****************************************************************************************


import React, { useState } from 'react';


//  ----------  LogiUseState  ----------  
//  --  Componente para un Formulario con useState  --
export const LoginUseState = () => {

    //  -----  useState  -----
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    //  -----  submit  -----
    const submit = async (e) => {

        e.preventDefault();
        setError('');
        setLoading(true);

        try {

            await function login({ username, password }) {

                new Promise((resolve, reject) => {

                    setTimeout(() => {
                        if (username === 'admin' && password === 'admin') resolve();
                        else reject();
                    }, 2000);
                })
            }

            setIsLoggedIn(true);
            setLoading(false);

        } catch (error) {
            setError(`Invalid Username or Password: ${error}`);
            setLoading(false);
            setUsername('');
            setPassword('');
        }
    }


    //  -----  logout  -----
    const logout = () => {
        setIsLoggedIn(false);
        setLoading(false);
        setUsername('');
        setPassword('');
    }


    return (


        <div className='components-container'>

            <h2> -----  Login Use State Example  ----- </h2>


            {
                isLoggedIn ? (
                    
                    <div>
                        <h1> Welcome, {username}! </h1>
                        <button onClick={logout}> Logout </button>
                    </div>

                ) :
                    (
                        <form onSubmit={submit}>
                            
                            {
                                error && <p style={{ color: 'tomato' }}>{error}</p>
                            }

                            <input
                                type='text'
                                placeholder='Username'
                                value={username}
                                onChange={(e) => setUsername(e.currentTarget.value)}
                            />

                            <input
                                type='text'
                                placeholder='password'
                                value={password}
                                onChange={(e) => setPassword(e.currentTarget.value)}
                            />

                            <button type='submit'> {isLoading ? 'Logging...' : 'Login'} </button>

                        </form>
                    )
            }

        </div>
    )
}
