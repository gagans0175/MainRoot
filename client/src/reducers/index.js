/**
 * @reducer - centralized reducers
 */
import { combineReducers } from 'redux';

const authReducer = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return action.payload || false;
    default:
      return state;
  }
};

export default combineReducers({
  auth: authReducer
});
