import { SET_USER, GET_USER, SET_INITIAL } from "./userTypes";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const getUser = () => {
  return {
    type: GET_USER,
  };
};

export const setInitial = () => {
  return {
    type: SET_INITIAL,
    payload: {
      user: null,
    },
  };
};
