import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';


//watcher saga to take in dispatches
function* watcherSaga() {
    yield takeLatest ('POST_CALCULATIONS', postCalculationsSaga)
    yield takeLatest ('GET_CALCULATIONS', getCalculationsSaga )
}

function* postCalculationsSaga(action){
    console.log('in addProjectsSaga');
    try{
        yield axios.post('/calculate', action.payload);
        yield put({type: 'GET_CALCULATIONS'});
    }
    catch (error) {
        console.log('ERROR IN POST', error);
        alert(`Sorry! Unable to add calculation. Try again later.`)
    }
}

function* getCalculationsSaga(action) {
    console.log('in projectListSaga')
    try{
        const response = yield axios.get('/projects');
        console.log('Response is', response);
        yield put({type:'SET_PROJECTS', payload: response.data});
    }
    catch (error) {
        console.log('ERROR IN GET', error);
        alert(`Sorry! Was unable to get projects. Try again later.`);
    }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
     
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
