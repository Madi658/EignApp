import {
    LISTVIEW_FAILED,
    LISTVIEW_SUCCESS,
    LISTVIEW_LOADING,
   
  } from './types';
  import axios from 'axios';
  
  export const Get_ListView = (data) => {
    const baseURL='https://eign-backend.herokuapp.com/property/list/';
    
    return async (dispatch) => {
      dispatch(Listloading());
      try {
        await axios
          .post(baseURL,data)
          .then((res) => {
            const listdata = res.data;
            dispatch(Listsuccess(listdata));
          })
  
          .catch((err) => {
            listFailure(err);
            // dispatch(Listsuccess({}));
            dispatch(Listfailed(err));
          });
      } catch (err) {
        dispatch(Listfailed(err));
      }
    };
  };


 export const Listloading = () => ({
    type: LISTVIEW_LOADING,
  });
 export const Listfailed = (err) => ({
    type: LISTVIEW_FAILED,
    payload: err,
  });
 export const Listsuccess = (res) => ({
    type: LISTVIEW_SUCCESS,
    payload: res,
  });
 
  