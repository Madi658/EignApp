import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGIN_LOADING,
   
  } from './types';
  import axios from 'axios';
import { Token } from './Logics_action';
  
  export const LoginA = (fd) => {
    const baseURL=`https://eign-backend.herokuapp.com/user/google-login/`;

    return async (dispatch) => {
      try {
        await axios
          .post(baseURL,fd)
          .then((res) => {
            let loginres = res?.data;
            console.log(loginres);
                dispatch(Token(loginres));
          })
  
          .catch((err) => {
              alert(err);
         dispatch(Token(''));
          });
      } catch (err) {
        alert(err);
        dispatch(Token(''));
      }
    };
  };



  