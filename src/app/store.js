import { configureStore } from '@reduxjs/toolkit';
import signSlice from '../features/signin-up/signSlice.js';

export const store = configureStore({
  reducer: {
    sign: signSlice.reducer,
  },
});
