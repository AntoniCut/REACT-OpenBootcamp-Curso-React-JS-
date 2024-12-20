//  ********************************************************
//  **********  02/openbootcamp-app-react-redux/  **********
//  **********  /src/store/sagas/  *************************
//  **********  /sagas.js  *********************************
//  ********************************************************



import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { API_CALL_REQUEST } from '../actions/asyncActions';


// Watcher SAGA
// Listens the API_CALL_REQUEST actions
export function* watcherSaga(){
    // Listens the action and starts a Worker Saga
    yield takeLatest(API_CALL_REQUEST, workerSaga)
}

// WORKER SAGA
// Is called from watcher Saga, does the Login and Dispaches an action
export function* workerSaga(action){
    try {
        
        const response = yield call(fetchHttp(action.payload.request))
        
        // We Obtain the token from response
        const token = response.data.token;
        
        yield put({
            type: action.payload.okAction, // API_CALL_SUCCESS
            payload: {
                token: token
            }
        })

    } catch (error) {
        
        console.error("Error en la solicitud API:", error);  // Agrega esta línea para registrar el error
        yield put({
            type: action.payload.failAction, // API_CALL_FAILURE
            payload: {
                error: error.message, // Almacena solo el mensaje de error para mantener la serialización
            }
        });
    }
    
    // } catch (error) {
        
    //     yield put({
    //         type: action.payload.failAction, // API_CALL_FAILURE
    //         payload: {
    //             error: error
    //         }
    //     })
    // }
}

function fetchHttp(request){
    return function(){
        return(axios(request))
    }
}