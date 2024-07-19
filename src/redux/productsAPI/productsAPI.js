import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_BASE_URL} from "../../api/api.js";

export const productsAPI = createApi({
    reducerPath: 'productsAPI',
    baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: ({limit = 5, offset = 0} = {}) => `products?limit=${limit}&offset=${offset}`,
        }),
        getProductById: builder.query({
            query: (productId = 1) => `products/${productId}`,
        })
    })
})

export const {
    useGetAllProductsQuery,
    useLazyGetAllProductsQuery,
} = productsAPI;