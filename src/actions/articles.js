import { fetchNoToken } from "../helpers/fetch";
import { types } from "../types/type";
import Swal from "sweetalert2";

//Funcion Que Trae Todas Los Articulos
export const obtenerArticulos = () => {
    return async (dispatch) => {
      const response = await fetchNoToken(
        "articulos",
  
        "GET"
      );
      const body = await response.json();
      //console.log(body);
  
      if (body.status) {
        dispatch(
            articulos({
            articulos: body.articulos,
            //totalResgistros: body.totalRegistros,
            msg: body.msg,
          })
        );
      } else {
        Swal.fire("Error", `${body.msg}`, "warning");
      }
    };
  };
  
  const articulos = (articulo) => ({
    type: types.articlesGetAll,
    payload: articulo,
  });