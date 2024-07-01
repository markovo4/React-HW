import SingleProduct from "../SingleProduct";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchProducts} from "../../store/reducers/ActionCreators";
import styles from './createOrder.module.scss';
import {Box, Button, Container, Typography} from "@mui/material";
import CreateOrderList from "../CreateOrderList";


const CreateOrder = () => {
    const {products} = useSelector(state => state.listOfProducts)
    const dispatch = useDispatch();

    const [newOrderList, setNewOrderList] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);

    const handleRemoveItem = (id) => () => {
        const updatedOrderList = newOrderList.filter((_, index) => index !== id);
        setNewOrderList(updatedOrderList);
    }

    const handleAddItem = (id) => (amount, productTitle, productPrice, productImg) => {
        const newItem = {
            id,
            amount,
            productTitle,
            productPrice,
            productImg,
        }
        const updatedListOfProducts = [...newOrderList, newItem];
        setNewOrderList(updatedListOfProducts)
        console.log(newOrderList);
    }


    return (
        <div className={styles.container}>
            <Container
                sx={{bgcolor: '#cfe8fc', height: '700px', maxWidth: '950px'}}
            >
                <Typography
                    variant="h6"
                    component="div"
                    sx={{paddingTop: '10px'}}
                >
                    Cart
                </Typography>

                <Box
                    sx={{
                        overflow: 'auto',
                        bgcolor: 'rgba(255,255,255,0.56)',
                        border: '1px solid #ccc',
                        marginBottom: '15px',
                        maxWidth: 'inherit',
                        height: '590px'
                    }}
                >
                    {newOrderList &&
                        newOrderList.map((product, index) => (
                            <CreateOrderList
                                key={index}
                                amount={product.amount}
                                title={product.productTitle}
                                price={product.productPrice}
                                img={product.productImg}
                                id={product.id}
                                handleClick={handleRemoveItem(index)}
                            />
                        ))}
                </Box>
                <div className={styles.buttonGroup}>
                    <Button
                        variant={'success'}
                    >Save Order</Button>
                    <Button
                        variant={'success'}
                    >Cancel Order</Button>
                </div>

            </Container>

            <div className={styles.wrapper}>
                {products &&
                    products.map((item, index) => (
                        <SingleProduct
                            key={index}
                            productImg={item.image}
                            productTitle={item.title}
                            productDescription={item.description}
                            productPrice={`$${item.price}`}
                            id={item.id}
                            addToCart={handleAddItem(item.id)}
                        />
                    ))}
            </div>
        </div>

    )
}

export default CreateOrder;