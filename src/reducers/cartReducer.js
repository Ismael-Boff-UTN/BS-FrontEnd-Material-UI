import { types } from "../types/type";

const initialState = {
  checking: true,
  items: [],
  domicilio: {},
  tipoPago: null,
  error: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addArticleToCart:
      return {
        ...state,
        items: [...state.items, action.payload],
        checking: false,
      };
    case types.articleQuit:
      return {
        ...state,
        items: [
          ...state.items.filter((articulo) => articulo._id !== action.payload),
        ],
      };
    default:
      return state;
  }
};
