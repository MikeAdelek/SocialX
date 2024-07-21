import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface Product{
  category_id:string;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface CartState{
  items: Product[];
}
const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload)
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer;


// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface Product {
//   id:string;
//   title: string;
//   price:number;
//   imageUrl: string;
// }

// interface CartState {
//   items: Product[];
// }

// const initialState: CartState = {
//   items: [],
// };

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<Product>) => {
//       state.items.push(action.payload);
//     },
//     removeFromCart: (state, action: PayloadAction<string>) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//   },
// });

// export const { addToCart, removeFromCart } = cartSlice.actions

// export default cartSlice.reducer;
