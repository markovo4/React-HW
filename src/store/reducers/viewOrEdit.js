import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    view: false,
    edit: false,

}

const viewOrEditSlice = createSlice({
    name: 'viewOrEdit',
    initialState,
    reducers: {
        setView(state) {
            state.view = !state.view;
        },
        setEdit(state) {
            state.edit = !state.edit;
        }
    }
})

export const {
    setView,
    setEdit
} = viewOrEditSlice.actions;

export default viewOrEditSlice.reducer;