import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    status: '',
    error: ''
}

export const listOfProductsSlice = createSlice({
    name: 'listOfProducts',
    initialState,
    reducers: {
        productsFetching(state) {
            state.status = 'pending';
        },
        productsFetchingSuccess(state, action) {
            state.status = 'success';
            state.error = '';
            state.products = action.payload;
        },
        productsFetchingError(state, action) {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

export default listOfProductsSlice.reducer;
