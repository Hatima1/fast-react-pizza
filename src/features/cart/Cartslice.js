import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    delelteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increasItem(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreasItem(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0)
        cartSlice.caseReducers.delelteItem(state, action);
    },
    clearItem(state) {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const { addItem, clearItem, delelteItem, decreasItem, increasItem } =
  cartSlice.actions;

export const gercart = (state) => state.cart.cart;

export const Totalpizza = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const Totalprice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const currentQuantety = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

