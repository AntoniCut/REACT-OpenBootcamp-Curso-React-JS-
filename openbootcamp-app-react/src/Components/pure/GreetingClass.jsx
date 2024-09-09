//  ***************************************************************************
//  **********  /openbootcamp/src/Components/pure/GreetingClass.jsx  **********
//  ***************************************************************************


import React, { Component } from 'react';
import PropTypes from 'prop-types';


//  **********  Componente de Clase - GreetingClass  **********
export default class GreetingClass extends Component {

    constructor(props) {

        super(props);
        this.state = {
            age: 48
        }
    }

    birthday = () => {
        this.setState( prevState => 
            ({
                age: prevState.age + 1
            })
        
        )
    }


    render() {
        
        return (
            
            <div className='componentes'>

                <h2> -----  GreetingClass - Soy un Componente de Clase  ----- </h2>
                <h3> ¡Hola, soy {this.props.name} y tengo {this.state.age} años! </h3>
                <button onClick={this.birthday}> Cumplir Años </button>

            </div>
        )
    }
}


GreetingClass.propTypes = {
    name: PropTypes.string
}



