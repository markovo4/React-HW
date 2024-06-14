import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import PropTypes from "prop-types";

const FormSelect = ({status, onSelect, id, view}) => {
    return (
        <FormControl fullWidth>
            <InputLabel id={id}>Status</InputLabel>
            <Select
                disabled={view}
                id={id}
                value={status}
                label="Status"
                onChange={onSelect}
            >
                <MenuItem value={'Not-Completed'}>Not-Completed</MenuItem>
                <MenuItem value={'Pending'}>Pending</MenuItem>
                <MenuItem value={'Completed'}>Completed</MenuItem>
            </Select>
        </FormControl>
    )
}

FormSelect.propTypes = {
    status: PropTypes.string.isRequired,
    onSelect: PropTypes.func,
    id: PropTypes.any.isRequired,
    view: PropTypes.any,
}
export default FormSelect;