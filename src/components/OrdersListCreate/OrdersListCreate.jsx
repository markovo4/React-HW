import {Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import PropTypes from "prop-types";

const OrdersListCreate = ({amount, title, price, img, handleClick}) => {

    const handleDelete = () => {
        handleClick()
    }
    return (
        <List>
            <ListItem
                sx={{display: 'flex', justifyContent: 'space-evenly', bgcolor: 'white', gap: '20px'}}
                secondaryAction={
                    handleClick && <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={handleDelete}
                    >
                        <ClearIcon/>
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar
                        sx={{width: 56, height: 56}}
                        src={img}
                    >
                    </Avatar>
                </ListItemAvatar>

                <ListItemText
                    sx={{maxWidth: '300px'}}
                    primary={title}
                />

                <ListItemText
                    sx={{textAlign: 'center', maxWidth: '70px'}}
                    primary={` Amount: ${amount.toFixed(2)}`}
                />

                <ListItemText
                    sx={{textAlign: 'center', maxWidth: '70px'}}
                    primary={`Price: ${price}`}
                />

            </ListItem>
        </List>
    )
}

OrdersListCreate.propTypes = {
    amount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
}

export default OrdersListCreate;