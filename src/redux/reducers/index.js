import { combineReducers } from "redux";
import cervezaReducer from "./cervezaReducer";

export default combineReducers({
  cervezas: cervezaReducer,
});
