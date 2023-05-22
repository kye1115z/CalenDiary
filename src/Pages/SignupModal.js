import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import cancelLogo from "../ModalImages/cancel.png";
import successLogo from "../ModalImages/tick.png";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const SignupModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button
                onClick={handleOpen}
                className="submit_button"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Join
            </Button>
            {props.isError ? (
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className="success_img">
                            <img
                                src={successLogo}
                                height="120"
                                width="120"
                                alt="success"
                            ></img>
                        </div>
                        <div className="modal_content">
                            <Typography
                                id="modal-modal-description"
                                sx={{ mt: 2 }}
                            >
                                You have successfully registration !
                            </Typography>
                        </div>
                        <br />
                        <div className="modal_ok_button">
                            <Button onClick={handleClose}>OK, got it !</Button>
                        </div>
                    </Box>
                </Modal>
            ) : (
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className="cancel_img">
                            <img src={cancelLogo} height="60"></img>
                        </div>
                        <div className="modal_content">
                            <Typography
                                id="modal-modal-description"
                                sx={{ mt: 2 }}
                            >
                                You have entered the wrong user name or password
                            </Typography>
                        </div>
                        <br />
                        <div className="modal_ok_button">
                            <Button onClick={handleClose}>OK, got it !</Button>
                        </div>
                    </Box>
                </Modal>
            )}
        </div>
    );
};

export default SignupModal;
