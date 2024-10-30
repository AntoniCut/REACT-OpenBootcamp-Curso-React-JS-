//  ********************************************************
//  **********  02/openbootcamp-app-react-redux/  **********
//  **********  /src/store/actions/  ***********************
//  **********  /action.js  ********************************
//  ********************************************************


//  -----  Incremental ID for Todos  -----
let nextTodoId = 0;

//  -----  ACTIONS Types -----
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';



/**
 * ----------  addTodo  ----------
 * @param { string } text 
 * @returns action ADD_TODO
 */
export const addTodo = (text) => {

    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoId++,
            text                //  text: text
        }
    }
}




/**
 * ----------  cambio de true a false  ----------
 * @param { number } id 
 * @returns action TOGGLE_TODO
 */
export const toggleTodo = (id) => {

    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}



/**
 * ----------  cambiar el filtro de visibilidad  ----------
 * @param { string } filter 
 * @returns action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) => {

    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}
