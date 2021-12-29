import {
    FAV_FAILED,
    FAV_SUCCESS,
    FAV_LOADING,
    GFAV_FAILED,
    GFAV_SUCCESS,
    GFAV_LOADING,
   
  } from './types';
  import axios from 'axios';

  export const setFavourite = (user,id) => {
    const baseURL=`https://eign-backend.herokuapp.com/property/fav/${user}/${id}/`;
    
    return async (dispatch) => {
      dispatch(Favloading());
      try {
        await axios
          .post(baseURL)
          .then((res) => {
            const listdata = res.data;
            dispatch(Favsuccess(listdata));
          })
  
          .catch((err) => {
            // dispatch(Favsuccess({}));
            dispatch(Favfailed(err));
          });
      } catch (err) {
        dispatch(Favfailed(err));
      }
    };
  };

  export const GetFavourite = (id) => {
    const baseURL=`https://eign-backend.herokuapp.com/user/fav/${id}/`;
    
    return async (dispatch) => {
      dispatch(GFavloading());
      try {
        await axios
          .get(baseURL)
          .then((res) => {
            const listdata = res.data;
            dispatch(GFavsuccess(listdata));
          })
  
          .catch((err) => {
            dispatch(GFavsuccess({}));
            dispatch(GFavfailed(err));
          });
      } catch (err) {
        dispatch(GFavfailed(err));
      }
    };
  };

 export const Favloading = () => ({
    type: FAV_LOADING,
  });
 export const Favfailed = (err) => ({
    type: FAV_FAILED,
    payload: err,
  });
 export const Favsuccess = (res) => ({
    type: FAV_SUCCESS,
    payload: res,
  });
  export const GFavloading = () => ({
    type: GFAV_LOADING,
  });
 export const GFavfailed = (err) => ({
    type: GFAV_FAILED,
    payload: err,
  });
 export const GFavsuccess = (res) => ({
    type: GFAV_SUCCESS,
    payload: res,
  });
 
  