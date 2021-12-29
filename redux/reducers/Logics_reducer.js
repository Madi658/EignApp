import {IS_LOGED,DONE_INTRO,TOKEN,OTP} from '../actions/types';
const initialState = {
  Loged_Value:true,
  ShowMain:true,
  token:'',
  OTp:'',
};

export const LogicData = (state = initialState, action) => {

  switch (action.type) {
    
      case IS_LOGED:
        return {
          ...state,
          Loged_Value:action.payload,
        };
        case DONE_INTRO:{
           
     return {
            ...state,
          ShowMain:action.payload,
          };
        };
        case TOKEN:
          return {
                 ...state,
               token:action.payload,
               };
       
    default:    
         
      return state;
 
}};
