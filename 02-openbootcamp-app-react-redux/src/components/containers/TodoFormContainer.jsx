//  ********************************************************
//  **********  02/openbootcamp-app-react-redux/  **********
//  **********  /src/components/containers/  ***************
//  **********  /TodoFormContainer.jsx  ********************
//  ********************************************************



import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/actions'
import { TodoForm } from '../pure/TodoForm'



const mapStateToProps = (state) => ({
    // Not necessary
})


const mapDispatchToProps = (dispatch) => {
    
    return {
        submit: (text) => {
            dispatch(addTodo(text))
        }
    }
}


const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm);
export default TodoFormContainer;
