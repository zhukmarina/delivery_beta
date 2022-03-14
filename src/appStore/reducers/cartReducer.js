import { getFromLS, removeFromLS, saveToLS } from "../../utils/localStorage";
import { ADD_ITEM, REMOVE_ITEM } from "../actions/cartActions";

const initialValues = {
  cartItems: getFromLS("cart") || [],
};

export const cartReducer = (state = initialValues, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const newCartItems = [...state.cartItems];
      const index = newCartItems.findIndex(
        (elem) => elem.id === action.payload.id
      );

      if (index === -1) {
        const newItem = { ...action.payload, count: 1 };
        saveToLS("cart", [...state.cartItems, newItem]);

        return { ...state, cartItems: [...state.cartItems, newItem] };
      }

      newCartItems[index].count = newCartItems[index].count + 1;
      saveToLS("cart", newCartItems);
      return { ...state, cartItems: newCartItems };
    }

    case REMOVE_ITEM: {
      const newCartItems = [...state.cartItems];
      const index = newCartItems.findIndex(
        (elem) => elem.id === action.payload.id
      );
      if (index === -1) {
        return { ...state };
      }

      newCartItems.splice(index, 1);
      saveToLS("cart", newCartItems);
      return { ...state, cartItems: newCartItems };
    }

    default:
      return state;
  }
};

export default cartReducer;
