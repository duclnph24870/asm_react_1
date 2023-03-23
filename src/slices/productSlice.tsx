import { createSlice } from '@reduxjs/toolkit';
import { Product } from 'interface/product';

const initState: { products: Product | null } = {
    products: null,
};

export const productSlice = createSlice({
    name: 'product',
    initialState: initState,
    reducers: {
        setProduct: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
