import {
  AGREGAR_CERVEZA,
  AGREGAR_CERVEZA_EXITO,
  AGREGAR_CERVEZA_ERROR,
  GET_CERVEZAS,
  GET_CERVEZAS_EXITO,
  GET_CERVEZAS_ERROR,
  QUITAR_CERVEZA,
  QUITAR_CERVEZA_EXITO,
  QUITAR_CERVEZA_ERROR,
} from "../types/index";
import Axios from "axios";

// Agregar cerveza a carrito
export function agregarCervezaAction(cerveza) {
  return (dispatch) => {
    dispatch(agregarCerveza());
    try {
      dispatch(agregarCervezaExito(cerveza));
    } catch (error) {
      dispatch(agregarCervezaError());
    }
  };
}

const agregarCerveza = () => ({
  type: AGREGAR_CERVEZA,
  payload: true,
});

const agregarCervezaExito = (cerveza) => ({
  type: AGREGAR_CERVEZA_EXITO,
  payload: cerveza,
});

const agregarCervezaError = () => ({
  type: AGREGAR_CERVEZA_ERROR,
  payload: true,
});

// Quitar cerveza de carrito
export function quitarCervezaAction(index) {
  return (dispatch) => {
    dispatch(quitarCerveza());
    try {
      dispatch(quitarCervezaExito(index));
    } catch (error) {
      dispatch(quitarCervezaError());
    }
  };
}

const quitarCerveza = () => ({
  type: QUITAR_CERVEZA,
  payload: true,
});

const quitarCervezaExito = (index) => ({
  type: QUITAR_CERVEZA_EXITO,
  payload: index,
});

const quitarCervezaError = () => ({
  type: QUITAR_CERVEZA_ERROR,
  payload: true,
});

// Get cervezas desde API
export function getCervezasAction() {
  return async (dispatch) => {
    dispatch(getCervezas());
    try {
      const res = await Axios.get(
        "https://api.punkapi.com/v2/beers?per_page=20"
      );
      dispatch(getCervezasExito(res.data));
    } catch (error) {
      console.log(error);
      dispatch(getCervezasError());
    }
  };
}

const getCervezas = () => ({
  type: GET_CERVEZAS,
  payload: true,
});

const getCervezasExito = (productos) => ({
  type: GET_CERVEZAS_EXITO,
  payload: productos,
});

const getCervezasError = () => ({
  type: GET_CERVEZAS_ERROR,
  payload: true,
});
