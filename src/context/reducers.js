const reducers = (state, action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        ...state,
        items: action.payload,
      };
    case "GET_MENUS":
      return {
        ...state,
        menus: action.payload,
      };
    case "DELETE_CART_ITEM":
      return {
        ...state,
        cart: state.cart.filter(({ item_id }) => item_id !== action.payload),
      };
    case "ADD_TO_CART":
      const check = state.cart.every(({ item }) => {
        return item.item_id !== action.payload.item_id;
      });
      if (check) {
        return {
          ...state,
          cart: [...state.cart, { count: 1, item: action.payload }],
        };
      } else {
        const item = state.cart.find(
          ({ item }) => item.item_id === action.payload.item_id
        );
        item.count++;

        return {
          ...state,
          cart: [
            item,
            ...state.cart.filter(
              ({ item }) => item.item_id !== action.payload.item_id
            ),
          ],
        };
      }
    case "GET_CART_ITEM":
      return {
        ...state,
        cart: action.payload,
      };
    case "CART_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "FILTER":
      if (action.payload === -1) {
        return {
          ...state,
          filtered_items: {
            isAll: true,
            items: [],
          },
        };
      } else {
        return {
          ...state,
          filtered_items: {
            isAll: false,
            items: state.items.filter(
              (item) => item.menu_id === action.payload
            ),
          },
        };
      }
    case "SORT":
      if (state.filtered_items.items.length > 0) {
        return {
          ...state,
          filtered_items: {
            ...state.filtered_items,
            items: state.filtered_items.items.sort((a, b) =>
              a[action.payload] > b[action.payload] ? 1 : -1
            ),
          },
        };
      } else {
        return {
          ...state,
          items: state.items.sort((a, b) =>
            a[action.payload] > b[action.payload] ? 1 : -1
          ),
        };
      }
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload.loading,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default reducers;
