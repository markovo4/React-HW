import {configureStore} from "@reduxjs/toolkit";
import listOfProductsReducer from "./reducers/listOfProducts";
import ordersReducer from './reducers/orders';
import viewOrEditReducer from './reducers/viewOrEdit'
import {loadState, saveState} from "../utils/functions/localStorage";


const persistedState = loadState();

export const store = configureStore({
    reducer: {
        listOfProducts: listOfProductsReducer,
        orders: ordersReducer,
        viewOrEdit: viewOrEditReducer,
    },
    persistedState
})

store.subscribe(() => {
    const state = store.getState().orders
    saveState(state);
});
