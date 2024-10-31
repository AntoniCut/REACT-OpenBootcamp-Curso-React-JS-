//  *********************************************************************
//  **********  /03-openbootcamp-app-use-reducer/src/App.jsx  ***********
//  *********************************************************************


import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';


export const App = () => {
    
    return (
        
        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                APP USE REDUCER
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <main className='main'>

                <h2> ----------  USE REDUCER EXAMPLES  ---------- </h2>
                <Counter />

            </main>

        </div>
    )
}
