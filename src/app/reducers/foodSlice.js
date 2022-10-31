import { createSlice } from "@reduxjs/toolkit";
import foods from "../../utils/foods.json";

const initialState = {
  foods,
  cart: [],
};

const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {},
});

export default foodSlice.reducer;
