//  ********************************************************
//  **********  02/openbootcamp-app-react-redux/  **********
//  **********  /src/components/pure/  *********************
//  **********  /TodoList.jsx  *****************************
//  ********************************************************


import PropTypes from 'prop-types';
import { Todo } from './Todo';


//  ----------  TODO LIST  --  COMPONENT PURE  ----------
export const TodoList = ({todos, onTodoClick}) => {
    
    return (
        
        <div>
            
            <h1> Your TODOs </h1>
            <ul>
                {todos.map((todo, index) => 
                    (
                        <Todo 
                            key={index}
                            {...todo} // id, text, completed
                            onClick = {
                                () => onTodoClick(todo.id)
                            }
                        />
                    )
                )}
            </ul>
            
        </div>
    )
}


//  -----  Prop TYpes  -----
TodoList.propTypes = {
    
    todos: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired
            }
        ).isRequired
    ).isRequired,
    
    onTodoClick: PropTypes.func.isRequired       
}

