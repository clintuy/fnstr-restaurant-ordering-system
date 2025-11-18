import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Fuse from "fuse.js";
import { fetchMenu, MenuItem } from "../api/menuApi";

/* Async thunk to load menu from API */
export const loadMenu = createAsyncThunk("menu/load", async () => {
  return await fetchMenu();
});

/* Slice state type */
interface MenuState {
  items: MenuItem[]; // full menu
  filtered: MenuItem[]; // filtered menu (search/sort)
  status: "idle" | "loading" | "succeeded" | "failed";
}

/* Initial state */
const initialState: MenuState = {
  items: [],
  filtered: [],
  status: "idle",
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    search(state, action: PayloadAction<string>) {
      const q = action.payload.trim();
      if (!q) {
        state.filtered = state.items;
        return;
      }

      const options: import("fuse.js").IFuseOptions<MenuItem> = {
        keys: ["name", "category", "price"],
        threshold: 0.4,
      };

      const fuse = new Fuse<MenuItem>(state.items, options);
      const results = fuse.search(q);
      state.filtered = results.map((r) => r.item);
    },
    /* Sort menu by name, category, or price */
    sort(state, action: PayloadAction<"name" | "category" | "price">) {
      const key = action.payload;
      state.filtered = [...state.filtered].sort((a, b) => {
        const aVal = a[key];
        const bVal = b[key];

        // Number comparison for price
        if (typeof aVal === "number" && typeof bVal === "number") {
          return aVal - bVal;
        }

        // String comparison for name/category
        if (typeof aVal === "string" && typeof bVal === "string") {
          return aVal.localeCompare(bVal);
        }

        return 0; // fallback for undefined or mismatched types
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMenu.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        loadMenu.fulfilled,
        (state, action: PayloadAction<MenuItem[]>) => {
          // Remove duplicates by name
          const unique = Array.from(
            new Map(action.payload.map((i) => [i.name, i])).values()
          );
          state.items = unique;
          state.filtered = unique;
          state.status = "succeeded";
        }
      )
      .addCase(loadMenu.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const { search, sort } = menuSlice.actions;
export default menuSlice.reducer;
