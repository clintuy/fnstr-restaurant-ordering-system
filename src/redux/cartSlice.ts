import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuItem } from "../api/menuApi";

export interface CartItem extends MenuItem {
  quantity: number;
  addons: string[];
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const { id, addons } = action.payload;
      const existing = state.items.find(
        (i) =>
          i.id === id && JSON.stringify(i.addons) === JSON.stringify(addons)
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    updateQty(
      state,
      action: PayloadAction<{ item: CartItem; quantity: number }>
    ) {
      const { item, quantity } = action.payload;
      const target = state.items.find(
        (i) =>
          i.id === item.id &&
          JSON.stringify(i.addons) === JSON.stringify(item.addons)
      );
      if (target) {
        target.quantity = quantity;
      }
    },
    removeItem(state, action: PayloadAction<CartItem>) {
      const { id, addons } = action.payload;
      state.items = state.items.filter(
        (i) =>
          i.id !== id || JSON.stringify(i.addons) !== JSON.stringify(addons)
      );
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, updateQty, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
