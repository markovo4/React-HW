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
        updateOrders(state, {payload}) {
            state.orders = payload;
        }
    },
});

export const {
    addCurrentOrder,
    addToOrders,
    updateOrders
} = orderSlice.actions;

export default orderSlice.reducer;
