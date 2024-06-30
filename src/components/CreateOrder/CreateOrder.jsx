import SingleProduct from "../SingleProduct";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../../store/reducers/ActionCreators.js";

const CreateOrder = () => {
    const {products} = useSelector(state => state.listOfProducts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);

    return (
        products && products.map((item, index) => {
            return (
                <SingleProduct key={index}
                               productImg={item.image}
                               productTitle={item.title}
                               productDescription={item.description}
                               productPrice={`$${item.price}`}
                />
            )
        })
    )
}

export default CreateOrder;