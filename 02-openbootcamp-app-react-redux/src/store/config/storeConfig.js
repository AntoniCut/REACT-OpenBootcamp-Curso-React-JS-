//  ********************************************************
//  **********  02/openbootcamp-app-react-redux/  **********
//  **********  /src/store/config/  ************************
//  **********  /storeConfig.js  ***************************
//  ********************************************************


//import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers/rootReducer';

//import { watcherSaga } from '../sagas/sagas';


//  ----------  CREATE APP STORE  ----------
export const createAppStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== 'production' // Usa Redux DevTools en modo de desarrollo
    });

    return store;
};


//  ----------  CREATE APP ASYNC  STORE  ----------
// export const createAppAsyncStore = () => {
//     const sagaMiddleware = createSagaMiddleware();

//     const store = configureStore({
//         reducer: rootReducer,
//         middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), // Incluye saga middleware
//         devTools: process.env.NODE_ENV !== 'production'
//     });

//     sagaMiddleware.run(watcherSaga);

//     return store;
// };


