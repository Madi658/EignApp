import {
    FAV_FAILED,
    FAV_SUCCESS,
    FAV_LOADING,
    GFAV_FAILED,
    GFAV_SUCCESS,
    GFAV_LOADING,
     
    } from '../actions/types';
    const initialState = {
      Fav:[],
      isLoading: false,
      isSuccess: false,
      isError: false,
      errMsg: null,
      GFav:[],
      GisLoading: false,
      GisSuccess: false,
      GisError: false,
      GerrMsg: null,
    };
    
    export const setFav = (state = initialState, action) => {
    
      switch (action.type) {
        case FAV_LOADING:
          return {
            ...state,
            isLoading: true,
            isError: false,
            errMsg: null,
            isSuccess: false,
          };
        case FAV_FAILED:
          return {
            ...state,
            isLoading: false,
            errMsg: action.payload,
            isSuccess: false,
            isError: true,
          };
        case FAV_SUCCESS:
          return {
            ...state,
            Fav: action.payload,
            isLoading: false,
            isSuccess: true,
            isError: false,
            errMsg: null,
          };
          case GFAV_LOADING:
            return {
              ...state,
              GisLoading: true,
              GisError: false,
              GerrMsg: null,
              GisSuccess: false,
            };
          case GFAV_FAILED:
            return {
              ...state,
              GisLoading: false,
              GerrMsg: action.payload,
              GisSuccess: false,
              GisError: true,
            };
          case GFAV_SUCCESS:
            return {
              ...state,
              GFav: action.payload,
              GisLoading: false,
              GisSuccess: true,
              GisError: false,
              GerrMsg: null,
            };
  
        default:
          return state;
      }
    };