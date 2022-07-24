import { SET_NEWSLETTERS, SET_MYFAVES } from "../constants";

export const setNewsLetters = (payload) => {
  return {
    type: SET_NEWSLETTERS,
    payload: payload,
  };
};

export const openMyFaves = (payload) => {
  return {
    type: SET_MYFAVES,
    payload: payload,
  };
};
