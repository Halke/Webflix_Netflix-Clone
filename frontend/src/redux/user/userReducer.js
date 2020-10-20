import { SET_USER, GET_USER, SET_INITIAL } from "./userTypes";

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: state.user,
      };
    case SET_INITIAL:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
