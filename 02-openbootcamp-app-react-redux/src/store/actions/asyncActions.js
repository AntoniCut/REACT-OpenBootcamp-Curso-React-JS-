//  ********************************************************
//  **********  02/openbootcamp-app-react-redux/  **********
//  **********  /src/store/actions/  ***********************
//  **********  /asyncActions.js  **************************
//  ********************************************************


//  -----  Async Action Types  -----
export const API_CALL_REQUEST = 'API_CALL_REQUEST';     // Watcher Saga listens
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';     // Dispached by Worker Saga
export const API_CALL_FAILURE = 'API_CALL_FAILURE';     // Dispached by Worker Saga


/**
 * -----  login  -----
 * @param { string } email 
 * @param { string } password 
 * @returns { object }
 */
export const login = (email, password) => {

    return {
        
        type: API_CALL_REQUEST,
        payload: {
            request: {
                method: 'post',
                url: 'https://reqres.in/api/login',
                data: {
                    email: email,
                    password: password
                }
            },
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAILURE
        }
    }
}



/**
 * -----  Generic httpRequest Action Dispatched  -----
 * @param { string } method 
 * @param { string } url 
 * @param { object } data 
 * @returns { object }
 */
export const httpRequest = (method, url, data) => {
    
    return {
        type: API_CALL_REQUEST,
        payload: {
            request: {
                method: method,
                url: url,
                data: data,
            },
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAILURE
        }
    }
}
