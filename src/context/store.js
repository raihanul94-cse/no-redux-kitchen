import React from "react";
import reducers from "./reducers";

const initialState = {
  items: [
    {
      item_id: 1,
      title: "Apple Juice",
      price: 4.99,
      description: null,
      menu_id: 1,
    },
    {
      item_id: 2,
      title: "Bpple Pie",
      price: 2.99,
      description: null,
      menu_id: 2,
    },
    {
      item_id: 3,
      title: "Cpple Jam",
      price: 3.99,
      description: null,
      menu_id: 2,
    },
    {
      item_id: 4,
      title: "Dpple Jelly",
      price: 9.99,
      description: null,
      menu_id: 5,
    },
    {
      item_id: 6,
      title: "Baklava",
      price: 7.99,
      description: null,
      menu_id: 3,
    },
    {
      item_id: 7,
      title: "Xutter",
      price: 12.99,
      description: null,
      menu_id: 5,
    },
    {
      item_id: 8,
      title: "Kabab",
      price: 22.99,
      description: null,
      menu_id: 5,
    },
    {
      item_id: 9,
      title: "Sharma",
      price: 26.99,
      description: null,
      menu_id: 6,
    },
  ],
  menus: [
    { id: 1, text: "Appetiziers" },
    { id: 2, text: "Soups" },
    { id: 3, text: "Salads" },
    { id: 4, text: "Wraps" },
    { id: 5, text: "Entrees" },
    { id: 6, text: "Desserts" },
  ],
  filtered_items: { isAll: true, items: [] },
  user: {},
  cart: [],
  error: null,
  loading: false,
  message: null,
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducers, initialState);

  const getItems = () => {
    dispatch({
      type: "GET_ITEMS",
      payload: state.items,
    });
  };

  const getMenus = () => {
    dispatch({
      type: "GET_MENUS",
      payload: state.menus,
    });
  };

  const addToCart = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };

  const deleteCartItem = (item_id) => {
    dispatch({
      type: "DELETE_CART_ITEM",
      payload: item_id,
    });
  };

  const getCartItem = () => {
    dispatch({
      type: "GET_CART_ITEM",
      payload: state.cart,
    });
  };

  const filterItem = (id) => {
    dispatch({
      type: "FILTER",
      payload: id,
    });
  };

  const sortItem = (sortBy) => {
    dispatch({
      type: "SORT",
      payload: sortBy,
    });
  };

  const login = (user) => {
    dispatch({
      type: "LOGIN",
      payload: user,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        items: state.items,
        filtered_items: state.filtered_items,
        getItems,
        sortItem,
        filterItem,
        menus: state.menus,
        getMenus,
        user: state.user,
        login,
        cart: state.cart,
        getCartItem,
        addToCart,
        deleteCartItem,
        error: state.error,
        loading: state.loading,
        message: state.message,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
