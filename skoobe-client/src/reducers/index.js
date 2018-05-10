import { combineReducers } from 'redux';

import biddersReducer from './biddersReducer';

export default combineReducers({
  biddersReducer: biddersReducer
});
