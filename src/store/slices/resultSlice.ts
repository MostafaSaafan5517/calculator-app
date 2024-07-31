import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResultState {
  value: string;
}

const initialState: ResultState = {
  value: "",
};

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    displayData: (state, action: PayloadAction<string>) => {
      if (state.value === "Error") {
        state.value = action.payload;
      } else {
        if (action.payload === "") {
          state.value = "";
        } else if (action.payload === "DEL") {
          state.value = state.value.slice(0, -1);
        } else {
          state.value += action.payload;
        }
      }
    },

    calc: (state, action: PayloadAction<string>) => {
      const str: string = state.value;
      const regex: RegExp = /(\d+(?:\.0*)?\d*|\.\d+)|([+\-x/])/g;
      const matches: RegExpMatchArray | null = str.match(regex);

      if (matches === null) {
        return;
      }

      const numbers: number[] = matches
        .filter((match) => !isNaN(Number(match)))
        .map(Number);
      const symbols: string[] = matches.filter((match) => isNaN(Number(match)));

      let result: number = numbers[0];
      for (let i = 0; i < symbols.length; i++) {
        switch (symbols[i]) {
          case "+":
            result += numbers[i + 1];
            break;
          case "-":
            result -= numbers[i + 1];
            break;
          case "x":
            result *= numbers[i + 1];
            break;
          case "/":
            result /= numbers[i + 1];
            break;
          default:
            break;
        }
      }

      state.value = String(result) === "NaN" ? "Error" : String(result);
    },
  },
});

export const { displayData, calc } = resultSlice.actions;

export default resultSlice.reducer;
