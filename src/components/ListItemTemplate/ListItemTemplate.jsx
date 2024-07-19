import {Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PropTypes from "prop-types";

const ListItemTemplate = ({title, body, image}) => {
    return (
        <List>
            <ListItem
                secondaryAction={
                    <IconButton edge="end" size="large" color="success">
                        <AddShoppingCartIcon/>
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar src={image} variant="square" sx={{width: 100, height: 100}}/>
                </ListItemAvatar>
                <ListItemText
                    primary={title}
                    secondary={body}
                />
            </ListItem>
        </List>
    )
}

ListItemTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
}

export default ListItemTemplate;