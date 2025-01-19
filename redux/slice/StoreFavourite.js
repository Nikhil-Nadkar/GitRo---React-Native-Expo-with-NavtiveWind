import { createSlice } from "@reduxjs/toolkit";

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    favourite: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      state.favourite.push(action.payload);
    },
    removeFavourite: (state, action) => {
      state.favourite = state.favourite.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
