import { configureStore } from "@reduxjs/toolkit";
import { favouriteSlice } from "./slice/StoreFavourite";

export const store = configureStore({
  reducer: {
    favourite: favouriteSlice.reducer,
  },
});

export default store;
