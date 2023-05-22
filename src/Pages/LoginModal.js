import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import cancelLogo from "../ModalImages/cancel.png";
import successLogo from "../ModalImages/tick.png";
import { useNavigate } from "react-router-dom";

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

const LoginModal = (props) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 가져오기

    useEffect(() => {
        if (props.isSuccess) {
            setOpen(true);
        }
    }, [props.isSuccess]);

    const handleClose = () => {
        setOpen(false);
        props.handleClose(); // 팝업 닫기 핸들러 호출
    };

    const handleOK = () => {
        props.validateCredentials();
        handleClose();
        navigate("/Calendar"); // OK 버튼 클릭 시 페이지 이동 처리
    };

    return (
        <div>
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
                            />
                        </div>
                        <div className="modal_content">
                            <Typography
                                id="modal-modal-description"
                                sx={{ mt: 2 }}
                            >
                                You have successfully logged in!
                            </Typography>
                        </div>
                        <br />
                        <div className="modal_ok_button">
                            <Button onClick={handleOK} color="secondary">
                                OK, got it!
                            </Button>
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
                            <img src={cancelLogo} height="60" alt="cancel" />
                        </div>
                        <div className="modal_content">
                            <Typography
                                id="modal-modal-description"
                                sx={{ mt: 2 }}
                            >
                                You have entered the wrong username or password
                            </Typography>
                        </div>
                        <br />
                        <div className="modal_ok_button">
                            <Button onClick={handleClose} color="secondary">
                                OK, got it!
                            </Button>
                        </div>
                    </Box>
                </Modal>
            )}
        </div>
    );
};

export default LoginModal;
