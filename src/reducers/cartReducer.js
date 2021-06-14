import { types } from "../types/type";

const initialState = {
  checking: true,
  cart: [],
  error: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addArticleToCart:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        checking: false,
      };
    case types.articleQuit:
      return {
        ...state,
        cart: [...state.cart.filter(articulo => articulo.action.payload)]
      };
    default:
      return state;
  }
};
