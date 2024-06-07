import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers';

const store = configureStore({
  reducer: taskReducer,
});

export default store;
