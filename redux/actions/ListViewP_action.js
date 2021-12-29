import {
    LISTVIEWP_FAILED,
    LISTVIEWP_SUCCESS,
    LISTVIEWP_LOADING,
    LISTVIEWP_EMPTY,
   
  } from './types';
  import axios from 'axios';
  
  export const Get_ListViewP = (data,page,list,cbSuccess) => {
    const baseURL=`https://eign-backend.herokuapp.com/property/list1/?page=${page}`;
    console.log('hiii',data);
    console.log('bye',page);
    return async (dispatch) => {
      dispatch(ListPloading());
      try {
        await axios
          .post(baseURL,data)
          .then((res) => {
            let listdata = res?.data;
            if (data) {
              if (listdata?.status === undefined) {
                cbSuccess(listdata)
                dispatch(ListPsuccess(listdata));
              } else {
                dispatch(ListPsuccess([]));
                cbSuccess(listdata)
              }
            } else {
            let listdata = [...list,...res?.data];
            cbSuccess(listdata)
            dispatch(ListPsuccess(listdata));
            }
          })
  
          .catch((err) => {
            // dispatch(Listsuccess({}));
            dispatch(ListPfailed(err));
          });
      } catch (err) {
        dispatch(ListPfailed(err));
      }
    };
  };


 export const ListPloading = () => ({
    type: LISTVIEWP_LOADING,
  });
 export const ListPfailed = (err) => ({
    type: LISTVIEWP_FAILED,
    payload: err,
  });
 export const ListPsuccess = (res) => ({
    type: LISTVIEWP_SUCCESS,
    payload: res,
  });
 
 export const ListPemptysuccess = (res) => ({
    type: LISTVIEWP_EMPTY,
  });
 
  