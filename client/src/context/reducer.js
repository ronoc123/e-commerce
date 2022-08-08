import { initialState } from "./appContext";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  UPDATE_CART,
} from "./action";

const reducer = (state, action) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      products: action.payload,
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      singleProduct: action.payload,
    };
  }

  if (action.type === UPDATE_CART) {
    const cart = state.cart;
    let tempCart = [...cart];

    tempCart.push(action.payload);

    return {
      ...state,
      cart: tempCart,
    };
  }

  throw new Error(`No actions titled : ${action.type}`);
};

export default reducer;
