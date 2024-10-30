//  ******************************************************************
//  **********  02-openbootcamp-app-react-redux/src/App.js  **********
//  ******************************************************************



import logo from './logo.svg';
import './App.css';
import TodosContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';
import { FilterOptions } from './components/pure/FilterOptions';



export const App = () => {

    return (

        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                APP REACT REDUX
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <main className='main'>

                <TodosContainer />
                <TodoFormContainer />
                <FilterOptions />

            </main>

        </div>
    );
}
