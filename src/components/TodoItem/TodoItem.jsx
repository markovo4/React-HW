import styles from './todoItem.module.scss';
import {Button, Checkbox, FormControlLabel, FormGroup, Typography} from "@mui/material";

const TodoItem = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Typography variant="h6" component="h2">
                    <b className={styles.boldTitle}>Title</b>
                </Typography>
                <hr className={styles.separator}/>

                <Typography variant="body1" component="h2">
                    Subtitle
                </Typography>
                <hr className={styles.separator}/>

                <FormGroup>
                    <FormControlLabel control={<Checkbox color="secondary" defaultChecked/>} label="Completed"/>
                </FormGroup>
                <hr className={styles.separator}/>

                <FormGroup>
                    <Button color={'secondary'} variant={'text'}><b className={styles.bold}>View To-do</b></Button>
                </FormGroup>

                <FormGroup>
                    <Button color={'error'} variant={'text'}><b className={styles.bold}>Delete to-do</b></Button>
                </FormGroup>
            </div>
        </div>
    )
}

export default TodoItem;