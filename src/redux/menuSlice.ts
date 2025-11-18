import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  reducers: {},
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
export default menuSlice.reducer;
