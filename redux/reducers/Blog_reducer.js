import {
    BLOG_FAILED,
    BLOG_SUCCESS,
    BLOG_LOADING,
     
    } from '../actions/types';
    const initialState = {
      BlogData:[],
      isLoading: false,
      isSuccess: false,
      isError: false,
      errMsg: null,
    };
    
    export const BlogReducer = (state = initialState, action) => {
    
      switch (action.type) {
        case BLOG_LOADING:
          return {
            ...state,
            isLoading: true,
            isError: false,
            errMsg: null,
            isSuccess: false,
          };
        case BLOG_FAILED:
          return {
            ...state,
            isLoading: false,
            errMsg: action.payload,
            isSuccess: false,
            isError: true,
          };
        case BLOG_SUCCESS:
          return {
            ...state,
            BlogData: action.payload,
            isLoading: false,
            isSuccess: true,
            isError: false,
            errMsg: null,
          };
  
  
        default:
          return state;
      }
    };