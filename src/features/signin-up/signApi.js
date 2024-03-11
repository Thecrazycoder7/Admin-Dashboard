import axios from 'axios';
import {
  signInStart,
  signInSuccess,
  signInFail,
  signUpStart,
  signUpSuccess,
  signUpFail,
  logoutSuccess
} from './signSlice';

const api = '';

export const signIn = (credentials) => async (dispatch) => {
  dispatch(signInStart());
  try {
    const response = await axios.post(api, credentials);
    dispatch(signInSuccess(response.data.user));
  } catch (error) {
    dispatch(signInFail(error.message));
  }
};

export const signUp = (userData) => async (dispatch) => {
  dispatch(signUpStart());
  try {
    const response = await axios.post(api, userData);
    dispatch(signUpSuccess(response.data.user));
  } catch (error) {
    dispatch(signUpFail(error.message));
  }
};

export const logout = () => (dispatch) => {
  dispatch(logoutSuccess());
};
