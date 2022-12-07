import { createSlice } from "@reduxjs/toolkit";

interface Cart {
  id: number;
  title: string;
  images: string;
  price: number;
  quantity: number;
}

const initialState = {
  cart: [] as Cart[],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: any, action) => {
      const itemInCart = state.cart.find((item: Cart) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state: any, action) => {
      const item = state.cart.find((item: Cart) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state: any, action) => {
      const item = state.cart.find((item: Cart) => item.id === action.payload);
      if (item?.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item: any) => item.id !== action.payload);
      state.cart = removeItem;
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
