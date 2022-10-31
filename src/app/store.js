import { configureStore } from "@reduxjs/toolkit";
import posReducer from "./reducers/index";
import foodReducer from "./reducers/foodSlice";

export const store = configureStore({
  reducer: {
    pos: posReducer,
    foods: foodReducer,
  },
});
