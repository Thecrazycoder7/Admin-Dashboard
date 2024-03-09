import axios from 'axios';
import {
  signInStart,
  signInSuccess,
  signInFail,
  signUpSuccess,
  signUpStart,
  signUpFail,
} from './signSlice';
import { Api } from '@mui/icons-material';

const API = '';

export const signIn = (credentials) => async (dispatch) => {
  dispatch(signInStart());
  try {
    const response = await axios.post(API, credentials);
    dispatch(signInSuccess(response.data.user));
  } catch (error) {
    dispatch(signInFail(error.message));
  }
};
