import {IS_LOGED,DONE_INTRO,TOKEN,OTP} from './types';

  export const IsLoged = (res) => ({
    type:IS_LOGED,
    payload: res,
  });
 
  export const DoneIntro = (res) => ({
    type:DONE_INTRO ,
    payload: res,
  });
  export const Token = (res) => ({
    type:TOKEN ,
    payload: res,
  });

