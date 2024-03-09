import axios from 'axios';
import {
  signInStart,
  signInSuccess,
  signInFail,
  signUpStart,
  signUpSuccess,
  signUpFail,
} from './authSlice';

export const signIn = (credentials) => async (dispatch) => {
  dispatch(signInStart());
  try {
    // Perform sign-in API request using Axios
    const response = await axios.post('your-signin-api-endpoint', credentials);
    dispatch(signInSuccess(response.data.user)); // Dispatch user data upon successful sign-in
  } catch (error) {
    dispatch(signInFail(error.message));
  }
};

export const signUp = (userData) => async (dispatch) => {
  dispatch(signUpStart());
  try {
    // Perform sign-up API request using Axios
    const response = await axios.post('your-signup-api-endpoint', userData);
    dispatch(signUpSuccess(response.data.user)); // Dispatch user data upon successful sign-up
  } catch (error) {
    dispatch(signUpFail(error.message));
  }
};
