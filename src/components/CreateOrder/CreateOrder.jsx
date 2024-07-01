import SingleProduct from "../SingleProduct";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../../store/reducers/ActionCreators";
import styles from './createOrder.module.scss';
import ClearIcon from '@mui/icons-material/Clear';
import {
    Avatar,
    Box,
    Container,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from "@mui/material";


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
            <Container maxWidth="sm">
                <Box
                    sx={{bgcolor: '#cfe8fc'}}
                    height={'100vh'}
                >
                    <Typography sx={{mt: 4, mb: 2}} variant="h6" component="div">
                        Avatar with text and icon
                    </Typography>
                    <List>

                        <ListItem
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete">
                                    <ClearIcon/>
                                </IconButton>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar
                                    src={products.length ? products[0].image : ''}
                                >
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Single-line item"
                            />
                        </ListItem>
                    </List>
                </Box>
            </Container>
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