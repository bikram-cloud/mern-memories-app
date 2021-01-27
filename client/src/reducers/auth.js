import { AUTH, LOGOUT } from '../actions/types';

const authReducer = (state = { authData: null }, action) => {
  //   const { type, payload } = action;
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();

      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
