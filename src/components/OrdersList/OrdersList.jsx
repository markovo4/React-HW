import {useState} from 'react';
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import CustomIconButton from "../UI/CustomIconButton";
import BasicModal from "../UI/CustomModal/customModal.jsx";
import OrdersListCreate from "../OrdersListCreate/index.js";
import OrderEditList from "../OrderEditList/index.js";
import {setEdit, setView} from "../../store/reducers/viewOrEdit";
import {addCurrentOrder, setOrderToEdit, updateOrders} from "../../store/reducers/orders.js";

const style = {
    overflow: 'auto',
    bgcolor: 'rgba(232,242,253,0.5)',
    borderRadius: '10px',
    marginBottom: '15px',
    width: '1200px',
    height: '700px'
}

const OrdersList = () => {
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const {edit, view} = useSelector(state => state.viewOrEdit);
    const {orders} = useSelector(state => state.orders);

    const [currentOrder, setCurrentOrder] = useState(null);
    const [modalType, setModalType] = useState(null);

    const handleView = (order) => () => {
        setCurrentOrder(order);
        setModalType('view');
        dispatch(setView());
    }

    const handleEdit = (order) => () => {
        setCurrentOrder(order);
        setModalType('edit');
        dispatch(setOrderToEdit(order));
        dispatch(setEdit());
    }

    const handleDelete = (id) => () => {
        const filteredOrders = orders.filter(item => item.at(0) !== id);
        dispatch(updateOrders(filteredOrders));
        enqueueSnackbar(`Order was deleted`, {variant: 'warning'})
    }

    const closeModal = () => {
        setCurrentOrder(null);
        setModalType(null);
        dispatch(setEdit(false));
        dispatch(setView(false));
        dispatch(setOrderToEdit([]))
        dispatch(addCurrentOrder([]))
    }

    return (
        <TableContainer component={Paper}>
            <BasicModal open={edit && modalType === 'edit'}
                        onClose={closeModal}
                        disableEscapeKeyDown={true}
            >
                <Box sx={style}>
                    <OrderEditList handleAction={closeModal}/>
                </Box>
            </BasicModal>
            <BasicModal open={view && modalType === 'view'}
                        onClose={closeModal}>
                <Box sx={style}>
                    {currentOrder && currentOrder.at(3).map((product, index) => (
                        <OrdersListCreate
                            key={index}
                            amount={product.amount}
                            title={product.productTitle}
                            price={product.productPrice}
                            img={product.productImg}
                            id={product.id}
                        />
                    ))}
                </Box>
            </BasicModal>
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
                    {orders && orders.map((order, index) => (
                        <TableRow key={index} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                            <TableCell component="th" scope="row">
                                {order.at(0)}
                            </TableCell>
                            <TableCell align="right">{order.at(2)}</TableCell>
                            <TableCell align="right">{`$${order.at(1)}`}</TableCell>
                            <TableCell align="right" sx={{display: 'flex', gap: '20px'}}>
                                <CustomIconButton
                                    color={'rgba(224,1,1,0.47)'}
                                    label={'delete'}
                                    handleAction={handleDelete(order.at(0))}
                                >
                                    <DeleteIcon/>
                                </CustomIconButton>
                                <CustomIconButton
                                    color={'rgba(0,127,0,0.24)'}
                                    label={'edit'}
                                    handleAction={handleEdit(order)}
                                >
                                    <EditIcon/>
                                </CustomIconButton>
                                <CustomIconButton
                                    color={'rgba(0,127,253,0.13)'}
                                    label={'view'}
                                    handleAction={handleView(order)}
                                >
                                    <VisibilityIcon/>
                                </CustomIconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default OrdersList;
