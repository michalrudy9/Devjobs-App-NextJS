import { configureStore } from "@reduxjs/toolkit";

import modeSlice from "@/store/modeSlice";
import modalSlice from "@/store/modalSlice";

export const store = configureStore({
  reducer: {
    mode: modeSlice,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
