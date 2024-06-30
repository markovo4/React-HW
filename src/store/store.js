import {configureStore} from "@reduxjs/toolkit";
import listOfProductsReducer from "./reducers/listOfProducts.js";

export default configureStore({
    reducer: {
        listOfProducts: listOfProductsReducer
    }
})