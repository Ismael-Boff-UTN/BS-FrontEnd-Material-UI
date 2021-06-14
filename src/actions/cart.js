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
    console.log(body);

    if (body.status) {
      dispatch(
        articulo({
          articulo: body.articulo,
        })
      );
      Swal.fire("Exito", `Item Agregado`, "success");
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
    dispatch(
      articuloQuit(id),
      console.log(id)
    );
  };
};

const articuloQuit = (id) => ({
  type: types.articleQuit,
  payload: id,
  
});