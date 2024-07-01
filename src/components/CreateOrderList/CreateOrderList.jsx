import {Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

const CreateOrderList = ({amount, title, price, img, handleClick}) => {

    const handleDelete = () => {
        handleClick()
    }
    return (
        <List>
            <ListItem
                sx={{display: 'flex', justifyContent: 'space-evenly', bgcolor: 'white'}}
                secondaryAction={
                    <IconButton
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
                    sx={{maxWidth: '500px'}}
                    primary={title}
                />
                <ListItemText
                    sx={{textAlign: 'center', maxWidth: '100px'}}
                    primary={price}
                />
                <ListItemText
                    sx={{textAlign: 'center', maxWidth: '100px'}}
                    primary={amount}
                />
            </ListItem>
        </List>
    )
}

export default CreateOrderList;