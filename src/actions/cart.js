import { fetchNoToken } from "../helpers/fetch";
import { types } from "../types/type";
import Swal from "sweetalert2";

//Funcion Que Trae Un Articulo
export const obtenerArticulo = (id) => {
  return async (dispatch) => {
    const response = await fetchNoToken(
      `articulos/${id}`,

      "GET"
    );
    const body = await response.json();
    console.log(body.articulo);
    
    var art = new Object();
    art.articulo = body.articulo;
    art.cantidad = 1;
    art.precioUnitario = body.articulo.precioVenta;

    if (body.status) {
      dispatch(articulo(art));
      Swal.fire("Exito", `${art.articulo.denominacion} x1 Agregado!`, "success");
    } else {
      Swal.fire("Error", `${body.msg}`, "warning");
    }
  };
};

const articulo = (articulo) => ({
  type: types.addArticleToCart,
  payload: articulo,
});

export const quitarArticuloCart = (id) => {
  return async (dispatch) => {
    dispatch(articuloQuit(id), console.log(id));
  };
};

const articuloQuit = (id) => ({
  type: types.articleQuit,
  payload: id,
});

export const addExtra = (id) => {
  return async (dispatch) => {
    dispatch(addExtraa(id), console.log(id));
  };
};

const addExtraa = (id) => ({
  type: types.addExtra,
  payload: id,
});

export const restaExtra = (id) => {
  return async (dispatch) => {
    dispatch(restaExtraa(id), console.log(id));
  };
};

const restaExtraa = (id) => ({
  type: types.restaExtra,
  payload: id,
});

export const addTipoPago = (tipo) => {
  return async (dispatch) => {
    dispatch(addTipoPagoo(tipo));
  };
};

const addTipoPagoo = (tipo) => ({
  type: types.addTipoPago,
  payload: tipo,
});

export const addTipoEnvio = (tipo) => {
  return async (dispatch) => {
    dispatch(addTipoEnvioo(tipo));
  };
};

const addTipoEnvioo = (tipo) => ({
  type: types.addTipoEnvio,
  payload: tipo,
});

export const addDomicilio = (domi) => {
  return async (dispatch) => {
    dispatch(addDomicilioo(domi));
  };
};

const addDomicilioo = (domi) => ({
  type: types.addDomicilio,
  payload: domi,
});