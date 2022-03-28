import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { personalFormReducer, professionalFormReducer } from '../reducers/reducers';

const rootReducer = combineReducers({
  personalFormReducer,
  professionalFormReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
