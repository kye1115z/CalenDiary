import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import LoginModal from "./Pages/LoginModal";

const SignIn = () => {
    const [emailErrors, setEmailErrors] = useState(true);
    const [passwordErrors, setPasswordErrors] = useState(true);
    const [sendData, setSendData] = useState({
        email: "",
        password: "",
    });
    const [isSuccess, setIsSuccess] = useState(false);

    const navigate = useNavigate();

    const onchange = (e) => {
        setSendData({
            ...sendData,
            [e.target.name]: e.target.value,
        });
    };

    const checkEmail = (e) => {
        var regExp =
            /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
        setEmailErrors(!regExp.test(e.target.value));
    };

    const checkPassword = (e) => {
        var regExp2 =
            /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
        setPasswordErrors(!regExp2.test(e.target.value));
    };

    const validateCredentials = () => {
        // Implement your logic to validate email and password.
        // Assume successful validation and set isSuccess to true.
        setIsSuccess(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateCredentials();

        if (isSuccess) {
            navigate("/dashboard"); // Replace "/dashboard" with the desired path to your main dashboard page
        }
    };

    return (
        <>
            <ResponsiveAppBar />
            <div className="SignIn">
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="email_textfield">
                            <TextField
                                value={sendData.email}
                                label="Email"
                                required
                                name="email"
                                autoComplete="email"
                                autoFocus
                                fullWidth
                                margin="normal"
                                error={emailErrors && sendData.email !== ""}
                                onChange={(e) => {
                                    onchange(e);
                                    checkEmail(e);
                                }}
                                helperText={
                                    emailErrors && sendData.email !== ""
                                        ? "Correct email is required"
                                        : null
                                }
                            />
                        </div>
                        <div className="password_textfield">
                            <TextField
                                value={sendData.password}
                                label="Password"
                                type="password"
                                required
                                fullWidth
                                name="password"
                                autoComplete="current-password"
                                margin="normal"
                                error={
                                    passwordErrors && sendData.password !== ""
                                }
                                onChange={(e) => {
                                    onchange(e);
                                    checkPassword(e);
                                }}
                                helperText={
                                    passwordErrors && sendData.password !== ""
                                        ? "Correct password is required"
                                        : null
                                }
                            />
                        </div>

                        <LoginModal
                            isError={!emailErrors && !passwordErrors}
                            isSuccess={isSuccess}
                            validateCredentials={validateCredentials}
                            handleClose={() => setIsSuccess(false)}
                        />
                        <Button
                            className="submit_button"
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignIn;
