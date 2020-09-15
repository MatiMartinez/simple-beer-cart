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

// Cada reducer tiene su propio state
const initialState = {
  vinos: [],
  vinosEnCarro: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_VINO:
      return {
        ...state,
        loading: action.payload,
      };
    case AGREGAR_VINO_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        vinosEnCarro: [...state.vinosEnCarro, action.payload],
      };
    case AGREGAR_VINO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_VINOS:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_VINOS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        vinos: action.payload,
      };
    case GET_VINOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case QUITAR_VINO:
      return {
        ...state,
        loading: action.payload,
      };
    case QUITAR_VINO_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        vinosEnCarro: [
          ...state.vinosEnCarro.slice(0, action.payload),
          ...state.vinosEnCarro.slice(action.payload + 1),
        ],
      };
    case QUITAR_VINO_ERROR:
      return {};
    default:
      return state;
  }
}
