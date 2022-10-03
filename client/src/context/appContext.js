import React, { useReducer, useContext } from "react";
import { useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  UPDATE_CART,
  DISPLAY_ALERT,
  CLEAR_ALERT,
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
const user = localStorage.getItem("user");
const cartItems = localStorage.getItem("cartItems");

const initialState = {
  products: [],
  isLoading: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  showAlert: false,
  cart: cartItems ? JSON.parse(cartItems) : [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
  singleProduct: [],
  isSidebarOpen: false,
  redirectLogin: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  const addCartToLocalStorage = (cart) => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  const setupUser = async ({ endPoint, currentUser, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });

    try {
      const response = await axios.post(`/api/v1/auth/${endPoint}`, {
        name: currentUser.name[0],
        email: currentUser.email[0],
        password: currentUser.password[0],
      });
      const { user, token } = response.data;

      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, alertText },
      });
      addUserToLocalStorage({ user });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
      console.log(error);
    }
    clearAlert();
  };

  const logoutUser = async () => {
    dispatch({ type: LOGOUT_USER_BEGIN });
    let url = "/auth/logout";
    try {
      await authFetch(url);
      dispatch({ type: LOGOUT_USER_SUCCESS });
      removeUserFromLocalStorage();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    let url = `/products`;
    try {
      const { data } = await authFetch(url);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSingleProduct = async (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    let url = `/products/${id}`;

    try {
      const { data } = await authFetch(url);
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const updateCart = (itemId, price, amount, image) => {
    dispatch({
      type: UPDATE_CART,
      payload: {
        id: itemId,
        price,
        amount,
        image,
      },
    });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const deleteCartItem = (id) => {
    console.log(id);
    dispatch({ type: DELETE_CART_ITEM, payload: id });
  };

  const createOrder = async () => {
    const cartInfo = state.cart;
    let url = `/order`;
    try {
      await authFetch
        .post(url, {
          shippingFee: 499,
          tax: 399,
          items: [...cartInfo],
        })
        .then((res) => {
          window.location = res.data.url;
          clearCart();
        });
      // .catch((res) => console.log(res.data.msg));
    } catch (error) {
      if (error.response.data.msg === "Unauthorized.") {
        dispatch({ type: REDIRECT_LOGIN });
      }
      console.log(error.response.data.msg);
    }
  };

  const closeLogin = () => {
    console.log("closed");
    dispatch({ type: CLOSE_LOGIN });
  };

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  useEffect(() => {
    fetchProducts();
    addCartToLocalStorage(state.cart);
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        fetchSingleProduct,
        updateCart,
        clearAlert,
        displayAlert,
        setupUser,
        logoutUser,
        createOrder,
        clearCart,
        deleteCartItem,
        openSidebar,
        closeSidebar,
        closeLogin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
