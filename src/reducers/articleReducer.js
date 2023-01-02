import { types } from "../types/type";

const initialState = {
  checking: true,
  articles : [],
  error : null,
};

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.articlesGetAll:
      return {
        ...state,
        ...action.payload,
        checking: false,
      };
    default:
      return state;
  }
};