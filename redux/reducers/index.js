import {combineReducers} from 'redux';
import {LogicData} from '../reducers/Logics_reducer';
import { BlogReducer } from './Blog_reducer';
import { setFav } from './Fav_reducer';
import {ListData} from './Profile_reducer';
import { LinkData } from './SubmitProperty_reducer';
import {ListDataP} from './ListViewP_reducer';

export default combineReducers({
  LogicData: LogicData,
  ListData: ListData,
  LinkData: LinkData,
  setFav:setFav,
  BlogReducer:BlogReducer,
  ListDataP:ListDataP,

});
