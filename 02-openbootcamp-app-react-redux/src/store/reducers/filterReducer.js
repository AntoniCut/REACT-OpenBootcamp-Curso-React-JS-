//  ********************************************************
//  **********  02/openbootcamp-app-react-redux/  **********
//  **********  /src/store/reducer/  ***********************
//  **********  /filterReducer.js  *************************
//  ********************************************************


import { SET_VISIBILITY_FILTER } from '../actions/actions';


//  -----  Initial values for filterState  -----
const initialState = 'SHOW_ALL';


//  ----------  FILTER REDUCER  ----------
export const filterReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_VISIBILITY_FILTER:
            return action.payload.filter

        default:
            return state;
    }
}
