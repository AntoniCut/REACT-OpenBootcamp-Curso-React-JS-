//  ********************************************************************************************
//  **********  /openbootcamp/src/ComponentsMain/HeaderComponent/HeaderComponent.jsx  **********
//  ********************************************************************************************


import logo from './logo.svg';
import './HeaderComponent.css';


export const HeaderComponent = () => {

    return (

        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1> APP REACT - OPENBOOTCAMP </h1>
            <img src={logo} className="App-logo" alt="logo" />
        </header>

    )
}