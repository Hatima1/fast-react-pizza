import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import Cartslice from "./features/cart/Cartslice";

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: Cartslice,
  },
});

export default store;
