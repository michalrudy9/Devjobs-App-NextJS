import { createSlice } from "@reduxjs/toolkit";

const initialState: { isShowing: boolean } = { isShowing: false };

const modalSlice = createSlice({
  name: "modalState",
  initialState: initialState,
  reducers: {
    toggle: (state) => {
      state.isShowing = !state.isShowing;
    },
  },
});

export const { toggle } = modalSlice.actions;
export default modalSlice.reducer;
