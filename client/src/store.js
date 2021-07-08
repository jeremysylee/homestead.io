import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import homeReducer from './reducers/homeReducer';
import bidsReducer from './reducers/bidsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    homeReducer,
    bidsReducer,
  }),
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
