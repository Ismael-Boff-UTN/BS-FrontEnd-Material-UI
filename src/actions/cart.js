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
