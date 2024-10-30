//  ********************************************************
//  **********  02/openbootcamp-app-react-redux/  **********
//  **********  /src/components/pure/  *********************
//  **********  /Filter.jsx  *******************************
//  ********************************************************


import React from 'react';
import PropTypes from 'prop-types';


export const Filter = ({ active, onClick, children }) => {

    if (active) return <span className='active'> {children} </span>

    return (

        <button
            className='filter'
            style={{ marginRight: '20px'}}
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}>
            {children}
        </button>
    )
}


//  -----  Prop Types  -----
Filter.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}
