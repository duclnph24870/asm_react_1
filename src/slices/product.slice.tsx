import { createSlice } from '@reduxjs/toolkit';
import { Product } from 'interface/product';

const initState: { products: Product[] } = {
    products: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState: initState,
    reducers: {},
});

export default productSlice.reducer;
