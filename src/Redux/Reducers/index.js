import { combineReducers } from "redux";
import {
  addToCartReducers,
  productReducers,
  selectedProductReducers,
} from "./ProductReducers";

const reducers = combineReducers({
  allProducts: productReducers,
  singleProduct: selectedProductReducers,
  addCart: addToCartReducers,
});
export default reducers;
