import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import CustomIconButton from "../UI/CustomIconButton";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BasicModal from "../UI/CustomModal/customModal.jsx";
import {setEdit, setView} from "../../store/reducers/viewOrEdit";
import {updateOrders} from "../../store/reducers/orders.js";

const ListOfOrders = () => {

    const {view, edit} = useSelector(state => state.viewOrEdit);
    const {orders} = useSelector(state => state.orders);
    const dispatch = useDispatch();


    const handleView = () => {
        dispatch(setView())
    }

    const handleDelete = (id) => () => {
        const filteredOrders = orders.filter(item => item.at(0) !== id);
        dispatch(updateOrders(filteredOrders))
    }

    const handleEdit = () => {
        dispatch(setEdit())
    }
    return (
        <TableContainer component={Paper}>
            <BasicModal
                open={view}
            />
            <BasicModal
                open={edit}
            />
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Order ID</TableCell>
                        <TableCell align="right">Created on</TableCell>
                        <TableCell align="right">Total Cost</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders && orders.map((order, index) => {
                        return (
                            <TableRow key={index}
                                      sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {order.at(0)}
                                </TableCell>
                                <TableCell align="right">{order.at(2)}</TableCell>
                                <TableCell align="right">{`$${order.at(1)}`}</TableCell>
                                <TableCell align="right" sx={{display: 'flex', gap: '20px'}}>
                                    <CustomIconButton
                                        color={'rgba(224,1,1,0.47)'}
                                        label={'delete'}
                                        handleAction={handleDelete(order.at(0))}>
                                        <DeleteIcon/>
                                    </CustomIconButton>

                                    <CustomIconButton
                                        color={'rgba(0,127,0,0.24)'}
                                        label={'edit'}
                                        handleAction={handleEdit}>
                                        <EditIcon/>
                                    </CustomIconButton>

                                    <CustomIconButton
                                        color={'rgba(0,127,253,0.13)'}
                                        label={'view'}
                                        handleAction={handleView}>
                                        <VisibilityIcon/>
                                    </CustomIconButton>

                                </TableCell>
                            </TableRow>
                        )
                    })}

                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ListOfOrders;

