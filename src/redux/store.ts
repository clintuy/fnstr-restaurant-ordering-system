import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import cartReducer from "./cartSlice";

/* Configure Redux store with slices */
export const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
  },
});

/* Infer the `RootState` and `AppDispatch` types from the store itself */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
