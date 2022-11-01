import { createSlice } from "@reduxjs/toolkit";
import foods from "../../utils/foods.json";

const initialState = {
  foods,
  cart: [],
};

const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload);
      const newItemCart = state.foods.foods.find(
        (item) => item.id === action.payload
      );
      if (!itemInCart) {
        return {
          ...state,
          cart: [...state.cart, newItemCart],
        };
      } else {
        return state;
      }
    },
  },
});

export const { addCart } = foodSlice.actions;

export default foodSlice.reducer;
