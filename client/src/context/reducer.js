import { initialState } from "./appContext";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  UPDATE_CART,
  CLEAR_ALERT,
  DISPLAY_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  LOGOUT_USER_BEGIN,
  LOGOUT_USER_SUCCESS,
  CLEAR_CART,
  DELETE_CART_ITEM,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  REDIRECT_LOGIN,
  CLOSE_LOGIN,
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

  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertText: "Please provide all values!",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return { ...state, showAlert: false, alertText: "" };
  }

  if (action.type === SETUP_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      showAlert: true,
      alertText: "Login successful redirecting...",
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === LOGOUT_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === LOGOUT_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: "",
    };
  }

  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === DELETE_CART_ITEM) {
    const { cart } = state;
    let tempCart = cart.filter((item) => item.id !== action.payload);

    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === OPEN_SIDEBAR) {
    return {
      ...state,
      isSidebarOpen: true,
    };
  }
  if (action.type === CLOSE_SIDEBAR) {
    return {
      ...state,
      isSidebarOpen: false,
    };
  }

  if (action.type === REDIRECT_LOGIN) {
    return {
      ...state,
      redirectLogin: true,
    };
  }

  if (action.type === CLOSE_LOGIN) {
    return {
      ...state,
      redirectLogin: false,
    };
  }

  throw new Error(`No actions titled : ${action.type}`);
};

export default reducer;
