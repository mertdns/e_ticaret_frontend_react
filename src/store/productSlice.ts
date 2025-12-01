import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BasketProductType, ProductSliceType, ProductType } from "../types/product";
import productData from "../data/productData.json";


const initialState: ProductSliceType = {
    Products: [],
    BasketPorducts: [],
    activeProduct: null,
    IsLoad: false,
    TotalPrice: -1
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
        },
        CalculateToTotalPrice(state: ProductSliceType, action: PayloadAction<any>) {
            state.TotalPrice = 0;
            action.payload.map((el: any) => {
                state.TotalPrice += Number(el.price.substr(1)) * el.count;
            })
        },
        deleteProductInBasket(state : ProductSliceType , action : PayloadAction<number>){
            state.BasketPorducts = state.BasketPorducts.filter(el => el.id !== action.payload);

        }
    },
})

export const { getAllProducts, addBasketProduct, getProductById, CalculateToTotalPrice, deleteProductInBasket } = productSlice.actions;

export default productSlice.reducer;