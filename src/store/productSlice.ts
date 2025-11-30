import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BasketProductType, ProductSliceType } from "../types/product";
import productData from "../data/productData.json";


const initialState: ProductSliceType = {
    Products: [],
    BasketPorducts: [],
    activeProduct:null,
    IsLoad: false
}

const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        getAllProducts(state: ProductSliceType) {
            state.Products = productData;
            state.IsLoad = state.Products.length > 0 ? true : false;
        },
        getProductById(state: ProductSliceType, action: PayloadAction<number>) {
            state.activeProduct = state.Products.find(el => el.id === action.payload) || null;
        },
        addBasketProduct(state: ProductSliceType, action: PayloadAction<BasketProductType>) {
            const productIndex = state.BasketPorducts.findIndex(el => el.id === action.payload.id);
            if (productIndex != -1) {
                state.BasketPorducts[productIndex].count += action.payload.count;
            }
            else {
                state.BasketPorducts.push(action.payload);
            }
        }
    }
})

export const { getAllProducts, addBasketProduct , getProductById } = productSlice.actions;

export default productSlice.reducer;