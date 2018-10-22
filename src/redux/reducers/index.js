import { combineReducers } from 'redux';

import weatherReducer from './weather';
import alertReducer from './alert';
import appLogReducer from './appLog';

export default combineReducers({
  appLogReducer,
  weatherReducer,
  alertReducer,
});
