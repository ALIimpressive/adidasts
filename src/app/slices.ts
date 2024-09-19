import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../types";

interface InitialState {
  product: Product[];
  basket: Product[];
  favorites: Product[];
}

const initialState: InitialState = {
  product: JSON.parse(localStorage.getItem("adi") || "[]") as Product[],
  basket: JSON.parse(localStorage.getItem("bass") || "[]") as Product[],
  favorites: JSON.parse(localStorage.getItem("favs") || "[]") as Product[],
};

const adidasSlice = createSlice({
  name: "adidas",
  initialState: initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const data = [...state.product, action.payload];
      localStorage.setItem("adi", JSON.stringify(data));
      state.product = data;
    },
    addDelete: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const newData = state.product.filter((el) => el.id !== id);
      state.product = newData;
      localStorage.setItem("adi", JSON.stringify(newData));
    },
    addDeleteBass: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const newData = state.basket.filter((el) => el.id !== id);
      state.basket = newData;
      localStorage.setItem("bass", JSON.stringify(newData));
    },
    addEdit: (state, action: PayloadAction<Product>) => {
      const seeEdit = action.payload;
      const index = state.product.findIndex((x) => x.id === seeEdit.id);
      if (index !== -1) {
        state.product[index] = seeEdit;
        localStorage.setItem("adi", JSON.stringify(state.product));
      }
    },
    addBasket: (state, action: PayloadAction<Product>) => {
      if (!state.basket.some((el: Product) => el.id == action.payload.id)) {
        state.basket.push(action.payload);
      } else {
        state.basket.splice(action.payload.id, 1);
      }
      localStorage.setItem("bass", JSON.stringify(state.basket));
    },
    addFavorite: (state, action: PayloadAction<Product>) => {
      const productId = action.payload;
      const index = state.favorites.indexOf(productId);
      if (index === -1) {
        state.favorites.push(productId);
      } else {
        state.favorites.splice(index, 1);
      }
      localStorage.setItem("favs", JSON.stringify(state.favorites));
    },
  },
});

export const {
  addProduct,
  addDelete,
  addDeleteBass,
  addEdit,
  addBasket,
  addFavorite,
} = adidasSlice.actions;
export default adidasSlice.reducer;
