import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import PropTypes from "prop-types";
import styles from './singleProduct.module.scss';
import {useState} from "react";


const SingleProduct = ({productImg, productTitle, productDescription, productPrice, id, addToCart}) => {
    const [itemCount, setItemCount] = useState('0');

    const handleChange = (e) => {
        setItemCount(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        const amount = parseInt(itemCount);
        addToCart(amount)
    }

    const imgSize = {
        backgroundSize: '200px auto',
    }
    return (
        <form>
            <Card
                sx={{width: 400}}>
                <CardMedia
                    style={imgSize}
                    sx={{height: 370}}
                    image={productImg}
                    title={productTitle}
                />
                <CardContent>
                    <Typography
                        style={{minHeight: 127}}
                        gutterBottom
                        variant="h5"
                        component="div">
                        {productTitle}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {productPrice}
                    </Typography>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMore/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>
                                About
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {productDescription}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </CardContent>
                <CardActions>
                    <div className={styles.wrapper}>
                        <input
                            className={styles.numInput}
                            placeholder={'Choose amount'}
                            type={"number"}
                            min={0}
                            max={10}
                            value={itemCount}
                            onChange={handleChange}
                        />
                        <button
                            className={styles.submitButton}
                            onClick={handleClick}
                            id={id}
                        >Add to Cart
                        </button>
                    </div>
                </CardActions>
            </Card>
        </form>
    )
}

SingleProduct.propTypes = {
    productImg: PropTypes.string.isRequired,
    productTitle: PropTypes.string.isRequired,
    productDescription: PropTypes.string.isRequired,
    productPrice: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired,
}

export default SingleProduct;