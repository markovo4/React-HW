import {configureStore} from "@reduxjs/toolkit";
import listOfProductsReducer from "./reducers/listOfProducts";
// import singleProductReducer from "./reducers/singleProduct";

export default configureStore({
    reducer: {
        listOfProducts: listOfProductsReducer,
        // singleProduct: singleProductReducer,
    }
})