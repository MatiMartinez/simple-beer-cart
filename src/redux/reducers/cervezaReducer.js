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

const initialState = {
  cervezas: [],
  cervezasEnCarro: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_CERVEZA:
      return {
        ...state,
        loading: action.payload,
      };
    case AGREGAR_CERVEZA_EXITO:
      let cervezaExistente = state.cervezasEnCarro.map((cervezaEnCarro) => {
        if (cervezaEnCarro.id === action.payload.id) {
          cervezaEnCarro = {
            ...cervezaEnCarro,
            quantity: cervezaEnCarro.quantity + 1,
          };
        }
        return cervezaEnCarro;
      });
      return {
        ...state,
        loading: false,
        error: null,
        cervezasEnCarro: [...state.cervezasEnCarro, action.payload],
      };
    case AGREGAR_CERVEZA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_CERVEZAS:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_CERVEZAS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        cervezas: action.payload,
      };
    case GET_CERVEZAS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case QUITAR_CERVEZA:
      return {
        ...state,
        loading: action.payload,
      };
    case QUITAR_CERVEZA_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        cervezasEnCarro: [
          ...state.cervezasEnCarro.slice(0, action.payload),
          ...state.cervezasEnCarro.slice(action.payload + 1),
        ],
      };
    case QUITAR_CERVEZA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
