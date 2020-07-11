import { combineReducers } from 'redux';
import { userReducer } from './user';

const DESTROY_SESSION = 'DESTROY_SESSION';

export const resetStore = () => ({
  type: DESTROY_SESSION,
});

const appReducer = combineReducers({
  user: userReducer,
});

const rootReducer = (state, action) => {
  // Clear all data in redux store to initial.
  if (action.type === DESTROY_SESSION) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
