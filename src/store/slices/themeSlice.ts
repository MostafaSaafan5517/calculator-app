import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  value: number;
}

const initialState: ThemeState = {
  value: 1,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      if (state.value < 3) {
        state.value += 1;
      } else {
        state.value = 1;
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
