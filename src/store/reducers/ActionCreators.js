import {useDispatch} from "react-redux";
import {listOfProductsSlice} from "./listOfProducts.js";

export const fetchProducts = () => async (dispatch = useDispatch()) => {
    try {
        dispatch(listOfProductsSlice.actions.productsFetching());

        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        dispatch(listOfProductsSlice.actions.productsFetchingSuccess(result))

    } catch (error) {
        dispatch(listOfProductsSlice.actions.productsFetchingError(error))
    }
}