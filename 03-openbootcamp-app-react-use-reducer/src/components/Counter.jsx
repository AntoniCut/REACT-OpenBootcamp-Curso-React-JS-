//  ***********************************************************************************
//  **********  /03-openbootcamp-app-use-reducer/src/components/Counter.jsx  **********
//  ***********************************************************************************



import React, { useReducer, useContext } from 'react';

//  -----  ACTIONS  -----
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

//  -----  CREATE AND CONTEXT  -----
const myContext = React.createContext(null);


//  -----  USE CONTEXT  -----
const Points = () => {
    
    const state = useContext(myContext);

    if (state.count === -1) {
        state.count = 0;
        return;
    }

    return (
        <p className='counter-marcador'>
            <span className='bold'> Points: {state.count} </span>
        </p>
    )
}



//  ----------  Counter Componenter  ----------
export const Counter = () => {


    //  -----  Initial State for Reducer  -----
    const initialState = {
        count: 0
    }


    //  -----  Create to Reducer to change State  -----
    const reducer = (state, action) => {

        switch (action.type) {

            case INCREMENT:
                return {
                    count: state.count + action.payload.quantity
                }

            case DECREMENT:

                return {
                    count: state.count - action.payload.quantity
                }

            case RESET:
                return {
                    count: 0
                }

            default:
                return state;
        }
    }


    //  -----  Asign useReducer to state, reducer and dispatch actions  -----
    const [state, dispatch] = useReducer(reducer, initialState)


    //  -----  RENDER  -----
    return (

        <myContext.Provider value={state}>

            <div className='components-container'>

                <h2> -----  Counter  ----- </h2>
                
                {/* <p>Points: { state.count }</p> */}
                <Points />

                <button
                    onClick={() => dispatch({
                        type: INCREMENT,
                        payload: {
                            quantity: 2
                        }
                    })
                    }
                >
                    Increment * 2
                </button>

                <button
                    onClick={() => dispatch({
                        type: DECREMENT,
                        payload: {
                            quantity: 1
                        }
                    })
                    }
                >
                    Decrement
                </button>

                <button
                    onClick={() => dispatch({ type: RESET })}
                >
                    Reset Counter
                </button>

            </div>

        </myContext.Provider>
    )
}
