import {configureStore} from "@reduxjs/toolkit";
import listOfProductsReducer from "./reducers/listOfProducts";
import ordersReducer from './reducers/orders';
import {loadState, saveState} from "../utils/functions/localStorage/index.js";


const persistedState = loadState();

export const store = configureStore({
    reducer: {
        listOfProducts: listOfProductsReducer,
        orders: ordersReducer,
    },
    persistedState
})

store.subscribe(() => {
    const state = store.getState().orders
    saveState(state);
});
