import {
    UPLOADFILE_FAILED,
   UPLOADFILE_LOADING, 
   UPLOADFILE_SUCCESS 
     
    } from '../actions/types';
    const initialState = {
      uploads:[],
      isLoading: false,
      isCheck:'',
      isSuccess: false,
      isError: false,
      errMsg: null,
    };
    
    export const LinkData = (state = initialState, action) => {
    
      switch (action.type) {
        case UPLOADFILE_LOADING:
          return {
            ...state,
            isLoading: true,
            isError: false,
            errMsg: null,
            isSuccess: false,
          };
        case UPLOADFILE_FAILED:
          return {
            ...state,
            isLoading: false,
            errMsg: action.payload,
            isSuccess: false,
            isError: true,
          };
        case UPLOADFILE_SUCCESS:
          return {
            ...state,
            uploads: action.payload,
            isLoading: false,
            isSuccess: true,
            isError: false,
            errMsg: null,
          };
  
  
        default:
          return state;
      }
    };