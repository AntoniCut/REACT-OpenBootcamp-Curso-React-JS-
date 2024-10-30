//  ******************************************************************************************
//  **********  /openbootcamp-app-react/src/components/pure/lifeCyclingExample.jsx  **********
//  ******************************************************************************************


import React, { Component } from 'react';
//import PropTypes from 'prop-types'


//  -----  Ejemplo de componente de tipo clase que dispone de los métodos de ciclo de vida  -----


//  **********  Componente de Clase  **********

export class LifeCycleExample extends Component {
    
    constructor(props) {
        super(props);
        console.log("\n");
        console.warn('CONSTRUCTOR: Cuando se instancia el componente');

    }

    componentWillMount() {
        console.log("\n");
        console.warn('WILLMOUNT: Antes del montaje del componente');
    }

    componentDidMount() {
        console.log("\n");
        console.warn('DIDMOUNT: justo al acabar el montaje del componente, antes de renderizar la vista');
    }
    
    componentWillReceiveProps(nextProps) {
        console.log("\n");
        console.warn('WillReceiveProps: Si va ha recibir nuevas props');
    }

    shouldComponentUpdate(nextProps, nextState) {
        //  Controla si el componente debe o no actualizarse.
        //  return true / false.
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("\n");
        console.warn('WillUpdate: justo antes de actualizarse');
    }
    
    componentDidUpdate(nextProps, nextState) {
        console.log("\n");
        console.warn('DidUpdate: justo despues de actualizarse');
    }

    componentWillUnmount() {
        console.log("\n");
        console.warn('WillUnmount: justo antes de desaparecer');
    }
        
    render() {
        
        return (
            <div className='componentes'>
                <h2 className='titulo-componente'> -----  LifeCycleExample  ----- </h2>
            </div>
        )
    }
}

/*
LifeCycleExample.propTypes = {

}
*/
