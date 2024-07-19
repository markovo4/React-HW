import {configureStore} from "@reduxjs/toolkit";
import {productsAPI} from "./productsAPI/productsAPI";
import buttonReducer from './slices/buttonSlice'

const store = configureStore({
    reducer: {
        [productsAPI.reducerPath]: productsAPI.reducer,
        button: buttonReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsAPI.middleware)
})

export default store;