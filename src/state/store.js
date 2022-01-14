import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from '../state/ducks';
//import { createLogger } from './middlewares';
import apiService from '../middlewares/ApiService';
import createLogger from '../middlewares/logger';

export default function configureStore(initialState) {
  const appReducer = combineReducers(reducers);
  const rootReducer = (state, action) => {
    return appReducer(state, action);
  };
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    /* preloadedState, */ composeEnhancers(applyMiddleware(apiService, thunkMiddleware,createLogger(true))),
  );
}