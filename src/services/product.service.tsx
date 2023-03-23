import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from 'interface/product';

export const productService = createApi({
    reducerPath: 'productService', // Tên field trong redux state
    tagTypes: ['product'], // những kiểu tag cho phép dùng trong product service (dùng để kiểm xoát những cái nào phải gọi api lại)
    keepUnusedDataFor: 30, // setup lại thời gian catching data (Tất cả endpoint)
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
        // đính kèm token khi gửi request lên server
        prepareHeaders: (headers) => {
            headers.set('authorization', 'Bearer ABCXYZ');
            return headers;
        },
    }),
    endpoints: (build) => ({
        getProducts: build.query<Product[], void>({
            query: () => '/test', // đuôi gắn đằng sau baseUrl
            keepUnusedDataFor: 30, // setup lại thời gian catching data (Chỉ 1 endpoint)
            providesTags(result) {
                if (result) {
                    const final = [
                        ...result.map(({ id }) => ({ type: 'product' as const, id })),
                        { type: 'product' as const, id: 'LIST' },
                    ];
                    return final;
                }

                const final = [{ type: 'product' as const, id: 'LIST' }];
                return final;
            },
        }),
        addProduct: build.mutation<Product, Omit<Product, 'id'>>({
            query: (body) => {
                return {
                    url: '/test',
                    method: 'POST',
                    body,
                };
            },
            invalidatesTags: (result, error, body) => {
                // nếu lỗi thì không render lại
                return error
                    ? []
                    : [
                          {
                              type: 'product',
                              id: 'LIST',
                          },
                      ];
            },
        }),
        editProduct: build.mutation<Product[], { id: any; body: Product }>({
            query: (body) => {
                return {
                    url: '/test',
                    method: 'PUT',
                    body,
                };
            },
            // trong trường hợp này thì getProduct sẽ gọi lại
            invalidatesTags: (result, error, data) => {
                return error
                    ? []
                    : [
                          {
                              type: 'product',
                              id: data.id,
                          },
                      ];
            },
        }),
    }),
});

export const { useGetProductsQuery, useAddProductMutation } = productService;
// Trong endpoints
// query thường dùng cho GET
// mutation dùng cho POST PUT DELETE
