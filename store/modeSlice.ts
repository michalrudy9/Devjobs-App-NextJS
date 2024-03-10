import { createSlice } from "@reduxjs/toolkit";

const initialState: { isLight: boolean } = { isLight: true };

const modeSlice = createSlice({
  name: "mode",
  initialState: initialState,
  reducers: {
    toggle: (state) => {
      state.isLight = !state.isLight;
    },
  },
});

export const { toggle } = modeSlice.actions;
export default modeSlice.reducer;
