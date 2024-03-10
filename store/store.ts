import { configureStore } from "@reduxjs/toolkit";

import modeSlice from "./modeSlice";
import modalSlice from "./modalSlice";

export const store = configureStore({
  reducer: {
    mode: modeSlice,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
