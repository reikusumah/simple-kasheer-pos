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
    removeFromCart: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    },
    addStockBuy: (state, action) => {
      const originalPrice = state.foods.foods.find(
        (item) => item.id === action.payload
      ).price;
      const incrementCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            price: item.price + originalPrice,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: incrementCart,
      };
    },
    reduceStockBuy: (state, action) => {
      const originalPrice = state.foods.foods.find(
        (item) => item.id === action.payload
      ).price;
      const decrementCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            price: item.price - originalPrice,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: decrementCart,
      };
    },
    resetAllCart: (state) => {
      return {
        ...state,
        cart: [],
      };
    },
  },
});

export const {
  addCart,
  removeFromCart,
  addStockBuy,
  reduceStockBuy,
  resetAllCart,
} = foodSlice.actions;

export default foodSlice.reducer;
