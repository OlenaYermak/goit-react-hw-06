

import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
      searchContact(state, action) {
          console.log("Search value from action:", action.payload);
      state.name = action.payload;
    },
  },
});

export const {  searchContact } = filterSlice.actions;

export default filterSlice.reducer;

export const selectFilteredName = (state) => state.filters.name;