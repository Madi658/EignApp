import {
  UPLOADFILE_FAILED,
  UPLOADFILE_LOADING,
  UPLOADFILE_SUCCESS,
} from './types';
import axios from 'axios';
  
export const Submit = (fd2) => {
  const baseURL='https://eign-backend.herokuapp.com/property/post-property/';
  
  return async (dispatch) => {
    dispatch(Submitloading());
    try {
      await axios
        .post(baseURL,fd2)
        .then((res) => {
          const data = res.data;
          console.log('submitttt',res);
          dispatch(Submitsuccess(data));
        })

        .catch((err) => {
          dispatch(Submitsuccess({}));
          dispatch(Submitfailed(err));
        });
    } catch (err) {
      dispatch(Submitfailed(err));
    }
  };
};



export const Submitloading = res => {
  return {
    type: UPLOADFILE_LOADING,
    payload: res,
  };
};
export const Submitfailed = err => ({
  type: UPLOADFILE_FAILED,
  payload: err,
});
export const Submitsuccess = res => ({
  type: UPLOADFILE_SUCCESS,
  payload: res,
});
