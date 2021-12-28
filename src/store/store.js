import { 
  combineReducers, 
  createStore, 
  applyMiddleware 
} from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import peopleReducer from './reducers/people';

const rootReducer = combineReducers({
  people: peopleReducer,
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
