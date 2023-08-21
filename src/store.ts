import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/CartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
