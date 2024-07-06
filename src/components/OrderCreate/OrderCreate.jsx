import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import {Box, Button, Container, List, Typography} from '@mui/material';
import {useSnackbar} from 'notistack';
import OrderTemplate from '../OrderTemplate';
import OrdersListCreate from '../OrdersListCreate';
import {fetchProducts} from '../../store/reducers/ActionCreators';
import {addCurrentOrder, addToOrders} from '../../store/reducers/orders';
import styles from './orderCreate.module.scss';
import {getFormattedDate} from "../../utils/functions/currentDate.js";


const OrderCreate = () => {
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const [currentId, setCurrentId] = useState(uuidv4());

    const {products} = useSelector((state) => state.listOfProducts);
    const {currentOrder, orders} = useSelector((state) => state.orders);


    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);

    useEffect(() => {
        setCurrentId(uuidv4())
    }, [orders])

    const handleRemoveItem = (id) => () => {
        const updatedOrderList = currentOrder.filter((_, index) => index !== id);
        dispatch(addCurrentOrder(updatedOrderList))
    }

    const handleAddItem = (id) => (amount, productTitle, productPrice, productImg) => {

        const newItem = {
            id,
            amount,
            productTitle,
            productPrice: `$${(productPrice * amount).toFixed(2)}`,
            productImg,
        };

        const updatedListOfProducts = [...currentOrder, newItem];
        dispatch(addCurrentOrder(updatedListOfProducts))
    }

    const handleAddOrder = () => {
        if (!currentOrder.length) return;

        const totalCost = currentOrder.reduce((total, item) => total + parseFloat(item.productPrice.slice(1)), 0);
        const date = getFormattedDate();
        const completedOrder = [currentId, totalCost, date, currentOrder];

        dispatch(addToOrders(completedOrder))
        dispatch(addCurrentOrder([]))
        enqueueSnackbar(` Order was added Successfully`, {variant: 'success'})
    }

    const handleCancelOrder = () => {
        if (!currentOrder.length) return;
        dispatch(addCurrentOrder([]))
        enqueueSnackbar(` Order was Canceled `, {variant: 'warning'})
    }

    return (
        <div className={styles.container}>
            <Container
                sx={{
                    bgcolor: '#cfe8fc',
                    height: '700px',
                    maxWidth: '950px',
                    borderRadius: '10px 0 0 10px',
                }}
            >
                <Typography variant="h6" sx={{paddingTop: '10px'}}>
                    NEW ORDER
                </Typography>

                <Box
                    sx={{
                        overflow: 'auto',
                        bgcolor: 'rgba(255,255,255,0.56)',
                        borderRadius: '10px',
                        marginBottom: '15px',
                        maxWidth: 'inherit',
                        height: '590px',
                    }}
                >
                    {currentOrder.map((product, index) => (
                        <OrdersListCreate
                            key={index}
                            amount={product.amount}
                            title={product.productTitle}
                            price={product.productPrice}
                            img={product.productImg}
                            id={product.id}
                            handleClick={() => handleRemoveItem(index)}
                        />
                    ))}
                </Box>

                <div className={styles.buttonGroup}>
                    <Button
                        sx={{bgcolor: 'rgba(0,127,0,0.3)'}}
                        variant={'contained'}
                        color={'success'}
                        onClick={handleAddOrder}>

                        Save Order
                    </Button>
                    <Button
                        sx={{bgcolor: 'rgba(253,0,0,0.35)'}}
                        variant={'contained'}
                        color={'error'}
                        onClick={handleCancelOrder}>

                        Cancel Order
                    </Button>
                </div>
            </Container>

            <div className={styles.wrapper}>
                <List>
                    <Box
                        sx={{
                            overflow: 'auto',
                            bgcolor: 'rgb(232,243,252)',
                            borderRadius: '10px',
                            marginBottom: '15px',
                            width: '400px',
                            height: '590px',
                        }}
                    >
                        {products.map((item, index) => (
                            <OrderTemplate
                                key={index}
                                productImg={item.image}
                                productTitle={item.title}
                                productPrice={item.price}
                                id={item.id}
                                addToCart={handleAddItem(item.id)}
                            />
                        ))}
                    </Box>
                </List>
            </div>
        </div>
    );
}

export default OrderCreate;