import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalItems: 0,
    users: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const productInCart = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (productInCart) {
        productInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems++;
    },
    updateTotalItems: (state, action) => {
      state.totalItems = action.payload;
    },

    createAccount: (state, action) => {
      state.users.push(action.payload);
    },

    /* for  future use- if i add remove cart & increment decremnet used ....
    
    removeFromCart: (state, action) => {
      const removeFromCart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      state.cart = removeFromCart;
    },
    incrementQuantity: (state, action) => {
      const productInCart = state.cart.find(
        (product) => product.id === action.payload.id
      );
      productInCart.quantity++;
    },
    decrementQuantity: (state, action) => {
      const productInCart = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (productInCart.quantity === 1) {
        const removeFromCart = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
        state.cart = removeFromCart;
      } else {
        productInCart.quantity--;
      }
    },*/
  },
});
export const { addToCart, updateTotalItems, createAccount } = cartSlice.actions;
export default cartSlice.reducer;
