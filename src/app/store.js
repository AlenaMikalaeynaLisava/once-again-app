import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/reducerFirst";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import rootwatcher from "../sagas/sagas"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(sagaMiddleware))
    );

sagaMiddleware.run(rootwatcher)

export default store;

