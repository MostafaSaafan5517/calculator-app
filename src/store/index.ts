import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import resultReducer from "./slices/resultSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    result: resultReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
