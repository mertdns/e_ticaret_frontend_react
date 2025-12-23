import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BasketProductType, ProductSliceType } from "../types/product";
import productData from "../data/productData.json";


const initialState: ProductSliceType = {
    Products: [],
    BasketPorducts: [],
    activeProduct: null,
    IsLoad: false,
    TotalPrice: -1,
    FilteredProducts: []
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
        deleteProductInBasket(state: ProductSliceType, action: PayloadAction<number | null>) {
            state.BasketPorducts = state.BasketPorducts.filter(el => el.id !== action.payload);
        },
        fillFilteredProducts(state: ProductSliceType, action: PayloadAction<string>) {
            // 1. Arama kalıbını (pattern) büyük/küçük harf duyarlılığı olmadan oluşturuyoruz.
            const aramaMetni = action.payload;
            const desen = new RegExp(aramaMetni, 'i');

            // el.title.search(desen) > -1 koşulu, arama sonucu -1'den büyükse (yani 0 veya pozitif indeks ise, eşleşme varsa) true döndürür.
            const yeniFiltrelenmisUrunler = state.Products.filter(el => {
                if (!el.title) {
                    return false;
                }
                return el.title.search(desen) > -1;
            });

             state.FilteredProducts = yeniFiltrelenmisUrunler;
        }
    },
})

export const { getAllProducts, addBasketProduct, getProductById, CalculateToTotalPrice, deleteProductInBasket, fillFilteredProducts } = productSlice.actions;

export default productSlice.reducer;