import {
    BLOG_FAILED,
    BLOG_SUCCESS,
    BLOG_LOADING,
   
   
  } from './types';
  import axios from 'axios';

  export const BlogsAction = () => {
    const baseURL=`https://eign-backend.herokuapp.com/property/blogs/`;
    
    return async (dispatch) => {
      dispatch(Blogloading());
      try {
        await axios
          .get(baseURL)
          .then((res) => {
            const listdata = res.data;
            dispatch(Blogsuccess(listdata));
          })
  
          .catch((err) => {
            // dispatch(Blogsuccess({}));
            dispatch(Blogfailed(err));
          });
      } catch (err) {
        dispatch(Blogfailed(err));
      }
    };
  };

 export const Blogloading = () => ({
    type: BLOG_LOADING,
  });
 export const Blogfailed = (err) => ({
    type: BLOG_FAILED,
    payload: err,
  });
 export const Blogsuccess = (res) => ({
    type: BLOG_SUCCESS,
    payload: res,
  });
  
 
  