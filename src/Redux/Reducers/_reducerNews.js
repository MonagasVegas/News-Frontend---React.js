import { SET_MYFAVES, SET_NEWSLETTERS } from "../constants";

export const newsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_NEWSLETTERS:
      return {
        ...state,
        openNewsLetters: action.payload,
      };

    case SET_MYFAVES:
      return { ...state, openFavesNews: action.payload };

    default:
      return state;
  }
};
