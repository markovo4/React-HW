import {createSlice} from "@reduxjs/toolkit";
import {loadState} from "../../utils/functions/localStorage";


const persistedState = loadState() || [];

const initialState = {
    currentOrder: persistedState.currentOrder || [],
    orders: persistedState.orders || [],
};

export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addCurrentOrder(state, {payload}) {
            state.currentOrder = payload;
        },
        addToOrders(state, {payload}) {
            state.orders.push(payload);
        },
    },
});

export const {
    addCurrentOrder,
    addToOrders
} = orderSlice.actions;

export default orderSlice.reducer;
