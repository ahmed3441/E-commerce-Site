import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    // quantity: 0   
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            console.log("action:::",action)
            console.log("state:::",state)
            state.cart.push(action.payload); 
             console.log("Add Item To Cart", addItemToCart)
        },

    },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
