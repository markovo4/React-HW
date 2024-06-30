import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from "@mui/material";
import PropTypes from "prop-types";

function ExpandMoreIcon() {
    return null;
}

const SingleProduct = ({productImg, productTitle, productDescription, productPrice}) => {

    const imgSize = {
        backgroundSize: '200px auto',
    }
    return (
        <Card sx={{width: 300}}>
            <CardMedia
                style={imgSize}
                sx={{height: 370}}
                image={productImg}
                title={productTitle}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {productTitle}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {productPrice}
                </Typography>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
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
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
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