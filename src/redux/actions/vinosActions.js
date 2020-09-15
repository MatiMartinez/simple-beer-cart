import {
  AGREGAR_VINO,
  AGREGAR_VINO_EXITO,
  AGREGAR_VINO_ERROR,
  GET_VINOS,
  GET_VINOS_EXITO,
  GET_VINOS_ERROR,
  QUITAR_VINO,
  QUITAR_VINO_EXITO,
  QUITAR_VINO_ERROR,
} from "../types/index";
import Axios from "axios";

// Agregar vino a carrito
export function agregarVinoAction(vino) {
  return (dispatch) => {
    dispatch(agregarVino());
    try {
      dispatch(agregarVinoExito(vino));
    } catch (error) {
      dispatch(agregarVinoError());
    }
  };
}

const agregarVino = () => ({
  type: AGREGAR_VINO,
  payload: true,
});

const agregarVinoExito = (vino) => ({
  type: AGREGAR_VINO_EXITO,
  payload: vino,
});

const agregarVinoError = () => ({
  type: AGREGAR_VINO_ERROR,
  payload: true,
});

// Quitar vino de carrito
export function quitarVinoAction(index) {
  return (dispatch) => {
    dispatch(quitarVino());
    try {
      dispatch(quitarVinoExito(index));
    } catch (error) {
      dispatch(quitarVinoError());
    }
  };
}

const quitarVino = () => ({
  type: QUITAR_VINO,
  payload: true,
});

const quitarVinoExito = (index) => ({
  type: QUITAR_VINO_EXITO,
  payload: index,
});

const quitarVinoError = () => ({
  type: QUITAR_VINO_ERROR,
  payload: true,
});

// Get Vinos desde API
export function getVinosAction() {
  return async (dispatch) => {
    dispatch(getVinos());
    try {
      const res = await Axios.get(
        "https://api.globalwinescore.com/globalwinescores/latest/?limit=20",
        {
          headers: {
            Authorization: `Token ${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      console.log(res);
      dispatch(getVinosExito(res.data.results));
    } catch (error) {
      console.log(error);
      dispatch(getVinosError());
    }
  };
}

const getVinos = () => ({
  type: GET_VINOS,
  payload: true,
});

const getVinosExito = (productos) => ({
  type: GET_VINOS_EXITO,
  payload: productos,
});

const getVinosError = () => ({
  type: GET_VINOS_ERROR,
  payload: true,
});
