import {
    LISTVIEWP_FAILED,
    LISTVIEWP_SUCCESS,
    LISTVIEWP_LOADING,
    
    LISTVIEWP_EMPTY
    } from '../actions/types';
    const initialState = {
      ListDataP:[],
      isLoadingP: false,
      isSuccessP: false,
      isErrorP: false,
      errMsgP: null,
    };
    export const ListDataP = (state = initialState, action) => {
    
      switch (action.type) {
        case LISTVIEWP_LOADING:
          return {
            ...state,
            isLoadingP: true,
            isErrorP: false,
            errMsgP: null,
            isSuccessP: false,
          };
        case LISTVIEWP_EMPTY:
          return {
            ...state,
            ListDataP:[],
          };
        case LISTVIEWP_FAILED:
          return {
            ...state,
            isLoadingP: false,
            errMsgP: action.payload,
            isSuccessP: false,
            isErrorP: true,
          };
        case LISTVIEWP_SUCCESS:
          return {
            ...state,
            ListDataP: action.payload,
            isLoadingP: false,
            isSuccessP: true,
            isErrorP: false,
            errMsgP: null,
          };
  
        default:
          return state;
      }
    };