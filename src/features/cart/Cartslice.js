import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizaaID: 12,
      name: "margreta",
      quantity: 9,
      unitPrice: 12,
      totalPrice: 123,
    },
  ],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    delelteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizaaID !== action.payload);
    },
    increasItem(state, action) {
      const item = state.cart.find((item) => item.pizaaID === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreasItem(state, action) {
      const item = state.cart.find((item) => item.pizaaID === action.payload);
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

export const { addItem, clearItem, delelteItem, decreasItem, increasItem } =
  cartSlice.actions;

export default cartSlice.reducer;
export const gercart = (state) => state.cart.cart;

export const Totalpizza = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const Totalprice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const currentQuantety = (id) => (state) =>
  state.cart.cart.find((item) => item.pizaaID === id)?.quantity ?? 0;
