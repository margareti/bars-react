import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import barsReducer from '../reducers/bars';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(combineReducers({
      bars: barsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
