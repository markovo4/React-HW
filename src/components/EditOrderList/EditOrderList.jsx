import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Container, List, Typography} from "@mui/material";
import {useSnackbar} from "notistack";
import PropTypes from "prop-types";

import styles from './createOrder.module.scss';
import CreateOrderList from "../ProductList";
import SingleProduct from "../SingleProduct";
import {fetchProducts} from "../../store/reducers/ActionCreators";
import {addCurrentOrder, updateOrders} from "../../store/reducers/orders";
import {getFormattedDate} from "../../utils/functions/currentDate";

const EditOrderList = ({handleAction}) => {
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();

    const {currentOrderEdit, currentOrder, orders} = useSelector(state => state.orders);
    const {products} = useSelector(state => state.listOfProducts);
    const {edit} = useSelector(state => state.viewOrEdit);

    const currentId = currentOrderEdit.at(0);

    useEffect(() => {
        if (!edit) {
            handleAction();
        }
    }, [edit])

    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(addCurrentOrder(currentOrderEdit.at(3)))
    }, [dispatch]);

    const handleClick = () => {
        handleAction();
        enqueueSnackbar(`Changes Canceled`, {variant: 'warning'})
    }

    const handleUpdateOrder = () => {
        const totalCost = currentOrder.reduce((total, itemCost) => {
            total += parseInt(itemCost.productPrice.slice(1))
            return total
        }, 0)

        const date = getFormattedDate();
        const updatedOrder = orders.map((order) => {
            if (order.at(0) === currentId) {
                return [currentId, totalCost, date, currentOrder]
            }
            return order;
        })

        dispatch(updateOrders(updatedOrder))
        handleAction();
        enqueueSnackbar(`Changes Saved`, {variant: 'success'})
    }


    const handleRemoveItem = (id) => () => {
        const updatedOrderList = currentOrder.filter((_, index) => index !== id);
        dispatch(addCurrentOrder(updatedOrderList));
    }

    const handleAddItem = (id) => (amount, productTitle, productPrice, productImg) => {

        const newItem = {
            id,
            amount,
            productTitle,
            productPrice: `$${(productPrice * amount).toFixed(2)}`,
            productImg,
        }

        const updatedListOfProducts = [...currentOrder, newItem];
        dispatch(addCurrentOrder(updatedListOfProducts))
    }


    return (
        <div className={styles.container}>
            <Container
                sx={{
                    bgcolor: '#c6e0f5',
                    height: '700px',
                    maxWidth: '950px',
                    borderRadius: '10px 0 0 10px'
                }}>

                <Typography
                    variant="h6"
                    component="div"
                    sx={{paddingTop: '10px'}}>

                    Edit Order
                </Typography>

                <Box
                    sx={{
                        overflow: 'auto',
                        bgcolor: 'rgba(255,255,255,0.29)',
                        borderRadius: '10px',
                        marginBottom: '15px',
                        maxWidth: 'inherit',
                        height: '590px'
                    }}>

                    {currentOrder &&
                        currentOrder.map((product, index) => (
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
                        onClick={handleUpdateOrder}
                        sx={{bgcolor: 'rgba(0,127,0,0.3)'}}
                        variant={'contained'}
                        color={"success"}
                    >Save</Button>
                    <Button
                        onClick={handleClick}
                        sx={{bgcolor: 'rgba(253,0,0,0.35)'}}
                        variant={'contained'}
                        color={"error"}
                    >Cancel</Button>
                </div>

            </Container>

            <div className={styles.wrapper}>

                <List>
                    <Box sx={{
                        overflow: 'auto',
                        bgcolor: 'rgba(232,243,252,0.58)',
                        borderRadius: '10px',
                        marginBottom: '15px',
                        width: '400px',
                        height: '590px'
                    }}>


                        {products &&
                            products.map((item, index) => (
                                <SingleProduct
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
    )
}


EditOrderList.propTypes = {
    handleAction: PropTypes.func.isRequired,
}

export default EditOrderList;