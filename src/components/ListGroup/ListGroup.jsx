import {useEffect} from 'react';
import {Button, ButtonGroup, Container} from "@mui/material";
import ListItemTemplate from "../ListItemTemplate";
import {useLazyGetAllProductsQuery} from "../../redux/productsAPI/productsAPI.js";
import {useDispatch, useSelector} from "react-redux";
import {loadNext, loadPrevious} from "../../redux/slices/buttonSlice.js";

const ListGroup = () => {
    const {limit, offset} = useSelector(state => state.button);
    const dispatch = useDispatch();
    const [getProducts, {data: products, isLoading, isError}] = useLazyGetAllProductsQuery();

    useEffect(() => {
        getProducts({limit, offset});
    }, [limit, offset, getProducts]);

    const handleClickNext = () => {
        dispatch(loadNext());
        getProducts({limit, offset});
    };

    const handleClickPrev = () => {
        dispatch(loadPrevious());
        getProducts({limit, offset});
    };
    const filteredProducts = products ? products.slice(offset, offset + limit) : [];

    return (
        <Container sx={{bgcolor: 'rgba(0,0,0,0.04)', borderRadius: '10px', padding: '15px', height: '736px'}}>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error occurred.</div>}
            {products && filteredProducts.map((product, index) => (
                <ListItemTemplate
                    key={index}
                    title={product.title}
                    body={product.price}
                    image={product.image}
                />
            ))}
            <ButtonGroup sx={{
                bgcolor: 'rgba(0,0,0,0.07)',
                maxWidth: 'inherit',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5px'
            }}>
                <Button variant="contained" color="inherit" onClick={handleClickPrev}>Prev</Button>
                <Button variant="contained" color="inherit" onClick={handleClickNext}>Next</Button>
            </ButtonGroup>
        </Container>
    );
};

export default ListGroup;
