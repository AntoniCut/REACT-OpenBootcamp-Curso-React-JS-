//  ********************************************************
//  **********  02/openbootcamp-app-react-redux/  **********
//  **********  /src/components/pure/  *********************
//  **********  /Todo.jsx  *********************************
//  ********************************************************


import PropTypes from 'prop-types';



//  ----------  TODO  --  COMPONENT PURE  ----------
export const Todo = ({ onClick, completed, text, id }) => {

    return (

        <li onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none',
                textDecorationColor: completed ? 'green' : 'none',
                color: completed ? 'green' : 'white'
            }}>
            {id} - {text}
        </li>
    )
}


//  -----  Prop Types  -----
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}
