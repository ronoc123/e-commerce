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
} from "./action";

const initialState = {
  products: [],
  isLoading: false,
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
  singleProduct: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

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

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        fetchSingleProduct,
        updateCart,
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
