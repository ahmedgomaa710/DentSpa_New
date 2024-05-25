import * as React from 'react';
import Box from '@mui/material/Box';
import Image from "next/image";
import Modal from '@mui/material/Modal';
import "./Modal.css"
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalError() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    d
    return (
        <div>
            <Modal
                open={true}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Image src="/images/error.png" className='error-img' alt="img error" width={300} height={300} />
                    <h2 className='text-error'> Whoops, this is embarassing. <br /> Looks like the page you were looking for wasnt found.</h2>
                </Box>
            </Modal>
        </div>
    );
}
