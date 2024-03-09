// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInStart(state) {
      state.loading = true;
      state.error = null;
    },
    signInSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    signInFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    signUpStart(state) {
      state.loading = true;
      state.error = null;
    },
    signUpSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    signUpFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    signOut(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFail,
  signUpStart,
  signUpSuccess,
  signUpFail,
  signOut,
} = authSlice.actions;
export default authSlice.reducer;
