import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './reducers/peopleSlice';

export const store = configureStore({
  reducer: {
    people: peopleReducer,
  },
});
