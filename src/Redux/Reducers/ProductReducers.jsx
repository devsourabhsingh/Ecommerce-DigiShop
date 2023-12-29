import { ActionType } from "../Actions/Constant/ActionType";

const initalState = {
  products: [],
  selectedProduct: [],
  cartData: [],
};

export const productReducers = (
  state = initalState.products,
  { type, payload }
) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export const selectedProductReducers = (
  state = initalState.selectedProduct,
  { type, payload }
) => {
  switch (type) {
    case ActionType.SELECTED_PRODUCT:
      return { ...state, selectedProduct: payload };
    case ActionType.REMOVE_SELECTED_PRODUCT:
      return { ...state, selectedProduct: [] };
    default:
      return state;
  }
};

export const addToCartReducers = (state = initalState, { type, payload }) => {
  switch (type) {
    case ActionType.ADD_TO_CART:
      return {
        ...state,
        cartData: [...state.cartData, payload],
      };
    case ActionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartData: state.cartData.filter((carts) => carts.id !== payload),
      };
    case ActionType.ALL_CART_REMOVE:
      return {
        ...state,
        cartData: [],
      };
    case ActionType.INCREMENT:
      return {
        ...state,
        cartData: state.cartData.map((item) =>
          item.id === payload
            ? { ...item, count: Number(item.count || 1) + 1 }
            : item
        ),
      };
    case ActionType.DECREMENT:
      return {
        ...state,
        cartData: state.cartData.map((item) =>
          item.id === payload
            ? { ...item, count: Number(item.count || 1) - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};
