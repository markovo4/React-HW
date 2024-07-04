import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({open, children, disableEscapeKeyDown = false}) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(open);
    }, [open]);


    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setIsOpen(false);
        }
    };

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={handleClose}

                disableEscapeKeyDown={disableEscapeKeyDown}
            >
                <Box sx={style}>
                    {children}
                </Box>
            </Modal>
        </div>
    );
}
