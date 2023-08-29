import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      return { cartItems: [], amount: 0, total: 0 };
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (cartItem) {
        cartItem.amount = cartItem.amount + 1;
      }
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (cartItem) {
        cartItem.amount = cartItem.amount - 1;
      }
    },
  },
});

export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
