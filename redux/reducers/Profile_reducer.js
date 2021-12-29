import {
  LISTVIEW_FAILED,
  LISTVIEW_SUCCESS,
  LISTVIEW_LOADING,
   
  } from '../actions/types';
  const initialState = {
    ListData:[],
    deletedata:null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    errMsg: null,
  };
  
  export const ListData = (state = initialState, action) => {
  
    switch (action.type) {
      case LISTVIEW_LOADING:
        return {
          ...state,
          isLoading: true,
          isError: false,
          errMsg: null,
          isSuccess: false,
        };
      case LISTVIEW_FAILED:
        return {
          ...state,
          isLoading: false,
          errMsg: action.payload,
          isSuccess: false,
          isError: true,
        };
      case LISTVIEW_SUCCESS:
        return {
          ...state,
          ListData: action.payload,
          isLoading: false,
          isSuccess: true,
          isError: false,
          errMsg: null,
        };


      default:
        return state;
    }
  };