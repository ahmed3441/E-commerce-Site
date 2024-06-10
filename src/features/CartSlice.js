import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
        const existingItem = state.cart.find(item => item.id === action.payload.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.cart.push({ ...action.payload, quantity: 1 });
        }
      },

    clearCart: (state) => {
      state.cart = [];
    },

    removeItemFromCart: (state, action) => {
      console.log("Hello State", state);
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      console.log("Current State after removal:", state.cart);
    },

    decreaseItemFromCart: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    increaseItemFromCart: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
  },
});

export const {
  addItemToCart,
  clearCart,
  removeItemFromCart,
  decreaseItemFromCart,
  increaseItemFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
