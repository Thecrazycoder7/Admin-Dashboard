import { combineReducers } from '@reduxjs/toolkit';
import signSlice from '../features/signin-up/signSlice';

const rootReducer = combineReducers({
  auth: signSlice,
});

export default rootReducer;
