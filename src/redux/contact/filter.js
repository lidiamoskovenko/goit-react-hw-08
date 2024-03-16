import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterNumber: (_, action) => {
      return action.payload;
    },
  },
});
export const { filterNumber } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;