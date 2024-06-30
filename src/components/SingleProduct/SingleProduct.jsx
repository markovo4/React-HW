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
import NumInput from "../UI/NumInput";

const SingleProduct = ({productImg, productTitle, productDescription, productPrice}) => {

    const imgSize = {
        backgroundSize: '200px auto',
    }
    return (
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
                <NumInput/>
            </CardActions>
        </Card>
    )
}

SingleProduct.propTypes = {
    productImg: PropTypes.string.isRequired,
    productTitle: PropTypes.string.isRequired,
    productDescription: PropTypes.string.isRequired,
    productPrice: PropTypes.string.isRequired,
}

export default SingleProduct;