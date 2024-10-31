//  *********************************************************************
//  **********  /03-openbootcamp-app-use-reducer/src/App.jsx  ***********
//  *********************************************************************


import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { LoginUseState } from './components/LoginUseState';
import { LoginUseReducer } from './components/LoginUseReducer';


export const App = () => {
    
    return (
        
        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                APP USE REDUCER
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <main className='main'>

                <Counter />
                
                <LoginUseState />

                <LoginUseReducer />

            </main>

        </div>
    )
}
