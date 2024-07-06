import {useState} from "react";
import {Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import PropTypes from "prop-types";
import styles from './orderTemplate.module.scss';

const OrderTemplate = ({productImg, productTitle, productPrice, id, addToCart}) => {
    const [itemCount, setItemCount] = useState('');

    const handleChange = (e) => {
        const {value} = e.target;
        value >= 10 ? setItemCount(10) : value <= 1 ? setItemCount(1) : setItemCount(value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (!itemCount) return;
        const amount = parseInt(itemCount);
        addToCart(amount, productTitle, productPrice, productImg)
        setItemCount(1)
    }

    return (

        <List>
            <ListItem
                sx={{display: 'flex', gap: '10px', bgcolor: 'rgba(255,255,255,0.75)'}}
                secondaryAction={
                    <IconButton
                        sx={{bgcolor: 'rgba(147,222,138,0.46)'}}
                        aria-label="add"
                        onClick={handleClick}
                        id={id}
                    >
                        <AddIcon/>
                    </IconButton>
                }>

                <ListItemAvatar>
                    <Avatar
                        sx={{width: 56, height: 56}}
                        src={productImg}>
                    </Avatar>
                </ListItemAvatar>

                <div className={styles.infoGroup}>
                    <ListItemText
                        primary={productTitle}
                    />
                    <ListItemText
                        primary={`$${productPrice}`}
                    />

                    <input
                        className={styles.amount}
                        min={1}
                        max={10}
                        type={"number"}
                        placeholder={'Choose amount'}
                        value={itemCount}
                        onChange={handleChange}
                    />
                </div>

            </ListItem>
        </List>
    )
}

OrderTemplate.propTypes = {
    productImg: PropTypes.string.isRequired,
    productTitle: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired,
}

export default OrderTemplate;