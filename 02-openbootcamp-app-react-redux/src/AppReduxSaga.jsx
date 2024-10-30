//  ****************************************************************************
//  **********  02-openbootcamp-app-react-redux/src/AppReduxSagas.js  **********
//  ****************************************************************************



import logo from './logo.svg';
import './App.css';
import LoginFormContainer from './components/containers/LoginFormContainer'


export const AppReduxSaga = () => {

    return (

        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                APP REACT REDUX
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <main className='main'>

            <LoginFormContainer />
            

            </main>

        </div>
    );
}
