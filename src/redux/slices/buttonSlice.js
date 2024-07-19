import {createSlice} from "@reduxjs/toolkit";

export const buttonSlice = createSlice({
    name: 'button',
    initialState: {
        limit: 5,
        offset: 0,
    },
    reducers: {
        loadNext: state => {
            if (state.limit === 20) return;
            state.limit += 5;
            state.offset += 5;
        },
        loadPrevious: state => {
            if (state.limit === 5) return;
            state.limit -= 5;
            state.offset -= 5;
        }
    }
})

export const {
    loadNext,
    loadPrevious
} = buttonSlice.actions;

export default buttonSlice.reducer