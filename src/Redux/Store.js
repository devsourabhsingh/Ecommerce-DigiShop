import { legacy_createStore } from "redux";
import reducers from "./Reducers";

const store = legacy_createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
