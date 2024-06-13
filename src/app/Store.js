import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice";
import usersReducer from "../features/UserSlice";

export const store = configureStore ({
    reducer: {
        cart: cartReducer,
        users: usersReducer,
    },
});
console.log("Store",store);