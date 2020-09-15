import { combineReducers } from "redux";
import vinoReducer from "./vinoReducer";

export default combineReducers({
  vinos: vinoReducer,
});
