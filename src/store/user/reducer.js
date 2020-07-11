import {
  ADD_USER,
  LOGIN_USER,
} from './actions';

export const initialState = {
  email: '',
  senderEmail: '',
  login: false,
  first_name: '',
  last_name: '',
  id: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, ...action.payload };
    case LOGIN_USER:
      return { ...state, login: action.payload };
    default:
      return { ...state };
  }
};
export default reducer;
