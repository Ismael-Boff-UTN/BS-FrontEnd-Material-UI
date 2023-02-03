import { types } from "../types/type";

const initialState = {
  checking: true,
  items: [],
  domicilio: {},
  tipoPago: null,
  tipoEnvio: null,
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
          ...state.items.filter((articulo) => articulo.articulo._id !== action.payload),
        ],
      };
    case types.addExtra:
      return {
        ...state,
        items: [
        ...state.items.filter(articulo => articulo.articulo._id === action.payload ? articulo.cantidad +=1:{})
        ],
      };
    case types.addTipoPago:
      return {
        ...state,
        tipoPago: action.payload,
      };
    case types.addTipoEnvio:
      return {
        ...state,
        tipoEnvio: action.payload,
      };
    case types.addDomicilio:
      return {
        ...state,
        domicilio: action.payload,
      };
    default:
      return state;
  }
};
