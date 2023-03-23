import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { productApi } from './services/product.api';
import { rtkQueryLogger } from './middleware';
import { productService } from './services/product.service';
import productSlice from './slices/productSlice';

export const store = configureStore({
    reducer: {
        product: productSlice,
        [productService.reducerPath]: productService.reducer, // thêm reducer được tạo từ productService slice
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware(getMiddleware) {
        return getMiddleware().concat(productApi.middleware);
    },
});

// optional bắt buộc khi muốn dùng refetchOnFocus và refetchOnReconnect
// setupListeners(store.dispatch);

// lấy ra store và appdispatch từ store ra
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
