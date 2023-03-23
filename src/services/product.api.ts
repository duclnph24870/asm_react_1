import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Product } from 'interface/product';

export const productApi = createApi({
    reducerPath: 'apiProduct',
    tagTypes: ['apiProduct'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
    }),
    endpoints: (build) => ({
        getProduct: build.query<Product[], void>({
            query: () => '/products',
            providesTags: ['apiProduct'],
        }),
        createProduct: build.mutation<Product[], Omit<Product, '_id'>>({
            query: (body) => ({
                method: 'POST',
                url: '/products',
                body,
            }),
            invalidatesTags: (result, error, body) => {
                if (error) {
                    return [];
                }
                return ['apiProduct'];
            },
        }),
        editProduct: build.mutation<Product[], { id: any; body: any }>({
            query: (body) => ({
                method: 'PUT',
                url: `/products/${body.id}`,
                body: body.body,
            }),
            invalidatesTags: (result, error, body) => {
                if (error) {
                    return [];
                }
                return ['apiProduct'];
            },
        }),
        removeProduct: build.mutation<Product[], { id: string }>({
            query: (body) => ({
                method: 'DELETE',
                url: `/products/${body.id}`,
            }),
            invalidatesTags: (result, error, body) => {
                if (error) {
                    return [];
                }
                return ['apiProduct'];
            },
        }),
    }),
});

export const { useCreateProductMutation, useGetProductQuery, useEditProductMutation, useRemoveProductMutation } =
    productApi;
