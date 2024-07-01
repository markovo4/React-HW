import SingleProduct from "../SingleProduct";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../../store/reducers/ActionCreators";
import styles from './createOrder.module.scss';

const CreateOrder = () => {
    const {products} = useSelector(state => state.listOfProducts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);

    const handleAddItem = (id) => (amount) => {
        console.log(id, amount)
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {products && products.map((item, index) => {
                    return (
                        <SingleProduct key={index}
                                       productImg={item.image}
                                       productTitle={item.title}
                                       productDescription={item.description}
                                       productPrice={`$${item.price}`}
                                       id={item.id}
                                       addToCart={handleAddItem(item.id)}
                        />
                    )
                })}
            </div>
        </div>


    )
}

export default CreateOrder;