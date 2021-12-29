import {
  REJISTER_FAILED,
  REJISTER_SUCCESS,
  REJISTER_LOADING
  } from './types';
  import axios from 'axios';
import { Token } from './Logics_action';
  
  export const Rejister = (formdata) => {
    console.log('Form data',formdata);
    const baseURL=`https://eign-backend.herokuapp.com/user/register/`;
    // const baseURL=`http://ec2-3-97-204-51.ca-central-1.compute.amazonaws.com/user/register/`;

    return async (dispatch) => {
      try {
        await axios
          .post(baseURL,formdata)
          .then((res) => {
            let loginres = res?.data;
            // console.log('OTPPPPP',loginres);
          })
          .catch((err) => {
            console.log(err);
              alert(err);
          });
      } catch (err) {
      }
    };
  };
  export const GetOtp = (fd,cbSuccess) => {
    console.log('Form Heree',fd);
    const baseURL=`https://eign-backend.herokuapp.com/user/otp-confirm/`;
    return async (dispatch) => {
      try {
        await axios
          .post(baseURL,fd)
          .then((res) => {
            let loginres = res?.data;
            if(loginres.token != undefined){
            dispatch(Token(loginres))
            cbSuccess(loginres)
            }else(
              alert(loginres.status)
            )
          })
          .catch((err) => {
              alert(err);
          });

      } catch (err) {
        alert(err);
      }
    };
  };


